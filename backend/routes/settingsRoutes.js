import { Router } from 'express'
import { getSettingByKey, saveSettingByKey, getAllSettings } from '../controllers/settingsController.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Public route to get site settings / hero
router.get('/', getAllSettings)
router.get('/:key', getSettingByKey)

// Protected Admin route to save
router.post('/:key', verifyToken, saveSettingByKey)

export default router
