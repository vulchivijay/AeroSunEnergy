export function DigitalNumber({ value }: { value: string | number }) {
  const parts = String(value).split(/([\p{Nd}]+(?:[.,][\p{Nd}]+)*)/gu)

  return (
    <>
      {parts.map((part, index) =>
        /^[\p{Nd}]/u.test(part) ? (
          <span key={index} data-digital-number="true" className="font-[family-name:var(--font-digital)] tabular-nums">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
