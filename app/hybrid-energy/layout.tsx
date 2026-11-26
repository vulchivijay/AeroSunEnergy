import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover hybrid solar, wind, and battery energy systems',
  description:
    'Explore hybrid solar, wind, and battery systems for reliable power at homes, farms, businesses, and microgrids, with on-grid and off-grid options.',
  keywords: [
    'solar wind hybrid systems India',
    'solar battery hybrid systems',
    'off-grid hybrid power systems',
    'microgrid solar and wind energy',
    'commercial hybrid energy systems',
    'renewable energy storage solutions',
    'hybrid power for farms',
    'hybrid energy for businesses',
    'AeroSun Energy hybrid',
    'reliable renewable power India',
    'solar wind battery systems',
    'solar wind power for commercial sites',
    'hybrid solar inverter',
    'solar wind battery hybrid system',
    'solar wind hybrid system for farms',
    'hybrid solar system cost',
    'solar storage hybrid power',
    'wind and solar',
    'solar energy storage',
  ],
  alternates: {
    canonical: '/hybrid-energy',
  },
  openGraph: {
    title: 'Discover hybrid solar, wind, and battery energy systems | AeroSun Energy Private Limited',
    description:
      'Explore hybrid solar, wind, and battery systems for reliable power at homes, farms, businesses, and microgrids, with on-grid and off-grid options.',
    url: 'https://aerosunenergy.in/hybrid-energy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HybridEnergyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
