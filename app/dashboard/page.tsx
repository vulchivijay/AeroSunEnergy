import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import LogoutButton from '@/app/components/auth/LogoutButton'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'
import { isDashboardAdmin, isDashboardAdminConfigured } from '@/lib/auth/admin'
import DashboardDataTabs from './DashboardDataTabs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Data Dashboard',
  robots: { index: false, follow: false },
}

function DatabaseUnavailable() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f7faf7] px-4 py-16">
      <section className="w-full max-w-lg rounded-3xl border border-emerald-950/10 bg-white p-8 text-center shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)]">
        <h1 className="text-2xl font-bold text-slate-950">Dashboard is temporarily unavailable</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          We could not verify your account right now. Please try again in a moment.
        </p>
        <Link className="mt-6 inline-flex min-h-11 items-center rounded-full bg-emerald-800 px-5 text-sm font-bold text-white hover:bg-emerald-900" href="/dashboard">
          Try again
        </Link>
      </section>
    </main>
  )
}

export default async function DashboardPage() {
  const token = await getSessionToken()
  if (!token) redirect('/login')

  let user
  try {
    user = await getSessionUser(token)
  } catch (error) {
    console.error('Dashboard authentication check failed.', error)
    return <DatabaseUnavailable />
  }

  if (!user) redirect('/login')
  const isAdminConfigured = isDashboardAdminConfigured()
  if (isAdminConfigured && !isDashboardAdmin(user.email)) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#f7faf7] px-4 py-16">
        <section className="w-full max-w-lg rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)]">
          <h1 className="text-2xl font-bold text-slate-950">Dashboard access restricted</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            This account does not have permission to view customer and business records.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-700 hover:bg-slate-50" href="/">
              Return home
            </Link>
            <LogoutButton />
          </div>
        </section>
      </main>
    )
  }

  if (!isAdminConfigured) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#f7faf7] px-4 py-16">
        <section className="w-full max-w-xl rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)]">
          <h1 className="text-2xl font-bold text-slate-950">Dashboard access is not configured</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Add the allowed administrator email address to the server-only <code className="rounded bg-slate-100 px-1.5 py-0.5">DASHBOARD_ADMIN_EMAILS</code> environment variable, then reload this page.
          </p>
          <div className="mt-6 flex justify-center">
            <LogoutButton />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-[65vh] bg-[#f7faf7] px-4 py-12 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)] sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">AeroSun Energy · Admin</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Data dashboard</h1>
            <p className="mt-2 text-sm text-slate-600">Signed in as {user.name} ({user.email})</p>
          </div>
          <LogoutButton />
        </div>

        <DashboardDataTabs />
      </section>
    </main>
  )
}
