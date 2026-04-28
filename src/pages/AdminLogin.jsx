import React, { useState } from 'react'
import { Lock, Eye, EyeOff, Mail } from 'lucide-react'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updatePassword,
  deleteUser,
} from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import { sanitizeEmail, sanitizeString } from '../utils/sanitize.js'

// ─── Session helpers (Firebase Auth based) ────────────────────

let _currentUser = null

// Listen for auth state changes
if (auth) {
  onAuthStateChanged(auth, (user) => {
    _currentUser = user
  })
}

export function isAdminAuthenticated() {
  return !!(auth && auth.currentUser)
}

export function getLoggedInUser() {
  return auth?.currentUser?.email || ''
}

export function getLoggedInUserDisplayName() {
  const email = auth?.currentUser?.email || ''
  return email.split('@')[0] || 'Admin'
}

export async function logoutAdmin() {
  try {
    await signOut(auth)
  } catch (err) {
    console.error('Logout error:', err)
  }
}

// ─── Admin account management ─────────────────────────────────

/**
 * Get list of admin accounts.
 * In Firebase Auth, we can't list users from client-side.
 * We store admin info in Realtime Database.
 */
import { dbRead, dbWrite } from '../utils/firebase.js'

const ADMINS_DB_PATH = 'admins'

export async function getAdmins() {
  const admins = await dbRead(ADMINS_DB_PATH)
  if (admins && Array.isArray(admins)) return admins
  // Return current user as default admin
  if (auth && auth.currentUser) {
    return [{ email: auth.currentUser.email, role: 'owner' }]
  }
  return []
}

export async function addAdmin(email, password) {
  const cleanEmail = sanitizeEmail(email)
  // We need to use the Firebase Admin SDK or a custom approach
  // For client-side, we'll store admin info in the database
  // and the user needs to be created via Firebase Console or sign-up
  const admins = await getAdmins()
  const exists = admins.find(
    (a) => a.email.toLowerCase() === cleanEmail.toLowerCase()
  )
  if (exists) throw new Error('Admin already exists')

  // Store in database
  admins.push({ email: cleanEmail, role: 'admin' })
  await dbWrite(ADMINS_DB_PATH, admins)

  return admins
}

export async function removeAdmin(email) {
  const admins = await getAdmins()
  const target = admins.find((a) => a.email === email)
  if (!target) throw new Error('Admin not found')
  if (target.role === 'owner') throw new Error('Cannot remove the owner admin')

  const updated = admins.filter((a) => a.email !== email)
  await dbWrite(ADMINS_DB_PATH, updated)
  return updated
}

export async function changePassword(newPassword) {
  if (!auth || !auth.currentUser) throw new Error('Not logged in')
  await updatePassword(auth.currentUser, newPassword)
}

// ─── Login Component ──────────────────────────────────────────

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const cleanEmail = sanitizeEmail(email)

    try {
      await signInWithEmailAndPassword(auth, cleanEmail, password)
      
      // Register as owner if first admin
      const admins = await getAdmins()
      if (admins.length === 0) {
        await dbWrite(ADMINS_DB_PATH, [{ email, role: 'owner' }])
      }
      
      onSuccess()
    } catch (err) {
      console.error('Login error:', err)
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No admin account with this email')
          break
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          setError('Incorrect password')
          break
        case 'auth/invalid-email':
          setError('Invalid email address')
          break
        case 'auth/too-many-requests':
          setError('Too many attempts. Please try again later.')
          break
        default:
          setError(err.message || 'Authentication error')
      }
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
            Sign in with your admin credentials
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Mail className="h-4 w-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin email"
                autoFocus
                className="w-full rounded-xl border border-gray-700 bg-gray-800 pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 transition focus:border-[#7296a2] focus:outline-none focus:ring-2 focus:ring-[#7296a2]/20"
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Lock className="h-4 w-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-700 bg-gray-800 pl-11 pr-12 py-3.5 text-sm text-white placeholder-gray-500 transition focus:border-[#7296a2] focus:outline-none focus:ring-2 focus:ring-[#7296a2]/20"
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
              disabled={loading || !email || !password}
              className="w-full rounded-xl bg-gradient-to-r from-[#7296a2] to-[#5a7d88] px-6 py-3.5 text-sm font-medium tracking-[0.15em] text-white transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  SIGNING IN...
                </span>
              ) : (
                'SIGN IN'
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-gray-600">
            Create admin accounts in Firebase Console → Authentication
          </p>
        </div>
      </div>
    </div>
  )
}
