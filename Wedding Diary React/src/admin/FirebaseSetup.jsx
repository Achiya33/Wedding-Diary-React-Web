import React, { useState } from 'react'
import { Database, CheckCircle2, AlertTriangle, Upload, RefreshCw } from 'lucide-react'
import { isFirebaseConfigured } from '../utils/firebase.js'
import { seedDefaults } from '../utils/contentStore.js'

export default function FirebaseSetup() {
  const [seeding, setSeeding] = useState(false)
  const [seedResult, setSeedResult] = useState(null)
  const configured = isFirebaseConfigured()

  const handleSeedDefaults = async () => {
    setSeeding(true)
    setSeedResult(null)
    try {
      await seedDefaults()
      setSeedResult({ success: true, message: 'Default content uploaded to Firebase!' })
    } catch (err) {
      setSeedResult({ success: false, message: err.message })
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Database className="h-5 w-5 text-[#7296a2]" />
          Firebase Setup
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Configure Firebase for cloud storage. Changes you make in the admin panel
          will be visible on all devices.
        </p>
      </div>

      {/* Status */}
      <div className={`rounded-xl border p-5 ${
        configured
          ? 'border-green-500/20 bg-green-500/5'
          : 'border-amber-500/20 bg-amber-500/5'
      }`}>
        <div className="flex items-start gap-3">
          {configured ? (
            <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
          )}
          <div>
            <h3 className={`text-sm font-semibold ${configured ? 'text-green-400' : 'text-amber-400'}`}>
              {configured ? 'Firebase Connected' : 'Firebase Not Configured'}
            </h3>
            <p className="mt-1 text-xs text-gray-400 leading-relaxed">
              {configured
                ? 'Your site is connected to Firebase. All content changes sync across devices in real-time.'
                : 'Firebase is using placeholder credentials. Follow the setup steps below to connect your Firebase project.'}
            </p>
          </div>
        </div>
      </div>

      {/* Setup Steps */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-5">
        <h3 className="text-sm font-semibold text-white">Setup Steps</h3>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              1
            </span>
            <div>
              <p className="text-sm text-gray-300">
                Go to{' '}
                <a
                  href="https://console.firebase.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7296a2] underline"
                >
                  Firebase Console
                </a>{' '}
                and create a new project (or use existing)
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              2
            </span>
            <div>
              <p className="text-sm text-gray-300">
                In Project Settings → General → Your apps → Add a{' '}
                <strong className="text-white">Web app</strong>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Copy the firebaseConfig object
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              3
            </span>
            <div>
              <p className="text-sm text-gray-300">
                Enable <strong className="text-white">Authentication</strong> →
                Sign-in method → <strong className="text-white">Email/Password</strong>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Then create an admin user in Authentication → Users → Add user
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              4
            </span>
            <div>
              <p className="text-sm text-gray-300">
                Create a <strong className="text-white">Realtime Database</strong> in
                Firebase Console
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Set security rules to allow authenticated read/write (see below)
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              5
            </span>
            <div>
              <p className="text-sm text-gray-300">
                Enable <strong className="text-white">Storage</strong> in Firebase Console
              </p>
              <p className="mt-1 text-xs text-gray-500">
                For uploaded images. Set rules to allow authenticated uploads.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7296a2]/15 text-xs font-bold text-[#7296a2]">
              6
            </span>
            <div>
              <p className="text-sm text-gray-300">
                Paste the Firebase config into{' '}
                <code className="rounded bg-gray-700 px-1.5 py-0.5 text-xs text-[#7296a2]">
                  src/utils/firebase.js
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Database Rules */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-3">
        <h3 className="text-sm font-semibold text-white">Realtime Database Rules</h3>
        <p className="text-xs text-gray-500">
          Copy these rules into Firebase Console → Realtime Database → Rules:
        </p>
        <pre className="rounded-lg bg-gray-950 border border-gray-700 p-4 text-xs text-gray-400 overflow-x-auto">
{`{
  "rules": {
    "content": {
      ".read": true,
      ".write": "auth != null"
    },
    "admins": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}`}
        </pre>
      </div>

      {/* Storage Rules */}
      <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-3">
        <h3 className="text-sm font-semibold text-white">Storage Rules</h3>
        <p className="text-xs text-gray-500">
          Copy these rules into Firebase Console → Storage → Rules:
        </p>
        <pre className="rounded-lg bg-gray-950 border border-gray-700 p-4 text-xs text-gray-400 overflow-x-auto">
{`rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}`}
        </pre>
      </div>

      {/* Seed Defaults */}
      {configured && (
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-white">Seed Default Content</h3>
          <p className="text-xs text-gray-500">
            Upload the default portfolio, blog, and other content to Firebase.
            This only writes data for keys that don't already exist in Firebase.
          </p>

          <button
            onClick={handleSeedDefaults}
            disabled={seeding}
            className="flex items-center gap-2 rounded-lg bg-[#7296a2] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a7d88] disabled:opacity-50"
          >
            {seeding ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Seeding...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Seed Default Content
              </>
            )}
          </button>

          {seedResult && (
            <div className={`rounded-lg px-4 py-3 text-sm ${
              seedResult.success
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
              {seedResult.message}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
