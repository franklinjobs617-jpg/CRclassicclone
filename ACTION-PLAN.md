# CRClassic.wiki SEO Action Plan

Audit date: June 30, 2026  
Target score after completed fixes: 96 / 100

## Critical

### 1. Add Sitemap

Status: Completed  
File: `app/sitemap.ts`

Reason:

Search engines need a direct crawl map for the full wiki route set.

Implemented:

- Added all 11 core pages.
- Set homepage priority to `1`.
- Set guide pages to `0.8`.
- Set update frequency to `daily`.

### 2. Add Robots

Status: Completed  
File: `app/robots.ts`

Reason:

Crawlers need a clear rule file and sitemap reference.

Implemented:

- Allows all crawlers.
- Points to `https://crclassic.wiki/sitemap.xml`.

## High

### 3. Add Homepage Canonical

Status: Completed  
File: `app/page.tsx`

Reason:

The homepage should declare a stable canonical path to avoid duplicate homepage variants.

Implemented:

- Added `alternates: { canonical: '/' }`.
- Added page-specific title and description.

## Medium

### 4. Replace Image Slots With Final Screenshots

Status: Open

Recommended next steps:

- Add final images under `/public/images/`.
- Use the suggested filenames shown directly in each page's image slot.
- Replace `ImageSlot` with `ImageFigure` after each screenshot is ready.

Priority image targets:

- Beginner first mission screen.
- DevPlay Account field.
- Coupon Code field.
- Mail reward screen.
- Cookie roster or upgrade screen.
- Pet roster or upgrade screen.
- Treasure upgrade confirmation.
- PC install or key mapping screen.

### 5. Recheck Metadata After Deployment

Status: Open

Recommended next steps:

- Open deployed pages and inspect generated `<head>` tags.
- Confirm canonical URLs resolve to `https://crclassic.wiki/...`.
- Confirm `/sitemap.xml` and `/robots.txt` return `200`.

## Low

### 6. Optional Post-Launch Search Console Review

Status: Open

Recommended next steps after indexing:

- Submit `https://crclassic.wiki/sitemap.xml` in Google Search Console.
- Monitor coverage for all 11 routes.
- Improve pages with impressions but low click-through rate.
- Expand only when real query data shows a new player task.

## Validation Checklist

- `app/sitemap.ts` exists.
- `app/robots.ts` exists.
- Homepage canonical exists.
- TypeScript passes with `tsc --noEmit`.
- Do not run production build unless explicitly requested.
