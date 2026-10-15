'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useLocale, type Locale } from '@/app/lib/LocaleContext'

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-2.5 2.5-4 6-4 10s1.5 7.5 4 10m0-20c2.5 2.5 4 6 4 10s-1.5 7.5-4 10M2 12h20" />
    </svg>
  )
}

function ChevronIcon({ open, className }: { open?: boolean; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${className} transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })
  const [activeHref, setActiveHref] = useState('#')
  const navRef = useRef<HTMLElement>(null)
  const desktopLangRef = useRef<HTMLDivElement>(null)
  const mobileLangRef = useRef<HTMLDivElement>(null)
  const navLinks = t.navbar.links
  const languageOptions = t.navbar.languages as { code: Locale; label: string; shortLabel: string }[]

  useEffect(() => {
    const sectionLinks = navLinks.filter((link) => link.href.startsWith('#'))

    const updateActiveHref = () => {
      const navOffset = (navRef.current?.offsetHeight ?? 0) + 32
      const scrollPosition = window.scrollY + navOffset

      let nextActiveHref = sectionLinks[0]?.href ?? '#'

      for (const link of sectionLinks) {
        const section = document.getElementById(link.href.slice(1))
        if (!section) continue

        if (section.offsetTop <= scrollPosition) {
          nextActiveHref = link.href
        }
      }

      setActiveHref(nextActiveHref)
    }

    updateActiveHref()
    window.addEventListener('scroll', updateActiveHref, { passive: true })
    window.addEventListener('resize', updateActiveHref)
    window.addEventListener('hashchange', updateActiveHref)

    return () => {
      window.removeEventListener('scroll', updateActiveHref)
      window.removeEventListener('resize', updateActiveHref)
      window.removeEventListener('hashchange', updateActiveHref)
    }
  }, [navLinks])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isInsideDesktopDropdown = desktopLangRef.current?.contains(target) ?? false
      const isInsideMobileDropdown = mobileLangRef.current?.contains(target) ?? false

      if (!isInsideDesktopDropdown && !isInsideMobileDropdown) {
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
      return
    }

    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    setDark(true)
  }

  const themeButtonClass =
    'flex h-11 w-11 items-center justify-center rounded-full border border-[#20A44A]/20 bg-white text-[#18251F] shadow-[0_8px_20px_rgba(32,164,74,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59E0B]/50 hover:bg-[#F7FDF8] hover:text-[#20A44A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20A44A]/50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#F59E0B]/70 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'

  const themeIcon = dark ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9A9.01 9.01 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
      <path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
    </svg>
  )

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-[#20A44A]/20 bg-white/80 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all duration-300 dark:border-slate-700/80 dark:bg-slate-950/80">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          <Logo />

          <nav ref={navRef} aria-label="Primary navigation" className="hidden items-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-[#20A44A]/10 bg-[#F7FDF8] p-1.5 shadow-inner shadow-[#20A44A]/5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  title={`${t.navbar.navigateTo} ${link.label} ${t.navbar.section}`}
                  aria-label={`${t.navbar.goTo} ${link.label}`}
                  data-nav={link.href.replace('#', '')}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeHref === link.href
                      ? 'bg-[#20A44A] text-white shadow-[0_8px_18px_rgba(32,164,74,0.3)]'
                      : 'text-slate-700 hover:bg-[#EAF9F0] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              title={t.navbar.startProjectTitle}
              aria-label={t.navbar.startProjectAriaLabel}
              data-cta="start-project"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#20A44A] via-[#1c9a42] to-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_26px_-18px_rgba(32,164,74,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_30px_-18px_rgba(245,158,11,0.7)]"
            >
              {t.navbar.startProject}
            </Link>

            <div className="relative" ref={desktopLangRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 rounded-full border border-[#20A44A]/20 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_20px_rgba(32,164,74,0.08)] transition-all duration-300 hover:border-[#F59E0B]/50 hover:text-[#20A44A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20A44A]/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#F59E0B]/60 dark:hover:text-[#F59E0B]"
                aria-label={t.navbar.languageLabel}
                aria-expanded={langOpen}
              >
                <GlobeIcon className="h-4 w-4" />
                <span>{languageOptions.find((option) => option.code === locale)?.shortLabel}</span>
                <ChevronIcon open={langOpen} className="h-3.5 w-3.5" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-[0_20px_35px_-15px_rgba(15,23,42,0.45)] backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => {
                        if (isLocale(opt.code)) {
                          setLocale(opt.code)
                        }
                        setLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-200 ${
                        locale === opt.code
                          ? 'bg-[#EAF9F0] font-semibold text-[#20A44A] dark:bg-slate-800 dark:text-[#F59E0B]'
                          : 'text-slate-700 hover:bg-[#F7FDF8] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                      }`}
                    >
                      <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleDark}
              className={themeButtonClass}
              aria-label={t.navbar.toggleDark}
              aria-pressed={dark}
            >
              {themeIcon}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20A44A]/20 bg-white text-slate-700 shadow-[0_8px_20px_rgba(32,164,74,0.08)] transition-all duration-300 hover:border-[#F59E0B]/50 hover:text-[#20A44A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20A44A]/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#F59E0B]/60 dark:hover:text-[#F59E0B]"
              aria-label={t.navbar.toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-[#20A44A]/10 bg-white/95 shadow-[0_20px_35px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="relative flex-1" ref={mobileLangRef}>
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex w-full items-center justify-between gap-2 rounded-2xl border border-[#20A44A]/20 bg-[#F7FDF8] px-3 py-2.5 text-left text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-[#F59E0B]/40 hover:text-[#20A44A] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#F59E0B]/60 dark:hover:text-[#F59E0B]"
                  aria-label={t.navbar.languageLabel}
                  aria-expanded={langOpen}
                >
                  <span className="flex items-center gap-2">
                    <GlobeIcon className="h-4 w-4" />
                    {t.navbar.languageLabel}
                  </span>
                  <ChevronIcon open={langOpen} className="h-3.5 w-3.5" />
                </button>

                {langOpen && (
                  <div className="absolute left-0 right-0 z-10 mt-2 rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-[0_20px_35px_-15px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/95">
                    {languageOptions.map((opt) => (
                      <button
                        key={opt.code}
                        type="button"
                        onClick={() => {
                          if (isLocale(opt.code)) {
                            setLocale(opt.code)
                          }
                          setLangOpen(false)
                        }}
                        className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 ${
                          locale === opt.code
                            ? 'bg-[#EAF9F0] font-semibold text-[#20A44A] dark:bg-slate-800 dark:text-[#F59E0B]'
                            : 'text-slate-700 hover:bg-[#F7FDF8] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                        }`}
                      >
                        <GlobeIcon className="h-3.5 w-3.5 shrink-0" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={toggleDark}
                className={themeButtonClass}
                aria-label={t.navbar.toggleDark}
                aria-pressed={dark}
              >
                {themeIcon}
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href)
                  setMenuOpen(false)
                }}
                className={`block w-full rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeHref === link.href
                    ? 'bg-[#EAF9F0] text-[#20A44A] dark:bg-slate-800 dark:text-[#F59E0B]'
                    : 'text-slate-700 hover:bg-[#F7FDF8] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-2xl bg-gradient-to-r from-[#20A44A] via-[#1b9540] to-[#F59E0B] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_32px_-18px_rgba(32,164,74,0.8)]"
            >
              {t.navbar.startProject}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
