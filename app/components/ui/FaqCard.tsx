'use client';

import { useId, useState } from 'react';
import en from '@/public/locales/en/index.json';
import { useLocale } from '@/lib/LocaleContext';

type FaqCardProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export const solarFaqs = en.solarFaqs.items;

export function FaqSection({ items = solarFaqs }: { items?: Array<{ question: string; answer: string }> }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FaqCard key={`${item.question}-${index}`} question={item.question} answer={item.answer} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

export default function FaqCard({ question, answer, defaultOpen = false }: FaqCardProps) {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const answerId = useId();
  const questionId = useId();
  const faqIndex = solarFaqs.findIndex((faq) => faq.question === question);
  const localizedFaq = faqIndex >= 0 ? t.solarFaqs.items[faqIndex] : undefined;
  const displayQuestion = localizedFaq?.question ?? question;
  const displayAnswer = localizedFaq?.answer ?? answer;

  return (
    <div className={`overflow-hidden rounded-[22px] border bg-white/80 p-0 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.28)] transition-all duration-300 ${isOpen ? 'border-[#F59E0B]/70 bg-[#fffaf1]' : 'border-[#d8c9ab]/70'}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-700 sm:px-6"
        aria-expanded={isOpen}
        aria-controls={answerId}
        aria-label={`${displayQuestion} — ${isOpen ? t.solarFaqs.collapseAnswer : t.solarFaqs.expandAnswer}`}
        id={questionId}
      >
        <span className="text-base font-black tracking-[0.03em] text-[#1f2a44] sm:text-lg">{displayQuestion}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition ${isOpen ? 'border-[#F59E0B]/60 bg-[#F59E0B] text-white' : 'border-[#F59E0B]/60 bg-[#fff3df] text-[#D97706]'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        hidden={!isOpen}
        className="border-t border-[#f0e3ce] px-5 pb-5 pt-4 sm:px-6"
      >
        <p className="text-base leading-8 text-slate-700">{displayAnswer}</p>
      </div>
    </div>
  );
}