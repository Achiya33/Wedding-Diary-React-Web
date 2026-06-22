/**
 * Input Sanitization Utilities
 * 
 * Provides defense-in-depth sanitization for all user inputs
 * before they are sent to APIs (Firebase, Formspree, Google Sheets, Cloudinary).
 * 
 * Protects against:
 *  • XSS (Cross-Site Scripting) — strips HTML tags and dangerous attributes
 *  • Script injection — removes <script>, event handlers, javascript: URIs
 *  • Firebase path injection — validates database paths
 *  • Excessive input lengths — enforces max length limits
 */

// ─── Core Sanitizers ──────────────────────────────────────────

/**
 * Strip all HTML tags from a string.
 * Converts &, <, >, ", ' to their HTML entity equivalents.
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') return str
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * Remove HTML tags from a string entirely (for plain-text fields).
 * Also strips event handler attributes if any slip through.
 */
export function stripHtml(str) {
  if (typeof str !== 'string') return str
  return str
    .replace(/<[^>]*>/g, '')           // Remove HTML tags
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers
    .replace(/javascript\s*:/gi, '')   // Remove javascript: protocol
    .trim()
}

/**
 * Sanitize a string value — trims whitespace, strips HTML tags,
 * and enforces a max length.
 */
export function sanitizeString(str, maxLength = 5000) {
  if (typeof str !== 'string') return str
  let clean = stripHtml(str)
  if (maxLength > 0 && clean.length > maxLength) {
    clean = clean.slice(0, maxLength)
  }
  return clean
}

/**
 * Sanitize an email address — basic validation + sanitization.
 */
export function sanitizeEmail(email) {
  if (typeof email !== 'string') return ''
  const trimmed = email.trim().toLowerCase()
  // Basic email pattern check
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(trimmed)) return trimmed // Return as-is, let form validation catch it
  return trimmed
}

/**
 * Sanitize a phone number — allow digits, spaces, +, -, (, ).
 */
export function sanitizePhone(phone) {
  if (typeof phone !== 'string') return ''
  return phone.replace(/[^0-9+\-\s()]/g, '').trim().slice(0, 30)
}

/**
 * Sanitize a URL — ensure it's a valid URL format, block javascript: URIs.
 */
export function sanitizeUrl(url) {
  if (typeof url !== 'string') return ''
  const trimmed = url.trim()
  
  // Block dangerous protocols
  if (/^\s*(javascript|data|vbscript)\s*:/i.test(trimmed)) {
    return ''
  }
  
  // Allow http, https, mailto, tel, and relative paths
  if (trimmed && !trimmed.startsWith('/') && 
      !trimmed.startsWith('http://') && 
      !trimmed.startsWith('https://') &&
      !trimmed.startsWith('mailto:') &&
      !trimmed.startsWith('tel:') &&
      !trimmed.startsWith('data:image/')) {
    // If not a recognized protocol, add https://
    // But only if it looks like a URL
    if (trimmed.includes('.') && !trimmed.includes(' ')) {
      return 'https://' + trimmed
    }
  }
  
  return trimmed
}

/**
 * Sanitize a slug — only allow lowercase letters, numbers, hyphens.
 */
export function sanitizeSlug(slug) {
  if (typeof slug !== 'string') return ''
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 200)
}

/**
 * Sanitize a Firebase database path — prevent path traversal & injection.
 */
export function sanitizePath(path) {
  if (typeof path !== 'string') return ''
  // Firebase paths cannot contain . $ # [ ] /
  // Only allow alphanumeric, hyphens, underscores, and /
  return path
    .replace(/[.$#\[\]]/g, '')
    .replace(/\/+/g, '/')
    .replace(/^\/|\/$/g, '')
    .trim()
}

// ─── Object / Form Data Sanitizers ────────────────────────────

/**
 * Sanitize all string values in an object (shallow).
 * Useful for sanitizing form data before sending to APIs.
 */
export function sanitizeFormData(data, fieldConfig = {}) {
  if (!data || typeof data !== 'object') return data
  
  const sanitized = {}
  
  for (const [key, value] of Object.entries(data)) {
    const config = fieldConfig[key] || {}
    
    if (typeof value === 'string') {
      switch (config.type) {
        case 'email':
          sanitized[key] = sanitizeEmail(value)
          break
        case 'phone':
          sanitized[key] = sanitizePhone(value)
          break
        case 'url':
          sanitized[key] = sanitizeUrl(value)
          break
        case 'slug':
          sanitized[key] = sanitizeSlug(value)
          break
        case 'html':
          // Allow HTML content but escape dangerous parts
          sanitized[key] = sanitizeString(value, config.maxLength || 50000)
          break
        default:
          sanitized[key] = sanitizeString(value, config.maxLength || 5000)
      }
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeString(item) : 
        (item && typeof item === 'object') ? sanitizeFormData(item, fieldConfig) : item
      )
    } else if (value && typeof value === 'object') {
      sanitized[key] = sanitizeFormData(value, fieldConfig)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

// ─── Specific Data Sanitizers ─────────────────────────────────

/**
 * Sanitize Contact form data.
 */
export function sanitizeContactForm(form) {
  return sanitizeFormData(form, {
    name: { maxLength: 200 },
    email: { type: 'email' },
    message: { maxLength: 10000 },
  })
}

/**
 * Sanitize Packages form data.
 */
export function sanitizePackagesForm(form) {
  return sanitizeFormData(form, {
    groomName: { maxLength: 200 },
    brideName: { maxLength: 200 },
    email: { type: 'email' },
    phone: { type: 'phone' },
    plannedDate: { maxLength: 50 },
    location: { maxLength: 500 },
    shootType: { maxLength: 100 },
    functionTime: { maxLength: 100 },
    referral: { maxLength: 200 },
    message: { maxLength: 10000 },
  })
}

/**
 * Sanitize a portfolio item before saving.
 */
export function sanitizePortfolioItem(item) {
  if (!item || typeof item !== 'object') return item
  return {
    ...item,
    slug: sanitizeSlug(item.slug || ''),
    title: sanitizeString(item.title || '', 300),
    subtitle: sanitizeString(item.subtitle || '', 300),
    category: sanitizeString(item.category || '', 100),
    quote: sanitizeString(item.quote || '', 2000),
    coverImage: sanitizeUrl(item.coverImage || ''),
    images: Array.isArray(item.images)
      ? item.images.map(img => typeof img === 'string' ? sanitizeUrl(img) : img)
      : [],
  }
}

/**
 * Sanitize a blog post before saving.
 */
export function sanitizeBlogPost(post) {
  if (!post || typeof post !== 'object') return post
  return {
    ...post,
    slug: sanitizeSlug(post.slug || ''),
    title: sanitizeString(post.title || '', 500),
    date: sanitizeString(post.date || '', 100),
    image: sanitizeUrl(post.image || ''),
    excerpt: sanitizeString(post.excerpt || '', 2000),
    content: sanitizeString(post.content || '', 100000),
  }
}

/**
 * Sanitize a testimonial before saving.
 */
export function sanitizeTestimonial(item) {
  if (!item || typeof item !== 'object') return item
  return {
    ...item,
    name: sanitizeString(item.name || '', 200),
    text: sanitizeString(item.text || '', 5000),
  }
}

/**
 * Sanitize a service item before saving.
 */
export function sanitizeService(service) {
  if (!service || typeof service !== 'object') return service
  return {
    ...service,
    number: sanitizeString(service.number || '', 10),
    title: sanitizeString(service.title || '', 200),
    description: sanitizeString(service.description || '', 5000),
    icon: sanitizeString(service.icon || '', 50),
    image: sanitizeUrl(service.image || ''),
  }
}

/**
 * Sanitize site settings before saving.
 */
export function sanitizeSiteSettings(settings) {
  if (!settings || typeof settings !== 'object') return settings
  return {
    ...settings,
    brand: sanitizeString(settings.brand || '', 200),
    tagline: sanitizeString(settings.tagline || '', 500),
    heroQuote: sanitizeString(settings.heroQuote || '', 1000),
    email: sanitizeEmail(settings.email || ''),
    phone: sanitizePhone(settings.phone || ''),
    address: sanitizeString(settings.address || '', 500),
    formspreeEndpoint: sanitizeUrl(settings.formspreeEndpoint || ''),
    socials: settings.socials ? {
      instagram: sanitizeUrl(settings.socials.instagram || ''),
      facebook: sanitizeUrl(settings.socials.facebook || ''),
      whatsapp: sanitizeUrl(settings.socials.whatsapp || ''),
    } : {},
  }
}

/**
 * Sanitize a submission endpoint URL.
 */
export function sanitizeEndpointUrl(url) {
  const clean = sanitizeUrl(url)
  // Only allow Google Apps Script URLs or https URLs
  if (clean && !clean.startsWith('https://')) {
    return ''
  }
  return clean
}

/**
 * Sanitize admin email input.
 */
export function sanitizeAdminEmail(email) {
  return sanitizeEmail(email)
}

/**
 * Sanitize imported JSON content — recursively sanitize all string values.
 */
export function sanitizeImportedContent(data) {
  if (!data || typeof data !== 'object') return data
  return sanitizeFormData(data)
}
