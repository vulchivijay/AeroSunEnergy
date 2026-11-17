import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Sign in | AeroSun Energy',
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
  ],
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AuthPage() {
  return <AuthForm mode="login" />
}
