# UI Specification

## Dashboard Component Specifications

---

## 1. Document Purpose

This document provides exact visual, structural, and behavioral specifications for dashboard components, beginning with **`StatsCard`** and its container **`StatsGrid`**.

An AI agent or developer should be able to implement these components directly from this specification without making independent design or layout decisions.

---

## 2. Component Blueprint: `StatsCard`

### Purpose & Role

`StatsCard` is a presentational metric component that displays a single numerical or qualitative statistic alongside supporting metadata and optional icons.

As the first official **Boneyard-JS** integrated component, its layout serves as the source of truth for generated skeleton loaders.

```text
Dashboard
└── StatsGrid
    ├── StatsCard (Revenue)
    ├── StatsCard (Active Users)
    └── StatsCard (Orders)
```

---

### Component Props API

```jsx
<StatsCard change="12.5%" changeType="positive" icon="{<DollarSignIcon" title="Revenue" value="$24,500"/>}
/>

```

| Prop             | Type        | Required   | Default     | Description                             |
| ---------------- | ----------- | ---------- | ----------- | --------------------------------------- | ----------- | ---------------------------------------- |
| **`title`**      | `string`    | **Yes**    | —           | Label identifying the metric            |
| **`value`**      | `string`    | **Yes**    | —           | Formatted main numeric metric display   |
| **`change`**     | `string`    | No         | `undefined` | Delta value compared to previous period |
| **`changeType`** | `'positive' | 'negative' | 'neutral'`  | No                                      | `'neutral'` | Semantic direction for styling and icons |
| **`icon`**       | `ReactNode` | No         | `null`      | Decorative icon displayed top-right     |

---

### Data Shape

Runtime components receive plain JavaScript objects matching this shape:

```javascript
{
  title: "Revenue",
  value: "$24,500",
  change: "12.5%",
  changeType: "positive",
  icon: null
}

```

> **Note:** Number formatting (e.g., currency symbols, commas, decimals) must occur in the data layer or mock API **before** reaching `StatsCard`. The component strictly renders formatted strings.

---

### Visual Hierarchy & Anatomy

```text
┌──────────────────────────────────────────┐
│ TITLE                              ICON  │  <-- Header Row (flex justify-between)
│ (text-sm, font-medium, gray-500)   (32px)│
│                                          │
│ VALUE                                    │  <-- Primary Anchor (2xl/3xl, font-bold)
│ ($24,500)                                │
│                                          │
│ CHANGE INDICATOR                         │  <-- Metadata Row (text-sm)
│ (↑ 12.5% vs last month)                  │
└──────────────────────────────────────────┘

```

#### Hierarchy Rank

1. **`value`** (Primary visual weight — largest typography)
2. **`title`** (Secondary contextual anchor — muted text)
3. **`change`** (Supporting metadata — inline indicator + badge/color)
4. **`icon`** (Decorative element — muted neutral color, top-right absolute/flex align)

---

### Layout & Tailwind CSS 4 Styling Rules

`StatsCard` is styled using utility classes inline in JSX.

#### Container Specifications

- **Border & Background:** `bg-white border border-gray-200`
- **Rounded Corners:** `rounded-xl`
- **Padding:** `p-5` or `p-6`
- **Shadow:** `shadow-xs hover:shadow-sm transition-shadow`
- **Sizing:** `w-full h-full min-h-[120px] flex flex-col justify-between`

#### Typography Utilities

| Region               | Tailwind Utilities                                                 | Visual Intent           |
| -------------------- | ------------------------------------------------------------------ | ----------------------- |
| **Title**            | `text-sm font-medium text-gray-500 truncate`                       | Muted label             |
| **Value**            | `text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mt-2` | Heavy focal point       |
| **Change Container** | `flex items-center gap-1.5 text-sm font-medium mt-3`               | Supporting metadata row |

#### `changeType` Variant Styles

```text
positive ──► Text: text-emerald-600  Icon/Badge: bg-emerald-50 text-emerald-700 (↑)
negative ──► Text: text-rose-600     Icon/Badge: bg-rose-50 text-rose-700 (↓)
neutral  ──► Text: text-gray-600     Icon/Badge: bg-gray-100 text-gray-700 (→)

```

> **Accessibility Rule:** Visual state must not rely on color alone. Upwards/downwards directional arrows (`↑`, `↓`, `→`) or specific icons must accompany all `change` text strings.

---

### Icon Behavior & Layout Balance

```text
WITH ICON                                  WITHOUT ICON
┌──────────────────────────────┐           ┌──────────────────────────────┐
│ Revenue                 ◉    │           │ Revenue                      │
│                              │           │                              │
│ $24,500                      │           │ $24,500                      │
│ ↑ 12.5%                      │           │ ↑ 12.5%                      │
└──────────────────────────────┘           └──────────────────────────────┘

```

- When `icon` is provided, the card header uses `flex items-center justify-between`.
- When `icon` is `null`, `title` occupies the row naturally without collapsing vertical height or shifting `value` placement.

---

### Responsive Grid Behavior (`StatsGrid`)

`StatsCard` fills 100% of its grid container cell width (`w-full`). Grid columns and gaps are strictly controlled by `StatsGrid`.

```text
MOBILE (<768px)            TABLET (768px–1023px)         DESKTOP (≥1024px)
┌──────────────────┐       ┌──────────────────┐ ┌───────┐  ┌───────┐ ┌───────┐ ┌───────┐
│ StatsCard        │       │ StatsCard        │ │ Card  │  │ Card  │ │ Card  │ │ Card  │
└──────────────────┘       └──────────────────┘ └───────┘  └───────┘ └───────┘ └───────┘
┌──────────────────┐       ┌──────────────────┐
│ StatsCard        │       │ StatsCard        │
└──────────────────┘       └──────────────────┘

```

#### `StatsGrid` Tailwind Grid Specs

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
    {children}
</div>
```

---

### Content Edge Case Resilience

The component layout must tolerate extreme text variations without breaking:

| Edge Case Test       | Example Input                          | Target Component Behavior                                                              |
| -------------------- | -------------------------------------- | -------------------------------------------------------------------------------------- |
| **Long Title**       | `"Average Monthly Recurring Revenue"`  | Truncates cleanly (`truncate`) or wraps gracefully without pushing `value` out of view |
| **Large Value**      | `"$1,248,920.50"`                      | Scales down smoothly; text wrap prevented (`whitespace-nowrap`)                        |
| **Missing Change**   | `change = undefined`                   | Metadata row omitted; card container height remains stable                             |
| **Long Change Text** | `"12.5% compared to previous quarter"` | Text wraps cleanly within container bounds                                             |

---

## 3. Boneyard Skeleton Expectations

`StatsCard` skeleton geometry is generated directly from the rendered DOM structure via Boneyard-JS.

### Expected Skeleton Anatomy

```text
REAL COMPONENT                             GENERATED BONEYARD SKELETON
┌──────────────────────────────┐           ┌──────────────────────────────┐
│ Revenue                 ◉    │           │ ░░░░░░░░░░              ░░   │
│                              │           │                              │
│ $24,500                      │           │ ░░░░░░░░░░░░                 │
│ ↑ 12.5%                      │           │ ░░░░░░░░                     │
└──────────────────────────────┘           └──────────────────────────────┘

```

### Boneyard Integration Rules for `StatsCard`

1. **Single Source of Truth:** Do **not** hand-code a separate skeleton JSX component with hardcoded `<div>` dimensions unless explicitly required by Boneyard runtime imports.
2. **Geometry Mirroring:** Skeleton blocks must match outer container padding (`p-5`), rounded corners (`rounded-xl`), and grid column proportions exactly.
3. **Responsive Skeletons:** The generated bone must scale seamlessly across mobile (`grid-cols-1`), tablet (`grid-cols-2`), and desktop (`grid-cols-3`) without horizontal overflow.

---

## 4. Acceptance Criteria Checklist

### Real UI Checklist

- [ ] Built using React JSX and Tailwind CSS 4 utility classes.
- [ ] Clear visual hierarchy (Value $>$ Title $>$ Change $>$ Icon).
- [ ] Displays `title` and `value` correctly.
- [ ] Renders `change` percentage with correct directional arrow and color variant.
- [ ] Layout remains balanced with or without top-right `icon`.
- [ ] Handles long titles and large numbers without container overflow.
- [ ] Responsive grid adapts across Mobile (1 col), Tablet (2 col), and Desktop (3 col).

### Boneyard Skeleton Checklist

- [ ] Real UI DOM successfully captured by Boneyard-JS workflow.
- [ ] Bone generated and stored in designated bones module path.
- [ ] Loading state (`isLoading === true`) displays Boneyard skeleton loader.
- [ ] Transition from skeleton to real component is visually smooth with zero Layout Shift (CLS).
- [ ] Skeleton scales responsively across viewports.

---

## 5. Implementation Sequence Protocol

When implementing `StatsCard`, developers or AI agents must complete steps in this exact order:

$$
\begin{aligned}
\text{1. Build Real JSX UI} &\longrightarrow \text{2. Apply Tailwind 4 Utilities} \\
&\longrightarrow \text{3. Test Responsive Grid in StatsGrid} \\
&\longrightarrow \text{4. Connect Async Mock Props \& Loading State} \\
&\longrightarrow \text{5. Run Boneyard Capture against Fixture} \\
&\longrightarrow \text{6. Bind Generated Bone to Loading Branch} \\
&\longrightarrow \text{7. Audit Visual Alignment \& Responsive Skeleton}
\end{aligned}
$$

> **Core Rule:** Never attempt to generate or construct a Boneyard bone before the real UI component is fully built and visually verified.

