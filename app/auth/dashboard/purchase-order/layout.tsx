import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage your renewable energy equipment purchase orders',
  description: 'Secure purchase order workspace for authorized AeroSun Energy users.',
  keywords: [
    'purchase order AeroSun Energy',
    'solar equipment purchase order',
    'renewable energy procurement',
    'AeroSun Energy order form',
    'solar project purchase order',
    'wind turbine purchase order',
    'hybrid energy procurement',
    'solar panel order form',
    'energy equipment purchase',
    'renewable project procurement',
    'commercial solar purchase order',
    'residential solar order form',
    'battery procurement order',
    'solar inverter purchase order',
    'clean energy procurement',
    'AeroSun Energy project order',
    'renewable energy supply order',
    'solar EPC order form',
    'wind energy equipment order',
    'solar and wind procurement',
    'project procurement agreement',
    'renewable supply documentation',
    'solar panels',
    'solar panels for business',
    'commercial solar panel',
    'solar technology',
    'solar pv panels',
    'solar panel system',
    'buying solar panels',
  ],
  alternates: {
    canonical: '/auth/dashboard/purchase-order',
  },
  openGraph: {
    title: 'Manage your renewable energy equipment purchase orders | AeroSun Energy Private Limited',
    description: 'Secure purchase order workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/purchase-order',
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

export default function PurchaseOrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
