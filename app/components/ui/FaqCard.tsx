'use client';

import { useState } from 'react';

type FaqCardProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FaqCard({ question, answer, defaultOpen = false }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`overflow-hidden rounded-[22px] border bg-white/80 p-0 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.28)] transition-all duration-300 ${isOpen ? 'border-[#F59E0B]/70 bg-[#fffaf1]' : 'border-[#d8c9ab]/70'}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-black tracking-[-0.03em] text-[#1f2a44] sm:text-lg">{question}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition ${isOpen ? 'border-[#F59E0B]/60 bg-[#F59E0B] text-white' : 'border-[#F59E0B]/60 bg-[#fff3df] text-[#D97706]'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen ? (
        <div className="border-t border-[#f0e3ce] px-5 pb-5 pt-4 sm:px-6">
          <p className="text-base leading-8 text-slate-700">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}