import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wind Energy Systems | Small Wind Turbines, Hybrid Systems & Renewable Power by AeroSun Energy',
  description:
    'AeroSun Energy offers wind turbine systems, distributed wind solutions, and solar-wind hybrid renewable energy systems for farms, commercial properties, and rural projects in India.',
  keywords: [
    'wind energy in Tirupati',
    'wind energy solutions in Tirupati',
    'wind power solutions in Tirupati',
    'wind turbine in Tirupati',
    'small wind turbine in Tirupati',
    'wind energy for farms in Tirupati',
    'commercial wind energy in Tirupati',
    'solar wind hybrid system in Tirupati',
    'wind energy systems',
    'horizontal axis wind turbine',
    'vertical axis wind turbine',
    'small wind turbine India',
    'wind turbine for farm',
    'solar wind hybrid system',
    'distributed wind energy',
    'commercial wind turbine',
    'offshore wind energy',
    'onshore wind energy',
    'renewable wind power',
    'AeroSun Energy wind',
    'wind power solutions',
    'micro wind turbine',
    'wind battery storage',
    'wind energy for businesses',
    'wind turbines for agriculture',
    'renewable energy India',
    'wind project consultation',
    'wind power generation',
    'clean energy wind systems',
    'small-scale wind energy',
    'hybrid renewable power',
    'wind and solar hybrid system',
    'wind energy company India',
    'renewable power solutions',
  ],
  alternates: {
    canonical: '/windenergy',
  },
  openGraph: {
    title: 'Wind Energy Systems | Small Wind Turbines, Hybrid Systems & Renewable Power by AeroSun Energy',
    description:
      'Explore small wind turbines, large commercial systems, distributed wind, and hybrid solar-wind solutions for sustainable power generation.',
    url: 'https://aerosunenergy.in/windenergy',
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
