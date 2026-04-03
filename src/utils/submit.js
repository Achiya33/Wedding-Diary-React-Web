/**
 * Form Submission Handler
 *
 * Flow:
 *  1. Save to cloud database (Google Sheets via Apps Script)
 *  2. Send email notification via Formspree
 *  3. Keep localStorage copy as offline fallback
 */

import { saveToCloud, getCachedSubmissions } from './submissionDB.js'

const SUBMISSIONS_KEY = 'wd_form_submissions'

// ─── Local Storage (offline fallback) ─────────────────────────

/**
 * Get submissions from localStorage (used as fallback when cloud is unavailable).
 */
export function getSubmissions() {
  try {
    const stored = localStorage.getItem(SUBMISSIONS_KEY)
    if (stored) return JSON.parse(stored)
  } catch (e) {
    console.warn('Failed to read form submissions:', e)
  }
  return []
}

function saveSubmissionLocally(page, data) {
  const submissions = getSubmissions()
  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    page,
    data,
    timestamp: new Date().toISOString(),
    read: false,
  }
  submissions.unshift(submission)
  try {
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  } catch (e) {
    console.warn('Failed to save submission locally:', e)
  }
  return submission
}

// ─── Read / Update helpers (used by FormSubmissions admin) ─────

export function markSubmissionRead(id) {
  const submissions = getSubmissions()
  const target = submissions.find((s) => s.id === id)
  if (target) {
    target.read = true
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  }
}

export function markAllSubmissionsRead() {
  const submissions = getSubmissions()
  submissions.forEach((s) => (s.read = true))
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
}

export function deleteSubmission(id) {
  const submissions = getSubmissions().filter((s) => s.id !== id)
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  return submissions
}

export function deleteAllSubmissions() {
  localStorage.removeItem(SUBMISSIONS_KEY)
}

export function getUnreadCount() {
  return getSubmissions().filter((s) => !s.read).length
}

// ─── Submit Form ──────────────────────────────────────────────

/**
 * Submit form data:
 *  1. Save locally (instant, always works)
 *  2. Send to cloud database (Google Sheets)
 *  3. Send email via Formspree
 */
export async function submitToFormspree(endpoint, payload) {
  const { page, ...formData } = payload

  // 1. Save locally first (so we have a copy even if everything else fails)
  const submission = saveSubmissionLocally(page || 'Unknown', formData)

  // 2. Send to cloud database (fire-and-forget, don't block the user)
  saveToCloud(submission).catch(() => {
    // Cloud save failed silently — local copy is the safety net
  })

  // 3. Send email via Formspree
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
