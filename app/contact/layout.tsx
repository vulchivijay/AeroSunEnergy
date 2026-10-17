import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact AeroSun Energy',
  description:
    'Contact AeroSun Energy for solar, wind, and hybrid energy consultations, project inquiries, and custom renewable energy solutions in India.',
  keywords: [
    'contact AeroSun Energy',
    'renewable energy consultation',
    'solar energy inquiry',
    'wind energy contact',
    'hybrid energy consultation India',
    'AeroSun Energy contact number',
    'solar project consultation',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact AeroSun Energy',
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
