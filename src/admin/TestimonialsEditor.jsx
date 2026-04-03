import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Save } from 'lucide-react'
import { getContent, setContent } from '../utils/contentStore.js'

export default function TestimonialsEditor() {
  const [items, setItems] = useState([])
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setItems(getContent('testimonials') || [])
  }, [])

  const handleSave = () => {
    setContent('testimonials', items)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const addItem = () => {
    setItems([...items, { name: '', text: '' }])
  }

  const updateItem = (index, field, value) => {
    const updated = [...items]
    updated[index] = { ...updated[index], [field]: value }
    setItems(updated)
  }

  const deleteItem = (index) => {
    if (!confirm('Delete this testimonial?')) return
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Testimonials</h2>
          <p className="mt-1 text-sm text-gray-400">
            Manage client testimonials shown on the homepage.
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

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-700 bg-gray-800/50 p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-sm font-medium text-gray-300">
                Testimonial {index + 1}
              </span>
              <button
                onClick={() => deleteItem(index)}
                className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  value={item.name || ''}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none"
                  placeholder="e.g. Sara & James"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Testimonial Text
                </label>
                <textarea
                  value={item.text || ''}
                  onChange={(e) => updateItem(index, 'text', e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none resize-none"
                  placeholder="What the client said..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-700 py-4 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
      >
        <Plus className="h-4 w-4" /> Add Testimonial
      </button>
    </div>
  )
}
