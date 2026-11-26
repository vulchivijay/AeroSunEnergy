import type { Translations } from "@/lib/LocaleContext";

type CustomerAgreementCopy = Translations["customerAgreementPage"];

export function CustomerAgreementProcessGuide({
  content,
}: {
  content: CustomerAgreementCopy;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10 lg:py-16">
      <article className="min-w-0">
        <section className="mb-8 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg text-indigo-800">i</span>
            <>
              <p className="uppercase text-indigo-800 text-xs font-semibold tracking-wide leading-5">{content.overview.title}</p>
              <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {content.overview.description}
              </p>
            </>
          </div>
          <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
            {content.overview.cards.map((card, index) => (
              <div key={card.title} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                <span className="font-mono text-base font-bold text-indigo-700 tracking-normal tabular-nums">0{index + 1}</span>
                <span className="text-base leading-5 text-slate-600">
                  <strong className="block text-base text-slate-900">{card.title}</strong>
                  {card.description}
                </span>
              </div>
            ))}
          </div>
          <h2 className="mt-6 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.overview.coreStepsTitle}</h2>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {content.overview.steps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3 text-base leading-5 text-slate-600">
                <span className="font-mono font-bold text-indigo-700 tracking-normal tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="space-y-4">
          {content.sections.map((section, index) => (
            <section
              key={section.title}
              id={`agreement-process-${index + 1}`}
              className={`scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 shadow-sm ${index % 2 === 0 ? "bg-gradient-to-br from-[#f1f2f6] to-white" : "bg-gradient-to-br from-white to-[#f1f2f6]"}`}
            >
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono text-base font-bold text-indigo-800 tracking-normal tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{section.title.replace(/^(?:\d+\.\s*)/, "")}</h2>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.text}</p>
                  <ul className="mt-4 space-y-2.5">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-base leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-indigo-100 via-sky-100 to-transparent" />
            </section>
          ))}
        </div>

        <p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {content.contact.question}{" "}
          <span className="font-bold text-indigo-800 tracking-normal">{content.contact.emailLabel}</span>.
        </p>
      </article>

      <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
        <nav aria-label={content.navigation.ariaLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <p className="uppercase text-indigo-800 text-xs font-semibold tracking-wide leading-5">{content.navigation.findTopic}</p>
            <p className="mt-1 text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.navigation.projectProcess}</p>
          </div>
          <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
            {content.sections.map((section, index) => (
              <li key={section.title}>
                <a href={`#agreement-process-${index + 1}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-base leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                  <span className="font-mono font-bold text-indigo-700/70 tracking-normal tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span>{section.title.replace(/^(?:\d+\.\s*)/, "")}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="#customer-agreement-form" className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-base leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                <span className="font-mono font-bold text-indigo-700/70 tracking-normal tabular-nums">{content.navigation.formMarker}</span>
                <span>{content.navigation.agreementForm}</span>
              </a>
            </li>
          </ol>
        </nav>
        <section className={`rounded-xl p-5 ${content.sections.length % 2 === 0 ? "bg-gradient-to-br from-[#f1f2f6] to-white" : "bg-gradient-to-br from-white to-[#f1f2f6]"}`}>
          <p className="uppercase text-indigo-800 text-xs font-semibold tracking-wide leading-5">{content.beforeAccepting.title}</p>
          <ul className="mt-4 space-y-3 text-base leading-6 text-slate-700">
            {content.beforeAccepting.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </aside>
    </div>
  );
}
