import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react'
import { useFirebaseContent } from '../utils/useFirebaseContent.js'
import { useScrollAnimation } from '../utils/useScrollAnimation.js'
import { usePageTitle } from '../utils/usePageTitle.js'

/* ── Blog listing page ── */
function BlogCard({ post, index, visClass }) {
  return (
    <Link
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
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/15" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-center gap-2 text-[12px] tracking-[0.1em] text-[#7296a2]">
          <Calendar size={13} className="opacity-70" />
          <span>{post.date}</span>
        </div>

        <h3 className="mt-3 font-serif text-xl leading-snug text-ink transition duration-300 group-hover:text-[#7296a2] sm:text-[22px] md:text-2xl">
          {post.title}
        </h3>

        <p className="mt-3 text-[14px] leading-relaxed text-[#6f7680] line-clamp-3">
          {post.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition group-hover:gap-2.5">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}

function BlogListPage() {
  usePageTitle('Blog')
  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation({ threshold: 0.1 })
  const { ref: gridRef, isVisible: gridVis } = useScrollAnimation({ threshold: 0.08 })
  const heroClass = heroVis ? 'is-visible' : ''
  const gridClass = gridVis ? 'is-visible' : ''

  const { data: blogs } = useFirebaseContent('blogs')

  return (
    <div>
      {/* Dark hero banner */}
      <section
        ref={heroRef}
        className="relative flex min-h-[340px] items-center justify-center bg-[#1a1a1a] pt-24 pb-16 text-center text-white sm:min-h-[400px]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        <div className={`relative z-10 px-6 scroll-animate ${heroClass}`}>
          <h1 className="font-serif text-4xl tracking-[0.1em] text-white sm:text-5xl md:text-[56px]">
            BLOG & ARTICLES
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/65">
            Check out our latest blogs and articles. Get the scoop on new tips,
            stories, and more. There's always something fun and interesting
            waiting for you!
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section ref={gridRef} className="bg-[#f7f7f5] py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {(blogs || []).map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} visClass={gridClass} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Content renderer – handles headers, bullets, numbered lists ── */
function renderBlogContent(content) {
  const blocks = content.split('\n\n')
  const elements = []

  blocks.forEach((block, i) => {
    const lines = block.split('\n')

    // Check if this block is a section header (single line ending with ":")
    if (lines.length === 1 && lines[0].trim().endsWith(':')) {
      elements.push(
        <h3
          key={i}
          className="mt-8 mb-4 font-serif text-xl text-ink sm:text-[22px]"
        >
          {lines[0].trim().replace(/:$/, '')}
        </h3>
      )
      return
    }

    // Check if block contains bullet items (lines starting with "- ")
    const bulletLines = lines.filter((l) => l.trim().startsWith('- '))
    if (bulletLines.length > 0 && bulletLines.length === lines.length) {
      elements.push(
        <ul key={i} className="mb-6 ml-1 space-y-2.5">
          {bulletLines.map((line, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[15px] leading-[1.85] text-[#4a4f57]"
            >
              <span className="mt-[10px] block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#7296a2]" />
              <span>{line.trim().replace(/^-\s*/, '')}</span>
            </li>
          ))}
        </ul>
      )
      return
    }

    // Check if block contains numbered items (lines starting with "1.", "2.", etc.)
    const numberedLines = lines.filter((l) => /^\d+\.\s/.test(l.trim()))
    if (numberedLines.length > 0 && numberedLines.length === lines.length) {
      elements.push(
        <ol key={i} className="mb-6 ml-1 space-y-2.5">
          {numberedLines.map((line, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-[15px] leading-[1.85] text-[#4a4f57]"
            >
              <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7296a2]/10 text-[12px] font-semibold text-[#7296a2]">
                {j + 1}
              </span>
              <span>{line.trim().replace(/^\d+\.\s*/, '')}</span>
            </li>
          ))}
        </ol>
      )
      return
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="mb-5 text-[15px] leading-[1.85] text-[#4a4f57]">
        {block}
      </p>
    )
  })

  return elements
}

/* ── Single blog detail page ── */
function BlogDetailPage({ post }) {
  usePageTitle(post.title)
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation({ threshold: 0.05 })
  const visClass = contentVis ? 'is-visible' : ''

  return (
    <div>
      {/* Hero image */}
      <section className="relative min-h-[400px] sm:min-h-[480px]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 flex min-h-[400px] items-end pb-10 sm:min-h-[480px] sm:pb-14">
          <div className="mx-auto w-full max-w-[900px] px-6">
            <div className="flex items-center gap-2 text-[12px] tracking-[0.15em] text-white/65">
              <Calendar size={13} />
              <span>{post.date}</span>
            </div>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section ref={contentRef} className="bg-[#f7f7f5] py-14 sm:py-20">
        <div className={`mx-auto max-w-[750px] px-6 scroll-animate ${visClass}`}>
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:gap-3"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            {renderBlogContent(post.content)}
          </article>

          {/* Bottom nav */}
          <div className="mt-14 border-t border-black/10 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7296a2] transition hover:gap-3"
            >
              <ArrowLeft size={14} /> All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Router wrapper ── */
export default function Blog() {
  const { slug } = useParams()
  const { data: blogs } = useFirebaseContent('blogs')

  if (slug) {
    const post = (blogs || []).find((p) => p.slug === slug)
    if (!post) {
      return (
        <div className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-ink">Article Not Found</h1>
            <Link
              to="/blog"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#7296a2] hover:underline"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
      )
    }
    return <BlogDetailPage post={post} />
  }

  return <BlogListPage />
}
