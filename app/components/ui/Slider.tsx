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

  // clones for seamless loop
  const clonedSlides = [slidesArray[count - 1], ...slidesArray, slidesArray[0]]
  const [index, setIndex] = useState(1) // start at first real slide
  const [withTransition, setWithTransition] = useState(true)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [slideWidth, setSlideWidth] = useState(0)
  const [dragX, setDragX] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const dragging = useRef(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // set a CSS variable with the header height so CSS can compute
    // `calc(100vh - var(--site-header-height, 0px))` immediately on render
    let raf = 0
    const updateHeaderVar = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const header = document.querySelector('header') as HTMLElement | null
        const headerHeight = header ? header.getBoundingClientRect().height : 0
        document.documentElement.style.setProperty('--site-header-height', `${headerHeight}px`)
      })
    }

    updateHeaderVar()
    window.addEventListener('resize', updateHeaderVar)
    window.addEventListener('orientationchange', updateHeaderVar)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', updateHeaderVar)
      window.removeEventListener('orientationchange', updateHeaderVar)
    }
  }, [])

  // measure slide width for px-based transforms
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

  const goTo = (next: number) => {
    setIndex(next)
    setWithTransition(true)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  const onTransitionEnd = () => {
    // if moved to cloned last (index === clonedSlides.length-1) jump to real first
    if (index === clonedSlides.length - 1) {
      setWithTransition(false)
      setIndex(1)
    }
    // if moved to cloned first (index === 0) jump to real last
    if (index === 0) {
      setWithTransition(false)
      setIndex(clonedSlides.length - 2)
    }
  }

  // Autoplay
  useEffect(() => {
    if (!autoplay) return
    if (isPaused || dragging.current) return
    const id = setInterval(() => {
      goTo(index + 1)
    }, interval)
    return () => clearInterval(id)
  }, [autoplay, interval, index, isPaused])

  // Pointer / touch handlers
  const onPointerDown = (e: React.PointerEvent) => {
    const x = e.clientX
    dragStartX.current = x
    dragging.current = true
    setWithTransition(false);
    ;(e.target as Element).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || dragStartX.current == null) return
    const dx = e.clientX - dragStartX.current
    setDragX(dx)
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
      // snap back
      setWithTransition(true)
      setDragX(0)
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

  // keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  // when we disable transition for the jump, re-enable on next render
  useEffect(() => {
    if (!withTransition) {
      // re-enable after DOM updates
      const t = requestAnimationFrame(() => setWithTransition(true))
      return () => cancelAnimationFrame(t)
    }
    return
  }, [withTransition])

  const goToSlide = (i: number) => {
    // i is 0-based index for original slides -> need to offset by 1
    goTo(i + 1)
  }

  const totalWidth = slideWidth > 0 ? slideWidth * clonedSlides.length : 0
  const percentPerSlide = 100 / clonedSlides.length
  const baseTranslatePx = -index * slideWidth
  const translatePx = baseTranslatePx + dragX
  const translateStyle = slideWidth > 0 ? `translate3d(${translatePx}px,0,0)` : `translate3d(${(-index * percentPerSlide).toFixed(6)}%,0,0)`

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
      style={{ height: 'calc(100vh - var(--site-header-height, 0px))' }}
    >
      <div
        ref={wrapperRef}
        className={`h-full ${withTransition ? 'transition-transform duration-500 ease-in-out' : ''}`}
        style={{ width: slideWidth > 0 ? `${totalWidth}px` : `${clonedSlides.length * 100}%`, transform: translateStyle }}
        onTransitionEnd={onTransitionEnd}
      >
        {clonedSlides.map((child, i) => {
          const isActive = i === index
          return (
            <div
              key={i}
              className="inline-block shrink-0 h-full"
              style={{ width: slideWidth > 0 ? `${slideWidth}px` : `${percentPerSlide}%` }}
            >
              <div
                className={
                  `h-full w-full flex flex-col min-h-0 transition-all duration-700 ease-[cubic-bezier(.2,.9,.2,1)] ` +
                  (isActive
                    ? 'opacity-100 translate-y-0 blur-none pointer-events-auto'
                    : 'opacity-0 -translate-y-6 blur-sm pointer-events-none')
                }
                style={{ willChange: 'opacity, transform, filter' }}
                aria-hidden={!isActive}
              >
                {child}
              </div>
            </div>
          )
        })}
      </div>

      {/* Arrows */}
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

      {/* Dots centered */}
      <div className="absolute left-1/2 bottom-6 z-20 flex -translate-x-1/2 items-center gap-3">
        {slidesArray.map((_, i) => {
          const isActive = index === i + 1
          return (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 ${isActive ? 'w-10' : 'w-6'} rounded-full transition-all ${isActive ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            />
          )
        })}
      </div>
    </div>
  )
}
