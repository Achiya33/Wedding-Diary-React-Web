import { Router } from 'express'
import { login, getMe, changePassword, getAdmins, createAdmin, deleteAdmin } from '../controllers/authController.js'
import { verifyToken, requireOwner, createRateLimiter } from '../middleware/auth.js'

const router = Router()

const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 12,
  message: 'Too many login attempts. Please wait 15 minutes and try again.',
})

router.post('/login', loginLimiter, login)
router.get('/me', verifyToken, getMe)
router.post('/change-password', verifyToken, changePassword)
router.get('/admins', verifyToken, getAdmins)
router.post('/admins', verifyToken, requireOwner, createAdmin)
router.delete('/admins/:username', verifyToken, requireOwner, deleteAdmin)

export default router
