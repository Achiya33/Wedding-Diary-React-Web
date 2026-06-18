import React from 'react'

export default function TextArea({ label, name, required, placeholder, value, onChange, rows = 5 }) {
  return (
    <label className="block">
      <span className="text-sm text-ink/80">{label}{required ? ' *' : ''}</span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"
      />
    </label>
  )
}
