import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function seed() {
  console.log('🌱 Starting Database Initialization and Seeding...')

  const host = process.env.DB_HOST || '127.0.0.1'
  const port = parseInt(process.env.DB_PORT || '3306', 10)
  const user = process.env.DB_USER || 'wedding_user'
  const password = process.env.DB_PASSWORD || 'WeddingPass2026!'
  const dbName = process.env.DB_NAME || 'wedding_diary'

  // Wait / Retry loop for database container startup
  let db = null
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      db = await mysql.createConnection({
        host,
        port,
        user,
        password,
        database: dbName,
        multipleStatements: true,
      })
      console.log(`✅ Connected to database "${dbName}" on attempt ${attempt}.`)
      break
    } catch (err) {
      if (attempt === 10) {
        throw new Error(`Could not connect to database at ${host}:${port} after 10 attempts: ${err.message}`)
      }
      console.log(`⏳ Waiting for database (${host}:${port}) to be ready... (attempt ${attempt}/10)`)
      await new Promise((r) => setTimeout(r, 3000))
    }
  }

  // Execute schema.sql
  const schemaPath = path.join(__dirname, '..', 'schema.sql')
  const schemaSql = fs.readFileSync(schemaPath, 'utf8')
  await db.query(schemaSql)
  console.log('✅ Tables created/verified from schema.sql')

  // Safe migrations for existing tables if created before schema update
  const safeAlterQueries = [
    'ALTER TABLE `testimonials` ADD COLUMN `couple_image` TEXT DEFAULT NULL',
    "ALTER TABLE `inquiries` ADD COLUMN `page` VARCHAR(100) DEFAULT 'Contact'",
    'ALTER TABLE `inquiries` ADD COLUMN `data_json` LONGTEXT DEFAULT NULL',
  ]
  for (const q of safeAlterQueries) {
    try {
      await db.query(q)
    } catch {
      // Column already exists
    }
  }

  // Check or Seed Default Admin
  const [admins] = await db.query('SELECT id FROM admins WHERE username = ?', ['admin'])
  if (admins.length === 0) {
    const defaultPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'admin123'
    const hash = await bcrypt.hash(defaultPassword, 10)
    await db.query('INSERT INTO admins (username, password_hash, role) VALUES (?, ?, ?)', [
      'admin',
      hash,
      'owner',
    ])
    console.log(`👑 Default admin created -> Username: admin | Password: ${defaultPassword}`)
  } else {
    console.log('ℹ️ Admin user already exists.')
  }

  // Seed default site settings & hero slides
  const defaultHeroSlides = [
    '/images/home/WDM02710.webp',
    '/images/home/WDM04908.webp',
    '/images/home/_RO_3416.webp',
  ]

  const defaultSite = {
    brand: 'WEDDING DIARY',
    tagline: 'Fine art photography for timeless memories',
    heroQuote: 'Through light and emotion, we turn moments into timeless stories.',
    email: 'info.wdiary@gmail.com',
    phone: '+94 77 655 5586',
    address: '399/B, Waththawa, Mathugama, Srilanka.',
    socials: {
      instagram: 'https://www.instagram.com/w_diarylk/?hl=en',
      facebook: 'https://web.facebook.com/weddingdiarysl/?_rdc=1&_rdr#',
    },
    formspreeEndpoint: 'https://formspree.io/f/mgonpveb',
  }

  await db.query(
    `INSERT INTO site_settings (setting_key, setting_value)
     VALUES ('heroSlides', ?), ('site', ?)
     ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)`,
    [JSON.stringify(defaultHeroSlides), JSON.stringify(defaultSite)]
  )
  console.log('✅ Site settings and hero slides seeded.')

  // Seed default services
  const [servRows] = await db.query('SELECT id FROM services LIMIT 1')
  if (servRows.length === 0) {
    const services = [
      [
        'WEDDINGS',
        'Every love story is different and deserves to be told in its unique way. We look forward to making your special day a unique one.',
        'glass',
        '/images/service/WDC02899.webp',
        0,
      ],
      [
        'ENGAGEMENTS',
        'Your engagement is a wonderful time in both of your lives, and a photo shoot is a great way to commemorate that.',
        'rings',
        '/images/service/WDC06750.webp',
        1,
      ],
      [
        'CASUAL SHOOTS',
        'Casual shoots are a great way to remove that doubt and fear of being in front of a camera on your wedding day.',
        'flower',
        '/images/service/WDM02715.webp',
        2,
      ],
    ]
    await db.query(
      'INSERT INTO services (title, description, pricing_details, cover_image, order_index) VALUES ?',
      [services]
    )
    console.log('✅ Services seeded.')
  }

  // Seed default testimonials
  const [testRows] = await db.query('SELECT id FROM testimonials LIMIT 1')
  if (testRows.length === 0) {
    const testimonials = [
      ['Thathsara Chamodi', 'Amazing experience! Captured every single detail beautifully.', 'Wedding Shoot', 'images/Review/1 copy.png', 0],
      ['Waruni Edirimanna', 'The photos brought tears to our eyes. Thank you Wedding Diary team!', 'Wedding Shoot', 'images/Review/2 copy.png', 1],
      ['Madushani Meegoda', 'Extremely professional and friendly crew. Highly recommended!', 'Engagement Shoot', 'images/Review/3 copy.png', 2],
      ['Review 4', '', 'Wedding Shoot', 'images/Review/4 copy.png', 3],
      ['Review 5', '', 'Wedding Shoot', 'images/Review/5 copy.png', 4],
      ['Review 6', '', 'Wedding Shoot', 'images/Review/6 copy.png', 5],
      ['Review 7', '', 'Wedding Shoot', 'images/Review/7 copy.png', 6],
      ['Review 8', '', 'Wedding Shoot', 'images/Review/8 copy.png', 7],
      ['Review 9', '', 'Wedding Shoot', 'images/Review/9 copy.png', 8],
    ]
    await db.query(
      'INSERT INTO testimonials (client_name, quote, category, couple_image, order_index) VALUES ?',
      [testimonials]
    )
    console.log('✅ Testimonials seeded.')
  }

  // Seed default blogs
  const [blogRows] = await db.query('SELECT id FROM blogs LIMIT 1')
  if (blogRows.length === 0) {
    const blogs = [
      [
        'how-to-find-the-best-wedding-hair-makeup-artist',
        'How to Find the Best Wedding Hair & Makeup Artist',
        'March 01, 2026',
        '3 min read',
        'Your wedding day is one of the most special moments of your life, and you deserve to look and feel stunning. The right hair and makeup artist can make all the difference, helping you bring your dream look to life and giving you the confidence to shine.',
        '/images/blog/PSI01784.webp',
        `Your wedding day is one of the most special moments of your life, and you deserve to look and feel stunning. The right hair and makeup artist can make all the difference, helping you bring your dream look to life and giving you the confidence to shine. But with so many options out there, finding the perfect artist can feel overwhelming.

Here are some tips to help you find the best wedding hair and makeup artist:

1. Start Early – The best artists get booked months in advance. Begin your search at least 6-8 months before your wedding day.

2. Do Your Research – Look at portfolios, read reviews, and ask for recommendations from friends, family, or your wedding planner.

3. Schedule Trials – Always do a trial run before committing. This allows you to see the artist's work firsthand and make adjustments.

4. Consider Your Style – Find an artist whose portfolio matches the style you're going for, whether it's natural, glamorous, or somewhere in between.

5. Budget Wisely – Quality comes at a price. Allocate a reasonable budget for hair and makeup, and remember that this is an investment in how you'll look and feel on your big day.

6. Communication is Key – Be clear about your expectations and share reference photos. A good artist will listen and collaborate with you.

Remember, the right hair and makeup artist will not only make you look beautiful but will also help you feel calm and confident as you walk down the aisle.`,
      ],
      [
        'planning-your-couple-shoot-in-colombo',
        'Planning Your Couple Shoot in Colombo? From Low Budget to High Budget Locations.',
        'March 01, 2026',
        '4 min read',
        "Your couple shoot is more than just taking photos. It's about celebrating your love and capturing your unique bond. Colombo with its mix of beautiful spots and stunning views, is a great place for this special moment.",
        '/images/blog/WDM06361.webp',
        `Your couple shoot is more than just taking photos. It's about celebrating your love and capturing your unique bond. Colombo, with its mix of beautiful spots and stunning views, is a great place for this special moment. Whether you prefer a quiet park or a fancy hotel, there's something here to suit every couple and every budget.

Low Budget Locations:

- Viharamahadevi Park – Lush greenery and beautiful old trees make this a perfect natural backdrop.
- Galle Face Green – The ocean breeze and sunset views create romantic golden hour shots.
- Independence Square – Colonial architecture with open spaces for elegant photos.

Mid Budget Locations:

- Beira Lake – Scenic waterfront views with the city skyline in the background.
- Mount Lavinia Beach – A classic choice with beautiful sandy shores and dramatic rock formations.
- Pettah Streets – For couples who love an urban, vibrant vibe.`,
      ],
    ]
    await db.query(
      'INSERT INTO blogs (slug, title, date_display, read_time, excerpt, cover_image, content_json) VALUES ?',
      [blogs]
    )
    console.log('✅ Blogs seeded.')
  }

  // Seed default portfolio
  const [portRows] = await db.query('SELECT id FROM portfolio LIMIT 1')
  if (portRows.length === 0) {
    const [ins1] = await db.query(
      'INSERT INTO portfolio (slug, title, subtitle, category, cover_image, quote, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ['Dinali-engagement', 'Dinali & Dinusha', 'Engagement Shoot', 'Engagement', '/images/portfolio/Dinali/WDM03661.webp', 'A beautiful wedding story captured with emotion and elegance.', 0]
    )
    await db.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [
      [
        [ins1.insertId, '/images/portfolio/Dinali/WDM04487.webp', 0],
        [ins1.insertId, '/images/portfolio/Dinali/WDM04491.webp', 1],
      ],
    ])

    const [ins2] = await db.query(
      'INSERT INTO portfolio (slug, title, subtitle, category, cover_image, quote, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ['Viraji-wedding', 'Viraji & Gimhana', 'Wedding Shoot', 'Wedding', '/images/portfolio/viraji/WDM02340.webp', 'A day filled with love and beautiful moments.', 1]
    )
    await db.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [
      [[ins2.insertId, '/images/portfolio/viraji/1.webp', 0]],
    ])

    const [ins3] = await db.query(
      'INSERT INTO portfolio (slug, title, subtitle, category, cover_image, quote, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ['Sanduni-Engagement', 'Sanduni & Harindu', 'Engagement Shoot', 'Engagement', '/images/portfolio/saduni/WDM04134.webp', 'Two hearts, one beautiful celebration.', 2]
    )
    await db.query('INSERT INTO portfolio_images (portfolio_id, image_url, order_index) VALUES ?', [
      [
        [ins3.insertId, '/images/portfolio/sadunni/WDC03332.webp', 0],
        [ins3.insertId, '/images/portfolio/saduni/WDC03336.webp', 1],
      ],
    ])

    console.log('✅ Portfolio & gallery images seeded.')
  }

  await db.end()
  console.log('🎉 Seeding completed successfully!')
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
