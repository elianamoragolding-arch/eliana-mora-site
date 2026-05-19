# Project Specs — Eliana Mora Personal Site

## What the app does
A personal career portfolio for Eliana Mora, Senior Program Manager. Showcases her 12-year career, key metrics, 6 campaign case studies, and contact information.

## Who uses it
Hiring managers, potential clients, professional contacts.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + CSS custom properties (design tokens)
- Fonts: Geist + Geist Mono (next/font/google)
- Deployment: Vercel

## Pages & User Flows

### Home (`/`)
- NavBar (logo + work/about/contact links + REACH OUT button)
- Hero (display headline "I ship things." + 2 CTAs)
- MetricGrid ($100M+, 193+, 100%, 12+ stats)
- Work section (`#work`) — 2-column grid of 6 CaseStudyCards
- Experience section (`#about`) — display headline + ExperienceList + stack/certs
- Contact section (`#contact`) — ContactBlock
- Footer

### Case Study (`/work/[id]`)
- Back button → home `/#work`
- Bracket label (year — client)
- Large mono display title
- Intro paragraph
- MetricGrid (campaign-specific metrics)
- Sections (concept/mechanics/strategy)
- Divider + role credit + back/contact CTAs

## Navigation
- Clicking work/about/contact in NavBar smooth-scrolls on home page
- From case study page, nav links push to `/#section`
- CaseStudyCards link to `/work/[id]`

## Data Models
All data lives in `lib/data.ts` — no database, no auth.
- `METRICS` — 4 top-line numbers
- `CASE_STUDIES` — 6 cards with id, year, client, title, blurb, metrics[]
- `CASE_STUDY_DETAIL` — 6 detailed records with intro, sections[], metrics[]
- `EXPERIENCE` — 5 job records with role, company, period, bullets[]

## Third-Party Services
- None (mailto: links for contact)
- Resume PDF lives in `public/resume.pdf`

## Done means
- Build passes with zero TypeScript errors
- All 6 case study pages render correctly
- Smooth scroll works on home page
- NavBar from case study page navigates home correctly
- Pixel-faithful to the Claude Design prototype
