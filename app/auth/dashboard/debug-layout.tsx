import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'
import DashboardHeader from './DashboardHeader'

export const metadata: Metadata = {
  title: {
    default: 'Manage your secure AeroSun Energy dashboard',
    template: '%s | AeroSun Energy Private Limited',
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
    'solar energy system',
    'solar panel system',
    'solar panels for homes',
    'solar installation',
  ],
  alternates: {
    canonical: '/auth/dashboard',
  },
  openGraph: {
    title: 'Access your secure AeroSun Energy dashboard | AeroSun Energy Private Limited',
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
  const user = token ? await getSessionUser(token) : null
  if (!user && process.env.NODE_ENV === 'production') redirect('/auth')

  return (
    <div className="min-h-screen">
      <DashboardHeader
        user={user ?? { name: 'Debug User', email: 'debug@localhost', role: 'admin' }}
      >
        {children}
      </DashboardHeader>
    </div>
  )
}
