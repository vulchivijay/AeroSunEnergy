import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Why Choose AeroSun Energy',
  description:
    'AeroSun Energy offers certified expert teams, innovative smart systems, fully scalable solutions, and reliable 24/7 support for hybrid solar wind energy installations across India.',
  alternates: { canonical: '/why-us' },
}

export default function WhyUsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <WhyChooseUs />
      </div>
      <Footer />
    </main>
  )
}
