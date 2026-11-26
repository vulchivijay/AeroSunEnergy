import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

export const metadata: Metadata = {
  title: 'Sign in to access your customer dashboard and project information',
  description: 'Sign in to your AeroSun Energy account to access your customer dashboard and project information.',
  keywords: [
    'AeroSun Energy sign in',
    'AeroSun customer account',
    'solar project dashboard access',
    'login to AeroSun account',
    'AeroSun Energy portal login',
    'customer sign in',
    'solar customer portal',
    'wind energy customer account',
    'hybrid energy customer portal',
    'project status access',
    'solar installation account login',
    'AeroSun dashboard sign in',
    'renewable project account access',
    'AeroSun client login',
    'customer project resources',
    'solar panels for homes',
    'solar for homeowners',
  ],
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AuthPage() {
  return (
    <>
      <TrustRibbon />
      <AuthForm mode="login" />
    </>
  )
}
