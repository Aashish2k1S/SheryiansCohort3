# Aashish Gupta — Developer Portfolio

A modern, animation-driven developer portfolio built with React, GSAP, Tailwind CSS, and Lenis.

The portfolio is designed to showcase my experience, education, technical skills, projects, and development work through a minimal dark interface with smooth interactions and scroll-based animations.

---

## ✨ Features

- Modern responsive portfolio design
- Project showcase with dedicated project detail pages
- Dynamic project routing using React Router
- GSAP-powered animations
- Scroll-triggered section and project animations
- Custom cursor with contextual interaction states
- Magnetic button interactions
- Project hover interactions
- Animated mobile navigation
- Smooth scrolling using Lenis
- Page preloader
- Reduced-motion support
- Responsive layouts for desktop, tablet, and mobile
- Custom scrollbar styling
- Centralized design tokens / theme colors
- Lazy-loaded components
- 404 fallback page
- External project links
- Accessibility-conscious interaction handling

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Vite

### Animation & Interaction
- GSAP
- `@gsap/react`
- ScrollTrigger
- Lenis
- Custom cursor
- Magnetic interactions

### Icons
- Lucide React

### Development
- ESLint
- Vite
- npm

---

## 🎨 Design Philosophy

The portfolio follows a minimal, editorial-inspired visual language.

The design focuses on:
- Strong typography
- High contrast
- Generous whitespace
- Minimal UI elements
- Subtle motion
- Scroll-driven storytelling
- Clear project presentation
- Responsive behavior

Animations are used to support the interface rather than overwhelm it.

---

## 🧩 Architecture

The application is organized around reusable React components, animation utilities, custom hooks, data-driven content, and route-level pages.

### Main Architecture

```text
React Application
│
├── Layout
│   ├── SmoothScroll
│   ├── CustomCursor
│   └── Navbar
│
├── Pages
│   ├── Home
│   ├── ProjectDetails
│   └── NotFound
│
├── Components
│   ├── Hero
│   ├── Projects
│   ├── ProjectCard
│   ├── About
│   ├── Experience
│   ├── Education
│   ├── Skills
│   ├── Contact
│   ├── Footer
│   └── Preloader
│
├── Animations
│   ├── Section animations
│   ├── Project animations
│   ├── Preloader animations
│   └── Interaction animations
│
└── Data
    ├── Portfolio data
    └── Project data

```

### 📁 Project Structure

```text
a3-portfolio/
├── public/
│   └── Image/
│       └── Projects/
│           ├── AI-Summarizer.png
│           ├── EmployeeAPI.png
│           ├── ERP-Platform.png
│           ├── Fav.png
│           └── ScrapeFlow.png
│
├── src/
│   ├── animations/
│   │   ├── aboutAnimations.js
│   │   ├── contactAnimations.js
│   │   ├── experienceAnimations.js
│   │   ├── heroAnimations.js
│   │   ├── preloaderAnimations.js
│   │   ├── projectAnimations.js
│   │   ├── projectCardAnimations.js
│   │   ├── scrollAnimations.js
│   │   └── skillsAnimations.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── SmoothScroll.jsx
│   │
│   ├── data/
│   │   ├── data.js
│   │   └── projects.js
│   │
│   ├── hooks/
│   │   ├── useGsap.js
│   │   ├── useMagnetic.js
│   │   └── useScrollToSection.js
│   │
│   ├── layout/
│   │   └── Layout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── ProjectDetails.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── ProjectStructure.md
├── README.md
├── RoadMap.md
└── vite.config.js

```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js (v18+)
* npm

You can verify your installation:

```bash
node -v
npm -v

```

### Installation

1. **Clone the repository**
```bash
git clone [https://github.com/Aashish2k1S/a3-portfolio.git](https://github.com/Aashish2k1S/a3-portfolio.git)

```


2. **Navigate into the project**
```bash
cd a3-portfolio

```


3. **Install dependencies**
```bash
npm install

```


4. **Start the development server**
```bash
npm run dev

```



The application will be available through the local Vite development server.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the local production build |
| `npm run lint` | Runs ESLint code quality checks |

---

## 🗂️ Project Routing

The application uses React Router for client-side navigation.

### Routes

* **Home (`/`)**: Displays Hero, Selected Projects, About, Experience, Education, Skills, Contact, and Footer.
* **Project Details (`/projects/:slug`)**: Dynamic project pages rendered based on project identifiers (e.g., `/projects/scrapeflow`, `/projects/ai-summarizer`, `/projects/employee-api`).

Project pages are generated from data structured inside `src/data/projects.js`, maintaining a strict separation between content and visual components.

---

## 📦 Data-Driven Projects

Projects are represented as structured JSON objects rather than hardcoded markup inside components.

```javascript
{
  id: 1,
  title: "ScrapeFlow",
  slug: "scrapeflow",
  description: "...",
  technologies: [
    "Python",
    "LLM",
    "Data Processing",
    "Mermaid"
  ],
  image: "/Image/Projects/ScrapeFlow.png",
  github: "[https://github.com/Aashish2k1S/ScrapeFlow](https://github.com/Aashish2k1S/ScrapeFlow)",
  live: null
}

```

This single data source populates:

* Project listing cards
* Dynamic project detail pages
* Application routes
* Project images & technology tags
* External repository and live demo links

---

## 🎬 Animation System

Animations are completely decoupled from UI layout components. Rather than declaring heavy GSAP timelines inline, logic is structured inside `src/animations/`:

* `heroAnimations.js`
* `projectAnimations.js`
* `projectCardAnimations.js`
* `aboutAnimations.js`
* `experienceAnimations.js`
* `skillsAnimations.js`
* `contactAnimations.js`
* `preloaderAnimations.js`
* `scrollAnimations.js`

This separation keeps components clean, readable, and easier to test or refactor.

---

## 🖱️ Custom Cursor & Magnetic Interactions

* **Custom Cursor:** Features contextual states (`Default` → `Interactive` → `Project`). Visual indicators (e.g., `VIEW`) trigger dynamically over project showcase items. Hidden on coarse touch devices.
* **Magnetic Elements:** Interactive elements leverage soft physics-based magnet effects powered by `src/hooks/useMagnetic.js`.

---

## 🌀 Smooth Scrolling

Smooth inertia scrolling is managed globally via **Lenis**, modularized inside `src/components/SmoothScroll.jsx` to prevent scroll listeners from interfering with standard React renders.

---

## 📱 Responsive Design & Accessibility

* **Responsive:** Layouts dynamically adapt across Mobile, Tablet, Desktop, and Ultrawide displays.
* **Accessibility:** Uses semantic HTML, dynamic `aria-label` / `aria-expanded` attributes, link security parameters (`target="_blank" rel="noopener noreferrer"`), and standard keyboard navigation.
* **Reduced Motion:** Fully honors `prefers-reduced-motion`. Non-essential GSAP transitions and Lenis smooth scrolling automatically fallback to native linear state changes when detected.

---

## ⚡ Performance Optimization

* Vite bundling & code-splitting
* Component lazy-loading
* Decoupled animation initialization
* Conditional rendering for hardware-bound elements (Cursor, Lenis)
* Optimized dynamic asset serving

---

## 🖼️ Project Assets

Project visual assets are statically served from `public/Image/Projects/`:

* `AI-Summarizer.png`
* `EmployeeAPI.png`
* `ERP-Platform.png`
* `ScrapeFlow.png`

Projects lacking preview artwork gracefully fallback to visual typography containers.

---

## 🧪 Development Workflow

```text
1. Define portfolio data
       │
2. Create reusable component
       │
3. Implement responsive layout
       │
4. Add GSAP animation module
       │
5. Attach dynamic interaction hooks
       │
6. Test reduced-motion support
       │
7. Verify cross-device layouts
       │
8. Run ESLint checks
       │
9. Create & test production build
       │
10. Deploy

```

---

## 🗺️ Roadmap

### Completed

* [x] Core React portfolio foundation
* [x] Responsive layout & mobile navigation
* [x] Hero, About, Experience, Education, Skills, and Contact sections
* [x] Dynamic project routing & project detail views
* [x] GSAP scroll-triggered animations & decoupled animation modules
* [x] Contextual custom cursor & magnetic button interactions
* [x] Lenis smooth scrolling integration
* [x] Animated preloader & 404 fallback page
* [x] `prefers-reduced-motion` compliance

### In Progress / Remaining

* [ ] Lighthouse performance audit & image optimizations
* [ ] Font loading optimizations
* [ ] Final cross-device visual QA & mobile performance audit
* [ ] Complete accessibility compliance audit
* [ ] Final deployment verification & SPA fallback configuration

---

## 👨‍💻 About Me

I'm **Aashish Gupta**, a Software Developer focused on building robust backend systems, APIs, data-driven applications, and modern web experiences.

### Technical Interests

* **Backend:** .NET, Python, REST APIs, SQL, Data Engineering
* **Frontend & Web:** React, Modern Web UI
* **DevOps & Cloud:** Docker, Cloud Technologies
* **AI:** LLM Applications & Integration

### 🔗 Connect

* **LinkedIn:** [aashish-gupta001](https://www.linkedin.com/in/aashish-gupta001/)
* **GitHub:** [Aashish2k1S](https://github.com/Aashish2k1S)

---

## 📄 License

This project serves as a personal portfolio and software showcase. The underlying codebase is available for educational and reference purposes. Please do not rebrand, copy, or distribute the personal content, branding, or specific design details as your own work.

---

## ⭐ Acknowledgements

Designed and developed by **Aashish Gupta**. Built using React, GSAP, Tailwind CSS, Lenis, and Vite.

```