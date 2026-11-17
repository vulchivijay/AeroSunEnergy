import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Sign in | AeroSun Energy',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function AuthPage() {
  return <AuthForm mode="login" />
}
