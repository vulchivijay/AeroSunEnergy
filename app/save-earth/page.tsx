'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

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
            className="mt-9 scroll-mt-28 border-b border-emerald-100 pb-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl"
          >
            {block.text}
          </h3>
        )
      }
      return (
        <h4
          key={block.id}
          id={block.id}
          className="mt-7 scroll-mt-28 text-lg font-bold tracking-tight text-emerald-900 sm:text-xl"
        >
          {block.text}
        </h4>
      )
    }

    if (block.type === 'paragraph') {
      return (
        <p key={`paragraph-${index}`} className="mt-4 text-md leading-7 text-slate-600 sm:text-sm sm:leading-8">
          {block.text}
        </p>
      )
    }

    if (block.type === 'list') {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag
          key={`list-${index}`}
          className={`mt-4 space-y-2.5 pl-6 text-md leading-7 text-slate-600 marker:font-bold marker:text-emerald-600 sm:text-sm sm:leading-8 ${
            block.ordered ? 'list-decimal' : 'list-disc'
          }`}
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
        <div key={`table-${index}`} className="my-7 overflow-hidden rounded-2xl border border-emerald-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-emerald-100 text-left text-md">
              <thead className="bg-emerald-50 text-md font-bold uppercase tracking-wider text-emerald-900">
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th key={headerIndex} scope="col" className="px-5 py-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-emerald-50/50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-5 py-4 align-top leading-6">
                        {cell}
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

export default function SaveEarthPage() {
  const { t } = useLocale()
  const content = t.saveEarthPage

  return (
    <main className="min-h-screen bg-[#f6f7f1] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#10251f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_12%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_12%_95%,rgba(132,204,22,0.12),transparent_36%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/10 sm:right-[-8rem]">
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/10" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.9)]" />
              {content.heroBadge}
            </div>
            <h1 className="mt-8 text-5xl font-black uppercase tracking-[0.07em] text-white sm:text-7xl lg:text-8xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-emerald-100 sm:text-4xl">
              {content.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {content.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#documentary"
                className="rounded-full bg-lime-300 px-6 py-3 text-md font-bold text-emerald-950 shadow-lg shadow-lime-950/20 transition hover:bg-lime-200"
              >
                {content.exploreDocumentary}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-md font-bold text-white transition hover:border-emerald-200/60 hover:bg-white/5"
              >
                {content.connectWithAeroSunEnergy}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[linear-gradient(155deg,#173b31_0%,#0b211b_58%,#152b24_100%)] p-7">
                <div className="flex items-center justify-between text-[12px] font-bold uppercase tracking-[0.22em] text-emerald-200">
                  <span>{content.fieldNotes}</span>
                  <span className="h-2 w-2 rounded-full bg-lime-300" />
                </div>
                <div>
                  <div className="text-[clamp(7rem,20vw,11rem)] font-black leading-[0.8] tracking-[-0.1em] text-white/10">
                    {content.heroNumber}
                  </div>
                  <p className="-mt-5 max-w-[15rem] text-3xl font-extrabold leading-tight tracking-tight text-white">
                    {content.everyActionMatters}
                  </p>
                </div>
                <div className="flex items-end justify-between border-t border-white/15 pt-5">
                  <span className="max-w-[12rem] text-md leading-5 text-emerald-100/80">
                    {content.tagline}
                  </span>
                  <span aria-hidden="true" className="text-3xl text-lime-300">
                    ↗
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-100/70 sm:px-8 lg:px-10">
            {content.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:px-10">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label={content.contentsAriaLabel}
            className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.4)]"
          >
            <div className="border-b border-slate-100 px-5 py-5">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                {content.navigateGuide}
              </p>
              <p className="mt-1 text-md font-semibold text-slate-900">{content.contentsTitle}</p>
            </div>
            <ol className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto p-3">
              {content.documentarySections.map((section, index) => (
                <li key={section.heading.id}>
                  <a
                    href={`#${section.heading.id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900"
                  >
                    <span className="shrink-0 font-mono text-[12px] font-bold text-emerald-600/70 group-hover:text-emerald-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{section.heading.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-4 hidden px-2 text-md leading-6 text-slate-500 lg:block">
            {content.guideDescription}
          </p>
        </aside>

        <article className="min-w-0 space-y-8">
          <section
            id="documentary"
            className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(135deg,#10251f_0%,#15372d_100%)] p-6 text-white shadow-[0_24px_70px_-45px_rgba(16,37,31,0.8)] sm:p-9"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-300" />
              <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-lime-200">
                {content.documentaryLabel}
              </p>
            </div>
            <div className="max-w-3xl">{renderBlocks(content.openingContent as DocumentaryBlock[])}</div>
          </section>

          {content.documentarySections.map((section, index) => (
            <section
              key={section.heading.id}
              id={section.heading.id}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_65px_-48px_rgba(15,23,42,0.42)]"
            >
              <div
                className={`border-b border-slate-100 px-6 py-7 sm:px-9 sm:py-8 ${
                  index % 2 === 0 ? 'bg-emerald-50/70' : 'bg-[#f3f6ed]'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1 text-[12px] font-extrabold uppercase tracking-[0.18em] text-emerald-800">
                    {content.sectionLabel} {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-emerald-900/10" />
                  <span className="font-mono text-md font-bold text-emerald-900/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="max-w-4xl text-2xl font-black leading-tight tracking-[0.04em] text-slate-950 sm:text-3xl lg:text-4xl">
                  {section.heading.text}
                </h2>
              </div>
              <div className="px-6 py-7 sm:px-9 sm:py-9">{renderBlocks(section.blocks as DocumentaryBlock[])}</div>
            </section>
          ))}

          <footer className="rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-[0_20px_65px_-48px_rgba(15,23,42,0.42)] sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                  {content.footerBadge}
                </p>
                <p className="mt-2 max-w-xl text-lg font-bold leading-7 text-slate-900">
                  {content.footerDescription}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-md font-bold text-white transition hover:bg-emerald-700"
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
