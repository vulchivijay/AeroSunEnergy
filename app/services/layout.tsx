import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renewable Energy Services | AeroSun Energy',
  description:
    'AeroSun Energy provides renewable energy services including solar consultation, wind solutions, hybrid system design, installation, maintenance, and technical support for homes, businesses, and industries in India.',
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
    'solar and wind project services',
    'battery backup systems',
    'commercial solar service',
    'industrial solar service',
    'solar water pumping installation',
    'rooftop solar service',
    'solar EPC services',
    'renewable energy consulting',
    'solar monitoring services',
    'solar cleaning services',
    'solar maintenance contract',
    'energy system engineering',
    'AeroSun Energy support services',
    'hybrid power services',
    'solar panel installation service',
    'renewable power project support',
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
