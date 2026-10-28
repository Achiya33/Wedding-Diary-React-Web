import { Router } from 'express'
import { getServices, saveServicesBatch } from '../controllers/serviceController.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Public
router.get('/', getServices)

// Protected Admin
router.post('/batch', verifyToken, saveServicesBatch)

export default router
