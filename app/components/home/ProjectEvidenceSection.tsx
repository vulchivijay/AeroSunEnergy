"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Translations } from "@/lib/LocaleContext";

type EvidenceContent = Translations["home"]["trustSections"]["evidence"];

export default function ProjectEvidenceSection({
  content,
}: {
  content: EvidenceContent;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = content.testimonials.map(
    (_, index) =>
      content.testimonials[(activeIndex + index) % content.testimonials.length],
  );

  const showPrevious = () => {
    setActiveIndex(
      (index) =>
        (index - 1 + content.testimonials.length) % content.testimonials.length,
    );
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % content.testimonials.length);
  };

  return (
    <section
      className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">
              {content.eyebrow}
            </p>
            <h2
              id="testimonials-title"
              className="mt-3 text-[#102b28] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug"
            >
              {content.title}
            </h2>
          </div>
          <div className="flex items-end justify-between gap-4 lg:pb-1">
            <p className="max-w-3xl text-black      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.description}
            </p>
          </div>
        </div>

        <div id="testimonials-content">
          <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-2 sm:gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={content.previousLabel}
              className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div
              className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              aria-live="polite"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={`${activeIndex}-${index}`}
                  className={`flex min-h-64 flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${index === 1 ? "hidden md:flex" : ""} ${index === 2 ? "hidden lg:flex" : ""}`}
                >
                  <div className="blur-md">
                    <p className="uppercase text-amber-800    text-xs font-semibold tracking-wide leading-5">
                      {content.placeholderLabel}
                    </p>
                    <blockquote className="mt-5 text-lg font-semibold leading-8 text-slate-950 sm:text-xl tracking-normal">
                      “{testimonial.quote}”
                    </blockquote>
                  </div>
                  <div className="mt-8 border-t border-slate-200 pt-5 blur-md">
                    <p className="text-slate-950      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {testimonial.customer}
                    </p>
                    <p className="mt-1 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {testimonial.location}
                    </p>
                    <p className="mt-3 text-emerald-900      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {testimonial.system}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label={content.nextLabel}
              className="my-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-xl border border-amber-300 bg-[#fff3df] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-amber-950      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.note}
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-amber-950 underline decoration-amber-500 underline-offset-4 tracking-normal"
            >
              {content.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
