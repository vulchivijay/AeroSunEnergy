import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Energy in Tirupati | Rooftop Solar',
  description:
    'Explore rooftop, off-grid, commercial, and agricultural solar solutions for homes, farms, businesses, and industries in Tirupati and across India.',
  keywords: [
    'solar energy in Tirupati',
    'rooftop solar installation Tirupati',
    'commercial solar systems Tirupati',
    'industrial solar solutions India',
    'off-grid solar systems India',
    'agricultural solar pumps',
    'solar power for homes',
    'solar energy for businesses',
    'solar panel installation India',
    'solar energy solutions Andhra Pradesh',
    'solar battery backup',
    'solar PV systems',
    'hybrid solar systems',
    'AeroSun Energy solar',
    'renewable solar power India',
  ],
  alternates: {
    canonical: '/solar-energy',
  },
  openGraph: {
    title: 'Solar Energy in Tirupati | Rooftop Solar',
    description:
      'Explore rooftop, off-grid, commercial, and agricultural solar solutions for homes, farms, businesses, and industries in Tirupati and across India.',
    url: 'https://aerosunenergy.in/solar-energy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SolarEnergyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
