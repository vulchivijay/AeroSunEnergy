import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Create an account to access your customer dashboard and project resources',
  description: 'Create an AeroSun Energy account to access your customer dashboard and project resources.',
  keywords: [
    'AeroSun Energy account registration',
    'AeroSun customer signup',
    'renewable energy customer account',
    'register AeroSun Energy account',
    'solar customer account signup',
    'wind energy customer registration',
    'hybrid energy customer signup',
    'AeroSun account creation',
    'renewable project account setup',
    'solar installation customer account',
    'AeroSun client registration',
    'customer portal registration',
    'AeroSun project dashboard account',
    'renewable energy account signup',
    'AeroSun customer portal',
  ],
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function SignupPage() {
  return <AuthForm mode="signup" />
}
