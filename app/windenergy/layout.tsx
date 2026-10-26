import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wind Energy Systems | AeroSun Energy',
  description:
    'AeroSun Energy offers wind turbine systems, distributed wind solutions, and solar-wind hybrid renewable energy systems for farms, commercial properties, and rural projects in India.',
  keywords: [
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
  ],
  alternates: {
    canonical: '/windenergy',
  },
  openGraph: {
    title: 'Wind Energy Systems | AeroSun Energy',
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
