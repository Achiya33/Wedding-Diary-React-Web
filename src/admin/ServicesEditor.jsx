import React, { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import { getContent, setContent } from '../utils/contentStore.js'
import ImageUploader from './ImageUploader.jsx'

const ICON_OPTIONS = [
  { value: 'glass', label: 'Glass' },
  { value: 'rings', label: 'Rings' },
  { value: 'flower', label: 'Flower' },
]

export default function ServicesEditor() {
  const [services, setServices] = useState([])
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setServices(getContent('services') || [])
  }, [])

  const handleSave = () => {
    setContent('services', services)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateService = (index, field, value) => {
    const updated = [...services]
    updated[index] = { ...updated[index], [field]: value }
    setServices(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Services</h2>
          <p className="mt-1 text-sm text-gray-400">
            Edit the 3 service cards shown on the homepage.
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
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 space-y-4"
          >
            <h3 className="text-sm font-semibold text-[#7296a2] tracking-wide">
              SERVICE {service.number || String(index + 1).padStart(2, '0')}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Number</label>
                <input
                  type="text"
                  value={service.number || ''}
                  onChange={(e) => updateService(index, 'number', e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
                  placeholder="01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  value={service.title || ''}
                  onChange={(e) => updateService(index, 'title', e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                value={service.description || ''}
                onChange={(e) => updateService(index, 'description', e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:border-[#7296a2] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Icon</label>
              <select
                value={service.icon || 'glass'}
                onChange={(e) => updateService(index, 'icon', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#7296a2]"
              >
                {ICON_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <ImageUploader
              value={service.image || ''}
              onChange={(val) => updateService(index, 'image', val)}
              label="Service Image"
              maxWidth={1400}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
