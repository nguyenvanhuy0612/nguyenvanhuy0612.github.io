# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/website for tutorials, guides, and notes. Built with Jekyll and published to GitHub Pages at nguyenvanhuy0612.github.io.

## Local Development

```bash
bundle install            # Install dependencies (first time only)
bundle exec jekyll serve  # Start local server at http://localhost:4000
```

## How Content Works

All content is written in Markdown with YAML front matter. There are four content types, each in its own directory:

| Type | Directory | URL pattern |
|------|-----------|-------------|
| Blog posts | `_posts/` | `/YYYY/MM/DD/title/` |
| Tutorials | `_tutorials/` | `/tutorials/title/` |
| Guides | `_guides/` | `/guides/title/` |
| Notes | `_notes/` | `/notes/title/` |

**Blog posts** must be named `YYYY-MM-DD-title.md`. The other collections use any filename.

Every content file needs this front matter:

```yaml
---
title: "Title"
description: "Short description"
tags: [tag1, tag2]
---
```

## Architecture

- **`_config.yml`** — Site settings, collections config, and default front matter
- **`_layouts/`** — `default.html` (shell with nav/footer) and `post.html` (extends default, adds title/date/tags header)
- **`assets/css/style.css`** — All styling; uses CSS custom properties with automatic dark mode via `prefers-color-scheme`
- **`index.html`** / `tutorials/` / `guides/` / `notes/` — Section index pages using Liquid loops over their respective collections

## Deployment

Push to the `main` branch of `nguyenvanhuy0612/nguyenvanhuy0612.github.io`. GitHub Pages builds and deploys automatically — no CI config needed.

## Key Conventions

- The site uses the `pages-themes/minimal` remote theme as a base
- No JavaScript — pure HTML/CSS with Liquid templating
- Dark mode is CSS-only (no toggle), respecting system preference
