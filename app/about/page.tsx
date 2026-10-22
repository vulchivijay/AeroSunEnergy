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
    role: 'Founder & Director',
    description: 'Leads engineering, system design and large commercial deployments. Hands-on through every site assessment.',
  },
  {
    initials: 'D',
    name: 'Anusha',
    role: 'Co-Founder & Director',
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
          className="overflow-hidden rounded-[34px] border border-emerald-200 bg-linear-to-br from-[#f0fdf4] via-white to-[#ebf8ff] shadow-[0_32px_90px_-40px_rgba(16,185,129,0.45)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
        >
          <div className="grid gap-8 p-6 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
                Company Profile
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-none tracking-[-0.06em] text-slate-900 sm:text-5xl dark:text-white">
                  AEROSUN ENERGY
                </h1>
                <p className="text-lg font-bold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                  Private Limited
                </p>
                <p className="max-w-xl text-lg font-medium text-slate-700 dark:text-slate-300">
                  Solar Energy • Wind Energy • Hybrid Renewable Energy
                </p>
              </div>

              <div className="rounded-[24px] border border-emerald-200 bg-linear-to-r from-emerald-50 via-white to-sky-50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                  Tagline
                </p>
                <p className="mt-2 text-xl font-semibold italic text-slate-800 dark:text-slate-100">
                  “Power from sun and wind”
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                AeroSun Energy Private Limited is an Indian renewable-energy company established with the vision of supporting a cleaner, more sustainable and energy-efficient future. Based in Tirupati, Andhra Pradesh, the company aims to develop renewable-energy solutions for residential, agricultural, commercial and industrial customers.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-slate-200 bg-white/85 p-4 shadow-[0_18px_35px_-25px_rgba(15,23,42,0.5)] dark:border-slate-700 dark:bg-slate-900/75">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-base font-black text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[32px] bg-linear-to-br from-emerald-200/60 via-sky-100/60 to-violet-200/60 blur-3xl dark:from-emerald-500/10 dark:via-sky-500/10 dark:to-violet-500/10" />
              <div className="relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/60 bg-white/80 p-4 shadow-[0_32px_90px_-30px_rgba(16,185,129,0.5)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
                <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-linear-to-br from-emerald-100 via-white to-sky-100 dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
                  <div className="relative h-96 w-full">
                    <OptimizedImage
                      src="/images/founder-aerosunenergy.png"
                      alt="Mr. Vulchi Vijaya Kumar, Founder of AeroSun Energy"
                      fill
                      sizes="(min-width: 1024px) 36vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3 rounded-[22px] border border-emerald-100 bg-emerald-50/80 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-black text-slate-900 dark:text-white">Mr. Vulchi Vijaya Kumar</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Founder and Director</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
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
        <div className="overflow-hidden rounded-[30px] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-sky-50 p-5 shadow-[0_26px_70px_-40px_rgba(16,185,129,0.4)] dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
                About the founder
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Leadership
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Building a cleaner future with purpose
          </h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-sky-200 bg-white/80 p-5 shadow-[0_20px_45px_-30px_rgba(14,165,233,0.5)] dark:border-sky-900/60 dark:bg-slate-900/75">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Our promise</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {promisePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-emerald-200 bg-emerald-50/80 p-5 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.5)] dark:border-emerald-900/60 dark:bg-emerald-950/20">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">Our mission</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[28px] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_22px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:border-violet-800 dark:bg-slate-900/80 dark:text-violet-300">
                Core values
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Guiding principles
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            The principles guiding every decision we make
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-[24px] border border-violet-100 bg-white/85 p-5 shadow-[0_20px_45px_-35px_rgba(139,92,246,0.45)] dark:border-violet-900/60 dark:bg-slate-900/75">
                <div className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
                  {value.title}
                </div>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[28px] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-green-50 p-5 shadow-[0_22px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
                Products & services
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Renewable portfolio
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            A comprehensive renewable-energy portfolio for homes, farms, and businesses
          </h2>

          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/85 shadow-[0_22px_45px_-35px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
                <div className={`bg-linear-to-r ${group.accent} px-5 py-4`}>
                  <p className="text-lg font-black text-white">{group.title}</p>
                </div>
                <ul className="space-y-3 p-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[30px] border border-indigo-200 bg-linear-to-br from-indigo-50 via-white to-violet-50 p-5 shadow-[0_24px_60px_-40px_rgba(99,102,241,0.45)] dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:border-indigo-800 dark:bg-slate-900/80 dark:text-indigo-300">
                Current & future goals
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Growth roadmap
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Growth built on strong foundations
          </h2>

          <div className="mt-6 grid gap-5">
            <div className="rounded-[26px] border border-indigo-100 bg-white/85 p-5 shadow-[0_20px_45px_-35px_rgba(79,70,229,0.5)] dark:border-indigo-900/60 dark:bg-slate-900/75">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">Current goals</p>
              <ul className="mt-4 grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300 md:grid-cols-2">
                {currentGoals.map((goal) => (
                  <li key={goal} className="flex gap-3 rounded-[18px] border border-indigo-100 bg-indigo-50/60 p-3 dark:border-indigo-900/60 dark:bg-indigo-950/20">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {futureGoals.map((group) => (
                <div key={group.title} className="rounded-[26px] border border-slate-200 bg-white/85 p-5 shadow-[0_20px_45px_-35px_rgba(79,70,229,0.5)] dark:border-slate-700 dark:bg-slate-900/75">
                  <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">{group.title}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-teal-200 bg-linear-to-br from-teal-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(20,184,166,0.45)] dark:border-teal-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-teal-700 dark:border-teal-800 dark:bg-slate-900/80 dark:text-teal-300">
                Why choose us
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-700 dark:border-teal-800 dark:bg-teal-900/20 dark:text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              Customer first
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            A customer-focused and technically responsible approach
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((point) => (
              <div key={point} className="rounded-[24px] border border-teal-100 bg-white/85 p-4 shadow-[0_18px_40px_-35px_rgba(13,148,136,0.5)] dark:border-teal-900/60 dark:bg-slate-900/75">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex h-2.5 w-2.5 rounded-full bg-teal-500" />
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-indigo-50 p-5 shadow-[0_24px_60px_-40px_rgba(139,92,246,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:border-violet-800 dark:bg-slate-900/80 dark:text-violet-300">
                Leadership
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Team vision
            </div>
          </div>
          <h3 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Meet the founders
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {founderProfiles.map((profile) => (
              <div key={profile.name} className="rounded-[28px] border border-violet-100 bg-white/85 p-5 shadow-[0_20px_45px_-35px_rgba(139,92,246,0.5)] dark:border-violet-900/60 dark:bg-slate-900/75">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-lg font-black text-white">
                    {profile.initials}
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900 dark:text-white">{profile.name}</p>
                    <p className="text-sm font-medium text-violet-700 dark:text-violet-300">{profile.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-teal-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
                Explore our services
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Tailored guidance
            </div>
          </div>
          <h3 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Want to know if solar is right for your home?
          </h3>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[26px] border border-emerald-100 bg-white/85 p-5 dark:border-emerald-900/60 dark:bg-slate-900/75">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Quick overview</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {ppsStats.map((stat) => (
                  <div key={stat.label} className="rounded-[18px] border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
                    <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] border border-amber-100 bg-amber-50/80 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">Our strengths</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {ppsStrengths.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/70">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Why customers choose us</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {ppsReasons.map((reason) => (
                <div key={reason.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">{reason.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-slate-200 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/70">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Official resources</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {officialResources.map((resource) => (
                <a
                  key={resource.label}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-300"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:border-amber-800 dark:bg-slate-900/80 dark:text-amber-300">
                Licences, registrations & approvals
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Compliance
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Formal registrations and approval milestones
          </h2>

          <div className="mt-6 overflow-x-auto rounded-[26px] border border-slate-200 bg-white/85 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
            <table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="bg-slate-50 dark:bg-slate-800/80">
                <tr>
                  <th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Registration / approval</th>
                  <th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Purpose</th>
                  <th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {approvalRows.map(([label, purpose, status]) => (
                  <tr key={label} className="border-t border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{label}</td>
                    <td className="px-4 py-3">{purpose}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
                        status === 'Done'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                          : status === 'In process'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300'
                            : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                      }`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}