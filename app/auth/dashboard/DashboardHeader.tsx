'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CalendarDays,
  ChevronLeft,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Headset,
  Handshake,
  LayoutDashboard,
  Receipt,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react'

import { useLocale } from '@/lib/LocaleContext'
import { createContext, useCallback, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/components/ui/ToastContext'

export const DashboardSidebarContentContext = createContext<
  ((content: ReactNode | null) => void) | null
>(null)

const dashboardGroups = [
  {
    label: null,
    links: [
      { key: 'overview', href: '/auth/dashboard', icon: LayoutDashboard },
    ],
  },
  {
    label: 'CUSTOMERS',
    links: [
      { key: 'customerEnquiry', href: '/auth/dashboard/customer-enquiry', icon: Users },
      { key: 'customerAgreement', href: '/auth/dashboard/customer-agreement', icon: Handshake },
    ],
  },
  {
    label: 'OPERATIONS',
    links: [
      { key: 'installationChecklist', href: '/auth/dashboard/installation-checklist', icon: ClipboardCheck },
      { key: 'tracker', href: '/auth/dashboard/nintydays-tracker', icon: CalendarDays },
      { key: 'researchDevelopment', href: '/auth/dashboard/research-development', icon: FlaskConical },
    ],
  },
  {
    label: 'DOCUMENTS',
    links: [
      { key: 'invoiceReceipt', href: '/auth/dashboard/invoice-receipt', icon: Receipt },
      { key: 'purchaseOrder', href: '/auth/dashboard/purchase-order', icon: ShoppingCart },
      { key: 'warrantyPolicy', href: '/auth/dashboard/warranty-policy', icon: ShieldCheck },
      { key: 'termsConditions', href: '/auth/dashboard/terms-conditions', icon: FileText },
    ],
  },
] as const

type DashboardUser = {
  name: string
  email: string
  role: 'admin' | 'operator' | 'monitor'
}

export default function DashboardHeader({
  user,
  children,
}: {
  user: DashboardUser
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? ''
  const { t } = useLocale()
  const [search, setSearch] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarContent, setSidebarContent] = useState<ReactNode | null>(null)
  const setDashboardSidebarContent = useCallback(
    (content: ReactNode | null) => setSidebarContent(content),
    [],
  )
  const activeItem = dashboardGroups
    .map((group) =>
      group.links.find((item) =>
        item.href === '/auth/dashboard'
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(`${item.href}/`),
      ),
    )
    .find((item) => item !== undefined)
  const pageTitle = activeItem ? t.navbar.dashboardPages[activeItem.key] : 'Dashboard'
  const displayName = user.name || user.email
  const displayNameCharacters = Array.from(displayName)
  const headerDisplayName =
    displayNameCharacters.length > 60
      ? `${displayNameCharacters.slice(0, 59).join('')}…`
      : displayName
  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <DashboardSidebarContentContext.Provider value={setDashboardSidebarContent}>
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white">
        <div
          className={`grid h-full grid-cols-[minmax(0,1fr)_auto] ${
            sidebarCollapsed
              ? 'md:grid-cols-[72px_minmax(0,1fr)]'
              : 'md:grid-cols-[320px_minmax(0,1fr)]'
          }`}
        >
          <div
            className={`flex min-w-0 items-center border-r border-slate-200 ${
              sidebarCollapsed ? 'justify-center gap-1 px-1' : 'justify-between gap-2 px-3'
            }`}
          >
            <Link
              href="/auth/dashboard"
              className={`flex min-w-0 items-center focus-visible:outline-2 focus-visible:outline-offset-[-3px] ${
                sidebarCollapsed ? 'justify-center' : 'flex-1'
              }`}
            >
              <Image
                src={sidebarCollapsed ? '/images/logo.webp' : '/images/logo-company.webp'}
                alt="AeroSun Energy"
                width={220}
                height={48}
                priority
                className={
                  sidebarCollapsed
                    ? 'h-7 w-7 shrink-0 object-contain'
                    : 'h-auto w-full max-w-[220px] object-contain'
                }
              />
            </Link>
            <button
              type="button"
              onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-controls="dashboard-sidebar"
              aria-expanded={!sidebarCollapsed}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-emerald-700 md:flex"
            >
              <ChevronLeft
                className={`h-4 w-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="flex min-w-0 items-center justify-between gap-3 px-4 sm:px-6">
            <h1 className="hidden truncate text-base font-semibold tracking-normal text-slate-900 sm:block">
              {pageTitle}
            </h1>
            <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="hidden min-w-0 text-right sm:block">
                <p
                  title={displayName}
                  className="max-w-[min(60ch,40vw)] truncate whitespace-nowrap text-sm font-medium tracking-normal text-slate-800"
                >
                  {headerDisplayName}
                </p>
              </div>
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold tracking-normal text-slate-700 ring-1 ring-slate-200"
                aria-label={`Signed in as ${displayName}`}
              >
                {initials || 'U'}
              </span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>
      <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
        <aside
          id="dashboard-sidebar"
          className={`border-b border-slate-200 bg-white px-3 py-3 md:sticky md:top-16 md:flex md:h-[calc(100vh-4rem)] md:shrink-0 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r md:py-5 ${
            sidebarCollapsed ? 'md:w-[72px] md:px-2' : 'md:w-80 md:px-3'
          }`}
        >
          <label className={`relative mb-5 hidden ${sidebarCollapsed ? '' : 'md:block'}`}>
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search menu"
              aria-label="Search dashboard menu"
              className="h-9 w-full rounded-lg border border-slate-100 bg-slate-50 pl-9 pr-3 text-xs tracking-normal text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </label>
          <p className={`mb-2 hidden px-2 uppercase text-slate-400 text-xs font-semibold tracking-wide leading-5 ${
            sidebarCollapsed ? '' : 'md:block'
          }`}>
            Menu
          </p>
          <nav className="flex gap-2 overflow-x-auto md:block md:overflow-visible" aria-label="Dashboard pages">
            {dashboardGroups.map((group) => {
              const links = group.links.filter((item) =>
                t.navbar.dashboardPages[item.key].toLowerCase().includes(search.trim().toLowerCase()),
              )
              if (!links.length) return null

              return (
                <section key={group.label ?? 'overview'} className="flex shrink-0 gap-1 md:mb-4 md:block md:space-y-0.5">
                  {group.label && (
                    <p className={`hidden px-2 pb-1 pt-2 uppercase text-slate-400 text-xs font-semibold tracking-wide leading-5 ${
                      sidebarCollapsed ? '' : 'md:block'
                    }`}>
                      {group.label}
                    </p>
                  )}
                  {links.map((item) => {
                    const active =
                      item.href === '/auth/dashboard'
                        ? pathname === item.href
                        : pathname === item.href || pathname.startsWith(`${item.href}/`)
                    const Icon = item.icon

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        aria-label={t.navbar.dashboardPages[item.key]}
                        title={sidebarCollapsed ? t.navbar.dashboardPages[item.key] : undefined}
                        className={`flex min-h-10 shrink-0 items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium tracking-normal transition-colors md:w-full ${
                          active
                            ? 'bg-[#f5f5f3] text-slate-900'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                        } ${sidebarCollapsed ? 'md:justify-center md:px-0' : ''}`}
                      >
                        <Icon className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                        <span className={sidebarCollapsed ? 'hidden' : 'truncate'}>
                          {t.navbar.dashboardPages[item.key]}
                        </span>
                      </Link>
                    )
                  })}
                </section>
              )
            })}
          </nav>
          {pathname === '/auth/dashboard' && sidebarContent && (
            <div className={sidebarCollapsed ? 'hidden' : 'mt-1'}>
              {sidebarContent}
            </div>
          )}
          <div className="mt-auto hidden border-t border-slate-100 pt-4 md:block">
            <p className={`mb-2 px-2 uppercase text-slate-400 text-xs font-semibold tracking-wide leading-5 ${
              sidebarCollapsed ? 'hidden' : ''
            }`}>
              General
            </p>
            <div
              className={`flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm text-slate-600 ${
                sidebarCollapsed ? 'justify-center px-0' : ''
              }`}
              title={sidebarCollapsed ? `${user.role} access` : undefined}
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <span className={sidebarCollapsed ? 'hidden' : 'truncate capitalize'}>
                {user.role} access
              </span>
            </div>
            <Link
              href="/contact"
              title={sidebarCollapsed ? 'Help Center' : undefined}
              className={`flex min-h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm tracking-normal text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950 ${
                sidebarCollapsed ? 'justify-center px-0' : ''
              }`}
            >
              <Headset className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <span className={sidebarCollapsed ? 'hidden' : ''}>Help Center</span>
            </Link>
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
    </DashboardSidebarContentContext.Provider>
  )
}


function LogoutButton() {
  const router = useRouter()
  const toast = useToast()
  const [pending, setPending] = useState(false)

  async function handleLogout() {
    setPending(true)

    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      if (!response.ok) {
        const result = (await response.json()) as { error?: string }
        toast.error(result.error ?? 'Unable to sign out. Please try again.')
        return
      }

      toast.success('Signed out.')
      router.replace('/auth')
      router.refresh()
    } catch {
      toast.error('Unable to reach the server. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <>
      <button
        className="inline-flex min-h-9 items-center justify-center rounded-lg border border-slate-200 px-3 text-xs font-semibold tracking-normal text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-65 sm:px-4 sm:text-sm"
        disabled={pending}
        onClick={handleLogout}
        type="button"
      >
        {pending ? 'Signing out...' : 'Sign out'}
      </button>
    </>
  )
}
