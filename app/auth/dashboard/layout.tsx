import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | AeroSun Energy',
  description:
    'Securely access your AeroSun Energy account dashboard and project resources.',
  keywords: [
    'AeroSun Energy dashboard',
    'AeroSun customer account',
    'renewable energy project resources',
    'AeroSun Energy account access',
    'AeroSun customer dashboard login',
    'solar project dashboard',
    'wind energy project dashboard',
    'hybrid energy customer dashboard',
    'renewable energy account portal',
    'solar installation project records',
    'customer project status dashboard',
    'AeroSun billing resources',
    'AeroSun service documents',
    'solar customer project information',
    'renewable project account access',
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
