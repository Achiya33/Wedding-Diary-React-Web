import { pool } from '../config/db.js'

export async function getAllPortfolio(req, res) {
  try {
    const { category } = req.query
    let query = 'SELECT * FROM portfolio'
    const params = []

    if (category && category !== 'All') {
      query += ' WHERE category = ?'
      params.push(category)
    }
    query += ' ORDER BY order_index ASC, id ASC'

    const [items] = await pool.query(query, params)
    const [images] = await pool.query('SELECT * FROM portfolio_images ORDER BY order_index ASC, id ASC')

    const portfolioWithImages = items.map((item) => {
      const itemImages = images.filter((img) => img.portfolio_id === item.id).map((img) => img.image_url)
      return {
        id: item.id,
        slug: item.slug,
        title: item.title,
        subtitle: item.subtitle,
        category: item.category,
        coverImage: item.cover_image,
        quote: item.quote,
        images: itemImages,
        orderIndex: item.order_index,
        createdAt: item.created_at,
      }
    })

    return res.json({ success: true, data: portfolioWithImages })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch portfolio', error: error.message })
  }
}

export async function getPortfolioBySlug(req, res) {
  try {
    const { slug } = req.params
    const [rows] = await pool.query('SELECT * FROM portfolio WHERE slug = ?', [slug])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    }

    const item = rows[0]
    const [images] = await pool.query(
      'SELECT image_url FROM portfolio_images WHERE portfolio_id = ? ORDER BY order_index ASC, id ASC',
      [item.id]
    )

    return res.json({
      success: true,
      data: {
        id: item.id,
        slug: item.slug,
        title: item.title,
        subtitle: item.subtitle,
        category: item.category,
        coverImage: item.cover_image,
        quote: item.quote,
        images: images.map((i) => i.image_url),
        orderIndex: item.order_index,
        createdAt: item.created_at,
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch portfolio item', error: error.message })
  }
}

export async function savePortfolioBatch(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const items = req.body
    if (!Array.isArray(items)) {
      await conn.rollback()
      return res.status(400).json({ success: false, message: 'Array expected' })
    }

    await conn.query('DELETE FROM portfolio')

    for (let idx = 0; idx < items.length; idx++) {
      const item = items[idx]
      const cleanSlug =
        item.slug ||
        `${(item.title || 'album').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${idx + 1}`

      const [resInsert] = await conn.query(
        'INSERT INTO portfolio (slug, title, subtitle, category, cover_image, quote, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          cleanSlug,
          item.title || 'Untitled Album',
          item.subtitle || '',
          item.category || 'Wedding',
          item.coverImage || item.cover || '',
          item.quote || '',
          idx,
        ]
      )
      const portfolioId = resInsert.insertId

      if (Array.isArray(item.images) && item.images.length > 0) {
        const values = item.images.map((imgUrl, imgIdx) => [portfolioId, imgUrl, imgIdx])
        await conn.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [values])
      }
    }

    await conn.commit()
    return res.json({ success: true, message: 'Portfolio updated successfully' })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to save portfolio batch', error: error.message })
  } finally {
    conn.release()
  }
}

export async function createPortfolio(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const { slug, title, subtitle = '', category = 'Wedding', coverImage, quote = '', images = [] } = req.body

    if (!title || !coverImage) {
      await conn.rollback()
      return res.status(400).json({ success: false, message: 'Title and cover image are required' })
    }

    const cleanSlug =
      slug || `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`

    const [resInsert] = await conn.query(
      'INSERT INTO portfolio (slug, title, subtitle, category, cover_image, quote) VALUES (?, ?, ?, ?, ?, ?)',
      [cleanSlug, title, subtitle, category, coverImage, quote]
    )
    const portfolioId = resInsert.insertId

    if (Array.isArray(images) && images.length > 0) {
      const values = images.map((imgUrl, idx) => [portfolioId, imgUrl, idx])
      await conn.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [values])
    }

    await conn.commit()
    return res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      data: { id: portfolioId, slug: cleanSlug },
    })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to create portfolio item', error: error.message })
  } finally {
    conn.release()
  }
}

export async function updatePortfolio(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const { id } = req.params
    const { slug, title, subtitle, category, coverImage, quote, images } = req.body

    const [existing] = await conn.query('SELECT id FROM portfolio WHERE id = ?', [id])
    if (existing.length === 0) {
      await conn.rollback()
      return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    }

    await conn.query(
      'UPDATE portfolio SET slug = ?, title = ?, subtitle = ?, category = ?, cover_image = ?, quote = ? WHERE id = ?',
      [slug, title, subtitle, category, coverImage, quote, id]
    )

    if (Array.isArray(images)) {
      await conn.query('DELETE FROM portfolio_images WHERE portfolio_id = ?', [id])
      if (images.length > 0) {
        const values = images.map((imgUrl, idx) => [id, imgUrl, idx])
        await conn.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [values])
      }
    }

    await conn.commit()
    return res.json({ success: true, message: 'Portfolio item updated successfully' })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to update portfolio item', error: error.message })
  } finally {
    conn.release()
  }
}

export async function deletePortfolio(req, res) {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM portfolio WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    }
    return res.json({ success: true, message: 'Portfolio item deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete portfolio item', error: error.message })
  }
}
