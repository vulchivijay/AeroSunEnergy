import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Review your product warranty coverage and policy',
  description: 'Secure warranty policy workspace for authorized AeroSun Energy users.',
  keywords: [
    'warranty policy AeroSun Energy',
    'solar warranty policy',
    'renewable energy service warranty',
    'AeroSun Energy after-sales support',
    'solar system warranty terms',
    'solar panel warranty coverage',
    'wind turbine warranty terms',
    'hybrid energy warranty policy',
    'solar inverter warranty',
    'battery warranty support',
    'renewable energy equipment warranty',
    'solar maintenance warranty',
    'power system service guarantee',
    'AeroSun Energy service commitment',
    'after sales support for solar',
    'clean energy warranty terms',
    'solar installation warranty India',
    'renewable power system warranty',
    'AeroSun Energy support policy',
    'solar and wind system guarantee',
  ],
  alternates: {
    canonical: '/auth/dashboard/warranty-policy',
  },
  openGraph: {
    title: 'Review your product warranty coverage and policy | AeroSun Energy Private Limited',
    description: 'Secure warranty policy workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/warranty-policy',
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

export default function WarrantyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
