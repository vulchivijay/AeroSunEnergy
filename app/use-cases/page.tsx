import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import UseCases from '@/app/components/UseCases'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Use Cases – Where We Install Hybrid Solar Wind Systems',
  description:
    'AeroSun Energy installs hybrid solar wind systems on highways, public parks, residential rooftops, and commercial open land. Discover the right solution for your site across India.',
  alternates: { canonical: '/use-cases' },
}

export default function UseCasesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <UseCases />
      </div>
      <Footer />
    </main>
  )
}
