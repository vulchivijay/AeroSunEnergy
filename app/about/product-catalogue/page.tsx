import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Download,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Sun,
  Tractor,
  Wind,
  Zap,
} from 'lucide-react'
import { getRequestTranslations } from '@/lib/serverLocale'

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
      <p className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? 'border-amber-300/20 bg-white/[0.08] text-amber-200' : ' border-slate-200 bg-white/75 text-teal-800    '} text-xs font-semibold tracking-wide leading-5`}>
        {number} / {eyebrow}
      </p>
      <h2 className={`mt-4 ${inverse ? 'text-white' : 'text-[#152b29]'} text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${inverse ? 'text-indigo-100/90' : ' text-slate-600      '}      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}>{description}</p>
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

export default async function ProductCataloguePage() {
  const t = await getRequestTranslations()
  const c = t.productCataloguePage

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(99,102,241,0.08),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(56,189,248,0.1),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63]    text-xs font-semibold tracking-wide leading-5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            {c.hero.badge}
          </p>
          <h1 className="mt-6 max-w-5xl text-[#152b29] text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
            {c.hero.title}
            <span className="mt-2 block text-[#137c63]">{c.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 uppercase text-slate-600    text-xs font-semibold tracking-wide leading-5">
            {c.hero.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                  <p className="mt-4  uppercase text-[#137c63]    text-xs font-semibold tracking-wide leading-5">{label}</p>
                  <p className="mt-1 text-[#152b29]      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{description}</p>
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
              <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.residential.customisation}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.residential.tagline}
          </p>
        </div>
      </section>

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
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
              <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.agricultural.considerations}
              </p>
              <p className="mt-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {c.agricultural.subsidyNote}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.agricultural.tagline}
          </p>
        </div>
      </section>

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
              <p className="mb-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{c.offGrid.sizingIntro}</p>
              <BulletList items={c.offGrid.designFactors} />
            </DetailCard>
          </div>
          <div className="mt-5">
            <DetailCard title={c.offGrid.benefitsLabel}>
              <BulletList items={c.offGrid.benefits} />
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
              <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                  <p key={item} className="flex gap-3 rounded-xl bg-[#f7fbf8] p-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </p>
                ))}
              </div>
            </DetailCard>
          </div>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.battery.tagline}
          </p>
        </div>
      </section>

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
            <p className="inline-flex w-fit rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2  uppercase text-amber-800    text-xs font-semibold tracking-wide leading-5">{c.wind.projectLabel}</p>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.wind.productName}</h3>
            <p className="mt-2 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{c.wind.configurationLabel}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.wind.configuration.map((item) => (
                <p key={item} className="flex gap-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-t border-slate-200 pt-5 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              <strong className="text-slate-950">{c.wind.statusLabel}</strong>{' '}
              {c.wind.statusTemplate.replace('{status}', c.wind.status)}
            </p>
          </div>
          <p className="mt-6 italic text-amber-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
          <p className="mt-5 rounded-xl border border-slate-200 bg-[#eaf2e9] px-5 py-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.hybrid.caveat}
          </p>
          <p className="mt-5 border-l-2 border-amber-500 pl-4 italic text-teal-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.hybrid.tagline}
          </p>
        </div>
      </section>

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
                <p key={service} className="flex gap-3 rounded-xl bg-[#f7fbf8] p-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{detail}</p>
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
          <p className="text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {c.whyChoose.description}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {c.whyChoose.reasons.map((reason) => (
              <p key={reason} className="flex gap-3 rounded-xl bg-white p-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[linear-gradient(145deg,#581c87_0%,#7e22ce_55%,#a21caf_100%)] p-7 text-white sm:p-10">
                <p className="inline-flex w-fit rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2  uppercase text-amber-200    text-xs font-semibold tracking-wide leading-5">10 / {c.contact.eyebrow}</p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{c.contact.title}</h2>
                <p className="mt-4 text-indigo-100/90      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {c.contact.description}
                </p>
                <p className="mt-5 italic text-indigo-100    text-lg font-semibold tracking-normal leading-snug">{c.contact.tagline}</p>
              </div>
              <div className="space-y-5 p-7 sm:p-10">
                <h3 className=" text-[#112c2a] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{c.contact.company}</h3>
                <p className="flex gap-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                  {c.contact.address}
                </p>
                <a className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-teal-800" href="https://aerosunenergy.in/">
                  <Globe2 className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  aerosunenergy.in
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Mail className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  {c.contact.email}
                </div>
                <a className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-teal-800" href="tel:+918099181075">
                  <Phone className="h-4 w-4 text-teal-700" aria-hidden="true" />
                  {c.contact.phone}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-800 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 tracking-normal"
                >
                  {c.contact.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <p className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {c.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
