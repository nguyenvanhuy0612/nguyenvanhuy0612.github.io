# nguyenvanhuy0612.github.io

Personal knowledge base for tutorials, guides, and notes. Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) and deployed via [GitHub Pages](https://pages.github.com/).

**Live site:** [https://nguyenvanhuy0612.github.io](https://nguyenvanhuy0612.github.io)

## Tech Stack

- **[Astro](https://astro.build/)** — fast, lightweight static site generator
- **[Starlight](https://starlight.astro.build/)** — Astro's official documentation theme
- **[Pagefind](https://pagefind.app/)** — built-in full-text search
- **GitHub Actions** — automated build and deploy via `withastro/action`

## Project Structure

```
.
├── astro.config.mjs                # Astro + Starlight config (site URL, sidebar, social links)
├── package.json                    # Dependencies and scripts (dev, build, preview)
├── tsconfig.json                   # TypeScript config (extends astro/tsconfigs/strict)
├── .gitignore                      # Ignores node_modules/, dist/, .astro/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions — builds & deploys to Pages
│
├── src/
│   ├── content.config.ts           # Content collection config (docsLoader + docsSchema)
│   │
│   └── content/
│       └── docs/                   # All site content lives here
│           ├── index.mdx           # Homepage — splash page with card grid
│           ├── tutorials/          # Step-by-step tutorial articles
│           │   └── install-openclaw.md
│           ├── guides/             # Reference guides and how-tos
│           ├── notes/              # Quick notes and references
│           └── posts/              # Blog posts
│               └── welcome.md
│
├── CLAUDE.md                       # Guidance for Claude Code AI assistant
└── README.md                       # This file
```

## Content Sections

| Section | Directory | URL |
|---------|-----------|-----|
| Tutorials | `src/content/docs/tutorials/` | `/tutorials/slug/` |
| Guides | `src/content/docs/guides/` | `/guides/slug/` |
| Notes | `src/content/docs/notes/` | `/notes/slug/` |
| Blog | `src/content/docs/posts/` | `/posts/slug/` |

## Adding New Content

Create a Markdown file in the appropriate `src/content/docs/` subdirectory:

```yaml
---
title: "Your title here"
description: "A short description"
---

Your content in Markdown...
```

New pages automatically appear in the sidebar (configured via `autogenerate` in `astro.config.mjs`).

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

## Features (from Starlight)

- **Dark/light mode** — toggle in the header, persisted across visits
- **Full-text search** — powered by Pagefind, built automatically
- **Sidebar navigation** — auto-generated from directory structure
- **Table of contents** — generated from headings on each page
- **Code blocks** — syntax highlighting with copy button
- **Edit links** — "Edit page" link pointing to GitHub source
- **Last updated** — shows when each page was last modified
- **Responsive** — mobile-friendly with collapsible sidebar
- **SEO** — sitemap and meta tags generated automatically

## Deployment

Push to the `main` branch. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.

**Important:** In your GitHub repo settings, set Pages source to **GitHub Actions** (Settings > Pages > Source > GitHub Actions).
