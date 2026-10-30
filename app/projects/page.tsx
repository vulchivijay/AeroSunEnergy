'use client'

import { useMemo, useState } from 'react'

const tabs = ['In Queue', 'In Progress', 'Completed'] as const

type ProjectStatus = (typeof tabs)[number]

type ProjectCard = {
  title: string
  location: string
  type: string
  status: ProjectStatus
  summary: string
}

const projectCards: ProjectCard[] = []

const statusMeta: Record<ProjectStatus, { label: string; tone: string; accent: string }> = {
  'In Queue': {
    label: 'In Queue',
    tone: 'border-amber-200 bg-amber-50 text-amber-700',
    accent: 'from-amber-400 via-orange-400 to-yellow-400',
  },
  'In Progress': {
    label: 'In Progress',
    tone: 'border-cyan-200 bg-cyan-50 text-cyan-700',
    accent: 'from-cyan-500 via-sky-500 to-blue-500',
  },
  Completed: {
    label: 'Completed',
    tone: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    accent: 'from-emerald-500 via-green-500 to-lime-500',
  },
}

const projectSteps = [
  'Energy audit and site feasibility',
  'System design and technology selection',
  'Procurement, installation, and commissioning',
  'Performance monitoring and maintenance support',
]

const projectCategories = [
  {
    title: 'Residential Solar',
    accent: 'from-emerald-500 via-green-500 to-lime-500',
    description:
      'Custom rooftop solar systems for homes and apartments that reduce electricity bills, improve energy independence, and support long-term sustainability.',
    outcomes: ['Lower monthly power cost', 'Smart monitoring', 'Net metering support'],
  },
  {
    title: 'Commercial & Industrial',
    accent: 'from-violet-500 via-indigo-500 to-blue-500',
    description:
      'Solar and hybrid energy systems for business parks, factories, warehouses, schools, and institutions seeking dependable and efficient power.',
    outcomes: ['Lower operating cost', 'Stable energy supply', 'Sustainability reporting'],
  },
  {
    title: 'Agricultural & Rural',
    accent: 'from-amber-400 via-orange-500 to-rose-500',
    description:
      'Energy solutions designed for irrigation, pumping, cold storage, farm operations, and village infrastructure where reliability matters most.',
    outcomes: ['Solar pumping', 'Rural electrification', 'Efficient water access'],
  },
  {
    title: 'Wind & Hybrid Systems',
    accent: 'from-sky-500 via-cyan-500 to-teal-500',
    description:
      'Integrated solar-wind-battery systems that improve resilience, balance seasonal generation, and support higher-efficiency energy planning.',
    outcomes: ['Hybrid design', 'Battery integration', 'Site-specific performance planning'],
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectStatus>('In Queue')

  const filteredProjects = useMemo(
    () => projectCards.filter((project) => project.status === activeTab),
    [activeTab],
  )

  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f0fdf4_0%,#f7faf7_24%,#ffffff_45%,#ffffff_100%)] text-slate-900">
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_45%)]" aria-hidden="true" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">
              Renewable project portfolio
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-black tracking-[-0.08em] text-slate-900 sm:text-5xl lg:text-[4.2rem] lg:leading-[0.94]">
              Project solutions built around energy performance and reliability.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              AeroSun Energy develops practical renewable energy systems for homes, businesses, farms, and industrial operations that need cleaner power, lower operating cost, and long-term resilience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/customer-enquiry"
                className="inline-flex items-center justify-center rounded-full bg-[#20A44A] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_-18px_rgba(32,164,74,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Request project consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-50"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-emerald-100 bg-white/80 p-5 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.38)] backdrop-blur-sm">
            <div className="rounded-[26px] border border-slate-200 bg-slate-950 p-5 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300">Project focus</p>
              <div className="mt-5 space-y-4">
                {projectSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-600">Project pipeline</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Project status overview</h2>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_26px_70px_-42px_rgba(15,23,42,0.28)]">
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.7)]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className={`inline-flex h-2.5 w-2.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-400'}`} aria-hidden="true" />
                  {tab}
                </button>
              )
            })}
          </div>

          <div className="pt-6">
            {filteredProjects.length === 0 ? (
              <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-slate-400">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.05em] text-slate-900">No {activeTab.toLowerCase()} projects yet</h3>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-slate-600">
                  New renewable energy opportunities and project updates will appear here as they are scheduled, assigned, or completed.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <article key={`${project.title}-${project.location}`} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${statusMeta[project.status].tone}`}>
                        {project.status}
                      </div>
                    </div>

                    <div className={`mt-4 h-1.5 rounded-full bg-linear-to-r ${statusMeta[project.status].accent}`} aria-hidden="true" />

                    <h3 className="mt-4 text-xl font-bold tracking-[-0.05em] text-slate-900">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{project.location}</p>
                    <p className="mt-3 text-sm font-medium text-slate-700">{project.type}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-emerald-100 bg-[linear-gradient(135deg,#f0fdf4,#ffffff,#f8fafc)] p-6 shadow-[0_24px_70px_-40px_rgba(34,197,94,0.5)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-600">Why choose AeroSun Energy</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Planning that balances performance, safety, and cost.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {projectCategories.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className={`mb-3 h-1.5 rounded-full bg-linear-to-r ${project.accent}`} aria-hidden="true" />
                    <p className="text-lg font-bold tracking-[-0.04em] text-slate-900">{project.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
