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
  ['Certificate of Incorporation and CIN', 'Establishes the company’s legal identity (MCA)', 'Done'],
  ['EPFO', 'Employee provident fund compliance and workforce contribution records', 'Done'],
  ['GST', 'Required when applicable under GST law', 'Done'],
  ['Professional Tax', 'State professional tax compliance for employees and business operations', 'Done'],
  ['Accountant', 'Financial accounting, books of records and compliance support', 'Done'],
  ['Compliance Advisor', 'External regulatory guidance and compliance monitoring support', 'Done'],
  ['DPIIT Startup Recognition', 'Startup India recognition if eligible', 'In process'],
  ['Trademark', 'Protects the company brand and eligible marks', 'In process'],
  ['Udyam/MSME', 'MSME recognition if eligible', 'Done'],
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
          <div className="grid gap-4 p-6 lg:grid-cols-[1.12fr_0.88fr] lg:p-10">
            <div className="space-y-4">
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

              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                <b className="rounded-full bg-emerald-100 px-1.5 py-0.5 font-black text-emerald-700 shadow-sm ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-800">Vulchi Vijaya Kumar</b> is the Founder and Visionary Leader of AeroSun Energy Private Limited, a renewable energy company based in Tirupati, Andhra Pradesh, India. <b className="rounded-full bg-sky-100 px-1.5 py-0.5 font-extrabold text-sky-700 shadow-sm ring-1 ring-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:ring-sky-800">With 14 years of professional experience in the IT industry across organisations including HCLTech, Freshworks, KRDS, and other technology companies</b>, he brings a strong technology-oriented perspective and a commitment to innovation to his entrepreneurial journey.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                His interests span renewable energy, technological innovation, and the development of practical energy solutions for residential, agricultural, commercial, and industrial applications. <b className="rounded-full bg-violet-100 px-1.5 py-0.5 font-extrabold text-violet-700 shadow-sm ring-1 ring-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:ring-violet-800">Through AeroSun Energy, he aims to support the adoption of solar power, wind energy, and integrated renewable energy systems that contribute to a cleaner and more sustainable future</b>.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                Combining his professional exposure to software technologies with an entrepreneurial vision, he seeks to encourage the use of intelligent energy monitoring, efficient power management, and innovative renewable energy solutions.
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
                Under his leadership, AeroSun Energy aspires to make clean energy solutions more accessible, promote environmental responsibility, and contribute to India&apos;s transition towards sustainable energy.
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
        <div className="mb-6 overflow-hidden rounded-[30px] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
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

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {approvalRows.map(([label, purpose, status]) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-[26px] border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(254,249,195,0.78),rgba(255,255,255,0.96))] p-[1px] shadow-[0_24px_60px_-30px_rgba(245,158,11,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_-28px_rgba(245,158,11,0.8)] dark:border-amber-800/70 dark:bg-[linear-gradient(135deg,rgba(12,18,25,0.95),rgba(67,38,14,0.82),rgba(12,18,25,0.95))]"
              >
                <div className="relative h-full rounded-[25px] bg-white/90 p-4 dark:bg-slate-950/85">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#fbbf24,#f59e0b,#f97316)]" />
                  <div className="flex items-start justify-between gap-3 pl-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-black uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
                        Registration / approval
                      </p>
                      <p className="mt-3 text-sm font-black leading-6 text-slate-900 dark:text-white">
                        {label}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.18em] ${
                        status === 'Done'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300'
                          : 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300'
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[30px] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_22px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
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
        <div className="mb-6 overflow-hidden rounded-[30px] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-100 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                Leadership
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
              <span className="h-2 w-2 rounded-full bg-slate-500" />
              Founder profiles
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Leadership behind the mission
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {founderProfiles.map((profile) => (
              <div key={profile.name} className="rounded-[26px] border border-slate-200 bg-white/85 p-5 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-sky-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                    {profile.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{profile.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                      {profile.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[30px] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_22px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:border-violet-800 dark:bg-slate-900/80 dark:text-violet-300">
                Why AeroSun
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Benefits
            </div>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
            Practical reasons customers choose us
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ppsStats.map((stat) => (
              <div key={stat.label} className="rounded-[22px] border border-violet-200 bg-white/85 p-4 text-center shadow-[0_18px_35px_-25px_rgba(168,85,247,0.45)] dark:border-violet-800 dark:bg-slate-900/75">
                <p className="text-3xl font-black tracking-tight text-violet-700 dark:text-violet-300">{stat.value}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[26px] border border-slate-200 bg-white/85 p-5 dark:border-slate-700 dark:bg-slate-900/75">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Our strengths</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {ppsStrengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white/85 p-5 dark:border-slate-700 dark:bg-slate-900/75">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Why choose us</h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ppsReasons.map((reason) => (
              <div key={reason.title} className="rounded-[22px] border border-slate-200 bg-white/85 p-4 shadow-[0_18px_35px_-25px_rgba(15,23,42,0.5)] dark:border-slate-700 dark:bg-slate-900/75">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">{reason.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[32px] border border-amber-200/80 bg-linear-to-br from-amber-50 via-white to-orange-50 p-5 shadow-[0_28px_80px_-45px_rgba(245,158,11,0.55)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:border-amber-800 dark:bg-slate-900/80 dark:text-amber-300">
                Current goals
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Now
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-[2.25rem] dark:text-white">
              Immediate priorities
            </h3>

            <div className="mt-6 space-y-3">
              {currentGoals.map((goal, index) => (
                <div
                  key={goal}
                  className="group flex items-start gap-3 rounded-[22px] border border-amber-100 bg-white/80 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_16px_28px_-22px_rgba(245,158,11,0.7)] dark:border-amber-900/50 dark:bg-slate-900/70 dark:hover:border-amber-700"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-black text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-700/50">
                    0{index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-indigo-200/80 bg-linear-to-br from-indigo-50 via-white to-violet-50 p-5 shadow-[0_28px_80px_-45px_rgba(99,102,241,0.5)] dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:border-indigo-800 dark:bg-slate-900/80 dark:text-indigo-300">
                Roadmap
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Growth plan
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-[2.25rem] dark:text-white">
              Short, medium and long-term outlook
            </h3>

            <div className="mt-6 space-y-4">
              {futureGoals.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[24px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_16px_30px_-28px_rgba(15,23,42,0.6)] dark:border-slate-700 dark:bg-slate-900/75"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
                      {group.title}
                    </h4>
                  </div>

                  <ul className="mt-3 space-y-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-emerald-200/80 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_28px_80px_-45px_rgba(16,185,129,0.55)] dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-800 dark:bg-slate-900/80 dark:text-emerald-300">
                Quality
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Standards
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-[2.25rem] dark:text-white">
              Our quality commitments
            </h3>

            <div className="mt-6 space-y-3">
              {qualityPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[18px] border border-emerald-100 bg-white/80 p-3.5 dark:border-emerald-900/50 dark:bg-slate-900/70"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] font-black text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-700/50">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-amber-200/80 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_28px_80px_-45px_rgba(245,158,11,0.55)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:border-amber-800 dark:bg-slate-900/80 dark:text-amber-300">
                Ethics
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Conduct
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-[2.25rem] dark:text-white">
              Business conduct we stand by
            </h3>

            <div className="mt-6 space-y-3">
              {ethicsPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[18px] border border-amber-100 bg-white/80 p-3.5 dark:border-amber-900/50 dark:bg-slate-900/70"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-black text-amber-700 ring-1 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-700/50">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
