import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invoice & Receipt',
  description: 'Secure invoice and receipt workspace for authorized AeroSun Energy users.',
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
    canonical: '/auth/dashboard/invoice-receipt',
  },
  openGraph: {
    title: 'Invoice & Receipt | AeroSun Energy Dashboard',
    description: 'Secure invoice and receipt workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/invoice-receipt',
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

export default function InvoiceReceiptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
