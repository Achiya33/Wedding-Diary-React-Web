/**
 * Google Drive Backup — via Google Apps Script web endpoint
 * Stores backup settings & history in localStorage.
 */

import { exportAllContent } from './contentStore.js'
import { getCachedSubmissions } from './submissionDB.js'

const SETTINGS_KEY = 'wd_backup_settings'
const HISTORY_KEY = 'wd_backup_history'

const DEFAULT_SETTINGS = {
  endpoint: '',
  interval: 'manual',  // manual | 1h | 6h | 12h | 24h | 7d
  enabled: false,
  lastBackup: null,
}

const INTERVAL_MS = {
  manual: null,
  '1h': 60 * 60 * 1000,
  '6h': 6 * 60 * 60 * 1000,
  '12h': 12 * 60 * 60 * 1000,
  '24h': 24 * 60 * 60 * 1000,
  '7d': 7 * 24 * 60 * 60 * 1000,
}

export const INTERVAL_LABELS = {
  manual: 'Manual only',
  '1h': 'Every hour',
  '6h': 'Every 6 hours',
  '12h': 'Every 12 hours',
  '24h': 'Every 24 hours',
  '7d': 'Every 7 days',
}

// ─── Settings ─────────────────────────────────────────────────

export function getBackupSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY)
    if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) }
  } catch {}
  return { ...DEFAULT_SETTINGS }
}

export function saveBackupSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

// ─── History ──────────────────────────────────────────────────

export function getBackupHistory() {
  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return []
}

function addHistoryEntry(entry) {
  const history = getBackupHistory()
  history.unshift(entry)
  // Keep only last 20 entries
  if (history.length > 20) history.length = 20
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export function clearBackupHistory() {
  localStorage.removeItem(HISTORY_KEY)
}

// ─── Perform Backup ───────────────────────────────────────────

export async function performBackup() {
  const settings = getBackupSettings()
  if (!settings.endpoint) {
    throw new Error('No backup endpoint configured')
  }

  // Collect all data
  const content = exportAllContent()
  const submissions = getCachedSubmissions()
  const payload = {
    content,
    submissions,
    timestamp: new Date().toISOString(),
    source: window.location.hostname || 'localhost',
  }

  try {
    const res = await fetch(settings.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
      mode: 'no-cors',
    })

    // Google Apps Script with no-cors returns opaque response, 
    // so we can't read it. We optimistically assume success.
    // For CORS-enabled endpoints, we can read the response.
    let fileName = `backup-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`
    try {
      if (res.type !== 'opaque') {
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        fileName = data.fileName || fileName
      }
    } catch (_) {
      // Opaque or parsing failed — that's OK for no-cors
    }

    // Update settings
    settings.lastBackup = new Date().toISOString()
    saveBackupSettings(settings)

    // Add history
    addHistoryEntry({
      timestamp: settings.lastBackup,
      status: 'success',
      fileName,
    })

    return { success: true, fileName }
  } catch (err) {
    addHistoryEntry({
      timestamp: new Date().toISOString(),
      status: 'error',
      error: err.message,
    })
    throw err
  }
}

// ─── Auto-backup check ───────────────────────────────────────

export function shouldAutoBackup() {
  const settings = getBackupSettings()
  if (!settings.enabled || !settings.endpoint || settings.interval === 'manual') {
    return false
  }

  const intervalMs = INTERVAL_MS[settings.interval]
  if (!intervalMs) return false

  if (!settings.lastBackup) return true

  const elapsed = Date.now() - new Date(settings.lastBackup).getTime()
  return elapsed >= intervalMs
}

// ─── Test endpoint ────────────────────────────────────────────

export async function testEndpoint(url) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ test: true, timestamp: new Date().toISOString() }),
      mode: 'no-cors',
    })
    // no-cors gives opaque response — we just check it didn't throw
    return { success: true }
  } catch (err) {
    return { success: false, error: err.message }
  }
}

// ─── Google Apps Script template ──────────────────────────────

export const APPS_SCRIPT_CODE = `// ============================================================
// Wedding Diary — Google Drive Backup Script
// ============================================================
// 1. Go to https://script.google.com and create a new project
// 2. Paste this entire code, replacing everything
// 3. Click Deploy → New deployment
// 4. Type: "Web app"
// 5. Execute as: "Me"
// 6. Who has access: "Anyone"
// 7. Click Deploy and copy the Web app URL
// 8. Paste that URL into your Admin Panel → Cloud Backup
// ============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // If this is just a test ping
    if (data.test) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, message: 'Endpoint is working!' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Create or find the backup folder
    var folderName = 'Wedding Diary Backups';
    var folders = DriveApp.getFoldersByName(folderName);
    var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
    
    // Create the backup file
    var timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    var fileName = 'WD-Backup-' + timestamp + '.json';
    var file = folder.createFile(fileName, JSON.stringify(data, null, 2), MimeType.JSON);
    
    // Clean up old backups (keep last 30)
    var files = folder.getFiles();
    var allFiles = [];
    while (files.hasNext()) {
      var f = files.next();
      allFiles.push({ file: f, date: f.getDateCreated() });
    }
    allFiles.sort(function(a, b) { return b.date - a.date; });
    for (var i = 30; i < allFiles.length; i++) {
      allFiles[i].file.setTrashed(true);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        fileName: fileName,
        fileId: file.getId(),
        folderUrl: folder.getUrl()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Wedding Diary Backup endpoint is active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}`
