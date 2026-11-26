import { Building2, Download, Sun, Tractor, Zap } from "lucide-react";
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
      <p className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? 'border-amber-300/20 bg-white/[0.08] text-amber-200' : ' border-slate-200 bg-white/75 text-teal-800 '} text-xs font-semibold tracking-wide leading-5`}>
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

export function ProductCatalogueHeroSections({ t }: { t: Translations }) {
  const c = t.productCataloguePage
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(99,102,241,0.08),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(56,189,248,0.1),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            {c.hero.badge}
          </p>
          <h1 className="mt-6 max-w-5xl text-[#152b29] text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
            {c.hero.title}
            <span className="mt-2 block text-[#137c63]">{c.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">
            {c.hero.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.hero.description}
          </p>
          <a
            href="/product-catalogue.pdf"
            download="product-catalogue.pdf"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {c.hero.downloadLabel}
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.hero.audiences.map(({ label, description }, index) => {
                    const Icon = [Sun, Building2, Tractor, Zap][index]
                    return (
                      <div key={label} className="rounded-xl border border-slate-200 bg-white/85 p-5">
                        <Icon className="h-5 w-5 text-[#137c63]" aria-hidden="true" />
                        <p className="mt-4 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{label}</p>
                        <p className="mt-1 text-[#152b29] text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{description}</p>
                      </div>
                    )
                  })}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="01"
            eyebrow={c.residential.eyebrow}
            title={c.residential.title}
            description={c.residential.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title={c.residential.suitableForLabel}><BulletList items={c.residential.suitableFor} /></DetailCard>
            <DetailCard title={c.residential.systemOptionsLabel}>
              <div className="space-y-4 text-sm leading-7 text-slate-700">
                {c.residential.systemOptions.map(({ label, description }) => (
                  <p key={label}><strong className="text-slate-950">{label}</strong> {description}</p>
                      ))}
              </div>
            </DetailCard>
            <DetailCard title={c.residential.benefitsLabel}><BulletList items={c.residential.benefits} /></DetailCard>
            <DetailCard title={c.residential.customisationLabel}>
              <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.residential.customisation}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.residential.tagline}
          </p>
        </div>
      </section>
    </>
  )
}
