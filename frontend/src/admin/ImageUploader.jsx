import React, { useRef, useState } from 'react'
import { Upload, X, Zap, Cloud } from 'lucide-react'
import { compressImage, formatFileSize, compressionRatio, isDataUrl, estimateBase64Size } from '../utils/imageUtils.js'
import { handleImageUpload } from "../utils/cloudinary.js"; //

/**
 * Reusable image uploader component with compression stats.
 * Supports:
 *   - Entering an image path (for images already in /public/images/)
 *   - Uploading a new image (compressed & uploaded to Firebase Storage)
 *   - Preview of the current image
 *   - Compression quality slider
 */
export default function ImageUploader({ value, onChange, label = 'Image', maxWidth = 1200 }) {
  const fileRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [mode, setMode] = useState(value && !value.startsWith('data:') ? 'path' : 'upload')
  const [stats, setStats] = useState(null)
  const [quality, setQuality] = useState(65)
  const [dragOver, setDragOver] = useState(false)

  const processFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return

    setLoading(true)
    setStats(null)
    try {
      // Step 1: Compress the image
      const result = await compressImage(file, maxWidth, quality / 100)
      
      setStats({
        originalSize: result.originalSize,
        compressedSize: result.compressedSize,
        width: result.width,
        height: result.height,
        ratio: compressionRatio(result.originalSize, result.compressedSize),
      })

      
    const downloadUrl = await handleImageUpload(result.dataUrl); //
      
      onChange(downloadUrl)
    } catch (err) {
      alert('Failed to process image: ' + err.message)
    } finally {
      setLoading(false)
      setUploading(false)
    }
  }

  const handleFileChange = (e) => {
    processFile(e.target.files?.[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
    processFile(e.dataTransfer.files?.[0])
  }

  // Get size of current value if it's a data URL
  const currentSize = value && isDataUrl(value) ? estimateBase64Size(value) : null

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">{label}</label>

      {/* Mode toggle */}
      <div className="flex items-center gap-2 mb-2">
        <button
          type="button"
          onClick={() => setMode('upload')}
          className={`px-3 py-1 text-xs rounded-md transition ${
            mode === 'upload'
              ? 'bg-[#7296a2] text-white'
              : 'bg-gray-700 text-gray-400 hover:text-white'
          }`}
        >
          Upload
        </button>
        <button
          type="button"
          onClick={() => setMode('path')}
          className={`px-3 py-1 text-xs rounded-md transition ${
            mode === 'path'
              ? 'bg-[#7296a2] text-white'
              : 'bg-gray-700 text-gray-400 hover:text-white'
          }`}
        >
          Image Path
        </button>
      </div>

      {mode === 'path' ? (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => { onChange(e.target.value); setStats(null) }}
          placeholder="/images/portfolio/folder/photo.webp"
          className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none focus:ring-1 focus:ring-[#7296a2]"
        />
      ) : (
        <>
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
            onClick={() => fileRef.current?.click()}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-6 transition ${
              dragOver
                ? 'border-[#7296a2] bg-[#7296a2]/10'
                : 'border-gray-600 bg-gray-800/50 hover:border-[#7296a2] hover:bg-gray-800'
            }`}
          >
            {loading || uploading ? (
              <div className="flex items-center gap-2 text-gray-400">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-500 border-t-[#7296a2]" />
                <span className="text-sm">
                  {uploading ? (
                    <span className="flex items-center gap-1.5">
                      <Cloud className="h-3.5 w-3.5" /> Uploading to cloud...
                    </span>
                  ) : (
                    'Compressing...'
                  )}
                </span>
              </div>
            ) : (
              <>
                <Upload className="h-6 w-6 text-gray-500" />
                <span className="mt-2 text-sm text-gray-400">
                  Click or drag & drop an image
                </span>
                <span className="mt-1 text-[11px] text-gray-600">
                  Auto-compressed to WebP · Max {maxWidth}px · Uploaded to Firebase
                </span>
              </>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </>
      )}

      {/* Compression stats */}
      {stats && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2 text-xs text-green-400">
          <span>📐 {stats.width}×{stats.height}</span>
          <span>📦 {formatFileSize(stats.originalSize)} → {formatFileSize(stats.compressedSize)}</span>
          <span className="font-semibold">🔥 {stats.ratio}% smaller</span>
        </div>
      )}

      {/* Current size indicator for data URLs */}
      {!stats && currentSize && (
        <div className="text-[11px] text-gray-500 px-1">
          Stored size: {formatFileSize(currentSize)}
        </div>
      )}

      {/* Preview */}
      {value && (
        <div className="relative mt-2 inline-block">
          <img
            src={value}
            alt="Preview"
            className="h-32 w-auto rounded-lg border border-gray-700 object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <button
            type="button"
            onClick={() => { onChange(''); setStats(null) }}
            className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white transition hover:bg-red-600"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  )
}
