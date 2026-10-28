import { Router } from 'express'
import { upload, processImage, processMultipleImages } from '../middleware/upload.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Upload single image (Protected)
router.post('/single', verifyToken, upload.single('image'), processImage, (req, res) => {
  if (!req.file || !req.file.savedUrl) {
    return res.status(400).json({ success: false, message: 'No file uploaded or file invalid' })
  }
  return res.json({
    success: true,
    message: 'Image uploaded and optimized to WebP successfully',
    url: req.file.savedUrl,
    filename: req.file.savedFilename,
  })
})

// Upload multiple images (Protected)
router.post('/multiple', verifyToken, upload.array('images', 30), processMultipleImages, (req, res) => {
  if (!req.savedFiles || req.savedFiles.length === 0) {
    return res.status(400).json({ success: false, message: 'No files uploaded or files invalid' })
  }
  return res.json({
    success: true,
    message: `${req.savedFiles.length} images uploaded and optimized successfully`,
    files: req.savedFiles,
  })
})

export default router
