import Logo from '@/app/components/logo'

// import Hero from '@/app/components/Hero'
// import About from '@/app/components/About'
// import HowItWorks from '@/app/components/HowItWorks'
// import Features from '@/app/components/Features'
// import SavoniusRotor from '@/app/components/SavoniusRotor'
// import UseCases from '@/app/components/UseCases'
// import Benefits from '@/app/components/Benefits'
// import Services from '@/app/components/Services'
// import WindGenerators from '@/app/components/WindGenerators'
// import WhyChooseUs from '@/app/components/WhyChooseUs'
// import CTASection from '@/app/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-800">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row items-center md:justify-between gap-2 border-b border-stone-200 py-3">
          <div className="min-w-0 flex-1">
            <Logo />
          </div>
          <span className="md:shrink-0 text-md font-medium uppercase tracking-[0.24em] text-stone-500">
            Coming soon
          </span>
        </header>

        <section className="flex flex-1 items-center justify-center py-10 sm:py-14 lg:py-16">
          <div className="w-full max-w-3xl text-center">
            <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.34em] text-emerald-700 sm:mb-5">
              AeroSun Energy
            </p>

            <h1 className="text-[2.3rem] font-light leading-[0.92] tracking-[-0.08em] text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Clean energy
              <span className="mt-2 block text-stone-600">for a quieter future.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-stone-600 sm:mt-6 sm:text-base sm:leading-7 lg:max-w-2xl lg:text-lg">
              We are building a smarter energy future with efficient hybrid solar and wind
              solutions for homes, roads, and communities.
            </p>
          </div>
        </section>

        <footer className="border-t border-stone-200 py-5 text-center text-[10px] uppercase tracking-[0.24em] text-stone-800 sm:text-[12px]">
          Sustainable power • thoughtful design • next chapter
        </footer>
      </div>
    </main>
  )
}
