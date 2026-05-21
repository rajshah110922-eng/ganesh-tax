# CorpEase — Project Rehydration Protocol

> **How to use:** At the start of every new Claude session, say:
> *"Read CONTEXT.md and resume work."*
> Claude will read this file and be fully up to speed without needing any recap.

---

## Quick State ← UPDATE THIS EVERY SESSION

```
Last updated : 2026-04-24
Last session : Built per-service SVG illustrations (45 unique SVGs), restructured
               navbar to single "Services" mega-menu, fixed dropdown overflow,
               fixed "Learn more" text legibility.
Current build: COMPLETE — all pages built, all 45 service pages working, clean prod build.
Dev server   : npm run dev  →  http://localhost:5174
Pending      : Nothing currently pending. Awaiting next user request.
```

---

## Project Overview

**CorpEase** — Indian business compliance platform (think IndiaFilings.com).
Helps startups and businesses with company registration, GST, trademarks, tax filing,
MCA compliance, payroll, and global expansion.

- **Client:** rpirthavi@gmail.com
- **Design style:** Warm / scribble / sketch aesthetic. Cream backgrounds, sage green
  primary, rust accent, gold highlight, navy secondary. Handwriting font (Caveat) for
  decorative labels, Fraunces serif for headings, DM Sans for body.
- **Tone:** Founder-first, human, no-jargon.

---

## Tech Stack

| What | Choice |
|---|---|
| Build tool | Vite 5 |
| Framework | React 18 (JSX, no TypeScript) |
| Router | React Router v6 |
| Styling | Tailwind CSS v3 + custom tokens |
| State | React local state only — no Redux, no Zustand |
| Backend | None yet (Google Sheets webhook planned for contact form) |
| Deployment | Not yet deployed |

### Key commands
```bash
npm run dev      # start dev server → http://localhost:5174
npm run build    # production build → dist/
npm run preview  # preview production build
```

> **Node version note:** Node v18.16.0 is installed. `create-vite@9` requires Node ≥20.
> The project was scaffolded manually to work around this. Do NOT run `npm create vite`.

---

## Design System

### Colors (Tailwind tokens)
```
ink    #1a1208   — main text
paper  #faf8f3   — page background
cream  #f2ede0   — card / section backgrounds
warm   #e8dfc8   — subtle fills
muted  #6b5d4a   — secondary text
border #c8bda8   — borders

sage   DEFAULT:#4a7c59  light:#7aad89  pale:#d4ead8  dark:#3a6547
rust   DEFAULT:#c94f2a  pale:#f5e0d8
gold   DEFAULT:#d4a017  pale:#f7edd0
navy   DEFAULT:#1e3a5f  pale:#d6e4f5
```

### Fonts (loaded via Google Fonts in index.html)
```
font-display  →  Fraunces (serif)       — headings, prices, numbers
font-sketch   →  Caveat (handwriting)   — decorative labels, "// section tags"
font-body     →  DM Sans (sans-serif)   — all body copy, nav links, buttons
```

### Key Tailwind patterns used across the codebase
```jsx
// Section sketch tag
<span className="font-sketch text-[18px] text-rust block mb-3">// section name</span>

// Page hero heading
<h1 className="font-display text-[clamp(36px,5vw,60px)] font-bold text-ink tracking-tight leading-[1.1]">

// Card
<div className="bg-cream border border-border rounded-2xl p-6 hover:bg-white hover:border-sage-light hover:-translate-y-1 hover:shadow-md transition-all">

// Primary button
<button className="bg-sage text-white px-6 py-3 rounded-full font-body font-medium hover:bg-sage-dark transition-all">
```

---

## Full File Map

```
e:/GTC/
├── index.html                        ← Google Fonts preload
├── package.json
├── vite.config.js
├── tailwind.config.js                ← All custom tokens defined here
├── postcss.config.js
├── CONTEXT.md                        ← THIS FILE — rehydration protocol
├── VERSIONS.md                       ← Version history log
├── scripts/
│   └── snapshot.sh                   ← Run to save a named version
└── src/
    ├── main.jsx                      ← React root mount
    ├── App.jsx                       ← Router + lazy page imports + Loading fallback
    ├── index.css                     ← Tailwind directives + custom animations
    │
    ├── data/
    │   ├── navigation.js             ← navCategories[] + colorMap — source of truth for nav
    │   ├── pricing.js                ← 3 subscription plans (Starter/Growth/Enterprise)
    │   └── services/
    │       ├── index.js              ← getService(cat, svc) + getCategoryServices(cat) helpers
    │       ├── startup.js            ← 8 services
    │       ├── registrations.js      ← 6 services
    │       ├── trademark.js          ← 6 services
    │       ├── gst.js                ← 6 services
    │       ├── incometax.js          ← 6 services
    │       ├── mca.js                ← 5 services
    │       ├── compliance.js         ← 5 services
    │       └── global.js             ← 3 services
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx            ← Logo + unified "Services" mega-menu + mobile drawer
    │   │   └── Footer.jsx            ← 4-col grid footer
    │   ├── ui/
    │   │   ├── Button.jsx            ← variants: primary/secondary/white/ghost/rust/gold
    │   │   ├── Badge.jsx             ← colored category pill badge
    │   │   ├── CTABand.jsx           ← bottom-of-page CTA strip
    │   │   ├── SectionHeader.jsx     ← reusable section heading component
    │   │   ├── FAQAccordion.jsx      ← collapsible FAQ (closed by default)
    │   │   └── DocumentChecklist.jsx ← checklist for required docs
    │   └── illustrations/
    │       ├── HeroIllustration.jsx  ← SVG for the homepage hero
    │       ├── CategoryIllustrations.jsx ← 8 category-level SVGs (used on ServicesHub)
    │       └── ServiceIllustrations.jsx  ← 45 per-service SVGs + SERVICE_ILLUSTRATIONS map
    │
    └── pages/
        ├── Home.jsx                  ← Hero / ServicesStrip / Why / Process / Preview / Testimonials / CTA
        ├── ServicesHub.jsx           ← /services — all 8 categories with service cards
        ├── ServiceCategory.jsx       ← /services/:category — service list for one category
        ├── ServiceDetail.jsx         ← /services/:category/:service — single data-driven template
        ├── Pricing.jsx               ← Monthly/yearly toggle + 3 plans + FAQ
        ├── About.jsx                 ← Story / Stats / Values / Team
        └── Contact.jsx               ← Contact info + form (no backend yet)
```

---

## Routing

```
/                               →  Home
/services                       →  ServicesHub
/services/:category             →  ServiceCategory
/services/:category/:service    →  ServiceDetail   ← data-driven, single template
/pricing                        →  Pricing
/about                          →  About
/contact                        →  Contact
* (anything else)               →  Inline 404 in App.jsx
```

All routes are lazy-loaded via `React.lazy` + `Suspense`.

---

## Service Catalog (45 services across 8 categories)

| Category slug | # | Services |
|---|---|---|
| startup | 8 | private-limited-company, llp, one-person-company, sole-proprietorship, partnership-firm, section-8-ngo, msme-udyam, startup-india |
| registrations | 6 | trade-license, shop-establishment, fssai-food-license, import-export-code, professional-tax-registration, rcmc-registration |
| trademark | 6 | trademark-registration, trademark-search, trademark-renewal, copyright-registration, patent-filing, design-registration |
| gst | 6 | gst-registration, monthly-gst-filing, annual-gst-return, gst-audit, gst-lut-filing, gst-cancellation |
| income-tax | 6 | itr-1-salaried, itr-business, company-itr, tds-return-filing, tax-planning, income-tax-notice |
| mca | 5 | annual-roc-filing, director-kyc, share-transfer, authorized-capital, registered-office-change |
| compliance | 5 | payroll-processing, pf-esi-registration, labour-law-compliance, professional-tax-compliance, statutory-compliance-audit |
| global | 3 | uae-company-formation, global-expansion, international-trademark |

### Service data shape (every service has all of these)
```js
{
  slug, name, tagline, category: { slug, label, color },
  heroDescription, whatIs,
  benefits: [{ icon, title, description }],
  steps: [{ num, title, description }],
  documents: ['string', ...],
  faqs: [{ question, answer }],
  pricing: { plans: [{ name, price, features: ['string'] }] }
}
```

---

## Key Decisions (do not change without user confirmation)

| Decision | Detail |
|---|---|
| **Pricing visibility** | Shown ONLY at the bottom of each ServiceDetail page, after all value content. Never on cards, never on hub pages. |
| **No TypeScript** | Project uses plain JSX. Do not introduce TypeScript. |
| **No state management library** | React `useState`/`useRef` only. No Redux, Zustand, or Context (except React Router). |
| **No backend** | Contact form shows a fake success state. Google Sheets webhook is planned for later — do not implement until user asks. |
| **Tailwind only** | No CSS Modules, no styled-components, no inline `style` objects except for truly dynamic values. |
| **Font-body for CTA labels** | "Learn more →" and "Explore service →" use `font-body` (DM Sans), NOT `font-sketch` (too hard to read). |
| **Navbar shape** | Single "Services" mega-menu. No per-category buttons in the top bar. |

---

## Navbar Structure (current)

Desktop: `Logo | Home | Services ↓ | Pricing | About | Contact | [Get Started]`

"Services" opens a 2-row × 4-col mega-menu with all 8 categories.
Mobile: hamburger → slide-out drawer with accordion per category.

---

## Animation keyframes (defined in src/index.css)

```
animate-float        — gentle up/down bob (used on illustrations)
animate-wiggle       — subtle rotation wobble
animate-fadeInUp     — entrance from below
animate-slide-down   — dropdown slide in
animate-slideInRight — side entrance
```

---

## How to add a new service

1. Add the service object to the relevant `src/data/services/{category}.js` file
2. Add its `{ label, slug, desc }` entry to the matching category in `src/data/navigation.js`
3. Add a new SVG component to `src/components/illustrations/ServiceIllustrations.jsx`
   and add its slug to the `SERVICE_ILLUSTRATIONS` map at the bottom of that file
4. Visit `/services/{category}/{slug}` to verify the page renders

---

## How to update this file

After every Claude session, update the **Quick State** block at the top with:
- Today's date
- A one-line summary of what was done
- Any new pending items

Everything else only needs updating when the architecture changes.
