# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal knowledge base for tutorials, guides, and notes. Built with Astro + Starlight and deployed to GitHub Pages at nguyenvanhuy0612.github.io.

## Local Development

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## How Content Works

All content lives in `src/content/docs/` as Markdown files. Starlight auto-generates sidebar entries, table of contents, search index, and navigation from this directory structure.

| Section | Directory | URL pattern |
|---------|-----------|-------------|
| Tutorials | `src/content/docs/tutorials/` | `/tutorials/slug/` |
| Guides | `src/content/docs/guides/` | `/guides/slug/` |
| Notes | `src/content/docs/notes/` | `/notes/slug/` |
| Blog | `src/content/docs/posts/` | `/posts/slug/` |

Every content file needs this front matter:

```yaml
---
title: "Title"
description: "Short description"
---
```

The homepage (`index.mdx`) uses the `splash` template with Starlight's `Card` and `CardGrid` components.

## Architecture

- **`astro.config.mjs`** — Starlight integration config: sidebar sections (autogenerate from directories), social links, edit links, lastUpdated
- **`src/content.config.ts`** — Registers the `docs` collection using `docsLoader()` and `docsSchema()` from Starlight
- **`src/content/docs/`** — All pages. Subdirectory names map to sidebar groups defined in `astro.config.mjs`
- **`.github/workflows/deploy.yml`** — GitHub Actions using `withastro/action@v6` to build and `deploy-pages@v5` to deploy

## Deployment

Push to `main` triggers the GitHub Actions workflow. GitHub Pages source must be set to "GitHub Actions" in repo settings.

## Key Conventions

- Sidebar is configured in `astro.config.mjs` using `autogenerate: { directory: 'name' }` — adding a new file to a directory automatically adds it to the sidebar
- No custom CSS or components — uses Starlight defaults for consistency with the Astro docs style
- The homepage uses MDX (`.mdx`) to import Starlight components; all other pages use plain Markdown
