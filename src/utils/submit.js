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

// ─── Submit Form ──────────────────────────────────────────────

/**
 * Submit form data:
 *  1. Build a submission record
 *  2. Send to cloud database (Google Sheets)
 *  3. Send email via Formspree
 */
export async function submitToFormspree(endpoint, payload) {
  const { page, ...formData } = payload

  // Build the submission record
  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    page: page || 'Unknown',
    data: formData,
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
    body: JSON.stringify(payload),
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
