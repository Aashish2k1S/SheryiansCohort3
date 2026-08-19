# Boneyard-JS Demo — UI Implementation Roadmap

## Project Stack & Scope

Build a small, component-driven responsive dashboard using:

* **Build Tool:** Vite (latest)
* **Framework:** React (latest)
* **Language:** JavaScript / JSX
* **Styling:** Tailwind CSS 4 (`@tailwindcss/vite`)
* **Skeleton Generator:** Boneyard-JS (latest)
* **Data Source:** Local mock asynchronous API
* **Constraints:** No TypeScript, no backend server

---

## 1. Product Goal

Demonstrate how **Boneyard-JS** automatically generates accurate, component-driven skeleton loading states from real React + Tailwind CSS 4 components.

### Dashboard Structure
```text
Dashboard
│
├── Header
│
├── Stats Section
│   ├── Revenue Card
│   ├── Users Card
│   └── Orders Card
│
├── Profile Section
│   └── User Profile Card
│
└── Activity Section
    └── Activity / Post Cards

```

---

## 2. UI Component Map

| Component | UI Complexity | Data | Responsive | Boneyard Primary |
| --- | --- | --- | --- | --- |
| **App Shell** | Low | No | Yes | No |
| **Header** | Medium | Minimal | Yes | Optional |
| **StatsCard** | Low | Yes | Yes | **Yes** |
| **StatsGrid** | Medium | Yes | Yes | No (Container) |
| **UserProfileCard** | Medium | Yes | Yes | **Yes** |
| **ActivityCard** | Medium | Yes | Yes | **Yes** |
| **ActivityList** | Medium | Yes | Yes | No (Container) |
| **Dashboard** | High | Yes | Yes | No (Composition) |

---

## 3. Component UI Specifications

### 3.1 App Shell

* **Purpose:** Provides global container layout (`min-h-screen`, `max-w-7xl`, responsive padding, global theme background).
* **Boneyard:** No. Serves solely as the capture environment.

### 3.2 Header

* **Purpose:** Top bar containing branding and desktop/mobile navigation elements.
* **Tailwind Concepts:** `flex`, `justify-between`, responsive visibility (`hidden md:flex`), sticky positioning.
* **Boneyard:** Optional / Phase 11.

### 3.3 StatsCard (Primary Target 1)

* **Purpose:** Single metric display (`title`, `value`, `change`, `icon`).
* **Tailwind Concepts:** `rounded-xl`, `border`, `shadow-sm`, `p-6`, `flex`, typography.
* **Phase:** Phase 4 (First Major Boneyard Milestone).

```text
REAL UI                                  BONEYARD SKELETON
┌─────────────────────────┐              ┌─────────────────────────┐
│ Revenue                 │              │ ░░░░░░░░                │
│ $24,500                 │   ───────►   │ ░░░░░░░░░░░             │
│ ↑ 12.5%                 │              │ ░░░░░░░                 │
└─────────────────────────┘              └─────────────────────────┘

```

### 3.4 StatsGrid

* **Purpose:** Grid wrapper displaying multiple `StatsCard` elements.
* **Tailwind Concepts:** `grid`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-4`.
* **Phase:** Phase 5.

### 3.5 UserProfileCard (Primary Target 2)

* **Purpose:** Complex component containing avatar image, text rows, badges, and layout grids.
* **Captured Aspects:** Circular image placeholders, text truncation, nested grids, multi-row metadata.
* **Phase:** Phase 6.

### 3.6 ActivityCard & ActivityList (Primary Target 3)

* **Purpose:** Repeated list item UI displaying activity feeds (`icon`, `title`, `description`, `timestamp`).
* **Captured Aspects:** Dynamic height list elements, inline flex items, repeated structural bones.
* **Phase:** Phase 7.

---

## 4. Major Implementation Milestones

* 🟢 **Milestone 1 — UI Foundation (Phases 1–3):** Complete responsive static dashboard running on Vite + React + Tailwind 4.
* 🟡 **Milestone 2 — First Bone (Phase 4):** `StatsCard` skeleton pipeline proven end-to-end.
* 🔵 **Milestone 3 — Component Library Pattern (Phases 5–7):** All primary components (`StatsCard`, `UserProfileCard`, `ActivityCard`) integrated with Boneyard.
* 🟣 **Milestone 4 — Production-Like Demo (Phases 8–12):** Full responsive dashboard, mock API delays, fixtures, and auto-regeneration workflow.

---

## 5. Phase-by-Phase Implementation Plan

```text
Phase 0: Architecture & Setup
   │
   ▼
Phase 1: Vite + React + Tailwind 4 Foundation
   │
   ▼
Phase 2: Static Dashboard Shell
   │
   ▼
Phase 3: Stats UI
   │
   ▼
Phase 4: FIRST BONEYARD COMPONENT ⭐ (StatsCard)
   │
   ▼
Phase 5: StatsGrid & Responsive Bones
   │
   ▼
Phase 6: User Profile Component
   │
   ▼
Phase 7: Activity Components
   │
   ▼
Phase 8: Full Dashboard Integration
   │
   ▼
Phase 9: Fixtures & Capture Reliability
   │
   ▼
Phase 10: Tailwind Change ──► Bone Regeneration
   │
   ▼
Phase 11: Skeleton Visual QA
   │
   ▼
Phase 12: Developer Workflow & Documentation

```

---

### Phase Details

#### PHASE 0 — Project Setup & Architecture

* **Tasks:** Finalize directory layout, define component boundaries, establish mock data schemas.
* **Deliverable:** Architecture approved, `OUTLINE.md`, `ROADMAP.md`.

#### PHASE 1 — Vite + React + Tailwind 4 Foundation

* **Tasks:** Initialize Vite React JavaScript template. Configure Tailwind 4 via `@tailwindcss/vite` plugin and import `@import "tailwindcss";` in global CSS.
* **Checkpoint:** Clean empty shell running without build errors.

#### PHASE 2 — Static Dashboard Shell

* **Tasks:** Construct `AppShell`, `Header`, and basic `Dashboard` layout structure with static content.
* **Checkpoint:** Shell renders responsively across desktop, tablet, and mobile breakpoints.

#### PHASE 3 — Stats UI (Static)

* **Tasks:** Build `StatsCard` and `StatsGrid` visual design using Tailwind 4 classes.
* **Checkpoint:** Multi-card grid renders cleanly across all breakpoints before introducing Boneyard.

#### PHASE 4 — FIRST BONEYARD COMPONENT ⭐

* **Tasks:** Introduce async mock data fetch for `StatsCard`. Wrap `StatsCard` with Boneyard capture hooks, generate the bone artifact, register it, and render the skeleton during the loading state.
* **Checkpoint:**

$$\text{loading = true} \longrightarrow \text{Boneyard Skeleton} \longrightarrow \text{loading = false} \longrightarrow \text{Real StatsCard}$$



#### PHASE 5 — StatsGrid & Responsive Bones

* **Tasks:** Scale Boneyard capture across all three cards in `StatsGrid`. Verify layout extraction across mobile, tablet, and desktop viewports.
* **Checkpoint:** Grid skeleton updates geometry accurately per breakpoint layout.

#### PHASE 6 — User Profile Component

* **Tasks:** Construct `UserProfileCard` UI, connect mock async API, configure Boneyard extraction for avatars, badges, and metadata grids.
* **Checkpoint:** Profile card skeleton perfectly mirrors rendered avatar and typography elements.

#### PHASE 7 — Activity Components

* **Tasks:** Build `ActivityCard` and `ActivityList`. Implement loading states and Boneyard bone capture for list items.
* **Checkpoint:** Activity feed renders a list of uniform skeleton cards during async load.

#### PHASE 8 — Full Dashboard Integration

* **Tasks:** Connect all components to the global mock API flow (`App` mount $\rightarrow$ batch API fetch $\rightarrow$ dashboard-wide skeleton state $\rightarrow$ resolution).
* **Checkpoint:** Unified dashboard loading experience works seamlessly.

#### PHASE 9 — Fixtures & Capture Reliability

* **Tasks:** Define Boneyard fixtures to support components requiring sample state during headless capture (e.g., dynamic text lengths, avatar images).
* **Checkpoint:** Skeletons generate reliably regardless of runtime API variations.

#### PHASE 10 — Tailwind Change $\rightarrow$ Bone Regeneration

* **Tasks:** Modify Tailwind layout utilities (e.g., `p-4` to `p-6`, font scale adjustments) and re-run bone extraction.
* **Checkpoint:**

$$\text{Tailwind UI Edit} \longrightarrow \text{Boneyard Recaptures} \longrightarrow \text{Bone Updates} \longrightarrow \text{Skeleton Render Updates}$$



#### PHASE 11 — Skeleton Visual QA

* **Tasks:** Audit width, height, margin, padding, typography blocks, and image radius alignment between real components and generated skeletons.
* **Checkpoint:** Skeleton overlay matches actual component bounding boxes within visual tolerance.

#### PHASE 12 — Final Developer Workflow & Documentation

* **Tasks:** Write `README.md` documenting onboarding (`npm install`, `npm run dev`), bone generation commands, fixture configuration, and production build pipelines.
* **Checkpoint:** Project fully reproducible for external developers.

---

## 6. Component $\rightarrow$ Phase Matrix

| Component | Static UI | API Integration | Loading State | Boneyard Capture | Responsive Test | Fixture Config | Visual QA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **AppShell** | Phase 1 | — | — | — | Phase 2 | — | Phase 11 |
| **Header** | Phase 2 | — | — | Optional | Phase 2 | — | Phase 11 |
| **Dashboard** | Phase 2 | Phase 8 | Phase 8 | — | Phase 2 / 8 | — | Phase 11 |
| **StatsCard** | Phase 3 | Phase 4 | Phase 4 | Phase 4 | Phase 5 | Phase 9 | Phase 11 |
| **StatsGrid** | Phase 3 | Phase 5 | Phase 5 | Child | Phase 5 | — | Phase 11 |
| **UserProfileCard** | Phase 6 | Phase 6 | Phase 6 | Phase 6 | Phase 6 | Phase 9 | Phase 11 |
| **ActivityCard** | Phase 7 | Phase 7 | Phase 7 | Phase 7 | Phase 7 | Phase 9 | Phase 11 |
| **ActivityList** | Phase 7 | Phase 7 | Phase 7 | Child | Phase 7 | — | Phase 11 |

---

## 7. Definition of Done

The demonstration project is considered complete when all of the following conditions are met:

* [ ] Clean initialization with Vite + React + JavaScript (no TypeScript).
* [ ] Tailwind CSS 4 configured via `@tailwindcss/vite`.
* [ ] Asynchronous mock API simulating network latency.
* [ ] `StatsCard`, `UserProfileCard`, and `ActivityCard` skeletons generated via Boneyard-JS.
* [ ] Responsive layouts captured for mobile, tablet, and desktop viewports.
* [ ] Fixtures implemented for data-dependent capture components.
* [ ] Skeleton animations and shimmer effects render without layout shift.
* [ ] Modifying Tailwind classes in JSX updates generated bone artifacts upon regeneration.
* [ ] `npm run build` generates a production-ready application.
* [ ] Comprehensive `README.md` documents setup, execution, and regeneration workflows.

---

## 8. Core Development Principle

> **Rule:** Never solve a future phase prematurely.
> Focus strictly on the active phase's checkpoint. Do not optimize responsive skeletons during initial bone capture (Phase 4), and do not add complex multi-component extraction before proving single-component capture.

```



```
├── docs/
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   ├── UI-SPEC.md
│   ├── BONEYARD.md
│   ├── DEVELOPMENT.md
│   ├── DECISIONS.md
│   ├── STATUS.md
│   └── AGENTS.md
```
