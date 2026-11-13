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

| Layer       | Technology                                                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/)                                                                                                            |
| UI library  | [React 19](https://react.dev/)                                                                                                               |
| Language    | TypeScript 6                                                                                                                                 |
| Styling     | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                                   |
| Animations  | [Framer Motion 12](https://www.framer.com/motion/)                                                                                           |
| 3D graphics | [React Three Fiber 9](https://docs.pmnd.rs/react-three-fiber) + [Drei 10](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| Icons       | [Lucide React](https://lucide.dev/)                                                                                                          |
| Utilities   | clsx, tailwind-merge                                                                                                                         |
| Analytics   | Google Tag Manager                                                                                                                           |
| SEO tooling | IndexNow (auto-submitted on build)                                                                                                           |

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

| Section             | Description                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Hero**            | Headline, proof-points, key stats (24/7 availability, 4–6 yr ROI, IoT app, multi-site)                            |
| **About**           | Company background and mission                                                                                    |
| **How It Works**    | Five-step process: Site Assessment → Custom Design → Installation → Smart Monitoring → Continuous Power           |
| **Features**        | 24/7 generation, smart grid integration, low maintenance, scalable installation, eco-friendly, efficient land use |
| **Savonius Rotor**  | Interactive 3D animated Savonius turbine built with React Three Fiber                                             |
| **Use Cases**       | Roads & highways, public parks, residential rooftops, commercial & industrial land                                |
| **Benefits**        | Financial and environmental advantages                                                                            |
| **Services**        | Cost savings, zero-emission power, IoT monitoring, low maintenance, space efficiency                              |
| **Wind Generators** | H-Darrieus VAWT, Helical Flower Turbine, Savonius VAWT, Rooftop Smart VAWT                                        |
| **Why Choose Us**   | Certified team, smart systems, fully scalable, 24/7 support                                                       |
| **CTA Section**     | Contact / free quote call-to-action                                                                               |
| **Footer**          | Navigation, legal, contact links                                                                                  |

---

## Wind Turbine Products

| Model                  | Type          | Capacity      | Best For                              |
| ---------------------- | ------------- | ------------- | ------------------------------------- |
| H-Darrieus Turbine     | H-VAWT        | 1 kW – 200 kW | Urban corridors & mid-wind sites      |
| Helical Flower Turbine | Flower VAWT   | 0.5 – 50 kW   | Urban rooftops & quiet environments   |
| Savonius VAWT          | Low-Wind VAWT | 0.3 – 30 kW   | Low wind speed & off-grid sites       |
| Rooftop Smart VAWT     | Rooftop       | Compact       | Homes, apartments & terrace retrofits |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.19 or later
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

The production build runs as a Next.js server so authentication and form API routes can connect to PostgreSQL on AlloyDB. The `postbuild` step automatically submits the sitemap via IndexNow and prints a Google index verification summary.

To enable the Google index verification step, set these environment variables before running the build:

```bash
GOOGLE_CUSTOM_SEARCH_API_KEY=your_google_api_key
GOOGLE_CUSTOM_SEARCH_CX=your_programmable_search_engine_id
```

You can also run the check directly:

```bash
npm run google:index-check
```

### Run the production server

```bash
npm run build
npm start
```

The Next.js server listens on the `PORT` environment variable (8080 by default), so it can run as a Cloud Run container.

### Configure AlloyDB PostgreSQL

Set a server-only PostgreSQL connection URI on the Cloud Run service. Do not prefix database credentials with `NEXT_PUBLIC_`; store production credentials in Secret Manager.

```text
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/aerosunenergy?sslmode=require
# Optional: an admin connection URI with CREATEDB privileges, used only by db:migrate.
DATABASE_ADMIN_URL=postgresql://ADMIN_USER:PASSWORD@HOST:5432/postgres?sslmode=require
DASHBOARD_ADMIN_EMAILS=admin@example.com
```

Connect through the AlloyDB Auth Proxy or a supported AlloyDB endpoint. For local development, run the [AlloyDB Auth Proxy](https://cloud.google.com/alloydb/docs/auth-proxy/overview) and point `DATABASE_URL` at its local PostgreSQL port.

Apply the schema to the target database:

```bash
npm run db:migrate
```

This is a schema setup, not a copy of existing Cloud SQL rows. It creates the target database if it doesn't exist, then creates the `auth_users`, `auth_sessions`, `solar_referrals`, and `website_form_submissions` tables. Database creation requires a PostgreSQL role with `CREATEDB`; set `DATABASE_ADMIN_URL` to a separate administrative connection when the application role doesn't have that privilege. The target role needs permission to create tables, indexes, and functions. Website form records from every supported form type share `website_form_submissions`, distinguished by `form_type` and stored as JSONB. Referral records use `solar_referrals`; all tables are in the same configured database. The migration does not run automatically during deployment.

Set `DASHBOARD_ADMIN_EMAILS` to a comma-separated list of registered account email addresses permitted to access `/dashboard`. The dashboard requires this server-only allowlist and omits password hashes and session tokens from its views.

### Lint

```bash
npm run lint
```

---

## Deployment

The app must run as a Next.js server for login, signup, dashboard, referral, and form-submission API routes; static-only hosting is no longer sufficient. Deploy the server to Cloud Run with its AlloyDB PostgreSQL connection configured. The public website remains available at [aerosunenergy.in](https://aerosunenergy.in).

---

## SEO & Analytics

- **Metadata** — full Open Graph, Twitter Card, and canonical URL configuration in `app/layout.tsx`
- **Structured data** — JSON-LD injected via `JsonLd.tsx` for rich search results
- **Sitemap & robots.txt** — located in `public/`
- **Bing Webmaster** — site verification via `msvalidate.01` meta tag
- **Google Tag Manager** — GTM container loaded in the root layout
- **Build configuration report** — `npm run build` reports whether Search Console, Google Analytics, and GTM variables are configured without printing their values; tracking scripts still require cookie consent
- **IndexNow** — URLs are submitted automatically after every production build

---

## License

See [LICENSE](LICENSE) for details.
