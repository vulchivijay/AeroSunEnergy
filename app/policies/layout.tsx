import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Review our privacy, cookie, and website policies',
  description:
    'Read our privacy, cookie, and website policies to learn how AeroSun Energy handles personal information, analytics, enquiries, and customer data.',
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
    'green energy company privacy',
    'renewable power privacy policy',
    'AeroSun Energy website policy',
    'solar energy company',
    'solar service',
    'solar installation',
  ],
  alternates: {
    canonical: '/policies',
  },
  openGraph: {
    title: 'Review our privacy, cookie, and website policies | AeroSun Energy Private Limited',
    description:
      'Read our privacy, cookie, and website policies to learn how AeroSun Energy handles personal information, analytics, enquiries, and customer data.',
    url: 'https://aerosunenergy.in/policies',
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
