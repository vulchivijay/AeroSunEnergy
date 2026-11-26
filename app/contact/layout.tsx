import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact our team for renewable energy advice and project support',
  description:
    'Request a solar quote or contact AeroSun Energy for renewable energy advice, rooftop solar installation, wind systems, hybrid power, and project support.',
  keywords: [
    'contact AeroSun Energy',
    'solar energy consultation',
    'renewable energy consultation',
    'solar quote India',
    'solar energy experts',
    'solar panel installation quote',
    'wind energy consultation',
    'hybrid energy consultation',
    'renewable energy enquiry',
    'solar project consultation',
    'AeroSun Energy contact number',
    'solar power company',
    'green energy consultation',
    'rooftop solar enquiry',
    'commercial solar enquiry',
    'industrial solar consultation',
    'off-grid solar solutions',
    'solar and wind project discussion',
    'solar system advisor',
    'clean energy company India',
    'energy solution consultant',
    'solar energy support',
    'AeroSun Energy inquiry',
    'solar and hybrid energy experts',
    'renewable power consultant',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact our team for renewable energy advice and project support | AeroSun Energy Private Limited',
    description:
      'Request a solar quote or contact AeroSun Energy for renewable energy advice, rooftop solar installation, wind systems, hybrid power, and project support.',
    url: 'https://aerosunenergy.in/contact',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
