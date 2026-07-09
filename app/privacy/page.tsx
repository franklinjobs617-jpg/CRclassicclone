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
    'Privacy policy for CRClassic.wiki, a fan-run CookieRun Classic guide site. Covers Google Analytics, Vercel Analytics, Google AdSense, cookies, and data collection.',
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
              None of this data identifies you personally. We do not collect names, email addresses, or login credentials through analytics.
            </p>
          </Prose>
        </Section>

        <Section title="Advertising (Google AdSense)">
          <Prose>
            <p>
              This site displays ads served by Google AdSense. Google and its advertising partners use cookies and similar technologies to serve ads based on your prior visits to this site and other sites on the internet. This is standard third-party ad serving and helps keep guides on this site free to read.
            </p>
            <p>
              You can opt out of personalized advertising by visiting{' '}
              <Link
                href="https://adssettings.google.com"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                Google Ads Settings
              </Link>
              , or opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <Link
                href="https://optout.aboutads.info"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                www.aboutads.info
              </Link>
              . You can also disable or clear cookies entirely through your browser settings, though this may affect how some parts of the site behave.
            </p>
            <p>
              If you are visiting from the European Economic Area or the United Kingdom, ads may only be personalized with your consent, in line with Google&apos;s EU user consent requirements. If no consent choice is available to you yet on a given visit, ads may be served in a non-personalized form instead.
            </p>
          </Prose>
        </Section>

        <Section title="Cookies">
          <Prose>
            <p>
              Google Analytics and Google AdSense both use cookies — analytics cookies to track sessions, and advertising cookies to serve and measure ads. Neither type of cookie contains information that directly identifies you by name. You can disable cookies in your browser settings if you prefer not to be tracked; this may limit ad personalization and some site functionality.
            </p>
          </Prose>
        </Section>

        <Section title="Third-party services">
          <Prose>
            <p>
              This site is hosted on Cloudflare Pages. Cloudflare may collect standard web server logs (IP address, request timestamps) for operational purposes. See Cloudflare&apos;s privacy policy for details. Google Analytics, Vercel Analytics, and Google AdSense are described above; we do not separately sell or share your data with data brokers outside of what those services collect to provide analytics and advertising.
            </p>
          </Prose>
        </Section>

        <Section title="Children's privacy">
          <Prose>
            <p>
              This site is not directed at children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided personal information through this site, please contact us using the details below so we can address it.
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

        <Section title="Changes to this policy">
          <Prose>
            <p>
              This policy may be updated as the site or its advertising and analytics setup changes. Material changes will be reflected on this page with an updated date.
            </p>
          </Prose>
        </Section>

        <Section title="Contact">
          <Prose>
            <p>
              If you have questions about this privacy policy or how your data is handled, visit the{' '}
              <Link href="/contact" className="font-700 text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </Prose>
        </Section>

        <RelatedLinks exclude="/privacy" />
      </PageBody>
    </main>
  )
}
