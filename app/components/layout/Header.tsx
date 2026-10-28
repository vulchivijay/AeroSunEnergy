'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '../brand/Logo'
import { useLocale, type Locale } from '@/lib/LocaleContext'

function LanguageFlag({ code, className }: { code: Locale; className?: string }) {
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
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(pathname || '/')
  const [hydrated, setHydrated] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const desktopLangRef = useRef<HTMLDivElement>(null)
  const mobileLangRef = useRef<HTMLDivElement>(null)
  const navLinks = t.navbar.links
  const languageOptions = t.navbar.languages as { code: Locale; label: string; shortLabel: string }[]
  const visibleNavLinks = navLinks

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    setActiveHref(pathname || '/')
    setMenuOpen(false)
    setLangOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!hydrated) return
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isInsideDesktopDropdown = desktopLangRef.current?.contains(target) ?? false
      const isInsideMobileDropdown = mobileLangRef.current?.contains(target) ?? false
      const isInsideMobileMenu = navRef.current?.contains(target) ?? false

      if (!isInsideDesktopDropdown && !isInsideMobileDropdown && !isInsideMobileMenu) {
        setLangOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [hydrated])

  const handleRouteNavigate = (href: string) => {
    setActiveHref(href)
    setMenuOpen(false)
    setLangOpen(false)
    router.push(href)
  }

  useEffect(() => {
    if (!hydrated) return
    navLinks.forEach((link) => {
      router.prefetch(link.href)
    })
  }, [router, navLinks, hydrated])

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-[#20A44A]/20 bg-white shadow-[0_12px_30px_-24px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-all duration-300 dark:border-slate-700/80 dark:bg-slate-950/80">
      <div className="relative z-10 w-full px-4 py-2">
        <div className="flex w-full items-center justify-between gap-2 lg:gap-3">
          <div className="min-w-0 shrink-0">
            <Logo />
          </div>

          <nav ref={navRef} aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
            <div className="flex max-w-208 items-center justify-center overflow-hidden rounded-full border border-[#20A44A]/60 bg-[#F7FDF8] p-1 shadow-inner shadow-[#20A44A]/5">
              {visibleNavLinks.map((link) => {
                const disabled = Boolean((link as { disabled?: boolean }).disabled)
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => {
                      if (!disabled) {
                        handleRouteNavigate(link.href)
                      }
                    }}
                    disabled={disabled}
                    aria-disabled={disabled}
                    title={disabled ? `${link.label} — Coming soon` : `${t.navbar.navigateTo} ${link.label} ${t.navbar.section}`}
                    aria-label={disabled ? `${link.label} coming soon` : `${t.navbar.goTo} ${link.label}`}
                    data-nav={link.href.replace('#', '')}
                    className={`group relative rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeHref === link.href && !disabled
                        ? 'bg-[#20A44A] text-white shadow-[0_8px_18px_rgba(32,164,74,0.3)]'
                        : disabled
                          ? 'cursor-not-allowed text-slate-400 opacity-70'
                          : 'text-slate-700 hover:bg-[#EAF9F0] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                    }`}
                  >
                    <span className="relative inline-flex items-center gap-2">
                      {link.label}
                      {disabled && (
                        <span className="absolute -right-2 -top-2 inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-700 shadow-sm">
                          Coming soon
                        </span>
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <Link
              href="/contact"
              title={t.navbar.startProjectTitle}
              aria-label={t.navbar.startProjectAriaLabel}
              data-cta="start-project"
              className="group relative inline-flex shrink-0 items-center rounded-[28px] border border-[#1ea75f]/70 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),rgba(15,23,42,0.95)_42%,rgba(2,6,23,1)_100%)] p-px shadow-[0_18px_30px_-18px_rgba(34,197,94,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_36px_-18px_rgba(34,197,94,0.95)]"
            >
              <span className="absolute inset-y-0 left-0 w-14 bg-linear-to-r from-white/20 via-white/5 to-transparent" aria-hidden="true" />
              <span className="relative inline-flex items-center gap-2 rounded-[27px] bg-[#071b15] p-2 text-[9px] font-black uppercase tracking-[0.18em] text-white sm:text-[10px]">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-r from-[#34d399] via-[#22c55e] to-[#facc15] text-[#05130f] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="header-label">{t.navbar.startProject}</span>
              </span>
            </Link>

            <a
              href="/aerosun-energy.pdf"
              download="aerosun-energy.pdf"
              title="Download voucher"
              aria-label="Download AeroSun Energy voucher"
              className="group relative inline-flex shrink-0 items-center overflow-hidden rounded-[28px] border border-[#f3c75d]/70 bg-[#fffaf0] p-1 shadow-[0_16px_28px_-18px_rgba(245,158,11,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-18px_rgba(245,158,11,0.9)]"
            >
              <span className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#f59e0b] via-[#facc15] to-transparent opacity-90" aria-hidden="true" />
              <span className="absolute inset-y-2 left-2 w-7 rounded-full border border-white/90 bg-[#0f172a] opacity-95" aria-hidden="true" />
              <span className="relative z-10 flex items-center gap-2 rounded-3xl bg-[#0f172a] p-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#fef3c7] sm:text-[10px]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#f59e0b] text-[#0f172a]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0l-4-4m4 4l4-4M5 20h14"/>
                  </svg>
                </span>
              </span>
              <span className="header-label relative z-10 mx-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#1f2937] sm:text-[10px]">
                Voucher
              </span>
            </a>

            <div className="relative" ref={desktopLangRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-[28px] border border-[#1b2d25]/10 bg-linear-to-r from-[#f8fafc] via-[#ecfdf5] to-[#fef3c7] px-2.5 py-2.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#0f172a] shadow-[0_16px_22px_-20px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_28px_-18px_rgba(34,197,94,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20A44A]/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:text-[10px]"
                aria-label={t.navbar.languageLabel}
                aria-expanded={langOpen}
              >
                <span className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-[#20A44A]/15 via-[#34d399]/10 to-transparent" aria-hidden="true" />
                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f172a] text-[#fef3c7] ring-1 ring-white/80">
                  <LanguageFlag code={locale} className="h-3 w-3" />
                </span>
                <span className="header-label relative">{languageOptions.find((option) => option.code === locale)?.shortLabel}</span>
                <ChevronIcon open={langOpen} className="relative h-3 w-3" />
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
                      <LanguageFlag code={opt.code} className="h-3.5 w-3.5" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-[#20A44A]/10 bg-white/95 shadow-[0_20px_35px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="relative flex-1" ref={mobileLangRef}>
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex w-full items-center justify-between gap-2 overflow-hidden rounded-[26px] border border-[#1b2d25]/10 bg-linear-to-r from-[#f8fafc] via-[#ecfdf5] to-[#fef3c7] px-3 py-2.5 text-left text-[10px] font-black uppercase tracking-[0.2em] text-[#0f172a] shadow-[0_18px_28px_-18px_rgba(15,23,42,0.5)] transition-colors duration-200 hover:border-[#F59E0B]/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  aria-label={t.navbar.languageLabel}
                  aria-expanded={langOpen}
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0f172a] text-[#fef3c7] ring-1 ring-white/80">
                      <LanguageFlag code={locale} className="h-3.5 w-3.5" />
                    </span>
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
                        <LanguageFlag code={opt.code} className="h-3.5 w-3.5" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {visibleNavLinks.map((link) => {
              const disabled = Boolean((link as { disabled?: boolean }).disabled)
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    if (!disabled) {
                      handleRouteNavigate(link.href)
                    }
                  }}
                  disabled={disabled}
                  aria-disabled={disabled}
                  className={`block w-full rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                    disabled
                      ? 'cursor-not-allowed bg-slate-100 text-slate-400 opacity-80 dark:bg-slate-800 dark:text-slate-500'
                      : activeHref === link.href
                        ? 'bg-[#EAF9F0] text-[#20A44A] dark:bg-slate-800 dark:text-[#F59E0B]'
                        : 'text-slate-700 hover:bg-[#F7FDF8] hover:text-[#20A44A] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-[#F59E0B]'
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span>{link.label}</span>
                    {disabled && (
                      <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-amber-700">
                        Coming soon
                      </span>
                    )}
                  </span>
                </button>
              )
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block overflow-hidden rounded-[28px] border border-[#1ea75f]/70 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.35),rgba(15,23,42,0.95)_42%,rgba(2,6,23,1)_100%)] p-px shadow-[0_18px_30px_-18px_rgba(32,164,74,0.9)]"
            >
              <span className="flex items-center justify-center gap-3 rounded-[27px] bg-[#071b15] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.20em] text-white">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-r from-[#34d399] via-[#22c55e] to-[#facc15] text-[#05130f]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="header-label">{t.navbar.startProject}</span>
              </span>
            </Link>

            <a
              href="/voucher.svg"
              download="aerosun-voucher.svg"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block overflow-hidden rounded-[28px] border border-[#f3c75d]/70 bg-[#fffaf0] p-1 shadow-[0_16px_24px_-18px_rgba(245,158,11,0.8)]"
            >
              <span className="flex items-center justify-center gap-3 rounded-[27px] bg-[#071b15] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.20em] text-white">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b] text-[#0f172a]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0l-4-4m4 4l4-4M5 20h14"/>
                  </svg>
                </span>
                <span className="header-label">Voucher</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
