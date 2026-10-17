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

  return (
    <section id="about" className="px-4 sm:px-2 lg:p-12 bg-white dark:bg-gray-950 overflow-hidden">      
      {/* About Section */}
      <div className="mx-auto max-w-7xl">
        <Card className="relative overflow-hidden rounded-4xl border border-slate-200/80 bg-white/85 shadow-[0_30px_80px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_32%)]" />
          <CardContent className="relative space-y-8 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-baseline justify-start gap-1">
                <span className={`text-xl font-bold text-[#333333] tracking-wider drop-shadow-xl`}>About </span>
                <span className={`text-3xl font-bold text-[#20A44A] tracking-wider drop-shadow-xl`}>AeroSun </span>
                <span className={`text-3xl font-bold text-[#F59E0B] tracking-wider drop-shadow-xl`}>Energy</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-blue-700">Solar</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700">Wind</span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-amber-700">Hybrid</span>
              </div>
            </div>

            <motion.div
              className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-6 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.35),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.22),transparent_30%)]" />
                <div className="relative space-y-5">
                  <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-200">
                    Clean Energy Partner
                  </span>
                  <h3 className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Powering a sustainable future with purpose.
                  </h3>
                  <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                    {a.paragraph1}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100">Residential</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100">Commercial</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-100">Industrial</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(16,185,129,0.25),transparent_55%)] blur-3xl" />
                <div className="relative w-full max-w-md overflow-hidden rounded-4xl border border-emerald-200 bg-white p-4 shadow-[0_25px_60px_-20px_rgba(5,150,105,0.28)]">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-100">
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
              <div className="rounded-3xl border border-slate-200 bg-blue-50 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-700">Innovation</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Smart energy systems</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-emerald-50 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">Sustainability</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Lower emissions</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-amber-50 p-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Reliability</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Future-ready setups</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5 rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-inner shadow-slate-200/70">
                <h3 className="text-2xl font-bold text-slate-900">Our vision and commitment</h3>
                <p className="text-lg leading-8 text-slate-700">
                  At <strong className="text-slate-900">AeroSun Energy Private Limited</strong>, we are committed to delivering innovative,
                  reliable, and sustainable renewable energy solutions tailored to the needs of homes, businesses, and industries.
                  Our focus is on harnessing the power of nature through solar energy, wind energy, and hybrid renewable energy systems to
                  support a cleaner and more energy-efficient future.
                </p>
                <p className="text-lg leading-8 text-slate-700">
                  AeroSun Energy Private Limited was established with a vision to contribute to a greener future by making renewable energy
                  solutions more accessible, efficient, and dependable. We aim to support the transition towards clean energy through modern
                  technologies, innovative thinking, and customer-focused solutions.
                </p>
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-base font-medium italic text-emerald-900">
                  “{a.quote}”
                </p>
              </div>

              <div className="space-y-4 rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)]">
                <div className="rounded-3xl bg-linear-to-br from-sky-50 via-white to-emerald-50 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">Solutions</p>
                  <h4 className="mt-2 text-xl font-bold text-slate-900">Renewable energy for every need</h4>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    We support customers, architects, builders, and project developers in identifying suitable renewable energy systems for new
                    projects as well as existing buildings and facilities.
                  </p>
                </div>

                <div className="rounded-3xl bg-linear-to-br from-emerald-50 via-white to-amber-50 p-5">
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

            <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.9)]">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">Technology focus</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">Solar, wind, and hybrid energy systems</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Depending on project requirements, systems may be designed for grid-connected or off-grid applications, subject to technical
                    feasibility and applicable approvals.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="grid w-full max-w-xs gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-200">Solar</p>
                      <p className="mt-2 text-sm text-slate-100">Photovoltaic generation</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">Wind</p>
                      <p className="mt-2 text-sm text-slate-100">Turbines and generators</p>
                    </div>
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200">Hybrid</p>
                      <p className="mt-2 text-sm text-slate-100">Integrated renewable design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.25)]">
              <h3 className="text-2xl font-bold text-slate-900">Building a cleaner and more energy-efficient future</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                We believe renewable energy is an important part of creating a sustainable future. By promoting innovative energy technologies and
                practical renewable energy solutions, AeroSun Energy Private Limited aims to help customers manage energy costs, reduce their
                environmental impact, and move towards greater energy independence.
              </p>
              <div className="mt-5 inline-flex rounded-full bg-linear-to-r from-emerald-600 to-green-500 px-5 py-3 shadow-lg shadow-emerald-200/60">
                <span className="text-base font-semibold text-white">AeroSun Energy Private Limited — Harnessing Nature. Empowering Tomorrow.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-semibold dark:text-gray-100 my-12">{a.coreValuesHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.coreValues.map((value, i) => (
              <Card key={value.title} className={coreValueStyles[i]}>
                <CardContent className="space-y-2">
                  <h4 className="text-xl font-semibold uppercase text-gray-900 dark:text-gray-100">{value.title}</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden mx-auto max-w-7xl pt-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-secondary uppercase tracking-widest text-lg text-gray-900 dark:text-gray-100">{a.techBadge}</span>
          <h2 className="mt-2 text-3xl sm:text-4xl text-gray-900 dark:text-gray-100">
            {a.techHeading}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-md bg-linear-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 rounded-[2.25rem] md:border md:border-white/60 md:bg-white/75 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="rounded-md shadow-md px-6 lg:px-8 py-8 text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-semibold uppercase tracking-[0.32em]">{a.techIntegratedBadge}</p>
            <h3 className="mt-4 max-w-lg text-2xl leading-tight sm:text-3xl">
              {a.techSubheading}
            </h3>
            <p className="mt-6 text-lg leading-relaxed mb-6">
              {a.techPara1}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {a.techPara2}
            </p>
            <p className="text-lg leading-relaxed">
              {a.techPara3}
            </p>

            <div className="mt-8 grid gap-4">
              {a.techPoints.map((point, i) => (
                <div key={i} className="rounded-md shadow-2xl border border-white/24 bg-white/24 p-4 backdrop-blur-md">
                  <p className="text-3xl font-bold">0{i + 1}</p>
                  <p className="mt-2 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div className="relative min-h-96 md:aspect-4/3 overflow-hidden rounded-md bg-gray-100 shadow-md ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-100">
              <OptimizedImage
                src="/images/hybrid-solar-wind -energy.png"
                alt="Smart VAWT hybrid technology deployment by AeroSun Energy"
                fill
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                {a.techImageBadge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-green-500/25 backdrop-blur-sm">
                <p className="text-lg text-white">
                  {a.techImageCaption}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={`flex flex-col items-center rounded-md border p-6 text-center shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg ${f.cardBg}`}
                >
                  <div className={`mb-4 rounded-md p-3 shadow-sm ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
                  <p className="text-lg text-gray-500 dark:text-gray-100">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}