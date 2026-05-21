# CorpEase — Prompt History

All prompts from every session are logged here in order.
Add new sessions at the **bottom**. Keep a one-line summary per session header.

---

## Session 1 — Initial Build (2026-04-24)
*Scaffolded the entire React project from a single HTML prototype.*

### Prompts

**[1]** *(Provided `corpease_full_website.html` prototype)*
> Context: "surf indiafilings.com, build a clean modern website with same services,
> inspiration of scribbles and illustrations"

**[2]** *(Scaling request)*
> "Surf IndiaFilings again, create separate service pages for every service across
> all categories, keep the warm/scribble/illustration design, remove pricing from
> cards, make all service cards interactive (link to real pages), make fully responsive
> across PC / Tablet / Mobile, real-world file structure."

**[3]** *(Tech stack decision)*
> "Have this website the same file structure as that of real world site.
> Frontend: React. Backend: Currently there is no backend. I just want you to know that
> in near future, I'll setup a google sheet which will fetch all the data entered in the form.
> Let me know if you've any questions before proceeding."

**[4]** *(Answered planning questions)*
> "Tailwind CSS" *(for styling)*
> "Mega-menu navigation" *(for nav style)*

**[5]** *(Approved plan and kicked off build)*
> *(ExitPlanMode approval — no text)*

### What was built
- Full Vite 5 + React 18 + Tailwind CSS scaffold (manual, bypassing create-vite Node version issue)
- 8 service data files covering all 45 services
- All pages: Home, ServicesHub, ServiceCategory, ServiceDetail (data-driven), Pricing, About, Contact
- Navbar with mega-menu + mobile drawer
- Footer, all UI components (Button, Badge, CTABand, FAQAccordion, DocumentChecklist)
- Category-level SVG illustrations (8 total)
- Clean production build: 63 modules, 2.33s

---

## Session 2 — UI Polish & Navigation Improvements (2026-04-24)
*Fixed 4 visual/UX issues identified after first visual review.*

### Prompts

**[6]** *(Screenshot shared showing dropdown clipping off right edge)*
> "Currently, while hovering over navbar for far right menus (shown in attached screenshot),
> its dropdown is visible only half, the other half is hiding out of the screen. Can you
> make dropdown to adjust accordingly for every menu on navbar."
>
> "Also the navbar is confusing, we have both generic and services navbar combined.
> Please suggest me something that would ease the user to roam around the website."
>
> "Make use of different SVGs for different sub services on their respective pages accordingly."
>
> "Can you make 'Learn more' a bit bold or may be increase its font size within the cards,
> so that user can have clear visibility of what is actually written."

**[7]** *(Approved plan)*
> *(ExitPlanMode approval — no text)*

**[8]**
> "can you continue ?"

**[9]**
> "let get back to the work, which was paused!"

### What was changed
- **"Learn more" / "Explore service"** → switched from `font-sketch` to `font-body` (DM Sans) — legible now
- **Navbar restructured** → removed per-category buttons, replaced with single "Services ↓" mega-menu
  (2-row × 4-col grid, all 8 categories with top services nested below each)
- **Mega-menu overflow** → resolved by the navbar restructure (new menu is center-anchored, never clips)
- **Per-service SVGs** → created `ServiceIllustrations.jsx` with 45 unique inline SVGs (one per service slug),
  wired into `ServiceDetail.jsx` replacing the shared category illustration

---

## Session 3 — Meta / Infrastructure (2026-04-24)
*Set up project memory, prompt log, and local version control.*

### Prompts

**[10]**
> "Can you create a memory rehydration protocol file(s). That would work as a context
> guide for this project when context windows run out."
>
> "Also, create file(s), that would store all the prompts."
>
> "Can we have a version control over here (not via Github). This way we can switch back
> to the previous version if current one doesn't sound promising."
>
> "All these functionalities should be updated frequently as the project updates."

### What was created
- `CONTEXT.md` — full rehydration protocol (see that file)
- `.claude/prompts.md` — this file
- `VERSIONS.md` — version history log
- `scripts/snapshot.sh` — one-command version snapshot script
- Local git initialized with first commit tagged `v1.0`

---

## How to add future sessions

Copy this template at the bottom of this file:

```
## Session N — Short Title (YYYY-MM-DD)
*One sentence describing what this session was about.*

### Prompts

**[N]**
> "exact prompt text here"

### What was changed
- bullet list of actual changes made
```

---

*Keep this file committed to git so version history is preserved.*
