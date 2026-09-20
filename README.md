# AeroSun Energy

> **Hybrid solar wind energy systems in India — built for rooftops, roads, parks, and industry.**

Live site: [aerosunenergy.in](https://aerosunenergy.in)

---

## Overview

AeroSun Energy is a marketing and information website for a hybrid solar-wind energy company serving customers across India. The site showcases AeroSun's technology, deployment use-cases, and wind turbine product range, guiding visitors from discovery through to an enquiry.

Key highlights communicated on the site:

- **24/7 power generation** — solar and wind working in tandem, day and night
- **Up to 80% reduction** in electricity bills
- **4–6 year typical ROI** window
- **Smart IoT monitoring** — real-time dashboard for generation, consumption, and savings
- **Multi-site deployment** — residential rooftops, public parks, roads & highways, and commercial/industrial land

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (static export) |
| UI library | [React 19](https://react.dev/) |
| Language | TypeScript 6 |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) |
| 3D graphics | [React Three Fiber 9](https://docs.pmnd.rs/react-three-fiber) + [Drei 10](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Utilities | clsx, tailwind-merge |
| Analytics | Google Tag Manager |
| SEO tooling | IndexNow (auto-submitted on build) |

---

## Project Structure

```
AeroSunEnergy/
├── app/
│   ├── components/         # All page sections and shared UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── SavoniusRotor.tsx   # Interactive 3D Savonius rotor (Three.js)
│   │   ├── UseCases.tsx
│   │   ├── Benefits.tsx
│   │   ├── Services.tsx
│   │   ├── WindGenerators.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── JsonLd.tsx          # Structured data for SEO
│   │   ├── Card.tsx            # Reusable card component
│   │   └── logo.tsx
│   ├── lib/
│   │   └── utils/
│   ├── globals.css
│   ├── layout.tsx          # Root layout with metadata, GTM, dark-mode script
│   └── page.tsx            # Home page
├── public/
│   ├── images/             # Hero, section, and product images
│   ├── sitemap.xml
│   └── robots.txt
├── scripts/
│   └── submit-indexnow.js  # Post-build IndexNow submission
├── next.config.ts          # Static export configuration
├── tailwind.config.ts
└── tsconfig.json
```

---

## Page Sections

| Section | Description |
|---|---|
| **Hero** | Headline, proof-points, key stats (24/7 availability, 4–6 yr ROI, IoT app, multi-site) |
| **About** | Company background and mission |
| **How It Works** | Five-step process: Site Assessment → Custom Design → Installation → Smart Monitoring → Continuous Power |
| **Features** | 24/7 generation, smart grid integration, low maintenance, scalable installation, eco-friendly, efficient land use |
| **Savonius Rotor** | Interactive 3D animated Savonius turbine built with React Three Fiber |
| **Use Cases** | Roads & highways, public parks, residential rooftops, commercial & industrial land |
| **Benefits** | Financial and environmental advantages |
| **Services** | Cost savings, zero-emission power, IoT monitoring, low maintenance, space efficiency |
| **Wind Generators** | H-Darrieus VAWT, Helical Flower Turbine, Savonius VAWT, Rooftop Smart VAWT |
| **Why Choose Us** | Certified team, smart systems, fully scalable, 24/7 support |
| **CTA Section** | Contact / free quote call-to-action |
| **Footer** | Navigation, legal, contact links |

---

## Wind Turbine Products

| Model | Type | Capacity | Best For |
|---|---|---|---|
| H-Darrieus Turbine | H-VAWT | 1 kW – 200 kW | Urban corridors & mid-wind sites |
| Helical Flower Turbine | Flower VAWT | 0.5 – 50 kW | Urban rooftops & quiet environments |
| Savonius VAWT | Low-Wind VAWT | 0.3 – 30 kW | Low wind speed & off-grid sites |
| Rooftop Smart VAWT | Rooftop | Compact | Homes, apartments & terrace retrofits |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

### Install dependencies

```bash
npm ci
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

The site is exported as a static site into the `out/` directory. The `postbuild` step automatically submits the sitemap via IndexNow and prints a Google index verification summary.

To enable the Google index verification step, set these environment variables before running the build:

```bash
GOOGLE_CUSTOM_SEARCH_API_KEY=your_google_api_key
GOOGLE_CUSTOM_SEARCH_CX=your_programmable_search_engine_id
```

You can also run the check directly:

```bash
npm run google:index-check
```

### Preview the production build

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Deployment

The project is configured for **static export** (`output: 'export'` in `next.config.ts`) and is hosted at [aerosunenergy.in](https://aerosunenergy.in). Any static hosting provider (Hostinger, Vercel, Netlify, GitHub Pages, etc.) can serve the `out/` directory directly.

---

## SEO & Analytics

- **Metadata** — full Open Graph, Twitter Card, and canonical URL configuration in `app/layout.tsx`
- **Structured data** — JSON-LD injected via `JsonLd.tsx` for rich search results
- **Sitemap & robots.txt** — located in `public/`
- **Bing Webmaster** — site verification via `msvalidate.01` meta tag
- **Google Tag Manager** — GTM container loaded in the root layout
- **IndexNow** — URLs are submitted automatically after every production build

---

## License

See [LICENSE](LICENSE) for details.