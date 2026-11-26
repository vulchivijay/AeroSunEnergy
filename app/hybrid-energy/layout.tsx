import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hybrid Solar & Wind Systems in Tirupati',
  description:
    'Combine solar, wind, and energy storage for reliable power at homes, businesses, farms, and microgrids in Tirupati and across India.',
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
  ],
  alternates: {
    canonical: '/hybrid-energy',
  },
  openGraph: {
    title: 'Hybrid Solar & Wind Systems in Tirupati',
    description:
      'Combine solar, wind, and energy storage for reliable power at homes, businesses, farms, and microgrids in Tirupati and across India.',
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
