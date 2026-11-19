export function DigitalNumber({ value }: { value: string | number }) {
<<<<<<< HEAD
  const parts = String(value).split(/([\p{Nd}]+(?:[.,][\p{Nd}]+)*)/gu)
=======
  const parts = String(value).split(/(\d+(?:[.,]\d+)*)/g)
>>>>>>> origin/main

  return (
    <>
      {parts.map((part, index) =>
<<<<<<< HEAD
        /^[\p{Nd}]/u.test(part) ? (
          <span key={index} data-digital-number="true" className="font-[family-name:var(--font-digital)] tabular-nums">
=======
        /^\d/.test(part) ? (
          <span key={index} className="font-[family-name:var(--font-digital)] tabular-nums">
>>>>>>> origin/main
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
