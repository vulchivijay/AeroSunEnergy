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
  ['Certificate of Incorporation and CIN', 'Establishes the company’s legal identity (MCA)', 'Approved by MCA'],
  ['EPFO', 'Employee provident fund compliance and workforce contribution records', 'approved by EPFO'],
  ['GST', 'Required when applicable under GST law', 'Aproved by GSTN'],
  ['Professional Tax', 'State professional tax compliance for employees and business operations', 'Submitted'],
  ['Accountant', 'Financial accounting, books of records and compliance support', 'Appointed'],
  ['Compliance Advisor', 'External regulatory guidance and compliance monitoring support', 'Appointed'],
  ['Professional Tax advisor', 'Professional tax advisory, registration and state compliance support', 'Appointed'],
  ['Udyam/MSME', 'MSME recognition if eligible', 'Approved by Udyam'],
  ['DPIIT Startup Recognition', 'Startup India recognition if eligible', 'Approved By DPIIT'],
  ['Trademark', 'Protects the company brand and eligible marks', 'Submitted'],
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
    description: 'Leads the company vision, project planning and renewable-energy strategy. He is closely involved in system design, technical evaluation and business development for clean-energy solutions.',
  },
  {
    initials: 'V',
    name: 'Kumar',
    role: 'Co-Founder & Director',
    description: 'Supports strategic growth, customer engagement and operational execution. He helps shape partnerships, service quality and long-term business relationships across solar and hybrid projects.',
  },
  {
    initials: 'D',
    name: 'Anusha',
    role: 'Board of Director',
    description: 'Helps in company work, team support, and project follow-up.',
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
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900 dark:bg-[#101b17] dark:text-slate-100">
      <section id="story" className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.08] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-32 rounded-full border border-white/[0.08]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              Company profile &middot; Tirupati, India
            </div>
            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-[0.075em] text-white sm:text-7xl lg:text-8xl">
              AeroSun
              <span className="mt-2 block text-emerald-300">Energy</span>
            </h1>
            <p className="mt-5 text-md font-bold uppercase tracking-[0.3em] text-emerald-100/65">
              Private Limited
            </p>
            <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/85 sm:text-2xl">
              Solar energy <span className="text-lime-300">&middot;</span> Wind energy <span className="text-lime-300">&middot;</span> Hybrid renewable energy
            </p>
            <div className="mt-8 border-l-2 border-lime-300 pl-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-lime-200">Our promise</p>
              <p className="mt-2 text-xl font-semibold italic text-white sm:text-2xl">&ldquo;Power from Sun, Wind, Water, Fire&rdquo;</p>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
              AeroSun Energy Private Limited is an Indian renewable-energy company established with the vision of supporting a cleaner, more sustainable and energy-efficient future. Based in Tirupati, Andhra Pradesh, the company aims to develop renewable-energy solutions for residential, agricultural, commercial and industrial customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#capabilities" className="rounded-full bg-lime-300 px-5 py-3 text-md font-bold text-emerald-950 transition hover:bg-lime-200">
                Explore our capabilities
              </a>
              <a href="#leadership" className="rounded-full border border-white/20 px-5 py-3 text-md font-bold text-white transition hover:bg-white/10">
                Meet the leadership
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative h-[26rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(155deg,#31594b_0%,#14372f_55%,#24463a_100%)] sm:h-[32rem]">
                <OptimizedImage
                  src="/images/founder-aerosunenergy.webp"
                  alt="Mr. Vulchi Vijaya Kumar, Founder of AeroSun Energy"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c17]/95 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-lime-200">Founder & Director</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Vulchi Vijaya Kumar</h2>
                  <p className="mt-2 max-w-sm text-base leading-7 text-white/85">
                    Technology experience and an entrepreneurial vision, focused on practical renewable-energy solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-10">
            {companyStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-4 sm:justify-start sm:gap-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-100/55">{stat.label}</span>
                <span className="text-md font-semibold text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">The person behind the vision</p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">
              Technology roots. A cleaner-energy future.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-lime-500" />
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">
            <p>
              <strong className="font-bold text-slate-950 dark:text-white">Vulchi Vijaya Kumar</strong> is the Founder and Visionary Leader of AeroSun Energy Private Limited, a renewable energy company based in Tirupati, Andhra Pradesh, India. <strong className="font-bold text-emerald-800 dark:text-emerald-300">With 14 years of professional experience in the IT industry across organisations including HCLTech, Freshworks, KRDS, and other technology companies</strong>, he brings a strong technology-oriented perspective and a commitment to innovation to his entrepreneurial journey.
            </p>
            <p>
              His interests span renewable energy, technological innovation, and the development of practical energy solutions for residential, agricultural, commercial, and industrial applications. <strong className="font-bold text-emerald-800 dark:text-emerald-300">Through AeroSun Energy, he aims to support the adoption of solar power, wind energy, and integrated renewable energy systems that contribute to a cleaner and more sustainable future</strong>.
            </p>
            <p>
              Combining his professional exposure to software technologies with an entrepreneurial vision, he seeks to encourage the use of intelligent energy monitoring, efficient power management, and innovative renewable energy solutions. Under his leadership, AeroSun Energy aspires to make clean energy solutions more accessible, promote environmental responsibility, and contribute to India&apos;s transition towards sustainable energy.
            </p>
          </div>
        </div>
      </section>

      <section id="compliance" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#f7faf6] shadow-[0_28px_70px_-46px_rgba(20,55,47,0.45)] dark:border-emerald-100/10 dark:bg-slate-950/60">
            <div className="relative overflow-hidden bg-[linear-gradient(115deg,#14372f_0%,#1d5140_58%,#285d43_100%)] px-5 py-7 text-white sm:px-8 sm:py-9">
              <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -right-2 -top-14 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-lime-200/25 bg-white/[0.08] px-3 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] text-lime-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    Governance &amp; compliance
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-[0.055em] sm:text-4xl">
                    Registrations and approval milestones
                  </h2>
                  <p className="mt-2 text-md leading-6 text-emerald-50/85">
                    Company records and key compliance milestones.
                  </p>
                </div>
                <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/20 px-4 py-3 backdrop-blur-sm">
                  <span className="text-3xl font-black leading-none text-lime-200">{approvalRows.length}</span>
                  <span className="max-w-20 text-[12px] font-bold uppercase leading-4 tracking-[0.16em] text-emerald-50">Company records</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:p-8">
              {approvalRows.map(([label, , status], index) => (
                <article key={label} className="group flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_16px_30px_-22px_rgba(16,87,58,0.45)] dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-700 sm:gap-4 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-mono text-md font-black text-emerald-800 ring-1 ring-emerald-700/10 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-300/10 dark:group-hover:bg-emerald-900/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-md font-bold leading-6 text-slate-900 dark:text-white">{label}</h3>
                    <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      {status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">People & principles</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">Leadership behind the mission</h2>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
              Our work is guided by a commitment to sustainability, integrity, quality, innovation, safety, and continuous improvement.
            </p>
            <div className="mt-8 space-y-3">
              {founderProfiles.map((profile) => (
                <article key={profile.name} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-lg font-black text-lime-300">{profile.initials}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">{profile.name}</h3>
                      <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">{profile.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{profile.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {coreValues.map((value, index) => (
                <article key={value.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-800">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-md font-extrabold text-slate-950 dark:text-white">{value.title}</h3>
                    <span className="font-mono text-[12px] font-bold text-emerald-700/50 dark:text-emerald-300/50">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d3d43] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.24em] text-lime-300">Why AeroSun</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[0.055em] text-white sm:text-4xl">Practical energy. Personal service.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-emerald-50/85">We aim to match solutions to real requirements, site conditions, and project goals.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {ppsStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-3xl font-black tracking-tight text-lime-300">{stat.value}</p>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.17em] text-emerald-50/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">Our strengths</h3>
              <ul className="mt-4 space-y-3">
                {ppsStrengths.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-emerald-50/90"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">Why customers choose us</h3>
              <ul className="mt-4 space-y-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-emerald-50/90"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {ppsReasons.map((reason) => (
              <article key={reason.title} className="border-l border-lime-300/70 pl-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-lime-200">{reason.title}</p>
                <p className="mt-2 text-base leading-7 text-emerald-50/85">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">Building responsibly</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">A thoughtful path from foundations to growth</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-amber-200 bg-[#fffdf6] p-5 dark:border-amber-900/50 dark:bg-amber-950/10 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">Immediate priorities</h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">Current</span>
            </div>
            <ol className="mt-6 space-y-3">
              {currentGoals.map((goal, index) => (
                <li key={goal} className="flex gap-3 border-b border-amber-100 pb-3 last:border-0 dark:border-amber-900/40">
                  <span className="font-mono text-md font-bold text-amber-700 dark:text-amber-300">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-base leading-7 text-slate-700 dark:text-slate-200">{goal}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-3xl border border-indigo-200 bg-[#f8f8ff] p-5 dark:border-indigo-900/50 dark:bg-indigo-950/10 sm:p-7">
            <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">Growth roadmap</h3>
            <div className="mt-6 space-y-5">
              {futureGoals.map((group, index) => (
                <div key={group.title} className="relative border-l border-indigo-200 pl-5 dark:border-indigo-800">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-[#f8f8ff] dark:ring-[#12112a]" />
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">Phase 0{index + 1}</p>
                  <h4 className="mt-1 text-md font-extrabold text-slate-950 dark:text-white">{group.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-base leading-7 text-slate-700 dark:text-slate-300"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">Service focus</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">Integrated clean-energy capabilities</h2>
            </div>
            <span className="text-md font-semibold text-slate-600 dark:text-slate-300">For homes, farms, businesses & industry</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <article key={group.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f9f5] p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-emerald-800 sm:p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`} />
                <p className="font-mono text-md font-bold text-emerald-700/60 dark:text-emerald-300/60">0{index + 1} / SOLUTIONS</p>
                <h3 className="mt-4 text-xl font-black text-slate-950 dark:text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-7 text-slate-700 dark:text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#303b29] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-lime-300">Our commitments</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-white sm:text-4xl">Purpose, translated into practice</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { title: 'Our promise', points: promisePoints, accent: 'text-lime-300' },
              { title: 'Our mission', points: missionPoints, accent: 'text-sky-300' },
            ].map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-7">
                <h3 className={`text-md font-black uppercase tracking-[0.2em] ${group.accent}`}>{group.title}</h3>
                <ul className="mt-5 space-y-4">
                  {group.points.map((point, index) => (
                    <li key={point} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className={`font-mono text-md font-bold ${group.accent}`}>0{index + 1}</span>
                      <span className="text-base leading-7 text-emerald-50/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-lime-200/20 bg-lime-200/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-lime-200">Let&apos;s build a cleaner future</p>
              <p className="mt-2 text-lg font-bold text-white">Start a conversation with AeroSun Energy.</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-3 text-md font-bold text-emerald-950 transition hover:bg-lime-200">
              Contact our team <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">How we work</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">A clear standard for every project</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#eaf4ef] p-5 dark:bg-emerald-950/25 sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">Quality commitments</p>
            <div className="mt-5 divide-y divide-emerald-900/10 dark:divide-emerald-100/10">
              {qualityPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-emerald-800/60 dark:text-emerald-200/60">0{index + 1}</span>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-[#f1f0e9] p-5 dark:bg-slate-900 sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">Responsible business conduct</p>
            <div className="mt-5 divide-y divide-slate-900/10 dark:divide-white/10">
              {ethicsPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-amber-800/60 dark:text-amber-200/60">0{index + 1}</span>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
