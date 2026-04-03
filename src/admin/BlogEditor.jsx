import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Save, ChevronDown, ChevronUp } from 'lucide-react'
import { getContent, setContent } from '../utils/contentStore.js'
import { generateId } from '../utils/imageUtils.js'
import ImageUploader from './ImageUploader.jsx'

function BlogItemEditor({ post, onChange, onDelete, isOpen, onToggle }) {
  const updateField = (field, value) => {
    onChange({ ...post, [field]: value })
  }

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-gray-800"
      >
        <div className="flex items-center gap-4">
          {post.image && (
            <img
              src={post.image}
              alt=""
              className="h-12 w-16 rounded-lg object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
          <div>
            <h3 className="font-medium text-white">{post.title || 'Untitled Post'}</h3>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="border-t border-gray-700 px-5 py-5 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                value={post.title || ''}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
              <input
                type="text"
                value={post.date || ''}
                onChange={(e) => updateField('date', e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none"
                placeholder="e.g. December 25, 2024"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Slug</label>
            <input
              type="text"
              value={post.slug || ''}
              onChange={(e) => updateField('slug', e.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none"
              placeholder="e.g. how-to-find-the-best-wedding-hair-makeup-artist"
            />
          </div>

          <ImageUploader
            value={post.image || ''}
            onChange={(val) => updateField('image', val)}
            label="Featured Image"
          />

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Excerpt</label>
            <textarea
              value={post.excerpt || ''}
              onChange={(e) => updateField('excerpt', e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none resize-none"
              placeholder="Short summary shown in blog listing..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Content</label>
            <textarea
              value={post.content || ''}
              onChange={(e) => updateField('content', e.target.value)}
              rows={10}
              className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#7296a2] focus:outline-none resize-y font-mono"
              placeholder="Full blog post content..."
            />
          </div>

          <div className="pt-3 border-t border-gray-700">
            <button
              onClick={onDelete}
              className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
            >
              <Trash2 className="h-4 w-4" /> Delete Post
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function BlogEditor() {
  const [posts, setPosts] = useState([])
  const [openIndex, setOpenIndex] = useState(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setPosts(getContent('blogs') || [])
  }, [])

  const handleSave = () => {
    setContent('blogs', posts)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const addPost = () => {
    const newPost = {
      slug: 'new-post-' + generateId(),
      title: '',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      image: '',
      excerpt: '',
      content: '',
    }
    setPosts([...posts, newPost])
    setOpenIndex(posts.length)
  }

  const updatePost = (index, updated) => {
    const items = [...posts]
    items[index] = updated
    setPosts(items)
  }

  const deletePost = (index) => {
    if (!confirm('Delete this blog post?')) return
    setPosts(posts.filter((_, i) => i !== index))
    setOpenIndex(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Blog Posts</h2>
          <p className="mt-1 text-sm text-gray-400">
            Manage blog articles. The latest 3 are shown on the homepage.
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

      <div className="space-y-3">
        {posts.map((post, index) => (
          <BlogItemEditor
            key={post.slug + index}
            post={post}
            onChange={(updated) => updatePost(index, updated)}
            onDelete={() => deletePost(index)}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <button
        onClick={addPost}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-700 py-4 text-sm text-gray-400 transition hover:border-[#7296a2] hover:text-[#7296a2]"
      >
        <Plus className="h-4 w-4" /> Add New Post
      </button>
    </div>
  )
}
