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
  const fixedHeightClass = 'h-[clamp(640px,56vw,760px)]'
  const viewportHeightClass = fixedHeightClass
  const slideHeightClass = fixedHeightClass
  const regionLabel = ariaLabel ?? carousel.regionLabel
  const slidesArray = React.Children.toArray(children)
  const count = slidesArray.length
  const hasMultipleSlides = count > 1

  const [activeIndex, setActiveIndex] = useState(0)
  const [position, setPosition] = useState(1)
  const [withTransition, setWithTransition] = useState(true)
  const [slideWidth, setSlideWidth] = useState(0)
  const [dragX, setDragX] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const dragging = useRef(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isDocumentHidden, setIsDocumentHidden] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const visibleIndices = hasMultipleSlides
    ? [(activeIndex - 1 + count) % count, activeIndex, (activeIndex + 1) % count]
    : [0]

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
    if (position !== 1) return
    if (prefersReducedMotion) {
      setActiveIndex((index) => (index + 1) % count)
      return
    }
    setPosition(2)
    setWithTransition(true)
  }

  const prev = () => {
    if (position !== 1) return
    if (prefersReducedMotion) {
      setActiveIndex((index) => (index - 1 + count) % count)
      return
    }
    setPosition(0)
    setWithTransition(true)
  }

  const onTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform' || position === 1) return
    setWithTransition(false)
    setActiveIndex((index) => (index + (position === 2 ? 1 : -1) + count) % count)
    setPosition(1)
    window.requestAnimationFrame(() => setWithTransition(true))
  }

  useEffect(() => {
    if (!autoplay) return
    if (isHovered || isDocumentHidden || prefersReducedMotion || isDragging || position !== 1) return

    const id = window.setInterval(() => {
      setPosition(2)
      setWithTransition(true)
    }, interval)

    return () => clearInterval(id)
  }, [autoplay, interval, isHovered, isDocumentHidden, prefersReducedMotion, isDragging, position])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.target instanceof Element && e.target.closest('button, a, input, select, textarea')) return
    if (position !== 1) return
    dragStartX.current = e.clientX
    dragging.current = true
    setIsDragging(true)
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
    setIsDragging(false)
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
    if (position !== 1) return
    setActiveIndex(i)
  }

  const percentPerSlide = hasMultipleSlides ? 100 / visibleIndices.length : 100
  const totalWidth = hasMultipleSlides && slideWidth > 0 ? slideWidth * visibleIndices.length : 0
  const translate =
    slideWidth > 0
      ? `translate3d(${-(position * slideWidth) + dragX}px,0,0)`
      : `translate3d(${(-position * percentPerSlide).toFixed(6)}%,0,0)`
  const rotationPaused = isHovered || isDocumentHidden || prefersReducedMotion

  if (count === 0) return null

  if (count === 1) {
    return (
      <div role="region" aria-label={regionLabel} className={`relative w-full ${viewportHeightClass} overflow-hidden ${className}`}>
        <div className={`w-full ${slideHeightClass}`}>{slidesArray[0]}</div>
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
      className={`relative w-full ${viewportHeightClass} overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <div
        className={`flex ${slideHeightClass} ${withTransition ? 'transition-transform duration-500 ease-in-out motion-reduce:transition-none' : ''}`}
        style={{ width: slideWidth > 0 ? `${totalWidth}px` : `${visibleIndices.length * 100}%`, transform: translate }}
        onTransitionEnd={onTransitionEnd}
      >
        {visibleIndices.map((slideIndex, i) => (
          <div
            key={`${slideIndex}-${i}`}
            className={`shrink-0 ${slideHeightClass} ${i === position ? 'slider-slide-active' : ''}`}
            style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${percentPerSlide}%` }}
            role="group"
            aria-roledescription={carousel.slideRoleDescription}
            aria-label={carousel.slidePosition.replace('{current}', String(slideIndex + 1)).replace('{total}', String(count))}
            aria-hidden={i !== position}
            inert={i !== position}
          >
            <div className={`flex w-full flex-col ${slideHeightClass}`}>{slidesArray[slideIndex]}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={carousel.previousSlide}
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/50 bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20A44A] sm:left-4 sm:h-12 sm:w-12"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={carousel.nextSlide}
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/50 bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20A44A] sm:right-4 sm:h-12 sm:w-12"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-3 z-20 hidden justify-center px-3 sm:bottom-5 xl:flex">
        <div className="flex max-w-[calc(100vw-2.5rem)] flex-wrap items-center justify-center">
          {slidesArray.map((_, i) => {
            const isActive = activeIndex === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={carousel.goToSlide.replace('{number}', String(i + 1))}
                aria-current={isActive ? 'true' : undefined}
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#F59E0B]"
              >
                <span
                  aria-hidden="true"
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-2 w-4 bg-[#F59E0B] sm:h-2.5 sm:w-8'
                      : 'h-2 w-2 bg-[#20A44A]/70 group-hover:bg-[#20A44A] sm:h-2.5 sm:w-2.5'
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
