import React from 'react'
import { Globe, ExternalLink, Key, Shield, Smartphone } from 'lucide-react'

export default function HostingGuide() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">Hosting & Access Guide</h2>
        <p className="mt-1 text-sm text-gray-400">
          How to access the admin panel once your site is hosted.
        </p>
      </div>

      {/* Access Instructions */}
      <div className="space-y-6">
        {/* GitHub Pages */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">Accessing Admin on GitHub Pages</h3>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            <p>
              Your admin panel is available at <code className="rounded bg-gray-700 px-2 py-0.5 text-[#7296a2]">/wd-x9panel</code> on your hosted site.
            </p>

            <div className="rounded-lg bg-gray-900 border border-gray-700 p-4">
              <p className="text-xs text-gray-500 mb-2">Your admin URL:</p>
              <div className="flex items-center gap-2">
                <code className="text-[#7296a2] break-all">
                  https://achiya33.github.io/Wedding-Diary-React-Web/wd-x9panel
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://achiya33.github.io/Wedding-Diary-React-Web/wd-x9panel')
                  }}
                  className="shrink-0 rounded-md bg-gray-700 px-2 py-1 text-xs text-gray-400 hover:text-white transition"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="rounded-lg bg-[#7296a2]/10 border border-[#7296a2]/20 p-4">
              <p className="text-[#7296a2] font-medium mb-2">Steps to access:</p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Open your browser and go to the admin URL above</li>
                <li>Enter your admin password on the login screen</li>
                <li>You'll see the admin dashboard — edit any content</li>
                <li>Click <strong>"Save Changes"</strong> in each section after editing</li>
                <li>Changes are saved in your browser's localStorage</li>
              </ol>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">How Content Updates Work</h3>
          </div>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-700 p-4">
                <p className="text-white font-medium mb-2">📍 Browser-Local Changes</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Changes made in the admin panel are stored in <strong>your browser's localStorage</strong>.
                  They're visible immediately when you browse the site from the same browser.
                </p>
              </div>

              <div className="rounded-lg border border-gray-700 p-4">
                <p className="text-white font-medium mb-2">🌍 For All Visitors</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Other visitors see the <strong>original content</strong> from the deployed code.
                  To update for everyone, export your content JSON, update the data files, and redeploy.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-amber-400 font-medium mb-2">💡 Workflow for Global Updates</p>
              <ol className="list-decimal pl-5 space-y-1.5 text-gray-400 text-xs">
                <li>Edit content in the admin panel</li>
                <li>Go to <strong>Export / Import</strong> → click <strong>Export Content</strong></li>
                <li>Open the downloaded JSON file</li>
                <li>Replace the content of your <code className="text-gray-300">src/data/</code> files with the exported data</li>
                <li>Commit and push → GitHub Pages will redeploy automatically</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Key className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">Security Notes</h3>
          </div>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
              <span className="text-[#7296a2]">✓</span>
              <span>The <code className="rounded bg-gray-700 px-1.5 py-0.5 text-xs">/wd-x9panel</code> page has <strong>no link</strong> anywhere on the public site — only accessible by typing the URL directly</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7296a2]">✓</span>
              <span>Password is stored as a <strong>SHA-256 hash</strong> in the code — the actual password is never in the source</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7296a2]">✓</span>
              <span>Login session expires when you <strong>close the browser tab</strong> (uses sessionStorage)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">⚠</span>
              <span>Since this is client-side only, a technically savvy person could find the admin page. For stronger security, consider a server-side backend (e.g., Firebase Authentication).</span>
            </li>
          </ul>
        </div>

        {/* Mobile Access */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="h-5 w-5 text-[#7296a2]" />
            <h3 className="text-sm font-semibold text-white">Mobile Access</h3>
          </div>

          <p className="text-sm text-gray-300">
            The admin panel is fully responsive. You can access it from your phone or tablet by navigating to the admin URL in your mobile browser. The sidebar becomes a hamburger menu on smaller screens.
          </p>
        </div>
      </div>
    </div>
  )
}
