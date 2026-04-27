import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { useFirebaseContent } from '../utils/useFirebaseContent.js'
import { useScrollAnimation } from '../utils/useScrollAnimation.js'
import { asset } from '../utils/assetPath.js'
import { usePageTitle } from '../utils/usePageTitle.js'



function ServiceIcon({ icon }) {
  if (icon === 'glass') {
    // Champagne glasses clinking with sparkles
    return (
      <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Left glass */}
          <path d="M18 8L14 28" />
          <path d="M26 8L22 28" />
          <ellipse cx="18" cy="28" rx="6" ry="2.5" />
          <line x1="18" y1="30.5" x2="18" y2="44" />
          <line x1="12" y1="44" x2="24" y2="44" />
          {/* Right glass */}
          <path d="M38 8L42 28" />
          <path d="M46 8L50 28" />
          <ellipse cx="44" cy="28" rx="6" ry="2.5" />
          <line x1="44" y1="30.5" x2="44" y2="44" />
          <line x1="38" y1="44" x2="50" y2="44" />
          {/* Sparkles */}
          <circle cx="31" cy="6" r="1" fill="white" />
          <circle cx="28" cy="12" r="0.8" fill="white" />
          <circle cx="35" cy="10" r="0.8" fill="white" />
          <circle cx="31" cy="16" r="1.2" fill="white" />
          <line x1="31" y1="2" x2="31" y2="4" />
          <line x1="29" y1="3" x2="33" y2="3" />
        </g>
      </svg>
    )
  }

  if (icon === 'rings') {
    // Two interlinked wedding rings with heart
    return (
      <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Heart on top */}
          <path d="M32 20 C32 20 28 12 24 12 C20 12 18 15 18 18 C18 22 32 30 32 30 C32 30 46 22 46 18 C46 15 44 12 40 12 C36 12 32 20 32 20Z" fill="none" />
          {/* Left ring */}
          <ellipse cx="24" cy="42" rx="11" ry="11" />
          {/* Right ring */}
          <ellipse cx="40" cy="42" rx="11" ry="11" />
          {/* Small diamond on left ring */}
          <path d="M24 35 L26 33 L24 31 L22 33 Z" fill="white" />
        </g>
      </svg>
    )
  }

  // Flower bouquet
  return (
    <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Center flower */}
        <circle cx="32" cy="20" r="4" fill="white" fillOpacity="0.3" />
        <ellipse cx="32" cy="13" rx="3" ry="4" />
        <ellipse cx="32" cy="27" rx="3" ry="4" />
        <ellipse cx="25" cy="17" rx="3" ry="4" transform="rotate(-45 25 17)" />
        <ellipse cx="39" cy="17" rx="3" ry="4" transform="rotate(45 39 17)" />
        <ellipse cx="25" cy="23" rx="3" ry="4" transform="rotate(45 25 23)" />
        <ellipse cx="39" cy="23" rx="3" ry="4" transform="rotate(-45 39 23)" />
        {/* Stem */}
        <line x1="32" y1="28" x2="32" y2="52" />
        {/* Leaves */}
        <path d="M32 36 C28 32 22 34 22 34 C22 34 26 38 32 36Z" fill="white" fillOpacity="0.25" />
        <path d="M32 42 C36 38 42 40 42 40 C42 40 38 44 32 42Z" fill="white" fillOpacity="0.25" />
      </g>
    </svg>
  )
}

function ServicesSection({ services }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <section ref={sectionRef} className="bg-[#f7f7f5] py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-3xl text-center scroll-animate ${visClass}`}>
          <h2 className="font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]">
            OUR SERVICES
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#6f7680]">
            With 10 years of experience capturing celebrations worldwide, we are here to make your special day unforgettable through timeless photos and videos.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center scroll-animate scroll-animate-delay-${index + 1} ${visClass}`}
            >
              {/* Icon circle */}
              <div
                className={`mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#7296a2] scroll-icon scroll-animate-delay-${index + 1} ${visClass}`}
              >
                <ServiceIcon icon={service.icon} />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-serif text-lg tracking-[0.12em] text-[#7296a2] sm:text-xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-[280px] text-[14px] leading-6 text-[#6f7680]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Know More link */}
        <div className={`mt-14 text-center scroll-animate scroll-animate-delay-3 ${visClass}`}>
          <a
            href="/Contact"
            className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:opacity-70"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  )
}

function FeaturedAlbumsSection({ items }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.08 })
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center scroll-animate ${visClass}`}>
          <h2 className="font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]">
            FEATURED ALBUMS
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#6f7680]">
            Throughout the years we have had the opportunity to photograph many wonderful couples.
          </p>
        </div>

        {/* Album grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
          {items.slice(0, 4).map((item, index) => (
            <Link
              key={item.slug + index}
              to={`/portfolio/${item.slug}`}
              className={`group relative block h-[220px] overflow-hidden sm:h-[320px] md:h-[360px] scroll-animate scroll-animate-delay-${Math.min(index + 1, 3)} ${visClass}`}
            >
              <img
                src={item.coverImage || item.cover}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition duration-500 group-hover:from-black/70" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white transition duration-500 group-hover:translate-y-[-4px]">
                <h3 className="font-serif text-[17px] tracking-[0.06em] sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/85">
                  {item.subtitle || item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function LatestBlogSection({ posts }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.08 })
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <section ref={sectionRef} className="bg-[#1a1a1a] py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center scroll-animate ${visClass}`}>
          <h2 className="font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]">
            LATEST BLOG & ARTICLES
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-white/55">
            Check out our latest blogs and articles. Get the scoop on new tips,
            stories, and more. There's always something fun and interesting
            waiting for you!
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`group block scroll-animate scroll-animate-delay-${Math.min(index + 1, 3)} ${visClass}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[800ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
              </div>

              {/* Text content */}
              <div className="mt-4">
                <span className="text-[12px] tracking-[0.1em] text-[#7296a2]">
                  {post.date}
                </span>
                <h3 className="mt-2 font-serif text-lg leading-snug text-white transition duration-300 group-hover:text-[#7296a2] sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All link */}
        <div className={`mt-12 text-center scroll-animate scroll-animate-delay-3 ${visClass}`}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-[12px] uppercase tracking-[0.25em] text-white/80 transition hover:bg-white hover:text-black"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CustomerReviewsSection({ testimonials }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const visClass = isVisible ? 'is-visible' : ''

  return (
    <section ref={sectionRef} className="bg-[#f7f7f5] py-16 sm:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-3xl text-center scroll-animate ${visClass}`}>
          <h2 className="font-serif text-3xl tracking-[0.1em] text-[#7296a2] sm:text-[38px]">
            DISCOVER WHAT OTHERS HAVE EXPERIENCED
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[#6f7680]">
            You deserve the absolute best.<br />
            That's why we want to make sure we are the right choice for you.
          </p>
        </div>

        {/* Carousel */}
        <div className={`mt-14 scroll-animate scroll-animate-delay-1 ${visClass}`}>
          <TestimonialCarousel items={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('Wedding Diary | Fine Art Wedding Photography', true)
  const { data: site } = useFirebaseContent('site')
  const { data: services } = useFirebaseContent('services')
  const { data: portfolioItems } = useFirebaseContent('portfolio')
  const { data: testimonials } = useFirebaseContent('testimonials')
  const { data: blogPosts } = useFirebaseContent('blogs')
  const { data: heroSlides } = useFirebaseContent('heroSlides')

  const latest = portfolioItems.slice(0, 6)
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [activeService, setActiveService] = React.useState(0)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {heroSlides.map((image, index) => (
          <img
            key={image}
            src={asset(image)}
            alt={`Wedding hero background ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className={[
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out',
              activeSlide === index ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />

        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4 text-white/70">
          <span className="text-sm tracking-[0.3em]">{String(activeSlide + 1).padStart(2, '0')}</span>
          <span className="h-24 w-px bg-white/30" />
          <span className="text-sm tracking-[0.3em]">{String(heroSlides.length).padStart(2, '0')}</span>
        </div>

        <div className="relative flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-6xl pt-24 sm:pt-28">
            <p className="text-[11px] uppercase tracking-[0.45em] text-white/75 sm:text-xs">
              {site.tagline}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
              MADE WITH LOVE
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg italic text-white/80 sm:text-2xl">
              Crafted with passion, from the heart.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="inline-flex min-w-[210px] items-center justify-center border border-white/40 px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black"
              >
                Read More
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
              >
                Write Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={[
                    'h-2.5 rounded-full transition-all duration-300',
                    activeSlide === index ? 'w-12 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/75',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSection services={services} />


      {/* Interactive Services Section — mobile responsive */}
      <div className="mt-10 grid min-h-[500px] overflow-hidden lg:min-h-[720px] lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* Service image (shown first on mobile for visual impact) */}
        <div className="relative min-h-[300px] order-first lg:order-last sm:min-h-[400px] lg:min-h-[520px]">
          <img
            src={asset(services[activeService]?.image)}
            alt={services[activeService]?.title}
            loading="lazy"
            className="h-full w-full object-cover object-right transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Service buttons */}
        <div className="flex items-center bg-transparent px-6 py-8 lg:py-10 lg:px-10 order-last lg:order-first">
          <div className="w-full flex gap-6 overflow-x-auto pb-2 lg:pb-0 lg:flex-col lg:gap-0 lg:space-y-8">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                className="block text-left shrink-0 lg:shrink"
              >
                <div className="text-[11px] tracking-[0.35em] text-black/40 sm:text-[12px]">
                  {service.number}
                </div>

                <div
                  className={`mt-1.5 font-serif text-2xl tracking-[0.12em] transition sm:text-3xl lg:text-4xl lg:tracking-[0.18em] lg:mt-2 ${
                    activeService === index ? 'text-black' : 'text-black/40'
                  }`}
                >
                  {service.title}
                </div>

                <div
                  className={`mt-2 h-px w-32 transition sm:w-44 lg:w-52 lg:mt-3 ${
                    activeService === index ? 'bg-black/60' : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <FeaturedAlbumsSection items={latest} />

      <LatestBlogSection posts={blogPosts} />

      <CustomerReviewsSection testimonials={testimonials} />
    </div>
  )
}
