/**
 * Content Store — localStorage-based content management
 * Falls back to hardcoded defaults from src/data/ when no override exists.
 */

import { portfolioItems as defaultPortfolio } from '../data/portfolio.js'
import { blogPosts as defaultBlogs } from '../data/blogs.js'
import { testimonials as defaultTestimonials } from '../data/testimonials.js'
import { services as defaultServices } from '../data/services.js'
import { site as defaultSite } from '../data/site.js'

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
 * Save content for a given key to localStorage.
 */
export function setContent(key, data) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(data))
    return true
  } catch (e) {
    console.error(`Failed to save content for key "${key}":`, e)
    // Likely quota exceeded
    if (e.name === 'QuotaExceededError') {
      alert('Storage is full! Try removing some images or exporting and clearing data.')
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
