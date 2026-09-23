import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Plus, Trash2, Save, ChevronDown, ChevronUp, Images, Upload, X, GripVertical, Zap, ImagePlus } from 'lucide-react'
import { getContent, setContent, subscribeToContent } from '../utils/contentStore.js'
import { generateId, compressImage, compressionRatio, formatFileSize } from '../utils/imageUtils.js'
import ImageUploader from './ImageUploader.jsx'
import { handleImageUpload } from '../utils/cloudinary.js'
import { sanitizePortfolioItem, sanitizeSlug } from '../utils/sanitize.js'

const CATEGORIES = ['Wedding', 'Engagement', 'Pre Wedding', 'Homecoming']

/**
 * Batch multi-photo upload zone with compression, progress, and drag-drop.
 */
function MultiPhotoUploader({ onPhotosAdded }) {
  const fileRef = useRef(null)
  const [dragOver, setDragOver] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ current: 0, total: 0 })
  const [quality, setQuality] = useState(65)
  const [results, setResults] = useState(null)

  const processFiles = async (files) => {
    const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'))
    if (imageFiles.length === 0) return

    setProcessing(true)
    setProgress({ current: 0, total: imageFiles.length })

    const newImages = []

    for (let i = 0; i < imageFiles.length; i++) {
      setProgress({ current: i + 1, total: imageFiles.length })
      try {

        const imageUrl = await handleImageUpload(imageFiles[i]);
        if (imageUrl) {
          newImages.push(imageUrl);
        }
      } catch (err) {
        console.error('Upload failed:', imageFiles[i].name, err)
      }
    }

    if (newImages.length > 0) {
      onPhotosAdded(newImages);
    }
    setProcessing(false);
  };

  const handleFileChange = (e) => {
    processFiles(e.target.files)
    e.target.value = ''
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
    processFiles(e.dataTransfer.files)
  }

  const pct = progress.total > 0 ? Math.round((progress.current / progress.total) * 100) : 0

  const AdminGallery = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleAddGalleryItem = async (newImageFile, title) => {
      setUploading(true);
      try {

        const compressedFile = await compressImageSimple(newImageFile, 1200, 0.7);


        const imageUrl = await handleImageUpload(compressedFile);

        if (imageUrl) {

          const currentPortfolio = getContent('portfolio');

          const newItem = {
            id: Date.now().toString(),
            url: imageUrl,
            title: title || "New Wedding Shoot",
            date: new Date().toISOString()
          };

          const updatedPortfolio = [newItem, ...currentPortfolio];
          await setContent('portfolio', updatedPortfolio);

          alert("පින්තූරය සාර්ථකව Gallery එකට එකතු වුණා! 🚀");
          setSelectedFile(null);
          setTitle("");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("අසාර්ථකයි!");
      } finally {
        setUploading(false);
      }
    };

    return (
      <div>
        {/* ii*/}
        <input type="file" onChange={(e) => setSelectedFile(e.target.files)} />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

        <button
          onClick={() => handleAddGalleryItem(selectedFile, title)}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Add to Gallery"}
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      {/* Quality slider */}
      <div className="flex items-center gap-3 px-1">
        <Zap className="h-3.5 w-3.5 text-gray-500" />
        <input
          type="range"
          min="20"
          max="90"
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="flex-1 h-1.5 rounded-full appearance-none bg-gray-700 accent-[#7296a2]"
        />
        <span className="text-xs text-gray-400 w-12 text-right">{quality}%</span>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !processing && fileRef.current?.click()}
        className={`relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 transition ${dragOver
          ? 'border-[#7296a2] bg-[#7296a2]/10'
          : 'border-gray-600 bg-gray-800/50 hover:border-[#7296a2] hover:bg-gray-800'
          } ${processing ? 'pointer-events-none' : ''}`}
      >
        {processing ? (
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-500 border-t-[#7296a2]" />
            <span className="text-sm text-gray-300">
              Compressing {progress.current} of {progress.total}...
            </span>
            {/* Progress bar */}
            <div className="w-full max-w-xs h-2 rounded-full bg-gray-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7296a2] to-[#8bb5c2] transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">{pct}%</span>
          </div>
        ) : (
          <>
            <ImagePlus className="h-8 w-8 text-gray-500" />
            <span className="mt-2 text-sm font-medium text-gray-300">
              Add Multiple Photos
            </span>
            <span className="mt-1 text-xs text-gray-500">
              Click to select or drag & drop multiple images
            </span>
            <span className="mt-1 text-[11px] text-gray-600">
              Auto-compressed to WebP · Max 1200px
            </span>
          </>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Batch results summary */}
      {results && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2 text-xs text-green-400 animate-fadeIn">
          <span>✅ {results.count} photo{results.count !== 1 ? 's' : ''} added</span>
          {results.failed > 0 && (
            <span className="text-yellow-400">⚠ {results.failed} failed</span>
          )}
          <span>📦 {formatFileSize(results.totalOriginal)} → {formatFileSize(results.totalCompressed)}</span>
          <span className="font-semibold">🔥 {results.ratio}% smaller</span>
        </div>
      )}
    </div>
  )
}

/**
 * Gallery grid with drag-to-reorder, delete, and compact previews.
 */
function GalleryGrid({ images, onReorder, onDelete, onUpdate }) {
  const [dragIndex, setDragIndex] = useState(null)
  const [dragOverIndex, setDragOverIndex] = useState(null)

  const handleDragStart = (e, index) => {
    setDragIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    // Use a transparent image as drag ghost
    const ghost = document.createElement('div')
    ghost.style.opacity = '0'
    document.body.appendChild(ghost)
    e.dataTransfer.setDragImage(ghost, 0, 0)
    setTimeout(() => document.body.removeChild(ghost), 0)
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (index !== dragOverIndex) setDragOverIndex(index)
  }

  const handleDrop = (e, toIndex) => {
    e.preventDefault()
    if (dragIndex !== null && dragIndex !== toIndex) {
      const updated = [...images]
      const [moved] = updated.splice(dragIndex, 1)
      updated.splice(toIndex, 0, moved)
      onReorder(updated)
    }
    setDragIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDragIndex(null)
    setDragOverIndex(null)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
      {images.map((img, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`group relative aspect-square rounded-lg overflow-hidden border transition-all cursor-grab active:cursor-grabbing ${dragIndex === index
            ? 'opacity-40 scale-95 border-[#7296a2]'
            : dragOverIndex === index
              ? 'border-[#7296a2] ring-2 ring-[#7296a2]/30 scale-105'
              : 'border-gray-700 hover:border-gray-500'
            }`}
        >
          {img ? (
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('bg-gray-800')
              }}
            />
          ) : (
            <div className="h-full w-full bg-gray-800 flex items-center justify-center">
              <ImagePlus className="h-5 w-5 text-gray-600" />
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-1.5">
              <span className="text-[10px] text-white/60 absolute top-1 left-1.5 font-mono">{index + 1}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(index) }}
                className="rounded-full bg-red-500/80 p-1.5 text-white transition hover:bg-red-500"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          {/* Drag handle indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-0.5 opacity-0 group-hover:opacity-100 transition">
            <GripVertical className="h-3 w-3 text-white/50" />
          </div>
        </div>
      ))}
    </div>
  )
}

function PortfolioItemEditor({ item, onChange, onDelete, isOpen, onToggle }) {
  const updateField = (field, value) => {
    onChange({ ...item, [field]: value })
  }

  const addGalleryImage = () => {
    updateField('images', [...(item.images || []), ''])
  }

  const addMultipleGalleryImages = (newImages) => {
    updateField('images', [...(item.images || []), ...newImages])
  }

  const removeGalleryImage = (index) => {
    updateField('images', item.images.filter((_, i) => i !== index))
  }

  const updateGalleryImage = (index, value) => {
    const updated = [...item.images]
    updated[index] = value
    updateField('images', updated)
  }

  const [showSingleAdd, setShowSingleAdd] = useState(false)

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
        <div className="flex items-center gap-3">
          {(item.images?.length > 0) && (
            <span className="rounded-full bg-gray-700 px-2.5 py-0.5 text-xs text-gray-300">
              {item.images.length} photo{item.images.length !== 1 ? 's' : ''}
            </span>
          )}
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
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
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Images className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-300">
                  Gallery Images ({item.images?.length || 0})
                </span>
              </div>
              {item.images?.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm(`Remove all ${item.images.length} gallery images?`)) {
                      updateField('images', [])
                    }
                  }}
                  className="text-xs text-gray-500 hover:text-red-400 transition"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Gallery grid preview */}
            <GalleryGrid
              images={item.images || []}
              onReorder={(reordered) => updateField('images', reordered)}
              onDelete={(index) => removeGalleryImage(index)}
              onUpdate={(index, value) => updateGalleryImage(index, value)}
            />

            {/* Multi-photo upload zone */}
            <div className={item.images?.length > 0 ? 'mt-4' : ''}>
              <MultiPhotoUploader onPhotosAdded={addMultipleGalleryImages} />
            </div>

            {/* Single image add (path-based or individual upload) */}
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setShowSingleAdd(!showSingleAdd)}
                className="flex items-center gap-2 rounded-lg border border-dashed border-gray-600 px-4 py-2 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
              >
                <Plus className="h-4 w-4" /> Add by URL/Path
              </button>
            </div>

            {/* Expandable single-add section for URL/path entry */}
            {showSingleAdd && (
              <div className="mt-3 space-y-3 rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                <p className="text-xs text-gray-500">Add individual images by URL or file path:</p>
                {(item.images || []).filter((img) => !img || !img.startsWith('data:')).length === 0 && (
                  <button
                    onClick={addGalleryImage}
                    className="flex items-center gap-2 text-sm text-[#7296a2] hover:text-[#8bb5c2] transition"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add empty slot
                  </button>
                )}
                {(item.images || []).map((img, imgIndex) => (
                  (!img || !img.startsWith('data:')) && (
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
                  )
                ))}
                <button
                  onClick={addGalleryImage}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#7296a2] transition"
                >
                  <Plus className="h-3.5 w-3.5" /> Add another slot
                </button>
              </div>
            )}
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
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setItems(getContent('portfolio') || [])
    const unsub = subscribeToContent('portfolio', (data) => {
      if (data) setItems(data)
    })
    return unsub
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      // Sanitize all portfolio items before saving
      const sanitizedItems = items.map(sanitizePortfolioItem)
      await setContent('portfolio', sanitizedItems)
      setItems(sanitizedItems)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (err) {
      alert('Failed to save: ' + err.message)
    } finally {
      setSaving(false)
    }
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
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${saved
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
