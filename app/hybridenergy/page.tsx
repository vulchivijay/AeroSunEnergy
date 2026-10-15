import { Slider } from '../components/ui'

export const metadata = {
  title: 'Hybrid Solar & Wind — AeroSun Energy',
  description: 'Integrated solar PV and wind turbine systems for resilient, round-the-clock power with optional storage and microgrid capability.',
  openGraph: {
    title: 'Hybrid Solar & Wind — AeroSun Energy',
    description: 'Integrated solar PV and wind turbine systems for resilient, round-the-clock power with optional storage and microgrid capability.',
    url: 'https://aerosunenergy.in/hybridenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
}

export default function HybridEnergyPage() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-4xl font-bold">Hybrid Solar & Wind</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">Integrated systems that combine solar PV and wind turbines for reliable, around-the-clock generation.</p>
      </header>

      <Slider autoplay interval={4800} pauseOnHover>
        <div className="h-full flex-1 bg-gradient-to-r from-green-500 to-teal-500 flex flex-col items-start justify-center p-12 text-white">
          <h2 className="text-3xl font-semibold">Resilient Hybrid Kits</h2>
          <p className="mt-4 max-w-2xl">Designed to minimize dead time between solar and wind generation with optional battery storage.</p>
        </div>

        <div className="h-full flex-1 bg-gradient-to-r from-violet-600 to-indigo-700 flex flex-col items-start justify-center p-12 text-white">
          <h2 className="text-3xl font-semibold">Microgrid & Community Systems</h2>
          <p className="mt-4 max-w-2xl">Shared installations for villages, campuses, and public infrastructure with islanding capability.</p>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Hybrid deployment benefits</h3>
        <p className="mt-4 text-slate-700 max-w-3xl">Combining solar and wind increases reliability and utilization, reduces intermittency, and allows smaller battery banks to provide the same resilience.</p>
      </section>
    </main>
  )
}
