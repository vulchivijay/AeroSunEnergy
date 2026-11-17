import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | AeroSun Energy',
  description:
    'Read the cancellation and refund policy for rooftop solar photovoltaic system supply, installation, and commissioning by AeroSun Energy Private Limited.',
  keywords: [
    'AeroSun Energy cancellation policy',
    'AeroSun Energy refund policy',
    'solar system cancellation',
    'rooftop solar refund terms',
    'solar project refund process',
  ],
  alternates: {
    canonical: '/cancellation-refund',
  },
  openGraph: {
    title: 'Cancellation and Refund Policy | AeroSun Energy',
    description:
      'Review cancellation eligibility, refund timelines, and the refund process for AeroSun Energy solar projects.',
    url: 'https://aerosunenergy.in/cancellation-refund',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CancellationRefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
