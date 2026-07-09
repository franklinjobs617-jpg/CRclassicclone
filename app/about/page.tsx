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
  title: 'About CRClassic.wiki — A Fan Resource for Cookie Run Classic',
  description:
    'A fan-run guide site for CookieRun Classic players. We cover codes, tier lists, beginner routes, and PC setup.',
  path: '/about',
  image: '/images/hero.png',
  imageAlt: 'CRClassic.wiki about page',
})

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumb="About"
        h1="About this site"
        intro="CRClassic.wiki is a fan-made resource for CookieRun Classic players. We put together guides for codes, tier lists, upgrades, PC setup, and beginner routes."
      />
      <PageBody>
        <Section title="What this site covers">
          <Prose>
            <p>
              CookieRun Classic launched globally in June 2026, and a lot of players are figuring out the game for the first time — myself included. This site collects what I have learned from actually playing the game: which cookies are worth upgrading first, how to redeem codes before they expire, what to prioritize in the first week, which pets and treasures pull their weight, and how to get the game running comfortably on PC.
            </p>
            <p>
              The goal is narrow on purpose. I am not trying to build a full encyclopedia of every stat and drop rate on day one. Instead, each guide answers one specific question a new or returning player is likely to have — &quot;which code is still active,&quot; &quot;should I reroll,&quot; &quot;what should I upgrade first&quot; — and tries to answer it directly, with a reason attached, instead of just listing raw numbers.
            </p>
          </Prose>
        </Section>

        <Section title="How guides are researched and kept accurate">
          <Prose>
            <p>
              Everything here starts from actually playing the game on both mobile and PC, cross-checked against Devsisters&apos; official announcements, the in-game patch notes, and the official coupon portal. Codes are checked against the official redeem page before they are listed as active; when a code expires, it gets moved out or marked, not left to quietly rot on the page.
            </p>
            <p>
              Tier lists and upgrade priority guides are built from a mix of clearable content performance (score runs, early-stage clears, PvP where relevant) and how forgiving a pick is for a new account with limited resources — a cookie or pet that is technically strong but requires resources most beginners will not have yet gets flagged as situational rather than ranked as a blind &quot;top pick.&quot;
            </p>
            <p>
              I do not host hacks, modded APKs, or fake generator tools, and I never will — those are almost always scams or account-risk traps, and pointing readers toward them would go against the entire point of a guide site. If a guide turns out to be wrong or outdated after a balance patch, it gets corrected and the update date on the page is refreshed, rather than left stale.
            </p>
          </Prose>
        </Section>

        <Section title="How the site is maintained">
          <Prose>
            <p>
              CRClassic.wiki is a one-person side project, not a corporate wiki with an editorial team. I update codes as new ones are announced, revisit tier lists after balance changes or new content drops, and add new guide pages when I notice a system the game does not explain well on its own.
            </p>
            <p>
              I do not work for Devsisters and have no formal relationship with them. I am a player who found the in-game help text thin and the community answers scattered across Discord threads and Reddit posts, and wanted a single place that stays current and gets straight to the point.
            </p>
            <p>
              Because this is a solo project, updates happen in bursts around game events and patches rather than on a fixed daily schedule — but every guide page carries a visible &quot;last updated&quot; date so you can judge for yourself how fresh the information is before relying on it.
            </p>
            <p>
              Found something outdated or missing? Reach out through the{' '}
              <Link href="/contact" className="font-700 text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </Prose>
        </Section>

        <Section title="Disclaimer">
          <Prose>
            <p>
              CookieRun Classic is a trademark of Devsisters Corporation. This site is an independent fan project and is not affiliated with, endorsed by, sponsored by, or in any way officially connected with Devsisters. All game names, characters, images, and assets referenced here belong to their respective owners and are used for identification and commentary purposes only.
            </p>
          </Prose>
        </Section>

        <Section title="Official links">
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.devsisters.crg"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                Google Play Store
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/CRClassicEN"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                Official X (Twitter)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/crclassic_en/"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                Official Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://coupon.devplay.com/coupon/crg/en"
                className="font-700 text-primary hover:underline"
                rel="nofollow noopener"
                target="_blank"
              >
                Official Coupon Portal
              </Link>
            </li>
          </ul>
        </Section>

        <RelatedLinks exclude="/about" />
      </PageBody>
    </main>
  )
}
