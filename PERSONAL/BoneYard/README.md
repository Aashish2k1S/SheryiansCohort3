# Boneyard-JS + React + Vite + Tailwind CSS

## Implementation Outline

---

## 1. Project Goal

Build a small React + Vite application using JavaScript, Tailwind CSS, and
Boneyard-JS.

The purpose of the project is to understand how Boneyard-JS can generate
skeleton UIs from real React components styled with Tailwind CSS.

The application will simulate a real dashboard that loads data asynchronously.

The main flow will be:

Real React Component
        ↓
Tailwind CSS Layout
        ↓
Browser Rendering
        ↓
Boneyard captures the rendered UI
        ↓
Generated Bone Data
        ↓
Boneyard Skeleton
        ↓
Loading → Loaded

---

## 2. Technology Stack

The project will use:

- Vite
- React
- JavaScript
- JSX
- Tailwind CSS
- Boneyard-JS
- CSS
- Local mock API/data

We will NOT use:

- TypeScript
- Next.js
- Redux
- Zustand
- A real backend
- A database

The goal is to keep the project small and focus on the interaction between
React, Tailwind, Vite, and Boneyard-JS.

---

## 3. Example Application

We will build a small dashboard.

The dashboard will contain:

### Header

A simple application header containing:

- Application name
- User information
- Basic navigation

### Statistics

Three statistic cards:

- Revenue
- Users
- Orders

### User Section

A user card containing:

- Avatar
- Name
- Email
- Role

### Posts Section

A list of posts containing:

- Title
- Description
- Author
- Date

The UI should be visually realistic but intentionally simple.

---

## 4. Why Tailwind CSS Is Included

Tailwind CSS will be used as the primary styling system.

We want to test Boneyard against a UI where the layout is created using
utility classes such as:

- flex
- grid
- gap
- padding
- margin
- width
- height
- rounded
- border
- shadow
- typography
- responsive breakpoints

Example:

```jsx
<div className="rounded-xl border bg-white p-6 shadow-sm">
  <div className="flex items-center gap-4">
    <img
      className="h-12 w-12 rounded-full"
      src={user.avatar}
      alt={user.name}
    />

    <div>
      <h2 className="text-lg font-semibold">
        {user.name}
      </h2>

      <p className="text-sm text-gray-500">
        {user.email}
      </p>
    </div>
  </div>
</div>
```
