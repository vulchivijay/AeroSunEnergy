import type { ReactNode } from 'react'

export function ContentIllustratedBenefitCard({
  title,
  description,
  index,
  illustration,
}: {
  title: string
  description: string
  index: number
  illustration: ReactNode
}) {
  return (
    <article className="group relative min-h-[17rem] overflow-hidden rounded-[1.6rem] border border-[#d9dac4] bg-[linear-gradient(145deg,#fffefa_0%,#fffdf7_58%,#f5f4e8_100%)] p-6 shadow-[0_10px_18px_-13px_rgba(28,38,19,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_22px_-13px_rgba(28,38,19,0.5)] sm:p-7">
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full"
        viewBox="0 0 360 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 50c66-26 104 8 168 1s117-38 192-8v27H0z" fill="#e4e8cd" />
        <path d="M0 61c70-21 122 1 190-5s116-23 170-11v25H0z" fill="#dce3c1" fillOpacity=".76" />
      </svg>
      <div className="relative z-10">
        <span className="inline-flex min-w-12 items-center justify-center rounded-xl bg-[#e5e7cc] px-3 py-1 text-lg font-bold leading-7 text-[#173622]">
          {String(index + 1).padStart(2, '0')}
        </span>
        {illustration}
        <h4 className="mt-4 max-w-[60%] font-serif text-[1.45rem] font-bold leading-[1.08] tracking-tight text-[#102b1c] sm:text-[1.7rem]">
          {title}
        </h4>
        <p className="mt-4 max-w-[62%] text-[1rem] leading-[1.45] text-[#171d19]">
          {description}
        </p>
      </div>
    </article>
  )
}
