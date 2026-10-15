# Performance audit checklist

This project keeps a lightweight Lighthouse-oriented checklist for fast page delivery, smooth rendering, and stable layout.

## Core checks

- Use optimized, compressed images and avoid oversized hero graphics.
- Prefer `next/image` with explicit `sizes`, `priority` only for above-the-fold media, and blur placeholders for perceived speed.
- Minimize JavaScript used in the critical path; keep client-only logic limited to interactive widgets.
- Keep the homepage and route load states visible with skeleton loaders for content transitions.
- Audit route transitions for hydration and layout shift.

## Target metrics

- LCP: under 2.5s on a mid-range mobile profile.
- INP: under 200ms.
- CLS: under 0.1.
- TTFB: under 800ms on a clean deployment.

## Page timing telemetry

- The app records key performance timings in `PerformanceMonitor` and stores them in `sessionStorage` as a lightweight debug signal.
- Visible metrics include TTFB, DOMContentLoaded, load time, FCP, and CLS.

## Recommended rollout

1. Keep placeholder SVGs for local marketing images.
2. Re-check hero image weights and format when publishing new assets.
3. Run Lighthouse in Chrome DevTools on the home page and main service pages after each significant content update.
4. Compare new `CLS` and `FCP` values against the baseline before launching a new page revision.
