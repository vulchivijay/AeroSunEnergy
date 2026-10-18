'use client'

import { useMemo, useState } from 'react'

type ResearchItem = {
  title: string
  phase: string
  metric: string
  description: string
  accent: string
}

const researchItems: ResearchItem[] = Array.from({ length: 180 }, (_, index) => ({
  title: `R&D Sprint ${index + 1}`,
  phase: ['Prototype', 'Simulation', 'Field Trial', 'Optimization', 'Pilot Launch'][index % 5],
  metric: `${(index + 1) * 8} kWh/day`,
  description:
    'Testing renewable energy systems for efficiency, durability, and real-world performance across residential, agricultural, and industrial applications.',
  accent: ['from-emerald-500 via-teal-500 to-cyan-500', 'from-sky-500 via-blue-500 to-indigo-500', 'from-amber-400 via-orange-500 to-yellow-500', 'from-violet-500 via-purple-500 to-fuchsia-500', 'from-rose-500 via-pink-500 to-red-500'][index % 5],
}))

export default function ResearchDevelopmentPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6

  const pageNumbers = useMemo(() => {
    const start = Math.max(1, currentPage - 2)
    const end = currentPage + 2
    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }, [currentPage])

  const visibleItems = researchItems.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const goToPage = (page: number) => setCurrentPage(Math.max(1, page))
  const goFirst = () => setCurrentPage(1)
  const goPrev = () => setCurrentPage((page) => Math.max(1, page - 1))
  const goNext = () => setCurrentPage((page) => page + 1)
  const goLast = () => setCurrentPage((page) => page + 5)

  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-[0_30px_70px_-35px_rgba(16,185,129,0.45)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
                AeroSun Energy • Research & Development
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Reach, testing, and product development for cleaner energy systems.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                We transform ideas into field-ready renewable solutions through simulation, prototyping, pilot validation, and operational learning.
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900/80">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Innovation focus</p>
                <div className="mt-5 space-y-4">
                  {[
                    'Solar efficiency optimization',
                    'Wind turbine performance validation',
                    'Hybrid storage and load balancing',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/80">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">✓</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Live pilots', value: '24+', tone: 'emerald' },
            { label: 'Efficiency gains', value: '18–32%', tone: 'sky' },
            { label: 'Test cycles', value: '1,200+', tone: 'violet' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_30px_-26px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Development roadmap</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Innovation pipeline</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Page {currentPage} • Showing {Math.min((currentPage - 1) * pageSize + 1, researchItems.length)}-{Math.min(currentPage * pageSize, researchItems.length)} of {researchItems.length} records
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <article key={`${item.title}-${item.phase}`} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_45px_-32px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900">
              <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.phase}</span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">{item.metric}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_22px_45px_-32px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={goFirst}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              First
            </button>
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              Prev
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition ${
                  page === currentPage
                    ? 'bg-emerald-600 text-white shadow-[0_12px_24px_-16px_rgba(16,185,129,0.8)]'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              Next
            </button>
            <button
              type="button"
              onClick={goLast}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              Last
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
