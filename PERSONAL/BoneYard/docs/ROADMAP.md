# Project Roadmap

## Boneyard-JS + React + Vite + Tailwind CSS 4

---

## 1. Roadmap Purpose

This roadmap defines the staged implementation plan for the project.

The application is built incrementally so that each phase produces a working, verifiable result. The implementation avoids attempting to solve the entire stack at once.

### High-Level Progression

$$\text{Project Foundation} \longrightarrow \text{Static UI} \longrightarrow \text{Responsive UI} \longrightarrow \text{Async Data} \longrightarrow \text{First Boneyard Component} \longrightarrow \text{Multiple Boneyard Components} \longrightarrow \text{Responsive Skeletons} \longrightarrow \text{Fixtures} \longrightarrow \text{Full Dashboard} \longrightarrow \text{Regeneration \& QA} \longrightarrow \text{Final Reference Project}$$

---

## 2. Phase Overview

| Phase  | Name                              | Primary Goal                                                  | Boneyard Included? |
| :----: | :-------------------------------- | :------------------------------------------------------------ | :----------------: |
| **0**  | **Planning & Documentation**      | Establish project context and constraints                     |         No         |
| **1**  | **Project Foundation**            | Vite + React + Tailwind CSS 4 setup                           |         No         |
| **2**  | **Application Shell**             | Build responsive dashboard container                          |         No         |
| **3**  | **Stats UI**                      | Build first reusable UI components (`StatsCard`, `StatsGrid`) |         No         |
| **4**  | **First Boneyard Integration** ⭐ | Prove one complete bone workflow (`StatsCard`)                |      **YES**       |
| **5**  | **Responsive Stats**              | Scale Boneyard to responsive grid layouts                     |      **YES**       |
| **6**  | **User Profile**                  | Handle complex layout & image content (`UserProfileCard`)     |      **YES**       |
| **7**  | **Activity UI**                   | Handle repeated list content (`ActivityCard`, `ActivityList`) |      **YES**       |
| **8**  | **Full Dashboard**                | Integrate all components end-to-end                           |      **YES**       |
| **9**  | **Fixtures & Capture**            | Establish deterministic Boneyard captures                     |      **YES**       |
| **10** | **Regeneration**                  | Validate UI $\rightarrow$ bone update workflow                |      **YES**       |
| **11** | **Visual QA**                     | Validate skeleton alignment across viewports                  |      **YES**       |
| **12** | **Documentation & Finalization**  | Produce clean reference repository                            |      **YES**       |

---

## 3. Phase Details

### PHASE 0 — Planning & Documentation

#### Objective

Establish project context, guidelines, and rules before writing code.

#### Tasks

Finalize setup documentation inside `docs/`:

```text
docs/
├── PROJECT.md
├── ROADMAP.md
├── STATUS.md
├── ARCHITECTURE.md
├── UI-SPEC.md
├── BONEYARD.md
├── DEVELOPMENT.md
├── DECISIONS.md
└── AGENTS.md

```

#### Checkpoint

- [x] Project purpose and tech stack defined.
- [x] Component boundaries and roadmap approved.
- [x] AI agent operational guidelines established.

#### Exit Condition

Documentation provides enough context for an agent or developer to execute without guessing project goals.

---

### PHASE 1 — Project Foundation

#### Objective

Create a clean modern Vite + React + JavaScript project using Tailwind CSS 4.

#### Stack Setup

- **Vite:** Latest stable
- **React:** Latest stable (`.js`, `.jsx` only)
- **Tailwind CSS:** Version 4 using `@tailwindcss/vite`

#### Tasks

1. Initialize Vite project with React (JavaScript).
2. Install dependencies and configure `@tailwindcss/vite`.
3. Set up global stylesheet with `@import "tailwindcss";`.
4. Validate HMR dev server and production builds.

#### Initial Components

- `App`
- `AppShell`

#### Checkpoint

- `npm install` succeeds without dependency conflicts.
- `npm run dev` starts correctly; Tailwind utility classes function as expected.
- `npm run build` succeeds cleanly.
- Zero TypeScript files present.

#### Exit Condition

A clean Vite + React + JavaScript + Tailwind 4 application functions without errors.

---

### PHASE 2 — Application Shell

#### Objective

Construct the visual layout structure of the dashboard.

#### Component Hierarchy

```text
App
└── AppShell
    ├── Header
    └── Dashboard

```

#### Layout Specifications

```text
DESKTOP VIEWPORT                                   MOBILE VIEWPORT
┌──────────────────────────────────────────────┐   ┌─────────────────────────┐
│ Boneyard Demo                 Dashboard  👤 │   │ Boneyard Demo        ☰  │
├──────────────────────────────────────────────┤   ├─────────────────────────┤
│                                              │   │                         │
│ Dashboard                                    │   │ Dashboard               │
│                                              │   │                         │
│ Content                                      │   │ Content                 │
│                                              │   │                         │
└──────────────────────────────────────────────┘   └─────────────────────────┘

```

#### Checkpoint

- Application renders a responsive container (`min-h-screen`, `max-w-7xl`, responsive padding).
- Header navigation updates layout cleanly across mobile, tablet, and desktop.
- No Boneyard dependencies introduced yet.

#### Exit Condition

A stable responsive shell is ready for UI components.

---

### PHASE 3 — Stats UI (Static)

#### Objective

Build the first reusable dashboard display component.

#### Component Hierarchy

```text
StatsGrid
└── StatsCard (×3: Revenue, Users, Orders)

```

#### Card Specifications

```text
┌─────────────────────────┐
│ Revenue                 │
│                         │
│ $24,500                 │
│ ↑ 12.5%                 │
└─────────────────────────┘

```

#### Checkpoint

- `StatsCard` renders prop data correctly (`title`, `value`, `change`, `changeType`).
- `StatsGrid` stacks vertically on mobile (`grid-cols-1`) and expands on desktop (`lg:grid-cols-3`).
- Visual styling matches design constraints using pure Tailwind CSS 4 utilities.

#### Exit Condition

`StatsCard` is visually verified across viewports and ready for skeleton integration.

---

### PHASE 4 — First Boneyard Integration ⭐

> **Critical Milestone:** Prove the end-to-end Boneyard workflow using a single, simple component (`StatsCard`).

#### Objective

Extract, generate, and render a Boneyard skeleton loader during asynchronous fetch states.

#### Implementation Steps

1. Add mock asynchronous API call with artificial delay (`setTimeout`).
2. Integrate Boneyard-JS capture utilities.
3. Capture the rendered `StatsCard` DOM structure.
4. Generate the bone artifact.
5. Bind generated bone to `loading === true` state.

#### Data & Execution Flow

$$\text{StatsCard Mount} \longrightarrow \text{loading = true} \longrightarrow \text{Render Boneyard Skeleton} \longrightarrow \text{API Resolve} \longrightarrow \text{loading = false} \longrightarrow \text{Render Real StatsCard}$$

#### Expected Skeleton Concept

```text
┌─────────────────────────┐
│ ░░░░░░░░░               │
│                         │
│ ░░░░░░░░░░░             │
│ ░░░░░░░                 │
└─────────────────────────┘

```

#### Checkpoint

- Boneyard successfully captures `StatsCard`.
- Generated bone file registers and renders seamlessly during loading state.
- Smooth transition from skeleton loader to live prop data.
- Production build compiles cleanly.

#### Exit Condition

One component demonstrates a working, end-to-end Boneyard lifecycle.

---

### PHASE 5 — Responsive Stats & Multiple Bones

#### Objective

Scale Boneyard skeleton rendering across multiple cards and responsive layouts.

#### Component Hierarchy

```text
StatsGrid
├── StatsCard (Revenue)
├── StatsCard (Users)
└── StatsCard (Orders)

```

#### Pipeline Sequence

$$\text{Tailwind Responsive CSS} \longrightarrow \text{Rendered DOM Layout} \longrightarrow \text{Boneyard Capture} \longrightarrow \text{Responsive Skeleton Artifact}$$

#### Checkpoint

- All three cards display skeletons simultaneously during loading.
- Skeleton shapes accurately reflect responsive grid changes across mobile, tablet, and desktop viewports.
- No horizontal layout shift or overflow occurs during loading-to-loaded transition.

#### Exit Condition

Boneyard skeleton generation is proven at scale across responsive layouts.

---

### PHASE 6 — User Profile Component

#### Objective

Integrate Boneyard on a complex card featuring nested structures, avatar images, and metadata grids.

#### Component Target

`UserProfileCard`

#### Visual Structure

```text
┌──────────────────────────────────┐
│                                  │
│  ◯   John Doe                   │
│      john@example.com            │
│                                  │
│      Administrator               │
│                                  │
│  Joined       Location           │
│  Jan 2026     Kolkata            │
│                                  │
└──────────────────────────────────┘

```

#### Checkpoint

- Component captures avatar images, text lines, badges, and sub-grids accurately.
- Generated bone correctly represents circular image placeholders and varied text lengths.
- Async loading state cleanly displays skeleton before rendering user profile data.

#### Exit Condition

Boneyard operates reliably on complex, image-heavy component layouts.

---

### PHASE 7 — Activity UI (Repeated Content)

#### Objective

Demonstrate Boneyard on repeated list-based component layouts.

#### Component Hierarchy

```text
ActivityList
└── ActivityCard (×N)

```

#### Checkpoint

- `ActivityCard` bone generated and registered.
- `ActivityList` renders multiple skeleton items dynamically during API fetch.
- Differing text lengths and inline metadata render predictable skeleton blocks.

#### Exit Condition

Repeated Boneyard components function correctly within list containers.

---

### PHASE 8 — Full Dashboard Integration

#### Objective

Combine all components into a complete asynchronous dashboard application.

#### Master Component Tree

```text
App
└── AppShell
    ├── Header
    └── Dashboard
        ├── StatsGrid
        │   ├── StatsCard (Revenue)
        │   ├── StatsCard (Users)
        │   └── StatsCard (Orders)
        │
        ├── UserProfileCard
        │
        └── ActivityList
            ├── ActivityCard
            ├── ActivityCard
            └── ActivityCard

```

#### Checkpoint

- Initial app mount triggers batch async requests.
- All components show synchronized Boneyard skeleton loaders.
- Live data populates smoothly as mock API endpoints resolve.
- No browser console warnings or layout thrashing.

#### Exit Condition

Full dashboard operates end-to-end with Boneyard loading states.

---

### PHASE 9 — Fixtures & Capture Reliability

#### Objective

Implement deterministic fixtures for components requiring sample data during layout capture.

#### Tasks

1. Identify props affecting DOM dimensions (e.g., multiline descriptions, long names, high-res avatars).
2. Configure Boneyard capture fixtures with representative data payloads.
3. Validate bone generation stability under edge-case content lengths.

#### Checkpoint

- Fixtures configured without polluting application runtime mock data.
- Bone capture produces consistent geometry across varied runtime API payloads.

#### Exit Condition

Capture pipeline produces reliable, deterministic skeletons.

---

### PHASE 10 — UI Change $\rightarrow$ Bone Regeneration

#### Objective

Verify that editing real UI components correctly updates Boneyard bone artifacts.

#### Workflow Test

$$\text{Modify Component Tailwind Utilities (e.g., p-4 } \rightarrow \text{ p-6)} \longrightarrow \text{Re-run Boneyard Generation} \longrightarrow \text{Updated Bone Artifact} \longrightarrow \text{Skeleton Render Updates}$$

#### Checkpoint

- Changing padding, gap, typography, or grid columns updates skeleton dimensions automatically after running regeneration.
- Zero manual edits required on generated bone files.

#### Exit Condition

Boneyard workflow maintains synchronicity with evolving Tailwind UI code.

---

### PHASE 11 — Visual QA

#### Objective

Audit visual alignment between real UI components and generated skeletons across viewports.

#### Viewport Matrix

- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)

#### Audit Checklist

- [ ] Skeleton width/height bounding boxes match real rendered elements.
- [ ] Padding and margins align precisely with live content.
- [ ] Border radius and image aspect ratios mirror actual components.
- [ ] Shimmer/pulse animations render smoothly without cumulative layout shift (CLS).

#### Exit Condition

All skeleton representations pass visual inspection against actual components.

---

### PHASE 12 — Documentation & Finalization

#### Objective

Deliver a fully documented, production-ready reference repository.

#### Final Tasks

1. Audit and complete all project documentation files (`README.md` and `docs/` files).
2. Verify onboarding workflow (`git clone` $\rightarrow$ `npm install` $\rightarrow$ `npm run dev`).
3. Document CLI scripts for bone generation, fixture modification, and production building.

#### Checkpoint

- Fresh repository clone builds and runs without troubleshooting.
- All guidelines, architectural decisions, and agent execution steps are documented.

#### Exit Condition

Repository serves as a complete reference implementation for Boneyard-JS + React + Tailwind CSS 4.

---

## 4. Component Progression Matrix

```text
COMPLEXITY
    │
    ├─► ActivityCard (List Item / Repeated Structure)
    │
    ├─► UserProfileCard (Complex Grid / Images / Metadata)
    │
    ├─► StatsGrid (Responsive Grid Wrapper)
    │
    ├─► StatsCard (Simple Metric Card) ⭐ FIRST BONE
    │
    ├─► Header (Static Navigation Bar)
    │
    └─► AppShell (Global Layout Container)

```

---

## 5. Component $\rightarrow$ Phase Matrix

| Component           | UI Phase    | Responsive Phase | Async Data Phase | Boneyard Phase | Fixture Phase | QA Phase |
| ------------------- | ----------- | ---------------- | ---------------- | -------------- | ------------- | -------- |
| **AppShell**        | Phase 1 / 2 | Phase 2          | —                | —              | —             | Phase 11 |
| **Header**          | Phase 2     | Phase 2          | —                | Optional       | —             | Phase 11 |
| **Dashboard**       | Phase 2     | Phase 2 / 8      | Phase 8          | —              | —             | Phase 11 |
| **StatsCard**       | Phase 3     | Phase 3          | Phase 4          | **Phase 4**    | Phase 9       | Phase 11 |
| **StatsGrid**       | Phase 3     | Phase 5          | Phase 5          | Child Bones    | —             | Phase 11 |
| **UserProfileCard** | Phase 6     | Phase 6          | Phase 6          | **Phase 6**    | Phase 9       | Phase 11 |
| **ActivityCard**    | Phase 7     | Phase 7          | Phase 7          | **Phase 7**    | Phase 9       | Phase 11 |
| **ActivityList**    | Phase 7     | Phase 7          | Phase 7          | Child Bones    | —             | Phase 11 |

---

## 6. Definition of Done

The project is considered complete when all criteria are satisfied:

- [ ] Vite + React + JavaScript stack operating cleanly with zero TypeScript files.
- [ ] Tailwind CSS 4 configured via `@tailwindcss/vite`.
- [ ] Local asynchronous mock API working with simulated latency.
- [ ] Boneyard-JS integrated and generating skeletons for `StatsCard`, `UserProfileCard`, and `ActivityCard`.
- [ ] Responsive skeletons verified on Mobile, Tablet, and Desktop viewports.
- [ ] Fixtures implemented for data-dependent component capture.
- [ ] UI layout updates automatically update regenerated bone artifacts.
- [ ] Visual QA confirms minimal layout shift during loading transitions.
- [ ] Complete documentation suite written (`README.md`, `PROJECT.md`, `ROADMAP.md`, `ARCHITECTURE.md`, `BONEYARD.md`, `DEVELOPMENT.md`, `DECISIONS.md`, `AGENTS.md`).
- [ ] Production build (`npm run build`) compiles successfully.

---

## 7. Core Execution Rule

> **Mandate:** Always build and verify the real component UI before introducing Boneyard.
> For every Boneyard-enabled component, follow this exact lifecycle:
> $$\text{1. Build Real UI} \longrightarrow \text{2. Make Responsive} \longrightarrow \text{3. Add Async Data} \longrightarrow \text{4. Add Loading State} \longrightarrow \text{5. Integrate Boneyard} \longrightarrow \text{6. Generate Bone} \longrightarrow \text{7. Validate Skeleton}$$

```

```
