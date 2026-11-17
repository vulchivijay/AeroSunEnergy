import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description:
    'Understand cancellation eligibility, non-refundable charges, refund conditions, timelines, and the process for AeroSun Energy rooftop solar projects.',
  keywords: [
    'AeroSun Energy cancellation policy',
    'AeroSun Energy refund policy',
    'rooftop solar cancellation terms',
    'solar project refund eligibility',
    'solar installation cancellation',
    'solar order refund process',
    'renewable energy project refunds',
    'solar cancellation refund timelines',
  ],
  alternates: {
    canonical: '/cancellation',
  },
  openGraph: {
    title: 'Cancellation & Refund Policy',
    description:
      'Understand cancellation eligibility, non-refundable charges, refund conditions, timelines, and the process for AeroSun Energy rooftop solar projects.',
    url: 'https://aerosunenergy.in/cancellation',
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
