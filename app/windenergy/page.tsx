import { Slider } from '../components/ui'

export const metadata = {
  title: 'Wind Energy Solutions — AeroSun Energy',
  description: 'Vertical-axis turbines and commercial wind solutions designed for low-wind and urban environments across India.',
  openGraph: {
    title: 'Wind Energy Solutions — AeroSun Energy',
    description: 'Vertical-axis turbines and commercial wind solutions designed for low-wind and urban environments across India.',
    url: 'https://aerosunenergy.in/windenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
}

export default function WindEnergyPage() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-4xl font-bold">Wind Energy Solutions</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">Compact and efficient wind turbines for low-wind and urban environments, designed to complement solar generation.</p>
      </header>

      <Slider autoplay interval={5200} pauseOnHover>
        <div className="h-full flex-1 bg-gradient-to-r from-sky-500 to-indigo-600 flex flex-col items-start justify-center p-12 text-white">
          <h2 className="text-3xl font-semibold">Rooftop VAWTs</h2>
          <p className="mt-4 max-w-2xl">Vertical-axis turbines built for noise-sensitive and space-constrained urban rooftops.</p>
        </div>

        <div className="h-full flex-1 bg-gradient-to-r from-teal-500 to-emerald-600 flex flex-col items-start justify-center p-12 text-white">
          <h2 className="text-3xl font-semibold">Open Land & Commercial Turbines</h2>
          <p className="mt-4 max-w-2xl">Higher-capacity turbines and hybrid-ready solutions for farms, warehouses, and industrial sites.</p>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Low-wind performance</h3>
        <p className="mt-4 text-slate-700 max-w-3xl">Our turbines are engineered to self-start at low wind speeds, offering reliable supplementary generation to solar PV in the evenings and early mornings.</p>
      </section>
    </main>
  )
}
