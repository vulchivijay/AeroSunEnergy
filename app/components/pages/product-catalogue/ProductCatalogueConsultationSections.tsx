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

export function ProductCatalogueConsultationSections({ t }: { t: Translations }) {
  const c = t.productCataloguePage
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="08"
            eyebrow={c.consultation.eyebrow}
            title={c.consultation.title}
            description={c.consultation.description}
          />
          <DetailCard title={c.consultation.servicesLabel}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {c.consultation.services.map((service, index) => (
                <p key={service} className="flex gap-3 rounded-xl bg-[#f7fbf8] p-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  {service}
                </p>
                    ))}
            </div>
          </DetailCard>
          <h3 className="mb-5 mt-8 text-[#112c2a] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.consultation.processLabel}</h3>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.consultation.process.map(({ title, detail }, index) => (
              <li key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="mt-3 text-[#112c2a] text-lg font-semibold tracking-normal leading-snug">{title}</h4>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{detail}</p>
              </li>
                  ))}
          </ol>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="09"
            eyebrow={c.whyChoose.eyebrow}
            title={c.whyChoose.title}
          />
          <p className="text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.whyChoose.description}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {c.whyChoose.reasons.map((reason) => (
              <p key={reason} className="flex gap-3 rounded-xl bg-white p-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                {reason}
              </p>
                  ))}
          </div>
        </div>
      </section>
    </>
  )
}
