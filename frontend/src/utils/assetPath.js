/**
 * Prepend Vite's BASE_URL or Backend SERVER_URL to an asset path so images work
 * on localhost, production servers, and GitHub Pages.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '') // strip trailing slash
const isLocalDev = typeof window !== 'undefined' && window.location.port === '5173'
const SERVER_URL = import.meta.env.VITE_SERVER_URL || (isLocalDev ? 'http://localhost:5000' : '')

export function asset(path) {
  if (!path) return path
  // Already absolute URL (https://…) or base64 data → leave it alone
  if (path.startsWith('http') || path.startsWith('data:')) return path
  // Uploaded backend images
  if (path.startsWith('/uploads')) {
    return `${SERVER_URL}${path}`
  }
  // Ensure path starts with /
  const p = path.startsWith('/') ? path : `/${path}`
  // Prevent double-prefixing if asset() was already called on this path
  if (base && p.startsWith(base + '/')) return p
  return `${base}${p}`
}
