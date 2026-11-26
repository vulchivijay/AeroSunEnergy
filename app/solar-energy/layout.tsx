import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Energy in Tirupati | Rooftop Solar',
  description:
    'Explore rooftop, off-grid, commercial, and agricultural solar solutions for homes, farms, businesses, and industries in Tirupati and across India.',
  keywords: [
    'industrial solar solutions India',
    'off-grid solar systems India',
    'agricultural solar pumps',
    'solar power for homes',
    'solar energy for businesses',
    'solar panel installation India',
    'solar battery backup',
    'solar PV systems',
    'hybrid solar systems',
    'AeroSun Energy solar',
    'renewable solar power India',
    'PM Surya Ghar rooftop solar',
    'rooftop solar subsidy India',
    'solar panel price in India',
    'solar inverter and battery',
    'home solar system cost',
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
