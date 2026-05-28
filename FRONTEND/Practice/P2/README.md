# 🍃 Two Leaves and a Bud — Frontend Clone

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://twoleafs.vercel.app/)

A responsive frontend landing page inspired by the **Two Leaves and a Bud** tea brand. Built with pure HTML, CSS, and vanilla JavaScript.

> 🌐 **Live Site:** [https://twoleafs.vercel.app/](https://twoleafs.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Contributing](#contributing)

---

## Overview

This project is a multi-section e-commerce style landing page for a tea brand. It features a sticky navigation bar, product cards, a tea discovery tool, customer reviews, a barista panel, a journal section, and a full footer — all styled with custom CSS and custom fonts.

---

## ✨ Features

- **Sticky Navbar** — The navigation bar transitions on scroll using a CSS class toggled by JavaScript.
- **Hero Section** — Full-screen background image with a headline and CTA button.
- **Best Sellers Cards** — Product cards with category badges, star ratings, and an "Add" button.
- **Tea Discovery Tool** — A search input and vibe-tag filter buttons to help users explore by mood.
- **Our Origins Section** — Brand story with illustrated visuals.
- **Customer Reviews** — Review cards with product imagery and customer quotes.
- **Barista Panel** — Spotlight on latte mix products with navigation arrows.
- **Tea Journal** — Blog-style cards with category tags (Recipe, Caffeine, Matcha).
- **Newsletter Footer** — Email signup, social media links, and a full sitemap.
- **Responsive Design** — Mobile-friendly hamburger menu and flexible layouts.

---

## 📁 Project Structure

```
├── index.html        # Main HTML structure
├── style.css         # All styling and CSS variables
├── main.js           # Scroll-based navbar behaviour
├── asstes/           # Images, SVGs, and WebP assets
│   ├── imgi_109_Logo_1.svg
│   ├── shopping-bag.png
│   └── ...
└── font/             # Custom local font files
    ├── Poppins-Regular.ttf
    ├── RecklessCondensedS-TRIAL-Book.woff
    ├── RobotoMono-Regular.ttf
    └── ...
```

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the project in a browser.

**Option 1 — Open directly:**

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the folder
cd your-repo-name

# Open in your browser
open index.html
```

**Option 2 — Use a local dev server (recommended to avoid font/asset CORS issues):**

```bash
# Using VS Code Live Server extension — right-click index.html → "Open with Live Server"

# Or using Python
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, CSS variables, custom fonts |
| Vanilla JavaScript | Scroll event listener for sticky navbar |
| Remix Icons | Navigation and UI icons |
| Font Awesome 7 | Stars, social icons, and UI icons |

---

## 📄 Sections

| Section | Description |
|---|---|
| Announcement Bar | "Free US shipping for orders over $75" |
| Navbar | Logo, shop/learn/review links, cart icon |
| Hero | Full-screen image with headline and Shop Now CTA |
| Best Sellers | 4 product cards with ratings and add buttons |
| Discover | Search bar + 16 vibe-filter tags |
| Our Origins | Brand story, Born in Colorado, illustrated visuals |
| Reviews | Customer quote cards with product images |
| Barista Panel | Nice Chai Latte Mix product spotlight |
| Tea Journal | 4 editorial cards (recipes, matcha content) |
| About Us | Split image + text panel |
| Footer | Newsletter signup, social links, full sitemap |

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

This project is for educational and portfolio purposes only. All tea brand names, product names, and imagery referenced are the property of their respective owners.
