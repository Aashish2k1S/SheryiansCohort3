# Boneyard

## Boneyard-JS Integration

This document serves as the implementation-specific single source of truth for the **Boneyard-JS** integration in this project.

It documents installation procedures, runtime loading integration, capture mechanisms, generated artifact management, and regeneration workflows.

---

## 1. Purpose & Architectural Principles

Boneyard-JS automatically generates skeleton/loading UI artifacts derived directly from real rendered React components.

```text
React Component (JSX)
       │
       ▼
Tailwind CSS 4
       │
       ▼
Rendered DOM
       │
       ▼
Boneyard-JS
       │
       ▼
Generated Bone
       │
       ▼
Skeleton / Loading UI

```

### Core Rules

1. **The Real Component Is Source of Truth:** Boneyard output is strictly derived from the production UI. Hand-coding separate, parallel skeleton JSX components (e.g., `StatsCardSkeleton.jsx`) is prohibited unless required by Boneyard-JS framework primitives.
2. **Deterministic Artifacts:** Generated skeletons must be reproducible across local and build environments using deterministic capture fixtures.

---

## 2. Version & Installation Record

| Parameter | Status / Value |
| --- | --- |
| **Target Package** | `boneyard-js` (Latest Stable) |
| **Installed Version** | `TBD` *(Update after verification)* |
| **Installation Date** | `TBD` *(Update after verification)* |
| **Package Manager** | `npm` |

### Installation Verification Protocol

```bash
# 1. Identify and install target package
npm install <verified-boneyard-package>

# 2. Verify exact installed version
npm list <verified-boneyard-package>

```

---

## 3. Technology Stack & Integration Topology

```text
Vite Dev Server / Build Pipeline
 └── React (JSX)
      └── Tailwind CSS 4
           └── Boneyard-JS Capture & Runtime

```

### Stack Components

* **Build Tool:** Vite (`vite.config.js` in JavaScript)
* **UI Library:** React
* **Styling Engine:** Tailwind CSS 4
* **Generator Engine:** Boneyard-JS

---

## 4. Boneyard Integration Status Checklist

* [ ] Boneyard package name verified
* [ ] Latest stable version installed and recorded
* [ ] Vite plugin configured (if required)
* [ ] Configuration file created (`boneyard.config.js` or equivalent)
* [ ] Capture fixture created (`StatsCard.fixture.jsx`)
* [ ] CLI capture/generation verified
* [ ] Bone registry/loading branch implemented
* [ ] Responsive skeleton verified (Mobile, Tablet, Desktop)

---

## 5. Configuration & Setup

> **Verification Pending:** Specific config options marked `TBD` until the installed package API is confirmed.

### Configuration Specification (`boneyard.config.js`)

```javascript
// TBD — Replace with verified configuration structure
module.exports = {
  // Capture configuration options
  // Viewport sizes
  // Component entrypoints
  // Output target directories
};

```

---

## 6. Component Capture & Fixtures

Fixtures provide deterministic sample data for Boneyard capture without touching runtime APIs or production state.

### `StatsCard` Capture Fixture (`src/fixtures/statsCard.fixture.js`)

```javascript
export const statsCardFixture = {
  title: "Monthly Active Users",
  value: "12,840",
  change: "8.2%",
  changeType: "positive",
  icon: null,
};

```

> **Fixture Quality Guideline:** Never use minimal or single-character placeholder data (e.g., `title: "A"`, `value: "1"`). Capture data must reflect standard production string lengths to ensure realistic skeleton geometry.

---

## 7. Bone Generation & CLI Workflow

### Generation Pipeline

$$\begin{aligned} \text{Component + Fixture} &\longrightarrow \text{DOM Render} \\ &\longrightarrow \text{Boneyard Capture} \\ &\longrightarrow \text{Bone Generator} \\ &\longrightarrow \text{Artifact Production} \end{aligned}$$

### CLI Commands

```bash
# TBD — Replace with verified Boneyard CLI commands upon package verification
npm run boneyard:capture

```

### Regeneration Triggers

A bone **must** be regenerated whenever changes occur in:

* Component layout or element structure
* Padding, margins, or spatial layout utilities
* Typography sizes or line heights
* Responsive grid behavior

---

## 8. Runtime Loading Behavior

```text
Component Mount
       │
       ▼
Data Request Pending ──► [ loading === true ] ──► Render Generated Bone
       │
       │
Data Request Resolved ──► [ loading === false ] ──► Render Real Component UI

```

### Loading Branch Standard (`StatsCard.jsx`)

```jsx
// Conceptual loading branch implementation (exact import API TBD)
import { StatsCardBone } from '../bones/StatsCardBone';

export function StatsCard({ isLoading, title, value, change, changeType, icon }) {
  if (isLoading) {
    return <StatsCardBone/>;
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
      {/* Real Component Layout */}
    </div>
  );
}

```

---

## 9. File & Directory Conventions

```text
src/
├── components/
│   └── dashboard/
│       ├── StatsCard.jsx
│       └── StatsGrid.jsx
├── fixtures/
│   └── statsCard.fixture.js
└── bones/                   <-- Generated Boneyard artifacts
    └── StatsCardBone.jsx    <-- (Location TBD based on CLI defaults)

```

---

## 10. Troubleshooting Guide

| Issue | Cause | Resolution |
| --- | --- | --- |
| **Capture CLI command not found** | Package missing or binary not linked in `package.json` | Run `npm list` and verify executable name under `node_modules/.bin` |
| **Skeleton geometry distorted** | Fixture contains atypical string lengths | Update fixture to match production data bounds and rerun capture |
| **Tailwind styles unapplied during capture** | CSS entrypoint skipped during headless rendering | Ensure global CSS / Tailwind 4 imports are registered in Boneyard config |
| **Layout Shift (CLS) on transition** | Outer container padding/margin mismatch | Ensure outer container classes on real UI and bone are identical |

---

## 11. Verified Implementation Summary Record

*(Update this section immediately after first successful component capture)*

```text
Boneyard Package Name:  TBD
Installed Version:     TBD
Config Location:       TBD
CLI Command:           TBD
Bone Output Path:      TBD
Registry API:          TBD

```
