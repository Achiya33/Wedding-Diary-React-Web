import React from 'react'
import { Quote } from 'lucide-react'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!items?.length) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 6000)
    return () => clearInterval(t)
  }, [items])

  if (!items?.length) return null

  const active = items[index]

  return (
    <div className="card p-7 sm:p-10">
      <div className="flex items-start gap-3">
        <div className="mt-1 shrink-0 rounded-xl bg-parchment p-2 ring-1 ring-black/5">
          <Quote size={18} />
        </div>
        <div>
          <p className="text-sm sm:text-base leading-relaxed text-ink/80">
            “{active.text}”
          </p>
          <p className="mt-4 text-sm font-medium">{active.name}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            className={[
              'h-2 w-2 rounded-full transition',
              i === index ? 'bg-gold' : 'bg-black/15 hover:bg-black/25',
            ].join(' ')}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
