import { Router } from 'express'
import {
  submitInquiry,
  getInquiries,
  markAsRead,
  markAllRead,
  deleteInquiry,
  deleteAllInquiries,
} from '../controllers/inquiryController.js'
import { verifyToken, createRateLimiter } from '../middleware/auth.js'

const router = Router()

const inquiryLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: 'Too many inquiries submitted. Please try again later.',
})

// Public route to submit inquiry from contact / packages form
router.post('/', inquiryLimiter, submitInquiry)

// Protected Admin routes
router.get('/', verifyToken, getInquiries)
router.patch('/:id/read', verifyToken, markAsRead)
router.post('/mark-all-read', verifyToken, markAllRead)
router.delete('/:id', verifyToken, deleteInquiry)
router.delete('/', verifyToken, deleteAllInquiries)

export default router
