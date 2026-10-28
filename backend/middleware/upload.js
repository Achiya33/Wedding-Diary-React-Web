import multer from 'multer'
import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadDir = path.join(__dirname, '..', 'uploads')

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Memory storage so sharp can process before saving to disk
const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Only JPEG, PNG, and WebP images are allowed'), false)
  }
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB max file size
})

/**
 * Middleware to convert uploaded image to optimized WebP
 */
export async function processImage(req, res, next) {
  if (!req.file) return next()

  try {
    const filename = `img_${Date.now()}_${Math.round(Math.random() * 1e6)}.webp`
    const outputPath = path.join(uploadDir, filename)

    await sharp(req.file.buffer)
      .rotate() // preserve orientation
      .resize({ width: 2000, withoutEnlargement: true }) // good for 4k/retina without bloat
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath)

    // Assign accessible URL path
    req.file.savedFilename = filename
    req.file.savedUrl = `/uploads/${filename}`
    next()
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Image processing failed', error: error.message })
  }
}

/**
 * Middleware to process multiple uploaded images
 */
export async function processMultipleImages(req, res, next) {
  if (!req.files || req.files.length === 0) return next()

  try {
    req.savedFiles = []
    for (const file of req.files) {
      const filename = `img_${Date.now()}_${Math.round(Math.random() * 1e6)}.webp`
      const outputPath = path.join(uploadDir, filename)

      await sharp(file.buffer)
        .rotate()
        .resize({ width: 2000, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(outputPath)

      req.savedFiles.push({
        filename,
        url: `/uploads/${filename}`,
      })
    }
    next()
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Batch image processing failed', error: error.message })
  }
}
