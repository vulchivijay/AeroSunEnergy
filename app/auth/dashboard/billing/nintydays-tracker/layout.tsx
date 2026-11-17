import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '90-Day Business Execution Tracker | AeroSun Energy',
  description:
    'AeroSun Energy 90-Day Business Execution Tracker for planning cash flow, leads, activities, and project execution milestones in a simple Excel dashboard.',
  keywords: [
    '90-day business tracker',
    'business execution tracker',
    'AeroSun Energy tracker',
    'renewable energy business plan',
    'business dashboard Excel',
    'lead tracking spreadsheet',
    'AeroSun Energy execution plan',
    '90-day business strategy',
    'solar company growth tracker',
    'renewable energy KPI tracker',
    'AeroSun Energy business dashboard',
    '90-day operations planner',
    'renewable energy sales pipeline',
    'solar business milestone tracker',
    'AeroSun Energy planning spreadsheet',
  ],
  alternates: {
    canonical: '/auth/dashboard/billing/nintydays-tracker',
  },
  openGraph: {
    title: '90-Day Business Execution Tracker | AeroSun Energy',
    description:
      'Track leads, expenses, orders, and business execution milestones with the AeroSun Energy 90-day business tracker.',
    url: 'https://aerosunenergy.in/auth/dashboard/billing/nintydays-tracker',
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

export default function NinetyDayTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
