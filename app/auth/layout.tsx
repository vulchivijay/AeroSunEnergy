import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account | AeroSun Energy',
  description: 'Sign in, create an account, or access your AeroSun Energy dashboard.',
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
