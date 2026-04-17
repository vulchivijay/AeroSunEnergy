import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import About from '@/app/components/About'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'About Our Hybrid Solar + Wind System',
  description:
    'Learn how AeroSun Energy combines photovoltaic solar panels and compact wind turbines into one integrated, intelligent power unit for 24/7 clean energy generation across India.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  )
}
