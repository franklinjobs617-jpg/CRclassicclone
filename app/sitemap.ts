import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/data'

const BASE_URL = `https://${SITE.domain}`

export const dynamic = 'force-static'

const ROUTES = [
  { path: '/', lastModified: '2026-06-30', priority: 1 },
  { path: '/cookie-run-classic-codes', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-code-redeem', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-tier-list', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-pet-tier-list', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-treasure-tier-list', lastModified: '2026-07-03', priority: 0.8 },
  { path: '/cookie-run-classic-pc', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-beginner-guide', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-reroll', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-meta', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/cookie-run-classic-wiki', lastModified: '2026-06-30', priority: 0.8 },
  { path: '/about', lastModified: '2026-07-03', priority: 0.5 },
  { path: '/privacy', lastModified: '2026-07-03', priority: 0.3 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: route.lastModified,
    changeFrequency: 'daily',
    priority: route.priority,
  }))
}
