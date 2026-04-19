'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark')
  const [activeHref, setActiveHref] = useState('#')

  useEffect(() => {
    const updateActiveHref = () => {
      setActiveHref(window.location.hash || '#')
    }

    updateActiveHref()
    window.addEventListener('hashchange', updateActiveHref)

    return () => {
      window.removeEventListener('hashchange', updateActiveHref)
    }
  }, [])

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDark(true)
    }
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '/features' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out dark:border-slate-700/70 dark:bg-slate-900/70">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Logo />
        {/* Desktop Links */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 px-2 py-1 dark:border-slate-700/80 dark:bg-slate-900/80">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`relative rounded-lg px-4 py-2 text-md font-medium tracking-wide transition-all duration-300 ease-in-out after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-green-500 after:transition-all after:duration-300 after:ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 dark:after:bg-green-400 ${activeHref === link.href
                  ? 'text-green-600 font-semibold tracking-wider after:w-4/5 dark:text-green-400'
                  : 'text-slate-600 after:w-0 hover:text-green-500 hover:font-semibold hover:tracking-wider hover:after:w-4/5 dark:text-slate-300 dark:hover:text-green-400'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-md font-bold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-accent dark:text-slate-950"
          >
            Start a Project
          </Link>
          <button
            onClick={toggleDark}
            className="rounded-xl border border-slate-300/80 bg-white/80 p-2.5 text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 aria-pressed:border-green-400 aria-pressed:bg-green-100 aria-pressed:text-green-700 dark:border-slate-600/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-green-500/80 dark:hover:bg-slate-800 dark:hover:text-green-300 dark:focus-visible:ring-green-500/80 dark:focus-visible:ring-offset-slate-900 dark:aria-pressed:border-green-500/80 dark:aria-pressed:bg-slate-800 dark:aria-pressed:text-green-300"
            aria-label="Toggle dark mode"
            aria-pressed={dark}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 9 9A9.01 9.01 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
                <path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: dark mode + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="rounded-xl border border-slate-300/80 bg-white/80 p-2.5 text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 aria-pressed:border-green-400 aria-pressed:bg-green-100 aria-pressed:text-green-700 dark:border-slate-600/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-green-500/80 dark:hover:bg-slate-800 dark:hover:text-green-300 dark:focus-visible:ring-green-500/80 dark:focus-visible:ring-offset-slate-900 dark:aria-pressed:border-green-500/80 dark:aria-pressed:bg-slate-800 dark:aria-pressed:text-green-300"
            aria-label="Toggle dark mode"
            aria-pressed={dark}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 9 9A9.01 9.01 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
                <path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2.5 text-slate-700 transition-all duration-300 ease-in-out hover:bg-green-50 hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 active:scale-95 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-green-400"
            aria-label="Toggle menu">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mx-4 mt-3 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-lg backdrop-blur-md opacity-100 translate-y-0 transition-all duration-300 ease-in-out dark:border-slate-700/80 dark:bg-slate-900/90 lg:hidden sm:mx-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveHref(link.href)
                setMenuOpen(false)
              }}
              className={`mb-1 block w-full rounded-lg px-4 py-3 text-md font-medium tracking-wide transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 active:scale-[0.99] ${activeHref === link.href
                ? 'bg-green-100 text-green-600 dark:bg-slate-800 dark:text-green-400'
                : 'text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-green-400'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-2xl border border-slate-300 bg-linear-to-r from-slate-900 to-slate-700 px-4 py-3 text-center text-md font-semibold text-white shadow-[0_12px_34px_-20px_rgba(15,23,42,0.95)] transition-all duration-300 dark:border-slate-700 dark:from-amber-400 dark:to-orange-300 dark:text-slate-950 opacity-55 pointer-events-none"
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  )
}
