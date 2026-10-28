import { pool } from '../config/db.js'

export async function getTestimonials(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM testimonials ORDER BY order_index ASC, id ASC')
    return res.json({
      success: true,
      data: rows.map((t) => ({
        id: t.id,
        name: t.client_name,
        text: t.quote,
        category: t.category,
        image: t.couple_image || '',
      })),
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch testimonials', error: error.message })
  }
}

export async function saveTestimonialsBatch(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const items = req.body // array of testimonials

    if (!Array.isArray(items)) {
      await conn.rollback()
      return res.status(400).json({ success: false, message: 'Array expected' })
    }

    await conn.query('DELETE FROM testimonials')

    if (items.length > 0) {
      const values = items.map((t, idx) => [
        t.name || 'Client',
        t.text || t.quote || '',
        t.category || 'Wedding Shoot',
        t.image || '',
        idx,
      ])

      await conn.query(
        'INSERT INTO testimonials (client_name, quote, category, couple_image, order_index) VALUES ?',
        [values]
      )
    }

    await conn.commit()
    return res.json({ success: true, message: 'Testimonials updated successfully' })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to update testimonials', error: error.message })
  } finally {
    conn.release()
  }
}
