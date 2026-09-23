import React, { useState, useEffect } from 'react'
import { Plus, Trash2, GripVertical, Save } from 'lucide-react'
import { getContent, setContent, subscribeToContent } from '../utils/contentStore.js'
import ImageUploader from './ImageUploader.jsx'
import { sanitizeUrl } from '../utils/sanitize.js'

export default function HeroEditor() {
  const [slides, setSlides] = useState([])
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setSlides(getContent('heroSlides') || [])
    const unsub = subscribeToContent('heroSlides', (data) => {
      if (data) setSlides(data)
    })
    return unsub
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      // Sanitize all slide URLs before saving
      const sanitizedSlides = slides.map(s => typeof s === 'string' ? sanitizeUrl(s) : s)
      await setContent('heroSlides', sanitizedSlides)
      setSlides(sanitizedSlides)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      alert('Failed to save: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const addSlide = () => {
    setSlides([...slides, ''])
  }

  const removeSlide = (index) => {
    setSlides(slides.filter((_, i) => i !== index))
  }

  const updateSlide = (index, value) => {
    const updated = [...slides]
    updated[index] = value
    setSlides(updated)
  }

  const moveSlide = (from, to) => {
    if (to < 0 || to >= slides.length) return
    const updated = [...slides]
    const [moved] = updated.splice(from, 1)
    updated.splice(to, 0, moved)
    setSlides(updated)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Hero Slides</h2>
          <p className="mt-1 text-sm text-gray-400">
            Manage the rotating background images on the homepage hero section.
          </p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
            saved
              ? 'bg-green-600 text-white'
              : 'bg-[#7296a2] text-white hover:bg-[#5a7d88]'
          }`}
        >
          <Save className="h-4 w-4" />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveSlide(index, index - 1)}
                    disabled={index === 0}
                    className="text-gray-500 hover:text-white disabled:opacity-30 transition"
                    title="Move up"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveSlide(index, index + 1)}
                    disabled={index === slides.length - 1}
                    className="text-gray-500 hover:text-white disabled:opacity-30 transition"
                    title="Move down"
                  >
                    ▼
                  </button>
                </div>
                <span className="text-sm font-medium text-gray-300">
                  Slide {index + 1}
                </span>
              </div>
              <button
                onClick={() => removeSlide(index)}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <ImageUploader
              value={slide}
              onChange={(val) => updateSlide(index, val)}
              label={`Slide ${index + 1} Image`}
              maxWidth={1920}
            />
          </div>
        ))}
      </div>

      <button
        onClick={addSlide}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-700 py-4 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
      >
        <Plus className="h-4 w-4" /> Add Slide
      </button>
    </div>
  )
}
