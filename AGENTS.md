# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Next.js dev server on port 5173
npm run build     # Production build (next build)
npm run start     # Start production server
npm run lint      # Run ESLint via next lint
```

Dev server runs on **port 5173** (configured via `next dev -p 5173`). Don't run `npm run build` while the dev server is up — both write to `.next/` and will corrupt the webpack manifest. If that happens, kill the dev server, `rm -rf .next`, and restart.

## Architecture

This is the website for **Empower Initiative**, a high-school tutoring nonprofit. It's a **Next.js 15 App Router** project with **React 19** and **TypeScript**.

**Content & data.** Chapter data is typed TS in `src/content/chapters/` — one
module per chapter, declared `: Chapter` against `src/content/types.ts`, and
aggregated in `index.ts` as `chapters: Chapter[]`. Adding a chapter = new module
+ one import line in `index.ts`. `parentGroupChat` is a `JoinMethod` discriminated
union (link/qr/code/other) — handle every variant. Page copy (role descriptions,
start-a-chapter steps, contact) lives in `content/content.json`. Edit wording and
links in these files, never hardcode them in components, and don't reintroduce
hardcoded team arrays.


## Accessibility — a core project goal

**Accessibility is a primary, non-negotiable goal of this site.** Every change must keep the site fully usable by keyboard and assistive technology. Target **WCAG 2.1 AA**. When adding or editing UI, treat the following as requirements, not nice-to-haves:

- **Keyboard first.** Every interactive control must be reachable and operable by keyboard (Tab/Shift+Tab/Enter/Space/Esc), in a logical order. Never leave focusable controls hidden but still in the tab order.
- **Skip link.** `layout.tsx` renders a "Skip to main content" link as the first focusable element; it targets `#main-content` on `<main>` (which has `tabIndex={-1}` so it can receive focus). Keep it first and keep the target id intact.
- **The dual navbar uses `inert`.** Two navbars exist (absolute top + fixed floating). Each gets React 19's boolean `inert` so that **only the visible nav is in the tab order and accessibility tree** (`inert={showFloating}` on top, `inert={!showFloating}` on floating). For any show/hide UI (menus, modals, off-screen panels), use `inert` — do **not** rely on `aria-hidden` alone, which doesn't remove elements from the tab order.
- **Visible focus indicators.** Keyboard focus must always be visible. Use the `focus-visible` ring convention (`focus-visible:ring-2 focus-visible:ring-crab`, see the shared `focusRing` in `Navbar.tsx`). Never remove an outline without providing a visible replacement.
- **Don't convey meaning by color alone.** Active states need a non-color signal too (e.g. `aria-current="page"` on the active nav link).
- **Accessible names + state.** Icon-only/ambiguous controls need `aria-label`; stateful controls expose state (e.g. `aria-expanded` on the mobile menu toggle). Decorative SVGs/doodles get `aria-hidden="true"`.
- **Semantics & landmarks.** Use real landmarks (`header`/`nav`/`main`/`footer`), label distinct nav regions with `aria-label` (the footer's nav columns do), keep a sensible heading order, and give every meaningful image real `alt` text.
- **Respect `prefers-reduced-motion`.** `SmoothScroll`, the slot-machine reel, the hero cursor tilt, and the loaders already disable/skip motion under this preference. Any new animation must do the same.
- **Color contrast.** Text must meet AA contrast against its background.

**Routing** (`src/app/`): Next.js App Router. Each route is a directory with a `page.tsx`:
- `src/app/page.tsx` — Home
- `src/app/webinars/page.tsx`
- `src/app/our-team/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/tutoring/page.tsx`
- `src/app/join-us/page.tsx`
- `src/app/donate/page.tsx`

`src/app/layout.tsx` is the root layout — renders `<html>`/`<body>`, wraps everything in `SmoothScroll`, mounts the `Navbar`, and includes the site footer inline.

**Smooth scroll** (`src/components/SmoothScroll.tsx`): Wraps the entire app in `ReactLenis` from `lenis/react` (lerp 0.1, duration 1.4, exponential ease-out). Respects `prefers-reduced-motion`. Required Lenis CSS hooks (`html.lenis`, `.lenis-smooth`, `[data-lenis-prevent]`, `.lenis-stopped`) live in `globals.css`.

**Navbar** (`src/components/Layout/Navbar.tsx`): Client component (`'use client'`). Uses `next/link` + `usePathname` for active-link detection. Rendered twice:
1. An **absolute-positioned** top nav (`absolute top-0 left-0 right-0 z-20`) that floats over the hero — out of flow so the hero's `h-[100svh]` fills the viewport.
2. A **fixed reappearing** nav (`fixed top-0 z-[1000]`) that's translated off-screen by default and slides in via `translate-y` once `window.scrollY > window.innerHeight`. Toggled by a scroll listener in `useEffect`.

Both navs use `bg-transparent`. Logo and menu hamburger sit hard-left/right (no max-width container). The hamburger appears below 900px width.

**Styling — Tailwind v4 only**. No styled-components. Tailwind v4 is wired via `@tailwindcss/postcss` (see `postcss.config.mjs`). All theme tokens live in `src/app/globals.css` under `@theme`:

- Colors: `--color-crab` (#F26749), `--color-sand-dollar` (#FCDED6), `--color-vista-blue` (#83A5F2), `--color-deep-ocean` (#204ECF), `--color-butterscotch` (#EA9836), `--color-gray` (#555555). Used as `text-crab`, `bg-sand-dollar`, `text-deep-ocean`, etc.
- Fonts: `--font-poppins` (headings), `--font-sans` Open Sans (body). Headings have base sizes via `@layer base`.
- Component classes: `.button-primary` (blue), `.button-secondary` (blue-ringed rose). Defined in `@layer components`.

**Custom animations** (in `globals.css`): `float-soft`, `wiggle`, `spin-slow`, `draw` (SVG stroke draw via `stroke-dasharray`), `marquee`. Exposed as Tailwind classes `animate-float`, `animate-float-slow`, `animate-wiggle`, `animate-spin-slow`, `animate-marquee`. SVGs with class `doodle-draw` get their paths drawn in on mount via CSS variable `--dash`.

**Scroll-driven components**:
- `src/components/Parallax.tsx` — wraps children, translates them on the Y axis based on scroll position with a configurable `speed` multiplier. Uses `requestAnimationFrame` throttling.
- `src/components/Reveal.tsx` — IntersectionObserver-based fade-up-on-scroll wrapper with `delay` and `from` direction (`up | down | left | right | fade`).
- `src/components/Doodles.tsx` — hand-drawn SVG decorations (`Squiggle`, `Scribble`, `Star`, `Sparkle`, `Arrow`, `Pencil`, `Loop`, `Plus`, `Heart`, `Underline`). All accept `SVGProps`; color is inherited via `currentColor` so they tint with `text-*` Tailwind classes.

**Home page** (`src/app/page.tsx`): Pikkas-inspired layout — full-bleed parallax hero (`/tutorimage/img2.jpg` background with `bg-black/40` overlay), then a marquee strip on `bg-deep-ocean`, then a stats band, then four numbered modular sections (`01 / About Us`, `02 / Tutoring`, `03 / Resources`, `04 / Join Us`), then testimonials via `QuotesSlide` on `bg-rose-50`. Doodles are scattered at parallax-offset positions inside each section.

**Team data** (`src/app/our-team/page.tsx`): Member data (name, role, description, email, imageUrl) is hardcoded as arrays at the top of the file — one for current members, one for alumni. Images are served from `public/team/` (current) and `public/team/alum/` (alumni), referenced with root-relative paths like `/team/anlin.png`.

**Components in `src/components/`**:
- `TeamMember` — card with circular photo, name, role, bio, mailto link
- `Slideshow` (`'use client'`) — auto-rotating image carousel with dot indicators
- `QuotesSlide` (`'use client'`) — testimonial carousel with prev/next buttons and dot indicators

**Assets in `public/`**: Static assets (team photos, hero image, logo, resource files) live in `public/` and are referenced by root-relative URL paths (not imported). Image formats in use: `.png`, `.jpg`, `.jpeg`, `.JPG`. Currently rendered with plain `<img>` tags; switching to `next/image` would optimize LCP but isn't done yet.

**Path alias**: `@/*` → `./src/*` (see `tsconfig.json`).
