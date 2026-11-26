import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'
import DashboardHeader from './DashboardHeader'

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | AeroSun Dashboard',
  },
  description:
    'Secure AeroSun Energy workspace for account records, customer forms, and project documents.',
  keywords: [
    'AeroSun Energy dashboard',
    'solar project dashboard',
    'renewable energy project management',
    'customer project records',
    'solar installation tracking',
    'wind energy project records',
    'hybrid energy projects',
    'customer enquiry management',
    'solar customer agreements',
    'installation checklist',
    'solar equipment purchase orders',
    'renewable energy invoices',
    'solar warranty records',
    'project document management',
    'AeroSun staff workspace',
  ],
  alternates: {
    canonical: '/auth/dashboard',
  },
  openGraph: {
    title: 'Dashboard | AeroSun Energy',
    description: 'Secure AeroSun Energy workspace for authorized account users.',
    url: 'https://aerosunenergy.in/auth/dashboard',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const token = await getSessionToken()
  if (!token) redirect('/auth')

  const user = await getSessionUser(token)
  if (!user) redirect('/auth')

  return (
    <div className="min-h-screen">
      <DashboardHeader user={user}>{children}</DashboardHeader>
    </div>
  )
}
