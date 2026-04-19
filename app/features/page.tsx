import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Features from '@/app/components/Features'
import Services from '@/app/components/Services'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Key Features & Benefits of Hybrid Solar Wind Energy',
  description:
    'Explore the key features of AeroSun Energy hybrid solar wind systems – 24/7 power generation, smart IoT monitoring, low maintenance, eco-friendly zero-emission power, and significant cost savings.',
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Features />
        <Services />
      </div>
      <Footer />
    </main>
  )
}
