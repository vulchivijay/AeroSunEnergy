import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '90-Day Tracker',
  description: 'Secure 90-day tracker for authorized AeroSun Energy users.',
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
    canonical: '/auth/dashboard/nintydays-tracker',
  },
  openGraph: {
    title: '90-Day Tracker | AeroSun Energy Dashboard',
    description: 'Secure 90-day tracker for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/nintydays-tracker',
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
