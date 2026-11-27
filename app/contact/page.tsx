import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { OptimizedImage } from '@/app/components/ui'
import { SolarEstimation } from '@/app/components/forms/SolarEstimation'
import ContactForm from '@/app/components/forms/ContactForm'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { getRequestTranslations } from '@/lib/serverLocale'

const channelIconComponents: Record<string, ReactNode> = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m4 7 8 6 8-6" />
    </svg>
  ),
  website: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  quote: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  ),
}
export default async function Contact() {
  const t = await getRequestTranslations()
  const channelIconIds = t.componentData.contact.channelIconIds
  const c = t.contact
  const footer = t.footer
  const navbar = t.navbar
  const referralProgram = t.home.referralProgram

  const contactUs = c.contactUs
  const contactCardTitle = c.contactCardTitle
  const faqHeader = c.faqHeader
  const faqTitle = c.faqTitle
  const connectionPrompt = c.connectionPrompt
  const projectStory = c.projectStory
  const stepIntroLabel = c.stepIntroLabel
  const stepIntroTitle = c.stepIntroTitle
  const stepIntroCopy = c.stepIntroCopy
  const submitEnquiry = c.submitEnquiry
  const faqIntro = c.faqIntro
  const location = c.location
  const energyBadge = c.energyBadge
  const energyBadgeAccent = c.energyBadgeAccent
  const energyBadgeSuffix = c.energyBadgeSuffix

  const contactHighlights = c.highlights

  const contactSteps = c.steps.map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))

  const channels = [
    {
      label: c.channels[1].label,
      value: c.channels[1].value,
      href: footer.website.startsWith('http') ? footer.website : `https://${footer.website}`,
      icon: channelIconComponents[channelIconIds[1]],
    },
    {
      label: c.channels[3].label,
      value: c.channels[3].value,
      href: '/finance',
      icon: channelIconComponents[channelIconIds[2]],
    },
  ]

  return (
    <main className="overflow-x-clip">
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]overflow-hidden text-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">AeroSun Energy <span className="mx-2 text-amber-600">/</span> {contactUs}</p>
            <span className="hidden uppercase text-slate-500 sm:block text-xs font-semibold tracking-wide leading-5">{location}</span>
          </div>
          <div className="pt-7 pb-12 sm:pt-9 sm:pb-14 lg:pt-11 lg:pb-16" aria-labelledby="contact-form-title">
            <div className="overflow-hidden mx-auto max-w-7xl rounded-xl border border-slate-200">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="bg-[linear-gradient(145deg,#bfdbfe_0%,#ddd6fe_52%,#fbcfe8_100%)] p-6 text-slate-900 sm:p-9">
                  <p className="uppercase text-indigo-900 text-xs font-semibold tracking-wide leading-5">{contactUs}</p>
                  <h2 id="contact-form-title" className="mt-3 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{c.form.title}</h2>
                  <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{c.form.description}</p>
                </div>
                <ContactForm content={c.form} />
              </div>
            </div>
          </div>
          <div className="mb-12 sm:mb-14 lg:mb-16 overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(120deg,#102a43_0%,#1d4e89_55%,#2c698d_100%)] text-white">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center border-b border-slate-700 p-6 sm:p-9 lg:border-b-0 lg:border-r">
                <p className="uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{contactUs}</p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{contactCardTitle}</h2>
                <p className="mt-4 text-sky-100/85 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{connectionPrompt}</p>
              </div>
              <div className="grid grid-cols-2">
                {channels.map((channel, index) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex min-h-36 items-start gap-4 border-b border-slate-700 p-6 transition-colors hover:bg-white/[0.06] sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 text-slate-900 transition-transform group-hover:rotate-[-8deg]">
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-sm font-bold text-amber-200 tracking-normal tabular-nums">0{index + 1}</span>
                      <span className="mt-3 block uppercase text-white/75 text-xs font-semibold tracking-wide leading-5">{channel.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white group-hover:text-amber-200 tracking-normal">{channel.value}</span>
                    </span>
                    <span className="ml-auto text-lg text-amber-200 transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    <span className="sr-only">{t.ui.openLink} {channel.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid min-h-[34rem] overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#dbeafe_0%,#e0f2fe_55%,#ecfdf5_100%)] lg:grid-cols-[1fr_0.92fr]">
            <div
              className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-11 lg:p-14"
            >
              <div className="pointer-events-none absolute -bottom-36 -left-36 h-[28rem] w-[28rem] rounded-full border border-slate-200" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-slate-200" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/60 px-4 py-2 uppercase text-slate-800 text-xs font-semibold tracking-wide leading-5">
                  <span className="shrink-0 h-2 w-2 rounded-full bg-current" />
                  {navbar.startProject}
                </p>
                <h1 className="mt-8 max-w-2xl text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                  {c.heroTitle}
                </h1>
                <p className="mt-6 max-w-xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {c.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/solar-calculator"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/40 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-white/75 tracking-normal"
                  >
                    {c.estimationButton}
                  </Link>
                </div>
              </div>
              <div className="relative mt-12 flex items-end justify-between gap-4 border-t border-slate-200 pt-4">
                <span className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">{c.badge}</span>
                <span className="text-right text-sm font-bold text-slate-900 tracking-normal">{c.projectBrief}</span>
              </div>
            </div>
            <div
              className="relative min-h-80 overflow-hidden bg-[#102a43] lg:min-h-full"
            >
              <OptimizedImage
                src="/images/slider/slider-7.webp"
                alt={c.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/75 via-transparent to-[#102a43]/10" />
              <div className="absolute right-8 top-8 flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-amber-300 text-center text-xs uppercase text-slate-900 shadow-sm sm:right-12 sm:top-12 sm:h-36 sm:w-36 text-xs font-semibold tracking-wide leading-5">
                {energyBadge} <span className="mx-1 text-[#137c63]">+</span> {energyBadgeAccent}<br />{energyBadgeSuffix}
              </div>
              <div className="absolute bottom-7 left-7 max-w-xs border-l-2 border-amber-300 pl-4 text-sm font-semibold leading-7 text-white sm:bottom-10 sm:left-10 tracking-normal">
                {projectStory}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {contactHighlights.map((item, index) => (
                <article key={item.label} className="flex gap-4 border-t-2 border-[#137c63]/25 bg-white p-5">
                  <span className="font-mono text-sm font-bold text-[#137c63] tracking-normal tabular-nums">0{index + 1}</span>
                  <div>
                    <p className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">{item.label}</p>
                    <p className="mt-2 text-slate-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <SolarEstimation showGstGuide={false} />

        <div className="overflow-hidden bg-[linear-gradient(135deg,#dbeafe_0%,#e0f2fe_55%,#ecfdf5_100%)] text-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-xl border border-slate-200">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{stepIntroLabel}</p>
                <h2 className="mt-4 max-w-xl text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{stepIntroTitle}</h2>
              </div>
              <div className="flex flex-col justify-between gap-5 border-t border-slate-200 pt-5 sm:flex-row sm:items-end">
                <p className="max-w-md text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{stepIntroCopy}</p>
                <Link href="#contact-form-title" className="inline-flex w-fit items-center gap-3 text-sm font-bold text-[#087a61] transition hover:gap-4 tracking-normal">
                  {submitEnquiry} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 lg:grid-cols-3">
              {contactSteps.map((step) => (
                <article key={step.title} className="bg-white p-6 sm:p-8">
                  <span className="font-mono text-sm font-bold text-[#137c63] tracking-normal tabular-nums">{step.number} <span className="text-slate-500">/ 03</span></span>
                  <h3 className="mt-8 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{step.title}</h3>
                  <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustRibbon />

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16" aria-labelledby="contact-referral-title">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{referralProgram.eyebrow}</p>
            <h2 id="contact-referral-title" className="mt-2 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {referralProgram.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{referralProgram.description}</p>
          </div>
          <Link
            href="/referral-programme"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#087a61] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal"
          >
            {referralProgram.form.title}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section
        className="relative isolate bg-[#f3f6f3] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
        aria-labelledby="contact-faq-title"
      >
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#103c3b] p-7 text-white sm:p-10 lg:sticky lg:top-24 lg:self-start">
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[#a8d7a2]/20 blur-3xl" aria-hidden="true" />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 uppercase text-[#d5f0cf] text-xs font-semibold tracking-wide leading-5">
              <span className="h-2 w-2 rounded-full bg-[#a8d7a2]" aria-hidden="true" />
              {faqHeader}
            </div>
            <h2 id="contact-faq-title" className="mt-7 max-w-md text-3xl font-semibold !tracking-tight leading-tight sm:text-4xl">
              {faqTitle}
            </h2>
            <p className="mt-5 max-w-md text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {faqIntro}
            </p>
            <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5 text-[#d5f0cf]">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">AeroSun Energy</span>
            </div>
          </div>

          <div className="space-y-3">
            {t.solarFaqs.items.map((faq, index) => (
              <details
                key={faq.question}
                name="contact-solar-faq"
                className="group overflow-hidden rounded-2xl border border-[#dce5df] bg-white shadow-[0_8px_24px_rgba(16,60,59,0.04)] transition-colors open:border-[#9fc6ae] open:bg-[#fcfefc]"
              >
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-3 px-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#087a61] [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf5ed] font-mono text-xs font-semibold text-[#087a61] tracking-normal" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#173c3b] text-sm font-semibold tracking-normal leading-6 sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce5df] text-[#087a61] transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeWidth="2" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="ml-[4.25rem] border-t border-[#e7eee8] px-4 py-5 sm:ml-[5.5rem] sm:px-6">
                  <p className="max-w-3xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
