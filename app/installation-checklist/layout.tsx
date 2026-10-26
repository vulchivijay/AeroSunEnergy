import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Installation Checklist | AeroSun Energy',
  description:
    'Use the AeroSun Energy installation and commissioning checklist to confirm site readiness, safety compliance, commissioning checks, and renewable energy project execution.',
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
  ],
  alternates: {
    canonical: '/installation-checklist',
  },
  openGraph: {
    title: 'Installation Checklist | AeroSun Energy',
    description:
      'Prepare and track safe, accurate installation and commissioning checks for solar and renewable energy projects.',
    url: 'https://aerosunenergy.in/installation-checklist',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InstallationChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
