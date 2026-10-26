import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renewable Energy Services | AeroSun Energy',
  description:
    'AeroSun Energy provides renewable energy services including solar consultation, wind power support, hybrid system design, installation, maintenance, and technical support across India.',
  keywords: [
    'renewable energy services',
    'solar energy services India',
    'wind energy services',
    'hybrid energy systems',
    'solar installation company',
    'solar maintenance services',
    'solar system design',
    'AeroSun Energy services',
    'energy consultation',
    'battery backup systems',
    'commercial solar service',
    'industrial solar service',
    'solar EPC services',
    'renewable energy consulting',
    'rooftop solar services',
    'wind turbine services',
    'hybrid power services',
    'solar panel installation service',
    'renewable energy project support',
    'solar monitoring services',
    'solar cleaning services',
    'solar maintenance contract',
    'energy system engineering',
    'AeroSun Energy support services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Renewable Energy Services | AeroSun Energy',
    description:
      'Solar, wind, and hybrid energy services covering consultation, design, engineering, installation, maintenance, and monitoring.',
    url: 'https://aerosunenergy.in/services',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
