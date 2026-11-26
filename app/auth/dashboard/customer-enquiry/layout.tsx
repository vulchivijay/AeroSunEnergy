import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manage customer enquiries',
  description: 'Secure customer enquiry workspace for authorized AeroSun Energy users.',
  keywords: [
    'customer enquiry AeroSun Energy',
    'solar energy enquiry',
    'wind energy enquiry',
    'hybrid energy enquiry',
    'renewable energy consultation',
    'AeroSun Energy enquiry form',
    'solar project enquiry',
    'solar quote request',
    'wind turbine enquiry',
    'hybrid power consultation',
    'clean energy enquiry',
    'commercial solar enquiry',
    'residential solar enquiry',
    'energy requirements assessment',
    'solar installation enquiry',
    'battery backup enquiry',
    'off-grid solar inquiry',
    'rooftop solar enquiry',
    'green energy consultation',
    'AeroSun Energy contact enquiry',
    'renewable energy project enquiry',
    'solar and wind project discussion',
    'hybrid system inquiry',
    'commercial renewable energy enquiry',
    'renewable power solution enquiry',
    'solar panel quote',
    'solar power quotes',
    'get solar panels for home',
    'solar for home',
    'commercial solar',
  ],
  alternates: {
    canonical: '/auth/dashboard/customer-enquiry',
  },
  openGraph: {
    title: 'Manage customer enquiries | AeroSun Energy Private Limited',
    description: 'Secure customer enquiry workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/customer-enquiry',
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

export default function CustomerEnquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
