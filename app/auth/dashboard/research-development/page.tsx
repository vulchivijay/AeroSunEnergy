"use client";

import { useLocale } from "@/lib/LocaleContext";
import { DashboardCollapsibleSection } from "@/app/components/ui/DashboardCollapsibleSection";
import { createSections, parseMarkdown, type ContentSection, type HeadingBlock } from "./researchMarkdown";
import { InlineContent, MarkdownBlockView } from "./ResearchMarkdownRenderer";

export default function ResearchDevelopmentPage() {
  const { t } = useLocale();
  const copy = t.researchDevelopmentPage.wrapper;
  const inline = copy.inline;
  const blocks = parseMarkdown(copy.content);
  const sourceTitle = blocks.find(
    (block): block is HeadingBlock =>
      block.type === "heading" && block.level === 1,
  );
  const sourceSubtitle = blocks.find(
    (block): block is HeadingBlock =>
      block.type === "heading" && block.level === 2,
  );
  const heroHeadingIds = new Set([sourceTitle?.id, sourceSubtitle?.id]);
  const sections = createSections(
    blocks.filter(
      (block) => block.type !== "heading" || !heroHeadingIds.has(block.id),
    ),
  );
  const navigationSections = sections.filter(
    (section): section is ContentSection & { heading: HeadingBlock } =>
      Boolean(section.heading),
  );

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-[34rem] w-[34rem] rounded-full border border-slate-700 sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-slate-700" />
          <div className="absolute inset-20 rounded-full border border-slate-700" />
          <div className="absolute inset-32 rounded-full border border-slate-700" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-white/70 px-3 py-1.5 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              {copy.text[0]}
            </div>
            <p className="mt-8 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
              {sourceTitle?.text ?? copy.text[1]}
            </p>
            <h1 className="mt-4 max-w-3xl text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {sourceSubtitle?.text ?? copy.text[2]}
            </h1>
            <p className="mt-7 max-w-2xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {copy.text[3]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#research-content"
                className="rounded-full bg-lime-300 px-5 py-3 text-base font-bold text-emerald-950 transition hover:bg-lime-200 tracking-normal"
              >
                {copy.text[4]}
              </a>
              {navigationSections[0]?.heading && (
                <a
                  href={`#${navigationSections[0].heading.id}`}
                  className="rounded-full border border-emerald-800/30 px-5 py-3 text-base font-bold text-emerald-900 transition hover:bg-emerald-50 tracking-normal"
                >
                  {copy.text[5]}
                </a>
              )}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="relative rounded-xl border border-slate-700 bg-[#14372f] p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <p className="inline-flex w-fit rounded-full border border-lime-200/20 bg-white/[0.06] px-3 py-1.5 uppercase text-lime-200 text-xs font-semibold tracking-wide leading-5">
                {copy.text[6]}
              </p>
              <p className="mt-4 text-white text-lg font-semibold tracking-normal leading-snug">
                {copy.text[7]}
              </p>
              <p className="mt-4 text-emerald-50/80 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {copy.text[8]}
              </p>
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-slate-700 pt-5">
                {inline[0].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700 bg-white/[0.04] p-3"
                  >
                    <span className="font-mono text-xs text-lime-200/70 tabular-nums">
                      0{index + 1}
                    </span>
                    <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {navigationSections.length > 0 && (
        <nav
          aria-label={copy.text[9]}
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <details>
              <summary className="cursor-pointer list-none uppercase text-emerald-800 marker:hidden text-sm font-semibold tracking-wide leading-5">
                {copy.text[10]}
                <span className="ml-2 font-medium normal-case tracking-normal text-slate-500">
                  {copy.text[11]}
                  {navigationSections.length} {copy.text[12]}
                </span>
              </summary>
              <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {navigationSections.map(({ heading }, index) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="group flex gap-3 rounded-xl border border-slate-200 bg-[#f7f8f2] px-3 py-2.5 text-base leading-6 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                    >
                      <span className="font-mono text-xs font-bold text-emerald-700 tracking-normal tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:text-emerald-800">
                        {heading.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </nav>
      )}

      <div id="research-content">
        {sections.map((section, sectionIndex) => (
          <DashboardCollapsibleSection
            key={section.heading?.id ?? "opening"}
            id={section.heading?.id}
            title={section.heading ? <InlineContent text={section.heading.text} /> : undefined}
            titleClassName="max-w-4xl text-slate-950"
            contentClassName="mt-8"
            className={
              sectionIndex % 2 === 0
                ? "scroll-mt-8 bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
                : "scroll-mt-8 border-y border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
            }
          >
            <div className="mx-auto max-w-7xl">
              <div
                className={
                  section.heading ? "max-w-5xl sm:ml-15" : "max-w-5xl"
                }
              >
                {section.blocks.map((block, blockIndex) => (
                  <MarkdownBlockView
                    key={`${section.heading?.id ?? "opening"}-${blockIndex}`}
                    block={block}
                  />
                ))}
              </div>
            </div>
          </DashboardCollapsibleSection>
        ))}
      </div>

      <section className={`text-slate-900 ${sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex w-fit rounded-full border border-emerald-800/20 bg-white/70 px-4 py-2 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
            {copy.text[1]}
          </p>
          <p className="mt-3 max-w-3xl text-lg font-semibold tracking-normal leading-snug">
            {copy.text[13]}
          </p>
        </div>
      </section>
    </main>
  );
}
