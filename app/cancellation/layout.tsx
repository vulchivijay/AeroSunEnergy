import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Review our solar project cancellation and refund policy',
  description:
    'Review solar project cancellation eligibility, refund terms, timelines, non-refundable charges, and how to submit a cancellation request to AeroSun Energy.',
  keywords: [
    'AeroSun Energy cancellation policy',
    'AeroSun Energy refund policy',
    'rooftop solar cancellation terms',
    'solar project refund eligibility',
    'solar installation cancellation',
    'solar order refund process',
    'renewable energy project refunds',
    'solar cancellation refund timelines',
    'solar customer cancellation request',
    'rooftop solar refund conditions',
    'solar project cancellation charges',
    'renewable energy refund timeline',
    'solar order cancellation policy India',
    'DISCOM approval refund policy',
    'solar installation refund eligibility',
    'solar installation',
    'solar system installation',
    'solar panel installation',
    'solar panel system',
  ],
  alternates: {
    canonical: '/cancellation',
  },
  openGraph: {
    title: 'Review our solar project cancellation and refund policy | AeroSun Energy Private Limited',
    description:
      'Review solar project cancellation eligibility, refund terms, timelines, non-refundable charges, and how to submit a cancellation request to AeroSun Energy.',
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
