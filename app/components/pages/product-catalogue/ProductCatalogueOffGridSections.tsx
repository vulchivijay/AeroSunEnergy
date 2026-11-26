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

export function ProductCatalogueOffGridSections({ t }: { t: Translations }) {
  const c = t.productCataloguePage
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="04"
                  eyebrow={c.offGrid.eyebrow}
                  title={c.offGrid.title}
                  description={c.offGrid.description}
                />
                <div className="grid gap-5 lg:grid-cols-3">
                  <DetailCard title={c.offGrid.suitableForLabel}><BulletList items={c.offGrid.suitableFor} /></DetailCard>
                  <DetailCard title={c.offGrid.componentsLabel}><BulletList items={c.offGrid.components} /></DetailCard>
                  <DetailCard title={c.offGrid.designLabel}>
                    <p className="mb-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{c.offGrid.sizingIntro}</p>
                    <BulletList items={c.offGrid.designFactors} />
                  </DetailCard>
                </div>
                <div className="mt-5">
                  <DetailCard title={c.offGrid.benefitsLabel}>
                    <BulletList items={c.offGrid.benefits} />
                  </DetailCard>
                </div>
                <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {c.offGrid.tagline}
                </p>
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="05"
                  eyebrow={c.battery.eyebrow}
                  title={c.battery.title}
                  description={c.battery.description}
                />
                <div className="grid gap-5 lg:grid-cols-3">
                  <DetailCard title={c.battery.applicationsLabel}><BulletList items={c.battery.applications} /></DetailCard>
                  <DetailCard title={c.battery.optionsLabel}>
                    <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {c.battery.options}
                    </p>
                  </DetailCard>
                  <DetailCard title={c.battery.benefitsLabel}>
                    <BulletList items={c.battery.benefits} />
                  </DetailCard>
                </div>
                <div className="mt-5">
                  <DetailCard title={c.battery.selectionLabel}>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {c.battery.selection.map((item, index) => (
                        <p key={item} className="flex gap-3 rounded-xl bg-[#f7fbf8] p-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                          {item}
                        </p>
                      ))}
                    </div>
                  </DetailCard>
                </div>
                <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {c.battery.tagline}
                </p>
              </div>
            </section>
    </>
  )
}
