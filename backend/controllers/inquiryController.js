import { pool } from '../config/db.js'

export async function submitInquiry(req, res) {
  try {
    const { name, email, phone, event_type, event_date, location, message, page, data } = req.body

    const formFields = data && typeof data === 'object' ? data : {}
    const pageName = page || 'Contact'
    const clientName =
      name ||
      formFields.name ||
      (formFields.groomName || formFields.brideName
        ? `${formFields.groomName || ''} & ${formFields.brideName || ''}`.trim()
        : 'Anonymous')
    const clientEmail = email || formFields.email || ''
    const clientPhone = phone || formFields.phone || ''
    const eventType = event_type || formFields.shootType || formFields.eventType || pageName
    const eventDate = event_date || formFields.plannedDate || formFields.eventDate || formFields.date || ''
    const loc = location || formFields.location || ''
    const msg = message || formFields.message || ''

    // Build clean data object for FormSubmissions UI
    const payloadToStore =
      Object.keys(formFields).length > 0
        ? formFields
        : {
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            location: loc,
            plannedDate: eventDate,
            shootType: eventType,
            message: msg,
          }

    const fullDataJson = JSON.stringify(payloadToStore)

    const [result] = await pool.query(
      `INSERT INTO inquiries (page, name, email, phone, event_type, event_date, location, message, data_json, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'unread')`,
      [pageName, clientName, clientEmail, clientPhone, eventType, eventDate, loc, msg, fullDataJson]
    )

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully',
      id: result.insertId,
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to record inquiry', error: error.message })
  }
}

export async function getInquiries(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM inquiries ORDER BY id DESC')
    return res.json({
      success: true,
      data: rows.map((r) => {
        let parsedData = null
        if (r.data_json) {
          try {
            parsedData = JSON.parse(r.data_json)
          } catch {
            parsedData = null
          }
        }
        if (!parsedData || typeof parsedData !== 'object') {
          parsedData = {
            name: r.name || '',
            email: r.email || '',
            phone: r.phone || '',
            location: r.location || '',
            plannedDate: r.event_date || '',
            shootType: r.event_type || '',
            message: r.message || '',
          }
        }
        return {
          id: r.id,
          page: r.page || (r.event_type === 'Packages' ? 'Packages' : 'Contact'),
          data: parsedData,
          name: r.name,
          email: r.email,
          phone: r.phone,
          eventType: r.event_type,
          eventDate: r.event_date,
          location: r.location,
          message: r.message,
          read: r.status === 'read',
          status: r.status,
          timestamp: r.created_at,
        }
      }),
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch inquiries', error: error.message })
  }
}

export async function markAsRead(req, res) {
  try {
    const { id } = req.params
    const { read = true } = req.body
    const newStatus = read ? 'read' : 'unread'

    await pool.query('UPDATE inquiries SET status = ? WHERE id = ?', [newStatus, id])
    return res.json({ success: true, message: `Inquiry marked as ${newStatus}` })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update inquiry status', error: error.message })
  }
}

export async function markAllRead(req, res) {
  try {
    await pool.query("UPDATE inquiries SET status = 'read'")
    return res.json({ success: true, message: 'All inquiries marked as read' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to update inquiries', error: error.message })
  }
}

export async function deleteInquiry(req, res) {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM inquiries WHERE id = ?', [id])
    return res.json({ success: true, message: 'Inquiry deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete inquiry', error: error.message })
  }
}

export async function deleteAllInquiries(req, res) {
  try {
    await pool.query('DELETE FROM inquiries')
    return res.json({ success: true, message: 'All inquiries deleted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to delete inquiries', error: error.message })
  }
}
