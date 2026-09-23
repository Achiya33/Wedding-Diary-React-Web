/**
 * Image utility — compress and convert uploaded images to base64 data URLs.
 * Optimized for site performance with aggressive compression.
 */

/**
 * Compress an image file to a smaller base64 data URL.
 * Uses a multi-step approach: resize → sharpen → compress in WebP/JPEG.
 *
 * @param {File} file — The image file to compress
 * @param {object} options — Compression options
 * @param {number} options.maxWidth — Maximum width in pixels (default 1200)
 * @param {number} options.quality — Output quality 0-1 (default 0.65)
 * @param {number} options.maxSizeKB — Target max size in KB (default 300)
 * @returns {Promise<{dataUrl: string, originalSize: number, compressedSize: number, width: number, height: number}>}
 */
export async function compressImage(file, maxWidth = 1200, quality = 0.65) {
  const originalSize = file.size

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        let { width, height } = img

        // Scale down if wider than maxWidth
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width)
          width = maxWidth
        }

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')

        // Enable image smoothing for better downscale quality
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'

        // For large downscales, use step-down approach for better quality
        if (img.width > width * 2) {
          stepDownResize(img, canvas, ctx, width, height)
        } else {
          ctx.drawImage(img, 0, 0, width, height)
        }

        // Try WebP first (much smaller), then JPEG fallback
        let dataUrl = canvas.toDataURL('image/webp', quality)
        if (!dataUrl.startsWith('data:image/webp')) {
          dataUrl = canvas.toDataURL('image/jpeg', quality)
        }

        // If still too large (>500KB), compress more aggressively
        const compressedSize = estimateBase64Size(dataUrl)
        if (compressedSize > 500 * 1024 && quality > 0.3) {
          const lowerQuality = Math.max(quality - 0.2, 0.3)
          let fallback = canvas.toDataURL('image/webp', lowerQuality)
          if (!fallback.startsWith('data:image/webp')) {
            fallback = canvas.toDataURL('image/jpeg', lowerQuality)
          }
          resolve({
            dataUrl: fallback,
            originalSize,
            compressedSize: estimateBase64Size(fallback),
            width,
            height,
          })
          return
        }

        resolve({
          dataUrl,
          originalSize,
          compressedSize,
          width,
          height,
        })
      }
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = e.target.result
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

/**
 * Step-down resize for better quality when significantly downscaling.
 * Halves the dimensions repeatedly until close to target, then final resize.
 */
function stepDownResize(img, canvas, ctx, targetW, targetH) {
  const tempCanvas = document.createElement('canvas')
  const tempCtx = tempCanvas.getContext('2d')
  let curW = img.width
  let curH = img.height

  tempCanvas.width = curW
  tempCanvas.height = curH
  tempCtx.drawImage(img, 0, 0)

  // Step down by halves
  while (curW > targetW * 2) {
    const halfW = Math.round(curW / 2)
    const halfH = Math.round(curH / 2)

    const stepCanvas = document.createElement('canvas')
    stepCanvas.width = halfW
    stepCanvas.height = halfH
    const stepCtx = stepCanvas.getContext('2d')
    stepCtx.imageSmoothingEnabled = true
    stepCtx.imageSmoothingQuality = 'high'
    stepCtx.drawImage(tempCanvas, 0, 0, curW, curH, 0, 0, halfW, halfH)

    tempCanvas.width = halfW
    tempCanvas.height = halfH
    tempCtx.drawImage(stepCanvas, 0, 0)

    curW = halfW
    curH = halfH
  }

  // Final resize to target
  ctx.drawImage(tempCanvas, 0, 0, curW, curH, 0, 0, targetW, targetH)
}

/**
 * Legacy wrapper for backward compatibility.
 * Returns just the data URL string.
 */
export async function compressImageSimple(file, maxWidth = 1200, quality = 0.65) {
  const result = await compressImage(file, maxWidth, quality)
  return result.dataUrl
}

/**
 * Estimate base64 string size in bytes.
 */
export function estimateBase64Size(base64String) {
  const base64 = base64String.split(',')[1] || base64String
  return Math.round((base64.length * 3) / 4)
}

/**
 * Format bytes to human-readable string.
 */
export function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

/**
 * Check if a string is a base64 data URL.
 */
export function isDataUrl(str) {
  return typeof str === 'string' && str.startsWith('data:')
}

/**
 * Generate a unique ID.
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

/**
 * Calculate compression ratio percentage.
 */
export function compressionRatio(originalSize, compressedSize) {
  if (!originalSize) return 0
  return Math.round((1 - compressedSize / originalSize) * 100)
}
