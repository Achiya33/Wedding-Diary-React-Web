import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site.js'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/packages', label: 'Packages' },
  { to: '/contact', label: 'Contact Us' },
]

function Brand({ light }) {
  return (
    <img
      src={light ? "/logo.png" : "/logob.png"}
      alt="Logo"
      className="h-10 w-auto object-contain transition-all duration-300"
    />
  )
}

function NavItem({ to, label, onClick, light }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'text-sm uppercase tracking-[0.26em] transition',
          light
            ? isActive
              ? 'text-white underline underline-offset-8 decoration-white/80'
              : 'text-white/80 hover:text-white'
            : isActive
              ? 'text-ink underline underline-offset-8 decoration-gold/80'
              : 'text-ink/80 hover:text-ink',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const light = isHome && !scrolled && !open

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        light ? 'bg-transparent' : 'border-b border-black/10 bg-sand/70 backdrop-blur',
      ].join(' ')}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="shrink-0" aria-label="Go to homepage">
          <Brand light={light} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} light={light} />
          ))}
        </nav>

        <div className="lg:hidden">
          <button
            className={[
              'inline-flex h-11 w-11 items-center justify-center rounded-full border transition',
              light ? 'border-white/25 text-white hover:bg-white/10' : 'border-black/10 text-ink hover:bg-black/5',
            ].join(' ')}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-sand lg:hidden">
          <div className="container-page flex flex-col gap-4 py-5">
            {nav.map((item) => (
              <NavItem key={item.to} {...item} onClick={() => setOpen(false)} light={false} />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
