const SUBMISSIONS_KEY = 'wd_form_submissions'

/**
 * Get all saved form submissions from localStorage.
 * Returns an array of {id, page, data, timestamp} objects.
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

/**
 * Save a form submission locally.
 */
function saveSubmissionLocally(page, data) {
  const submissions = getSubmissions()
  submissions.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    page,
    data,
    timestamp: new Date().toISOString(),
    read: false,
  })
  try {
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  } catch (e) {
    console.warn('Failed to save submission locally:', e)
  }
}

/**
 * Mark a submission as read.
 */
export function markSubmissionRead(id) {
  const submissions = getSubmissions()
  const target = submissions.find((s) => s.id === id)
  if (target) {
    target.read = true
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  }
}

/**
 * Mark all submissions as read.
 */
export function markAllSubmissionsRead() {
  const submissions = getSubmissions()
  submissions.forEach((s) => (s.read = true))
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
}

/**
 * Delete a single submission by id.
 */
export function deleteSubmission(id) {
  const submissions = getSubmissions().filter((s) => s.id !== id)
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions))
  return submissions
}

/**
 * Delete all submissions.
 */
export function deleteAllSubmissions() {
  localStorage.removeItem(SUBMISSIONS_KEY)
}

/**
 * Get count of unread submissions.
 */
export function getUnreadCount() {
  return getSubmissions().filter((s) => !s.read).length
}

/**
 * Submit form data to Formspree AND save locally.
 */
export async function submitToFormspree(endpoint, payload) {
  // Always save locally first (so we have a copy even if email fails)
  const { page, ...formData } = payload
  saveSubmissionLocally(page || 'Unknown', formData)

  if (!endpoint || endpoint.includes('yourFormId')) {
    throw new Error('Form endpoint is not configured. Update site.formspreeEndpoint in src/data/site.js')
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
