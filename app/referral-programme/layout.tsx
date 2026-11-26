import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refer a friend for solar and earn referral rewards',
  description:
    'Refer a friend for solar with AeroSun Energy. Learn how to submit a referral, receive a reference code, and review the current incentive terms.',
  keywords: [
    'AeroSun Energy referral programme',
    'solar referral programme',
    'solar referral incentive India',
    'refer a friend for solar',
    'solar referral bonus India',
    'renewable energy referral',
    'AeroSun solar customer referrals',
    'solar installation referral rewards',
    'refer a neighbour for rooftop solar',
    'renewable energy referral programme India',
    'solar referral terms and conditions',
    'AeroSun referral submission',
    'solar customer recommendation',
    'AeroSun referral code',
    'solar incentive programme',
  ],
  alternates: {
    canonical: '/referral-programme',
  },
  openGraph: {
    title: 'Refer a friend for solar and earn referral rewards | AeroSun Energy Private Limited',
    description:
      'Refer a friend for solar with AeroSun Energy. Learn how to submit a referral, receive a reference code, and review the current incentive terms.',
    url: 'https://aerosunenergy.in/referral-programme',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ReferralProgrammeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
