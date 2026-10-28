import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { testConnection } from './config/db.js'

import authRoutes from './routes/authRoutes.js'
import portfolioRoutes from './routes/portfolioRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import inquiryRoutes from './routes/inquiryRoutes.js'
import settingsRoutes from './routes/settingsRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Security: hide Express signature & set security headers
app.disable('x-powered-by')
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

// CORS Configuration
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://localhost:5000',
].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow same-origin, server-to-server, or allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(null, true) // Fallback for custom domains if CLIENT_URL is not updated yet
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Static file serving for uploaded photos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/inquiries', inquiryRoutes)
app.use('/api/settings', settingsRoutes)
app.use('/api/upload', uploadRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Serve Frontend static build if present, or informative landing page
const possibleDistPaths = [
  path.join(__dirname, '../dist'),
  path.join(__dirname, '../frontend/dist'),
]
const distPath = possibleDistPaths.find((p) => fs.existsSync(p))

if (distPath) {
  app.use(express.static(distPath))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
      return next()
    }
    res.sendFile(path.join(distPath, 'index.html'))
  })
} else {
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
      return next()
    }
    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Wedding Diary API</title></head>
      <body style="font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 80vh; background: #0b0f19; color: #fff; margin: 0;">
        <div style="background: #111827; padding: 40px; border-radius: 16px; border: 1px solid #374151; max-width: 500px; text-align: center;">
          <h2 style="color: #7296a2; margin-top: 0;">Wedding Diary Backend is Running 🚀</h2>
          <p style="color: #9ca3af; line-height: 1.6;">You opened the <strong>Backend Server (Port ${PORT})</strong>. The React Frontend runs on <strong>Port 5173</strong>.</p>
          <div style="margin: 25px 0;">
            <a href="http://localhost:5173" style="display: block; background: #7296a2; color: #fff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; margin-bottom: 10px;">🌐 Open Website (http://localhost:5173)</a>
            <a href="http://localhost:5173/admin" style="display: block; background: #1f2937; color: #e5e7eb; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; border: 1px solid #4b5563;">🔒 Open Admin Panel (http://localhost:5173/admin)</a>
          </div>
          <p style="font-size: 13px; color: #6b7280; margin: 0;">API Health: <a href="/api/health" style="color: #7296a2;">/api/health</a></p>
        </div>
      </body>
      </html>
    `)
  })
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  })
})

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Wedding Diary Backend running on http://localhost:${PORT}`)
  await testConnection()
})
