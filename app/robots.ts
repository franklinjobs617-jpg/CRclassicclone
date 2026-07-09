import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/data'

const BASE_URL = `https://${SITE.domain}`

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
