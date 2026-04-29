import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#06111d] px-6 text-white">
      {/* Background gradients */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(30,136,229,0.35),transparent_40%),radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.25),transparent_40%),linear-gradient(160deg,#071321_0%,#0f2e52_55%,#0a3d28_100%)]"
        aria-hidden="true"
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:72px_72px]"
        aria-hidden="true"
      />
      {/* Top divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Large 404 */}
        <div className="relative select-none">
          <span className="bg-gradient-to-br from-sky-400 via-emerald-400 to-amber-400 bg-clip-text text-[clamp(7rem,20vw,14rem)] font-extrabold leading-none tracking-tighter text-transparent opacity-90">
            404
          </span>
          {/* Glow behind the number */}
          <span className="absolute inset-0 z-[-1] blur-3xl bg-gradient-to-br from-sky-500/30 via-emerald-500/20 to-amber-500/20 rounded-full" aria-hidden="true" />
        </div>

        {/* Wind turbine icon */}
        <div className="mt-2 mb-6 flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="h-14 w-14 animate-[spin_6s_linear_infinite] text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
            <path d="M32 28 C28 18 18 10 22 4 C26 -2 36 8 32 28Z" strokeLinejoin="round" />
            <path d="M35.5 34 C45 32 56 36 56 42 C56 48 44 46 35.5 34Z" strokeLinejoin="round" />
            <path d="M28.5 34 C20 40 10 44 8 38 C6 32 18 26 28.5 34Z" strokeLinejoin="round" />
            <line x1="32" y1="36" x2="32" y2="60" strokeWidth="2.5" />
          </svg>
          <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-sky-500/0 via-emerald-400/60 to-sky-500/0" />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Page Lost in the Wind
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          The page you&apos;re looking for has drifted off the grid. Let&apos;s navigate you back to clean energy.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 hover:shadow-emerald-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Back to Home
          </Link>
          <Link
            href="/basic-electrical-concepts"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Electrical Concepts
          </Link>
        </div>
      </div>
    </main>
  )
}
