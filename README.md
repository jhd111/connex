# AB Technologies — Website

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, animated with
**Framer Motion**, icons from **lucide-react**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- **/** — header, hero, service-hub diagram, service card grid, footer
- **/services** — full services overview: intro, then one detailed section
  per service (description, two-column feature list, tag pills)
- **/sectors** — sectors overview: intro, then a card per sector (Healthcare,
  Hospitality, Education, Commercial & Industrial, Retail, IT & Data Centres)
  with photo, title and description
- **/projects**, **/about**, **/contact** — minimal placeholder pages (just
  the page title, as requested) ready for real content later

## Navigation

All internal links use Next's `<Link>` for client-side routing (no full-page
reloads). Homepage service cards link straight to their section on
`/services#<slug>`. The nav bar's Home, Services, Sectors, Projects, About
and Contact links all point to real routes; Designer still points to `/#designer`
since no Designer page/content has been specified yet.

## Content

- Service copy lives in `lib/services-data.ts`
- Sector copy lives in `lib/sectors-data.ts`

Edit either file and the relevant pages update together.

## Images

Photos are hotlinked from Pexels (free to use) via `next/image` —
`next.config.mjs` allow-lists `images.pexels.com` as a remote host. Swap any
image by changing its `image` URL in the relevant data file.

## Background

- Homepage: a teal-to-navy glow (`.top-glow`) behind the header/hero
- Services & Sectors pages: a subtler dark-navy vertical gradient
  (`.page-gradient`), sampled from your reference screenshots

## Responsiveness, SEO & animation

Fluid from ~360px up to large desktop using Tailwind's `sm/lg` breakpoints.
Full metadata per page, `Organization` JSON-LD, `sitemap.ts`, `robots.ts`,
and descriptive `alt` text throughout. Framer Motion scroll/hover animation
respects `prefers-reduced-motion`.

## Deploying

Works out of the box on Vercel: `vercel deploy`, or `npm run build && npm start`
on any Node host.
