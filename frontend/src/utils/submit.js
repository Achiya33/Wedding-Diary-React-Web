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
import { api } from './api.js'

// ─── Submit Form ──────────────────────────────────────────────

/**
 * Submit form data:
 *  1. Send to Backend Database (/api/inquiries)
 *  2. Fallback to Google Sheets
 *  3. Send email via Formspree if configured
 */
export async function submitToFormspree(endpoint, payload) {
  const { page, ...formData } = payload

  // 1. Send to Node.js Backend Database
  try {
    await api.submitInquiry({ page, data: formData, ...formData })
  } catch (err) {
    console.warn('Backend submission error, attempting fallback:', err)
    // Fallback: save to cloud (Google Sheets)
    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      page: page || 'Unknown',
      data: formData,
      timestamp: new Date().toISOString(),
      read: false,
    }
    saveToCloud(submission).catch(() => {})
  }

  // 2. Send email via Formspree (if endpoint exists and is not default placeholder)
  if (endpoint && !endpoint.includes('yourFormId')) {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
    } catch (e) {
      console.warn('Formspree notification error:', e)
    }
  }

  return true
}
