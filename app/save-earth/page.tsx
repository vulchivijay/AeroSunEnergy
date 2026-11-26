import Link from 'next/link'
import { getRequestTranslations } from '@/lib/serverLocale'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

type DocumentaryBlock =
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'rule' }

type DocumentarySection = {
  heading: { text: string; id: string }
  blocks: DocumentaryBlock[]
}

function renderBlocks(blocks: DocumentaryBlock[]) {
  return blocks.map((block, index) => {
    if (block.type === 'heading') {
      if (block.level === 2) {
        return (
          <h3
            key={block.id}
            id={block.id}
            className="mt-9 scroll-mt-28 border-b border-slate-200 pb-3 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug"
          >
            {block.text}
          </h3>
        )
      }
      return (
        <h4
          key={block.id}
          id={block.id}
          className="mt-7 scroll-mt-28 text-[#137c63] text-lg font-semibold tracking-normal leading-snug"
        >
          {block.text}
        </h4>
      )
    }

    if (block.type === 'paragraph') {
      return (
        <p key={`paragraph-${index}`} className="mt-4 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {block.text}
        </p>
      )
    }

    if (block.type === 'list') {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag
          key={`list-${index}`}
          className={`mt-4 space-y-2.5 pl-6 text-base leading-7 text-slate-600 marker:font-bold marker:text-[#137c63] ${
            block.ordered ? 'list-decimal' : 'list-disc'
          } tracking-normal`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`} className="pl-1">
              {item}
            </li>
          ))}
        </ListTag>
      )
    }

    if (block.type === 'table') {
      return (
        <div key={`table-${index}`} className="my-7 overflow-hidden rounded-xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-emerald-100 text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
              <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th key={headerIndex} scope="col" className="px-5 py-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 bg-white text-slate-700">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-5 py-4 align-top leading-6 tabular-nums">
                        <DigitalNumber value={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    return <hr key={`rule-${index}`} className="my-8 border-slate-200" />
  })
}

export default async function SaveEarthPage() {
  const t = await getRequestTranslations()
  const content = t.saveEarthPage

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#78350f_0%,#b45309_55%,#7c2d12_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_12%,rgba(251,191,36,0.2),transparent_38%),radial-gradient(ellipse_at_12%_95%,rgba(249,115,22,0.15),transparent_36%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-[30rem] w-[30rem] rounded-full border border-slate-700 sm:right-[-8rem]">
          <div className="absolute inset-8 rounded-full border border-slate-700" />
          <div className="absolute inset-16 rounded-full border border-slate-700" />
          <div className="absolute inset-24 rounded-full border border-slate-700" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-200/25 bg-white/10 px-4 py-2 uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
              <span className="shrink-0 h-2 w-2 rounded-full bg-current shadow-sm" />
              {content.heroBadge}
            </div>
            <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-amber-100 text-lg font-semibold tracking-normal leading-snug">
              {content.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-slate-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#documentary"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-amber-950 transition hover:bg-amber-200 tracking-normal"
              >
                {content.exploreDocumentary}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-white transition hover:border-amber-200/60 hover:bg-white/10 tracking-normal"
              >
                {content.connectWithAeroSunEnergy}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="rounded-xl border border-slate-700 bg-white/[0.08] p-5 shadow-sm">
              <div className="flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-xl bg-[linear-gradient(155deg,#7c2d12_0%,#9a3412_58%,#78350f_100%)] p-7">
                <div className="flex items-center justify-between text-xs uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
                  <span>{content.fieldNotes}</span>
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                </div>
                <>
                  <div className="text-white/10 text-xs font-semibold tracking-wide leading-5">
                    <DigitalNumber value={content.heroNumber} />
                  </div>
                  <p className="-mt-5 max-w-[15rem] text-white text-lg font-semibold tracking-normal leading-snug">
                    {content.everyActionMatters}
                  </p>
                </>
                <div className="flex items-end justify-between border-t border-slate-700 pt-5">
                  <span className="max-w-[12rem] text-base leading-5 text-amber-100/90">
                    {content.tagline}
                  </span>
                  <span aria-hidden="true" className="text-3xl text-amber-200">
                    ↗
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />
          </div>
        </div>

        <div className="border-t border-slate-700">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-4 py-5 text-xs uppercase text-amber-100/80 sm:px-6 lg:px-10 text-xs font-semibold tracking-wide leading-5">
            {content.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-10 lg:py-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label={content.contentsAriaLabel}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="border-b border-slate-200 px-5 py-5">
              <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-[#eaf2e9] px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                {content.navigateGuide}
              </p>
              <p className="mt-1 text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.contentsTitle}</p>
            </div>
            <ol className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto p-3">
              {content.documentarySections.map((section, index) => (
                <li key={section.heading.id}>
                  <a
                    href={`#${section.heading.id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-[#eaf2e9] hover:text-[#075e4b]"
                  >
                    <span className="shrink-0 font-mono text-xs font-bold text-emerald-600/70 group-hover:text-emerald-700 tracking-normal tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{section.heading.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-4 hidden px-2 text-slate-500 lg:block text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {content.guideDescription}
          </p>
        </aside>

        <article className="min-w-0 space-y-8">
          <section
            id="documentary"
            className="scroll-mt-28 overflow-hidden rounded-xl border border-amber-200/20 bg-gradient-to-br from-white to-[#f1f2f6] p-6 text-slate-900 shadow-sm sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-300" />
              <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-amber-800/20 bg-white/70 px-4 py-2 uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">
                {content.documentaryLabel}
              </p>
            </div>
            <div className="max-w-3xl">{renderBlocks(content.openingContent as DocumentaryBlock[])}</div>
          </section>

          {content.documentarySections.map((section, index) => (
            <section
              key={section.heading.id}
              id={section.heading.id}
              className={`scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#f1f2f6] to-white' : 'bg-gradient-to-br from-white to-[#f1f2f6]'}`}
            >
              <div
                className={`border-b border-slate-200 px-6 py-7 sm:px-9 sm:py-8 ${
                  index % 2 === 0 ? 'bg-slate-50' : 'bg-[#f8fafc]'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 rounded-full border border-slate-200 bg-white px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                    {content.sectionLabel} {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="font-mono text-sm font-bold text-[#137c63]/60 tracking-normal tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="max-w-4xl text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                  {section.heading.text}
                </h2>
              </div>
              <div className="px-6 py-7 sm:px-9 sm:py-9">{renderBlocks(section.blocks as DocumentaryBlock[])}</div>
            </section>
          ))}

          <footer className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <>
                <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-[#eaf2e9] px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                  {content.footerBadge}
                </p>
                <p className="mt-2 max-w-xl text-slate-900 text-lg font-semibold tracking-normal leading-snug">
                  {content.footerDescription}
                </p>
              </>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#087a61] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] tracking-normal"
              >
                {content.footerLink}
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}
