import { pool } from '../config/db.js'

export async function getSettingByKey(req, res) {
  try {
    const { key } = req.params
    const [rows] = await pool.query('SELECT setting_value FROM site_settings WHERE setting_key = ?', [key])
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Setting not found' })
    }
    const val = JSON.parse(rows[0].setting_value)
    return res.json({ success: true, data: val })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to get setting', error: error.message })
  }
}

export async function saveSettingByKey(req, res) {
  try {
    const { key } = req.params
    const valueStr = JSON.stringify(req.body)

    await pool.query(
      `INSERT INTO site_settings (setting_key, setting_value)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)`,
      [key, valueStr]
    )

    return res.json({ success: true, message: `Setting "${key}" saved successfully` })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to save setting', error: error.message })
  }
}

export async function getAllSettings(req, res) {
  try {
    const [rows] = await pool.query('SELECT setting_key, setting_value FROM site_settings')
    const result = {}
    rows.forEach((r) => {
      try {
        result[r.setting_key] = JSON.parse(r.setting_value)
      } catch {
        result[r.setting_key] = r.setting_value
      }
    })
    return res.json({ success: true, data: result })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch settings', error: error.message })
  }
}
