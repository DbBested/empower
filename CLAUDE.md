# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Architecture

This is the website for **Empower Initiative**, a high-school tutoring nonprofit. It's a React + TypeScript SPA built with Vite.

**Routing** (`src/App.tsx`): React Router v7 with routes for `/`, `/webinars`, `/our-team`, `/resources`, `/tutoring`, `/join-us`, `/donate`. All routes are wrapped in a shared `Layout` component.

**Layout** (`src/components/Layout/`): `Layout.tsx` renders a fixed `Navbar` at the top (70px height, compensated by `margin-top: 70px` on `<main>`), page content, and a footer. The `Navbar` has a hamburger menu that collapses below the `tablet` breakpoint (900px).

**Styling — hybrid approach**: The project uses both styled-components and Tailwind CSS (v4 via `@tailwindcss/vite`). Styled-components consume the theme from `src/styles/theme.ts`; Tailwind is used for utility classes inline. The global `ThemeProvider` wraps the entire app so styled-components can access `theme.colors`, `theme.fonts`, `theme.spacing`, and `theme.breakpoints`.

**Theme** (`src/styles/theme.ts`): Custom color names are used throughout — `crab` (#F26749), `sandDollar` (#FCDED6), `vistaBlue` (#83A5F2), `deepOcean` (#204ECF), `butterscotch` (#EA9836). Use these names when adding styled-components.

**Team data** (`src/pages/OurTeam.tsx`): Member data (name, role, bio, email, imageUrl) is hardcoded as arrays inside the component — one for current members, one for alumni. Images are served from `public/team/` (current) and `public/team/alum/` (alumni) and referenced with root-relative paths like `/team/anlin.png`.

**Components**: `TeamMember` renders a card with circular photo, name, role, bio, and mailto link. `Slideshow` and `QuotesSlide` are reusable presentation components used on the home page.

**Assets in `public/`**: Static assets (team photos, hero image, logo, resource files) are placed in `public/` and referenced by root-relative URL paths (not imported). Supported image formats currently in use: `.png`, `.jpg`, `.jpeg`, `.JPG`, `.svg`.
