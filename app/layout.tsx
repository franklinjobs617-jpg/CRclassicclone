import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'





const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crclassic.wiki'),
  title: {
    default: 'CookieRun Classic Wiki: Codes & Guides',
    template: '%s',
  },
  description:
    'Find CookieRun Classic codes, tier lists, pet rankings, treasure rankings, PC play guides, and redeem steps in one place. Updated regularly by players.',
  applicationName: 'CRClassic.wiki',
  verification: {
    google: 'UwFuzsDZDzFQRQ0n5w6TUqQMR7uQNFzBnOKJVEz5HUM',
  },
  other: {
    'google-adsense-account': 'ca-pub-3383070348689557',
  },
  keywords: [
    'CookieRun Classic',
    'Cookie Run Classic codes',
    'Cookie Run Classic tier list',
    'Cookie Run Classic pets',
    'Cookie Run Classic treasures',
    'Cookie Run Classic PC',
  ],
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'CRClassic.wiki',
    title:
      'CookieRun Classic Wiki: Codes, Tier Lists, Pets, Treasures & PC Guide',
    description:
      'Codes, tier lists, pet and treasure rankings, PC play guides, and redeem steps for CookieRun Classic.',
    url: 'https://crclassic.wiki',
    images: [
      {
        url: '/images/hero.png',
        width: 1024,
        height: 1024,
        alt: 'CookieRun Classic Wiki guide hub preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CookieRun Classic Wiki',
    description:
      'Codes, tier lists, pets, treasures, and PC guides for CookieRun Classic.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e8862e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383070348689557"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LWRVHBNZQG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LWRVHBNZQG');
          `}
        </Script>
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
