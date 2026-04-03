import React, { useState, useEffect, useCallback } from 'react'
import {
  Mail,
  MailOpen,
  Trash2,
  CheckCheck,
  Package,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Phone,
  MapPin,
  Camera,
  Clock,
  Share2,
  AlertCircle,
  Inbox,
} from 'lucide-react'
import {
  getSubmissions,
  markSubmissionRead,
  markAllSubmissionsRead,
  deleteSubmission,
  deleteAllSubmissions,
} from '../utils/submit.js'

/* ── Field display config ─────────────────────────────────────── */
const FIELD_ICONS = {
  name: User,
  groomName: User,
  brideName: User,
  email: Mail,
  phone: Phone,
  location: MapPin,
  plannedDate: Calendar,
  shootType: Camera,
  functionTime: Clock,
  referral: Share2,
  message: MessageCircle,
}

const FIELD_LABELS = {
  groomName: "Groom's Name",
  brideName: "Bride's Name",
  plannedDate: 'Wedding Date',
  shootType: 'Type of Shoot',
  functionTime: 'Function Time',
  referral: 'Source of Referral',
}

function formatLabel(key) {
  return FIELD_LABELS[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function timeSince(iso) {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
  return formatDate(iso)
}

/* ── Submission Card ──────────────────────────────────────────── */
function SubmissionCard({ submission, onMarkRead, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const isPackage = submission.page === 'Packages'
  const isContact = submission.page === 'Contact'

  const handleExpand = () => {
    setExpanded(!expanded)
    if (!submission.read && !expanded) {
      onMarkRead(submission.id)
    }
  }

  const primaryField = isPackage
    ? `${submission.data.groomName || '?'} & ${submission.data.brideName || '?'}`
    : submission.data.name || submission.data.email || 'Unknown'

  const subtitle = isPackage
    ? submission.data.shootType || 'Wedding'
    : submission.data.message?.slice(0, 80) + (submission.data.message?.length > 80 ? '…' : '')

  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 ${
        submission.read
          ? 'border-gray-800 bg-gray-900/40'
          : 'border-[#7296a2]/30 bg-[#7296a2]/5 shadow-lg shadow-[#7296a2]/5'
      }`}
    >
      {/* Header — always visible */}
      <button
        onClick={handleExpand}
        className="flex w-full items-start gap-4 p-5 text-left"
      >
        {/* Icon */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
            submission.read
              ? 'bg-gray-800 text-gray-500'
              : 'bg-[#7296a2]/15 text-[#7296a2]'
          }`}
        >
          {isPackage ? <Package className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium ${submission.read ? 'text-gray-300' : 'text-white'}`}
            >
              {primaryField}
            </span>
            {!submission.read && (
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#7296a2] animate-pulse" />
            )}
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase ${
                isPackage
                  ? 'bg-amber-500/10 text-amber-400'
                  : 'bg-emerald-500/10 text-emerald-400'
              }`}
            >
              {submission.page}
            </span>
            <span className="text-xs text-gray-500">{timeSince(submission.timestamp)}</span>
          </div>
          {subtitle && (
            <p className="mt-1.5 truncate text-xs text-gray-500">{subtitle}</p>
          )}
        </div>

        {/* Chevron */}
        <div className="shrink-0 pt-1 text-gray-600">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-gray-800 px-5 pb-5 pt-4">
          <div className="space-y-3">
            {Object.entries(submission.data).map(([key, value]) => {
              if (!value) return null
              const Icon = FIELD_ICONS[key] || AlertCircle
              return (
                <div key={key} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                      {formatLabel(key)}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-300 whitespace-pre-wrap break-words">
                      {key === 'plannedDate'
                        ? new Date(value + 'T00:00:00').toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Meta & actions */}
          <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
            <p className="text-[11px] text-gray-600">
              Received {formatDate(submission.timestamp)}
            </p>
            <div className="flex gap-2">
              {submission.data.email && (
                <a
                  href={`mailto:${submission.data.email}`}
                  className="flex items-center gap-1.5 rounded-lg bg-[#7296a2]/10 px-3 py-1.5 text-xs font-medium text-[#7296a2] transition hover:bg-[#7296a2]/20"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Reply
                </a>
              )}
              <button
                onClick={() => onDelete(submission.id)}
                className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main Component ───────────────────────────────────────────── */
export default function FormSubmissions() {
  const [submissions, setSubmissions] = useState([])
  const [filter, setFilter] = useState('all') // all | packages | contact | unread
  const [confirmClear, setConfirmClear] = useState(false)

  const refresh = useCallback(() => {
    setSubmissions(getSubmissions())
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const handleMarkRead = (id) => {
    markSubmissionRead(id)
    refresh()
  }

  const handleMarkAllRead = () => {
    markAllSubmissionsRead()
    refresh()
  }

  const handleDelete = (id) => {
    deleteSubmission(id)
    refresh()
  }

  const handleDeleteAll = () => {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    deleteAllSubmissions()
    setConfirmClear(false)
    refresh()
  }

  // Filter submissions
  const filtered = submissions.filter((s) => {
    if (filter === 'packages') return s.page === 'Packages'
    if (filter === 'contact') return s.page === 'Contact'
    if (filter === 'unread') return !s.read
    return true
  })

  const unreadCount = submissions.filter((s) => !s.read).length
  const packagesCount = submissions.filter((s) => s.page === 'Packages').length
  const contactCount = submissions.filter((s) => s.page === 'Contact').length

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Total', value: submissions.length, color: 'text-white', bg: 'bg-gray-800' },
          { label: 'Unread', value: unreadCount, color: 'text-[#7296a2]', bg: 'bg-[#7296a2]/10' },
          { label: 'Packages', value: packagesCount, color: 'text-amber-400', bg: 'bg-amber-500/10' },
          { label: 'Contact', value: contactCount, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl ${stat.bg} border border-gray-800 p-4 text-center`}
          >
            <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Filter tabs */}
        <div className="flex gap-1 rounded-xl bg-gray-800/50 p-1">
          {[
            { key: 'all', label: 'All' },
            { key: 'unread', label: 'Unread' },
            { key: 'packages', label: 'Packages' },
            { key: 'contact', label: 'Contact' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                filter === tab.key
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              className="flex items-center gap-1.5 rounded-lg bg-gray-800 px-3 py-1.5 text-xs text-gray-400 transition hover:text-white"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              Mark all read
            </button>
          )}
          {submissions.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs transition ${
                confirmClear
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-gray-800 text-gray-400 hover:text-red-400'
              }`}
              onBlur={() => setConfirmClear(false)}
            >
              <Trash2 className="h-3.5 w-3.5" />
              {confirmClear ? 'Click again to confirm' : 'Clear all'}
            </button>
          )}
        </div>
      </div>

      {/* Submissions list */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 py-16 text-center">
          <Inbox className="h-12 w-12 text-gray-700" />
          <p className="mt-4 text-sm font-medium text-gray-500">
            {submissions.length === 0
              ? 'No form submissions yet'
              : 'No submissions match this filter'}
          </p>
          <p className="mt-1 text-xs text-gray-600">
            {submissions.length === 0
              ? 'Submissions from the Contact and Packages forms will appear here.'
              : 'Try changing the filter to see other submissions.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((submission) => (
            <SubmissionCard
              key={submission.id}
              submission={submission}
              onMarkRead={handleMarkRead}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Info notice */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4">
        <p className="text-xs leading-relaxed text-gray-500">
          <strong className="text-gray-400">How it works:</strong> Every submission from the Contact
          and Packages forms is saved locally in your browser alongside the usual email notification
          via Formspree. Submissions persist in localStorage until you delete them. They are
          browser-specific — only visible on the device/browser where the form was submitted from.
        </p>
      </div>
    </div>
  )
}
