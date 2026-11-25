export function ContentInfoPanel({
  title,
  content,
  themeClassName,
  checkBackgroundClassName,
  titleClassName,
}: {
  title: string
  content: string[]
  themeClassName: string
  checkBackgroundClassName: string
  titleClassName: string
}) {
  return (
    <div className={`border-t border-slate-200 pt-5 ${themeClassName}`}>
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${checkBackgroundClassName}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
            <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={` ${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
