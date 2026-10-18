import type { Metadata } from 'next'
import ResearchDevelopmentPage from '@/app/components/pages/ResearchDevelopmentPage'

export const metadata: Metadata = {
  title: 'Research & Development',
  description:
    'AeroSun Energy research and development programs for renewable energy innovation, testing, and product optimization.',
}

export default function Page() {
  return <ResearchDevelopmentPage />
}
