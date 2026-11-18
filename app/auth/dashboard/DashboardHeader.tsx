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

export default function DashboardHeader({ user }: { user: DashboardUser }) {
  const pathname = usePathname() ?? ''
  const { locale, setLocale, t } = useLocale()
  const languageOptions = t.navbar.languages

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-[#102a43] text-white shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <Link href="/auth/dashboard" className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-100 ring-1 ring-inset ring-white/15">
              <Database className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-wide">AeroSun Energy</span>
              <span className="block text-xs text-slate-300">Dashboard</span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <label className="sr-only" htmlFor="dashboard-language">{t.navbar.languageLabel}</label>
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
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">{user.role}</p>
            </div>
            <LogoutButton />
          </div>
        </div>
        <nav className="-mb-px flex gap-1 overflow-x-auto border-t border-white/10 py-2" aria-label="Dashboard pages">
          {dashboardLinks.map((item) => {
            const active = item.href === '/auth/dashboard'
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`min-h-10 shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-white/15 text-white ring-1 ring-inset ring-white/20'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {t.navbar.dashboardPages[item.key]}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
