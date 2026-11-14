'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowDownToLine,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  House,
  Info,
  Mail,
  Menu,
  PanelsTopLeft,
  PackageOpen,
  Sun,
  Wind,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import Logo from '../brand/Logo'
import { isLocale, useLocale, type Locale } from '@/lib/LocaleContext'
import { isProductionComingSoonLink } from '@/lib/navigation'

const navigationIconComponents: Record<string, LucideIcon> = {
  house: House,
  info: Info,
  building: Building2,
  package: PackageOpen,
  sun: Sun,
  wind: Wind,
  zap: Zap,
  panels: PanelsTopLeft,
  mail: Mail,
}

type NavigationLink = {
  label: string
  href: string
  disabled?: boolean
  children?: { label: string; href: string }[]
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
  }

  function renderNavigationLink(link: NavigationLink, mobile = false) {
    const disabled = Boolean(link.disabled) || isProductionComingSoonLink(link.href)
    const active = isActive(link.href) && !disabled
    const Icon = getNavigationIcon(link.href)
    const comingSoonLabel = t.navbar.comingSoon
    const classes = mobile
      ? `flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
          disabled
            ? 'cursor-not-allowed text-[#333333]'
            : active
              ? 'bg-[#20A44A] text-white ring-1 ring-inset ring-[#20A44A]/50'
              : 'text-[#333333] hover:bg-[#20A44A] hover:text-white'
        }`
      : `group relative z-10 flex w-auto flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[13px] transition-colors 2xl:text-sm ${
          active
            ? 'bg-[#20A44A] text-white'
            : disabled
              ? 'cursor-not-allowed text-[#333333]'
              : 'text-[#333333] hover:bg-[#20A44A] hover:text-white'
        }`

    const content = (
      <span className={mobile ? 'flex w-full items-center justify-between gap-3' : 'flex flex-col items-center gap-1'}>
        {mobile ? (
          <span>{link.label}</span>
        ) : (
          <>
            <span className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              active
                ? 'border-white/30 bg-white/10 text-white'
                : 'border-[#333333]/15 bg-white/50 text-[#333333] group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white'
            }`}>
              <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              {disabled && (
                <span className="absolute -left-6 -top-1 z-10 whitespace-nowrap rounded-t-md rounded-br-md border border-[#333333]/20 bg-[#e5e7eb] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#333333] shadow-md">
                  {comingSoonLabel}
                </span>
              )}
            </span>
            <span className="whitespace-nowrap">{link.label}</span>
          </>
        )}
        {disabled && (
          <span className={`${mobile ? 'inline-flex' : 'hidden'} items-center gap-1.5 rounded-full border border-[#333333]/20 bg-[#e5e7eb] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#333333]`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#333333]/50" aria-hidden="true" />
            {comingSoonLabel}
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

    const parentLink = (
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

    if (!link.children?.length) {
      return parentLink
    }

    if (mobile) {
      const submenuOpen = expandedMobileSubmenu === link.href
      return (
        <div key={link.href}>
          <div className="flex items-center gap-1">
            <Link
              href={link.href}
              onClick={closeMenu}
              aria-current={active ? 'page' : undefined}
              aria-label={`${t.navbar.goTo} ${link.label}`}
              className={`flex min-h-12 min-w-0 flex-1 items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-[#20A44A] text-white ring-1 ring-inset ring-[#20A44A]/50'
                  : 'text-[#333333] hover:bg-[#20A44A] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
            <button
              type="button"
              onClick={() => setExpandedMobileSubmenu(submenuOpen ? null : link.href)}
              aria-label={t.navbar.aboutSubmenuLabel}
              aria-expanded={submenuOpen}
              aria-controls="mobile-about-submenu"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#333333] transition hover:bg-[#333333]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
          <div
            id="mobile-about-submenu"
            hidden={!submenuOpen}
            className="ml-5 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
          >
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const ChildIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeMenu}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333] ${
                    childActive
                      ? 'bg-[#20A44A] font-semibold text-white'
                      : 'text-[#333333] hover:bg-[#20A44A] hover:text-white'
                  }`}
                >
                  <ChildIcon className="mr-3 h-4 w-4 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      )
    }

    const submenuDismissed = dismissedDesktopSubmenu === link.href

    return (
      <div
        key={link.href}
        className="group/nav relative z-20"
        onMouseLeave={() => {
          if (submenuDismissed) setDismissedDesktopSubmenu(null)
        }}
      >
        {parentLink}
        <div
          className={`invisible absolute left-1/2 top-full z-[70] min-w-52 -translate-x-1/2 pt-2 opacity-0 transition duration-150 ${
            submenuDismissed
              ? ''
              : 'group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100'
          }`}
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.35)]">
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const ChildIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setDismissedDesktopSubmenu(link.href)}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex items-center rounded-lg px-3 py-2.5 text-left text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333] ${
                    childActive
                      ? 'bg-[#20A44A] font-semibold text-white'
                      : 'text-[#333333] hover:bg-[#20A44A] hover:text-white'
                  }`}
                >
                  <ChildIcon className="mr-3 h-4 w-4 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  function renderLanguageOptions(id: string, open: boolean, inline = false) {
    return (
      <div
        id={id}
        hidden={!open}
        role="group"
        aria-label={t.navbar.languageLabel}
        className={inline
          ? 'mt-2 grid gap-1 rounded-xl border border-[#333333]/15 bg-white/60 p-1.5 text-[#333333]'
          : 'absolute right-0 top-[calc(100%+0.65rem)] z-[60] w-48 overflow-hidden rounded-2xl border border-[#333333]/15 bg-[#e5e7eb] p-1.5 text-[#333333] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]'}
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
                ? 'bg-[#333333]/10 font-semibold text-[#333333]'
                : 'text-[#333333] hover:bg-[#333333]/5'
            }`}
          >
            <span>{option.label}</span>
            {locale === option.code && <Check className="h-4 w-4 text-[#333333]" aria-hidden="true" />}
          </button>
        ))}
      </div>
    )
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[linear-gradient(135deg,#e5e7eb,#e5e7eb)] text-[#333333] shadow-[0_18px_42px_-30px_rgba(0,0,0,0.25)]"
    >
      <div className="absolute -left-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#333333]/[0.03] blur-3xl" />
      <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-[#333333]/[0.03] blur-3xl" />

      <div className="relative hidden border-b border-[#333333]/10 bg-[#e5e7eb] text-[#333333]">
        <div className="mx-auto flex min-h-8 w-full items-center justify-between gap-3 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] sm:px-6 sm:text-[11px] sm:tracking-[0.12em] lg:px-8">
          <span className="flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b45e] shadow-[0_0_10px_rgba(214,180,94,0.65)]" aria-hidden="true" />
            {t.navbar.brandName}
          </span>
          <span className="ml-3 hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-[#333333] lg:flex lg:items-center lg:gap-2">
            <Sun className="h-3 w-3 text-[#333333]" strokeWidth={1.8} aria-hidden="true" />
            {t.navbar.brandTagline}
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[5.25rem] w-full items-center justify-between gap-1 px-3 py-2 sm:gap-3 sm:px-6 lg:px-8 max-[319px]:flex-wrap">
        <Logo compact />

        <nav aria-label={t.navbar.primaryNavigationLabel} className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="relative grid w-full grid-flow-col auto-cols-max items-center justify-center gap-2">
            <span className="pointer-events-none absolute left-[8%] right-[8%] top-4 h-px bg-gradient-to-r from-transparent via-[#333333]/20 to-transparent" aria-hidden="true" />
            {navLinks.map((link) => renderNavigationLink(link))}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 border-l border-[#333333]/15 pl-3 2xl:gap-3 2xl:pl-5 xl:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="desktop-language-options"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#333333]/20 bg-white/50 px-3 text-[12px] tracking-wider text-[#333333] transition hover:border-[#333333]/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
            >
              <Globe2 className="h-4 w-4 text-[#333333]" aria-hidden="true" />
              {languageOptions.find((option) => option.code === locale)?.shortLabel}
              <ChevronDown className={`h-3.5 w-3.5 text-[#333333] transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('desktop-language-options', langOpen)}
          </div>

          <a
            href="/aerosun-energy.pdf"
            download="aerosun-energy.pdf"
            aria-label={t.navbar.downloadVoucher}
            className="inline-flex min-h-11 bg-[#F59E0B] items-center gap-2 rounded-xl px-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#20A44A] hover:text-[#ffffff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
          >
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            <span className="hidden 2xl:inline">{t.navbar.voucher}</span>
          </a>

          <Link
            href="/contact"
            title={t.navbar.startProjectTitle}
            aria-label={t.navbar.startProjectAriaLabel}
            data-cta="start-project"
            className="group inline-flex min-h-11 items-center gap-1 rounded-xl bg-[#20A44A] px-4 text-sm text-white shadow-[0_8px_24px_-12px_rgba(32,164,74,0.45)] transition hover:-translate-y-0.5 hover:bg-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#20A44A]"
          >
            {t.navbar.startProject}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open)
              setLangOpen(false)
            }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_6px_18px_-10px_rgba(0,0,0,0.2)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333] ${
              menuOpen
                ? 'border-[#333333]/30 bg-white text-[#333333]'
                : 'border-[#333333]/20 bg-white/50 text-[#333333] hover:border-[#333333]/40 hover:bg-white'
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
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-[#333333]/15 bg-[#e5e7eb] px-4 pb-6 pt-3 shadow-[0_24px_50px_-22px_rgba(0,0,0,0.25)] sm:px-6 xl:hidden"
      >
        <nav aria-label={t.navbar.mobileNavigationLabel} className="mx-auto max-w-3xl space-y-1">
          <p className="mb-3 flex items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#333333]">
            <span className="h-px w-5 bg-[#333333]/30" />
            {t.navbar.exploreLabel}
          </p>
          {navLinks.map((link) => renderNavigationLink(link, true))}
          <div className="border-t border-[#333333]/15 px-2 pt-4">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="mobile-language-options"
              className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-[#333333] transition hover:bg-[#333333]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
            >
              <span className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-[#333333]" aria-hidden="true" />
                {t.navbar.languageLabel}
                <span className="text-xs text-[#333333]">
                  {languageOptions.find((option) => option.code === locale)?.label}
                </span>
              </span>
              <ChevronDown className={`h-4 w-4 text-[#333333] transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('mobile-language-options', langOpen, true)}
          </div>
          <div className="grid gap-3 border-t border-[#333333]/15 pt-4 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#20A44A] px-5 text-sm font-bold text-white transition hover:bg-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20A44A]"
            >
              {t.navbar.startProject}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="/aerosun-energy.pdf"
              download="aerosun-energy.pdf"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#333333]/20 bg-white/50 px-5 text-sm font-semibold text-[#333333] transition hover:border-[#333333]/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333]"
            >
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              {t.navbar.downloadVoucher}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
