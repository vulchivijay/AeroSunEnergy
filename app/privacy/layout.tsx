import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AeroSun Energy',
  description:
    'Review the AeroSun Energy Privacy Policy covering personal data collection, cookies, website analytics, user rights, and data protection practices.',
  keywords: [
    'AeroSun Energy privacy policy',
    'renewable energy privacy policy',
    'website cookies policy',
    'data protection policy India',
    'personal information handling',
    'AeroSun Energy legal privacy',
    'website privacy policy',
    'customer data protection',
    'cookie usage policy',
    'online privacy compliance',
    'renewable energy website privacy',
    'data collection policy',
    'user information rights',
    'solar company privacy terms',
    'clean energy privacy policy',
    'personal data security',
    'website analytics privacy',
    'AeroSun Energy data protection',
    'solar project inquiry privacy',
    'consumer data handling policy',
  ],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | AeroSun Energy',
    description:
      'Understand how AeroSun Energy handles personal information, cookies, and user data protection on this website.',
    url: 'https://aerosunenergy.in/privacy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
