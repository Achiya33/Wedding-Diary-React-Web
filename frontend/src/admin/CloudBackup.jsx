import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Cloud,
  CloudOff,
  RefreshCw,
  Check,
  X,
  Copy,
  ExternalLink,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Trash2,
  Play,
  Pause,
  Code2,
  ChevronDown,
  ChevronUp,
  Zap,
} from 'lucide-react'
import {
  getBackupSettings,
  saveBackupSettings,
  getBackupHistory,
  clearBackupHistory,
  performBackup,
  shouldAutoBackup,
  testEndpoint,
  INTERVAL_LABELS,
  APPS_SCRIPT_CODE,
} from '../utils/backup.js'

function formatDate(iso) {
  if (!iso) return 'Never'
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function timeSince(iso) {
  if (!iso) return 'never'
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  return `${Math.floor(seconds / 86400)}d ago`
}

export default function CloudBackup() {
  const [settings, setSettings] = useState(getBackupSettings)
  const [history, setHistory] = useState(getBackupHistory)
  const [endpointInput, setEndpointInput] = useState(settings.endpoint || '')
  const [backupStatus, setBackupStatus] = useState('idle') // idle | running | success | error
  const [statusMsg, setStatusMsg] = useState('')
  const [testStatus, setTestStatus] = useState(null) // null | testing | success | error
  const [showScript, setShowScript] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [copied, setCopied] = useState(false)
  const autoBackupRef = useRef(null)

  // Save settings when they change
  const updateSettings = useCallback((updates) => {
    setSettings((prev) => {
      const next = { ...prev, ...updates }
      saveBackupSettings(next)
      return next
    })
  }, [])

  // Auto-backup timer
  useEffect(() => {
    if (autoBackupRef.current) clearInterval(autoBackupRef.current)

    if (settings.enabled && settings.endpoint && settings.interval !== 'manual') {
      // Check every 30 seconds
      autoBackupRef.current = setInterval(async () => {
        if (shouldAutoBackup()) {
          try {
            setBackupStatus('running')
            setStatusMsg('Auto-backup in progress…')
            await performBackup()
            setBackupStatus('success')
            setStatusMsg('Auto-backup completed')
            setSettings(getBackupSettings())
            setHistory(getBackupHistory())
            setTimeout(() => {
              setBackupStatus('idle')
              setStatusMsg('')
            }, 5000)
          } catch (err) {
            setBackupStatus('error')
            setStatusMsg(`Auto-backup failed: ${err.message}`)
            setHistory(getBackupHistory())
          }
        }
      }, 30000)
    }

    return () => {
      if (autoBackupRef.current) clearInterval(autoBackupRef.current)
    }
  }, [settings.enabled, settings.endpoint, settings.interval])

  const handleSaveEndpoint = () => {
    const trimmed = endpointInput.trim()
    updateSettings({ endpoint: trimmed, enabled: !!trimmed })
    if (!trimmed) {
      updateSettings({ enabled: false })
    }
  }

  const handleTest = async () => {
    setTestStatus('testing')
    const result = await testEndpoint(endpointInput.trim())
    setTestStatus(result.success ? 'success' : 'error')
    setTimeout(() => setTestStatus(null), 4000)
  }

  const handleBackupNow = async () => {
    setBackupStatus('running')
    setStatusMsg('Backing up to Google Drive…')
    try {
      const result = await performBackup()
      setBackupStatus('success')
      setStatusMsg(`Backup saved: ${result.fileName}`)
      setSettings(getBackupSettings())
      setHistory(getBackupHistory())
      setTimeout(() => {
        setBackupStatus('idle')
        setStatusMsg('')
      }, 6000)
    } catch (err) {
      setBackupStatus('error')
      setStatusMsg(err.message)
      setHistory(getBackupHistory())
    }
  }

  const handleToggle = () => {
    if (!settings.endpoint) return
    updateSettings({ enabled: !settings.enabled })
  }

  const handleIntervalChange = (interval) => {
    updateSettings({ interval })
  }

  const handleCopyScript = async () => {
    try {
      await navigator.clipboard.writeText(APPS_SCRIPT_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = APPS_SCRIPT_CODE
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const handleClearHistory = () => {
    if (!confirm('Clear all backup history?')) return
    clearBackupHistory()
    setHistory([])
  }

  const isConfigured = !!settings.endpoint

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Cloud className="h-5 w-5 text-[#7296a2]" />
          Cloud Backup
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Automatically backup your content to Google Drive on a schedule.
        </p>
      </div>

      {/* Status banner */}
      {backupStatus !== 'idle' && (
        <div
          className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
            backupStatus === 'running'
              ? 'border-blue-500/20 bg-blue-500/10 text-blue-400'
              : backupStatus === 'success'
              ? 'border-green-500/20 bg-green-500/10 text-green-400'
              : 'border-red-500/20 bg-red-500/10 text-red-400'
          }`}
        >
          {backupStatus === 'running' && (
            <RefreshCw className="h-4 w-4 animate-spin" />
          )}
          {backupStatus === 'success' && <CheckCircle2 className="h-4 w-4" />}
          {backupStatus === 'error' && <XCircle className="h-4 w-4" />}
          {statusMsg}
        </div>
      )}

      {/* Connection status card */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {isConfigured ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10">
                <Cloud className="h-5 w-5 text-green-400" />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-700">
                <CloudOff className="h-5 w-5 text-gray-500" />
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-white">
                {isConfigured ? 'Connected' : 'Not Connected'}
              </h3>
              <p className="text-xs text-gray-500">
                {isConfigured
                  ? `Last backup: ${timeSince(settings.lastBackup)}`
                  : 'Set up your Google Apps Script endpoint below'}
              </p>
            </div>
          </div>

          {isConfigured && (
            <button
              onClick={handleToggle}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                settings.enabled ? 'bg-[#7296a2]' : 'bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          )}
        </div>

        {/* Endpoint URL input */}
        <div className="space-y-3">
          <label className="block text-xs font-medium text-gray-400">
            Google Apps Script Web App URL
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              value={endpointInput}
              onChange={(e) => setEndpointInput(e.target.value)}
              placeholder="https://script.google.com/macros/s/...../exec"
              className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition focus:border-[#7296a2] focus:ring-2 focus:ring-[#7296a2]/20"
            />
            <button
              onClick={handleSaveEndpoint}
              className="rounded-lg bg-[#7296a2]/15 px-4 py-2.5 text-sm font-medium text-[#7296a2] transition hover:bg-[#7296a2]/25"
            >
              Save
            </button>
            {endpointInput && (
              <button
                onClick={handleTest}
                disabled={testStatus === 'testing'}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm transition ${
                  testStatus === 'success'
                    ? 'bg-green-500/10 text-green-400'
                    : testStatus === 'error'
                    ? 'bg-red-500/10 text-red-400'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {testStatus === 'testing' ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : testStatus === 'success' ? (
                  <Check className="h-3.5 w-3.5" />
                ) : testStatus === 'error' ? (
                  <X className="h-3.5 w-3.5" />
                ) : (
                  <Zap className="h-3.5 w-3.5" />
                )}
                Test
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Backup interval */}
      {isConfigured && (
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">Backup Schedule</h3>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Object.entries(INTERVAL_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleIntervalChange(key)}
                className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition ${
                  settings.interval === key
                    ? 'border-[#7296a2] bg-[#7296a2]/15 text-[#7296a2]'
                    : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {settings.interval !== 'manual' && settings.enabled && (
            <p className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Auto-backup active — runs while this tab is open
            </p>
          )}

          {settings.interval !== 'manual' && !settings.enabled && (
            <p className="mt-3 flex items-center gap-2 text-xs text-amber-400/70">
              <AlertTriangle className="h-3.5 w-3.5" />
              Toggle the switch above to enable auto-backup
            </p>
          )}
        </div>
      )}

      {/* Backup now button */}
      {isConfigured && (
        <button
          onClick={handleBackupNow}
          disabled={backupStatus === 'running'}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7296a2] to-[#5a7d88] p-4 text-sm font-medium tracking-wide text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {backupStatus === 'running' ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Backing up…
            </>
          ) : (
            <>
              <Cloud className="h-5 w-5" />
              Backup Now
            </>
          )}
        </button>
      )}

      {/* Backup History */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex w-full items-center justify-between p-5"
        >
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-gray-500" />
            <h3 className="text-sm font-semibold text-white">
              Backup History
              <span className="ml-2 text-xs font-normal text-gray-500">
                ({history.length})
              </span>
            </h3>
          </div>
          {showHistory ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>

        {showHistory && (
          <div className="border-t border-gray-700 px-5 pb-5 pt-3">
            {history.length === 0 ? (
              <p className="py-4 text-center text-xs text-gray-600">
                No backups yet
              </p>
            ) : (
              <>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {history.map((entry, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-gray-700/50 px-3 py-2.5"
                    >
                      {entry.status === 'success' ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs text-gray-300">
                          {entry.fileName || entry.error || 'Backup'}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {formatDate(entry.timestamp)}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
                          entry.status === 'success'
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {entry.status}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleClearHistory}
                  className="mt-3 flex items-center gap-1.5 text-xs text-gray-600 transition hover:text-red-400"
                >
                  <Trash2 className="h-3 w-3" />
                  Clear history
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Setup Instructions */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50">
        <button
          onClick={() => setShowScript(!showScript)}
          className="flex w-full items-center justify-between p-5"
        >
          <div className="flex items-center gap-3">
            <Code2 className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">Setup Guide</h3>
          </div>
          {showScript ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>

        {showScript && (
          <div className="border-t border-gray-700 px-5 pb-5 pt-4 space-y-5">
            {/* Steps */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
                  1
                </span>
                <div>
                  <p className="text-sm text-gray-300">
                    Go to{' '}
                    <a
                      href="https://script.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7296a2] underline decoration-[#7296a2]/30 hover:decoration-[#7296a2]"
                    >
                      script.google.com
                      <ExternalLink className="ml-1 inline h-3 w-3" />
                    </a>{' '}
                    and create a <strong className="text-white">New project</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
                  2
                </span>
                <div>
                  <p className="text-sm text-gray-300">
                    Delete everything in the editor, then paste the script below
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
                  3
                </span>
                <div>
                  <p className="text-sm text-gray-300">
                    Click <strong className="text-white">Deploy → New deployment</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-gray-500 ml-3 list-disc">
                    <li>Type: <strong className="text-gray-400">Web app</strong></li>
                    <li>Execute as: <strong className="text-gray-400">Me</strong></li>
                    <li>Who has access: <strong className="text-gray-400">Anyone</strong></li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
                  4
                </span>
                <div>
                  <p className="text-sm text-gray-300">
                    Copy the <strong className="text-white">Web app URL</strong> and paste it above
                  </p>
                </div>
              </div>
            </div>

            {/* Script code */}
            <div className="relative">
              <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-gray-700 bg-gray-900 px-4 py-2">
                <span className="text-xs text-gray-500">Google Apps Script</span>
                <button
                  onClick={handleCopyScript}
                  className="flex items-center gap-1.5 rounded-md bg-gray-800 px-2.5 py-1 text-xs text-gray-400 transition hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="max-h-[300px] overflow-auto rounded-b-lg border border-gray-700 bg-gray-950 p-4 text-xs leading-relaxed text-gray-400">
                <code>{APPS_SCRIPT_CODE}</code>
              </pre>
            </div>

            {/* Note */}
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
              <div className="flex gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <p className="text-xs text-amber-200/60 leading-relaxed">
                  Backups are saved to a <strong className="text-amber-300">Wedding Diary Backups</strong> folder
                  in your Google Drive. The script auto-cleans and keeps only the last 30 backups.
                  Auto-backup only runs while this admin tab is open.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
