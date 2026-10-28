/**
 * Backend API Client for Wedding Diary
 */

const isLocalDev = typeof window !== 'undefined' && window.location.port === '5173'
const API_BASE = import.meta.env.VITE_API_URL || (isLocalDev ? 'http://localhost:5000/api' : '/api')
export const SERVER_URL = import.meta.env.VITE_SERVER_URL || (isLocalDev ? 'http://localhost:5000' : '')

/**
 * Helper to resolve uploaded image paths
 * If url starts with /uploads, prepends SERVER_URL
 */
export function resolveImageUrl(url) {
  if (!url) return ''
  if (url.startsWith('/uploads')) {
    return `${SERVER_URL}${url}`
  }
  return url
}

// ─── Headers & Auth ───────────────────────────────────────────
function getHeaders(isFormData = false) {
  const headers = {}
  if (!isFormData) {
    headers['Content-Type'] = 'application/json'
  }
  const token = localStorage.getItem('wd_jwt_token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

async function handleResponse(res) {
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.message || `Request failed with status ${res.status}`)
  }
  return data
}

// ─── API Methods ──────────────────────────────────────────────
export const api = {
  // Auth
  async login(username, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ username, password }),
    })
    const data = await handleResponse(res)
    if (data.token) {
      localStorage.setItem('wd_jwt_token', data.token)
      localStorage.setItem('wd_admin_user', JSON.stringify(data.admin))
    }
    return data
  },

  async getMe() {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async getAdmins() {
    const res = await fetch(`${API_BASE}/auth/admins`, {
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async createAdmin(username, password) {
    const res = await fetch(`${API_BASE}/auth/admins`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ username, password }),
    })
    return handleResponse(res)
  },

  async deleteAdmin(username) {
    const res = await fetch(`${API_BASE}/auth/admins/${encodeURIComponent(username)}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async changePassword(currentPassword, newPassword, username) {
    const res = await fetch(`${API_BASE}/auth/change-password`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ username, currentPassword, newPassword }),
    })
    return handleResponse(res)
  },

  logout() {
    localStorage.removeItem('wd_jwt_token')
    localStorage.removeItem('wd_admin_user')
  },

  isAuthenticated() {
    return !!localStorage.getItem('wd_jwt_token')
  },

  // Portfolio
  async getPortfolio(category) {
    const url =
      category && category !== 'All'
        ? `${API_BASE}/portfolio?category=${encodeURIComponent(category)}`
        : `${API_BASE}/portfolio`
    const res = await fetch(url)
    return handleResponse(res)
  },

  async getPortfolioBySlug(slug) {
    const res = await fetch(`${API_BASE}/portfolio/${encodeURIComponent(slug)}`)
    return handleResponse(res)
  },

  async savePortfolioBatch(items) {
    const res = await fetch(`${API_BASE}/portfolio/batch`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(items),
    })
    return handleResponse(res)
  },

  async createPortfolio(item) {
    const res = await fetch(`${API_BASE}/portfolio`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(item),
    })
    return handleResponse(res)
  },

  async updatePortfolio(id, item) {
    const res = await fetch(`${API_BASE}/portfolio/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(item),
    })
    return handleResponse(res)
  },

  async deletePortfolio(id) {
    const res = await fetch(`${API_BASE}/portfolio/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  // Blogs
  async getBlogs() {
    const res = await fetch(`${API_BASE}/blogs`)
    return handleResponse(res)
  },

  async getBlogBySlug(slug) {
    const res = await fetch(`${API_BASE}/blogs/${encodeURIComponent(slug)}`)
    return handleResponse(res)
  },

  async saveBlogsBatch(posts) {
    const res = await fetch(`${API_BASE}/blogs/batch`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(posts),
    })
    return handleResponse(res)
  },

  async createBlog(blog) {
    const res = await fetch(`${API_BASE}/blogs`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(blog),
    })
    return handleResponse(res)
  },

  async updateBlog(id, blog) {
    const res = await fetch(`${API_BASE}/blogs/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(blog),
    })
    return handleResponse(res)
  },

  async deleteBlog(id) {
    const res = await fetch(`${API_BASE}/blogs/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  // Testimonials
  async getTestimonials() {
    const res = await fetch(`${API_BASE}/testimonials`)
    return handleResponse(res)
  },

  async saveTestimonials(items) {
    const res = await fetch(`${API_BASE}/testimonials/batch`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(items),
    })
    return handleResponse(res)
  },

  // Services
  async getServices() {
    const res = await fetch(`${API_BASE}/services`)
    return handleResponse(res)
  },

  async saveServices(items) {
    const res = await fetch(`${API_BASE}/services/batch`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(items),
    })
    return handleResponse(res)
  },

  // Settings & Hero Slides
  async getSetting(key) {
    const res = await fetch(`${API_BASE}/settings/${key}`)
    return handleResponse(res)
  },

  async getAllSettings() {
    const res = await fetch(`${API_BASE}/settings`)
    return handleResponse(res)
  },

  async saveSetting(key, data) {
    const res = await fetch(`${API_BASE}/settings/${key}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
    return handleResponse(res)
  },

  // Inquiries / Form Submissions
  async submitInquiry(payload) {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    })
    return handleResponse(res)
  },

  async getInquiries() {
    const res = await fetch(`${API_BASE}/inquiries`, {
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async markInquiryRead(id, read = true) {
    const res = await fetch(`${API_BASE}/inquiries/${id}/read`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({ read }),
    })
    return handleResponse(res)
  },

  async markAllInquiriesRead() {
    const res = await fetch(`${API_BASE}/inquiries/mark-all-read`, {
      method: 'POST',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async deleteInquiry(id) {
    const res = await fetch(`${API_BASE}/inquiries/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  async deleteAllInquiries() {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
    return handleResponse(res)
  },

  // Upload Images
  async uploadImage(file) {
    const formData = new FormData()
    formData.append('image', file)
    const res = await fetch(`${API_BASE}/upload/single`, {
      method: 'POST',
      headers: getHeaders(true),
      body: formData,
    })
    return handleResponse(res)
  },

  async uploadMultipleImages(files) {
    const formData = new FormData()
    for (const f of files) {
      formData.append('images', f)
    }
    const res = await fetch(`${API_BASE}/upload/multiple`, {
      method: 'POST',
      headers: getHeaders(true),
      body: formData,
    })
    return handleResponse(res)
  },
}
