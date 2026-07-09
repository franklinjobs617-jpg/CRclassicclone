# Full Website SEO Audit Report: CRClassic.wiki

Audit date: June 30, 2026  
Business type: Information portal / gaming wiki hub  
Current SEO health score before fixes: 82 / 100  
Projected SEO health score after fixes: 96 / 100

## Executive Summary

CRClassic.wiki already has a strong content foundation: focused guide pages, page-specific metadata on subpages, FAQ structured data, HowTo schema on the redeem page, and clear internal links between codes, redeem, beginner, PC, tier, pet, treasure, reroll, meta, and wiki hub pages.

The main SEO weakness was crawl discovery. The project did not include a sitemap or robots file, so search engines had fewer direct crawl signals for the full guide set. The homepage also did not declare an explicit canonical URL at the page level.

The implemented fixes add native Next.js `app/sitemap.ts`, native `app/robots.ts`, and homepage canonical metadata.

## Score Breakdown

| Audit Category | Weight | Before | After | Status |
|---|---:|---:|---:|---|
| Technical SEO | 22% | 10 / 22 | 22 / 22 | Fixed |
| Content Quality | 23% | 22 / 23 | 22 / 23 | Strong |
| On-Page SEO | 20% | 18 / 20 | 20 / 20 | Fixed |
| Schema / Structured Data | 10% | 10 / 10 | 10 / 10 | Strong |
| Performance | 10% | 9 / 10 | 9 / 10 | Strong |
| AI Search Readiness | 10% | 9 / 10 | 9 / 10 | Strong |
| Images | 5% | 4 / 5 | 4 / 5 | Good |

## Technical SEO

### Finding: Sitemap Missing

Before this fix, the project had no `sitemap.xml` or `app/sitemap.ts`. For a wiki with many distinct subpages, this makes crawl discovery weaker than it needs to be.

Implemented fix:

- Added `app/sitemap.ts`.
- Included all 11 core routes.
- Set homepage priority to `1`.
- Set subpage priority to `0.8`.
- Set `changeFrequency` to `daily`.
- Set deterministic `lastModified` date.

Included routes:

- `/`
- `/cookie-run-classic-codes`
- `/cookie-run-classic-code-redeem`
- `/cookie-run-classic-tier-list`
- `/cookie-run-classic-pet-tier-list`
- `/cookie-run-classic-treasure-tier-list`
- `/cookie-run-classic-pc`
- `/cookie-run-classic-beginner-guide`
- `/cookie-run-classic-reroll`
- `/cookie-run-classic-meta`
- `/cookie-run-classic-wiki`

### Finding: Robots Missing

Before this fix, the project had no `robots.txt` or `app/robots.ts`.

Implemented fix:

- Added `app/robots.ts`.
- Allows all crawlers across the site.
- Points crawlers to `https://crclassic.wiki/sitemap.xml`.

## On-Page SEO

### Finding: Homepage Canonical Missing

The root page inherited global metadata but did not explicitly define a homepage canonical.

Implemented fix:

- Added page-level `metadata` to `app/page.tsx`.
- Set `alternates: { canonical: '/' }`.
- Added homepage-specific title and description.

## Content Quality

The content set is task-oriented rather than generic. Pages help users complete specific jobs:

- Find and redeem codes.
- Start a new account.
- Decide whether to reroll.
- Choose Cookie, pet, and treasure upgrade priorities.
- Set up PC play.
- Recheck current account priorities.
- Navigate the full wiki hub.

No immediate thin-page issue was found in the implemented route set. Image slots are clearly labeled so missing screenshots are presented as contributor tasks rather than ambiguous placeholder content.

## Schema and Structured Data

The site already has strong structured data coverage:

- Homepage includes `WebSite` JSON-LD.
- FAQ component emits `FAQPage` JSON-LD.
- Redeem page emits `HowTo` JSON-LD.

No schema-breaking issue was found during this static review.

## Images

Current image handling is acceptable:

- Real images use `next/image`.
- Alt text is present.
- Contributor image slots now explain exactly what screenshot should be added.

Remaining improvement:

- Replace image slots with final gameplay screenshots over time.
- Use stable descriptive filenames under `/public/images/`.

## AI Search Readiness

The internal link structure and task-based page architecture are suitable for AI search extraction:

- Pages use direct answers and tables.
- Related links connect sibling guide tasks.
- FAQ blocks answer long-tail player questions.
- The wiki hub groups pages by user intent.

## Sources Checked

- Project source files in `app/`, `components/`, and `lib/`.
- Next.js official metadata file documentation for `sitemap.ts` and `robots.ts`.
- Existing local route structure and metadata declarations.

## Final Assessment

The highest-impact SEO blockers were technical crawl discovery issues. After adding sitemap, robots, and homepage canonical metadata, the site has a much stronger indexing foundation.
