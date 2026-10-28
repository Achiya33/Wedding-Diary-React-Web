import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { pool } from '../config/db.js'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_only_fallback_secret_change_in_prod'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export async function login(req, res) {
  try {
    const { username, password } = req.body
    if (!password) {
      return res.status(400).json({ success: false, message: 'Password is required' })
    }

    let rows = []
    if (username && username.trim()) {
      const [resRows] = await pool.query('SELECT * FROM admins WHERE username = ? LIMIT 1', [username.trim()])
      rows = resRows
    } else {
      const [resRows] = await pool.query('SELECT * FROM admins ORDER BY id ASC')
      rows = resRows
    }

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' })
    }

    let matchedAdmin = null
    for (const candidate of rows) {
      const isMatch = await bcrypt.compare(password, candidate.password_hash)
      if (isMatch) {
        matchedAdmin = candidate
        break
      }
    }

    if (!matchedAdmin) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' })
    }

    const token = jwt.sign(
      { id: matchedAdmin.id, username: matchedAdmin.username, role: matchedAdmin.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      admin: {
        id: matchedAdmin.id,
        username: matchedAdmin.username,
        role: matchedAdmin.role,
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Login failed', error: error.message })
  }
}

export async function getMe(req, res) {
  try {
    const [rows] = await pool.query('SELECT id, username, role, created_at FROM admins WHERE id = ?', [req.admin.id])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Admin not found' })
    }
    return res.json({ success: true, admin: rows[0] })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch admin details', error: error.message })
  }
}

export async function changePassword(req, res) {
  try {
    const { username, currentPassword, newPassword } = req.body
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'New password must be at least 6 characters' })
    }

    const targetUsername = username || req.admin.username

    // Only owner can change another user's password without currentPassword
    if (targetUsername !== req.admin.username && req.admin.role !== 'owner') {
      return res.status(403).json({ success: false, message: 'Only the master owner can reset other admin passwords' })
    }

    const [rows] = await pool.query('SELECT * FROM admins WHERE username = ?', [targetUsername])
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Admin not found' })

    const targetAdmin = rows[0]

    // If currentPassword is provided, verify it
    if (currentPassword) {
      const isMatch = await bcrypt.compare(currentPassword, targetAdmin.password_hash)
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Current password is incorrect' })
      }
    }

    const newHash = await bcrypt.hash(newPassword, 10)
    await pool.query('UPDATE admins SET password_hash = ? WHERE id = ?', [newHash, targetAdmin.id])

    return res.json({ success: true, message: 'Password updated successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Password update failed', error: error.message })
  }
}

export async function getAdmins(req, res) {
  try {
    const [rows] = await pool.query('SELECT id, username, role, created_at FROM admins ORDER BY id ASC')
    return res.json({ success: true, data: rows })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch admin list', error: error.message })
  }
}

export async function createAdmin(req, res) {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password required' })
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' })
    }

    const cleanUser = username.trim()
    const [existing] = await pool.query('SELECT id FROM admins WHERE LOWER(username) = LOWER(?)', [cleanUser])
    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: 'Username already exists' })
    }

    // Never allow creating another 'owner' via API
    const role = 'admin'
    const hash = await bcrypt.hash(password, 10)
    const [result] = await pool.query('INSERT INTO admins (username, password_hash, role) VALUES (?, ?, ?)', [
      cleanUser,
      hash,
      role,
    ])

    return res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: { id: result.insertId, username: cleanUser, role },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create admin', error: error.message })
  }
}

export async function deleteAdmin(req, res) {
  try {
    const { username } = req.params
    const [rows] = await pool.query('SELECT * FROM admins WHERE username = ?', [username])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Admin not found' })
    }

    if (rows[0].role === 'owner') {
      return res.status(403).json({ success: false, message: 'Cannot remove the master owner admin' })
    }

    await pool.query('DELETE FROM admins WHERE id = ?', [rows[0].id])
    return res.json({ success: true, message: `Admin "${username}" removed` })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to remove admin', error: error.message })
  }
}
