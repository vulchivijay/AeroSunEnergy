import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wind Energy in Tirupati | Small Turbines',
  description:
    'Explore small wind turbines, distributed wind systems, and solar-wind hybrid solutions for farms, businesses, and rural projects across India.',
  keywords: [
    'wind energy in Tirupati',
    'small wind turbines India',
    'wind turbine for farms',
    'distributed wind energy systems',
    'commercial wind power solutions',
    'wind energy for businesses',
    'wind turbines for agriculture',
    'solar wind hybrid systems',
    'rural wind energy projects',
    'wind power generation India',
    'wind project consultation',
    'renewable wind power',
    'AeroSun Energy wind',
    'wind energy solutions India',
    'small wind energy in Tirupati',
  ],
  alternates: {
    canonical: '/wind-energy',
  },
  openGraph: {
    title: 'Wind Energy in Tirupati | Small Turbines',
    description:
      'Explore small wind turbines, distributed wind systems, and solar-wind hybrid solutions for farms, businesses, and rural projects across India.',
    url: 'https://aerosunenergy.in/wind-energy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WindEnergyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
