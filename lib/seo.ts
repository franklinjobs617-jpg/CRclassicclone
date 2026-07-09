import type { Metadata } from 'next'
import { SITE } from '@/lib/data'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image: string
  imageAlt: string
  type?: 'website' | 'article'
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'article',
}: PageMetadataInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE.name,
      title,
      description,
      url: path,
      images: [
        {
          url: image,
          width: 1024,
          height: 1024,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
