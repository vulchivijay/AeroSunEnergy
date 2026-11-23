import Link from 'next/link'
import { getRequestTranslations } from '@/lib/serverLocale'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

export default async function CancellationRefundPage() {
  const t = await getRequestTranslations()
  const content = t.legalPages.cancellationRefund

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#102a43_0%,#1d4e89_55%,#137c63_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_12%,rgba(251,191,36,0.2),transparent_36%),radial-gradient(ellipse_at_12%_90%,rgba(14,165,233,0.2),transparent_38%)]" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-100">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {content.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tighter text-white sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              {content.description}
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-700 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-sky-100/80 sm:text-sm">
            {content.headerTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm leading-8 text-slate-700">{content.intro}</p>
          <div className="mt-6 rounded-xl border-l-4 border-emerald-700 bg-[#eaf2e9] p-5">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-emerald-900">{content.commitmentTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{content.commitment}</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-black text-slate-950 sm:text-2xl">{content.definitionsTitle}</h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {content.definitions.map((item) => (
              <div key={item.term} className="rounded-xl bg-slate-50 p-4">
                <dt className="font-bold text-slate-900">{item.term}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-600">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-black text-slate-950 sm:text-2xl">{content.policyTitle}</h2>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h3 className="text-lg font-extrabold text-slate-950">{content.clientCancellationTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{content.clientCancellation}</p>
          </div>

          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
            <h3 className="text-lg font-extrabold text-slate-950">{content.automaticRefundTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{content.automaticRefundIntro}</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
              {content.automaticRefundCases.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <h3 className="text-lg font-extrabold text-slate-950">{content.companyCancellationTitle}</h3>
            <div className="mt-4 space-y-4">
              {content.companyCancellationCases.map((item) => (
                <div key={item.heading} className="rounded-lg bg-white p-4">
                  <h4 className="font-bold text-slate-900">{item.heading}</h4>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{item.description}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    <span className="font-semibold">{content.refundLabel}: </span>{item.refund}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">{content.companyRefundTimeline}</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-black text-slate-950 sm:text-2xl">{content.refundProcessTitle}</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
            {content.refundProcess.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="rounded-xl bg-[#102a43] p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-xl font-black sm:text-2xl">{content.contactTitle}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-200">{content.contactIntro}</p>
          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-bold text-sky-200">{content.emailLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`mailto:${content.email}`}>{content.email}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-sky-200">{content.phoneLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`tel:${content.phone}`}>{content.phone}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-sky-200">{content.websiteLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`https://${content.website}`} target="_blank" rel="noopener noreferrer">{content.website}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-sky-200">{content.addressLabel}</dt>
              <dd className="mt-1 leading-6">{content.address}</dd>
            </div>
          </dl>
          <p className="mt-6 border-t border-slate-700 pt-5 text-sm text-slate-200">
            {content.moreQuestions}{' '}
            <Link href="/contact" className="font-bold text-amber-200 underline underline-offset-4 hover:text-white">
              {content.contactLink}
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
