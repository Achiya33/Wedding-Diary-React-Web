import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Image,
  FolderOpen,
  FileText,
  MessageSquare,
  Briefcase,
  Settings,
  Download,
  Globe,
  Shield,
  LogOut,
  Menu,
  X,
  Inbox,
  Cloud,
  Database,
} from 'lucide-react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import AdminLogin, { logoutAdmin } from './AdminLogin.jsx'
import HeroEditor from '../admin/HeroEditor.jsx'
import PortfolioEditor from '../admin/PortfolioEditor.jsx'
import BlogEditor from '../admin/BlogEditor.jsx'
import TestimonialsEditor from '../admin/TestimonialsEditor.jsx'
import ServicesEditor from '../admin/ServicesEditor.jsx'
import SiteSettingsEditor from '../admin/SiteSettingsEditor.jsx'
import ExportImport from '../admin/ExportImport.jsx'
import HostingGuide from '../admin/HostingGuide.jsx'
import AdminManager from '../admin/AdminManager.jsx'
import FormSubmissions from '../admin/FormSubmissions.jsx'
import CloudBackup from '../admin/CloudBackup.jsx'
import FirebaseSetup from '../admin/FirebaseSetup.jsx'
import { getCachedSubmissions } from '../utils/submissionDB.js'
import { seedDefaults } from '../utils/contentStore.js'

const SECTIONS = [
  { key: 'hero', label: 'Hero Slides', icon: Image },
  { key: 'portfolio', label: 'Portfolio', icon: FolderOpen },
  { key: 'blog', label: 'Blog Posts', icon: FileText },
  { key: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { key: 'services', label: 'Services', icon: Briefcase },
  { key: 'site', label: 'Site Settings', icon: Settings },
  { key: 'inquiries', label: 'Inquiries', icon: Inbox },
  { key: 'export', label: 'Export / Import', icon: Download },
  { key: 'backup', label: 'Cloud Backup', icon: Cloud },
  { key: 'hosting', label: 'Hosting Guide', icon: Globe },
  { key: 'admins', label: 'Admin Users', icon: Shield },
  { key: 'firebase', label: 'Firebase Setup', icon: Database },
]

function SectionContent({ section }) {
  switch (section) {
    case 'hero':
      return <HeroEditor />
    case 'portfolio':
      return <PortfolioEditor />
    case 'blog':
      return <BlogEditor />
    case 'testimonials':
      return <TestimonialsEditor />
    case 'services':
      return <ServicesEditor />
    case 'site':
      return <SiteSettingsEditor />
    case 'inquiries':
      return <FormSubmissions />
    case 'export':
      return <ExportImport />
    case 'backup':
      return <CloudBackup />
    case 'hosting':
      return <HostingGuide />
    case 'admins':
      return <AdminManager />
    case 'firebase':
      return <FirebaseSetup />
    default:
      return <HeroEditor />
  }
}

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  // Listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user)
      setAuthChecked(true)
      // Auto-seed defaults on first admin login
      if (user) {
        seedDefaults().catch(() => {})
      }
    })
    return () => unsubscribe()
  }, [])

  // Refresh unread count periodically from cloud cache
  useEffect(() => {
    const refreshCount = () => {
      const subs = getCachedSubmissions()
      setUnreadCount(subs.filter((s) => !s.read).length)
    }
    refreshCount()
    const interval = setInterval(refreshCount, 5000)
    return () => clearInterval(interval)
  }, [activeSection])
  const navigate = useNavigate()

  // Show loading while checking auth state
  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-gray-700 border-t-[#7296a2]" />
          <p className="mt-4 text-sm tracking-widest text-gray-500">CHECKING AUTH…</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />
  }

  const handleLogout = async () => {
    await logoutAdmin()
    navigate('/')
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-800 bg-gray-900 transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-5">
          <div>
            <h1 className="font-serif text-lg tracking-[0.15em] text-white">
              WD ADMIN
            </h1>
            <p className="mt-0.5 text-[11px] tracking-wider text-gray-500">
              Content Manager
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1.5 text-gray-500 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {SECTIONS.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.key
              return (
                <button
                  key={section.key}
                  onClick={() => {
                    setActiveSection(section.key)
                    setSidebarOpen(false)
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-[#7296a2]/15 text-[#7296a2] font-medium'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {section.label}
                  {section.key === 'inquiries' && unreadCount > 0 && (
                    <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#7296a2] px-1.5 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className="border-t border-gray-800 px-3 py-4 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-800 hover:text-white"
          >
            ↗ View Live Site
          </a>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-gray-800 bg-gray-900/50 px-6 py-4 backdrop-blur-lg">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-400 hover:text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-medium text-white">
            {SECTIONS.find((s) => s.key === activeSection)?.label}
          </h2>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">
            <SectionContent section={activeSection} />
          </div>
        </main>
      </div>
    </div>
  )
}
