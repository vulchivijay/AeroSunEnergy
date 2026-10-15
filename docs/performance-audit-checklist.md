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

## Before pushing to GitHub

Use this checklist before every push or pull request to avoid case-only rename issues that pass locally but fail on GitHub Linux builds.

- Confirm the repo uses exact file and folder casing everywhere.
- Do not rely on Windows/macOS Explorer rename behavior alone; rename with Git when possible:
  - `git mv old-name new-name`
  - `git mv -f old-name new-name` if the case changed only
- Search the repo for old names after any rename.
- Update all imports, aliases, and route references to the new exact casing.
- Check path aliases such as `@/`, `~/`, and relative imports like `../` and `./`.
- Verify the folder names in the filesystem and in the Git status exactly match the code.
- Run a local production build before push:
  - `npm run build`
- Check Git diff before committing:
  - `git status`
  - `git diff --name-status`
- If a case-only rename was made, ensure Git recorded it as a rename and not just a delete/add pair.
- Prefer a Linux environment or CI run to confirm the app works in a case-sensitive environment.
- If GitHub Actions fails with `module not found`, treat it as a case mismatch first.

## Quick rename safety rule

If a file or folder name changes only by case, it is still a different path on Linux. GitHub build runners are case-sensitive, so the repo must match the exact path names used in every import.

## Deployment safety

- Run a full production build locally before pushing: `npm run build`
- Confirm all renamed files and folders are committed with exact casing
- Treat case-only renames as a Linux/GitHub build risk
- Check `git status` and `git diff --name-status` before merge
- Validate route imports and asset paths in CI before deployment

## Release readiness signoff

- Home page and primary service pages render without console errors
- Route loader and navigation transitions remain smooth
- Images load with placeholders and stable dimensions
- Core performance metrics remain within the target ranges above
