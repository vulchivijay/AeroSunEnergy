

'use client'

import { useLocale } from '@/lib/LocaleContext'

type HeadingBlock = {
  type: 'heading'
  level: number
  text: string
  id: string
}

type ContentBlock =
  | HeadingBlock
  | { type: 'paragraph'; lines: string[] }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'code'; language: string; text: string }
  | { type: 'math'; expression: string }
  | { type: 'quote'; lines: string[] }
  | { type: 'rule' }

type ContentSection = {
  heading?: HeadingBlock
  blocks: ContentBlock[]
}



function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '')
}

function splitTableRow(line: string) {
  const cells: string[] = []
  let cell = ''
  let escaped = false

  for (const character of line.trim().replace(/^\|/, '').replace(/\|$/, '')) {
    if (character === '|' && !escaped) {
      cells.push(cell.trim())
      cell = ''
      continue
    }

    if (character === '\\' && !escaped) {
      escaped = true
      cell += character
      continue
    }

    escaped = false
    cell += character
  }

  cells.push(cell.trim())
  return cells
}

function isTableDelimiter(line: string) {
  const cells = splitTableRow(line)
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function isListItem(line: string) {
  return /^\s*(?:[-*+]|\d+[.)])\s+/.test(line)
}

function isSpecialLine(lines: string[], index: number) {
  const line = lines[index]
  return (
    /^#{1,6}\s+/.test(line) ||
    /^```/.test(line) ||
    /^\\\[\s*$/.test(line) ||
    /^[-*_]{3,}\s*$/.test(line) ||
    /^\s*>/.test(line) ||
    isListItem(line) ||
    (index + 1 < lines.length &&
      line.includes('|') &&
      lines[index + 1].includes('|') &&
      isTableDelimiter(lines[index + 1]))
  )
}

function parseMarkdown(markdown: string): ContentBlock[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: ContentBlock[] = []
  const headingCounts = new Map<string, number>()

  for (let index = 0; index < lines.length;) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/)
    if (headingMatch) {
      const text = headingMatch[2].trim()
      const baseId = slugify(text) || 'section'
      const count = headingCounts.get(baseId) ?? 0
      headingCounts.set(baseId, count + 1)
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text,
        id: count ? `${baseId}-${count + 1}` : baseId,
      })
      index += 1
      continue
    }

    if (/^```/.test(line)) {
      const language = line.slice(3).trim()
      const codeLines: string[] = []
      index += 1
      while (index < lines.length && !/^```\s*$/.test(lines[index])) {
        codeLines.push(lines[index])
        index += 1
      }
      if (index < lines.length) index += 1
      blocks.push({ type: 'code', language, text: codeLines.join('\n') })
      continue
    }

    if (/^\\\[\s*$/.test(line)) {
      const mathLines: string[] = []
      index += 1
      while (index < lines.length && !/^\\\]\s*$/.test(lines[index])) {
        mathLines.push(lines[index].trim())
        index += 1
      }
      if (index < lines.length) {
        index += 1
        blocks.push({ type: 'math', expression: mathLines.join(' ') })
      } else {
        blocks.push({ type: 'paragraph', lines: [`\\[${mathLines.join(' ')}]`] })
      }
      continue
    }

    if (/^[-*_]{3,}\s*$/.test(line)) {
      blocks.push({ type: 'rule' })
      index += 1
      continue
    }

    if (
      index + 1 < lines.length &&
      line.includes('|') &&
      lines[index + 1].includes('|') &&
      isTableDelimiter(lines[index + 1])
    ) {
      const headers = splitTableRow(line)
      const rows: string[][] = []
      index += 2
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(splitTableRow(lines[index]))
        index += 1
      }
      blocks.push({ type: 'table', headers, rows })
      continue
    }

    if (isListItem(line)) {
      const ordered = /^\s*\d+[.)]\s+/.test(line)
      const items: string[] = []
      while (index < lines.length && isListItem(lines[index])) {
        items.push(lines[index].replace(/^\s*(?:[-*+]|\d+[.)])\s+/, '').trim())
        index += 1
      }
      blocks.push({ type: 'list', ordered, items })
      continue
    }

    if (/^\s*>/.test(line)) {
      const quoteLines: string[] = []
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^\s*>\s?/, '').trim())
        index += 1
      }
      blocks.push({ type: 'quote', lines: quoteLines })
      continue
    }

    const paragraphLines = [line.trim()]
    index += 1
    while (
      index < lines.length &&
      lines[index].trim() &&
      !isSpecialLine(lines, index)
    ) {
      paragraphLines.push(lines[index].trim())
      index += 1
    }
    blocks.push({ type: 'paragraph', lines: paragraphLines })
  }

  return blocks
}

function InlineContent({ text }: { text: string }) {
  const parts = text.split(
    /(\\\(.+?\\\)|\[[^\]]+\]\((?:https?:\/\/|mailto:)[^)]+\)|\*\*.+?\*\*|__.+?__|`[^`]+`|\*[^*]+\*|_[^_]+_)/g,
  )

  return parts.map((part, index) => {
    const inlineMath = part.match(/^\\\((.+)\\\)$/)
    if (inlineMath) {
      return <MathExpression key={index} expression={inlineMath[1]} />
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)]+)\)$/)
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2].replace(/\\&/g, '&')}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-emerald-800 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200"
        >
          <InlineContent text={linkMatch[1]} />
        </a>
      )
    }

    if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('__') && part.endsWith('__'))) {
      return <strong key={index} className="font-bold text-slate-950 dark:text-white">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="rounded bg-emerald-950/[0.06] px-1.5 py-0.5 font-mono text-[0.92em] text-emerald-950 dark:bg-white/10 dark:text-emerald-100">{part.slice(1, -1)}</code>
    }
    if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
      return <em key={index}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function MathExpression({ expression }: { expression: string }) {
  const { t } = useLocale()
  const accessible = t.researchDevelopmentPage.wrapper.accessible
  const normalized = expression.replace(/\s+/g, '')

  if (normalized === 'P_{\\text{wind}}') {
    return (
      <span className="font-serif text-lg italic">
        P<sub className="text-xs not-italic">wind</sub>
      </span>
    )
  }

  if (normalized === '\\rho') {
    return <span aria-label={accessible.rho} className="font-serif text-lg italic">ρ</span>
  }

  return (
    <span className="rounded bg-emerald-950/[0.06] px-1.5 py-0.5 font-mono text-sm text-emerald-950 dark:bg-white/10 dark:text-emerald-100">
      {expression}
    </span>
  )
}

function DisplayMath({ expression }: { expression: string }) {
  const { t } = useLocale()
  const accessible = t.researchDevelopmentPage.wrapper.accessible

  if (expression.replace(/\s+/g, '') === 'P_{\\text{wind}}=\\frac{1}{2}\\rhoAv^3') {
    return (
      <div className="my-7 overflow-x-auto rounded-2xl border border-emerald-900/15 bg-emerald-50/80 px-5 py-6 text-center dark:border-emerald-300/15 dark:bg-emerald-950/30">
        <div
          role="math"
          aria-label={accessible.windPowerFormula}
          className="flex items-center justify-center gap-2 font-serif text-2xl text-emerald-950 dark:text-emerald-100 sm:gap-3 sm:text-3xl"
        >
          <span className="italic">P<sub className="text-xs not-italic sm:text-sm">wind</sub></span>
          <span>=</span>
          <span className="inline-grid text-center text-base leading-tight sm:text-lg">
            <span>1</span>
            <span className="border-t border-current">2</span>
          </span>
          <span className="italic">ρ</span>
          <span className="italic">A</span>
          <span className="italic">v<sup className="text-sm not-italic">3</sup></span>
        </div>
      </div>
    )
  }

  return (
    <pre className="my-7 overflow-x-auto rounded-2xl border border-emerald-900/15 bg-emerald-50/80 px-5 py-4 text-center font-mono text-base text-emerald-950 dark:border-emerald-300/15 dark:bg-emerald-950/30 dark:text-emerald-100">
      <code>{expression}</code>
    </pre>
  )
}

function MarkdownBlockView({ block }: { block: ContentBlock }) {
  if (block.type === 'heading') {
    if (block.level === 1) return null
    const classes = 'font-black tracking-tight text-slate-950 dark:text-white'
    if (block.level === 2) {
      return <h3 id={block.id} className={`mb-4 mt-11 scroll-mt-24 border-l-2 border-emerald-500 pl-4 text-2xl sm:text-3xl ${classes}`}><InlineContent text={block.text} /></h3>
    }
    if (block.level === 3) {
      return <h4 id={block.id} className={`mb-3 mt-8 text-xl sm:text-2xl ${classes}`}><InlineContent text={block.text} /></h4>
    }
    return <h5 id={block.id} className={`mb-3 mt-6 text-lg ${classes}`}><InlineContent text={block.text} /></h5>
  }

  if (block.type === 'paragraph') {
    return <p className="my-4 text-base leading-8 text-slate-700 dark:text-slate-300">{block.lines.map((line, index) => <span key={index}>{index > 0 ? ' ' : ''}<InlineContent text={line} /></span>)}</p>
  }

  if (block.type === 'list') {
    const List = block.ordered ? 'ol' : 'ul'
    return (
      <List className={`my-5 space-y-3 pl-6 text-base leading-8 text-slate-700 marker:font-bold marker:text-emerald-700 dark:text-slate-300 dark:marker:text-emerald-300 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
        {block.items.map((item, index) => <li key={index} className="pl-1"><InlineContent text={item} /></li>)}
      </List>
    )
  }

  if (block.type === 'table') {
    return (
      <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm leading-6">
          <thead className="bg-emerald-950 text-white">
            <tr>{block.headers.map((cell, index) => <th key={index} className="px-4 py-3 font-bold">{<InlineContent text={cell} />}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 ? 'bg-slate-50/80 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-900/70'}>
                {block.headers.map((_, cellIndex) => <td key={cellIndex} className="border-t border-slate-200 px-4 py-3 align-top text-slate-700 dark:border-slate-700 dark:text-slate-300"><InlineContent text={row[cellIndex] ?? ''} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'code') {
    return (
      <div className="my-7 overflow-hidden rounded-2xl border border-emerald-900/20 bg-[#10251f] shadow-lg shadow-emerald-950/10">
        {block.language && <p className="border-b border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-emerald-200/70">{block.language}</p>}
        <pre className="overflow-x-auto p-5 font-mono text-sm leading-6 text-emerald-50"><code>{block.text}</code></pre>
      </div>
    )
  }

  if (block.type === 'math') {
    return <DisplayMath expression={block.expression} />
  }

  if (block.type === 'quote') {
    return <blockquote className="my-6 border-l-4 border-lime-400 bg-emerald-50/80 px-5 py-4 text-lg font-medium leading-8 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100">{block.lines.map((line, index) => <p key={index}>{index > 0 && <br />}<InlineContent text={line} /></p>)}</blockquote>
  }

  return <hr className="my-10 border-0 border-t border-emerald-900/15 dark:border-white/10" />
}

function createSections(blocks: ContentBlock[]): ContentSection[] {
  const sections: ContentSection[] = []
  let current: ContentSection = { blocks: [] }

  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 1) {
      if (current.heading || current.blocks.length) sections.push(current)
      current = { heading: block, blocks: [] }
    } else {
      current.blocks.push(block)
    }
  }

  if (current.heading || current.blocks.length) sections.push(current)
  return sections
}



export default function ResearchDevelopmentPage() {
  const { t } = useLocale()
  const copy = t.researchDevelopmentPage.wrapper
  const inline = copy.inline
  const blocks = parseMarkdown(copy.content)
  const sourceTitle = blocks.find((block): block is HeadingBlock => block.type === 'heading' && block.level === 1)
  const sourceSubtitle = blocks.find((block): block is HeadingBlock => block.type === 'heading' && block.level === 2)
  const heroHeadingIds = new Set([sourceTitle?.id, sourceSubtitle?.id])
  const sections = createSections(blocks.filter((block) => block.type !== 'heading' || !heroHeadingIds.has(block.id)))
  const navigationSections = sections.filter((section): section is ContentSection & { heading: HeadingBlock } => Boolean(section.heading))

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900 dark:bg-[#101b17] dark:text-slate-100">
      <section className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.08] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-32 rounded-full border border-white/[0.08]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              {copy.text[0]}</div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-emerald-100/65">{sourceTitle?.text ?? copy.text[1]}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {sourceSubtitle?.text ?? copy.text[2]}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/85 sm:text-xl">
              {copy.text[3]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#research-content" className="rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-200">{copy.text[4]}</a>
              {navigationSections[0]?.heading && <a href={`#${navigationSections[0].heading.id}`} className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">{copy.text[5]}</a>}
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/15 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-lime-200">{copy.text[6]}</p>
              <p className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">{copy.text[7]}</p>
              <p className="mt-4 text-base leading-7 text-emerald-50/80">{copy.text[8]}</p>
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                {inline[0].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <span className="font-mono text-xs text-lime-200/70">0{index + 1}</span>
                    <p className="mt-1 text-sm font-bold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {navigationSections.length > 0 && (
        <nav aria-label={copy.text[9]} className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <details>
              <summary className="cursor-pointer list-none text-xs font-black uppercase tracking-[0.24em] text-emerald-800 marker:hidden dark:text-emerald-300">
                {copy.text[10]}<span className="ml-2 font-medium normal-case tracking-normal text-slate-500">{copy.text[11]}{navigationSections.length} {copy.text[12]}</span>
              </summary>
              <ol className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {navigationSections.map(({ heading }, index) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`} className="group flex gap-3 rounded-xl border border-slate-200 bg-[#f7f8f2] px-3 py-2.5 text-sm leading-6 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30">
                      <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">{String(index + 1).padStart(2, '0')}</span>
                      <span className="group-hover:text-emerald-800 dark:group-hover:text-emerald-200">{heading.text}</span>
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
          <section
            key={section.heading?.id ?? 'opening'}
            id={section.heading?.id}
            className={sectionIndex % 2 === 0 ? 'scroll-mt-8' : 'scroll-mt-8 border-y border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/30'}
          >
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
              {section.heading && (
                <div className="mb-8 grid gap-4 border-b border-emerald-900/10 pb-6 sm:grid-cols-[auto_1fr] sm:items-start dark:border-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-900 font-mono text-sm font-bold text-lime-300">
                    {String(navigationSections.findIndex((item) => item.heading.id === section.heading?.id) + 1).padStart(2, '0')}
                  </span>
                  <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    <InlineContent text={section.heading.text} />
                  </h2>
                </div>
              )}
              <div className={section.heading ? 'max-w-5xl sm:ml-[3.75rem]' : 'max-w-5xl'}>
                {section.blocks.map((block, blockIndex) => (
                  <MarkdownBlockView key={`${section.heading?.id ?? 'opening'}-${blockIndex}`} block={block} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-[#1d3d43] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">{copy.text[1]}</p>
          <p className="mt-3 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">{copy.text[13]}</p>
        </div>
      </section>
    </main>
  )
}
