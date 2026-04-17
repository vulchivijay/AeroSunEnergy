import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import HowItWorks from '@/app/components/HowItWorks'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'How It Works – Solar Wind Hybrid Installation Process',
  description:
    'From site assessment to 24/7 power generation – discover the five-step process AeroSun Energy uses to turn any location into a clean energy source with our solar wind hybrid system.',
  alternates: { canonical: '/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <HowItWorks />
      </div>
      <Footer />
    </main>
  )
}
