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
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
          <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              Renewable project portfolio
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              Projects.
              <span className="mt-1 block text-emerald-300">Designed around your energy.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              AeroSun Energy develops practical renewable energy systems for homes, businesses, farms, and industrial operations that need cleaner power, lower operating cost, and long-term resilience.
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">↗</span>
            <span className="text-md leading-5 text-slate-300">
              Project focus
              <strong className="block text-md font-bold text-white">Plan · Build · Support</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-100/60 sm:px-8 lg:px-10">
            <span>Residential</span>
            <span>Commercial & industrial</span>
            <span>Agriculture & rural</span>
            <span>Wind & hybrid</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section id="project-approach" className="scroll-mt-28 mb-8 rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">Our approach</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">We tailor every system to the site, energy use, operating conditions, and project goals—balancing performance, safety, cost, and long-term service.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
              {projectSteps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-md font-bold text-emerald-700">0{index + 1}</span>
                  <span className="text-md leading-5 text-slate-600">{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="project-categories" className="scroll-mt-28 mb-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-md font-bold text-emerald-800">01</span>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Project solutions</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projectCategories.map((project) => (
                    <div key={project.title} className="rounded-xl bg-[#f4f8fc] p-4">
                      <div className={`mb-3 h-1.5 rounded-full bg-linear-to-r ${project.accent}`} aria-hidden="true" />
                      <h3 className="text-md font-bold text-slate-900">{project.title}</h3>
                      <p className="mt-2 text-md leading-6 text-slate-600">{project.description}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-semibold text-slate-600">{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
          </section>

          <section id="project-pipeline" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-md font-bold text-emerald-800">02</span>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Project status overview</h2>
                <p className="mt-2 text-md leading-6 text-slate-600">Browse the project pipeline by status. Updates will appear here as projects are scheduled, assigned, or completed.</p>
                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-3">
                  <div role="group" aria-label="Filter projects by status" className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          aria-pressed={isActive}
                          className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-md font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${isActive ? 'bg-slate-900 text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.7)]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                        >
                          <span className={`inline-flex h-2.5 w-2.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-400'}`} aria-hidden="true" />
                          {tab}
                        </button>
                      )
                    })}
                  </div>
                  <div className="pt-5">
                    {filteredProjects.length === 0 ? (
                      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-10 text-center">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900">No {activeTab.toLowerCase()} projects yet</h3>
                        <p className="mx-auto mt-2 max-w-lg text-md leading-7 text-slate-600">New renewable energy opportunities and project updates will appear here as they are scheduled, assigned, or completed.</p>
                      </div>
                    ) : (
                      <div className="grid gap-4 md:grid-cols-2">
                        {filteredProjects.map((project) => (
                          <article key={`${project.title}-${project.location}`} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em] ${statusMeta[project.status].tone}`}>{project.status}</span>
                            <div className={`mt-4 h-1.5 rounded-full bg-linear-to-r ${statusMeta[project.status].accent}`} aria-hidden="true" />
                            <h3 className="mt-4 text-lg font-bold text-slate-900">{project.title}</h3>
                            <p className="mt-2 text-md text-slate-500">{project.location}</p>
                            <p className="mt-3 text-md font-medium text-slate-700">{project.type}</p>
                            <p className="mt-3 text-md leading-7 text-slate-600">{project.summary}</p>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
          </section>

          <p className="mt-7 rounded-2xl border border-emerald-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            Ready to discuss your site and energy goals?{' '}
            <a href="/customer-enquiry" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">Request a project consultation</a>
            {' '}or <a href="/services" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">explore our services</a>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Project page sections" className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">Find a topic</p>
              <p className="mt-1 text-md font-bold text-slate-900">Project overview</p>
            </div>
            <ol className="space-y-1 p-3">
              {[
                ['project-approach', 'Our approach'],
                ['project-categories', 'Project solutions'],
                ['project-pipeline', 'Project status'],
              ].map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900">
                    <span className="font-mono font-bold text-emerald-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-300">Planning priorities</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-200">
              {['Site feasibility and energy audit', 'Technology and system design', 'Installation and commissioning', 'Monitoring and maintenance'].map((step) => <li key={step}>{step}</li>)}
            </ul>
          </section>
          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">Start a conversation</p>
            <p className="mt-3 text-md leading-6 text-slate-700">Share your project needs and our team can help plan the next steps.</p>
            <a href="/customer-enquiry" className="mt-4 inline-flex rounded-full bg-[#101c32] px-4 py-2.5 text-md font-bold text-white transition hover:bg-emerald-900">Request consultation</a>
          </section>
        </aside>
      </div>
    </main>
  )
}
