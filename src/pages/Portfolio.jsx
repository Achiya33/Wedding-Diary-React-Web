import React from 'react'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/portfolio.js'
import { useScrollAnimation } from '../utils/useScrollAnimation.js'
import { asset } from '../utils/assetPath.js'

const categories = [
  { value: 'all', label: 'ALL' },
  { value: 'Wedding', label: 'WEDDINGS' },
  { value: 'Engagement', label: 'ENGAGEMENTS' },
  { value: 'Pre Wedding', label: 'PRE WEDDING SHOOTS' },
  { value: 'Homecoming', label: 'HOMECOMINGS' },
]

function AlbumCard({ item, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <Link
      ref={ref}
      to={`/portfolio/${item.slug}`}
      className={`group relative block h-[420px] overflow-hidden sm:h-[470px] lg:h-[520px] scroll-animate scroll-animate-delay-${(index % 3) + 1} ${visClass}`}
    >
      <img
        src={item.coverImage || item.cover}
        alt={item.title}
        className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white transition duration-500 group-hover:translate-y-[-4px]">
        <h3 className="font-serif text-[18px] tracking-[0.06em] sm:text-[21px]">
          {item.title}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/85">
          {item.subtitle || item.category}
        </p>
      </div>
    </Link>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState('all')

  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[420px] w-full overflow-hidden">
      <img
        src={asset("/images/pak/44.webp")}
        alt="About Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up">
          Portfolio
        </h1>
      </div>
    </section>

      {/* Category Tabs */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`text-[13px] tracking-[0.14em] transition duration-300 ${
                  activeCategory === cat.value
                    ? 'text-[#7296a2] font-medium border-b-2 border-[#7296a2] pb-1'
                    : 'text-[#999] hover:text-[#666] pb-1 border-b-2 border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <AlbumCard key={item.slug + index} item={item} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-[#999]">No albums found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}