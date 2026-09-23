import React, { useState, useEffect } from 'react'
import { UserPlus, Trash2, Key, Shield, Eye, EyeOff, Users, Save, ExternalLink } from 'lucide-react'
import { getAdmins, addAdmin, removeAdmin, changePassword, getLoggedInUser } from '../pages/AdminLogin.jsx'
import { sanitizeAdminEmail, sanitizeString } from '../utils/sanitize.js'

export default function AdminManager() {
  const [admins, setAdmins] = useState([])
  const [currentEmail] = useState(getLoggedInUser())
  const [loading, setLoading] = useState(true)

  // New admin form
  const [newEmail, setNewEmail] = useState('')
  const [addStatus, setAddStatus] = useState({ type: '', message: '' })

  // Change password form
  const [newPassword, setNewPassword] = useState('')
  const [showNewPass, setShowNewPass] = useState(false)
  const [changeStatus, setChangeStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    loadAdmins()
  }, [])

  const loadAdmins = async () => {
    try {
      const list = await getAdmins()
      setAdmins(list)
    } catch (err) {
      console.error('Failed to load admins:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddAdmin = async (e) => {
    e.preventDefault()
    if (!newEmail.trim()) return

    const cleanEmail = sanitizeAdminEmail(newEmail.trim())
    try {
      const updated = await addAdmin(cleanEmail, '')
      setAdmins(updated)
      setNewEmail('')
      setAddStatus({ type: 'success', message: `Admin "${cleanEmail}" registered!` })
      setTimeout(() => setAddStatus({ type: '', message: '' }), 3000)
    } catch (err) {
      setAddStatus({ type: 'error', message: err.message })
    }
  }

  const handleRemoveAdmin = async (email) => {
    if (!confirm(`Remove admin "${email}"? They will no longer be listed as admin.`)) return

    try {
      const updated = await removeAdmin(email)
      setAdmins(updated)
    } catch (err) {
      alert(err.message)
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    const cleanPassword = sanitizeString(newPassword.trim(), 200)
    if (!cleanPassword) return

    try {
      await changePassword(cleanPassword)
      setNewPassword('')
      setChangeStatus({ type: 'success', message: 'Password updated successfully!' })
      setTimeout(() => setChangeStatus({ type: '', message: '' }), 3000)
    } catch (err) {
      setChangeStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Admin Management</h2>
        <p className="mt-1 text-sm text-gray-400">
          Manage admin accounts. Admins are authenticated via Firebase Authentication.
        </p>
      </div>

      {/* Current admins list */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Current Admins</h3>
        </div>

        {loading ? (
          <div className="py-4 text-center text-sm text-gray-500">Loading...</div>
        ) : (
          <div className="space-y-3">
            {admins.map((admin) => (
              <div
                key={admin.email}
                className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    admin.role === 'owner'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-[#7296a2]/20 text-[#7296a2]'
                  }`}>
                    {admin.email.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {admin.email}
                      {admin.email === currentEmail && (
                        <span className="ml-2 text-[10px] rounded-full bg-[#7296a2]/20 text-[#7296a2] px-2 py-0.5">
                          YOU
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                      {admin.role === 'owner' ? '👑 Owner' : '🔑 Admin'}
                    </p>
                  </div>
                </div>

                {admin.role !== 'owner' && (
                  <button
                    onClick={() => handleRemoveAdmin(admin.email)}
                    className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                    title="Remove admin"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3">
          <p className="text-xs text-gray-500">
            <strong className="text-gray-400">Note:</strong> To create a new admin user that can log in,
            add them in{' '}
            <a
              href="https://console.firebase.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7296a2] underline inline-flex items-center gap-1"
            >
              Firebase Console <ExternalLink className="h-3 w-3" />
            </a>{' '}
            → Authentication → Users → Add user.
          </p>
        </div>
      </div>

      {/* Register admin in database */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <UserPlus className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Register Admin Email</h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Register an email as an admin in the database. The user must also be created in Firebase Console → Authentication.
        </p>

        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="e.g. editor@example.com"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
            />
          </div>

          {addStatus.message && (
            <div className={`rounded-lg px-4 py-3 text-sm ${
              addStatus.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {addStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={!newEmail.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#7296a2] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a7d88] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UserPlus className="h-4 w-4" /> Register Admin
          </button>
        </form>
      </div>

      {/* Change your password */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Key className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Change Your Password</h3>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">New Password</label>
            <div className="relative">
              <input
                type={showNewPass ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
              />
              <button
                type="button"
                onClick={() => setShowNewPass(!showNewPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showNewPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {changeStatus.message && (
            <div className={`rounded-lg px-4 py-3 text-sm ${
              changeStatus.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {changeStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={!newPassword.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#7296a2] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a7d88] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" /> Update Password
          </button>
        </form>
      </div>
    </div>
  )
}
