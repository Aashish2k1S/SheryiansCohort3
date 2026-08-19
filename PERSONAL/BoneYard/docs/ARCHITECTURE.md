# Architecture

## Boneyard-JS + React + Vite + Tailwind CSS 4

---

## 1. Architecture Overview

This project is a React dashboard designed to demonstrate the integration of Boneyard-JS with a modern Vite + React + Tailwind CSS 4 stack.

The application architecture follows two distinct data and layout flows that meet at the component presentation level.

### Component & Layout Flow

$$\text{React Components} \longrightarrow \text{Tailwind CSS 4} \longrightarrow \text{Rendered UI} \longrightarrow \text{Boneyard-JS} \longrightarrow \text{Generated Bone} \longrightarrow \text{Skeleton Loading UI}$$

### Application Data Flow

$$\text{Mock API} \longrightarrow \text{React Component State} \longrightarrow \begin{cases} \mathbf{Loading:} & \text{Boneyard Skeleton UI} \\ \mathbf{Resolved:} & \text{Real Rendered UI} \end{cases}$$

---

## 2. Architectural Goals

1. **Simplicity:** Maintain a clean, readable, and predictable codebase.
2. **Reusability:** Ensure UI components remain modular and presentational where appropriate.
3. **Decoupled Data:** Keep async fetching and mock business logic separate from component rendering.
4. **Tailwind First:** Rely exclusively on Tailwind CSS 4 utility classes for styling.
5. **Isolated Integration:** Treat Boneyard-JS as an explicit, isolated skeleton loader layer.
6. **Single Source of Truth:** The real React UI defines element geometry and visual layout.
7. **Minimal State:** Rely on built-in React state primitives (`useState`, `useEffect`) rather than global state stores.
8. **Agent Friendly:** Keep directory structures, file paths, and flow boundaries clear for AI agents.
9. **Reproducible Skeletons:** Ensure skeleton generation is deterministic across environments.

---

## 3. Directory & Module Structure

```text
project-root/
│
├── docs/
│   ├── PROJECT.md
│   ├── ROADMAP.md
│   ├── STATUS.md
│   ├── ARCHITECTURE.md
│   ├── UI-SPEC.md
│   ├── BONEYARD.md
│   ├── DEVELOPMENT.md
│   ├── DECISIONS.md
│   └── AGENTS.md
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.jsx
│   │   │   └── Header.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── StatsGrid.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   ├── UserProfileCard.jsx
│   │   │   ├── ActivityList.jsx
│   │   │   └── ActivityCard.jsx
│   │   │
│   │   └── common/
│   │       └── ...
│   │
│   ├── data/
│   │   ├── api.js
│   │   └── mockData.js
│   │
│   ├── bones/
│   │   └── [Pending Boneyard-JS verification]
│   │
│   ├── lib/
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
└── package.json

```

> **Note:** Exact file naming conventions inside `src/bones/` will be finalized during **Phase 4** after verifying the installed Boneyard-JS CLI and library runtime API.

---

## 4. Application Entry Points

### `src/main.jsx`

The browser mount point. Responsibilities are strictly limited to:

* Importing the global stylesheet (`src/index.css`).
* Mounting the root `<App />` component into the DOM container.
* Providing high-level providers (if necessary).

$$\text{Browser DOM} \longrightarrow \text{main.jsx} \longrightarrow \text{App.jsx}$$

### `src/App.jsx`

The root component that manages global layout composition:

```text
App
└── AppShell
    └── Dashboard

```

---

## 5. Component Hierarchy

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

---

## 6. Component Responsibilities

| Component | Layer | Primary Responsibility | Boneyard-Enabled? |
| --- | --- | --- | --- |
| **`App`** | Root | Composition root | No |
| **`AppShell`** | Layout | Container bounds, max-widths, global background | No |
| **`Header`** | Layout | Global branding and user navigation avatar | No |
| **`Dashboard`** | View | Section orchestration and async state aggregation | No |
| **`StatsGrid`** | Dashboard | Responsive grid layout (`grid-cols-1` $\rightarrow$ `lg:grid-cols-3`) | No (Hosts Bones) |
| **`StatsCard`** | Component | Display a single numerical metric | **YES (Phase 4)** |
| **`UserProfileCard`** | Component | Display complex avatar, user stats, and badges | **YES (Phase 6)** |
| **`ActivityList`** | Dashboard | Container for repeated user event cards | No (Hosts Bones) |
| **`ActivityCard`** | Component | Display a single timeline/activity entry | **YES (Phase 7)** |

---

## 7. Component Design Principles

### Principle 1: Single Primary Responsibility

Components focus strictly on their designated job. `StatsGrid` manages structural CSS layout; `StatsCard` manages metric display presentation.

### Principle 2: Direct Props over Global Context

Data is explicitly passed down through React props to presentational cards to simplify testing, fixture isolation, and skeleton generation.

```jsx
// Recommended
<StatsCard change="12.5%" changeType="positive" title="Revenue" value="$24,500"/>

```

### Principle 3: Explicit Boneyard Identification

Boneyard-enabled components must maintain clear boundaries. Skeletons mirror presentational cards (`StatsCard`, `UserProfileCard`, `ActivityCard`) without polluting generic layout shells.

---

## 8. Data Architecture & Flow

The application enforces unidirectional data flow.

$$\text{Mock API (api.js)} \longrightarrow \text{Async Fetch} \longrightarrow \text{Dashboard State} \longrightarrow \text{Component Props} \longrightarrow \text{Rendered View}$$

### Mock API Subsystem (`src/data/api.js`)

To simulate real-world asynchronous API request/response lifecycles, `src/data/api.js` exposes promise-based functions returning structured payloads:

* `fetchStats()`
* `fetchUserProfile()`
* `fetchActivities()`

Each call incorporates artificial network latency (`setTimeout` between 400ms – 1200ms) to ensure skeleton states are visible and testable.

---

## 9. State Management & Lifecycle

The application deliberately avoids external state managers (e.g., Redux, Zustand). React local state is categorized into three explicit primitives:

1. **Server Data:** `data` (Payload retrieved from `api.js`)
2. **Loading Indicator:** `isLoading` (`true` while promises are pending)
3. **Error Boundary:** `error` (Populated if mock promises reject)

### Render Branching Pattern

```jsx
function DashboardSection() {
  const { data, isLoading, error } = useAsyncData(fetchStats);

  if (isLoading) return <StatsCardSkeleton/>;
  if (error) return <ErrorMessage message="{error.message}"/>;

  return <StatsCard data="{data}"/>;
}

```

---

## 10. Styling & Layout System

### Tailwind CSS 4 Integration

Tailwind CSS 4 is configured using `@tailwindcss/vite`.

* **Stylesheet Entry:** `src/index.css` using the simplified import directive:

```css
@import "tailwindcss";

```

* **Utility First:** Styles are declared inline within JSX `className` attributes.
* **No Manual Geometry Duplication:** Component bounding boxes, padding, and flex/grid gaps in Tailwind dictate skeleton dimensions automatically when captured by Boneyard.

```jsx
// Real UI controls the layout
<div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
  <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
  <p className="text-2xl font-bold text-gray-900">$24,500</p>
</div>

```

---

## 11. Boneyard-JS Integration Architecture

Boneyard-JS operates as an observational layer above rendered React UI components.

```text
React Component (JSX + Tailwind 4)
            │
            ▼
      Rendered DOM
            │
            ▼
   Boneyard-JS Capture
            │
            ▼
  Generated Bone Output
            │
            ▼
<SkeletonComponent/>

```

### Key Integration Rules

1. **Source of Truth:** Real UI code is updated first. Skeletons are regenerated from the real UI.
2. **Fixtures:** Capture workflows utilize deterministic mock fixtures (`src/data/mockData.js`) to ensure bone dimensions remain consistent regardless of runtime API variations.
3. **Isolation:** Generated bone files in `src/bones/` are treated as compiled build artifacts and should not be manually edited.

---

## 12. Build & Regeneration Pipeline

### Development Flow (`npm run dev`)

1. Developer edits React components or Tailwind utility classes.
2. Vite HMR updates browser display instantly.
3. Real UI is visually inspected.

### Bone Regeneration Flow (`npm run generate-bones` / CLI)

1. Boneyard CLI captures rendered component DOM nodes across target responsive viewports.
2. Updated bone files are written to `src/bones/`.
3. Skeletons update to mirror the revised UI layout.

### Production Build Flow (`npm run build`)

1. Vite compiles JS/JSX components, generated bone artifacts, and Tailwind CSS.
2. Optimized static assets are emitted to `dist/`.

---

## 13. System Constraints & Boundary Rules

To preserve architectural clarity, the following additions are **prohibited** unless required and approved in `DECISIONS.md`:

* ❌ **No Global State Libraries** (Redux, Zustand, MobX)
* ❌ **No Data Fetching Abstractions** (TanStack Query, SWR)
* ❌ **No External CSS-in-JS Libraries** (Styled-Components, Emotion)
* ❌ **No TypeScript Configs** (`.ts`, `.tsx` files are forbidden)
* ❌ **No Heavy Component Frameworks** (MUI, Shadcn/ui, Chakra)

---

## 14. Architecture Summary

```text
                         ┌───────────────────┐
                         │   Vite + React    │
                         └─────────┬─────────┘
                                   │
                         ┌─────────▼─────────┐
                         │  Tailwind CSS 4   │
                         └─────────┬─────────┘
                                   │
                        ┌──────────▼──────────┐
                        │   React Components  │
                        └──────────┬──────────┘
                                   │
             ┌─────────────────────┴─────────────────────┐
             ▼                                           ▼
   ┌───────────────────┐                       ┌───────────────────┐
   │ Boneyard Observe  │                       │   Mock Data API   │
   └─────────┬─────────┘                       └─────────┬─────────┘
             │                                           │
   ┌─────────▼─────────┐                       ┌─────────▼─────────┐
   │ Generated Bones   │                       │  Component State  │
   └─────────┬─────────┘                       └─────────┬─────────┘
             │                                           │
             └─────────────────────┬─────────────────────┘
                                   │
                        ┌──────────▼──────────┐
                        │ Loading State Switch│
                        │  (Skeleton vs Real) │
                        └─────────────────────┘

```
