'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Logo from './logo'
import { useLocale, type Locale } from '@/app/lib/LocaleContext'

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-2.5 2.5-4 6-4 10s1.5 7.5 4 10m0-20c2.5 2.5 4 6 4 10s-1.5 7.5-4 10M2 12h20" />
    </svg>
  )
}

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'hi' || value === 'te'
}

export default function Navbar() {
  const { t, locale, setLocale } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [dark, setDark] = useState(() => typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark')
  const [activeHref, setActiveHref] = useState('#')
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateActiveHref = () => {
      setActiveHref(window.location.hash || '#')
    }
    updateActiveHref()
    window.addEventListener('hashchange', updateActiveHref)
    return () => window.removeEventListener('hashchange', updateActiveHref)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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

  const navLinks = t.navbar.links
  const languageOptions = t.navbar.languages as { code: Locale; label: string; shortLabel: string }[]

  const themeButtonClass =
    'rounded-full border border-slate-300/80 bg-white/80 p-2.5 text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 aria-pressed:border-green-400 aria-pressed:bg-green-100 aria-pressed:text-green-700 dark:border-slate-600/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-green-500/80 dark:hover:bg-slate-800 dark:hover:text-green-300 dark:focus-visible:ring-green-500/80 dark:focus-visible:ring-offset-slate-900 dark:aria-pressed:border-green-500/80 dark:aria-pressed:bg-slate-800 dark:aria-pressed:text-green-300'

  const themeIcon = dark ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3a9 9 0 1 0 9 9A9.01 9.01 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
      <path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
    </svg>
  )

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b-4 border-slate-400 bg-white/70  px-3 md:px-12 py-1 shadow-2xl backdrop-blur-md transition-all duration-300 ease-in-out dark:border-slate-700/70 dark:bg-slate-900/70">
      <div className="flex items-center justify-around">
        <div className="flex items-start md:items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Desktop Links */}
          <div className="hidden items-center lg:flex lg:ml-24">
            <div className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 px-2 py-1 dark:border-slate-700/80 dark:bg-slate-900/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  title={`${t.navbar.navigateTo} ${link.label} ${t.navbar.section}`}
                  aria-label={`${t.navbar.goTo} ${link.label}`}
                  data-nav={link.href.replace('#', '')}
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
              title={t.navbar.startProjectTitle}
              aria-label={t.navbar.startProjectAriaLabel}
              data-cta="start-project"
              className="lg:ml-2 rounded-full bg-slate-950 px-5 py-2.5 text-md text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary dark:bg-accent dark:text-slate-950"
            >
              {t.navbar.startProject}
            </Link>

            {/* Desktop Language Dropdown */}
            <div className="lg:ml-2 relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-white/80 px-3 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 active:scale-95 dark:border-slate-600/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-green-500/80 dark:hover:bg-slate-800 dark:hover:text-green-300"
                aria-label={t.navbar.languageLabel}
                aria-expanded={langOpen}
              >
                <GlobeIcon className="h-4 w-4" />
                <span>{languageOptions.find((option) => option.code === locale)?.shortLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/95">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        if (isLocale(opt.code)) {
                          setLocale(opt.code)
                        }
                        setLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 hover:bg-green-50 hover:text-green-700 dark:hover:bg-slate-800 dark:hover:text-green-400 ${locale === opt.code ? 'bg-green-50 text-green-700 font-semibold dark:bg-slate-800 dark:text-green-400' : 'text-slate-700 dark:text-slate-200'}`}
                    >
                      <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleDark}
              className={`lg:ml-2 ${themeButtonClass}`}
              aria-label={t.navbar.toggleDark}
              aria-pressed={dark}
            >
              {themeIcon}
            </button>
          </div>

        </div>

        {/* Mobile: logo takes flex-1 space, then icons on the right */}
        <div className="flex items-center gap-1 lg:hidden">
          {/* Mobile Language Dropdown — icon only */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`${themeButtonClass}`}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
            >
              <GlobeIcon className="h-5 w-5" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/95 z-10">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      if (isLocale(opt.code)) {
                        setLocale(opt.code)
                      }
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150 hover:bg-green-50 hover:text-green-700 dark:hover:bg-slate-800 dark:hover:text-green-400 ${locale === opt.code ? 'bg-green-50 text-green-700 font-semibold dark:bg-slate-800 dark:text-green-400' : 'text-slate-700 dark:text-slate-200'}`}
                  >
                    <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-xl p-2.5 text-slate-700 transition-all duration-300 ease-in-out hover:bg-green-50 hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 active:scale-95 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-green-400"
            aria-label={t.navbar.toggleMenu}
          >
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

          <button
            onClick={toggleDark}
            className={`hidden md:flex ${themeButtonClass}`}
            aria-label={t.navbar.toggleDark}
            aria-pressed={dark}
          >
            {themeIcon}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mx-4 mt-3 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-lg backdrop-blur-md opacity-100 translate-y-0 transition-all duration-300 ease-in-out dark:border-slate-700/80 dark:bg-slate-900/90 lg:hidden sm:mx-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
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
            {t.navbar.startProject}
          </Link>
        </div>
      )}
    </nav>
  )
}
