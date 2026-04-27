/**
 * Content Store — Firebase Realtime Database with local cache fallback
 * 
 * Architecture:
 *  • Primary storage: Firebase Realtime Database (syncs across all devices)
 *  • Local cache: localStorage (for instant first-load & offline fallback)
 *  • Hardcoded defaults: from src/data/ files (ultimate fallback)
 * 
 * Flow:
 *  READ:  localStorage cache → show instantly → Firebase subscription updates in background
 *  WRITE: Firebase → on success, update localStorage cache
 */

import { portfolioItems as defaultPortfolio } from '../data/portfolio.js'
import { blogPosts as defaultBlogs } from '../data/blogs.js'
import { testimonials as defaultTestimonials } from '../data/testimonials.js'
import { services as defaultServices } from '../data/services.js'
import { site as defaultSite } from '../data/site.js'
import { dbRead, dbWrite, dbSubscribe, isFirebaseConfigured } from './firebase.js'
import { sanitizeFormData } from './sanitize.js'

const PREFIX = 'wd_'
const DB_PATH = 'content'

const defaultHeroSlides = [
  '/images/home/WDM02710.webp',
  '/images/home/WDM04908.webp',
  '/images/home/_RO_3416.webp',
]

const DEFAULTS = {
  portfolio: defaultPortfolio,
  heroSlides: defaultHeroSlides,
  blogs: defaultBlogs,
  testimonials: defaultTestimonials,
  services: defaultServices,
  site: defaultSite,
}

// ─── Local Cache ──────────────────────────────────────────────

function getCached(key) {
  try {
    const stored = localStorage.getItem(PREFIX + key)
    if (stored) return JSON.parse(stored)
  } catch (e) {
    console.warn(`Failed to read cache for "${key}":`, e)
  }
  return null
}

function setCache(key, data) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(data))
  } catch (e) {
    console.warn(`Failed to write cache for "${key}":`, e)
  }
}

// ─── Content Read (Sync — from cache/defaults) ────────────────

/**
 * Get content synchronously. Returns cached data or hardcoded defaults.
 * Used for immediate render before Firebase data arrives.
 */
export function getContent(key) {
  const cached = getCached(key)
  if (cached !== null) return cached
  return DEFAULTS[key] ?? null
}

// ─── Content Write (Async — to Firebase + cache) ──────────────

/**
 * Save content to Firebase and local cache.
 * Returns true on success, throws on failure.
 */
export async function setContent(key, data) {
  // Sanitize all string values before writing
  const sanitized = sanitizeFormData(data)
  if (isFirebaseConfigured()) {
    await dbWrite(`${DB_PATH}/${key}`, sanitized)
  }
  // Always update local cache
  setCache(key, sanitized)
  return true
}

// ─── Real-time Subscription ───────────────────────────────────

/**
 * Subscribe to real-time content updates from Firebase.
 * Callback is called with the latest data whenever it changes.
 * Returns an unsubscribe function.
 */
export function subscribeToContent(key, callback) {
  if (!isFirebaseConfigured()) {
    // No Firebase — just return cached/default data once
    callback(getContent(key))
    return () => {}
  }

  return dbSubscribe(`${DB_PATH}/${key}`, (data) => {
    if (data !== null) {
      setCache(key, data) // Update local cache
      callback(data)
    } else {
      // No data in Firebase yet — use defaults
      callback(DEFAULTS[key] ?? null)
    }
  })
}

// ─── Firebase Data Loader (one-time async read) ───────────────

/**
 * Load content from Firebase (async). 
 * Falls back to cache → defaults if Firebase is unavailable.
 */
export async function loadContent(key) {
  if (isFirebaseConfigured()) {
    try {
      const data = await dbRead(`${DB_PATH}/${key}`)
      if (data !== null) {
        setCache(key, data)
        return data
      }
    } catch (e) {
      console.warn(`Firebase load failed for "${key}", using fallback`)
    }
  }
  return getContent(key)
}

// ─── Seed Defaults to Firebase ────────────────────────────────

/**
 * Upload all default content to Firebase (run once during initial setup).
 * Only writes keys that don't already exist in Firebase.
 */
export async function seedDefaults() {
  if (!isFirebaseConfigured()) return
  
  for (const key of Object.keys(DEFAULTS)) {
    const existing = await dbRead(`${DB_PATH}/${key}`)
    if (existing === null) {
      await dbWrite(`${DB_PATH}/${key}`, DEFAULTS[key])
      console.log(`Seeded default data for "${key}"`)
    }
  }
}

// ─── Legacy Compatibility ─────────────────────────────────────

/**
 * Check if a specific key has been overridden.
 */
export function hasOverride(key) {
  return getCached(key) !== null
}

/**
 * Reset a specific key to its default value.
 */
export async function resetContent(key) {
  localStorage.removeItem(PREFIX + key)
  if (isFirebaseConfigured()) {
    await dbWrite(`${DB_PATH}/${key}`, DEFAULTS[key])
  }
}

/**
 * Reset ALL content to defaults.
 */
export async function resetAllContent() {
  Object.keys(DEFAULTS).forEach((key) => {
    localStorage.removeItem(PREFIX + key)
  })
  if (isFirebaseConfigured()) {
    await dbWrite(DB_PATH, DEFAULTS)
  }
}

/**
 * Export all content as a JSON object.
 */
export function exportAllContent() {
  const data = {}
  Object.keys(DEFAULTS).forEach((key) => {
    data[key] = getContent(key)
  })
  return data
}

/**
 * Import content from a JSON object.
 */
export async function importContent(data) {
  let count = 0
  for (const key of Object.keys(DEFAULTS)) {
    if (data[key] !== undefined) {
      // setContent already sanitizes data internally
      await setContent(key, data[key])
      count++
    }
  }
  return count
}

/**
 * Download all content as a JSON file.
 */
export function downloadContentAsJSON() {
  const data = exportAllContent()
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `wedding-diary-content-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/**
 * Get approximate localStorage usage in bytes.
 */
export function getStorageUsage() {
  let total = 0
  Object.keys(DEFAULTS).forEach((key) => {
    const item = localStorage.getItem(PREFIX + key)
    if (item) {
      total += item.length * 2
    }
  })
  return total
}

/**
 * Format bytes to human-readable string.
 */
export function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

/** All content keys */
export const CONTENT_KEYS = Object.keys(DEFAULTS)
