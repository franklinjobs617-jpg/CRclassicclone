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
              CookieRun Classic launched globally in June 2026, and a lot of players are figuring out the game for the first time. This site collects what we have learned so far — which cookies are worth upgrading, how to redeem codes, what to do in the first week, and how to play on PC.
            </p>
            <p>
              Everything here is based on playing the game and reading through official sources. We do not host hacks, mod APKs, or fake generators. If a guide turns out to be wrong, we fix it and note the correction.
            </p>
          </Prose>
        </Section>

        <Section title="How the site is maintained">
          <Prose>
            <p>
              This is a one-person side project. I update codes when new ones appear, adjust tier lists after balance changes, and add guides for systems that are not well explained in-game.
            </p>
            <p>
              I do not work for Devsisters. I am just a player who found the in-game help lacking and wanted something more straightforward.
            </p>
            <p>
              If something is outdated or missing, you can reach me through the official CookieRun Classic social channels — I monitor those regularly.
            </p>
          </Prose>
        </Section>

        <Section title="Disclaimer">
          <Prose>
            <p>
              CookieRun Classic is a trademark of Devsisters Corporation. This site is an independent fan project and is not affiliated with, endorsed by, or sponsored by Devsisters. All game names, images, and assets belong to their respective owners.
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
