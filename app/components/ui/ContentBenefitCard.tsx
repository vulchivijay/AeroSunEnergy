export function ContentBenefitCard({
  title,
  description,
  cardClassName,
  iconClassName,
  titleClassName,
}: {
  title: string
  description: string
  cardClassName: string
  iconClassName: string
  titleClassName: string
}) {
  return (
    <div className={cardClassName}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${iconClassName} tracking-normal`}>✓</div>
        <div>
          <h3 className={` ${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
          <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{description}</p>
        </div>
      </div>
    </div>
  )
}
