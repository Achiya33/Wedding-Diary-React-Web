import { Router } from 'express'
import {
  getAllBlogs,
  getBlogBySlug,
  saveBlogsBatch,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// Public routes
router.get('/', getAllBlogs)
router.get('/:slug', getBlogBySlug)

// Protected Admin routes
router.post('/batch', verifyToken, saveBlogsBatch)
router.post('/', verifyToken, createBlog)
router.put('/:id', verifyToken, updateBlog)
router.delete('/:id', verifyToken, deleteBlog)

export default router
