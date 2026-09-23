import React from 'react'

export default function PillTabs({ value, options, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-full border px-5 py-2 text-sm transition ${
            value === opt.value
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black/20 hover:border-black'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}