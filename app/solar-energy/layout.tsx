import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore rooftop, off-grid, and commercial solar energy systems',
  description:
    'Explore rooftop, off-grid, commercial, and agricultural solar systems, including panels, inverters, and battery storage for homes, farms, and businesses.',
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
    title: 'Explore rooftop, off-grid, and commercial solar energy systems | AeroSun Energy Private Limited',
    description:
      'Explore rooftop, off-grid, commercial, and agricultural solar systems, including panels, inverters, and battery storage for homes, farms, and businesses.',
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
