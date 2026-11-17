import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Development | Solar, Wind & Hybrid Energy | AeroSun Energy',
  description:
    'Explore AeroSun Energy research and development concepts for solar, small wind and hybrid systems, with prototype specifications, testing guidance and practical development roadmaps.',
  keywords: [
    'solar energy research and development',
    'small wind energy research',
    'hybrid renewable energy prototypes',
    'solar system testing and development',
    'AeroSun Energy research',
    'renewable energy technology research',
    'solar panel performance testing',
    'small wind turbine development',
    'hybrid energy system design',
    'solar prototype specifications',
    'renewable energy engineering projects',
    'solar and wind testing methods',
    'distributed energy innovation',
    'AeroSun renewable technology',
    'clean energy research projects',
  ],
  alternates: {
    canonical: '/auth/dashboard/billing/research-development',
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
