# ITZFIZZ — Scroll Hero

A cinematic, scroll-driven interactive hero experience built with **React**, **GSAP**, and **Tailwind CSS v4**.

## ✨ Features

- Scroll-driven GSAP animations with `ScrollTrigger`
- Cinematic hero with floating particles, orbit rings, and glow effects
- Split-text intro animation with 3D letter stagger
- Scroll-progress indicator
- Responsive layout with fluid `clamp()` typography

## 🗂 Project Structure

```
scroll-hero/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── hero-object.png      # Hero 3D crystal asset
│   └── icons.svg            # Icon sprite sheet
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Main hero section with GSAP scroll animations
│   │   ├── SecondSection.jsx # "Keep Moving" section
│   │   └── Stats.jsx        # Stats bar (engagement, performance, satisfaction)
│   ├── App.jsx              # Root composition — assembles all sections
│   ├── index.css            # Global styles, design tokens, component CSS
│   └── main.jsx             # React entry point
├── index.html               # HTML shell
└── vite.config.js           # Vite + Tailwind + React plugin config
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| GSAP 3 + ScrollTrigger | Scroll-driven animations |
| Tailwind CSS v4 | Utility classes |
| Vite 8 | Build tool & dev server |
| oxlint | Fast JS/JSX linter |
