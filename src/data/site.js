import { asset } from '../utils/assetPath.js'

export const site = {
  brand: 'WEDDING DIARY',
  tagline: 'Fine art photography for timeless memories',
  heroQuote: 'Through light and emotion, we turn moments into timeless stories.',
  email: 'info.wdiary@gmail.com',
  phone: '+94 77 655 5586',
  address: '399/B, Waththawa, Mathugama, Srilanka.',
  socials: {
    instagram: 'https://www.instagram.com/w_diarylk/?hl=en',
    facebook: 'https://web.facebook.com/weddingdiarysl/?_rdc=1&_rdr#',
    whatsapp: 'https://wa.me/94776555586',
  },

  formspreeEndpoint: 'https://formspree.io/f/mgonpveb',

  // Logos (editable from admin)
  logos: {
    light: asset('/logo.png'),
    dark: asset('/logob.png'),
  },

  // Page hero banner images (editable from admin)
  pageHeroes: {
    about: asset('/images/pak/44.webp'),
    contact: asset('/images/pak/WDC09210.webp'),
    packages: asset('/images/pak/WDC02930.webp'),
    portfolio: asset('/images/pak/DSC05262 (3).webp'),
  },

  // About page collage images (editable from admin)
  aboutImages: {
    image1: asset('/images/about/55.jpg'),
    image2: asset('/images/about/4545.jpg'),
    image3: asset('/images/about/555.jpg'),
  },

  // Google Maps embed URL for contact page
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.691464900581!2d80.134532!3d6.531426000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d70219d3214b%3A0xf83fe654ec62209!2sWedding%20Diary%20Photography!5e0!3m2!1sen!2sus!4v1773714030733!5m2!1sen!2sus',
}
