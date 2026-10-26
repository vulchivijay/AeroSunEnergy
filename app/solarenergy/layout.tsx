import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Energy Systems | AeroSun Energy',
  description:
    'AeroSun Energy designs and installs rooftop solar, off-grid solar, hybrid solar, and commercial solar systems for homes, businesses, farms, and industrial sites in India.',
  keywords: [
    'solar energy systems India',
    'rooftop solar solution',
    'off-grid solar system',
    'hybrid solar system',
    'commercial solar installation',
    'solar water pumping system',
    'solar PV system',
    'AeroSun Energy solar',
    'solar panel installation India',
    'solar power for homes',
    'solar for businesses',
    'solar energy for farms',
    'grid-connected solar',
    'solar battery backup',
    'solar EV charging',
    'solar street lighting',
    'renewable energy India',
    'solar rooftop installation',
    'industrial solar systems',
    'solar system design',
    'solar energy company India',
    'solar power systems for homes',
    'commercial solar panels',
    'renewable solar power',
    'AeroSun Energy solar solutions',
  ],
  alternates: {
    canonical: '/solarenergy',
  },
  openGraph: {
    title: 'Solar Energy Systems | AeroSun Energy',
    description:
      'Explore rooftop solar, hybrid solar, off-grid solar, and commercial solar solutions designed for Indian homes, businesses, and agricultural applications.',
    url: 'https://aerosunenergy.in/solarenergy',
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
