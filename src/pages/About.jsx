import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


export default function About() {
const sectionRef = useRef(null)
const [showSection, setShowSection] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowSection(true)
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.current) {
    observer.observe(sectionRef.current)
  }

  return () => observer.disconnect()
}, [])

  return (
    <>
    <section className="relative h-[100vh] min-h-[420px] w-full overflow-hidden">
      <img
        src="/images/pak/44.webp"
        alt="About Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl animate-fade-up">
          About Us
        </h1>
      </div>
    </section>

    <section ref={sectionRef} className="bg-[#f7f6f4] py-20 md:py-28">
  <div
  className={`mx-auto w-full max-w-6xl px-6 lg:px-10 transition-all duration-1000 ease-out ${
    showSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
  }`}
>
    <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
      
      <div className="relative mx-auto h-[620px] w-full max-w-[540px] animate-fade-up-soft">
        <div className="group absolute left-0 top-0 z-20 w-[62%] overflow-hidden bg-white p-3 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)]">
          <img
            src="/images/about/55.jpg"
            alt="Couple seated together"
            className="h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group absolute left-[44%] top-[170px] z-30 w-[44%] overflow-hidden bg-white p-3 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)]">
          <img
            src="/images/about/4545.jpg"
            alt="Wedding portrait"
            className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group absolute left-[6%] top-[355px] z-10 w-[42%] overflow-hidden bg-white p-3 shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)]">
          <img
            src="/images/about/555.jpg"
            alt="Indoor framed portrait"
            className="h-[170px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="max-w-[560px] animate-fade-up-soft-delay">
        <div className="flex items-start gap-4">
          

          <div className="space-y-8 pt-2 text-[15px] leading-9 text-[#7d7d7d] md:text-[16px]">
            <p>
              Let us tell you why we have the most magical and fulfilling job in the world. We are truly in love with love. Inspired by elegant couples, soft lighting, natural settings, and genuine emotions, we focus on capturing the real essence of your special day. At Wedding Diary, we don’t simply take photographs—we preserve feelings, fleeting moments, and meaningful connections, turning them into timeless visual stories you can cherish forever.
            </p>

            <p>
              <b>Wedding Diary</b> is a team of passionate photographers who are fortunate to have turned their passion into a profession. We are friendly, easy-going, and attentive to every detail that makes your day unique. With professionally trained photographers and the latest equipment, we ensure every moment is captured with creativity and precision. Driven by passion and committed to excellence, we are here to tell your story in the most beautiful and authentic way.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="btn btn-primary" to="/contact">
            Contact us
          </Link>
          <Link className="btn btn-outline" to="/portfolio">
            View portfolio
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
  </> )
}
