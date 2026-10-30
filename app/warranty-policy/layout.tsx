import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty Policy for Solar, Wind & Hybrid Energy Systems | AeroSun Energy',
  description:
    'Review AeroSun Energy warranty terms, service responsibilities, and after-sales support for solar, wind, and hybrid energy systems.',
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
    canonical: '/warranty-policy',
  },
  openGraph: {
    title: 'Warranty Policy for Solar, Wind & Hybrid Energy Systems | AeroSun Energy',
    description:
      'Understand AeroSun Energy warranty coverage, support commitments, and service terms for renewable energy systems.',
    url: 'https://aerosunenergy.in/warranty-policy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WarrantyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
