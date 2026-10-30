import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | AeroSun Energy',
  description:
    'Read the AeroSun Energy website terms and conditions covering service scope, user obligations, website usage, intellectual property, liability, and governing law for renewable energy services.',
  keywords: [
    'AeroSun Energy terms and conditions',
    'website terms and conditions',
    'renewable energy company terms',
    'website legal policy',
    'solar energy service terms',
    'AeroSun Energy legal policy',
    'energy service agreement terms',
    'solar project terms',
    'wind energy service terms',
    'hybrid system terms',
    'AeroSun Energy website policy',
    'renewable energy legal terms',
    'clean energy terms and conditions',
    'solar contract policies',
    'energy solution service agreement',
    'project quotation terms',
    'website usage policy',
    'renewable energy company legal policy',
    'solar installation terms',
    'wind turbine service policy',
    'AeroSun Energy compliance policy',
    'website terms of use',
    'solar energy legal conditions',
    'green energy company policy',
  ],
  alternates: {
    canonical: '/terms-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | AeroSun Energy',
    description:
      'Review the legal terms for using the AeroSun Energy website and engaging with our renewable energy services.',
    url: 'https://aerosunenergy.in/terms-conditions',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
