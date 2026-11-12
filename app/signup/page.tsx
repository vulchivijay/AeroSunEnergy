import type { Metadata } from 'next'
import AuthForm from '@/app/components/auth/AuthForm'

export const metadata: Metadata = {
  title: 'Create account',
  robots: { index: false, follow: false },
}

export default function SignupPage() {
  return <AuthForm mode="signup" />
}
