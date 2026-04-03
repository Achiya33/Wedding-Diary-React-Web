import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { getContent } from '../utils/contentStore.js'
import { useScrollAnimation } from '../utils/useScrollAnimation.js'

function AlbumPhoto({ src, alt, index, onClick }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 })
  const delayClass = `scroll-animate-delay-${(index % 3) + 1}`
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={`group block w-full overflow-hidden scroll-animate ${delayClass} ${visClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-95"
        loading="lazy"
      />
    </button>
  )
}

export default function PortfolioDetails() {
  const { slug } = useParams()
  const portfolioItems = getContent('portfolio')
  const item = portfolioItems.find((p) => p.slug === slug)
  const [activeIndex, setActiveIndex] = React.useState(null)

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (activeIndex === null) return

    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
      if (e.key === 'ArrowLeft')
        setActiveIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1))
      if (e.key === 'ArrowRight')
        setActiveIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1))
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, item])

  if (!item) {
    return (
      <div className="container-page py-14">
        <p className="text-sm text-ink/70">Project not found.</p>
        <Link className="mt-4 inline-flex btn btn-primary" to="/portfolio">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section - BD style: centered title, subtitle, separator */}
      <section className="relative">
        <div className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden bg-black sm:h-[55vh] sm:min-h-[420px]">
          <img
            src={item.coverImage}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 text-center">
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-4 text-[13px] uppercase tracking-[0.25em] text-white/80">
              {item.subtitle || item.category}
            </p>
            <div className="mx-auto mt-5 h-px w-12 bg-white/40" />
          </div>
        </div>
      </section>

      {/* Photo Gallery - BD style: 3-column grid, small gaps, no rounded corners */}
      <section className="bg-[#f1f1f1] py-12 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-3">
            {item.images.map((src, i) => (
              <div key={src + i} className="mb-2 break-inside-avoid sm:mb-3">
                <AlbumPhoto
                  src={src}
                  alt={`${item.title} image ${i + 1}`}
                  index={i}
                  onClick={() => setActiveIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back / CTA Section */}
      <section className="bg-white py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-[#7296a2] transition hover:opacity-70"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-[#7296a2] transition hover:opacity-70"
          >
            Book / Ask a question <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 p-4"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) =>
                prev === 0 ? item.images.length - 1 : prev - 1
              )
            }}
            className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Image */}
          <img
            key={item.images[activeIndex]}
            src={item.images[activeIndex]}
            alt={`${item.title} large ${activeIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) =>
                prev === item.images.length - 1 ? 0 : prev + 1
              )
            }}
            className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={26} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 text-center text-sm text-white/70">
            {activeIndex + 1} / {item.images.length}
          </div>
        </div>
      )}
    </div>
  )
}
