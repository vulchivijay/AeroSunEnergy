import { Slider } from '../components/ui'

export const metadata = {
  title: 'Solar Energy Solutions — AeroSun Energy',
  description: 'Rooftop and ground-mounted solar PV solutions tailored for homes, businesses, and commercial deployments in India.',
  openGraph: {
    title: 'Solar Energy Solutions — AeroSun Energy',
    description: 'Rooftop and ground-mounted solar PV solutions tailored for homes, businesses, and commercial deployments in India.',
    url: 'https://aerosunenergy.in/solarenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
}

export default function SolarEnergyPage() {
  return (
    <main>
      <header className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-4xl font-bold">Solar Energy Solutions</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">Explore rooftop and ground-mounted solar solutions tailored for Indian homes, businesses, and infrastructure.</p>
      </header>

      <Slider autoplay interval={5000} pauseOnHover>
        <div
          className="h-full flex-1 flex flex-col items-start justify-center p-12 text-slate-900"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(251,191,36,0.85), rgba(249,115,22,0.68)), url('/images/slider-1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-xl rounded-2xl bg-white/12 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold text-white">Rooftop Solar</h2>
            <p className="mt-4 max-w-2xl text-white/90">Cost-effective PV installations for homes and small businesses. Ideal for reducing monthly bills and leveraging net-metering.</p>
          </div>
        </div>

        <div
          className="h-full flex-1 flex flex-col items-start justify-center p-12 text-white"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(120,119,198,0.75), rgba(239,68,68,0.75)), url('/images/slider-2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-xl rounded-2xl bg-slate-900/25 p-6 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold">Ground Mount & Commercial</h2>
            <p className="mt-4 max-w-2xl">Large-scale arrays, tracking options, and commercial systems that scale from kW to MW deployments.</p>
          </div>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl font-semibold">Why choose solar?</h3>
        <p className="mt-4 text-slate-700 max-w-3xl">Solar PV is a mature, cost-effective technology for reducing energy bills and decarbonising operations. AeroSun offers tailored designs, government-subsidy guidance, and installation for domestic and commercial customers.</p>
      </section>
    </main>
  )
}
