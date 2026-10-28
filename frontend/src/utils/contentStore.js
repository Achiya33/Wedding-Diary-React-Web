/**
 * Content Store — localStorage-based content management
 * Falls back to hardcoded defaults from src/data/ when no override exists.
 */

import { portfolioItems as defaultPortfolio } from '../data/portfolio.js'
import { blogPosts as defaultBlogs } from '../data/blogs.js'
import { testimonials as defaultTestimonials } from '../data/testimonials.js'
import { services as defaultServices } from '../data/services.js'
import { site as defaultSite } from '../data/site.js'
import { api } from './api.js'

const PREFIX = 'wd_'

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

/**
 * Sync content from Backend API into localStorage cache
 */
export async function syncWithBackend() {
  try {
    const [portfolioRes, blogsRes, testRes, servRes, settingsRes] = await Promise.allSettled([
      api.getPortfolio(),
      api.getBlogs(),
      api.getTestimonials(),
      api.getServices(),
      api.getAllSettings(),
    ])

    let updated = false
    if (portfolioRes.status === 'fulfilled' && Array.isArray(portfolioRes.value?.data) && portfolioRes.value.data.length > 0) {
      localStorage.setItem(PREFIX + 'portfolio', JSON.stringify(portfolioRes.value.data))
      updated = true
    }
    if (blogsRes.status === 'fulfilled' && Array.isArray(blogsRes.value?.data) && blogsRes.value.data.length > 0) {
      localStorage.setItem(PREFIX + 'blogs', JSON.stringify(blogsRes.value.data))
      updated = true
    }
    if (testRes.status === 'fulfilled' && Array.isArray(testRes.value?.data) && testRes.value.data.length > 0) {
      localStorage.setItem(PREFIX + 'testimonials', JSON.stringify(testRes.value.data))
      updated = true
    }
    if (servRes.status === 'fulfilled' && Array.isArray(servRes.value?.data) && servRes.value.data.length > 0) {
      localStorage.setItem(PREFIX + 'services', JSON.stringify(servRes.value.data))
      updated = true
    }
    if (settingsRes.status === 'fulfilled' && settingsRes.value?.data) {
      const settings = settingsRes.value.data
      if (settings.site) {
        localStorage.setItem(PREFIX + 'site', JSON.stringify(settings.site))
        updated = true
      }
      if (settings.heroSlides) {
        localStorage.setItem(PREFIX + 'heroSlides', JSON.stringify(settings.heroSlides))
        updated = true
      }
    }

    if (updated && typeof window !== 'undefined') {
      window.dispatchEvent(new Event('wd_content_sync'))
    }
  } catch (err) {
    console.warn('Backend sync note: running in local/offline fallback mode.', err)
  }
}

/**
 * Get content for a given key. Returns localStorage override if present,
 * otherwise returns the hardcoded default.
 */
export function getContent(key) {
  try {
    const stored = localStorage.getItem(PREFIX + key)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.warn(`Failed to read content for key "${key}":`, e)
  }
  return DEFAULTS[key] ?? null
}

/**
 * Save content for a given key to localStorage and sync to backend.
 */
export function setContent(key, data) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(data))
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('wd_content_sync'))
    }

    // Asynchronously push update to Backend API
    if (api.isAuthenticated()) {
      let syncPromise
      if (key === 'portfolio') {
        syncPromise = api.savePortfolioBatch(data)
      } else if (key === 'blogs') {
        syncPromise = api.saveBlogsBatch(data)
      } else if (key === 'testimonials') {
        syncPromise = api.saveTestimonials(data)
      } else if (key === 'services') {
        syncPromise = api.saveServices(data)
      } else {
        syncPromise = api.saveSetting(key, data)
      }
      syncPromise?.catch((e) => console.warn(`Failed to sync ${key} to DB:`, e))
    }
    return true
  } catch (e) {
    console.error(`Failed to save content for key "${key}":`, e)
    if (e.name === 'QuotaExceededError') {
      alert('Storage is full! Upload images through the new server instead.')
    }
    return false
  }
}

/**
 * Check if a specific key has been overridden in localStorage.
 */
export function hasOverride(key) {
  return localStorage.getItem(PREFIX + key) !== null
}

/**
 * Reset a specific key to its default value (remove override).
 */
export function resetContent(key) {
  localStorage.removeItem(PREFIX + key)
}

/**
 * Reset ALL content to defaults.
 */
export function resetAllContent() {
  Object.keys(DEFAULTS).forEach((key) => {
    localStorage.removeItem(PREFIX + key)
  })
}

/**
 * Export all content (including defaults for keys without overrides) as a JSON object.
 */
export function exportAllContent() {
  const data = {}
  Object.keys(DEFAULTS).forEach((key) => {
    data[key] = getContent(key)
  })
  return data
}

/**
 * Import content from a JSON object. Merges with defaults.
 */
export function importContent(data) {
  let count = 0
  Object.keys(DEFAULTS).forEach((key) => {
    if (data[key] !== undefined) {
      setContent(key, data[key])
      count++
    }
  })
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
      total += item.length * 2 // UTF-16 characters = 2 bytes each
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
