'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CalendarDays,
  ClipboardCheck,
  Database,
  FileText,
  FlaskConical,
  Handshake,
  LayoutDashboard,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react'

import { useLocale } from '@/lib/LocaleContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/components/ui/ToastContext'

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

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-700 bg-[#102a43] text-white shadow-sm">
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
                <span className="block truncate text-xs font-semibold tracking-wide leading-5">AeroSun Energy</span>
                <span className="block text-xs text-slate-300">Dashboard</span>
              </span>
            </Link>
            <div className="flex shrink-0 items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="max-w-52 truncate text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{user.name || user.email}</p>
                <p className="uppercase text-emerald-200 text-xs font-semibold tracking-wide leading-5">
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
          <p className="mb-3 hidden px-3 uppercase text-slate-500 md:block text-xs font-semibold tracking-wide leading-5">
            Main menu
          </p>
          <div className="flex gap-2 overflow-x-auto md:block md:overflow-visible">
            {dashboardGroups.map((group) => (
              <section key={group.label ?? 'overview'} className="flex shrink-0 gap-1 md:mb-5 md:block md:space-y-1">
                {group.label && (
                  <p className="hidden px-3 pb-1 uppercase text-slate-400 text-xs font-semibold tracking-wide leading-5 md:block">
                    {group.label}
                  </p>
                )}
                {group.links.map((item) => {
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
                      className={`flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors md:w-full ${
                        active
                          ? 'bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      } tracking-normal`}
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {t.navbar.dashboardPages[item.key]}
                    </Link>
                  )
                })}
              </section>
            ))}
          </div>
        </nav>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
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
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-800 px-5 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-65 tracking-normal"
        disabled={pending}
        onClick={handleLogout}
        type="button"
      >
        {pending ? 'Signing out...' : 'Sign out'}
      </button>
    </>
  )
}
