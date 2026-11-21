import { ArrowUpRight, Gift } from 'lucide-react'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import ReferralForm from '@/app/components/referral/ReferralForm'
import { getRequestTranslations } from '@/lib/serverLocale'
import type { Translations } from '@/lib/LocaleContext'

export default async function ReferralProgrammePage() {
  const t = await getRequestTranslations()

  return (
    <main>
      <ReferralProgramSection content={t.home.referralProgram} />
    </main>
  )
}

function ReferralProgramSection({
  content,
}: {
  content: Translations['home']['referralProgram']
}) {
  const landing = content.landing
  const formContent = content.form

  return (
    <>
    <section
      aria-labelledby="referral-landing-title"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 text-slate-900 sm:px-6 lg:px-10 lg:py-16 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-700/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
            {landing.badge}
          </p>
          <h1 id="referral-landing-title" className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {landing.titlePrefix}
            <span className="block text-[#087a61]">{landing.titleHighlight}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {landing.description}
          </p>
        </div>

        <aside className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-sm sm:p-6">
          <p className="rounded-2xl border-l-2 border-amber-500 bg-[#fff3df] px-4 py-3 text-sm font-semibold leading-6 text-amber-950">
            {landing.earningsNote}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {landing.benefits.map((benefit, index) => (
              <li key={benefit} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 p-3 text-sm font-semibold text-slate-700">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black ${index === 0 ? 'bg-emerald-100 text-emerald-800' : index === 1 ? 'bg-sky-100 text-sky-800' : 'bg-amber-100 text-amber-800'}`} aria-hidden="true">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <a
            href="#referral-program"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {formContent.submit}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>

    <TrustRibbon />

    <section
      id="referral-program"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="referral-program-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs">
            {content.eyebrow}
          </p>
          <h2 id="referral-program-title" className="mt-5 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <ol className="mt-8 space-y-3 sm:mt-10">
            {content.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl bg-white/70 p-4 sm:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-black text-amber-800">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-slate-950">{step.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex gap-3 rounded-2xl bg-white/70 p-4">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">
              <span className="font-bold text-slate-950">{content.rewardNoteTitle} </span>
              {content.rewardNote}
            </p>
          </div>
        </div>

        <ReferralForm content={formContent} />
      </div>
    </section>

    <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="referral-process-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-800/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-800">
            {landing.processEyebrow}
          </p>
          <h2 id="referral-process-title" className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
            {landing.processTitle}
          </h2>
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {landing.processSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm sm:p-6">
              <span className="font-mono text-xs font-bold tracking-[0.15em] text-emerald-700">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-base font-extrabold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="referral-earnings-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <header>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-700/15 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700">
              {landing.earningsEyebrow}
            </p>
            <h2 id="referral-earnings-title" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {landing.earningsTitle}
            </h2>
          </header>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:pb-1">{landing.earningsDescription}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/80 border-l-4 border-l-[#b8d8ec] bg-white/80 p-5 shadow-sm sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{landing.basicTitle}</p>
            <p className="mt-2 text-3xl font-black text-[#087a61]">
              {landing.basicRate}<span className="ml-1 text-sm font-bold text-slate-500">{landing.perKilowatt}</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{landing.basicDescription}</p>
            <div className="mt-4 space-y-2">
              {landing.rewardTiers.map((tier) => (
                <div key={tier.systemSize} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white/80 px-3 py-2.5 text-sm">
                  <span className="text-slate-600">{tier.systemSize}</span>
                  <strong className="text-[#087a61]">{tier.basicReward}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/80 border-l-4 border-l-[#c5dfc2] bg-[linear-gradient(135deg,#e7f2eb_0%,#ffffff_55%,#e8e7f8_100%)] p-5 text-slate-900 shadow-sm sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">{landing.guidedTitle}</p>
                <p className="mt-2 text-3xl font-black text-[#087a61]">
                  {landing.guidedRate}<span className="ml-1 text-sm font-bold text-slate-500">{landing.perKilowatt}</span>
                </p>
              </div>
              <span className="rounded-full bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-slate-900">
                {landing.topRateBadge}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{landing.guidedDescription}</p>
            <ul className="mt-4 space-y-2 text-xs leading-5 text-slate-700 sm:text-sm">
              {landing.guidanceTasks.map((task) => (
                <li key={task} className="flex gap-2 rounded-2xl bg-white/70 p-3">
                  <span className="text-emerald-700" aria-hidden="true">✓</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-bold text-emerald-900">{landing.guidedBonus}</p>
            <div className="mt-4 space-y-2">
              {landing.rewardTiers.map((tier) => (
                <div key={tier.systemSize} className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-900/10 bg-white/80 px-3 py-2.5 text-sm">
                  <span className="text-slate-600">{tier.systemSize}</span>
                  <strong className="text-emerald-900">{tier.guidedReward}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="mt-5 flex flex-col gap-3 rounded-2xl border border-amber-300 bg-[#fff3df] p-5 text-amber-950 sm:flex-row sm:items-center">
          <p className="text-sm leading-6">
            <strong>{landing.guidanceNoteTitle} </strong>
            {landing.guidanceNote}
          </p>
        </aside>
        <p className="mt-4 border-l-2 border-amber-500 pl-4 text-xs leading-5 text-slate-600 sm:text-sm">{landing.termsNotice}</p>
      </div>
    </section>

    <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 sm:py-14" aria-labelledby="referral-faq-title">
      <div className="mx-auto max-w-7xl">
        <p className="inline-flex w-fit rounded-full border border-[#075da8]/15 bg-[#eaf3fc] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#075da8]">
          {landing.faqEyebrow}
        </p>
        <h2 id="referral-faq-title" className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          {landing.faqTitle}
        </h2>
        <dl className="mt-7 grid gap-4 sm:grid-cols-3">
          {landing.faqs.map((faq, index) => (
            <div key={faq.question} className={`h-full rounded-2xl border border-[#d1e2f2] border-l-4 ${index === 0 ? 'border-l-[#b8d7ec]' : index === 1 ? 'border-l-[#c5dfc2]' : 'border-l-[#efd9ad]'} bg-white p-5 shadow-sm sm:p-6`}>
              <dt className="font-bold leading-6 text-slate-950">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-center text-xs text-slate-500">{landing.trustNote}</p>
      </div>
    </section>
    </>
  )
}
