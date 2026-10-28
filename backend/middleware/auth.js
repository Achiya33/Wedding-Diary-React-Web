import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.warn('⚠️ WARNING: JWT_SECRET is not set in .env! Using fallback development secret.')
}
const SECRET_KEY = JWT_SECRET || 'dev_only_fallback_secret_change_in_prod'

export function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' })
  }

  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.admin = decoded
    next()
  } catch (error) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token.' })
  }
}

export function requireOwner(req, res, next) {
  if (!req.admin || req.admin.role !== 'owner') {
    return res.status(403).json({ success: false, message: 'Forbidden. Only the master owner can perform this action.' })
  }
  next()
}

/**
 * Simple in-memory sliding window rate limiter
 */
export function createRateLimiter({ windowMs = 15 * 60 * 1000, max = 15, message = 'Too many requests, please try again later.' } = {}) {
  const hits = new Map()

  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown'
    const now = Date.now()
    const record = hits.get(ip) || []
    const recent = record.filter((ts) => now - ts < windowMs)

    if (recent.length >= max) {
      return res.status(429).json({ success: false, message })
    }

    recent.push(now)
    hits.set(ip, recent)
    next()
  }
}
