# Boneyard-JS React Dashboard

A small, presentational dashboard application built with **React**, **Vite**, **JavaScript**, and **Tailwind CSS 4**, leveraging **Boneyard-JS** to automatically generate and maintain UI loading skeleton states directly from production components.

---

## What is this project?

This project demonstrates a clean, component-first methodology for skeleton loading UI generation. Instead of manually writing and maintaining parallel skeleton components (e.g., `StatsCardSkeleton.jsx`), **Boneyard-JS** captures the rendered DOM structure of the real React component and derives skeleton geometry automatically.

```text
               SOURCE OF TRUTH
                      │
                      ▼
               React + Tailwind 4
                      │
                      ▼
                Real Component
                      │
                      ▼
                 Boneyard-JS
                      │
                      ▼
               Generated Bone
                      │
                      ▼
               Loading Skeleton

```

### Key Principles

- **Real UI First:** The React component is the single source of truth.
- **Derived Artifacts:** Boneyard outputs (`bones`) are generated artifacts and are never modified by hand.
- **Responsive Parity:** Generated skeletons automatically mirror the component's layout across Mobile, Tablet, and Desktop viewports.

---

## Tech Stack

| Layer               | Technology                                 | Purpose                                    |
| ------------------- | ------------------------------------------ | ------------------------------------------ |
| **Framework**       | [React](https://react.dev/)                | Presentational view layer                  |
| **Build Tool**      | [Vite](https://vitejs.dev/)                | High-performance dev server and bundler    |
| **Language**        | JavaScript (ESM)                           | Core application code                      |
| **Styling**         | [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first layout and styling engine    |
| **Skeleton Engine** | Boneyard-JS                                | Automatic component-to-skeleton derivation |
| **Package Manager** | `npm`                                      | Dependency management                      |

---

## Getting Started

### Prerequisites

Ensure you have Node.js and `npm` installed:

```bash
node --version
npm --version

```

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <project-directory>

```

2. **Install dependencies:**

```bash
npm install

```

---

## Development & Build Commands

| Command                        | Action                                                                     |
| ------------------------------ | -------------------------------------------------------------------------- |
| **`npm run dev`**              | Starts the Vite local development server with Hot Module Replacement (HMR) |
| **`npm run build`**            | Runs production build and compiles assets into `dist/`                     |
| **`npm run preview`**          | Serves the production build locally for verification                       |
| **`npm test`**                 | Executes unit and component tests _(Runner TBD)_                           |
| **`npm run boneyard:capture`** | Captures real components and regenerates Boneyard bones                    |

---

## Documentation Index

Detailed specifications, architectural decisions, and agent guidelines are organized in the `docs/` folder:

```text
docs/
├── PROJECT.md        ──► What are we building and why?
├── ROADMAP.md        ──► When are we building each phase and checkpoint?
├── ARCHITECTURE.md   ──► How is the application and Boneyard workflow structured?
├── UI-SPEC.md        ──► What are the visual, component, and responsive rules?
├── BONEYARD.md       ──► How does Boneyard-JS integration work specifically?
├── DEVELOPMENT.md    ──► How do developers and AI agents build and test features?
├── STATUS.md         ──► What is completed, in progress, or blocked right now?
├── DECISIONS.md      ──► Why were specific technical decisions made?
└── AGENTS.md         ──► What rules must AI coding agents follow?

```

---

## Current Status

To see active work items, current checkpoints, and verified dependency statuses, refer to **[`STATUS.md`](https://www.google.com/search?q=STATUS.md)**.

```

```
