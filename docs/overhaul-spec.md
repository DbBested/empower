# Empower Initiative — Website Overhaul Spec

One-time task brief for a new, by-topic, data-driven site organization with
grouped dropdown navigation and a chapter locator. Durable project rules (stack,
tokens, accessibility, components) live in `CLAUDE.md` and are the source of
truth. Page copy lives in `content/`.

> **Run it like this:** start a Claude Code session with "Read `CLAUDE.md` and
> `docs/overhaul-spec.md`, then propose a Phase 1 task plan before writing
> code." Confirm the plan, then build phase by phase.

## Home page: frozen, with one narrow exception

`src/app/page.tsx` stays as is — hero, marquee, stats band, the four numbered
sections, testimonials: all frozen. The **only** permitted edits are the
links/labels on its four numbered sections, whose old targets are gone:

- `01 About Us` → `/about`
- `02 Tutoring` → `/resources/tutoring-guidelines`
- `03 Resources` → relabel **"Start a Chapter"** → `/start-a-chapter`
- `04 Join Us` → `/chapters` (label "Join Us" may stay — it reads as a warm CTA
  into the locator)

Owner may tweak these labels. No other changes to home.

## Information architecture

Navbar — three menu-only dropdowns, a Donate button, and Contact in the footer:

- **About ▾** → Our Story (`/about`), Our Team (`/our-team`)
- **Chapters ▾** → Find Your Chapter (`/chapters`), Start a Chapter
  (`/start-a-chapter`)
- **Resources ▾** → Tutoring Guidelines (`/resources/tutoring-guidelines`),
  Officer Roles (`/resources/officer-roles`)
- **Donate** → `.button-primary` CTA (`/donate`)
- **Contact** → footer (`/contact`)

Dropdown triggers are menu-only (open a menu, not themselves pages). Children are
real, deep-linkable routes.

| Route | Reached via | Contains | Source |
|---|---|---|---|
| `/` (home) | logo | Frozen (see above) | existing |
| `/about` | About ▾ → Our Story | Empower overview, what we do, mission | `content.json` → `about` |
| `/our-team` | About ▾ → Our Team | Program-level provisional officers (founding members) + founder; ends with a link "Look for chapter-specific officers" → `/chapters` | `content.json` → `team` |
| `/chapters` | Chapters ▾ → Find Your Chapter | Locator: warm "join us" intro, map + accessible list; click a chapter → info card (officers + grouped signup links); "Don't see your area? Start a chapter →" CTA → `/start-a-chapter` | **`src/content/chapters/`** (typed) |
| `/chapters/[slug]` | "full chapter page" link from a card | One chapter's location, officers, alums, and all four signup links | **`src/content/chapters/<slug>.ts`** |
| `/start-a-chapter` | Chapters ▾ → Start a Chapter | The full guide (checklist) + interest-form link | `content.json` → `startAChapter` |
| `/resources/tutoring-guidelines` | Resources ▾ | Reference: what tutors do, benefits, responsibilities | `content.json` → `tutors` |
| `/resources/officer-roles` | Resources ▾ | Reference: the five role descriptions | `content.json` → `officers` |
| `/contact` | footer | Email, Instagram | `content.json` → `contact` |
| `/donate` | nav button | Kept as-is | existing |

### Routes to add
`/about`, `/our-team` (rebuild), `/chapters`, `/chapters/[slug]`,
`/start-a-chapter`, `/resources/tutoring-guidelines`,
`/resources/officer-roles`, `/contact`.

### Routes kept
`/` (frozen), `/donate`.

### Routes to remove (with redirects)
Delete `src/app/<route>/`, remove all links, and add `redirects()` in
`next.config`:

- `/webinars` → `/`
- `/resources` (old single page) → `/resources/tutoring-guidelines`
- `/tutoring` → `/resources/tutoring-guidelines`
- `/join-us` → `/chapters`
- `/our-team` is **kept** (rebuilt from data) — no redirect.

## Section roles (keep each honest)

- **Chapters** is action/destination: find an existing chapter (and act on it) or
  start a new one. Anything with a form or signup lives here.
- **Resources** is a reference shelf — informational only. Pages inform; they do
  not funnel. A quiet "find your chapter" link at the end is fine, but Resources
  is not a conversion surface.
- **No standalone per-action pages** (e.g. "Become a Tutor", "Sign up your
  child"). They'd be empty forwarders to the locator. Instead, the locator's
  intro welcomes both audiences ("Families, find your chapter to enroll your
  student; volunteers, find your chapter to start tutoring"), and the chapter
  card splits links For Families / For Volunteers.

## Chapters: locator + data

Each chapter is a **typed TypeScript module** in `src/content/chapters/`, not
JSON — so a missing/misspelled field is a compile error and editors autocomplete
the shape. The shape is defined once in `src/content/types.ts` (`Chapter`,
`Officer`, `Alum`, `JoinMethod`) and every chapter is declared `: Chapter`
against it. An index file (`src/content/chapters/index.ts`) imports each chapter
and exports a `chapters: Chapter[]` array; the locator and `[slug]` page read
that array. Nothing is hardcoded in components.

Notable shape details:

- `Officer.email` is **optional** — omit it when a role has no published email.
- `links.parentGroupChat` is a `JoinMethod` **discriminated union**, because a
  group chat isn't always a URL: `{ method: "link" | "qr" | "code" | "other" }`
  carries the right fields per method (a join URL, a QR image, a text code, or
  freeform instructions). The card/page must handle every variant. The same
  `JoinMethod` type is reusable if, say, the Google Classroom link ever becomes
  a class code instead.

**`/chapters` (Find Your Chapter):**

- Warm intro/hero up top (the "join us" invitation — the friendliness lives in
  the page, not the nav label).
- An **interactive map** of chapter locations paired with an equally usable
  **accessible list** (see accessibility). Both render from the `chapters` array.
- Click a chapter (marker or list item) → an **info card** with its officers and
  its four signup links (grouped For Families / For Volunteers), plus a **"View
  full chapter page"** link to `/chapters/[slug]`.
- A persistent **"Don't see your area? Start a chapter →"** CTA → `/start-a-chapter`.

**`/chapters/[slug]` (full chapter page):**

- Dynamic route via `generateStaticParams` mapping over the `chapters` array
  (one static page per chapter).
- Shows location, officers, alums, all four links (grouped), and brief family
  guidance (e.g. how to report an absence).

Adding a chapter = create `src/content/chapters/<slug>.ts` and add one import
line to `index.ts`. It then appears in the map, the list, and as its own page.
(This one manual import line is the small cost of Level 1 typing vs. a JSON
folder scan — in exchange for compile-time safety.)

## Accessibility — non-negotiable (per `CLAUDE.md`, WCAG 2.1 AA)

**Chapter map:**

- The map MUST be paired with a **keyboard-navigable list** exposing the same
  chapters, info, and links — a first-class path, not a hidden fallback.
- Markers/items have accessible names and visible focus
  (`focus-visible:ring-crab`); the card opens/closes via keyboard (Enter/Space
  open, Escape close, focus returns to trigger).
- Map pan/zoom/animation respects `prefers-reduced-motion`.
- **Build choice (decide at build):** a real mapping library (accurate, heavier,
  more a11y work) vs. a hand-drawn **SVG map** (on-brand with `Doodles`, simpler
  with few chapters). The accessible list is required either way.

**Dropdown navs** — disclosure/menu-button pattern, NOT CSS `:hover`:

- Trigger is a `<button>` with `aria-expanded` + `aria-controls`; open/close on
  click + Enter/Space; Escape closes and restores focus; outside-click closes.
- Items focusable only while open; out of the tab order when closed.
- Active child sets `aria-current="page"`; parent shows a non-color active hint.
- Works in **both** navbars (absolute top + fixed floating), respecting the
  existing `inert` toggle. Mobile (sub-900px): groups render as an accordion in
  the hamburger panel. Transitions respect `prefers-reduced-motion`; bar stays
  `bg-transparent`.

## Reuse the existing design system — do not reinvent

- **Tokens** (`globals.css @theme`): `crab` #F26749, `sand-dollar` #FCDED6,
  `vista-blue` #83A5F2, `deep-ocean` #204ECF, `butterscotch` #EA9836, `gray`
  #555; Poppins / Open Sans. No new colors/fonts.
- **Hand-drawn SVGs**: `Doodles.tsx` (also a candidate for the SVG map).
- **Motion/reveal**: `Reveal.tsx`, `Parallax.tsx`; global Lenis smooth scroll.
- **Buttons**: `.button-primary` / `.button-secondary`.
- **Cards/carousels**: `TeamMember`, `Slideshow`, `QuotesSlide`.
- **Accessibility patterns** per `CLAUDE.md`.

## Data shape note: officer roles

Secretary and Historian have *grouped* responsibilities (sub-headings); the
others are flat lists. The shared role component must render both a flat array
and a grouped object. See `content.json`.

## Phased build plan

Confirm each phase before the next.

- **Phase 0 — Decision:** confirm the home link/label fixes (defaults above).
  (No code.)
- **Phase 1 — Data + content/reference routes:** scaffold `content/chapters/`,
  migrate the old hardcoded team data into chapter files + the program `team`
  block; build `/about`, `/our-team`, `/start-a-chapter`,
  `/resources/tutoring-guidelines`, `/resources/officer-roles`, `/contact`.
  Officer Roles uses a component that renders both flat and grouped data.
  - Acceptance: every content-doc item appears on the right route; editing a
    content/chapter file changes the page; no hardcoded team data left.
- **Phase 2 — Chapter locator:** build `/chapters` (warm intro, map + accessible
  list, info card, Start-a-Chapter CTA) and the dynamic `/chapters/[slug]` pages.
  - Acceptance: map and list both list all chapter files; card shows correct
    officers + grouped links; full pages generate per chapter; meets the locator
    a11y requirements; single chapter still works sensibly.
- **Phase 3 — Dropdown nav + footer:** rebuild the navbar to the three-dropdown
  structure with the disclosure pattern (both navbars + mobile accordion); put
  Contact in the footer; Donate as a button.
  - Acceptance: full keyboard operation, correct ARIA, `inert` isolation intact,
    mobile accordion works, reduced-motion honored.
- **Phase 4 — Remove old routes + rewire links:** delete `/webinars`,
  `/resources` (old), `/tutoring`, `/join-us`; add redirects; apply the home
  link/label fixes.
  - Acceptance: no dead links; old paths redirect; home diff limited to the
    permitted fixes.
- **Phase 5 — Polish:** scatter existing `Doodles` + `Reveal` on new sections;
  spacing checked against tokens.
  - Acceptance: visuals consistent with existing pages; no new colors/fonts.
- **Phase 6 — A11y & responsive pass:** keyboard-only walkthrough of every new
  page, all three dropdowns, both navbars, and the locator; contrast; all
  breakpoints; reduced-motion.
  - Acceptance: meets the `CLAUDE.md` accessibility bar; no horizontal scroll on
    small screens.

## Open decisions for the owner

1. Home link/label fixes — confirm or adjust the defaults above.
2. Chapter map: real mapping library vs. hand-drawn SVG map (decide at build).