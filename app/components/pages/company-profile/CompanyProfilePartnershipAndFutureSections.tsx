import type { Translations } from '@/lib/LocaleContext';

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? "border-amber-300/20 bg-white/[0.08] text-amber-200" : " border-slate-200 bg-white/75 text-teal-800 "} text-xs font-semibold tracking-wide leading-5`}
      >
        {number} / {eyebrow}
      </p>
      <h2
        className={`mt-4 ${inverse ? "text-white" : "text-[#152b29]"} text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 ${inverse ? "text-indigo-100/90" : " text-slate-600 "} text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CompanyProfilePartnershipAndFutureSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;

  const reasonsToWorkWithUs = cp.reasonsToWorkWithUs;

  const futurePriorities = cp.futurePriorities;
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="11"
            eyebrow={cp.whyWorkEyebrow}
            title={cp.whyWorkTitle}
            description={cp.whyWorkDescription}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasonsToWorkWithUs.map((reason) => (
              <div key={reason} className="p-2 text-base leading-7 text-slate-700">
                {reason}
              </div>
                  ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="12"
            eyebrow={cp.futureEyebrow}
            title={cp.futureTitle}
            description={cp.futureDescription}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futurePriorities.map((priority, index) => (
              <div
                key={priority}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {priority}
                </p>
              </div>
                  ))}
          </div>
        </div>
      </section>
    </>
  )
}
