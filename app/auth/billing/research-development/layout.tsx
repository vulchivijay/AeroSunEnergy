import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Development | Solar, Wind & Hybrid Energy | AeroSun Energy',
  description:
    'Explore AeroSun Energy research and development concepts for solar, small wind and hybrid systems, with prototype specifications, testing guidance and practical development roadmaps.',
  alternates: {
    canonical: '/auth/billing/research-development',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ResearchDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
