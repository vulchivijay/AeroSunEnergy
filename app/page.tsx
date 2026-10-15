import {
  Hero,
  HowItWorks,
  Features,
  SavoniusRotor,
  UseCases,
  Benefits,
  WindGenerators,
  Services,
  WhyChooseUs,
  CTASection,
} from '@/app/components/sections'
import { Slider } from './components/ui'

export default function Home() {
  return (
    <main>
        <Slider autoplay interval={4500} pauseOnHover>
          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Grid-tied Rooftop</h2>
            <p className="mt-4 max-w-2xl text-lg">On-grid PV connected to the utility. Pros: lower cost (no batteries), net-metering, simple setup. Cons: no backup power during outages unless paired with storage.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Off-grid (Standalone)</h2>
            <p className="mt-4 max-w-2xl text-lg">Fully independent systems with PV + batteries + charge controller. Pros: complete autonomy for remote sites. Cons: higher upfront cost and careful energy management required.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Hybrid (Grid + Battery)</h2>
            <p className="mt-4 max-w-2xl text-lg">PV plus battery storage with ability to work with the grid. Pros: backup power, time-shifting, demand management. Cons: more complex controls and higher cost than grid-only.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Solar + Storage (DC/AC-coupled)</h2>
            <p className="mt-4 max-w-2xl text-lg">Architectures pairing batteries with PV. DC-coupled suits new installs; AC-coupled is great for retrofits. Choose based on efficiency and retrofit needs.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Commercial / Utility-scale</h2>
            <p className="mt-4 max-w-2xl text-lg">Large ground‑mounted arrays with trackers and centralized inverters. Pros: high output and economies of scale; often paired with large storage for grid services.</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-12 lg:p-24">
            <h2 className="text-4xl font-bold">Community / Microgrid</h2>
            <p className="mt-4 max-w-2xl text-lg">Shared systems serving multiple customers or a local microgrid. Pros: pooled financing, resilience, and islanding capability; usually paired with storage and smart controls.</p>
          </div>
      </Slider>
      <Hero />
      <HowItWorks />
      <Features />
      <SavoniusRotor />
      <UseCases />
      <Benefits />
      <WindGenerators />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}
