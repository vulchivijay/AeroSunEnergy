"use client"

import React, { useEffect, useRef, useState } from 'react'

type SliderProps = {
  children: React.ReactNode
  className?: string
  autoplay?: boolean
  interval?: number
  pauseOnHover?: boolean
}

export default function Slider({ children, className = '', autoplay = false, interval = 5000, pauseOnHover = true }: SliderProps) {
  const slidesArray = React.Children.toArray(children)
  const count = slidesArray.length

  if (count === 0) return null

  if (count === 1) {
    return (
      <div className={`w-full relative overflow-hidden ${className}`}>
        <div className="w-full">{slidesArray[0]}</div>
      </div>
    )
  }

  const clonedSlides = [slidesArray[count - 1], ...slidesArray, slidesArray[0]]
  const [position, setPosition] = useState(1)
  const [withTransition, setWithTransition] = useState(true)
  const [slideWidth, setSlideWidth] = useState(0)
  const [dragX, setDragX] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const dragging = useRef(false)
  const [isPaused, setIsPaused] = useState(false)
  const viewportRef = useRef<HTMLDivElement | null>(null)

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
      const hidden = document.hidden
      setIsPaused(hidden)
      if (!hidden) setWithTransition(true)
    }

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
    if (isPaused || dragging.current) return

    const id = window.setInterval(() => {
      setPosition((prev) => prev + 1)
      setWithTransition(true)
    }, interval)

    return () => clearInterval(id)
  }, [autoplay, interval, isPaused])

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX
    dragging.current = true
    setWithTransition(false)
    ;(e.target as Element).setPointerCapture(e.pointerId)
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
    try {
      ;(e.target as Element).releasePointerCapture(e.pointerId)
    } catch {}
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const goToSlide = (i: number) => {
    setPosition(i + 1)
    setWithTransition(true)
  }

  const percentPerSlide = 100 / clonedSlides.length
  const totalWidth = slideWidth > 0 ? slideWidth * clonedSlides.length : 0
  const translate = slideWidth > 0 ? `translate3d(${-(position * slideWidth) + dragX}px,0,0)` : `translate3d(${(-position * percentPerSlide).toFixed(6)}%,0,0)`
  const activeRealIndex = position === 0 ? count - 1 : position === clonedSlides.length - 1 ? 0 : position - 1

  return (
    <div
      ref={viewportRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onFocus={() => pauseOnHover && setIsPaused(true)}
      onBlur={() => pauseOnHover && setIsPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={endDrag}
      className={`w-full relative overflow-hidden ${className}`}
      style={{ minHeight: '420px', height: 'clamp(420px, 56vw, 760px)' }}
    >
      <div
        className={`h-full ${withTransition ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ width: slideWidth > 0 ? `${totalWidth}px` : `${clonedSlides.length * 100}%`, transform: translate }}
        onTransitionEnd={onTransitionEnd}
      >
        {clonedSlides.map((child, i) => (
          <div key={i} className="inline-block shrink-0 h-full" style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${percentPerSlide}%` }}>
            <div className="h-full w-full flex flex-col min-h-0">{child}</div>
          </div>
        ))}
      </div>

      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/40 shadow-lg"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/40 shadow-lg"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center px-3 sm:bottom-5">
        <div className="flex max-w-[calc(100vw-2.5rem)] flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
          {slidesArray.map((_, i) => {
            const isActive = activeRealIndex === i
            return (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'h-2 w-5 bg-white sm:h-2.5 sm:w-8'
                    : 'h-2 w-2 bg-white/40 hover:bg-white/60 sm:h-2.5 sm:w-2.5'
                }`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
