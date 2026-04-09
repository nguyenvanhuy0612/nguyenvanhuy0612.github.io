---
title: "How to write a new post"
description: "Learn how to add content to this site"
tags: [meta]
---

## Step 1: Create a file

- For blog posts: create a file in `_posts/` named `YYYY-MM-DD-title.md`
- For tutorials: create a file in `_tutorials/`
- For guides: create a file in `_guides/`
- For notes: create a file in `_notes/`

## Step 2: Add front matter

Every file starts with front matter between `---` lines:

```yaml
---
title: "Your title here"
description: "A short description"
tags: [tag1, tag2]
---
```

## Step 3: Write content in Markdown

Use standard Markdown syntax:

```markdown
## Heading

Regular paragraph text.

- Bullet list
- Another item

`inline code` or code blocks with triple backticks
```

## Step 4: Push to GitHub

```bash
git add .
git commit -m "Add new post"
git push
```

GitHub Pages will automatically build and publish your site.
