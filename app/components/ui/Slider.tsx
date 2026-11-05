"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

type SliderProps = {
  children: React.ReactNode
  className?: string
  autoplay?: boolean
  interval?: number
  pauseOnHover?: boolean
  ariaLabel?: string
}

export default function Slider({
  children,
  className = '',
  autoplay = false,
  interval = 5000,
  pauseOnHover = true,
  ariaLabel,
}: SliderProps) {
  const { t } = useLocale()
  const carousel = t.carousel
  const regionLabel = ariaLabel ?? carousel.regionLabel
  const slidesArray = React.Children.toArray(children)
  const count = slidesArray.length
  const hasMultipleSlides = count > 1

  const [position, setPosition] = useState(hasMultipleSlides ? 1 : 0)
  const [withTransition, setWithTransition] = useState(true)
  const [slideWidth, setSlideWidth] = useState(0)
  const [dragX, setDragX] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const dragging = useRef(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDocumentHidden, setIsDocumentHidden] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const clonedSlides = hasMultipleSlides ? [slidesArray[count - 1], ...slidesArray, slidesArray[0]] : slidesArray

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotionPreference = () => setPrefersReducedMotion(motionPreference.matches)

    syncMotionPreference()
    motionPreference.addEventListener('change', syncMotionPreference)
    return () => motionPreference.removeEventListener('change', syncMotionPreference)
  }, [])

  useEffect(() => {
    const measure = () => {
      const vw = viewportRef.current
      setSlideWidth(vw ? vw.clientWidth : 0)
    }

    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)

    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentHidden(document.hidden)
      if (!document.hidden) setWithTransition(true)
    }

    handleVisibilityChange()
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const next = () => {
    setPosition((prev) => prev + 1)
    setWithTransition(true)
  }

  const prev = () => {
    setPosition((prev) => prev - 1)
    setWithTransition(true)
  }

  const onTransitionEnd = () => {
    if (position === clonedSlides.length - 1) {
      setWithTransition(false)
      setPosition(1)
    }

    if (position === 0) {
      setWithTransition(false)
      setPosition(count)
    }
  }

  useEffect(() => {
    if (!autoplay) return
    if (isHovered || isDocumentHidden || prefersReducedMotion || dragging.current) return

    const id = window.setInterval(() => {
      setPosition((prev) => prev + 1)
      setWithTransition(true)
    }, interval)

    return () => clearInterval(id)
  }, [autoplay, interval, isHovered, isDocumentHidden, prefersReducedMotion])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.target instanceof Element && e.target.closest('button, a, input, select, textarea')) return
    dragStartX.current = e.clientX
    dragging.current = true
    setWithTransition(false)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || dragStartX.current == null) return
    setDragX(e.clientX - dragStartX.current)
  }

  const endDrag = () => {
    if (!dragging.current) return

    dragging.current = false
    const threshold = Math.max(50, slideWidth > 0 ? slideWidth * 0.15 : (viewportRef.current ? viewportRef.current.clientWidth * 0.15 : 50))

    if (dragX > threshold) {
      prev()
    } else if (dragX < -threshold) {
      next()
    } else {
      setWithTransition(true)
    }

    dragStartX.current = null
    setDragX(0)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    endDrag()
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const goToSlide = (i: number) => {
    setPosition(i + 1)
    setWithTransition(true)
  }

  const percentPerSlide = hasMultipleSlides ? 100 / clonedSlides.length : 100
  const totalWidth = hasMultipleSlides && slideWidth > 0 ? slideWidth * clonedSlides.length : 0
  const translate =
    slideWidth > 0
      ? `translate3d(${-(position * slideWidth) + dragX}px,0,0)`
      : `translate3d(${(-position * percentPerSlide).toFixed(6)}%,0,0)`
  const activeRealIndex = position === 0 ? count - 1 : position === clonedSlides.length - 1 ? 0 : position - 1
  const rotationPaused = isHovered || isDocumentHidden || prefersReducedMotion

  if (count === 0) return null

  if (count === 1) {
    return (
      <div role="region" aria-label={regionLabel} className={`w-full relative overflow-hidden ${className}`}>
        <div className="w-full">{slidesArray[0]}</div>
      </div>
    )
  }

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-roledescription={carousel.roleDescription}
      aria-label={regionLabel}
      aria-live={autoplay && !rotationPaused ? 'off' : 'polite'}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={endDrag}
      className={`w-full relative overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
      style={{ minHeight: '480px', height: 'clamp(480px, 56vw, 760px)' }}
    >
      <div
        className={`flex h-full ${withTransition ? 'transition-transform duration-500 ease-in-out motion-reduce:transition-none' : ''}`}
        style={{ width: slideWidth > 0 ? `${totalWidth}px` : `${clonedSlides.length * 100}%`, transform: translate }}
        onTransitionEnd={onTransitionEnd}
      >
        {clonedSlides.map((child, i) => (
          <div
            key={i}
            className="h-full shrink-0"
            style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${percentPerSlide}%` }}
            role="group"
            aria-roledescription={carousel.slideRoleDescription}
            aria-label={carousel.slidePosition
              .replace('{current}', String(i === 0 ? count : i === clonedSlides.length - 1 ? 1 : i))
              .replace('{total}', String(count))}
            aria-hidden={i !== position}
            inert={i !== position}
          >
            <div className="h-full w-full flex flex-col min-h-0">{child}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={carousel.previousSlide}
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white shadow-lg transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={carousel.nextSlide}
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white shadow-lg transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center px-3 sm:bottom-5">
        <div className="flex max-w-[calc(100vw-2.5rem)] flex-wrap items-center justify-center">
          {slidesArray.map((_, i) => {
            const isActive = activeRealIndex === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={carousel.goToSlide.replace('{number}', String(i + 1))}
                aria-current={isActive ? 'true' : undefined}
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white"
              >
                <span
                  aria-hidden="true"
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-2 w-4 bg-white sm:h-2.5 sm:w-8'
                      : 'h-2 w-2 bg-white/40 group-hover:bg-white/60 sm:h-2.5 sm:w-2.5'
                  }`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
