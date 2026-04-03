import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import GalleryCard from '../components/GalleryCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { site } from '../data/site.js'
import { services } from '../data/services.js'
import { portfolioItems } from '../data/portfolio.js'
import { testimonials } from '../data/testimonials.js'
import { blogPosts } from '../data/blogs.js'
import { Wine, Gem, Flower2 } from 'lucide-react'
import { useScrollAnimation } from '../utils/useScrollAnimation.js'


const heroSlides = [
  '/images/home/WDM02710.webp',
  '/images/home/WDM04908.webp',
  '/images/home/_RO_3416.webp',
]

function ServiceIcon({ icon }) {
  const common = "h-10 w-10 text-white"

  if (icon === 'glass') {
    return <Wine className={common} strokeWidth={1.8} />
  }

  if (icon === 'rings') {
    return <Gem className={common} strokeWidth={1.8} />
  }

  return <Flower2 className={common} strokeWidth={1.8} />
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
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {items.slice(0, 4).map((item, index) => (
            <Link
              key={item.slug + index}
              to={`/portfolio/${item.slug}`}
              className={`group relative block h-[280px] overflow-hidden sm:h-[320px] md:h-[360px] scroll-animate scroll-animate-delay-${Math.min(index + 1, 3)} ${visClass}`}
            >
              <img
                src={item.coverImage || item.cover}
                alt={item.title}
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

export default function Home() {
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
            src={image}
            alt={`Wedding hero background ${index + 1}`}
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





      <div className="mt-10 grid min-h-[720px] overflow-hidden lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="flex items-center bg-transparent px-6 py-10 lg:px-10">
          <div className="w-full space-y-8">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                className="block text-left"
              >
                <div className="text-[12px] tracking-[0.35em] text-black/40">
                  {service.number}
                </div>

                <div
                  className={`mt-2 font-serif text-4xl tracking-[0.18em] transition ${activeService === index ? 'text-black' : 'text-black/40'
                    }`}
                >
                  {service.title}
                </div>

                <div
                  className={`mt-3 h-px w-52 transition ${activeService === index ? 'bg-black/60' : 'bg-transparent'
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <img
            src={services[activeService].image}
            alt={services[activeService].title}
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      <FeaturedAlbumsSection items={latest} />

      <LatestBlogSection posts={blogPosts} />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Testimonial"
          title="What our customers say"
          subtitle="Replace these with real reviews from your clients to build trust quickly."
        />
        <div className="mt-10">
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>
    </div>
  )
}
