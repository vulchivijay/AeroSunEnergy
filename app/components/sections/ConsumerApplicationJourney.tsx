'use client'

import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Hammer,
  House,
  Landmark,
  PanelsTopLeft,
  Send,
  Store,
  UserRound,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

const stakeholderIcons: LucideIcon[] = [House, Wrench, Building2, Landmark]
const journeyIcons: LucideIcon[] = [
  UserRound,
  Send,
  BadgeCheck,
  Store,
  ClipboardCheck,
  PanelsTopLeft,
  Hammer,
  ClipboardCheck,
  FileCheck2,
  Landmark,
]
const markerColors = [
  'bg-violet-500',
  'bg-rose-500',
  'bg-emerald-500',
  'bg-sky-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-teal-500',
  'bg-amber-500',
]

export default function ConsumerApplicationJourney() {
  const { t } = useLocale()
  const journey = t.financePage.applicationJourney

  return (
    <section
      id="consumer-application-journey"
      aria-labelledby="consumer-application-journey-title"
      className="mt-8 overflow-hidden rounded-3xl border border-sky-100 bg-white px-4 py-8 shadow-sm sm:px-7 sm:py-10"
    >
      <header className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-800">{journey.eyebrow}</p>
        <h2 id="consumer-application-journey-title" className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          <span className="text-sky-700">{journey.titleAccent}</span>{' '}{journey.title}
        </h2>
      </header>

      <ul className="mx-auto mt-7 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl bg-slate-50 p-2 sm:grid-cols-4">
        {journey.stakeholders.map((stakeholder, index) => {
          const Icon = stakeholderIcons[index] ?? Building2
          return (
            <li
              key={stakeholder}
              className={`flex min-h-16 items-center justify-center gap-2 px-2 py-3 font-bold text-slate-900 sm:px-4 ${
                index > 0 ? 'border-l border-slate-200' : ''
              }`}
            >
              <Icon className="h-7 w-7 shrink-0 text-sky-800" aria-hidden="true" />
              <span>{stakeholder}</span>
            </li>
          )
        })}
      </ul>

      <div className="my-7 flex justify-center">
        <a
          href="https://pmsuryaghar.gov.in/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
        >
          {journey.applyLabel}
        </a>
      </div>

      <ol className="relative mx-auto grid max-w-7xl gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {journey.steps.map((step, index) => {
          const Icon = journeyIcons[index] ?? FileText
          const markerColor = markerColors[index] ?? 'bg-sky-500'
          return (
            <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-4 pl-16">
              <span className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white ${markerColor}`}>
                {index + 1}
              </span>
              <Icon className="absolute right-4 top-4 h-6 w-6 text-sky-800" aria-hidden="true" />
              <h3 className="pr-8 font-bold text-slate-950">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
