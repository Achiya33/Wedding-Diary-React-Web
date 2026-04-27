import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { useFirebaseContent } from '../utils/useFirebaseContent.js'

export default function Footer() {
  const { data: site } = useFirebaseContent('site')
  return (
    <footer className="border-t border-black/10 bg-parchment">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl">About</h3>
            <p className="mt-3 text-sm text-ink/80 leading-relaxed">
             “Capturing love in its purest form, we turn fleeting moments into timeless memories.
With an artistic eye and heartfelt storytelling, every frame reflects your unique journey together.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                className="btn btn-outline px-3 py-2"
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                className="btn btn-outline px-3 py-2"
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl">Info</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" />
                <a className="hover:underline" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" />
                <a className="hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Portfolio</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-ink/80 hover:text-ink hover:underline" to="/portfolio">
                  Our Works
                </Link>
              </li>
              <li>
                <Link className="text-ink/80 hover:text-ink hover:underline" to="/packages">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Write Us</h3>
            <p className="mt-3 text-sm text-ink/80 leading-relaxed">
            Tell us your date, location, and what you’re planning — we’ll get back to you with availability and next steps.
            </p>
            <Link to="/contact" className="mt-4 inline-flex btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-ink/60">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span></span>
        </div>
      </div>
    </footer>
  )
}
