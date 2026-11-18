'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-linear-to-br from-[#FF9933] via-white to-[#138808] text-[#075e3b] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
    >
      <svg
        viewBox="0 0 32 32"
        className="pointer-events-none absolute h-4 w-4 text-[#000080] opacity-55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" />
        {Array.from({ length: 24 }, (_, index) => (
          <g key={index} transform={`rotate(${index * 15} 16 16)`}>
            <line x1="16" y1="5" x2="16" y2="27" />
          </g>
        ))}
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
      <ArrowUp className="relative z-10 animate-bounce" width={24} height={24} strokeWidth={1.5} color='#000000' aria-hidden="true" />
    </button>
  )
}
