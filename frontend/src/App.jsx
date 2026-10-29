import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import PortfolioDetails from './pages/PortfolioDetails.jsx'
import Packages from './pages/Packages.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import { syncWithBackend } from './utils/contentStore.js'

// Lazy-load admin panel — keeps the public bundle small & fast
const AdminPanel = React.lazy(() => import('./pages/AdminPanel.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

/* Lightweight spinner shown while the admin chunk downloads */
function AdminLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-gray-700 border-t-[#7296a2]" />
        <p className="mt-4 text-sm tracking-widest text-gray-500">LOADING ADMIN…</p>
      </div>
    </div>
  )
}

/* Public site layout with Navbar + Footer */
function PublicLayout() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default function App() {
  const [, setSyncTick] = useState(0)

  useEffect(() => {
    const handleSync = () => setSyncTick((t) => t + 1)
    window.addEventListener('wd_content_sync', handleSync)
    syncWithBackend()
    return () => window.removeEventListener('wd_content_sync', handleSync)
  }, [])

  return (
    <Routes>
      {/* Admin panel — standalone layout, lazy-loaded */}
      <Route
        path="/wd-x9panel"
        element={
          <Suspense fallback={<AdminLoader />}>
            <AdminPanel />
          </Suspense>
        }
      />

      {/* Aliases: /admin and /login open the admin panel */}
      <Route path="/admin" element={<Navigate to="/wd-x9panel" replace />} />
      <Route path="/login" element={<Navigate to="/wd-x9panel" replace />} />

      {/* Everything else → public site with Navbar/Footer */}
      <Route path="/*" element={<PublicLayout />} />
    </Routes>
  )
}
