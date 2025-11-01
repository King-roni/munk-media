# Weekly Publishing Prompt Format

## How to Use

To create a new blog post, paste the following format into Cursor. The system will automatically:
1. Create the post folder structure (`content/blog/YYYY/MM/slug/`)
2. Generate the `index.mdx` file with front-matter
3. Download cover images if provided as URLs
4. Calculate reading time if not provided
5. Validate all required fields

## Prompt Format

Copy and paste this exact format:

```
<<<NEW_POST>>>
title: Your Post Title Here
slug: your-post-slug-here
description: Short SEO description (max ~155 chars) that summarizes the post.
date: 2025-11-01
author:
  name: Munk Media
  handle: munk-media
  avatar: /authors/munk-media.jpg
category: Influencer Marketing
tags: [Influencer, UGC, Strategy, Campaigns]
cover:
  file: https://example.com/image.jpg
  alt: Descriptive alt text for accessibility
  credit: Photo by Photographer Name (optional)
readingTime: 6
draft: false
---
# Your Post Title

Intro paragraph that hooks the reader...

## Section Heading

Body content goes here. You can use:

- Bulleted lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

<Callout type="info">
  This is an info callout. Use type="success", "warning", or "error" for other styles.
</Callout>

## Another Section

More content...

### Subsection

Wrap up with a strong takeaway.
<<<END_POST>>>
```

## Required Fields

- `title`: Post title
- `slug`: URL-friendly slug (kebab-case)
- `description`: SEO description (155 chars max)
- `date`: ISO date (YYYY-MM-DD)
- `author.name`: Author display name
- `author.handle`: URL-friendly handle (for `/blog/author/[handle]`)
- `category`: Main category name
- `tags`: Array of 3-7 tags

## Optional Fields

- `updated`: ISO date if post was updated
- `author.avatar`: Path to avatar image (e.g., `/authors/handle.jpg`)
- `cover.file`: URL or local path to cover image
- `cover.alt`: Alt text for cover image
- `cover.credit`: Photo credit (optional)
- `readingTime`: Integer (auto-calculated if omitted)
- `draft`: `true` to hide from public listings (default: `false`)

## Cover Image Handling

- **URL**: If `cover.file` is a URL (starts with `http://` or `https://`), it will be downloaded to the post folder as `cover.jpg` (or appropriate extension)
- **Local path**: If it's a local path, it will be copied to the post folder
- **Omitted**: If `cover` is not provided, the post will have no cover image

## Draft Mode

- Set `draft: true` to hide the post from all public listings
- Post will still be accessible via direct URL (`/blog/[slug]`)
- Change to `draft: false` to publish

## After Publishing

After the post is created:
1. The new post will appear on `/blog` automatically (if `draft: false`)
2. Category, tag, and author pages will update automatically
3. RSS feed will include the new post
4. Sitemap will be regenerated on next build

## Examples

### Minimal Example

```
<<<NEW_POST>>>
title: How to Build Authentic Creator Partnerships
slug: authentic-creator-partnerships
description: Learn the key strategies for building lasting partnerships with creators that drive real results.
date: 2025-11-01
author:
  name: Munk Media
  handle: munk-media
category: Creator Management
tags: [Creators, Partnerships, Strategy]
---
# How to Build Authentic Creator Partnerships

Content here...
<<<END_POST>>>
```

### Full Example with Cover

```
<<<NEW_POST>>>
title: The Future of UGC in 2025
slug: future-of-ugc-2025
description: Discover how user-generated content is evolving and what brands need to know.
date: 2025-11-05
author:
  name: Sarah Johnson
  handle: sarah-johnson
  avatar: /authors/sarah-johnson.jpg
category: UGC Production
tags: [UGC, Content, Trends, 2025]
cover:
  file: https://images.unsplash.com/photo-1234567890
  alt: Creative team working on content
  credit: Photo by John Doe
readingTime: 8
draft: false
---
# The Future of UGC in 2025

User-generated content continues to evolve...
<<<END_POST>>>
```

## Notes

- All posts are stored in `content/blog/YYYY/MM/slug/` format
- The system automatically handles image downloads and path resolution
- Invalid or missing required fields will prevent post creation
- Always test with `draft: true` first, then change to `draft: false` to publish

