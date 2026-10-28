import { Router } from 'express'
import { getTestimonials, saveTestimonialsBatch } from '../controllers/testimonialController.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Public
router.get('/', getTestimonials)

// Protected Admin
router.post('/batch', verifyToken, saveTestimonialsBatch)

export default router
