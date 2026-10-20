'use client'

import { motion } from '@/lib/motion'
import { OptimizedImage } from '@/app/components/ui'

const companyStats = [
  { label: 'Location', value: 'Tirupati, Andhra Pradesh' },
  { label: 'Focus', value: 'Solar • Wind • Hybrid' },
  { label: 'Service Scope', value: 'Residential to industrial' },
]

const coreValues = [
  {
    title: 'Sustainability',
    description:
      'We support the responsible adoption of renewable energy and seek to reduce dependence on conventional energy sources wherever practical.',
  },
  {
    title: 'Integrity',
    description:
      'We aim to conduct business honestly, communicate transparently and make realistic commitments.',
  },
  {
    title: 'Quality',
    description:
      'We seek to use appropriate equipment, sound engineering practices and systematic quality checks throughout project delivery.',
  },
  {
    title: 'Innovation',
    description:
      'We encourage technologies that improve energy efficiency, reliability and system performance.',
  },
  {
    title: 'Customer Focus',
    description:
      'We aim to understand each customer’s requirements and recommend solutions based on site conditions, budget and energy demand.',
  },
  {
    title: 'Safety & Responsibility',
    description:
      'We prioritise electrical safety, suitable installation practices, equipment protection and compliance with applicable requirements.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We aim to strengthen technical capabilities, service standards and operational processes as the company grows.',
  },
]

const serviceGroups = [
  {
    title: 'Solar Energy Solutions',
    accent: 'from-emerald-500 to-green-600',
    items: [
      'Residential rooftop solar systems',
      'Commercial and industrial solar installations',
      'On-grid and off-grid solar systems',
      'Solar systems with battery storage',
      'Solar water pumping for agriculture',
      'Solar street lighting and selected off-grid applications',
      'Maintenance, monitoring and upgrades',
    ],
  },
  {
    title: 'Wind Energy Solutions',
    accent: 'from-sky-500 to-blue-600',
    items: [
      'Horizontal-axis wind turbines (HAWT)',
      'Vertical-axis wind turbines (VAWT), where suitable',
      'Small wind energy systems',
      'Wind-powered water pumping and battery charging',
      'Wind turbine installation and maintenance',
      'Wind resource assessment and project feasibility',
    ],
  },
  {
    title: 'Hybrid Energy Solutions',
    accent: 'from-violet-500 to-purple-600',
    items: [
      'Solar-wind hybrid systems',
      'Solar-battery storage systems',
      'Wind-battery storage systems',
      'Residential and agricultural hybrid systems',
      'Commercial and industrial hybrid installations',
      'Renewable-energy microgrids',
      'Energy management, monitoring and integration',
    ],
  },
]

const currentGoals = [
  'Establish the business infrastructure and statutory compliance foundations.',
  'Develop a reliable supplier network for panels, inverters, turbines and batteries.',
  'Build technical capabilities with engineers, electrical contractors and installation teams.',
  'Launch initial service offerings in solar, battery and selected renewable projects.',
  'Develop customer relationships through website, quotations and support processes.',
  'Establish quality procedures for site assessment, commissioning and maintenance records.',
  'Evaluate hybrid opportunities where solar and wind can be technically and economically viable.',
]

const futureGoals = [
  {
    title: 'Short-term',
    items: [
      'Establish initial customers and supplier relationships.',
      'Develop residential and agricultural solar services.',
      'Introduce structured maintenance and technical-support offerings.',
      'Build a portfolio of verified installations and customer references.',
    ],
  },
  {
    title: 'Medium-term',
    items: [
      'Expand into commercial and industrial renewable-energy projects.',
      'Develop solar-wind-battery integration capabilities.',
      'Establish partnerships with manufacturers, engineering firms and project developers.',
      'Investigate appropriate certifications and quality-management systems.',
      'Explore energy monitoring and smart energy-management solutions.',
    ],
  },
  {
    title: 'Long-term',
    items: [
      'Expand renewable-energy services across additional Indian markets.',
      'Develop proprietary products if technically and commercially feasible.',
      'Evaluate wind turbine and hybrid-system research and development.',
      'Explore manufacturing opportunities subject to investment, testing and compliance requirements.',
      'Participate in larger renewable-energy projects through qualified teams and strategic partnerships.',
    ],
  },
]

const whyChooseUs = [
  'Integrated renewable-energy options across solar, wind and hybrid systems.',
  'Solutions tailored to energy demand, available space, site conditions and budget.',
  'Practical energy planning with transparent discussion of generation, storage and backup assumptions.',
  'Support beyond installation through commissioning, maintenance and troubleshooting.',
  'Options designed for households, farms, commercial establishments and industrial facilities.',
  'A long-term sustainability focus aligned to operational and environmental goals.',
]

const qualityPoints = [
  'Equipment selection from appropriate manufacturers and suppliers.',
  'Design verification for capacity, generation, compatibility and installation conditions.',
  'Quality installation, testing and commissioning before handover.',
  'Documentation covering warranties, operating instructions and maintenance information.',
  'After-sales support for troubleshooting, maintenance and warranty coordination.',
  'Continuous improvement through performance review and better processes.',
]

const ethicsPoints = [
  'Honesty and transparency in quotations, specifications and commitments.',
  'Fair pricing and realistic performance assumptions.',
  'Safety-first practices with qualified personnel and compliant installation methods.',
  'Legal compliance across corporate, tax, electrical, environmental and consumer obligations.',
  'Responsible sourcing and dependable supplier selection.',
  'Customer privacy and careful handling of project data.',
  'Environmental responsibility across equipment choice, battery handling and lifecycle planning.',
]

const approvalRows = [
  ['Certificate of Incorporation and CIN', 'Establishes the company’s legal identity', 'Done'],
  ['Company PAN', 'Tax identification', 'Done'],
  ['TAN', 'Tax deduction and collection compliance where applicable', 'Done'],
  ['GST registration', 'Required when applicable under GST law', 'Done'],
  ['Udyam/MSME registration', 'MSME recognition if eligible', 'Not yet applied'],
  ['DPIIT Startup Recognition', 'Startup India recognition if eligible', 'In process'],
  ['Trademark registration', 'Protects the company brand and eligible marks', 'In process'],
]

const officialResources = [
  { label: 'MNRE', href: 'https://mnre.gov.in/' },
  { label: 'NREDCAP', href: 'https://nredcap.in/' },
  { label: 'APERC', href: 'https://www.aperc.gov.in/' },
  { label: 'Startup India', href: 'https://www.startupindia.gov.in/' },
  { label: 'Udyam Registration', href: 'https://udyamregistration.gov.in/' },
]

const promisePoints = [
  'To become a trusted renewable-energy solutions provider in India.',
  'To deliver practical, innovative and sustainable solar, wind and hybrid systems.',
  'To empower households, agricultural communities, businesses and industries with informed renewable-energy decisions.',
]

const missionPoints = [
  'Promoting the adoption of solar and wind energy.',
  'Developing integrated solar-wind hybrid solutions where technically suitable.',
  'Helping customers understand their energy requirements and available technologies.',
  'Delivering carefully designed and professionally executed projects.',
  'Providing ongoing maintenance and technical support.',
  'Encouraging energy efficiency and responsible resource utilisation.',
]

const ppsStats = [
  { value: '2026', label: 'Company Founded' },
  { value: '100%', label: 'Startup Focus' },
  { value: 'Solar', label: 'Core Expertise' },
  { value: '100%', label: 'Customer First' },
]

const ppsStrengths = [
  'Startup energy with fresh ideas',
  'Responsive support and quick decisions',
  'Tailored solar planning for each site',
  'Strong focus on service, quality, and trust',
]

const founderProfiles = [
  {
    initials: 'V',
    name: 'Vijaya Kumar',
    role: 'Co-Founder & Director',
    description: 'Leads engineering, system design and large commercial deployments. Hands-on through every site assessment.',
  },
  {
    initials: 'D',
    name: 'Anusha',
    role: 'Director',
    description: 'Drives strategy, partnerships and customer experience. Personally oversees the AMC and service operations.',
  },
]

const ppsReasons = [
  { title: 'Experience', text: 'Industry Experience — Over a decade of pure solar focus. We have seen every roof type and use case.' },
  { title: 'Scale', text: 'Customers Powered — From village homes to gated villas, our installations span every segment.' },
  { title: 'Service', text: 'Local Service — Tirupati-based engineering team. We answer the phone every single time.' },
  { title: 'Trust', text: 'Premium Components — We work with trusted technology and maintain strict quality standards.' },
]

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[30px] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-sky-50 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.35)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
        >
          <div className="grid gap-8 p-6 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-500/10 dark:text-emerald-300">
                Company Profile
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-none tracking-[-0.04em] text-slate-900 sm:text-5xl dark:text-white">
                  AEROSUN ENERGY
                </h1>
                <p className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                  Private Limited
                </p>
                <p className="max-w-xl text-lg text-slate-700 dark:text-slate-300">
                  Solar Energy • Wind Energy • Hybrid Renewable Energy
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-white/80 p-4 shadow-sm dark:border-emerald-900/50 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                  Tagline
                </p>
                <p className="mt-2 text-xl font-medium italic text-slate-800 dark:text-slate-100">
                  “Harnessing Nature. Empowering Tomorrow.”
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                AeroSun Energy Private Limited is an Indian renewable-energy company established with the vision of supporting a cleaner, more sustainable and energy-efficient future. Based in Tirupati, Andhra Pradesh, the company aims to develop renewable-energy solutions for residential, agricultural, commercial and industrial customers.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900/75">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-emerald-200/60 via-sky-100/60 to-violet-200/60 blur-3xl dark:from-emerald-500/10 dark:via-sky-500/10 dark:to-violet-500/10" />
              <div className="relative w-full max-w-md rounded-[28px] border border-white/60 bg-white/80 p-4 shadow-[0_24px_80px_-30px_rgba(16,185,129,0.45)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
                <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <div className="relative h-90 w-full">
                    <OptimizedImage
                      src="/images/founder-aerosunenergy.png"
                      alt="Mr. Vulchi Vijaya Kumar, Founder of AeroSun Energy"
                      fill
                      sizes="(min-width: 1024px) 36vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">Mr. Vulchi Vijaya Kumar</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Founder and Director</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      Visionary
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    Through AeroSun Energy, the company aims to pursue opportunities in solar energy, wind energy and hybrid renewable-energy systems while building a customer-focused organisation grounded in quality, reliability, responsible business practices and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
              About the Founder
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Building a cleaner future with purpose</h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              <p>
                Mr. Vulchi Vijaya Kumar is associated with the establishment of AeroSun Energy Private Limited, a company focused on renewable-energy opportunities and sustainable power solutions.
              </p>
              <p>
                The founder’s vision is to help make renewable-energy solutions more accessible to households, farmers, businesses and industries, while developing a company capable of growing alongside India’s evolving clean-energy sector.
              </p>
              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
                This profile is based on company information shared in conversation. Specific qualifications, professional experience, technical achievements and completed projects have not been independently established, so they are not claimed here.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-linear-to-br from-slate-900 to-slate-800 p-6 text-white shadow-[0_28px_80px_-40px_rgba(15,23,42,0.9)] dark:border-slate-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">Our promise</p>
            <h3 className="mt-3 text-3xl font-bold">Reliable, efficient and environmentally responsible energy choices.</h3>
            <div className="mt-6 space-y-4">
              {promisePoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-600 dark:text-sky-400">Vision & mission</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Purpose-led growth for a resilient energy future</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-sky-200 bg-sky-50 p-6 dark:border-sky-900/50 dark:bg-sky-950/30">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700 dark:text-sky-300">Vision</p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">A cleaner and more energy-resilient future</h3>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              To become a trusted renewable-energy solutions provider in India, delivering practical, innovative and sustainable solar, wind and hybrid energy systems that contribute to a cleaner environment and a more energy-resilient future.
            </p>
          </div>

          <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/30">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-300">Mission</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {missionPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-violet-600 dark:text-violet-400">Core values</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">The principles guiding every decision</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: index * 0.05 }}
              className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-600 dark:text-emerald-400">Products & services</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">A comprehensive renewable-energy portfolio</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <div key={group.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className={`mb-4 h-1.5 rounded-full bg-linear-to-r ${group.accent}`} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-600 dark:text-amber-400">Licences, registrations and approvals</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Responsible growth requires compliance</h2>

            <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-full overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
                  <thead className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Registration or approval</th>
                      <th className="px-4 py-3 font-semibold">Purpose</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900">
                    {approvalRows.map(([name, purpose, status]) => (
                      <tr key={name}>
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{name}</td>
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{purpose}</td>
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-950/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">Quality commitment</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Standards that support trust</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[30px] border border-rose-200 bg-rose-50 p-6 dark:border-rose-900/40 dark:bg-rose-950/20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-rose-700 dark:text-rose-300">Business ethics</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Responsible conduct for lasting relationships</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {ethicsPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-600 dark:text-teal-400">Why choose us</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">A customer-focused and technically responsible approach</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((reason) => (
              <div key={reason} className="rounded-3xl border border-teal-200 bg-teal-50 p-5 text-base leading-7 text-slate-700 dark:border-teal-900/50 dark:bg-teal-950/20 dark:text-slate-300">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600 dark:text-indigo-400">Current & future goals</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Growth built on strong foundations</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Current goals</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              {currentGoals.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5">
            {futureGoals.map((track) => (
              <div key={track.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{track.title} goals</h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {track.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[30px] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-sky-50 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.35)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
        >
          <div className="grid gap-8 p-6 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-500/10 dark:text-emerald-300">
                Pragathi Power Solutions
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 dark:text-white sm:text-4xl">
                Powering Up with the Power of the Sun
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                Founded in 2012 by industry veterans, Pragathi Power Solutions is the most trusted name in solar across the Tirupati & Chittoor districts — and the authorised TATA Power Solar Channel Partner for the region.
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                  Our Story
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
                  Over a decade of pioneering clean energy in the Tirupati & Chittoor Districts. Pragathi Power Solutions (PPS) was founded in 2012 by Mr. K. Chandra Sekhar and Mr. Balaji Kiran Gilledu with a single mission — to put the power of the sun into every home, farm and business in Andhra Pradesh.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                  Headquartered at Ramanujam Circle in Tirupati, we have grown into the most trusted solar partner across the Tirupati & Chittoor districts, with installations spanning residential rooftops, schools, hotels, factories and farmlands. Our designation as Authorised TATA Power Solar Channel Partners means our customers get tier-1 panels and inverters — backed by a name India trusts.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                  More than a decade on, we still answer every call ourselves, run every site survey personally, and stand behind every kilowatt we install.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-5 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                Why PPS
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {ppsStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-emerald-200 bg-white/90 p-4 text-center dark:border-emerald-800 dark:bg-slate-900/80">
                    <div className="text-2xl font-black tracking-tighter text-emerald-700 dark:text-emerald-300">{item.value}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {ppsStrengths.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 dark:border-emerald-800 dark:bg-slate-900/70 dark:text-slate-200">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">Mission</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Make solar the default choice for every roof in the Tirupati & Chittoor districts by 2030.</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-sky-200 bg-sky-50 p-5 dark:border-sky-900/50 dark:bg-sky-950/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">Vision</p>
              <h4 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">A self-sufficient, carbon-free South India powered by clean energy.</h4>
            </div>

            <div className="rounded-[28px] border border-violet-200 bg-violet-50 p-5 dark:border-violet-900/50 dark:bg-violet-950/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-violet-300">Values</p>
              <h4 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Honest pricing, premium components, and lifelong service.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">Strengths</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">14+ years of expertise, an in-house engineering team and Tata-grade components.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 hidden">
            {ppsReasons.map((item) => (
              <div key={item.title} className="rounded-3xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
                <div className="text-2xl font-black tracking-tighter text-amber-700 dark:text-amber-300">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">Leadership</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Meet the founders</h3>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">Engineers and entrepreneurs who built PPS one rooftop at a time.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {founderProfiles.map((person) => (
              <div key={person.name} className="rounded-[26px] border border-violet-200 bg-violet-50 p-5 dark:border-violet-900/50 dark:bg-violet-950/20">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-700 text-xl font-black text-white shadow-lg shadow-violet-200/50 dark:shadow-violet-950/40">
                  {person.initials}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{person.name}</h4>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-[0_32px_90px_-50px_rgba(16,185,129,0.35)] dark:border-emerald-900/40 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">Explore Our Services</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Want to know if solar is right for your home?</h3>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 text-base leading-8 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            Book a free site survey with our Tirupati team. No commitments, just honest answers.
          </div>
        </div>
      </section>
    </main>
  )
}