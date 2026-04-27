/**
 * Form Submission Handler
 *
 * Flow:
 *  1. Save to cloud database (Google Sheets via Apps Script)
 *  2. Send email notification via Formspree
 *
 * All submissions are stored in Google Sheets — accessible from any device.
 * localStorage is NOT used for submissions; the cloud DB is the single source of truth.
 */

import { saveToCloud } from './submissionDB.js'
import { sanitizeFormData, sanitizeString } from './sanitize.js'

// ─── Submit Form ──────────────────────────────────────────────

/**
 * Submit form data:
 *  1. Build a submission record
 *  2. Send to cloud database (Google Sheets)
 *  3. Send email via Formspree
 */
export async function submitToFormspree(endpoint, payload) {
  const { page, ...formData } = payload

  // Sanitize all form data before processing
  const sanitizedFormData = sanitizeFormData(formData, {
    name: { maxLength: 200 },
    email: { type: 'email' },
    phone: { type: 'phone' },
    groomName: { maxLength: 200 },
    brideName: { maxLength: 200 },
    message: { maxLength: 10000 },
    location: { maxLength: 500 },
    plannedDate: { maxLength: 50 },
    shootType: { maxLength: 100 },
    functionTime: { maxLength: 100 },
    referral: { maxLength: 200 },
  })

  // Build the submission record with sanitized data
  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    page: sanitizeString(page || 'Unknown', 50),
    data: sanitizedFormData,
    timestamp: new Date().toISOString(),
    read: false,
  }

  // 1. Send to cloud database (fire-and-forget, don't block the user)
  saveToCloud(submission).catch(() => {
    // Cloud save failed silently — email notification is the safety net
  })

  // 2. Send email via Formspree
  if (!endpoint || endpoint.includes('yourFormId')) {
    throw new Error(
      'Form endpoint is not configured. Update site.formspreeEndpoint in src/data/site.js'
    )
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ page: sanitizeString(page || 'Unknown', 50), ...sanitizedFormData }),
  })

  if (!res.ok) {
    let msg = 'Failed to submit'
    try {
      const data = await res.json()
      msg = data?.error || msg
    } catch (_) {
      // ignore
    }
    throw new Error(msg)
  }

  return true
}
