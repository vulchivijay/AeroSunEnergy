'use client'

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
import { useLocale } from '@/lib/LocaleContext'

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
      <p className={`font-mono text-md font-bold uppercase tracking-[0.2em] ${inverse ? 'text-lime-300' : 'text-emerald-700 '}`}>
        {number} / {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${inverse ? 'text-white' : 'text-slate-950 '}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 ${inverse ? 'text-emerald-50/80' : 'text-slate-600 '}`}>{description}</p>
      )}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-md leading-6">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
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
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-5   sm:p-6">
      <h3 className="mb-4 text-sm font-bold text-slate-950 ">{title}</h3>
      {children}
    </div>
  )
}

export default function ProductCataloguePage() {
  const { t } = useLocale()
  const c = t.productCataloguePage

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900  ">
      <section className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-md font-bold uppercase tracking-[0.2em] text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300" aria-hidden="true" />
            {c.hero.badge}
          </p>
          <h1 className="mt-7 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-[0.045em] sm:text-6xl lg:text-7xl">
            {c.hero.title}
            <span className="mt-2 block text-emerald-300">{c.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.22em] text-emerald-100/75 sm:text-xl">
            {c.hero.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
            {c.hero.description}
          </p>
          <a
            href="/product-catalogue.pdf"
            download="product-catalogue.pdf"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {c.hero.downloadLabel}
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.hero.audiences.map(({ label, description }, index) => {
              const Icon = [Sun, Building2, Tractor, Zap][index]
              return (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="h-5 w-5 text-lime-300" aria-hidden="true" />
                  <p className="mt-4 text-md font-bold uppercase tracking-[0.16em] text-emerald-100/60">{label}</p>
                  <p className="mt-1 text-md font-semibold text-white">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:px-10">
        <section>
          <SectionHeading
            number="01"
            eyebrow={c.residential.eyebrow}
            title={c.residential.title}
            description={c.residential.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title={c.residential.suitableForLabel}><BulletList items={c.residential.suitableFor} /></DetailCard>
            <DetailCard title={c.residential.systemOptionsLabel}>
              <div className="space-y-4 text-md leading-6 text-slate-700 ">
                {c.residential.systemOptions.map(({ label, description }) => (
                  <p key={label}><strong className="text-slate-950 ">{label}</strong> {description}</p>
                ))}
              </div>
            </DetailCard>
            <DetailCard title={c.residential.benefitsLabel}><BulletList items={c.residential.benefits} /></DetailCard>
            <DetailCard title={c.residential.customisationLabel}>
              <p className="text-md leading-6 text-slate-700 ">
                {c.residential.customisation}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.residential.tagline}
          </p>
        </section>

        <section>
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
                  <li key={step} className="flex gap-3 text-md leading-6 text-slate-700 ">
                    <span className="font-mono text-md font-bold text-emerald-700 ">{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.commercial.tagline}
          </p>
        </section>

        <section>
          <SectionHeading
            number="03"
            eyebrow={c.agricultural.eyebrow}
            title={c.agricultural.title}
            description={c.agricultural.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title={c.agricultural.applicationsLabel}><BulletList items={c.agricultural.applications} /></DetailCard>
            <DetailCard title={c.agricultural.configurationsLabel}>
              <div className="space-y-4 text-md leading-6 text-slate-700 ">
                {c.agricultural.configurations.map(({ label, description }) => (
                  <p key={label}><strong className="text-slate-950 ">{label}</strong> {description}</p>
                ))}
              </div>
            </DetailCard>
            <DetailCard title={c.agricultural.benefitsLabel}><BulletList items={c.agricultural.benefits} /></DetailCard>
            <DetailCard title={c.agricultural.considerationsLabel}>
              <p className="text-md leading-6 text-slate-700 ">
                {c.agricultural.considerations}
              </p>
              <p className="mt-4 text-md leading-6 text-slate-700 ">
                {c.agricultural.subsidyNote}
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.agricultural.tagline}
          </p>
        </section>

        <section>
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
              <p className="mb-3 text-md leading-6 text-slate-700 ">{c.offGrid.sizingIntro}</p>
              <BulletList items={c.offGrid.designFactors} />
            </DetailCard>
          </div>
          <div className="mt-5">
            <DetailCard title={c.offGrid.benefitsLabel}>
              <BulletList items={c.offGrid.benefits} />
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.offGrid.tagline}
          </p>
        </section>

        <section>
          <SectionHeading
            number="05"
            eyebrow={c.battery.eyebrow}
            title={c.battery.title}
            description={c.battery.description}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard title={c.battery.applicationsLabel}><BulletList items={c.battery.applications} /></DetailCard>
            <DetailCard title={c.battery.optionsLabel}>
              <p className="text-md leading-6 text-slate-700 ">
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
                  <p key={item} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700  ">
                    <span className="font-mono text-md font-bold text-emerald-700 ">{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </p>
                ))}
              </div>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.battery.tagline}
          </p>
        </section>

        <section className="rounded-[2rem] bg-[#14372f] p-6 text-white sm:p-10">
          <SectionHeading
            number="06"
            eyebrow={c.wind.eyebrow}
            title={c.wind.title}
            description={c.wind.description}
            inverse
          />
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-200/20 bg-lime-200/10 px-5 py-3">
            <Wind className="h-5 w-5 text-lime-300" aria-hidden="true" />
            <span className="text-md font-bold uppercase tracking-[0.16em] text-emerald-100/70">{c.wind.developmentRangeLabel}</span>
            <span className="font-mono text-lg font-bold text-lime-300">100 W – 10 kW</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="mb-4 text-sm font-bold">{c.wind.applicationsLabel}</h3>
              <BulletList items={c.wind.applications} />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="mb-4 text-sm font-bold">{c.wind.focusLabel}</h3>
              <BulletList items={c.wind.focus} />
            </div>
          </div>
          <div className="mt-5 rounded-3xl border border-lime-200/20 bg-black/10 p-6 sm:p-8">
            <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">{c.wind.projectLabel}</p>
            <h3 className="mt-3 text-2xl font-black sm:text-3xl">{c.wind.productName}</h3>
            <p className="mt-2 text-md text-emerald-100/75">{c.wind.configurationLabel}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.wind.configuration.map((item) => (
                <p key={item} className="flex gap-3 text-md leading-6 text-emerald-50">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-t border-white/15 pt-5 text-md leading-6 text-emerald-100/80">
              <strong className="text-white">{c.wind.statusLabel}</strong>{' '}
              {c.wind.statusTemplate.replace('{status}', c.wind.status)}
            </p>
          </div>
          <p className="mt-6 font-semibold italic text-lime-300">
            {c.wind.tagline}
          </p>
        </section>

        <section>
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
          <p className="mt-5 rounded-2xl border border-amber-300/50 bg-amber-50 px-5 py-4 text-md leading-6 text-amber-950   ">
            {c.hybrid.caveat}
          </p>
          <p className="mt-5 font-semibold italic text-emerald-800 ">
            {c.hybrid.tagline}
          </p>
        </section>

        <section>
          <SectionHeading
            number="08"
            eyebrow={c.consultation.eyebrow}
            title={c.consultation.title}
            description={c.consultation.description}
          />
          <DetailCard title={c.consultation.servicesLabel}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {c.consultation.services.map((service, index) => (
                <p key={service} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700  ">
                  <span className="font-mono text-md font-bold text-emerald-700 ">{String(index + 1).padStart(2, '0')}</span>
                  {service}
                </p>
              ))}
            </div>
          </DetailCard>
          <h3 className="mb-5 mt-8 text-xl font-bold text-slate-950 ">{c.consultation.processLabel}</h3>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.consultation.process.map(({ title, detail }, index) => (
              <li key={title} className="rounded-2xl border border-emerald-900/10 bg-white p-5  ">
                <span className="font-mono text-md font-bold text-emerald-700 ">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="mt-3 font-bold text-slate-950 ">{title}</h4>
                <p className="mt-2 text-md leading-6 text-slate-600 ">{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-emerald-900/10 bg-white p-6   sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading
              number="09"
              eyebrow={c.whyChoose.eyebrow}
              title={c.whyChoose.title}
            />
            <p className="text-md leading-6 text-slate-600 ">
              {c.whyChoose.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.whyChoose.reasons.map((reason) => (
              <p key={reason} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700  ">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                {reason}
              </p>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white  ">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#14372f] p-7 text-white sm:p-10">
              <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">10 / {c.contact.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{c.contact.title}</h2>
              <p className="mt-4 text-md leading-6 text-emerald-50/85">
                {c.contact.description}
              </p>
              <p className="mt-5 text-lg font-semibold italic text-emerald-100">{c.contact.tagline}</p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-xl font-bold text-slate-950 ">{c.contact.company}</h3>
              <p className="flex gap-3 text-md leading-6 text-slate-600 ">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-700 " aria-hidden="true" />
                {c.contact.address}
              </p>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  " href="https://aerosunenergy.in/">
                <Globe2 className="h-4 w-4 text-emerald-700 " aria-hidden="true" />
                aerosunenergy.in
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  " href="mailto:customercare@aerosunenergy.in">
                <Mail className="h-4 w-4 text-emerald-700 " aria-hidden="true" />
                {c.contact.email}
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  " href="tel:+918099181075">
                <Phone className="h-4 w-4 text-emerald-700 " aria-hidden="true" />
                {c.contact.phone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-md font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                {c.contact.action}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <p className="rounded-2xl border border-slate-300 bg-slate-100 px-5 py-4 text-md leading-5 text-slate-600   ">
          {c.disclaimer}
        </p>
      </div>
    </main>
  )
}
