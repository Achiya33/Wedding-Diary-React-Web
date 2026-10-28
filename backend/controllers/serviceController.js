import { pool } from '../config/db.js'

export async function getServices(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM services ORDER BY order_index ASC, id ASC')
    return res.json({
      success: true,
      data: rows.map((s) => ({
        id: s.id,
        number: String(s.order_index + 1).padStart(2, '0'),
        title: s.title,
        description: s.description,
        icon: s.pricing_details || 'glass',
        image: s.cover_image,
      })),
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch services', error: error.message })
  }
}

export async function saveServicesBatch(req, res) {
  const conn = await pool.getConnection()
  try {
    await conn.beginTransaction()
    const services = req.body

    if (!Array.isArray(services)) {
      await conn.rollback()
      return res.status(400).json({ success: false, message: 'Array expected' })
    }

    await conn.query('DELETE FROM services')

    if (services.length > 0) {
      const values = services.map((s, idx) => [
        s.title || '',
        s.description || '',
        s.icon || 'glass',
        s.image || '',
        idx,
      ])

      await conn.query(
        'INSERT INTO services (title, description, pricing_details, cover_image, order_index) VALUES ?',
        [values]
      )
    }

    await conn.commit()
    return res.json({ success: true, message: 'Services updated successfully' })
  } catch (error) {
    await conn.rollback()
    return res.status(500).json({ success: false, message: 'Failed to update services', error: error.message })
  } finally {
    conn.release()
  }
}
