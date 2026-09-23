import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { asset } from '../utils/assetPath.js'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)
  const timerRef = React.useRef(null)

  const total = items?.length || 0

  // Auto-rotate timer
  React.useEffect(() => {
    if (!total || isPaused) return
    timerRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % total)
    }, 10000)
    return () => clearInterval(timerRef.current)
  }, [total, isPaused])

  function goTo(nextOrFn) {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex((prev) => {
      const next = typeof nextOrFn === 'function' ? nextOrFn(prev) : nextOrFn
      return next
    })
    setTimeout(() => setIsTransitioning(false), 800)
  }

  function handlePrev() {
    goTo((prev) => (prev - 1 + total) % total)
  }

  function handleNext() {
    goTo((prev) => (prev + 1) % total)
  }

  if (!total) return null

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main image carousel */}
      <div className="relative mx-auto max-w-[960px] overflow-hidden">
        {/* Slides */}
        <div className="relative aspect-[16/9] w-full sm:aspect-[1.85/1]">
          {items.map((item, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-[800ms] ease-in-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: i === index ? 'scale(1)' : 'scale(1.03)',
                pointerEvents: i === index ? 'auto' : 'none',
              }}
            >
              <img
                src={asset(item.image)}
                alt={item.name || `Customer review ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous review"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#7296a2] shadow-md backdrop-blur-sm transition hover:bg-white hover:scale-110 sm:left-4 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next review"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[#7296a2] shadow-md backdrop-blur-sm transition hover:bg-white hover:scale-110 sm:right-4 sm:h-12 sm:w-12"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex items-center justify-center gap-2.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to review ${i + 1}`}
            className={[
              'h-2.5 rounded-full transition-all duration-500',
              i === index
                ? 'w-10 bg-[#7296a2]'
                : 'w-2.5 bg-[#7296a2]/25 hover:bg-[#7296a2]/50',
            ].join(' ')}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="mt-4 text-center">
        <span className="font-serif text-sm tracking-[0.2em] text-[#7296a2]/60">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
