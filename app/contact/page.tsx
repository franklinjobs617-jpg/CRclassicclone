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
  title: 'Contact — CRClassic.wiki',
  description:
    'How to reach CRClassic.wiki for corrections, tips on new codes, business inquiries, or copyright concerns.',
  path: '/contact',
  image: '/images/hero.png',
  imageAlt: 'CRClassic.wiki contact page',
})

export default function ContactPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        h1="Contact"
        intro="CRClassic.wiki is run by one person, so replies are not instant — but every message gets read."
      />
      <PageBody>
        <Section title="General questions, corrections, and code tips">
          <Prose>
            <p>
              If you spot an outdated code, a tier list entry that no longer matches the current balance, or a plain factual mistake, email{' '}
              <Link
                href="mailto:admin@crclassic.wiki"
                className="font-700 text-primary hover:underline"
              >
                admin@crclassic.wiki
              </Link>
              . Include the page URL and, if it&apos;s a code, roughly when you tried redeeming it — codes sometimes expire faster than the game&apos;s own in-app notices update, so specifics help track down whether a code is actually dead or just misfiled here.
            </p>
            <p>
              This is also the right address if you found a new code before it made it onto the site, or noticed a guide that could use more detail. Guide corrections are usually the fastest thing to get fixed, since they don&apos;t require re-testing content in-game.
            </p>
          </Prose>
        </Section>

        <Section title="Business, partnerships, and advertising">
          <Prose>
            <p>
              For anything related to advertising, sponsorships, or collaboration proposals, use the same address and mention what you&apos;re reaching out about in the subject line. This site currently runs Google AdSense as its main source of ad revenue; direct ad placements or sponsored content requests are considered on a case-by-case basis and are always disclosed clearly if accepted.
            </p>
          </Prose>
        </Section>

        <Section title="Copyright and DMCA concerns">
          <Prose>
            <p>
              CRClassic.wiki is an independent fan resource. Game assets referenced here (cookie, pet, and treasure artwork, icons, and similar material) belong to Devsisters Corporation and are used for identification and commentary purposes in line with fair use. If you are a rights holder and believe something on this site goes beyond that and should be removed, email{' '}
              <Link
                href="mailto:admin@crclassic.wiki"
                className="font-700 text-primary hover:underline"
              >
                admin@crclassic.wiki
              </Link>{' '}
              with the specific page URL and a description of the material in question, and it will be reviewed and addressed promptly.
            </p>
          </Prose>
        </Section>

        <Section title="What this site can't help with">
          <Prose>
            <p>
              This is a fan site, not an official support channel — it cannot restore accounts, refund purchases, resolve billing issues, or escalate bugs to Devsisters. For those, use the official CookieRun Classic support channels linked on the{' '}
              <Link href="/about" className="font-700 text-primary hover:underline">
                About page
              </Link>
              . Messages about account or payment issues sent here will just get redirected back to those official channels, so going straight there saves time.
            </p>
          </Prose>
        </Section>

        <RelatedLinks exclude="/contact" />
      </PageBody>
    </main>
  )
}
