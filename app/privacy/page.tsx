import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from '@/components/blocks'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy — CRClassic.wiki',
  description:
    'Privacy policy for CRClassic.wiki, a fan-run CookieRun Classic guide site. Covers Google Analytics, Vercel Analytics, and data collection.',
  path: '/privacy',
  image: '/images/hero.png',
  imageAlt: 'CRClassic.wiki privacy policy',
})

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Privacy Policy"
        h1="Privacy Policy"
        intro="This page explains how CRClassic.wiki collects and uses data. We keep things minimal."
      />
      <PageBody>
        <Section title="What data we collect">
          <Prose>
            <p>
              This site uses Google Analytics and Vercel Analytics to understand which pages are visited and how people find the site. These tools collect:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Pages you visit and how long you stay on them</li>
              <li>General location (country or city level, not your exact address)</li>
              <li>Browser type and device type</li>
              <li>How you arrived at the site (search engine, link, or direct visit)</li>
            </ul>
            <p>
              None of this data identifies you personally. We do not collect names, email addresses, or login credentials.
            </p>
          </Prose>
        </Section>

        <Section title="Cookies">
          <Prose>
            <p>
              Google Analytics uses cookies to track sessions. These are standard analytics cookies and do not contain personal information. You can disable cookies in your browser settings if you prefer not to be tracked.
            </p>
          </Prose>
        </Section>

        <Section title="Third-party services">
          <Prose>
            <p>
              This site is hosted on Cloudflare Pages. Cloudflare may collect standard web server logs (IP address, request timestamps) for operational purposes. See Cloudflare's privacy policy for details.
            </p>
            <p>
              We do not use advertising networks, social media trackers, or third-party data brokers.
            </p>
          </Prose>
        </Section>

        <Section title="External links">
          <Prose>
            <p>
              This site links to external services such as the Google Play Store, official Devsisters coupon portal, and social media pages. Those services have their own privacy policies. We are not responsible for how they handle your data.
            </p>
          </Prose>
        </Section>

        <Section title="Contact">
          <Prose>
            <p>
              If you have questions about this privacy policy, you can reach out through the official CookieRun Classic social channels.
            </p>
          </Prose>
        </Section>

        <RelatedLinks exclude="/privacy" />
      </PageBody>
    </main>
  )
}
