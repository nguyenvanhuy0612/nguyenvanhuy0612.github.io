# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/website for tutorials, guides, and notes. Built with Astro and deployed to GitHub Pages at nguyenvanhuy0612.github.io.

## Local Development

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Production build to dist/
npm run preview      # Preview production build
```

## How Content Works

All content is Markdown files in `src/content/` with YAML front matter. Content is validated by schemas in `src/content.config.ts`.

| Type | Directory | URL pattern |
|------|-----------|-------------|
| Blog posts | `src/content/posts/` | `/posts/slug/` |
| Tutorials | `src/content/tutorials/` | `/tutorials/slug/` |
| Guides | `src/content/guides/` | `/guides/slug/` |
| Notes | `src/content/notes/` | `/notes/slug/` |

Every content file needs this front matter:

```yaml
---
title: "Title"
description: "Short description"
date: 2026-04-09
tags: [tag1, tag2]
---
```

The `date` field is required (unlike the old Jekyll setup). Tags default to `[]` if omitted.

## Architecture

- **`src/content.config.ts`** — Defines four collections (posts, tutorials, guides, notes) with shared Zod schema using glob loaders
- **`src/layouts/Base.astro`** — HTML shell with navbar, footer, and ThemeToggle component. Includes inline script to prevent flash of wrong theme
- **`src/layouts/Post.astro`** — Wraps Base, adds article header with title/date/tags
- **`src/pages/[section]/[id].astro`** — Dynamic routes using `getStaticPaths()` + `getCollection()` for each content type
- **`src/styles/global.css`** — All styling via CSS custom properties. Theme is toggled by setting `data-theme="dark"` on `<html>`
- **`src/components/ThemeToggle.astro`** — Client-side toggle with localStorage persistence, defaults to `prefers-color-scheme`

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` which uses `withastro/action@v6` to build and `deploy-pages@v5` to deploy. GitHub Pages source must be set to "GitHub Actions" in repo settings.

## Key Conventions

- Content collections use glob-based loaders (`astro/loaders`), not the legacy `getCollection` file-based approach
- Minimal client-side JS — only the theme toggle script
- No external CSS frameworks or component libraries
