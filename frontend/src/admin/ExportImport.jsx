import React, { useRef, useState } from 'react'
import { Download, Upload, AlertTriangle, RotateCcw, HardDrive } from 'lucide-react'
import {
  downloadContentAsJSON,
  importContent,
  resetAllContent,
  getStorageUsage,
  formatBytes,
  hasOverride,
  resetContent,
  CONTENT_KEYS,
} from '../utils/contentStore.js'

export default function ExportImport() {
  const fileRef = useRef(null)
  const [importResult, setImportResult] = useState(null)
  const usage = getStorageUsage()

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (evt) => {
      try {
        const data = JSON.parse(evt.target.result)
        const count = await importContent(data)
        setImportResult({ success: true, message: `Successfully imported ${count} sections.` })
        setTimeout(() => setImportResult(null), 4000)
      } catch (err) {
        setImportResult({ success: false, message: 'Import failed: ' + err.message })
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const handleResetAll = async () => {
    if (!confirm('Reset ALL content to defaults? This will remove all your customizations.')) return
    if (!confirm('Are you absolutely sure? This cannot be undone.')) return
    await resetAllContent()
    setImportResult({ success: true, message: 'All content has been reset to defaults.' })
    setTimeout(() => setImportResult(null), 4000)
  }

  const handleResetSection = async (key) => {
    if (!confirm(`Reset "${key}" to default? Your customizations for this section will be lost.`)) return
    await resetContent(key)
    setImportResult({ success: true, message: `"${key}" has been reset to default.` })
    setTimeout(() => setImportResult(null), 3000)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Export & Import</h2>
        <p className="mt-1 text-sm text-gray-400">
          Backup your content or restore from a previous backup.
        </p>
      </div>

      {importResult && (
        <div
          className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
            importResult.success
              ? 'border-green-500/20 bg-green-500/10 text-green-400'
              : 'border-red-500/20 bg-red-500/10 text-red-400'
          }`}
        >
          {importResult.message}
        </div>
      )}

      {/* Storage Usage */}
      <div className="mb-6 rounded-xl border border-gray-700 bg-gray-800/50 p-5">
        <div className="flex items-center gap-3 mb-3">
          <HardDrive className="h-5 w-5 text-[#7296a2]" />
          <h3 className="text-sm font-semibold text-white">Storage Usage</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 rounded-full bg-gray-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7296a2] to-[#5a7d88] transition-all"
              style={{ width: `${Math.min((usage / (5 * 1024 * 1024)) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm text-gray-400 whitespace-nowrap">
            {formatBytes(usage)} / ~5 MB
          </span>
        </div>
      </div>

      {/* Export / Import */}
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <button
          onClick={downloadContentAsJSON}
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-gray-800/50 p-6 text-white transition hover:border-[#7296a2] hover:bg-gray-800"
        >
          <Download className="h-6 w-6 text-[#7296a2]" />
          <div className="text-left">
            <div className="font-medium">Export Content</div>
            <div className="text-xs text-gray-400">Download all content as JSON</div>
          </div>
        </button>

        <button
          onClick={() => fileRef.current?.click()}
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-700 bg-gray-800/50 p-6 text-white transition hover:border-[#7296a2] hover:bg-gray-800"
        >
          <Upload className="h-6 w-6 text-[#7296a2]" />
          <div className="text-left">
            <div className="font-medium">Import Content</div>
            <div className="text-xs text-gray-400">Restore from a JSON backup</div>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleImport}
          />
        </button>
      </div>

      {/* Per-section overrides */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 mb-6">
        <h3 className="text-sm font-semibold text-white mb-4">Content Overrides</h3>
        <div className="space-y-3">
          {CONTENT_KEYS.map((key) => {
            const isOverridden = hasOverride(key)
            return (
              <div
                key={key}
                className="flex items-center justify-between rounded-lg border border-gray-700 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      isOverridden ? 'bg-[#7296a2]' : 'bg-gray-600'
                    }`}
                  />
                  <span className="text-sm text-white capitalize">{key}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isOverridden
                        ? 'bg-[#7296a2]/20 text-[#7296a2]'
                        : 'bg-gray-700 text-gray-500'
                    }`}
                  >
                    {isOverridden ? 'Customized' : 'Default'}
                  </span>
                </div>
                {isOverridden && (
                  <button
                    onClick={() => handleResetSection(key)}
                    className="text-xs text-gray-500 hover:text-red-400 transition"
                  >
                    Reset
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Reset All */}
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-red-400">Danger Zone</h3>
            <p className="mt-1 text-sm text-gray-500">
              Reset all content to the original defaults. This removes all customizations.
            </p>
            <button
              onClick={handleResetAll}
              className="mt-3 flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
            >
              <RotateCcw className="h-4 w-4" /> Reset All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
