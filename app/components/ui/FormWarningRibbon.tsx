export default function FormWarningRibbon() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-b-2xl border border-amber-300/90 bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_40%,#fffbeb_100%)] shadow-[0_10px_30px_-18px_rgba(146,64,14,0.8)]">
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-red-500 via-amber-500 to-orange-400" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_50%,rgba(251,146,60,0.08)_100%)]" aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-20 bg-[linear-gradient(135deg,transparent_0%,rgba(251,146,60,0.12)_40%,transparent_100%)]" aria-hidden="true" />

        <div className="relative flex justify-center px-4 py-3 sm:px-6">
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-4">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-white/80 text-amber-700 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              </svg>
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-amber-900 sm:text-base">
              <span className="inline-flex rounded-full border border-amber-300 bg-white/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">
                Notice
              </span>
              <span className="text-center leading-relaxed">
                Forms functionality failing due to server issues. Please mail at{' '}
                <a
                  href="mailto:customercare@aerosunenergy.in"
                  className="text-amber-900 underline decoration-1 underline-offset-2 transition hover:text-orange-700"
                >
                  customercare@aerosunenergy.in
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
