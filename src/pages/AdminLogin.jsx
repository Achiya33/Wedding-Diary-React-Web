import React, { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

// Default master admin — SHA-256 of "Yohandeyyo@mandannena#"
const DEFAULT_ADMIN_HASH = 'cdfaf31035ecc3085574452f4da99c9eb00bb1cb847ed5095404e6be58f401b3'

const ADMINS_KEY = 'wd_admins'
const AUTH_KEY = 'wd_admin_auth'
const AUTH_USER_KEY = 'wd_admin_user'

// ─── Hashing ──────────────────────────────────────────────────
export async function sha256(message) {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// ─── Admin account helpers ────────────────────────────────────

/** Get all admin accounts: [{username, hash, role}] */
export function getAdmins() {
  try {
    const stored = localStorage.getItem(ADMINS_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  // Default: the master admin
  return [{ username: 'master', hash: DEFAULT_ADMIN_HASH, role: 'owner' }]
}

/** Save admin accounts to localStorage */
export function saveAdmins(admins) {
  localStorage.setItem(ADMINS_KEY, JSON.stringify(admins))
}

/** Verify password against all admin accounts. Returns matched username or null. */
export async function verifyPassword(password) {
  const hash = await sha256(password)
  const admins = getAdmins()

  // Always check default master hash too (can't be deleted from code)
  if (hash === DEFAULT_ADMIN_HASH) return 'master'

  const matched = admins.find((a) => a.hash === hash)
  return matched ? matched.username : null
}

/** Add a new admin account */
export async function addAdmin(username, password) {
  const admins = getAdmins()
  const exists = admins.find((a) => a.username.toLowerCase() === username.toLowerCase())
  if (exists) throw new Error('Username already exists')

  const hash = await sha256(password)
  admins.push({ username, hash, role: 'admin' })
  saveAdmins(admins)
  return admins
}

/** Remove an admin account (cannot remove master owner) */
export function removeAdmin(username) {
  const admins = getAdmins()
  const target = admins.find((a) => a.username === username)
  if (!target) throw new Error('Admin not found')
  if (target.role === 'owner') throw new Error('Cannot remove the master admin')

  const updated = admins.filter((a) => a.username !== username)
  saveAdmins(updated)
  return updated
}

/** Change password for an admin account */
export async function changePassword(username, newPassword) {
  const admins = getAdmins()
  const target = admins.find((a) => a.username === username)
  if (!target) throw new Error('Admin not found')

  target.hash = await sha256(newPassword)
  saveAdmins(admins)
  return admins
}

// ─── Session helpers ──────────────────────────────────────────

export function isAdminAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === 'true'
}

export function getLoggedInUser() {
  return sessionStorage.getItem(AUTH_USER_KEY) || 'master'
}

export function logoutAdmin() {
  sessionStorage.removeItem(AUTH_KEY)
  sessionStorage.removeItem(AUTH_USER_KEY)
}

// ─── Login Component ──────────────────────────────────────────

export default function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const matchedUser = await verifyPassword(password)
      if (matchedUser) {
        sessionStorage.setItem(AUTH_KEY, 'true')
        sessionStorage.setItem(AUTH_USER_KEY, matchedUser)
        onSuccess()
      } else {
        setError('Incorrect password')
        setPassword('')
      }
    } catch (err) {
      setError('Authentication error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative w-full max-w-md">
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7296a2]/20 via-[#7296a2]/10 to-[#7296a2]/20 blur-xl" />

        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/90 p-8 backdrop-blur-xl">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7296a2] to-[#5a7d88]">
            <Lock className="h-7 w-7 text-white" />
          </div>

          <h1 className="mt-6 text-center font-serif text-2xl tracking-[0.1em] text-white">
            ADMIN ACCESS
          </h1>
          <p className="mt-2 text-center text-sm text-gray-500">
            Enter your password to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full rounded-xl border border-gray-700 bg-gray-800 px-5 py-3.5 pr-12 text-sm text-white placeholder-gray-500 transition focus:border-[#7296a2] focus:outline-none focus:ring-2 focus:ring-[#7296a2]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-xl bg-gradient-to-r from-[#7296a2] to-[#5a7d88] px-6 py-3.5 text-sm font-medium tracking-[0.15em] text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  VERIFYING...
                </span>
              ) : (
                'UNLOCK'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
