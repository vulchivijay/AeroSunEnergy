import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import LogoutButton from '@/app/components/auth/LogoutButton'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dashboard',
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

  return (
    <main className="min-h-[65vh] bg-[#f7faf7] px-4 py-12 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)] sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">AeroSun Energy</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Welcome, {user.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">You are signed in as {user.email}.</p>
          </div>
          <LogoutButton />
        </div>

        <section className="mt-6 rounded-3xl border border-emerald-950/10 bg-white p-6 sm:p-9">
          <h2 className="text-xl font-bold text-slate-950">Your dashboard</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your account is connected and ready to use.
          </p>
          <Link className="mt-6 inline-flex font-semibold text-emerald-800 underline-offset-4 hover:underline" href="/">
            Return to AeroSun Energy
          </Link>
        </section>
      </section>
    </main>
  )
}
