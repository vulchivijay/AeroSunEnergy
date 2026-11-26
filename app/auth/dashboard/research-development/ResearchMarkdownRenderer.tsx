"use client";

import { useLocale } from "@/lib/LocaleContext";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { ContentBlock } from "./researchMarkdown";

export function InlineContent({
  text,
  digitalNumbers = false,
}: {
  text: string;
  digitalNumbers?: boolean;
}) {
  const parts = text.split(
    /(\\\(.+?\\\)|\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*.+?\*\*|__.+?__|`[^`]+`|\*[^*]+\*|_[^_]+_)/g,
  );

  return parts.map((part, index) => {
    const inlineMath = part.match(/^\\\((.+)\\\)$/);
    if (inlineMath) {
      return <MathExpression key={index} expression={inlineMath[1]} />;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2].replace(/\\&/g, "&")}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-emerald-800 underline decoration-emerald-500/40 underline-offset-4 transition hover:text-emerald-600 tracking-normal"
        >
          <InlineContent text={linkMatch[1]} digitalNumbers={digitalNumbers} />
        </a>
      );
    }

    if (
      (part.startsWith("**") && part.endsWith("**")) ||
      (part.startsWith("__") && part.endsWith("__"))
    ) {
      return (
        <strong key={index} className="font-bold text-slate-950 tracking-normal">
          {digitalNumbers ? <DigitalNumber value={part.slice(2, -2)} /> : part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code className="rounded-xl bg-emerald-950/[0.06] px-1.5 py-0.5 font-mono text-base text-emerald-950 tabular-nums" key={index}>
          {digitalNumbers ? <DigitalNumber value={part.slice(1, -1)} /> : part.slice(1, -1)}
        </code>
      );
    }
    if (
      (part.startsWith("*") && part.endsWith("*")) ||
      (part.startsWith("_") && part.endsWith("_"))
    ) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return digitalNumbers ? <DigitalNumber key={index} value={part} /> : part;
  });
}

function MathExpression({ expression }: { expression: string }) {
  const { t } = useLocale();
  const accessible = t.researchDevelopmentPage.wrapper.accessible;
  const normalized = expression.replace(/\s+/g, "");

  if (normalized === "P_{\\text{wind}}") {
    return (
      <span className="font-serif text-lg italic">
        P<sub className="text-xs not-italic">wind</sub>
      </span>
    );
  }

  if (normalized === "\\rho") {
    return (
      <span aria-label={accessible.rho} className="font-serif text-lg italic">
        ρ
      </span>
    );
  }

  return (
    <span className="rounded-xl bg-emerald-950/[0.06] px-1.5 py-0.5 font-mono text-base text-emerald-950 tabular-nums">
      {expression}
    </span>
  );
}

function DisplayMath({ expression }: { expression: string }) {
  const { t } = useLocale();
  const accessible = t.researchDevelopmentPage.wrapper.accessible;

  if (
    expression.replace(/\s+/g, "") === "P_{\\text{wind}}=\\frac{1}{2}\\rhoAv^3"
  ) {
    return (
      <div className="my-7 overflow-x-auto rounded-xl border border-slate-200 bg-emerald-50/80 px-5 py-6 text-center">
        <div
          role="math"
          aria-label={accessible.windPowerFormula}
          className="flex items-center justify-center gap-2 font-serif text-2xl text-emerald-950 sm:gap-3 sm:text-3xl"
        >
          <span className="italic">
            P<sub className="text-xs not-italic sm:text-base">wind</sub>
          </span>
          <span>=</span>
          <span className="inline-grid text-center text-sm leading-tight sm:text-lg">
            <span>1</span>
            <span className="border-t border-current">2</span>
          </span>
          <span className="italic">ρ</span>
          <span className="italic">A</span>
          <span className="italic">
            v<sup className="text-base not-italic">3</sup>
          </span>
        </div>
      </div>
    );
  }

  return (
    <pre className="my-7 overflow-x-auto rounded-xl border border-slate-200 bg-emerald-50/80 px-5 py-4 text-center font-mono text-sm text-emerald-950 tabular-nums">
      <code>{expression}</code>
    </pre>
  );
}

export function MarkdownBlockView({ block }: { block: ContentBlock }) {
  if (block.type === "heading") {
    if (block.level === 1) return null;
    const classes = "text-slate-950 ";
    if (block.level === 2) {
      return (
        <h3
          id={block.id}
          className={`mb-4 mt-11 scroll-mt-24 border-l-2 border-emerald-500 pl-4 ${classes} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}
        >
          <InlineContent text={block.text} />
        </h3>
      );
    }
    if (block.level === 3) {
      return (
        <h4
          id={block.id}
          className={`mb-3 mt-8 ${classes} text-lg font-semibold !tracking-tight leading-snug`}
        >
          <InlineContent text={block.text} />
        </h4>
      );
    }
    return (
      <h5 id={block.id} className={`mb-3 mt-6 ${classes} text-base font-semibold !tracking-tight leading-snug`}>
        <InlineContent text={block.text} />
      </h5>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className="my-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
        {block.lines.map((line, index) => (
          <span key={index}>
            {index > 0 ? " " : ""}
            <InlineContent text={line} />
          </span>
        ))}
      </p>
    );
  }

  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List className={`my-5 space-y-3 pl-6 text-sm leading-8 text-slate-700 marker:font-bold marker:text-emerald-700 ${block.ordered ? "list-decimal" : "list-disc"} tracking-normal`}>
        {block.items.map((item, index) => (
          <li key={index} className="pl-1">
            <InlineContent text={item} />
          </li>
        ))}
      </List>
    );
  }

  if (block.type === "table") {
    return (
      <div className="my-7 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm leading-6 text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
          <thead className="bg-amber-700 font-bold text-white tracking-normal">
            <tr>
              {block.headers.map((cell, index) => (
                <th key={index} className="px-4 py-3 font-bold tracking-normal">
                  {<InlineContent text={cell} />}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`transition-colors hover:bg-emerald-100/70 ${rowIndex % 2 ? 'bg-emerald-50/70' : 'bg-white'}`}>
                {block.headers.map((_, cellIndex) => (
                  <td key={cellIndex} className="border-t border-slate-200 px-4 py-3 align-top text-slate-700">
                    <InlineContent text={row[cellIndex] ?? ""} digitalNumbers />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <div className="my-7 overflow-hidden rounded-xl border border-slate-700 bg-[#10251f] shadow-sm">
        {block.language && (
          <p className="border-b border-slate-700 px-4 py-2 font-mono uppercase text-emerald-200/70 tabular-nums text-xs font-semibold tracking-wide leading-5">
            {block.language}
          </p>
        )}
        <pre className="overflow-x-auto p-5 font-mono text-base leading-6 text-emerald-50 tabular-nums">
          <code>{block.text}</code>
        </pre>
      </div>
    );
  }

  if (block.type === "math") return <DisplayMath expression={block.expression} />;

  if (block.type === "quote") {
    return (
      <blockquote className="my-6 border-l-4 border-lime-400 bg-emerald-50/80 px-5 py-4 text-lg font-medium leading-8 text-emerald-950 tracking-normal">
        {block.lines.map((line, index) => (
          <p key={index}>
            {index > 0 && <br />}
            <InlineContent text={line} />
          </p>
        ))}
      </blockquote>
    );
  }

  return <hr className="my-10 border-0 border-t border-slate-200" />;
}
