# Học Claude Code (Vietnamese)

A Vietnamese-language fork of **Learn Claude Code** — an interactive course that builds a nano Claude Code–like agent harness from 0 to 1, one mechanism at a time. Built with Next.js (static export) and deployed to GitHub Pages.

Live site: https://nguyenvanhuy0612.github.io/

## Languages

- Tiếng Việt (default) — `/vi/`
- English — `/en/`
- 日本語 — `/ja/`

## Credits & License

This project is a fork/adaptation of [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)
(original site: https://learn.shareai.run). The Vietnamese translation was added in this fork; the
Chinese locale from the original was removed.

The original work is licensed under the MIT License, (c) shareAI Lab. This fork retains that license
(see LICENSE) and credits the original authors. Translated content is a derivative work distributed
under the same MIT terms.

## Local development

\`\`\`bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
\`\`\`

## Deployment

Pushing to \`main\` triggers \`.github/workflows/deploy.yml\`, which builds the static export and publishes
it to GitHub Pages. In repo settings, set Pages -> Build and deployment -> Source to "GitHub Actions".

## Content structure

- Lesson prose: \`src/data/generated/docs.json\` (per-locale: vi, en, ja).
- Code, diffs, version metadata: \`src/data/generated/versions.json\`.
- UI strings: \`src/i18n/messages/{vi,en,ja}.json\`.
