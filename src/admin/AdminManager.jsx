import React, { useState, useEffect } from 'react'
import { UserPlus, Trash2, Key, Shield, Eye, EyeOff, Users, Save } from 'lucide-react'
import { getAdmins, addAdmin, removeAdmin, changePassword, getLoggedInUser } from '../pages/AdminLogin.jsx'

export default function AdminManager() {
  const [admins, setAdmins] = useState([])
  const [currentUser] = useState(getLoggedInUser())

  // New admin form
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showNewPass, setShowNewPass] = useState(false)
  const [addStatus, setAddStatus] = useState({ type: '', message: '' })

  // Change password form
  const [changeUser, setChangeUser] = useState('')
  const [changePass, setChangePass] = useState('')
  const [showChangePass, setShowChangePass] = useState(false)
  const [changeStatus, setChangeStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    setAdmins(getAdmins())
  }, [])

  const handleAddAdmin = async (e) => {
    e.preventDefault()
    if (!newUsername.trim() || !newPassword.trim()) return

    try {
      const updated = await addAdmin(newUsername.trim(), newPassword)
      setAdmins(updated)
      setNewUsername('')
      setNewPassword('')
      setAddStatus({ type: 'success', message: `Admin "${newUsername.trim()}" added!` })
      setTimeout(() => setAddStatus({ type: '', message: '' }), 3000)
    } catch (err) {
      setAddStatus({ type: 'error', message: err.message })
    }
  }

  const handleRemoveAdmin = (username) => {
    if (!confirm(`Remove admin "${username}"? They will no longer be able to log in.`)) return

    try {
      const updated = removeAdmin(username)
      setAdmins(updated)
    } catch (err) {
      alert(err.message)
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    if (!changeUser || !changePass.trim()) return

    try {
      const updated = await changePassword(changeUser, changePass)
      setAdmins(updated)
      setChangePass('')
      setChangeUser('')
      setChangeStatus({ type: 'success', message: `Password updated for "${changeUser}"!` })
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
          Manage admin accounts, add new admins, and change passwords.
        </p>
      </div>

      {/* Current admins list */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Current Admins</h3>
        </div>

        <div className="space-y-3">
          {admins.map((admin) => (
            <div
              key={admin.username}
              className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  admin.role === 'owner'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-[#7296a2]/20 text-[#7296a2]'
                }`}>
                  {admin.username.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {admin.username}
                    {admin.username === currentUser && (
                      <span className="ml-2 text-[10px] rounded-full bg-[#7296a2]/20 text-[#7296a2] px-2 py-0.5">
                        YOU
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                    {admin.role === 'owner' ? '👑 Owner (Master)' : '🔑 Admin'}
                  </p>
                </div>
              </div>

              {admin.role !== 'owner' && (
                <button
                  onClick={() => handleRemoveAdmin(admin.username)}
                  className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                  title="Remove admin"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-gray-900/50 border border-gray-700 px-4 py-3">
          <p className="text-xs text-gray-500">
            <strong className="text-gray-400">Note:</strong> The master admin (owner) cannot be
            removed. It's your failsafe account with the original password.
          </p>
        </div>
      </div>

      {/* Add new admin */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <UserPlus className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Add New Admin</h3>
        </div>

        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Username</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="e.g. editor1"
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showNewPass ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Set a strong password"
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
            disabled={!newUsername.trim() || !newPassword.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#7296a2] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a7d88] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UserPlus className="h-4 w-4" /> Add Admin
          </button>
        </form>
      </div>

      {/* Change password */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Key className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Change Password</h3>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Select Admin</label>
            <select
              value={changeUser}
              onChange={(e) => setChangeUser(e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
            >
              <option value="">Choose an admin...</option>
              {admins.map((admin) => (
                <option key={admin.username} value={admin.username}>
                  {admin.username} {admin.role === 'owner' ? '(Master)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">New Password</label>
            <div className="relative">
              <input
                type={showChangePass ? 'text' : 'password'}
                value={changePass}
                onChange={(e) => setChangePass(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 pr-10 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
              />
              <button
                type="button"
                onClick={() => setShowChangePass(!showChangePass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showChangePass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
            disabled={!changeUser || !changePass.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#7296a2] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a7d88] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" /> Update Password
          </button>
        </form>

        <div className="mt-4 rounded-lg bg-amber-500/5 border border-amber-500/20 px-4 py-3">
          <p className="text-xs text-amber-400">
            <strong>⚠ Important:</strong> If you change the master admin password here, it's stored in
            localStorage. The hardcoded original password (<code className="text-amber-300">Yohandeyyo@mandannena#</code>) will
            always work as a backup. To permanently change it, update the hash in the source code.
          </p>
        </div>
      </div>
    </div>
  )
}
