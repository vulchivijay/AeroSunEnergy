import {
  BadgeCheck,
  ClipboardCheck,
  KeyRound,
  Monitor,
  PanelsTopLeft,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

const stepIcons: LucideIcon[] = [
  Monitor,
  KeyRound,
  ClipboardCheck,
  Smartphone,
  BadgeCheck,
  PanelsTopLeft,
]

export default function ConsumerRegistrationProcess() {
  const { t } = useLocale()
  const eligibility = t.knowEligibilityPage
  const process = eligibility.labels.consumerRegistration
  const benefits = process.benefits

  return (
    <section aria-labelledby="consumer-registration-title" className="mt-5 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm sm:p-5">
      <header className="mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-800">{process.eyebrow}</p>
        <h3 id="consumer-registration-title" className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          <span className="text-sky-700">{process.titleAccent}</span>{' '}{process.title}
        </h3>
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-600">{process.description}</p>
      </header>

      <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {process.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? ClipboardCheck
          const featured = index % 2 === 0

          return (
            <li
              key={step.title}
              className={`rounded-2xl border p-4 ${featured ? 'border-sky-700 bg-sky-50' : 'border-slate-200 bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${featured ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-800'}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-800">
                  {process.stepLabel} {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="mt-4 font-bold text-slate-950">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              {step.url && (
                <a
                  className="mt-3 inline-flex font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950"
                  href={step.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {process.portalLink}
                </a>
              )}
            </li>
          )
        })}
      </ol>

      <section aria-labelledby="consumer-benefits-title" className="mt-8 border-t border-slate-200 pt-6">
        <h3 id="consumer-benefits-title" className="text-center text-3xl font-black text-sky-700">
          {benefits.title}
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div className="lg:border-r lg:border-slate-300 lg:pr-6">
            <h4 className="text-center text-xl font-bold text-slate-950">{benefits.residentialTitle}</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {eligibility.subsidyBreakdown.slice(0, 3).map((item) => (
                <article key={item.title} className="text-center">
                  <p className="text-sm text-slate-700">{item.title}</p>
                  <p className="mt-1 text-xl font-black text-sky-700">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-slate-950">
              {benefits.communityTitle} <span className="text-sky-700">{benefits.communityAccent}</span>
            </h4>
            <p className="text-sm text-slate-600">{benefits.communitySubtitle}</p>
            {eligibility.subsidyBreakdown.slice(3, 4).map((item) => (
              <article key={item.title} className="mt-4">
                <p className="text-sm text-slate-700">{item.title}</p>
                <p className="mt-1 text-xl font-black text-sky-700">{item.value}</p>
                <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-600">{benefits.communityDetails}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold leading-6 text-slate-800">
          {benefits.specialStatesNote}
        </p>
        <div className="mt-5">
          <h4 className="text-center text-lg font-bold text-slate-950">{benefits.capacityTitle}</h4>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-emerald-100">
            <table className="w-full min-w-[560px] text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-emerald-100 [&_td]:border-b [&_td]:border-emerald-100 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
              <tbody className="divide-y divide-emerald-100">
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white">{benefits.consumptionLabel}</th>
                  {benefits.consumptionValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900"><DigitalNumber value={value} /></td>
                  ))}
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white">{benefits.capacityLabel}</th>
                  {benefits.capacityValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900"><DigitalNumber value={value} /></td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  )
}
