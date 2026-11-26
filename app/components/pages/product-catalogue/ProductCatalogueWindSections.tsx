import { Wind } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
}) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] ${inverse ? 'border-amber-300/20 bg-white/[0.08] text-amber-200' : ' border-slate-200 bg-white/75 text-teal-800 '} text-xs font-semibold tracking-wide leading-5`}>
        {number} / {eyebrow}
      </p>
      <h2 className={`mt-4 ${inverse ? 'text-white' : 'text-[#152b29]'} text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${inverse ? 'text-indigo-100/90' : ' text-slate-600 '} text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}>{description}</p>
      )}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 sm:text-base">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function DetailCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="mb-4 text-[#152b29] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{title}</h3>
      {children}
    </div>
  )
}

export function ProductCatalogueWindSections({ t }: { t: Translations }) {
  const c = t.productCataloguePage
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="06"
            eyebrow={c.wind.eyebrow}
            title={c.wind.title}
            description={c.wind.description}
          />
          <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-amber-200/20 bg-white/[0.08] px-5 py-3">
            <Wind className="h-5 w-5 text-amber-700" aria-hidden="true" />
            <span className="text-xs uppercase text-slate-700 text-xs font-semibold tracking-wide leading-5">{c.wind.developmentRangeLabel}</span>
            <span className="font-mono text-lg font-bold text-amber-800 tracking-normal tabular-nums">100 W – 10 kW</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-white/[0.06] p-5 sm:p-6">
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.wind.applicationsLabel}</h3>
              <BulletList items={c.wind.applications} />
            </div>
            <div className="rounded-xl border border-slate-700 bg-white/[0.06] p-5 sm:p-6">
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.wind.focusLabel}</h3>
              <BulletList items={c.wind.focus} />
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-amber-200/20 bg-black/10 p-6 sm:p-8">
            <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2 uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{c.wind.projectLabel}</p>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.wind.productName}</h3>
            <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{c.wind.configurationLabel}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.wind.configuration.map((item) => (
                <p key={item} className="flex gap-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                  {item}
                </p>
                    ))}
            </div>
            <p className="mt-6 border-t border-slate-200 pt-5 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              <strong className="text-slate-950">{c.wind.statusLabel}</strong>{' '}
              {c.wind.statusTemplate.replace('{status}', c.wind.status)}
            </p>
          </div>
          <p className="mt-6 italic text-amber-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.wind.tagline}
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="07"
            eyebrow={c.hybrid.eyebrow}
            title={c.hybrid.title}
            description={c.hybrid.description}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard title={c.hybrid.architectureLabel}><BulletList items={c.hybrid.architecture} /></DetailCard>
            <DetailCard title={c.hybrid.applicationsLabel}><BulletList items={c.hybrid.applications} /></DetailCard>
            <DetailCard title={c.hybrid.benefitsLabel}><BulletList items={c.hybrid.benefits} /></DetailCard>
          </div>
          <p className="mt-5 rounded-xl border border-slate-200 bg-[#eaf2e9] px-5 py-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.hybrid.caveat}
          </p>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.hybrid.tagline}
          </p>
        </div>
      </section>
    </>
  )
}
