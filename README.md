# Varun S. — Portfolio

A ground-up personal portfolio built around a "Telemetry" concept: instrument-gauge
visuals and a signal-trace motion language, grounded in the real arc from Formula
Student brake engineering to business analytics and BI.

Live: https://varun642002.github.io/varun-portfolio/

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS v4 (CSS-first `@theme` tokens, no config file)
- React Router for the home page + case-study routes
- Framer Motion for route transitions only (in-page reveals use native
  CSS scroll-driven animations, not a JS library)

## Structure

- `src/data/content.ts` — every real fact on the site (projects, experience,
  education, achievements, certifications, contact info). Update this file
  to change site content; no component edits needed.
- `src/components/hero/Dial.tsx` — the signature instrument-dial interaction
- `src/components/sections/` — one file per page section
- `src/components/work/` — project card variants
- `src/lib/` — small hooks (reduced motion, touch detection, 3D tilt, count-up, etc.)

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run lint      # oxlint
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages via GitHub Actions. The Vite `base` in
`vite.config.ts` is set to `/varun-portfolio/` to match the Pages project
path — update it if the repo is ever renamed or moved to a custom domain.

## Content credit

Real project screenshots, the resume PDF, and certificate images are the
same assets used on the previous portfolio (`varun642002.github.io`); the
design, structure, and code here are new.
