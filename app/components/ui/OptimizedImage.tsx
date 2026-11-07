"use client"

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import { generateImagePlaceholder } from '@/lib/imagePlaceholder'
import { useLocale } from '@/lib/LocaleContext'

type Props = Omit<ImageProps, 'src'> & {
  src: string
  skeletonClassName?: string
}

export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  placeholder,
  blurDataURL,
  skeletonClassName,
  onLoad,
  onError,
  ...rest
}: Props) {
  const { t } = useLocale()
  const [settledSrc, setSettledSrc] = useState<string | null>(null)
  const [spinnerSrc, setSpinnerSrc] = useState<string | null>(null)

  useEffect(() => {
    if (settledSrc === src) return

    const timeoutId = window.setTimeout(() => {
      setSpinnerSrc(src)
    }, 2000)

    return () => window.clearTimeout(timeoutId)
  }, [src, settledSrc])

  const isLoading = settledSrc !== src
  const showSpinner = spinnerSrc === src && isLoading

  const computedBlurDataURL =
    blurDataURL ??
    (src.startsWith('/images/') ? generateImagePlaceholder(18, 10, '#eaf7ee', '#f4fbf6') : undefined)

  return (
    <div
      className={`relative overflow-hidden ${
        rest.fill ? 'h-full w-full' : 'block'
      } ${className.includes('absolute') ? 'absolute inset-0' : ''}`}
    >
      {isLoading && (
        <div
          className={`absolute inset-0 animate-pulse bg-linear-to-br from-slate-200 via-slate-100 to-slate-200 motion-reduce:animate-none    ${
            skeletonClassName ?? ''
          }`}
          aria-hidden="true"
        />
      )}
      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center" role="status" aria-label={t.ui.loadingImage}>
          <span
            className="h-9 w-9 animate-spin rounded-full border-4 border-slate-400/40 border-t-slate-700   motion-reduce:animate-none"
            aria-hidden="true"
          />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        className={`${className} object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        placeholder={placeholder ?? (computedBlurDataURL ? 'blur' : 'empty')}
        blurDataURL={computedBlurDataURL}
        sizes={rest.sizes ?? '100vw'}
        onLoad={(event) => {
          setSettledSrc(src)
          setSpinnerSrc((current) => current === src ? null : current)
          onLoad?.(event)
        }}
        onError={(event) => {
          setSettledSrc(src)
          setSpinnerSrc((current) => current === src ? null : current)
          onError?.(event)
        }}
        {...rest}
      />
    </div>
  )
}
