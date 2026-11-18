export function DigitalNumber({ value }: { value: string | number }) {
  const parts = String(value).split(/(\d+(?:[.,]\d+)*)/g)

  return (
    <>
      {parts.map((part, index) =>
        /^\d/.test(part) ? (
          <span key={index} className="font-[family-name:var(--font-digital)] tabular-nums">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
