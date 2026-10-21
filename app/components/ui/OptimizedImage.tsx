"use client"

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { generateImagePlaceholder } from '@/lib/imagePlaceholder'

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
  ...rest
}: Props) {
  const [isLoading, setIsLoading] = useState(true)

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
          className={`absolute inset-0 animate-pulse bg-linear-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 ${
            skeletonClassName ?? ''
          }`}
          aria-hidden="true"
        />
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
          setIsLoading(false)
          onLoad?.(event)
        }}
        {...rest}
      />
    </div>
  )
}
