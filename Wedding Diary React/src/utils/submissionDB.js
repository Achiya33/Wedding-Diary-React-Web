/**
 * Cloud Submissions Database — MongoDB via Local Node API
 *
 * Architecture:
 *  • Write/Read operations point to our new MongoDB backend.
 *  • localStorage serves as an offline cache for fast initial display.
 */

import { sanitizeString } from './sanitize.js'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const CACHE_KEY = 'wd_submissions_cache'
const CACHE_TS_KEY = 'wd_submissions_cache_ts'

// ─── Local Cache ──────────────────────────────────────────────

export function getCachedSubmissions() {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    return cached ? JSON.parse(cached) : []
  } catch {
    return []
  }
}

export function setCachedSubmissions(submissions) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(submissions))
    localStorage.setItem(CACHE_TS_KEY, Date.now().toString())
  } catch {}
}

export function getCacheTimestamp() {
  return parseInt(localStorage.getItem(CACHE_TS_KEY) || '0', 10)
}

// ─── API Operations ───────────────────────────────────────────

export async function fetchFromCloud() {
  try {
    const res = await fetch(`${API_URL}/api/inquiries`);
    if (!res.ok) throw new Error('Network error');
    
    const data = await res.json();
    const submissions = data.submissions || [];
    
    // Process records: ensure virtual 'id' is present (backend provides it)
    const processed = submissions.map(sub => ({
      ...sub,
      id: sub.id || sub._id
    }));

    // Update local cache
    setCachedSubmissions(processed);

    return { submissions: processed, fromCloud: true };
  } catch (err) {
    console.error('Failed to fetch inquiries:', err);
    return { submissions: getCachedSubmissions(), fromCloud: false };
  }
}

export async function markReadInCloud(id) {
  const cleanId = sanitizeString(id, 100);

  // Update local cache immediately
  const cache = getCachedSubmissions();
  const target = cache.find((s) => s.id === cleanId);
  if (target) {
    target.read = true;
    setCachedSubmissions(cache);
  }

  try {
    await fetch(`${API_URL}/api/inquiries/${cleanId}/read`, {
      method: 'PATCH'
    });
  } catch (err) {
    console.error('Failed to mark read:', err);
  }
}

export async function markAllReadInCloud() {
  // Update local cache
  const cache = getCachedSubmissions();
  cache.forEach((s) => (s.read = true));
  setCachedSubmissions(cache);

  try {
    await fetch(`${API_URL}/api/inquiries/read-all`, {
      method: 'PATCH'
    });
  } catch (err) {
    console.error('Failed to mark all read:', err);
  }
}

export async function deleteFromCloud(id) {
  const cleanId = sanitizeString(id, 100);

  // Update local cache
  const updated = getCachedSubmissions().filter((s) => s.id !== cleanId);
  setCachedSubmissions(updated);

  try {
    await fetch(`${API_URL}/api/inquiries/${cleanId}`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.error('Failed to delete:', err);
  }
}

export async function deleteAllFromCloud() {
  setCachedSubmissions([]);

  try {
    await fetch(`${API_URL}/api/inquiries`, {
      method: 'DELETE'
    });
  } catch (err) {
    console.error('Failed to delete all:', err);
  }
}
