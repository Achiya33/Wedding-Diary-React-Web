import React from 'react'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.22em] text-ink/60">{eyebrow}</span>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl leading-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-ink/75 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  )
}
