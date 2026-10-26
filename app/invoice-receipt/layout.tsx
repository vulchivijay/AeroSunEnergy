import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invoice & Receipt | AeroSun Energy',
  description:
    'Record and confirm invoice details, payment status, and receipt information for AeroSun Energy renewable energy projects, solar installations, and service transactions.',
  keywords: [
    'invoice receipt AeroSun Energy',
    'solar invoice template',
    'renewable energy invoice',
    'AeroSun Energy payment receipt',
    'project invoice confirmation',
    'solar installation invoice',
    'wind energy invoice',
    'hybrid energy invoice',
    'solar payment receipt',
    'clean energy billing',
    'renewable energy billing',
    'commercial solar payment receipt',
    'residential solar invoice',
    'project payment confirmation',
    'AeroSun Energy receipt format',
    'purchase and receipt document',
    'energy service invoice',
    'solar EPC billing',
    'corporate solar invoice',
    'renewable energy receipt',
    'solar payment document',
    'wind turbine invoice',
    'AeroSun Energy transaction receipt',
  ],
  alternates: {
    canonical: '/invoice-receipt',
  },
  openGraph: {
    title: 'Invoice & Receipt | AeroSun Energy',
    description:
      'AeroSun Energy invoice and payment receipt documentation for solar and renewable energy project transactions.',
    url: 'https://aerosunenergy.in/invoice-receipt',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InvoiceReceiptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
