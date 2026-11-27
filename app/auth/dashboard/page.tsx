import type { Metadata } from 'next'
import DashboardDataTabs from './DashboardDataTabs'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Manage customer records and project documents in your secure dashboard',
  description:
    'Secure data dashboard for authorized users to manage AeroSun Energy customer records, forms, and project documents.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <h1 className="sr-only text-3xl sm:text-4xl lg:text-5xl font-semibold !tracking-tight leading-tight">Dashboard</h1>
        <DashboardDataTabs />
      </div>
    </main>
  )
}
