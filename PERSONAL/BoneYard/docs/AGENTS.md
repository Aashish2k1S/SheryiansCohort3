# AI Agent Instructions & Operating Contract

This document defines the strict operating contract and execution guidelines for AI coding agents working on this repository.

---

## Quick Orientation Checklist

When beginning a new execution session, follow this linear reading sequence:

```text
STATUS.md (Where are we?) ──► ROADMAP.md (What is the goal?) ──► ARCHITECTURE.md (How is it structured?)
                                                                       │
DEVELOPMENT.md ◄── BONEYARD.md ◄── UI-SPEC.md ◄────────────────────────┘
  (Workflows)        (Bones)       (Component Spec)

```

---

## 1. Core Principles & Priorities

When rules or instructions appear to conflict, evaluate them against this strict hierarchy:

$$\begin{aligned} \text{1. Explicit User Prompt Request} &\longrightarrow \text{2. Working Code / Runtime Reality} \\ &\longrightarrow \text{3. Architecture (\text{ARCHITECTURE.md})} \\ &\longrightarrow \text{4. Current UI Spec (\text{UI-SPEC.md})} \\ &\longrightarrow \text{5. Roadmap / Checkpoint (\text{ROADMAP.md})} \\ &\longrightarrow \text{6. Development Conventions (\text{DEVELOPMENT.md})} \\ &\longrightarrow \text{7. Agent Preferences (Lowest Priority)} \end{aligned}$$

---

## 2. Step-by-Step Agent Workflow

Execute all repository modifications using the six-stage loop:

```text
  1. UNDERSTAND ──► 2. INSPECT ──► 3. PLAN
                                     │
  6. DOCUMENT   ◄── 5. VERIFY  ◄── 4. IMPLEMENT

```

1. **Understand:** Read `STATUS.md` and `ROADMAP.md` to identify the active phase/checkpoint.
2. **Inspect:** Read relevant target files and `package.json`. Examine exact dependencies and syntax before editing.
3. **Plan:** Formulate the minimal viable diff. Do not refactor unrelated files.
4. **Implement:** Write modern JavaScript, React, and Tailwind CSS 4 primitives.
5. **Verify:** Execute terminal verification commands (`npm run build`, dev preview, CLI captures) and verify output.
6. **Document:** Keep `STATUS.md`, `DECISIONS.md`, and component specifications in sync.

---

## 3. Technology & Architecture Rules

### JavaScript & React Conventions

* **JavaScript First:** Write standard `.js` and `.jsx` files. Do not introduce TypeScript (`.ts`, `.tsx`) or type definitions unless explicitly requested.
* **Component Design:** Components must remain functional and focused on presentational layout, local UI state, and props.
* **No Unsolicited Refactoring:** Preserve working code structures. Make targeted edits that fit existing patterns.

### Tailwind CSS 4 Rules

* **Utility-First:** Use inline utility classes (`className="flex items-center gap-4 rounded-xl border p-4 shadow-xs"`).
* **Single Global CSS Entrypoint:** Global directives live strictly in `src/index.css` via `@import "tailwindcss";`.
* **No Legacy Patterns:** Do not generate `tailwind.config.js` or create modular `.module.css` files.

### Boneyard-JS Strict Mandates

* **Real UI First:** Always implement, style, and verify the production React component before running Boneyard CLI capture.
* **Derived Artifacts:** Boneyard output (`bones`) is strictly derived. **NEVER** edit generated bone files manually. Modify the source React component and re-run capture.
* **Deterministic Fixtures:** Capture fixtures (`*.fixture.js`) must use realistic, static mock data. Do not use random numbers, dynamic timestamps, or external network calls.
* **Zero Guesswork:** If a Boneyard CLI flag, configuration key, or API method is unverified, **STOP**, test the installed package, document it in `BONEYARD.md`, and then proceed.

---

## 4. Operational Boundaries

```text
ALLOWED:                                 FORBIDDEN:
✓ Minimal, targeted diffs                ✕ Unsolicited refactoring across files
✓ Updating docs to match runtime         ✕ Introducing TypeScript (.ts / .tsx)
✓ Re-running bone generation             ✕ Hand-editing generated skeleton files
✓ Adding dependencies with justification ✕ Destructive Git operations (git reset --hard)
✓ Updating STATUS.md on milestones       ✕ Claiming tests pass without execution

```

---

## 5. Verification & Completion Protocol

Never declare a task complete without running the appropriate verification step:

| Modification Type | Verification Requirement |
| --- | --- |
| **UI / Styling** | Inspect responsive viewports (Mobile, Tablet, Desktop) |
| **Logic / Helpers** | Run unit/integration test suite |
| **Build / Tooling** | Run `npm run build` to confirm zero compiler errors |
| **Boneyard / Skeletons** | Generate bone, render skeleton, and verify zero CLS |

---

## 6. Standard Completion Report Template

When completing a task, output a structured summary following this format:

```text
### Completion Report

1. What Changed:
   - Implemented [Component Name] with Tailwind CSS 4 styling
   - Added deterministic capture fixture in src/fixtures/

2. Files Modified:
   - src/components/dashboard/StatsCard.jsx
   - src/fixtures/statsCard.fixture.js

3. Verification Completed:
   - [x] Responsive layout verified (Mobile / Tablet / Desktop)
   - [x] Production build clean (`npm run build`)
   - [x] Boneyard CLI capture & bone generation verified

4. Unverified / Remaining Items:
   - Runtime skeleton loading state integration pending StatsGrid orchestration

5. Current Blockers:
   - None

```

