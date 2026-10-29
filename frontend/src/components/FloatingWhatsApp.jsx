import React, { useState, useEffect } from 'react'
import { getContent } from '../utils/contentStore.js'
import { formatWhatsAppUrl } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function FloatingWhatsApp() {
  const [site, setSite] = useState(() => getContent('site') || {})

  useEffect(() => {
    const handleSync = () => setSite(getContent('site') || {})
    window.addEventListener('wd_content_sync', handleSync)
    return () => window.removeEventListener('wd_content_sync', handleSync)
  }, [])

  const whatsappNumber = site.whatsapp || site.socials?.whatsapp || site.phone
  const whatsappUrl = formatWhatsAppUrl(whatsappNumber)

  if (!whatsappUrl) return null

  return (
    <aside aria-label="WhatsApp Chat" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:bg-[#20ba59] hover:shadow-2xl hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon size={24} className="shrink-0 text-white fill-white" />
        <span className="hidden sm:inline-block text-sm font-semibold tracking-wide pr-1">
          Chat with us
        </span>
      </a>
    </aside>
  )
}
