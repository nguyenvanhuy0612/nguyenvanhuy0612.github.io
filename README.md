# nguyenvanhuy0612.github.io

Personal blog and knowledge base for storing tutorials, guides, and notes. Built with [Astro](https://astro.build/) and deployed automatically via [GitHub Pages](https://pages.github.com/).

**Live site:** [https://nguyenvanhuy0612.github.io](https://nguyenvanhuy0612.github.io)

## Tech Stack

- **[Astro](https://astro.build/)** — fast, lightweight static site generator
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** — MDX support for Markdown content
- **CSS custom properties** — theming with light/dark mode toggle
- **GitHub Actions** — automated build and deploy via `withastro/action`

## Project Structure

```
.
├── astro.config.mjs                # Astro configuration (site URL, integrations)
├── package.json                    # Dependencies and scripts (dev, build, preview)
├── tsconfig.json                   # TypeScript config (extends astro/tsconfigs/strict)
├── .gitignore                      # Ignores node_modules/, dist/, .astro/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow — builds & deploys to Pages
│
├── src/
│   ├── content.config.ts           # Content collections schema (posts, tutorials, guides, notes)
│   │
│   ├── layouts/
│   │   ├── Base.astro              # Base layout — HTML shell, navbar, footer, theme toggle
│   │   └── Post.astro              # Post layout — extends Base, adds title/date/tags header
│   │
│   ├── components/
│   │   └── ThemeToggle.astro       # Light/dark mode toggle button with localStorage persistence
│   │
│   ├── styles/
│   │   └── global.css              # All styling — CSS variables, layout, cards, responsive design
│   │
│   ├── pages/
│   │   ├── index.astro             # Homepage — recent posts, tutorials, guides
│   │   ├── posts/[id].astro        # Dynamic route for individual blog posts
│   │   ├── tutorials/
│   │   │   ├── index.astro         # Tutorials listing page
│   │   │   └── [id].astro          # Dynamic route for individual tutorials
│   │   ├── guides/
│   │   │   ├── index.astro         # Guides listing page
│   │   │   └── [id].astro          # Dynamic route for individual guides
│   │   └── notes/
│   │       ├── index.astro         # Notes listing page
│   │       └── [id].astro          # Dynamic route for individual notes
│   │
│   └── content/                    # Markdown content (one folder per collection)
│       ├── posts/
│       │   └── welcome.md
│       ├── tutorials/
│       │   └── install-openclaw.md
│       ├── guides/                 # (empty — add .md files here)
│       └── notes/                  # (empty — add .md files here)
│
├── CLAUDE.md                       # Guidance for Claude Code AI assistant
└── README.md                       # This file
```

## Content Types

| Type | Directory | Filename | URL |
|------|-----------|----------|-----|
| Blog posts | `src/content/posts/` | `any-name.md` | `/posts/name/` |
| Tutorials | `src/content/tutorials/` | `any-name.md` | `/tutorials/name/` |
| Guides | `src/content/guides/` | `any-name.md` | `/guides/name/` |
| Notes | `src/content/notes/` | `any-name.md` | `/notes/name/` |

## Adding New Content

Create a Markdown file in the appropriate `src/content/` subdirectory with front matter:

```yaml
---
title: "Your title here"
description: "A short description"
date: 2026-04-09
tags: [tag1, tag2]
---

Your content in Markdown...
```

Then push to GitHub — the site builds and deploys automatically.

## Local Development

```bash
# Install dependencies (first time only)
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Design Features

- **Light/dark mode** — toggle button in navbar, persisted in localStorage, defaults to system preference
- **Responsive** — mobile-friendly layout with stacked navigation on small screens
- **Code highlighting** — syntax highlighting for code blocks
- **Minimal JavaScript** — only used for theme toggle, everything else is static HTML/CSS

## Deployment

Push to the `main` branch. GitHub Actions (`.github/workflows/deploy.yml`) builds with `withastro/action` and deploys to GitHub Pages automatically.

**Important:** In your GitHub repo settings, set Pages source to **GitHub Actions** (Settings > Pages > Source > GitHub Actions).
