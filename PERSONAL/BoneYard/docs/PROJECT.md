# Project Context

## Project Name

**Boneyard-JS + React + Vite + Tailwind CSS Demo**

---

## Project Purpose

This project is a small, focused demonstration of integrating **Boneyard-JS** with a modern React application built with **Vite** and **Tailwind CSS 4**.

The application simulates a small dashboard with asynchronous data loading and uses Boneyard-JS to generate skeleton loading interfaces directly from the actual rendered React UI.

The project is intentionally small so that the complete Boneyard workflow can be understood, tested, and reproduced before applying the same approach to a larger production codebase.

### Core Concept Pipeline

$$\text{React Component} \longrightarrow \text{Tailwind CSS 4} \longrightarrow \text{Browser Rendered UI} \longrightarrow \text{Boneyard Capture} \longrightarrow \text{Generated Bones} \longrightarrow \text{Skeleton UI} \longrightarrow \text{Real Data Render}$$

> **Key Takeaway:** The real React + Tailwind UI remains the ultimate source of truth.

---

## Goals

### 1. Demonstrate Boneyard-JS Integration

Show how Boneyard-JS can be seamlessly integrated into a modern build stack comprising Vite, React, JavaScript, and Tailwind CSS 4.

### 2. Build a Realistic but Small UI

Create a responsive dashboard containing enough UI variation to properly test Boneyard, including:

- Application header
- Statistics cards
- User profile card
- Activity / post cards
- Responsive layouts

### 3. Demonstrate Asynchronous Loading

Use a local mock API to simulate asynchronous data requests.

$$\text{Component Mount} \longrightarrow \text{API Request} \longrightarrow \text{Loading State} \longrightarrow \text{Boneyard Skeleton} \longrightarrow \text{API Response} \longrightarrow \text{Real Component}$$

### 4. Demonstrate Tailwind CSS 4 Compatibility

Verify that Boneyard captures layouts generated using:

- Flexbox & CSS Grid
- Spacing, width, and height utilities
- Typography, borders, radius, and shadows
- Responsive breakpoints

$$\text{Tailwind Utilities} \longrightarrow \text{Browser Computes Layout} \longrightarrow \text{Boneyard Captures Rendered Layout}$$

### 5. Demonstrate Responsive Skeletons

Support Mobile, Tablet, and Desktop viewports, ensuring skeleton representations accurately mirror responsive breakpoint transitions.

### 6. Demonstrate Component-Level Skeletons

Focus Boneyard extraction on primary targets:

- `StatsCard`
- `UserProfileCard`
- `ActivityCard`

### 7. Demonstrate Fixtures

Show how representative fixture data can be supplied to Boneyard for components requiring state during capture.

### 8. Demonstrate the Regeneration Workflow

Prove that updating the real UI updates skeleton geometry upon regeneration:

$$\text{Change Tailwind Layout} \longrightarrow \text{Re-render Component} \longrightarrow \text{Regenerate Bones} \longrightarrow \text{Updated Skeleton}$$

---

## Non-Goals

The following are intentionally outside the scope of this project:

1. **Production Backend:** No real server infrastructure; all data is served via local mock APIs.
2. **Database:** No persistent database layer.
3. **Authentication:** No login, OAuth, sessions, or role permissions.
4. **Complex State Management:** No Redux, Zustand, or MobX (React `useState`/`useEffect` are sufficient).
5. **TypeScript:** Strictly JavaScript (`.js`, `.jsx`).
6. **Large Design System:** No overarching design system library creation.
7. **Full Production Dashboard:** No complex routing, search algorithms, advanced charting, or real-time web sockets.
8. **Manual Skeleton Library:** No manually written skeleton HTML/CSS components unless technically required.

---

## Technology Stack

| Category            | Technology           | Responsibilities / Purpose                             |
| :------------------ | :------------------- | :----------------------------------------------------- |
| **Build Tool**      | Vite (Latest)        | Dev server, module bundling, HMR, production builds    |
| **Framework**       | React (Latest)       | Component architecture, state management, UI rendering |
| **Language**        | JavaScript (JSX)     | App logic and components (`.js`, `.jsx`)               |
| **Styling**         | Tailwind CSS 4       | Utility-first styling via `@tailwindcss/vite`          |
| **Skeleton Engine** | Boneyard-JS (Latest) | Layout capture, bone generation, skeleton rendering    |
| **Data Layer**      | Local Mock API       | Simulated async network latency and dummy payloads     |

---

## Constraints

### Technical Constraints

- Use latest stable versions of all dependencies.
- Strict JavaScript/JSX only (no TypeScript).
- Zero backend server or external API requirements.
- Keep dependencies minimal and components focused.

### UI & Styling Constraints

- Tailwind CSS 4 is the primary styling solution (avoid custom CSS files).
- Components must be fully responsive across mobile, tablet, and desktop.
- Skeleton geometry must derive from rendered components rather than duplicated markup.

### Boneyard Constraints

- Always build against the current Boneyard-JS API.
- Treat generated bone files as build artifacts (never edit generated bone files directly).
- Re-run generation workflows after meaningful layout modifications.
- Utilize fixtures when capture requires representative component props.

---

## Target Outcome

A clean reference project where a developer can:

1. Start the application (`npm run dev`).
2. Observe responsive Boneyard skeleton loaders during async delays.
3. See smooth transitions to populated data states.
4. Understand how to add Boneyard components, generate bones, define fixtures, and regenerate skeletons upon changing Tailwind utility classes.

---

## Current Status

- **Status:** Planning
- **Current Phase:** Phase 0 — Project Planning and Documentation

### Checklist

#### Completed

- [x] Defined project purpose & goals
- [x] Locked tech stack (Vite + React + JavaScript + Tailwind CSS 4 + Boneyard-JS)
- [x] Outlined small dashboard UI scope
- [x] Established component-level skeleton strategy
- [x] Defined phased implementation approach

#### In Progress

- [ ] Create project documentation (`PROJECT.MD`, `ROADMAP.md`, `OUTLINE.md`)
- [ ] Finalize baseline architecture & specifications
- [ ] Define AI agent execution rules

#### Next Steps

1. Complete Phase 0 documentation.
2. Initialize the Vite + React JavaScript application.
3. Install and configure Tailwind CSS 4 via `@tailwindcss/vite`.
4. Build the static dashboard layout.
5. Introduce Boneyard-JS once UI baseline is stabilized.

---

## Important Principles

1. **Real UI Is the Source of Truth:** Never maintain a separate skeleton layout if Boneyard can derive it from the rendered component.
2. **Build the Real UI First:** Progression must be:
   $$\text{Real UI} \longrightarrow \text{Responsive UI} \longrightarrow \text{Async Data} \longrightarrow \text{Loading State} \longrightarrow \text{Boneyard Capture} \longrightarrow \text{Skeleton Visual QA}$$
3. **Progress Incrementally:** Validate one component before scaling:
   $$\text{StatsCard} \longrightarrow \text{StatsGrid} \longrightarrow \text{UserProfileCard} \longrightarrow \text{ActivityCard} \longrightarrow \text{Full Dashboard}$$
4. **Do Not Skip Checkpoints:** Ensure each phase passes its test criteria before advancing.
5. **Keep the Project Small:** Favor clarity and direct solutions over premature architectural abstractions.
6. **Use Current APIs:** Always verify syntax against installed versions of Tailwind CSS 4 and Boneyard-JS.
7. **Generated Files Are Not Source Files:** Do not manually edit generated `.json` or `.js` bone artifacts.
8. **Documentation Is Part of Implementation:** Document non-obvious configurations and workflows.
9. **Optimize for Learning and Reproducibility:** Prioritize explicit, clear code that functions as an easy-to-follow reference.

---

## Summary Statement

> **Core Objective:** Establish how to integrate Boneyard-JS into a modern React + Vite + Tailwind CSS 4 application so that the real UI serves as the single source of truth for responsive skeleton loading states.
