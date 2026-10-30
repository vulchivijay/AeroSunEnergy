import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Purchase Order for Solar, Wind & Renewable Energy Equipment | AeroSun Energy',
  description:
    'Create and confirm purchase orders for solar, wind, and hybrid energy equipment with AeroSun Energy procurement terms and project ordering requirements.',
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
  ],
  alternates: {
    canonical: '/purchase-order',
  },
  openGraph: {
    title: 'Purchase Order for Solar, Wind & Renewable Energy Equipment | AeroSun Energy',
    description:
      'AeroSun Energy purchase order workflow for renewable energy equipment and project procurement requirements.',
    url: 'https://aerosunenergy.in/purchase-order',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PurchaseOrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
