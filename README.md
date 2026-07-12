# Valeria Meza Portfolio

A static personal portfolio built with Astro and Tailwind CSS 4. The site uses a terminal-inspired UI to present profile, skills, and project content in a compact, technical format.

## Overview

- Static Astro site with Tailwind 4 styling through the Vite plugin
- Terminal/TUI visual language with monospace typography and boxed sections
- Responsive single-page layout with About, Skills, and Projects sections
- Built for GitHub Pages deployment with the production site configured at `valeriameza.com`

## Tech Stack

- Astro 7
- Tailwind CSS 4
- TypeScript

## Getting Started

### Prerequisites

- Node.js 22.12+ recommended
- npm 9.6.5+

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local Astro dev URL shown in the terminal.

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally

## Project Structure

```text
.
├── public/
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── ProjectTable.astro
│   │   ├── SectionFrame.astro
│   │   └── TerminalHeader.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Implementation Notes

- `src/pages/index.astro` defines the page content and project/skill data
- `src/components/TerminalHeader.astro` renders the hero and navigation
- `src/components/SectionFrame.astro` provides the framed TUI section wrapper
- `src/components/ProjectTable.astro` renders the projects table and keyboard cues
- `astro.config.mjs` wires in `@tailwindcss/vite`
- `src/styles/global.css` imports Tailwind and defines the background treatment, typography, and cursor-style animation
- `tailwind.config.mjs` extends the theme with the terminal color palette, shadows, and mono font stack

## Deployment

The Astro config is set to:

- build as a static site
- use `https://valeriameza.com` as the site URL
- support custom domain deployment through `public/CNAME`

Typical publish flow:

```bash
npm run build
```

Deploy the generated `dist/` output with your GitHub Pages workflow or static hosting pipeline.
