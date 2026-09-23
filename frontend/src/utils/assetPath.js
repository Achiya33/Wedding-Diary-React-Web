/**
 * Prepend Vite's BASE_URL to an asset path so images work
 * on both localhost (base = "/") and GitHub Pages (base = "/Wedding-Diary-React-Web/").
 *
 * Usage:  asset('/images/foo.webp')  →  "/Wedding-Diary-React-Web/images/foo.webp"
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '')   // strip trailing slash

export function asset(path) {
  if (!path) return path
  // Already absolute URL (https://…) → leave it alone
  if (path.startsWith('http')) return path
  // Ensure path starts with /
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}
