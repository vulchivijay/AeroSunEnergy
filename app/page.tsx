import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Benefits from '@/components/Benefits'
import Services from '@/components/Services'
import WindGenerators from '@/components/WindGenerators'
import WhyChooseUs from '@/components/WhyChooseUs'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <UseCases />
      <Benefits />
      <Services />
      <WindGenerators />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
