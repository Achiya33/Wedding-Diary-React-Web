/**
 * WhatsApp Helper Utilities
 */

export function formatWhatsAppUrl(numberOrUrl, defaultMessage = "Hello Wedding Diary! I'd like to inquire about your photography services.") {
  if (!numberOrUrl) return ''

  const trimmed = String(numberOrUrl).trim()
  if (!trimmed) return ''

  // If it's already a full wa.me or whatsapp link
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }

  // Strip non-digit characters
  let cleaned = trimmed.replace(/\D/g, '')

  // Handle local Sri Lankan number format (e.g. 0771234567 -> 94771234567)
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    cleaned = '94' + cleaned.substring(1)
  }

  if (!cleaned) return ''

  const baseUrl = `https://wa.me/${cleaned}`
  return defaultMessage ? `${baseUrl}?text=${encodeURIComponent(defaultMessage)}` : baseUrl
}
