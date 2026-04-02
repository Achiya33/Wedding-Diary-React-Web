import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-20">
      <h1 className="font-serif text-4xl">404</h1>
      <p className="mt-3 text-sm text-ink/70">This page doesn’t exist.</p>
      <Link className="mt-6 inline-flex btn btn-primary" to="/">
        Go home
      </Link>
    </div>
  )
}
