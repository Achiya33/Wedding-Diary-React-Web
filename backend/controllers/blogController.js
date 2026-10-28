import { pool } from '../config/db.js'

function parseBlogContent(raw) {
  if (!raw) return ''
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      return parsed.join('\n\n')
    }
    if (typeof parsed === 'string') {
      return parsed
    }
    return String(raw)
  } catch {
    return String(raw)
  }
}

export async function getAllBlogs(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY id ASC')
    const blogs = rows.map((b) => ({
      id: b.id,
      slug: b.slug,
      title: b.title,
      date: b.date_display,
      readTime: b.read_time,
      excerpt: b.excerpt,
      image: b.cover_image || '',
      coverImage: b.cover_image || '',
      content: parseBlogContent(b.content_json),
      createdAt: b.created_at,
    }))
    return res.json({ success: true, data: blogs })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch blogs', error: error.message })
  }
}

export async function getBlogBySlug(req, res) {
  try {
    const { slug } = req.params
    const [rows] = await pool.query('SELECT * FROM blogs WHERE slug = ?', [slug])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Blog not found' })
    }
    const b = rows[0]
    return res.json({
      success: true,
      data: {
        id: b.id,
        slug: b.slug,
        title: b.title,
        date: b.date_display,
        readTime: b.read_time,
        excerpt: b.excerpt,
        image: b.cover_image || '',
        coverImage: b.cover_image || '',
        content: parseBlogContent(b.content_json),
        createdAt: b.created_at,
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch blog post', error: error.message })
  }
}

export async function saveBlogsBatch(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const posts = req.body
    if (!Array.isArray(posts)) {
      await conn.rollback()
      return res.status(400).json({ success: false, message: 'Array expected' })
    }

    await conn.query('DELETE FROM blogs')

    if (posts.length > 0) {
      const values = posts.map((p, idx) => {
        const cleanSlug =
          p.slug ||
          `${(p.title || 'post').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${idx + 1}`
        const contentStr = Array.isArray(p.content) ? p.content.join('\n\n') : p.content || ''
        return [
          cleanSlug,
          p.title || 'Untitled Post',
          p.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          p.readTime || '3 min read',
          p.excerpt || '',
          p.image || p.coverImage || '',
          contentStr,
        ]
      })

      await conn.query(
        'INSERT INTO blogs (slug, title, date_display, read_time, excerpt, cover_image, content_json) VALUES ?',
        [values]
      )
    }

    await conn.commit()
    return res.json({ success: true, message: 'Blogs updated successfully' })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to save blogs batch', error: error.message })
  } finally {
    conn.release()
  }
}

export async function createBlog(req, res) {
  try {
    const { slug, title, date, readTime, excerpt, image, coverImage, content } = req.body
    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' })
    }

    const cleanSlug =
      slug || `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`
    const contentStr = Array.isArray(content) ? content.join('\n\n') : content || ''

    const [result] = await pool.query(
      'INSERT INTO blogs (slug, title, date_display, read_time, excerpt, cover_image, content_json) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        cleanSlug,
        title,
        date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime || '3 min read',
        excerpt || '',
        image || coverImage || '',
        contentStr,
      ]
    )

    return res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: { id: result.insertId, slug: cleanSlug },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to create blog post', error: error.message })
  }
}

export async function updateBlog(req, res) {
  try {
    const { id } = req.params
    const { slug, title, date, readTime, excerpt, image, coverImage, content } = req.body
    const contentStr = Array.isArray(content) ? content.join('\n\n') : content || ''

    const [result] = await pool.query(
      'UPDATE blogs SET slug = ?, title = ?, date_display = ?, read_time = ?, excerpt = ?, cover_image = ?, content_json = ? WHERE id = ?',
      [slug, title, date, readTime, excerpt, image || coverImage || '', contentStr, id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Blog not found' })
    }

    return res.json({ success: true, message: 'Blog updated successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update blog post', error: error.message })
  }
}

export async function deleteBlog(req, res) {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM blogs WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Blog not found' })
    }
    return res.json({ success: true, message: 'Blog deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete blog post', error: error.message })
  }
}
