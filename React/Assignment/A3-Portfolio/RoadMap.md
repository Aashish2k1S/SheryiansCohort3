# Portfolio Development Roadmap

A structured 7-stage roadmap for building a modern, performant, and animated developer portfolio.

---

## 📌 Stage 1 — Foundation

- [x] Create React project
- [x] Install Tailwind CSS
- [x] Install GSAP
- [x] Setup fonts
- [x] Setup global CSS
- [x] Create folder architecture

---

## 📌 Stage 2 — Static Portfolio

> *Focus on layout and content structure first. No complex animations yet.*

- [x] Navbar
- [x] Hero
- [x] Projects
- [x] About
- [x] Skills
- [x] Experience
- [x] Contact
- [x] Footer

---

## 📌 Stage 3 — Visual Polish

- [x] Typography
- [x] Spacing
- [x] Borders
- [x] Responsive layout
- [x] Project cards
- [x] Hover states
- [x] Mobile layout

---

## 📌 Stage 4 — GSAP Animations

- [X] Page entrance
- [X] Hero reveal
- [X] ScrollTrigger setup
- [X] Project animations
- [X] About timeline
- [X] Skill animations

---

## 📌 Stage 5 — Advanced Interactions

- [X] Custom cursor
- [X] Magnetic buttons
- [X] Project hover effects
- [X] Navbar transition on scroll
- [X] Smooth scrolling (e.g., Lenis)

---

## 📌 Stage 6 — Performance & Accessibility

> *A portfolio that looks amazing at 144 Hz but stutters on a normal laptop is badly built.*

- [ ] Lighthouse audit
- [ ] Image optimization
- [ ] Font loading strategy
- [ ] Animation performance (hardware acceleration, GPU layers)
- [ ] Mobile performance check
- [ ] Accessibility (a11y) check
- [ ] `prefers-reduced-motion` support

---

## 📌 Stage 7 — Deployment & Storytelling

### Deployment Pipeline




# Component Overview
```

┌──────────────────────────┐
│ Navbar                   │
│                          │
│ HERO                     │
│                          │
└──────────────────────────┘
↓
┌──────────────────────────┐
│ SELECTED WORK            │
│                          │
│ 01  SCRAPEFLOW       ↗   │
│ ──────────────────────── │
│ 02  ERP PLATFORM     ↗   │
│ ──────────────────────── │
│ 03  AI SUMMARIZER    ↗   │
│ ──────────────────────── │
│ 04  EMPLOYEE API     ↗   │
└──────────────────────────┘

```

---

## Design Strategy

### Why we're doing it this way

Later, when we implement routing, this link trigger:

```html
<span>↗</span>

```

will cleanly update to a full dynamic route link:

```tsx
<Link to="{`/projects/${project.slug}`}">

```

This modular approach ensures that adding dynamic subpages won't require redesigning or refactoring the core **Selected Work** section.

```
