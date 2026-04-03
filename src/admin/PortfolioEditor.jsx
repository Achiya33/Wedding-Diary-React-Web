import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Save, ChevronDown, ChevronUp, Images } from 'lucide-react'
import { getContent, setContent } from '../utils/contentStore.js'
import { generateId } from '../utils/imageUtils.js'
import ImageUploader from './ImageUploader.jsx'

const CATEGORIES = ['Wedding', 'Engagement', 'Pre Wedding', 'Homecoming']

function PortfolioItemEditor({ item, onChange, onDelete, isOpen, onToggle }) {
  const updateField = (field, value) => {
    onChange({ ...item, [field]: value })
  }

  const addGalleryImage = () => {
    updateField('images', [...(item.images || []), ''])
  }

  const removeGalleryImage = (index) => {
    updateField('images', item.images.filter((_, i) => i !== index))
  }

  const updateGalleryImage = (index, value) => {
    const updated = [...item.images]
    updated[index] = value
    updateField('images', updated)
  }

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-800"
      >
        <div className="flex items-center gap-4">
          {item.coverImage && (
            <img
              src={item.coverImage}
              alt=""
              className="h-12 w-12 rounded-lg object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
          <div>
            <h3 className="font-medium text-white">{item.title || 'Untitled Album'}</h3>
            <p className="text-xs text-gray-500">{item.category} · {item.subtitle}</p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Expanded editor */}
      {isOpen && (
        <div className="border-t border-gray-700 px-5 py-5 space-y-5">
          {/* Basic fields */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                value={item.title || ''}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none"
                placeholder="e.g. Dinali & Dinusha"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Subtitle</label>
              <input
                type="text"
                value={item.subtitle || ''}
                onChange={(e) => updateField('subtitle', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#7296a2]"
                placeholder="e.g. Engagement Shoot"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Slug</label>
              <input
                type="text"
                value={item.slug || ''}
                onChange={(e) => updateField('slug', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#7296a2]"
                placeholder="e.g. dinali-engagement"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                value={item.category || 'Wedding'}
                onChange={(e) => updateField('category', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#7296a2]"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Quote</label>
            <textarea
              value={item.quote || ''}
              onChange={(e) => updateField('quote', e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#7296a2] resize-none"
              placeholder="A beautiful wedding story..."
            />
          </div>

          {/* Cover Image */}
          <ImageUploader
            value={item.coverImage || ''}
            onChange={(val) => updateField('coverImage', val)}
            label="Cover Image"
            maxWidth={1200}
          />

          {/* Gallery Images */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Images className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">
                Gallery Images ({item.images?.length || 0})
              </span>
            </div>
            <div className="space-y-3">
              {(item.images || []).map((img, imgIndex) => (
                <div key={imgIndex} className="flex gap-3 items-start">
                  <div className="flex-1">
                    <ImageUploader
                      value={img}
                      onChange={(val) => updateGalleryImage(imgIndex, val)}
                      label={`Image ${imgIndex + 1}`}
                    />
                  </div>
                  <button
                    onClick={() => removeGalleryImage(imgIndex)}
                    className="mt-7 rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addGalleryImage}
              className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-gray-600 px-4 py-2 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
            >
              <Plus className="h-4 w-4" /> Add Gallery Image
            </button>
          </div>

          {/* Delete button */}
          <div className="pt-3 border-t border-gray-700">
            <button
              onClick={onDelete}
              className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
            >
              <Trash2 className="h-4 w-4" /> Delete Album
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function PortfolioEditor() {
  const [items, setItems] = useState([])
  const [openIndex, setOpenIndex] = useState(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setItems(getContent('portfolio') || [])
  }, [])

  const handleSave = () => {
    setContent('portfolio', items)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const addItem = () => {
    const newItem = {
      slug: 'new-album-' + generateId(),
      title: '',
      subtitle: '',
      category: 'Wedding',
      coverImage: '',
      quote: '',
      images: [],
    }
    setItems([...items, newItem])
    setOpenIndex(items.length)
  }

  const updateItem = (index, updatedItem) => {
    const updated = [...items]
    updated[index] = updatedItem
    setItems(updated)
  }

  const deleteItem = (index) => {
    if (!confirm('Delete this album? This cannot be undone.')) return
    setItems(items.filter((_, i) => i !== index))
    setOpenIndex(null)
  }

  const moveItem = (from, to) => {
    if (to < 0 || to >= items.length) return
    const updated = [...items]
    const [moved] = updated.splice(from, 1)
    updated.splice(to, 0, moved)
    setItems(updated)
    setOpenIndex(to)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Portfolio Albums</h2>
          <p className="mt-1 text-sm text-gray-400">
            Manage all portfolio albums. The first 4 are shown as Featured Albums on the homepage.
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

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item.slug + index} className="flex gap-2">
            <div className="flex flex-col justify-center gap-1 py-2">
              <button
                onClick={() => moveItem(index, index - 1)}
                disabled={index === 0}
                className="text-xs text-gray-500 hover:text-white disabled:opacity-30 transition"
              >
                ▲
              </button>
              <button
                onClick={() => moveItem(index, index + 1)}
                disabled={index === items.length - 1}
                className="text-xs text-gray-500 hover:text-white disabled:opacity-30 transition"
              >
                ▼
              </button>
            </div>
            <div className="flex-1">
              <PortfolioItemEditor
                item={item}
                onChange={(updated) => updateItem(index, updated)}
                onDelete={() => deleteItem(index)}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-700 py-4 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
      >
        <Plus className="h-4 w-4" /> Add New Album
      </button>
    </div>
  )
}
