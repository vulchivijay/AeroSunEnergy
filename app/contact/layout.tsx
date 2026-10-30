import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact AeroSun Energy | Solar Quote, Renewable Energy Advice & Project Consultation',
  description:
    'Contact AeroSun Energy for expert guidance on solar, wind, and hybrid energy systems. Request a solar quote, discuss your project, and get reliable renewable energy solutions for your home or business in India.',
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
    title: 'Contact AeroSun Energy | Solar Quote, Renewable Energy Advice & Project Consultation',
    description:
      'Reach out for renewable energy consultation, quotations, and project discussions with AeroSun Energy.',
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
