'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from '@/app/components/brand/Logo'
import { isLocale, useLocale, type Locale } from '@/lib/LocaleContext'
import { ArrowDownToLine, ArrowRight, Banknote, Building2, Check, ChevronDown, Globe2, House, Info, Mail, Menu, PanelsTopLeft, PackageOpen, Phone, Sun, Wind, X, Zap, type LucideIcon } from 'lucide-react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { NavbarNavigationLink } from './NavbarNavigationLink'

const navigationIconComponents: Record<string, LucideIcon> = {
  house: House,
  info: Info,
  building: Building2,
  bank: Banknote,
  package: PackageOpen,
  sun: Sun,
  wind: Wind,
  zap: Zap,
  panels: PanelsTopLeft,
  mail: Mail,
}

export default function Navbar() {
  const { t, locale, setLocale } = useLocale()
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)
  const [dismissedDesktopSubmenu, setDismissedDesktopSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const languageOptions = t.navbar.languages as {
    code: Locale
    label: string
    shortLabel: string
  }[]
  const navLinks = t.navbar.links
  const navigationIconIds: Record<string, string> = t.navbar.navigationIconIds

  const getNavigationIcon = (href: string) =>
    navigationIconComponents[navigationIconIds[href]] ?? PanelsTopLeft

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
        setLangOpen(false)
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

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  function closeMenu() {
    setMenuOpen(false)
    setLangOpen(false)
    setExpandedMobileSubmenu(null)
  }

  

  function renderLanguageOptions(id: string, open: boolean, inline = false) {
    return (
      <div
        id={id}
        hidden={!open}
        role="group"
        aria-label={t.navbar.languageLabel}
        className={inline
          ? 'mt-2 grid gap-1 rounded-xl border border-slate-700 bg-white/10 p-1.5 text-white'
          : 'absolute right-0 top-[calc(100%+0.65rem)] z-[60] w-48 overflow-hidden rounded-xl border border-slate-200 bg-[#e5e7eb] p-1.5 text-[#333333] shadow-md'}
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
            className={`flex min-h-11 w-full items-center justify-between rounded-full px-3 text-sm transition ${
              locale === option.code
                ? inline
                  ? 'bg-white/15 font-semibold text-white'
                  : 'bg-[#333333]/10 text-[#333333]'
                : inline
                  ? 'text-white/85 hover:bg-white/10'
                  : 'text-[#333333] hover:bg-[#333333]/5 tracking-normal'
            }`}
          >
            <span>{option.label}</span>
            {locale === option.code && <Check className={`h-4 w-4 ${inline ? 'text-white' : 'text-[#333333]'}`} aria-hidden="true" />}
          </button>
        ))}
      </div>
    )
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] text-white shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-2xl"
    >
      <div className="absolute -left-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative border-b border-slate-600 bg-white/5 text-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-8 w-full flex-col items-start gap-1 px-3 py-1 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-8 text-xs tracking-wide leading-5">
          <span className="flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <Building2 className="h-3.5 w-3.5 shrink-0 text-[#d6b45e]" strokeWidth={1.8} aria-hidden="true" />
            {t.navbar.companyRegistration}
          </span>
          <span className="hidden lg:flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <svg className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm" viewBox="0 0 30 20" role="img" aria-label="Indian flag">
              <rect width="30" height="20" fill="#138808" />
              <rect width="30" height="13.34" fill="#fff" />
              <rect width="30" height="6.67" fill="#ff9933" />
              <circle cx="15" cy="10" r="3" fill="none" stroke="#000080" strokeWidth=".7" />
              <circle cx="15" cy="10" r=".55" fill="#000080" />
              <path d="M15 7v6m-3-3h6m-5.12-2.12 4.24 4.24m0-4.24-4.24 4.24" stroke="#000080" strokeWidth=".45" />
            </svg>
            {t.navbar.patrioticLine}
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap uppercase text-white/80 lg:ml-3 text-xs font-semibold tracking-wide leading-5 tabular-nums">
            <Phone className="h-3 w-3 text-amber-500" strokeWidth={1.8} aria-hidden="true" />
            <DigitalNumber value={t.navbar.companyMobile} />
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[5.25rem] w-full items-center justify-between gap-1 p-2 sm:px-3 max-[319px]:flex-wrap">
        <Logo compact />

        <nav aria-label={t.navbar.primaryNavigationLabel} className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="relative grid min-w-0 grid-flow-col auto-cols-fr items-stretch justify-center gap-1">
            <span className="pointer-events-none absolute left-[8%] right-[8%] top-[1.375rem] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
            {navLinks.map((link) => (
              <NavbarNavigationLink key={link.href} link={link} getNavigationIcon={getNavigationIcon} isActive={isActive} pathname={pathname} closeMenu={closeMenu} comingSoonLabel={t.navbar.comingSoon} goToLabel={t.navbar.goTo} aboutSubmenuLabel={t.navbar.aboutSubmenuLabel} expandedMobileSubmenu={expandedMobileSubmenu} setExpandedMobileSubmenu={setExpandedMobileSubmenu} dismissedDesktopSubmenu={dismissedDesktopSubmenu} setDismissedDesktopSubmenu={setDismissedDesktopSubmenu} />
            ))}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 border-l border-slate-700 pl-3 xl:flex 2xl:gap-3 2xl:pl-5">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="desktop-language-options"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-3 text-sm font-semibold tracking-wide leading-5 text-white shadow-sm transition hover:border-slate-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <Globe2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
              {languageOptions.find((option) => option.code === locale)?.shortLabel}
              <ChevronDown className={`h-3.5 w-3.5 text-sky-200 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('desktop-language-options', langOpen)}
          </div>

          <a
            href="/aerosun-energy.pdf"
            download="aerosun-energy.pdf"
            aria-label={t.navbar.downloadVoucher}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-amber-300/70 bg-linear-to-r from-amber-500 to-orange-500 px-3 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden min-w-0 max-w-[7rem] 2xl:block">
              <span className="block whitespace-normal break-keep text-center leading-tight line-clamp-2">{t.navbar.voucher}</span>
            </span>
          </a>

          <Link
            href="/contact"
            prefetch={false}
            title={t.navbar.startProjectTitle}
            aria-label={t.navbar.startProjectAriaLabel}
            data-cta="start-project"
            className="group inline-flex min-h-11 items-center gap-1 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-4 text-sm text-white shadow-sm ring-1 ring-inset ring-white/15 transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-400"
          >
            <span className="min-w-0 max-w-[8rem] whitespace-normal break-keep text-center leading-tight line-clamp-2">{t.navbar.startProject}</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open)
              setLangOpen(false)
            }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
              menuOpen
                ? 'border-slate-200 bg-white/20 text-white ring-2 ring-white/20'
                : 'border-slate-700 bg-white/10 text-white hover:border-amber-200/50 hover:bg-white/20'
            }`}
            aria-label={menuOpen ? t.navbar.closeMenu : t.navbar.toggleMenu}
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
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,1),rgba(49,46,129,1),rgba(15,23,42,1))] px-4 pb-6 pt-3 text-white shadow-md backdrop-blur-2xl sm:px-6 xl:hidden"
      >
        <nav aria-label={t.navbar.mobileNavigationLabel} className="mx-auto max-w-3xl space-y-1">
          <p className="mb-3 flex items-center gap-2 px-2 uppercase text-sky-200 text-xs font-semibold tracking-wide leading-5">
            <span className="h-px w-5 bg-white/35" />
            {t.navbar.exploreLabel}
          </p>
          {navLinks.map((link) => (
            <NavbarNavigationLink key={link.href} link={link} mobile getNavigationIcon={getNavigationIcon} isActive={isActive} pathname={pathname} closeMenu={closeMenu} comingSoonLabel={t.navbar.comingSoon} goToLabel={t.navbar.goTo} aboutSubmenuLabel={t.navbar.aboutSubmenuLabel} expandedMobileSubmenu={expandedMobileSubmenu} setExpandedMobileSubmenu={setExpandedMobileSubmenu} dismissedDesktopSubmenu={dismissedDesktopSubmenu} setDismissedDesktopSubmenu={setDismissedDesktopSubmenu} />
          ))}
          <div className="border-t border-slate-700 px-2 pt-4">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="mobile-language-options"
              className="flex min-h-12 w-full items-center justify-between rounded-full px-3 py-3 text-sm text-white/90 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <span className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
                {t.navbar.languageLabel}
                <span className="text-xs text-sky-200">
                  {languageOptions.find((option) => option.code === locale)?.label}
                </span>
              </span>
              <ChevronDown className={`h-4 w-4 text-sky-200 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('mobile-language-options', langOpen, true)}
          </div>
          <div className="grid gap-3 border-t border-slate-700 pt-4 sm:grid-cols-2">
            <Link
              href="/contact"
              prefetch={false}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-5 text-center text-sm text-white shadow-sm ring-1 ring-inset ring-white/15 transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <span className="min-w-0 max-w-[9rem] whitespace-normal break-keep leading-tight line-clamp-2">{t.navbar.startProject}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <a
              href="/aerosun-energy.pdf"
              download="aerosun-energy.pdf"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-amber-300/70 bg-white/60 px-5 text-sm text-amber-800 shadow-sm transition hover:border-amber-500/60 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0 max-w-[9rem] whitespace-normal break-keep leading-tight line-clamp-2">{t.navbar.downloadVoucher}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
