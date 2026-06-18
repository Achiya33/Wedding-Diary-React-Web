/**
 * Cloud Submissions Database — Google Sheets via Google Apps Script
 *
 * Architecture:
 *  • Write (POST, no-cors): submissions are saved to a Google Sheet row
 *  • Read  (GET, cors):     all submissions are returned as JSON
 *  • localStorage serves as an offline cache for fast initial display
 */

import { sanitizeEndpointUrl, sanitizeString } from './sanitize.js'

const ENDPOINT_KEY = 'wd_submissions_endpoint'
const CACHE_KEY = 'wd_submissions_cache'
const CACHE_TS_KEY = 'wd_submissions_cache_ts'

// ─── Endpoint Configuration ───────────────────────────────────

export function getSubmissionEndpoint() {
  return localStorage.getItem(ENDPOINT_KEY) || ''
}

export function setSubmissionEndpoint(url) {
  const sanitized = sanitizeEndpointUrl((url || '').trim())
  localStorage.setItem(ENDPOINT_KEY, sanitized)
}

// ─── Local Cache ──────────────────────────────────────────────

export function getCachedSubmissions() {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    return cached ? JSON.parse(cached) : []
  } catch {
    return []
  }
}

function setCachedSubmissions(submissions) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(submissions))
    localStorage.setItem(CACHE_TS_KEY, Date.now().toString())
  } catch {}
}

export function getCacheTimestamp() {
  return parseInt(localStorage.getItem(CACHE_TS_KEY) || '0', 10)
}

// ─── Cloud Write Operations (POST, no-cors) ───────────────────

/**
 * Save a submission to the cloud. Returns true if request was sent
 * (we can't verify the response due to no-cors, but the action executes).
 */
export async function saveToCloud(submission) {
  const endpoint = getSubmissionEndpoint()
  if (!endpoint) return false

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'add', submission }),
      mode: 'no-cors',
    })

    // Optimistically add to local cache
    const cache = getCachedSubmissions()
    cache.unshift(submission)
    setCachedSubmissions(cache)

    return true
  } catch {
    return false
  }
}

export async function markReadInCloud(id) {
  const endpoint = getSubmissionEndpoint()
  const cleanId = sanitizeString(id, 100)

  // Update local cache immediately
  const cache = getCachedSubmissions()
  const target = cache.find((s) => s.id === cleanId)
  if (target) {
    target.read = true
    setCachedSubmissions(cache)
  }

  if (!endpoint) return
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'markRead', id: cleanId }),
      mode: 'no-cors',
    })
  } catch {}
}

export async function markAllReadInCloud() {
  const endpoint = getSubmissionEndpoint()

  // Update local cache
  const cache = getCachedSubmissions()
  cache.forEach((s) => (s.read = true))
  setCachedSubmissions(cache)

  if (!endpoint) return
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'markAllRead' }),
      mode: 'no-cors',
    })
  } catch {}
}

export async function deleteFromCloud(id) {
  const endpoint = getSubmissionEndpoint()
  const cleanId = sanitizeString(id, 100)

  // Update local cache
  const updated = getCachedSubmissions().filter((s) => s.id !== cleanId)
  setCachedSubmissions(updated)

  if (!endpoint) return
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'delete', id: cleanId }),
      mode: 'no-cors',
    })
  } catch {}
}

export async function deleteAllFromCloud() {
  setCachedSubmissions([])

  const endpoint = getSubmissionEndpoint()
  if (!endpoint) return
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'deleteAll' }),
      mode: 'no-cors',
    })
  } catch {}
}

// ─── Cloud Read (GET, cors) ───────────────────────────────────

/**
 * Fetch all submissions from cloud. Returns { submissions, fromCloud }.
 * Falls back to local cache if cloud is unavailable.
 */
export async function fetchFromCloud() {
  const endpoint = getSubmissionEndpoint()
  if (!endpoint) {
    return { submissions: getCachedSubmissions(), fromCloud: false }
  }

  try {
    const res = await fetch(`${endpoint}?action=list&t=${Date.now()}`)
    if (!res.ok) throw new Error('Network error')
    const data = await res.json()
    const submissions = data.submissions || []

    // Update local cache
    setCachedSubmissions(submissions)

    return { submissions, fromCloud: true }
  } catch {
    return { submissions: getCachedSubmissions(), fromCloud: false }
  }
}

// ─── Test Endpoint ────────────────────────────────────────────

export async function testSubmissionEndpoint(url) {
  try {
    const res = await fetch(`${url}?action=ping&t=${Date.now()}`)
    const data = await res.json()
    return { success: true, message: data.message || 'Connected!' }
  } catch (err) {
    return { success: false, error: err.message }
  }
}

// ─── Google Apps Script Template ──────────────────────────────

export const SUBMISSIONS_SCRIPT_CODE = `// ============================================================
// Wedding Diary — Form Submissions Database Script
// ============================================================
// This script stores form submissions in a Google Sheet.
//
// SETUP:
// 1. Go to https://script.google.com and create a NEW project
// 2. Paste this entire code, replacing everything
// 3. Click Deploy → New deployment
// 4. Type: "Web app"
// 5. Execute as: "Me"
// 6. Who has access: "Anyone"
// 7. Click Deploy and copy the Web app URL
// 8. Paste that URL into Admin Panel → Inquiries → Database Setup
// ============================================================

var SHEET_NAME = 'Submissions';

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['id', 'page', 'data', 'timestamp', 'read']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();

    switch (body.action) {
      case 'add':
        var s = body.submission;
        sheet.appendRow([
          s.id || '',
          s.page || '',
          JSON.stringify(s.data || {}),
          s.timestamp || new Date().toISOString(),
          false
        ]);
        return respond({ success: true });

      case 'markRead':
        return updateReadStatus(sheet, body.id, true);

      case 'markAllRead':
        var last = sheet.getLastRow();
        if (last > 1) {
          sheet.getRange(2, 5, last - 1, 1).setValue(true);
        }
        return respond({ success: true });

      case 'delete':
        return deleteRow(sheet, body.id);

      case 'deleteAll':
        var lastRow = sheet.getLastRow();
        if (lastRow > 1) sheet.deleteRows(2, lastRow - 1);
        return respond({ success: true });

      default:
        return respond({ error: 'Unknown action: ' + body.action });
    }
  } catch (err) {
    return respond({ error: err.toString() });
  }
}

function doGet(e) {
  var action = (e.parameter && e.parameter.action) || 'list';

  if (action === 'ping') {
    return respond({ status: 'ok', message: 'Submissions database is active!' });
  }

  if (action === 'list') {
    var sheet = getOrCreateSheet();
    var data = sheet.getDataRange().getValues();
    var submissions = [];
    for (var i = 1; i < data.length; i++) {
      try {
        submissions.push({
          id: String(data[i][0]),
          page: String(data[i][1]),
          data: JSON.parse(data[i][2] || '{}'),
          timestamp: data[i][3] instanceof Date
            ? data[i][3].toISOString()
            : String(data[i][3]),
          read: data[i][4] === true || data[i][4] === 'TRUE' || data[i][4] === 'true'
        });
      } catch (_) {}
    }
    submissions.reverse();
    return respond({ success: true, count: submissions.length, submissions: submissions });
  }

  return respond({ error: 'Unknown action' });
}

function updateReadStatus(sheet, id, status) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) {
      sheet.getRange(i + 1, 5).setValue(status);
      return respond({ success: true });
    }
  }
  return respond({ error: 'Not found' });
}

function deleteRow(sheet, id) {
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0]) === String(id)) {
      sheet.deleteRow(i + 1);
      return respond({ success: true });
    }
  }
  return respond({ error: 'Not found' });
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}`
