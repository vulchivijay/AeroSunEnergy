import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import HowItWorks from '@/app/components/HowItWorks'
import Features from '@/app/components/Features'
import UseCases from '@/app/components/UseCases'
import Benefits from '@/app/components/Benefits'
import Services from '@/app/components/Services'
import WindGenerators from '@/app/components/WindGenerators'
import Gallery from '@/app/components/Gallery'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import CTASection from '@/app/components/CTASection'
import Footer from '@/app/components/Footer'

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
      <Gallery />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
