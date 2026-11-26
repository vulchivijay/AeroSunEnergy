import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Review your installation checklist',
  description: 'Secure installation checklist for authorized AeroSun Energy users.',
  keywords: [
    'installation checklist AeroSun Energy',
    'solar installation checklist',
    'commissioning checklist',
    'renewable energy site readiness',
    'AeroSun Energy commissioning checklist',
    'solar project checklist',
    'wind turbine installation checklist',
    'hybrid system installation checklist',
    'site safety checklist',
    'solar panel installation checklist',
    'solar commissioning process',
    'renewable energy QA checklist',
    'power plant pre-commissioning',
    'solar project handover checklist',
    'energy system inspection checklist',
    'grid connection checklist',
    'battery installation checklist',
    'rooftop solar checklist',
    'commercial installation checklist',
    'clean energy installation form',
    'solar EPC checklist',
    'hybrid power installation checklist',
    'AeroSun Energy project readiness',
    'solar power installation',
    'solar system installation',
    'solar panel installation',
    'solar panels for home use',
    'solar pv system',
  ],
  alternates: {
    canonical: '/auth/dashboard/installation-checklist',
  },
  openGraph: {
    title: 'Review your installation checklist | AeroSun Energy Private Limited',
    description: 'Secure installation checklist for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/installation-checklist',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function InstallationChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
