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
        <div
          className="h-full flex-1 flex flex-col items-start justify-center p-12 text-white"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(16,185,129,0.7), rgba(13,148,136,0.7)), url('/images/slider-1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-xl rounded-2xl bg-black/20 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold">Resilient Hybrid Kits</h2>
            <p className="mt-4 max-w-2xl">Designed to minimize dead time between solar and wind generation with optional battery storage.</p>
          </div>
        </div>

        <div
          className="h-full flex-1 flex flex-col items-start justify-center p-12 text-white"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(109,40,217,0.7), rgba(79,70,229,0.7)), url('/images/slider-2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-xl rounded-2xl bg-black/20 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold">Microgrid & Community Systems</h2>
            <p className="mt-4 max-w-2xl">Shared installations for villages, campuses, and public infrastructure with islanding capability.</p>
          </div>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Hybrid deployment benefits</h3>
        <p className="mt-4 text-slate-700 max-w-3xl">Combining solar and wind increases reliability and utilization, reduces intermittency, and allows smaller battery banks to provide the same resilience.</p>
      </section>
    </main>
  )
}
