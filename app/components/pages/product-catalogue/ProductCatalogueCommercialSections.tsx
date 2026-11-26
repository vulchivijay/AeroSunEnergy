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

export function ProductCatalogueCommercialSections({ t }: { t: Translations }) {
  const c = t.productCataloguePage
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="02"
            eyebrow={c.commercial.eyebrow}
            title={c.commercial.title}
            description={c.commercial.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title={c.commercial.suitableForLabel}><BulletList items={c.commercial.suitableFor} /></DetailCard>
            <DetailCard title={c.commercial.solutionsLabel}><BulletList items={c.commercial.solutions} /></DetailCard>
            <DetailCard title={c.commercial.benefitsLabel}><BulletList items={c.commercial.benefits} /></DetailCard>
            <DetailCard title={c.commercial.approachLabel}>
              <ol className="space-y-3">
                {c.commercial.process.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                      ))}
              </ol>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.commercial.tagline}
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="03"
            eyebrow={c.agricultural.eyebrow}
            title={c.agricultural.title}
            description={c.agricultural.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title={c.agricultural.applicationsLabel}><BulletList items={c.agricultural.applications} /></DetailCard>
            <DetailCard title={c.agricultural.configurationsLabel}>
              <div className="space-y-4 text-sm leading-7 text-slate-700">
                {c.agricultural.configurations.map(({ label, description }) => (
                  <p key={label}><strong className="text-slate-950">{label}</strong> {description}</p>
                      ))}
              </div>
            </DetailCard>
            <DetailCard title={c.agricultural.benefitsLabel}><BulletList items={c.agricultural.benefits} /></DetailCard>
            <DetailCard title={c.agricultural.considerationsLabel}>
              <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.agricultural.considerations}
              </p>
              <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.agricultural.subsidyNote}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.agricultural.tagline}
          </p>
        </div>
      </section>
    </>
  )
}
