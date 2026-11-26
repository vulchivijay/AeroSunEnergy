import { getRequestTranslations } from '@/lib/serverLocale'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import ProjectStatusFilter from '@/app/components/projects/ProjectStatusFilter'

export default async function ProjectsPage() {
  const t = await getRequestTranslations()
  const projectsPage = t.projectsPage
  const projectCategoriesData = projectsPage.projectCategories
  const projectStepsData = projectsPage.projectSteps
  const labels = projectsPage.labels

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden border-b border-slate-700 bg-linear-to-br from-slate-950/75 via-sky-950/65 to-indigo-950/75 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
          <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
        </div>
        <div className="mx-auto my-6 grid w-[calc(100%-2rem)] max-w-7xl items-center gap-10 rounded-xl border border-slate-200 bg-white/20 px-5 py-14 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:px-8 sm:py-20 lg:my-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-xs uppercase text-emerald-100 text-xs font-semibold tracking-wide leading-5">
              <span className="shrink-0 h-2 w-2 rounded-full bg-current shadow-sm" />
              {labels.badge}
            </div>
            <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {labels.heroTitle}
              <span className="mt-1 block text-emerald-300">{labels.heroTitleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {labels.heroDescription}
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-xl border border-slate-700 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">↗</span>
            <span className="text-base leading-5 text-slate-300">
              {labels.projectFocus}
              <strong className="block text-base font-bold text-white tracking-normal">{labels.projectFocusSteps}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-slate-700">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs uppercase text-emerald-100/60 sm:px-8 lg:px-10 text-xs font-semibold tracking-wide leading-5">
            {labels.projectTypes.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10 lg:py-16">
        <article className="min-w-0">
          <section id="project-approach" className="scroll-mt-28 mb-8 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
              <div>
                <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-emerald-50 px-3 py-1.5 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">{labels.approach}</p>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.approachDescription}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
              {projectStepsData.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-base font-bold text-emerald-700 tracking-normal tabular-nums">0{index + 1}</span>
                  <span className="text-base leading-5 text-slate-600">{step}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="project-categories" className="scroll-mt-28 mb-8 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white shadow-sm">
            <div className="flex items-start gap-4 p-5 sm:p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-base font-bold text-emerald-800 tracking-normal tabular-nums">01</span>
              <div className="min-w-0 flex-1">
                <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.solutions}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {projectCategoriesData.map((project) => (
                    <div key={project.title} className="rounded-xl bg-[#f4f8fc] p-4">
                      <div className={`mb-3 h-1.5 rounded-full bg-linear-to-r ${project.accent}`} aria-hidden="true" />
                      <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{project.title}</h3>
                      <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{project.description}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 tracking-normal">{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
          </section>

          <ProjectStatusFilter content={projectsPage} />

          <p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {labels.contactPrompt}{' '}
            <a href="/auth/dashboard/customer-enquiry" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800 tracking-normal">{labels.contactEnquiryLink}</a>
            {' '}{labels.or}{' '}<a href="/services" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800 tracking-normal">{labels.contactServicesLink}</a>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-emerald-50 px-3 py-1.5 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">{labels.findTopic}</p>
              <p className="mt-1 text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.projectOverview}</p>
            </div>
            <ol className="space-y-1 p-3">
              {[
                ['project-approach', labels.approach],
                ['project-categories', labels.solutions],
                ['project-pipeline', labels.statusOverview],
              ].map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-base leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900">
                    <span className="font-mono font-bold text-emerald-700/70 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <section className="rounded-xl bg-gradient-to-br from-[#f1f2f6] to-white p-5">
            <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">{labels.planningPriorities}</p>
            <ul className="mt-4 space-y-3 text-base leading-6 text-slate-700">
              {labels.planningSteps.map((step) => <li key={step}>{step}</li>)}
            </ul>
          </section>
          <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
            <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">{labels.startConversation}</p>
            <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.startConversationDescription}</p>
            <a href="/auth/dashboard/customer-enquiry" className="mt-4 inline-flex rounded-full bg-[#101c32] px-4 py-2.5 text-base font-bold text-white transition hover:bg-emerald-900 tracking-normal">{labels.requestConsultation}</a>
          </section>
        </aside>
      </div>
    </main>
  )
}
