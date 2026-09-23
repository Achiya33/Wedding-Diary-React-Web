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

import { sanitizeFormData, sanitizeString } from './sanitize.js'
import { getCachedSubmissions, setCachedSubmissions } from './submissionDB.js'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ─── Submit Form ──────────────────────────────────────────────

/**
 * Submit form data to our new Node.js backend.
 * The backend handles both saving to MongoDB and sending the email.
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

  try {
    const res = await fetch(`${API_URL}/api/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ page: sanitizeString(page || 'Unknown', 50), ...sanitizedFormData }),
    })

    if (!res.ok) {
      throw new Error(`Failed to submit with status: ${res.status}`);
    }

    const data = await res.json();
    
    // Optimistically add to local cache for Admin Panel
    if (data.submission) {
      const cache = getCachedSubmissions();
      cache.unshift(data.submission);
      setCachedSubmissions(cache);
    }
    
    return true;
  } catch (err) {
    console.error('Submit error:', err);
    throw new Error('Failed to submit. Please try again.');
  }
}
