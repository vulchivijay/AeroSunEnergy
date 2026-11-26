import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Programme | Share Solar & Earn Referral Incentives | AeroSun Energy',
  description:
    'Refer a neighbour or friend to AeroSun Energy for solar. Submit their details with permission, receive a reference code, and learn about the referral incentive terms.',
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
    title: 'Referral Programme | AeroSun Energy',
    description:
      'Share solar with a neighbour or friend and submit a referral to AeroSun Energy.',
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
