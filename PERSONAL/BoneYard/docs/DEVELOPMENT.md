# Development Guide

## Vite + React + JavaScript + Tailwind CSS 4 + Boneyard-JS

This document describes the standard day-to-day development workflow for human developers and AI coding agents.

It ensures that building, testing, styling, and generating loading skeletons remains predictable, reproducible, and aligned with project specifications.

---

## 1. Development Principles

1. **JavaScript First:** Use modern JavaScript (ES Modules), not TypeScript.
2. **Build Stack:** Vite for bundling/dev server; React for UI view layer; Tailwind CSS 4 for utility-first styling.
3. **Real UI Before Skeleton:** Always build and verify the production UI component before running Boneyard generation.
4. **Boneyard Output Is Derived:** Never hand-modify generated skeleton code. Regenerate bones from updated React components.
5. **Deterministic Fixtures:** Capture fixtures must use realistic, stable sample data (no `Math.random()`, date timestamps, or network requests).
6. **Zero Guesswork:** If a Boneyard-JS command or configuration is unverified, consult `BONEYARD.md` or test the package before committing changes.

---

## 2. Environment & Prerequisites

Ensure your environment meets the minimum requirements:

* **Node.js:** Modern LTS version (v18.x or v20.x+)
* **Package Manager:** `npm` (Lockfile `package-lock.json` must remain committed)
* **Build System:** Vite

```bash
# Verify environment tools
node --version
npm --version

```

---

## 3. Core Development Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install all dependencies cleanly using lockfile |
| `npm run dev` | Start local Vite development server with HMR |
| `npm run build` | Execute production Vite build pipeline |
| `npm run preview` | Serve production build locally for verification |
| `npm test` | Run component/unit test suite *(Runner TBD)* |
| `npm run boneyard:capture` | **[TBD]** Capture component UI and generate Boneyard bone |

---

## 4. Golden Development Loop

When creating or modifying a UI component, follow this exact linear sequence:

$$\begin{aligned} \text{1. Define UI Specification} &\longrightarrow \text{2. Build Production React Component} \\ &\longrightarrow \text{3. Style with Tailwind CSS 4 Utilities} \\ &\longrightarrow \text{4. Test Responsive States (Mobile/Tablet/Desktop)} \\ &\longrightarrow \text{5. Create Capture Fixture} \\ &\longrightarrow \text{6. Run Boneyard Generation} \\ &\longrightarrow \text{7. Bind Skeleton to Loading Branch} \\ &\longrightarrow \text{8. Verify Build \& Update Status} \end{aligned}$$

---

## 5. Standard Project Directory Map

```text
src/
├── components/
│   ├── dashboard/          <-- Domain components (StatsCard.jsx, StatsGrid.jsx)
│   └── layout/             <-- Shared shell (Header.jsx, Sidebar.jsx)
├── fixtures/               <-- Deterministic capture fixtures (statsCard.fixture.js)
├── bones/                  <-- Generated Boneyard skeleton output (TBD)
├── data/                   <-- Mock API data layers
├── index.css               <-- Tailwind 4 imports (@import "tailwindcss";)
└── main.jsx                <-- Application entrypoint

```

### Component Naming Conventions

* Use **PascalCase** for React files: `StatsCard.jsx`, `UserProfileCard.jsx`.
* Keep component logic presentational where possible.

---

## 6. Styling Rules (Tailwind CSS 4)

* **Inline Utilities:** Prefer Tailwind utilities inline in JSX (`className="rounded-xl border p-5 shadow-xs"`).
* **Global Import:** Global styling resides strictly in `src/index.css` using the Tailwind 4 directive:
```css
@import "tailwindcss";

```


* **No Custom CSS Hacks:** Do not create custom CSS classes when Tailwind utility primitives can achieve the layout.

---

## 7. Responsive & Visual Testing Protocol

Before marking any component complete, manually inspect it in the browser at the following breakpoint thresholds:

```text
MOBILE (<768px)          TABLET (768px–1023px)         DESKTOP (≥1024px)
Single Column            2-Column Grid                 3+ Column Grid
Fluid Width (w-full)     Balanced Spacing              Optimal Baseline Alignment

```

### Checkpoints

* [ ] Zero horizontal scroll/overflow (`overflow-x-hidden`).
* [ ] Typography scales cleanly without overlapping adjacent elements.
* [ ] Loading skeleton geometry mirrors the real UI perfectly across all 3 viewports.

---

## 8. Boneyard Generation & Regeneration Rules

### When to Regenerate a Bone

Run the Boneyard generation command whenever you modify:

* Container padding, margin, or layout alignment
* Font size, weight, or line-height utilities
* Flex or Grid structural hierarchies
* Responsive column rules inside `StatsGrid`

```text
NEVER DO THIS:                          ALWAYS DO THIS:
Modify Skeleton File                    Modify Real React UI
        │                                       │
        ▼                                       ▼
Force Real UI to Match                  Regenerate Skeleton via CLI

```

---

## 9. Documentation Sync Matrix

When completing a task, update these files accordingly:

| Trigger / Action | File to Update |
| --- | --- |
| Component layout or prop change | `UI-SPEC.md` |
| Boneyard CLI, API, or package version verified | `BONEYARD.md` |
| Operational command or workflow change | `DEVELOPMENT.md` |
| Progress on roadmap milestone | `STATUS.md` & `ROADMAP.md` |
| Architectural shift or trade-off made | `DECISIONS.md` |

---

## 10. AI Agent Operational Guidelines

When an AI coding agent works in this codebase:

1. **Read Specifications First:** Consult `UI-SPEC.md`, `BONEYARD.md`, and `DEVELOPMENT.md` before generating code.
2. **Inspect Existing Code:** Verify actual implementations rather than assuming documentation is 100% up to date.
3. **Smallest Viable Diff:** Make incremental, targeted edits.
4. **Never Guess Boneyard APIs:** If Boneyard commands are marked `TBD`, perform explicit package verification before writing scripts.

```
