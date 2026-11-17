import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your AeroSun Energy account to view your dashboard and project resources.',
  keywords: [
    'AeroSun Energy login',
    'AeroSun customer account login',
    'renewable energy project dashboard',
    'AeroSun portal sign in',
    'solar customer login',
    'wind project account login',
    'hybrid energy account login',
    'AeroSun dashboard access',
    'customer project status',
    'solar installation account access',
    'renewable energy client portal',
    'AeroSun account access',
    'customer login for solar projects',
    'wind energy customer portal',
    'AeroSun project resources',
  ],
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function LoginPage() {
  return <AuthForm mode="login" />
}
