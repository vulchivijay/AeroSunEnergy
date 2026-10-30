import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Enquiry | AeroSun Energy',
  description:
    'Submit your solar, wind, and hybrid energy enquiry to AeroSun Energy for expert advice, renewable energy consultation, and project-specific quotations in India.',
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
  ],
  alternates: {
    canonical: '/customer-enquiry',
  },
  openGraph: {
    title: 'Customer Enquiry | AeroSun Energy',
    description:
      'Share your renewable energy requirements and request expert advice for solar, wind, and hybrid power solutions.',
    url: 'https://aerosunenergy.in/customer-enquiry',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CustomerEnquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
