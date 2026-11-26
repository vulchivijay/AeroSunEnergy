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

export function CompanyProfileInnovationSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;

  const innovationFocus = cp.innovationFocus;

  const developmentSteps = cp.developmentSteps;
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="06"
                  eyebrow={cp.innovationEyebrow}
                  title={cp.innovationTitle}
                  description={cp.innovationDescription}
                />
                <p className="rounded-xl border-l-4 border-amber-500 bg-white px-5 py-4 text-slate-600 shadow-sm text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {cp.innovationNote}
                </p>
                <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                  {innovationFocus.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-7 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="07"
                  eyebrow={cp.technologyDevelopmentEyebrow}
                  title={cp.technologyDevelopmentTitle}
                  description={cp.technologyDevelopmentDescription}
                />
                <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {developmentSteps.map((step, index) => (
                    <li
                      key={step}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
    </>
  )
}
