'use client'

import { motion } from '@/lib/motion'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

const featureIcons = [
  (
    <svg key="speed" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800 dark:text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 9H5l1 9 13-13h-6l2-5H5z" />
    </svg>
  ),
  (
    <svg key="savings" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-800 dark:text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="trust" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800 dark:text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
]

const featureStyles = [
  { cardBg: 'bg-blue-100/90 dark:bg-blue-900/55 border-blue-300 dark:border-blue-700 hover:border-blue-500', iconBg: 'bg-blue-300 dark:bg-blue-800' },
  { cardBg: 'bg-emerald-100/90 dark:bg-emerald-900/55 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500', iconBg: 'bg-emerald-300 dark:bg-emerald-800' },
  { cardBg: 'bg-amber-100/90 dark:bg-amber-900/55 border-amber-300 dark:border-amber-700 hover:border-amber-500', iconBg: 'bg-amber-300 dark:bg-amber-800' },
]

const coreValueStyles = [
  'bg-blue-50 dark:bg-blue-900/20',
  'bg-green-50 dark:bg-green-900/20',
  'bg-yellow-50 dark:bg-yellow-900/20',
  'bg-purple-50 dark:bg-purple-900/20',
  'bg-pink-50 dark:bg-pink-900/20',
]

export default function About() {
  const { t } = useLocale()
  const a = t.about

  const features = a.features.map((f, i) => ({
    ...f,
    icon: featureIcons[i],
    ...featureStyles[i],
  }))

  const statCards = [
    {
      title: 'Innovation',
      value: 'Smart energy systems',
      tone: 'bg-blue-50 border-blue-200 text-blue-700',
    },
    {
      title: 'Sustainability',
      value: 'Lower emissions',
      tone: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    },
    {
      title: 'Reliability',
      value: 'Future-ready setups',
      tone: 'bg-amber-50 border-amber-200 text-amber-700',
    },
  ]

  const systemCards = [
    {
      label: 'Solar',
      value: 'Photovoltaic generation',
      tone: 'border-blue-400/20 bg-blue-500/10 text-blue-100',
    },
    {
      label: 'Wind',
      value: 'Turbines and generators',
      tone: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-100',
    },
    {
      label: 'Hybrid',
      value: 'Integrated renewable design',
      tone: 'border-amber-400/20 bg-amber-500/10 text-amber-100',
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f9f5] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Card className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_32px_80px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
          <CardContent className="relative space-y-8 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-baseline justify-start gap-1">
                <span className="text-xl font-bold tracking-[0.08em] text-[#333333]">ABOUT</span>
                <span className="text-3xl font-black tracking-[-0.05em] text-[#20A44A]">AeroSun</span>
                <span className="text-3xl font-black tracking-[-0.05em] text-[#F59E0B]">Energy</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-blue-700">Solar</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700">Wind</span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-amber-700">Hybrid</span>
              </div>
            </div>

            <motion.div
              className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_30px_70px_-30px_rgba(15,23,42,0.95)] sm:p-6 lg:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
                    Clean Energy Partner
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                    Since 2020
                  </span>
                </div>

                <h3 className="mt-5 max-w-lg text-3xl font-black leading-tight tracking-[-0.06em] text-white sm:text-4xl lg:text-[3rem]">
                  Powering a sustainable future with purpose.
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  {a.paragraph1}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {['Residential', 'Commercial', 'Industrial', 'Institutional'].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_58%)] blur-3xl" />
                <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-emerald-200 bg-white p-3 shadow-[0_28px_65px_-28px_rgba(5,150,105,0.28)]">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-200/60 via-transparent to-blue-200/40" />
                    <div className="relative h-80 w-full">
                      <OptimizedImage
                        src="/images/founder-aerosunenergy.png"
                        alt="Founder of AeroSun Energy"
                        fill
                        sizes="(min-width: 400px) 400px, 100vw"
                        className="bg-white"
                        loading="eager"
                      />
                    </div>
                    <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-700 backdrop-blur-sm">
                      Founder Vision
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-2xl border border-emerald-200 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-sm">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Leadership</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{a.founder.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {statCards.map((item) => (
                <div key={item.title} className={`rounded-[1.5rem] border p-4 shadow-sm ${item.tone}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em]">{item.title}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_35%,#f0fdf4_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.3)] sm:p-6">
                <h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Our vision and commitment</h3>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    At <strong className="text-slate-900">AeroSun Energy Private Limited</strong>, we are committed to delivering innovative,
                    reliable, and sustainable renewable energy solutions tailored to the needs of homes, businesses, and industries.
                  </p>
                  <p>
                    AeroSun Energy Private Limited was established with a vision to contribute to a greener future by making renewable energy
                    solutions more accessible, efficient, and dependable.
                  </p>
                </div>
                <p className="mt-5 rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-base font-medium italic text-emerald-900">
                  “{a.quote}”
                </p>
              </div>

              <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.30)] sm:p-6">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_60%,#ecfdf5_100%)] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">Solutions</p>
                  <h4 className="mt-2 text-xl font-bold text-slate-900">Renewable energy for every need</h4>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    We support customers, architects, builders, and project developers in identifying suitable renewable energy systems.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_60%,#fff7ed_100%)] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">System design</p>
                  <ul className="mt-3 space-y-2 text-base leading-7 text-slate-700">
                    <li>• Solar PV systems for clean electricity generation</li>
                    <li>• Wind energy solutions for sustainable power</li>
                    <li>• Hybrid configurations for greater resilience</li>
                    <li>• Customized energy solutions for site-specific needs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-5 text-slate-100 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.9)] sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">Technology focus</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white">Solar, wind, and hybrid energy systems</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Depending on project requirements, systems may be designed for grid-connected or off-grid applications, subject to technical feasibility and approvals.
                  </p>
                </div>

                <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  {systemCards.map((item) => (
                    <div key={item.label} className={`rounded-2xl border p-3 ${item.tone}`}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em]">{item.label}</p>
                      <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.25)] sm:p-6">
              <h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900">Building a cleaner and more energy-efficient future</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We believe renewable energy is an important part of creating a sustainable future. By promoting innovative energy technologies and practical renewable energy solutions, AeroSun Energy aims to help customers manage energy costs, reduce environmental impact, and move towards greater energy independence.
              </p>
              <div className="mt-5 inline-flex rounded-full bg-linear-to-r from-emerald-600 to-green-500 px-5 py-3 shadow-lg shadow-emerald-200/60">
                <span className="text-base font-normal text-white">AeroSun Energy Private Limited — Power from Sun and Wind.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}