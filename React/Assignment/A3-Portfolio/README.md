# Aashish Gupta — Developer Portfolio

A modern, responsive developer portfolio built to showcase my projects, technical experience, skills, and approach to software development.

The portfolio focuses on a minimal, engineering-oriented design with smooth interactions, purposeful animations, and performance-conscious implementation.

## Live Portfolio

[Visit Portfolio](YOUR_LIVE_PORTFOLIO_URL)

---

## About

I'm Aashish Gupta, a Software Developer focused primarily on backend development, API design, SQL, and data-driven applications.

My professional work revolves around:

- .NET / ASP.NET Core
- REST API development
- Microsoft SQL Server
- Database optimization
- Python
- React
- AI / LLM integrations
- Docker and modern development infrastructure

This portfolio is also a practical project where I experiment with frontend architecture, animation systems, interaction design, accessibility, and performance optimization.

---

## Features

- Responsive design across desktop, tablet, and mobile
- Custom animated cursor for desktop devices
- Cursor interaction states
- Magnetic interactions
- Project hover interactions
- GSAP-powered animations
- Scroll-triggered section animations
- Animated navbar transitions
- Mobile navigation menu
- Smooth scrolling
- Reduced-motion support
- Project showcase
- Project detail routing
- Responsive typography
- Custom scrollbar
- Accessible navigation
- SEO-friendly metadata
- 404 / fallback handling
- Lazy-loaded components
- Production-ready build setup

---

## Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- Vite

### Animation

- GSAP
- ScrollTrigger
- `@gsap/react`
- Lenis

### Routing

- React Router

### Icons

- Lucide React

### Tooling

- ESLint
- Vite
- Git
- GitHub

---

## Project Structure

```text
src/
│
├── animations/
│   ├── aboutAnimations.js
│   ├── contactAnimations.js
│   ├── projectAnimations.js
│   ├── projectCardAnimations.js
│   └── scrollAnimations.js
│
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
│
├── data/
│   ├── projects.js
│   └── skills.js
│
├── hooks/
│   └── useGsap.js
│
├── pages/
│   ├── Home.jsx
│   ├── ProjectDetails.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css