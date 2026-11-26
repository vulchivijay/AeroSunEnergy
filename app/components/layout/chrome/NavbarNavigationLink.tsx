import { createElement, type Dispatch, type SetStateAction } from 'react'
import Link from 'next/link'
import { ChevronDown, type LucideIcon } from 'lucide-react'

export type NavigationLink = {
  label: string
  href: string
  disabled?: boolean
  children?: { label: string; href: string }[]
}

export function NavbarNavigationLink({
  link,
  mobile = false,
  pathname,
  getNavigationIcon,
  isActive,
  closeMenu,
  comingSoonLabel,
  goToLabel,
  aboutSubmenuLabel,
  expandedMobileSubmenu,
  setExpandedMobileSubmenu,
  dismissedDesktopSubmenu,
  setDismissedDesktopSubmenu,
}: {
  link: NavigationLink
  mobile?: boolean
  pathname: string
  getNavigationIcon: (href: string) => LucideIcon
  isActive: (href: string) => boolean
  closeMenu: () => void
  comingSoonLabel: string
  goToLabel: string
  aboutSubmenuLabel: string
  expandedMobileSubmenu: string | null
  setExpandedMobileSubmenu: Dispatch<SetStateAction<string | null>>
  dismissedDesktopSubmenu: string | null
  setDismissedDesktopSubmenu: Dispatch<SetStateAction<string | null>>
}) {
    const disabled = Boolean(link.disabled)
    const active = isActive(link.href) && !disabled
    const navigationIcon = getNavigationIcon(link.href)
    const classes = mobile
      ? `flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
          disabled
            ? 'cursor-not-allowed text-white/50'
            : active
              ? 'bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm ring-1 ring-inset ring-white/40'
              : 'text-white/90 hover:bg-white/10 hover:text-amber-100 hover:shadow-sm'
        }`
      : `group relative z-10 flex h-full min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-sm transition-colors xl:text-xs ${
          active
            ? 'bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm'
            : disabled
              ? 'cursor-not-allowed text-white/50'
              : 'text-white/90 hover:bg-white/10 hover:text-amber-100 hover:shadow-sm'
        }`

    const content = (
      <span className={mobile ? 'flex w-full items-center justify-between gap-3' : 'flex w-full min-w-0 flex-col items-center gap-1'}>
        {mobile ? (
          <span>{link.label}</span>
        ) : (
          <div className="flex w-full min-w-0 flex-col items-center">
            <span className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              active
                ? 'border-slate-200 bg-white/20 text-white shadow-sm'
                : 'border-slate-700 bg-white/10 text-white/90 shadow-sm group-hover:border-amber-200/50 group-hover:bg-white/15 group-hover:text-amber-100'
            }`}
            >
              {createElement(navigationIcon, {
                className: 'h-4 w-4',
                strokeWidth: 1.7,
                'aria-hidden': true,
              })}
              {disabled && (
                <span className="absolute left-[50%] -top-1 translate-[-50%] z-10 whitespace-nowrap rounded-t-xl rounded-br-xl border border-slate-200 bg-[#e5e7eb] px-1.5 py-0.5 cursor-default uppercase text-[#333333] shadow-sm text-xs font-semibold tracking-wide leading-5">
                  {comingSoonLabel}
                </span>
              )}
            </span>
            <span className="block min-w-0 w-full max-w-full whitespace-normal break-keep text-center leading-tight line-clamp-2">{link.label}</span>
          </div>
        )}
        {disabled && (
          <span className={`${mobile ? 'inline-flex' : 'hidden'} items-center gap-1.5 rounded-full border border-slate-200 bg-[#e5e7eb] px-2 py-1 uppercase text-[#333333] text-xs font-semibold tracking-wide leading-5`}>
            <span className="shrink-0 h-2 w-2 rounded-full bg-current" aria-hidden="true" />
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
        prefetch={link.href !== '/contact'}
        onClick={() => {
          if (mobile) {
            closeMenu()
          } else if (link.children?.length) {
            setDismissedDesktopSubmenu(link.href)
          }
        }}
        aria-current={active ? 'page' : undefined}
        aria-label={`${goToLabel} ${link.label}`}
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
              prefetch={link.href !== '/contact'}
              onClick={closeMenu}
              aria-current={active ? 'page' : undefined}
              aria-label={`${goToLabel} ${link.label}`}
              className={`flex min-h-12 min-w-0 flex-1 items-center rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-[#18833a] text-white ring-1 ring-inset ring-[#18833a]/50'
                  : 'text-white/90 hover:bg-white/10 hover:text-amber-100'
              } tracking-normal`}
            >
              {link.label}
            </Link>
            <button
              type="button"
              onClick={() => setExpandedMobileSubmenu(submenuOpen ? null : link.href)}
              aria-label={aboutSubmenuLabel}
              aria-expanded={submenuOpen}
              aria-controls="mobile-about-submenu"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
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
            className="ml-5 rounded-xl border border-slate-700 bg-indigo-950/40 p-2 shadow-sm backdrop-blur-xl"
          >
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const childIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeMenu}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                    childActive
                      ? 'bg-[#18833a] text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-amber-100'
                  }`}
                >
                  {createElement(childIcon, {
                    className: 'mr-3 h-4 w-4 shrink-0',
                    strokeWidth: 1.7,
                    'aria-hidden': true,
                  })}
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
        className="group/nav relative z-20 h-full min-w-0"
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
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-md">
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const childIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setDismissedDesktopSubmenu(link.href)}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333] ${
                    childActive
                      ? 'bg-[#18833a] text-white'
                      : 'text-[#333333] hover:bg-[#18833a] hover:text-white'
                  }`}
                >
                  {createElement(childIcon, {
                    className: 'mr-3 h-4 w-4 shrink-0',
                    strokeWidth: 1.7,
                    'aria-hidden': true,
                  })}
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
