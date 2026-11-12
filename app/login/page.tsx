import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <AuthForm mode="login" />
}
