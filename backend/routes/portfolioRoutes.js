import { Router } from 'express'
import {
  getAllPortfolio,
  getPortfolioBySlug,
  savePortfolioBatch,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Public routes
router.get('/', getAllPortfolio)
router.get('/:slug', getPortfolioBySlug)

// Protected Admin routes
router.post('/batch', verifyToken, savePortfolioBatch)
router.post('/', verifyToken, createPortfolio)
router.put('/:id', verifyToken, updatePortfolio)
router.delete('/:id', verifyToken, deletePortfolio)

export default router
