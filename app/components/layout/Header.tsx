'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  House,
  Info,
  Mail,
  Menu,
  PanelsTopLeft,
  Sun,
  Wind,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import Logo from '../brand/Logo'
import { useLocale, type Locale } from '@/lib/LocaleContext'

const navigationIcons: Record<string, LucideIcon> = {
  '/': House,
  '/about': Info,
  '/solarenergy': Sun,
  '/windenergy': Wind,
  '/hybridenergy': Zap,
  '/services': PanelsTopLeft,
  '/contact': Mail,
}

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'hi' || value === 'te'
}

export default function Navbar() {
  const { t, locale, setLocale } = useLocale()
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const languageOptions = t.navbar.languages as {
    code: Locale
    label: string
    shortLabel: string
  }[]
  const navLinks = t.navbar.links

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setLangOpen(false)
  }, [pathname])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  function closeMenu() {
    setMenuOpen(false)
    setLangOpen(false)
  }

  function renderNavigationLink(link: (typeof navLinks)[number], mobile = false) {
    const disabled = Boolean((link as { disabled?: boolean }).disabled)
    const active = isActive(link.href) && !disabled
    const Icon = navigationIcons[link.href] ?? PanelsTopLeft
    const classes = mobile
      ? `flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
          disabled
            ? 'cursor-not-allowed text-white/35'
            : active
              ? 'bg-[#a5d6a7]/15 text-[#dcedc8] ring-1 ring-inset ring-[#a5d6a7]/40'
              : 'text-white/75 hover:bg-[#a5d6a7]/10 hover:text-[#dcedc8]'
        }`
      : `group relative z-10 flex min-w-[3.55rem] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[13px] transition-colors 2xl:min-w-[4rem] 2xl:text-sm ${
          active
            ? 'bg-[#a5d6a7]/10 text-[#dcedc8]'
            : disabled
              ? 'cursor-not-allowed text-white/35'
              : 'text-white/65 hover:text-[#dcedc8]'
        }`

    const content = (
      <span className={mobile ? 'flex w-full items-center justify-between gap-3' : 'flex flex-col items-center gap-1'}>
        {mobile ? (
          <span>{link.label}</span>
        ) : (
          <>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              active
                ? 'border-[#dcedc8] bg-[#a5d6a7] text-[#173b2c] shadow-[0_0_22px_-5px_rgba(165,214,167,0.45)]'
                : 'border-white/15 bg-white/[0.05] text-[#d5ded8] group-hover:border-[#dcedc8] group-hover:bg-[#a5d6a7] group-hover:text-[#173b2c]'
            }`}>
              <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap">{link.label}</span>
          </>
        )}
        {disabled && (
          <span className="rounded-full bg-[#f7edda] px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[#85672f]">
            Coming soon
          </span>
        )}
      </span>
    )

    if (disabled) {
      return (
        <button
          key={link.href}
          type="button"
          disabled
          aria-disabled="true"
          className={classes}
        >
          {content}
        </button>
      )
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={mobile ? closeMenu : undefined}
        aria-current={active ? 'page' : undefined}
        aria-label={`${t.navbar.goTo} ${link.label}`}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  function renderLanguageOptions(id: string, open: boolean) {
    return (
      <div
        id={id}
        hidden={!open}
        role="group"
        aria-label={t.navbar.languageLabel}
        className="absolute right-0 top-[calc(100%+0.65rem)] z-[60] w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#09251e] p-1.5 text-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]"
      >
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => {
              if (isLocale(option.code)) setLocale(option.code)
              setLangOpen(false)
            }}
            aria-pressed={locale === option.code}
            className={`flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-sm transition ${
              locale === option.code
                ? 'bg-[#a5d6a7]/15 font-semibold text-[#dcedc8]'
                : 'text-white/75 hover:bg-[#a5d6a7]/10 hover:text-[#dcedc8]'
            }`}
          >
            <span>{option.label}</span>
            {locale === option.code && <Check className="h-4 w-4 text-[#dcedc8]" aria-hidden="true" />}
          </button>
        ))}
      </div>
    )
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#071b17] text-white shadow-[0_18px_42px_-30px_rgba(3,18,12,0.9)]"
    >
      <div className="relative border-b border-white/[0.07] bg-[#04130f] text-[#e8ecd9] hidden">
        <div className="mx-auto flex min-h-8 max-w-[90rem] items-center justify-between gap-3 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] sm:px-6 sm:text-[11px] sm:tracking-[0.12em] lg:px-8">
          <span className="flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b45e] shadow-[0_0_10px_rgba(214,180,94,0.65)]" aria-hidden="true" />
            AeroSun Energy Private Limited
          </span>
          <span className="ml-3 hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-[#c2cbb8] lg:flex lg:items-center lg:gap-2">
            <Sun className="h-3 w-3 text-[#d6b45e]" strokeWidth={1.8} aria-hidden="true" />
            Power from Sun, Wind, Water, Fire
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[5.25rem] max-w-[90rem] items-center justify-between gap-1 px-3 py-2 sm:gap-3 sm:px-6 lg:px-8 max-[319px]:flex-wrap">
        <Logo compact />

        <nav aria-label="Primary navigation" className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="relative flex items-start gap-0.5">
            <span className="pointer-events-none absolute left-[8%] right-[8%] top-4 h-px bg-gradient-to-r from-transparent via-[#8aa28b]/65 to-transparent" aria-hidden="true" />
            {navLinks.map((link) => renderNavigationLink(link))}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 border-l border-white/10 pl-3 2xl:gap-3 2xl:pl-5 xl:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="desktop-language-options"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 text-sm tracking-wider text-[#e8ecd9] transition hover:border-[#dcedc8]/70 hover:bg-[#a5d6a7]/10 hover:text-[#e8f5e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7]"
            >
              <Globe2 className="h-4 w-4 text-[#c5e1a5]" aria-hidden="true" />
              {languageOptions.find((option) => option.code === locale)?.shortLabel}
              <ChevronDown className={`h-3.5 w-3.5 text-white/60 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('desktop-language-options', langOpen)}
          </div>

          <a
            href="/aerosun-energy.pdf"
            download="aerosun-energy.pdf"
            aria-label="Download AeroSun Energy voucher"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-[#e8d4a0] transition hover:bg-[#a5d6a7]/10 hover:text-[#e8f5e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7]"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            <span className="hidden 2xl:inline">Voucher</span>
          </a>

          <Link
            href="/contact"
            title={t.navbar.startProjectTitle}
            aria-label={t.navbar.startProjectAriaLabel}
            data-cta="start-project"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#a5d6a7] px-4 text-sm font-bold text-[#173b2c] shadow-[0_8px_24px_-12px_rgba(165,214,167,0.45)] transition hover:-translate-y-0.5 hover:bg-[#dcedc8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a5d6a7]"
          >
            {t.navbar.startProject}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden max-[359px]:gap-1 max-[319px]:w-full max-[319px]:justify-end">
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLangOpen((open) => !open)
                setMenuOpen(false)
              }}
              aria-label={`${t.navbar.languageLabel}: ${languageOptions.find((option) => option.code === locale)?.label}`}
              aria-expanded={langOpen}
              aria-controls="mobile-language-options"
              className="inline-flex h-11 min-w-12 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-2.5 text-sm font-bold text-[#f4f0e2] transition hover:border-[#dcedc8]/70 hover:bg-[#a5d6a7]/10 hover:text-[#e8f5e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7] max-[359px]:w-11 max-[359px]:min-w-11 max-[359px]:px-0"
            >
              <Globe2 className="h-4 w-4 text-[#c5e1a5]" aria-hidden="true" />
              <span className="max-[359px]:sr-only">{languageOptions.find((option) => option.code === locale)?.shortLabel}</span>
            </button>
            {renderLanguageOptions('mobile-language-options', langOpen)}
          </div>

          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open)
              setLangOpen(false)
            }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_6px_18px_-10px_rgba(165,214,167,0.4)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7] ${
              menuOpen
                ? 'border-[#dcedc8] bg-[#a5d6a7] text-[#173b2c]'
                : 'border-white/20 bg-white/[0.06] text-[#f4f0e2] hover:border-[#dcedc8] hover:bg-[#a5d6a7] hover:text-[#173b2c]'
            }`}
            aria-label={menuOpen ? 'Close navigation menu' : t.navbar.toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-primary-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-primary-navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-[#a5d6a7]/30 bg-[#09251e] px-4 pb-6 pt-3 shadow-[0_24px_50px_-22px_rgba(0,0,0,0.8)] sm:px-6 xl:hidden"
      >
        <nav aria-label="Mobile primary navigation" className="mx-auto max-w-3xl space-y-1">
          <p className="mb-3 flex items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5e1a5]">
            <span className="h-px w-5 bg-[#a5d6a7]/70" />
            Explore AeroSun
          </p>
          {navLinks.map((link) => renderNavigationLink(link, true))}
          <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a5d6a7] px-5 text-sm font-bold text-[#173b2c] transition hover:bg-[#dcedc8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7]"
            >
              {t.navbar.startProject}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="/aerosun-energy.pdf"
              download="aerosun-energy.pdf"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-[#e8d4a0] transition hover:border-[#dcedc8]/60 hover:bg-[#a5d6a7]/10 hover:text-[#e8f5e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5d6a7]"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              Download voucher
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
