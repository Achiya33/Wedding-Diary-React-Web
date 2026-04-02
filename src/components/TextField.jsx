import React from 'react'

export default function TextField({ label, name, type = 'text', required, placeholder, value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-ink/80">{label}{required ? ' *' : ''}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-4"
      />
    </label>
  )
}
