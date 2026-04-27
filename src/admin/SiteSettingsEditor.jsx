import React, { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import { getContent, setContent, subscribeToContent } from '../utils/contentStore.js'
import { sanitizeSiteSettings } from '../utils/sanitize.js'

export default function SiteSettingsEditor() {
  const [settings, setSettings] = useState({})
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setSettings(getContent('site') || {})
    const unsub = subscribeToContent('site', (data) => {
      if (data) setSettings(data)
    })
    return unsub
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      // Sanitize all site settings before saving
      const sanitizedSettings = sanitizeSiteSettings(settings)
      await setContent('site', sanitizedSettings)
      setSettings(sanitizedSettings)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      alert('Failed to save: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const updateField = (field, value) => {
    setSettings({ ...settings, [field]: value })
  }

  const updateSocial = (field, value) => {
    setSettings({
      ...settings,
      socials: { ...(settings.socials || {}), [field]: value },
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Site Settings</h2>
          <p className="mt-1 text-sm text-gray-400">
            Edit global site information like brand name, contact details, and social links.
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
            saved ? 'bg-green-600 text-white' : 'bg-[#7296a2] text-white hover:bg-[#5a7d88]'
          }`}
        >
          <Save className="h-4 w-4" />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Brand */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-[#7296a2] tracking-wide">BRAND</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Brand Name</label>
              <input
                type="text"
                value={settings.brand || ''}
                onChange={(e) => updateField('brand', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Tagline</label>
              <input
                type="text"
                value={settings.tagline || ''}
                onChange={(e) => updateField('tagline', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Hero Quote</label>
            <textarea
              value={settings.heroQuote || ''}
              onChange={(e) => updateField('heroQuote', e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-[#7296a2] tracking-wide">CONTACT</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={settings.email || ''}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                value={settings.phone || ''}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
            <input
              type="text"
              value={settings.address || ''}
              onChange={(e) => updateField('address', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Formspree Endpoint</label>
            <input
              type="url"
              value={settings.formspreeEndpoint || ''}
              onChange={(e) => updateField('formspreeEndpoint', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-[#7296a2] tracking-wide">SOCIAL LINKS</h3>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Instagram URL</label>
            <input
              type="url"
              value={settings.socials?.instagram || ''}
              onChange={(e) => updateSocial('instagram', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Facebook URL</label>
            <input
              type="url"
              value={settings.socials?.facebook || ''}
              onChange={(e) => updateSocial('facebook', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
