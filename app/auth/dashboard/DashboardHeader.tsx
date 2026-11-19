'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Database } from 'lucide-react'
import LogoutButton from '@/app/components/auth/LogoutButton'
import { isLocale, useLocale } from '@/lib/LocaleContext'

const dashboardLinks = [
  { key: 'overview', href: '/auth/dashboard' },
  { key: 'customerEnquiry', href: '/auth/dashboard/customer-enquiry' },
  { key: 'customerAgreement', href: '/auth/dashboard/customer-agreement' },
  { key: 'installationChecklist', href: '/auth/dashboard/installation-checklist' },
  { key: 'invoiceReceipt', href: '/auth/dashboard/invoice-receipt' },
  { key: 'purchaseOrder', href: '/auth/dashboard/purchase-order' },
  { key: 'warrantyPolicy', href: '/auth/dashboard/warranty-policy' },
  { key: 'tracker', href: '/auth/dashboard/nintydays-tracker' },
  { key: 'researchDevelopment', href: '/auth/dashboard/research-development' },
  { key: 'termsConditions', href: '/auth/dashboard/terms-conditions' },
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
  const { locale, setLocale, t } = useLocale()
  const languageOptions = t.navbar.languages

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/15 bg-[#102a43] text-white shadow-sm">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            <Link
              href="/auth/dashboard"
              className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-100 ring-1 ring-inset ring-white/15">
                <Database className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold tracking-wide">AeroSun Energy</span>
                <span className="block text-xs text-slate-300">Dashboard</span>
              </span>
            </Link>
            <div className="flex shrink-0 items-center gap-3">
              <label className="sr-only" htmlFor="dashboard-language">
                {t.navbar.languageLabel}
              </label>
              <select
                id="dashboard-language"
                aria-label={t.navbar.languageLabel}
                value={locale}
                onChange={(event) => {
                  if (isLocale(event.target.value)) setLocale(event.target.value)
                }}
                className="min-h-10 max-w-28 rounded-lg border border-white/20 bg-white/10 px-2 text-xs font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code} className="bg-white text-slate-900">
                    {option.shortLabel}
                  </option>
                ))}
              </select>
              <div className="hidden text-right sm:block">
                <p className="max-w-52 truncate text-sm font-semibold">{user.name || user.email}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                  {user.role}
                </p>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto flex max-w-[1600px] flex-col md:min-h-[calc(100vh-72px)] md:flex-row">
        <nav
          className="border-b border-slate-200 bg-white px-4 py-2 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:w-64 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r md:px-4 md:py-6"
          aria-label="Dashboard pages"
        >
          <p className="mb-3 hidden px-3 text-xs font-bold uppercase tracking-wider text-slate-500 md:block">
            Main menu
          </p>
          <div className="flex gap-1 overflow-x-auto md:flex-col">
            {dashboardLinks.map((item) => {
              const active =
                item.href === '/auth/dashboard'
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`min-h-10 shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-colors md:w-full md:text-left ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  {t.navbar.dashboardPages[item.key]}
                </Link>
              )
            })}
          </div>
        </nav>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  )
}
