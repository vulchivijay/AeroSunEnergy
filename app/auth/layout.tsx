import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account | AeroSun Energy',
  description: 'Sign in, create an account, or access your AeroSun Energy dashboard.',
  keywords: [
    'AeroSun Energy account',
    'AeroSun Energy sign in',
    'AeroSun Energy registration',
    'AeroSun customer dashboard',
    'AeroSun customer login',
    'AeroSun account dashboard',
    'solar customer account',
    'renewable energy account access',
    'AeroSun registration portal',
    'customer project documents',
    'AeroSun Energy portal',
    'customer service account',
    'solar installation account',
    'wind energy customer portal',
    'hybrid energy project account',
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
