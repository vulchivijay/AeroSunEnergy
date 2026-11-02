import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Strategy and Growth Roadmap | AeroSun Energy',
  description:
    'AeroSun Energy business strategy guide covering capital discipline, cash flow, supplier strategy, customer segmentation, risk management, and a 90-day execution roadmap.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResearchDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
