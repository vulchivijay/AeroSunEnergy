import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Billing & Project Documents | AeroSun Energy',
  description:
    'Access AeroSun Energy billing, customer, installation, warranty, and project resources.',
  keywords: [
    'AeroSun Energy billing',
    'solar project documents',
    'renewable energy customer resources',
    'solar installation documents',
    'AeroSun Energy project resources',
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function BillingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
