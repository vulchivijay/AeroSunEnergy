import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover small wind turbines and distributed wind energy systems',
  description:
    'Discover small wind turbines, distributed wind systems, and solar-wind hybrid power for farms, businesses, and rural energy projects.',
  keywords: [
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
    'small wind turbine for home India',
    'small wind turbine price India',
    'wind solar hybrid system India',
    'wind energy for agriculture',
    'wind power for farms',
  ],
  alternates: {
    canonical: '/wind-energy',
  },
  openGraph: {
    title: 'Discover small wind turbines and distributed wind energy systems | AeroSun Energy Private Limited',
    description:
      'Discover small wind turbines, distributed wind systems, and solar-wind hybrid power for farms, businesses, and rural energy projects.',
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
