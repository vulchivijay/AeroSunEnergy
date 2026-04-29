'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { getBasicElectricalConceptData, useLocale } from '@/app/lib/LocaleContext'

function toTitleCase(key: string) {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      {!loaded && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-emerald-500" />
        </span>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 95vw"
        className={`object-cover transition-all duration-300 hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close image"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
        >
          ✕
        </button>
        <div className="relative aspect-video w-full bg-slate-900">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 80vw, 95vw"
            className="object-contain"
            priority
          />
        </div>
        <div className="bg-slate-900/90 px-5 py-3 text-center text-sm font-medium text-white">{alt}</div>
      </div>
    </div>
  )
}

export default function BasicElectricalConceptsContent() {
  const { locale } = useLocale()
  const conceptData = getBasicElectricalConceptData(locale)
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const closeModal = useCallback(() => setModalImage(null), [])

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_10%,rgba(251,191,36,0.2),transparent_36%),radial-gradient(circle_at_92%_18%,rgba(16,185,129,0.18),transparent_34%),linear-gradient(160deg,#f8fafc_0%,#eef2ff_38%,#ecfeff_100%)] px-6 py-12 text-slate-900 sm:px-8 lg:px-12">
      {modalImage && <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />}
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/70 bg-white/80 p-7 shadow-xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Knowledge Base</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{conceptData.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{conceptData.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-emerald-800">
              {conceptData.components.length} concepts
            </span>
            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition-colors hover:bg-slate-200"
            >
              Back to home
            </Link>
          </div>
        </div>

        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {conceptData.components.map((item) => {
            const content = item.content ?? {}
            const imagePath = item.image ?? `/images/basic-electrical-concepts/${slugify(item.name)}.png`
            const listEntries = Object.entries(content)
              .filter(([, value]) => Array.isArray(value) && value.length > 0) as Array<[string, string[]]>

            return (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <button
                    type="button"
                    className="relative block w-full aspect-video cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    onClick={() => setModalImage({ src: imagePath, alt: item.name })}
                    aria-label={`View ${item.name} image`}
                  >
                    <CardImage src={imagePath} alt={item.name} />
                  </button>
                </div>

                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 p-4">
                  <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                  {item.category ? (
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-sky-700">
                      {item.category}
                    </span>
                  ) : null}
                </div>

                {content.purpose ? <p className="text-md text-slate-700"><strong>Purpose:</strong> {content.purpose}</p> : null}
                {content.working ? <p className="mt-2 text-md text-slate-700"><strong>Working:</strong> {content.working}</p> : null}

                {listEntries.length > 0 ? (
                  <div className="mt-4 space-y-3">
                    {listEntries.map(([key, values]) => (
                      <div key={key}>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">{toTitleCase(key)}</h3>
                        <ul className="mt-2 space-y-1.5">
                          {values.map((value) => (
                            <li key={value} className="rounded-md bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
                              {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            )
          })}
        </section>
      </div>
    </main>
  )
}
