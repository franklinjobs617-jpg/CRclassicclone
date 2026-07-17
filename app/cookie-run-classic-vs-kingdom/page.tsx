import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Callout,
  Faq,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from '@/components/blocks'
import { EXPLAINER_UPDATED } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: "CookieRun Classic vs Kingdom vs Kakao: What's the Difference?",
  description:
    'CookieRun Classic, CookieRun: Kingdom, and Cookie Run for Kakao are three different games from Devsisters. Here is what separates them and which one you are probably looking for.',
  path: '/cookie-run-classic-vs-kingdom',
  image: '/images/cookies.png',
  imageAlt: 'Cookie Run Classic cookie roster preview',
})

const TIMELINE = [
  {
    year: '2013',
    title: 'Cookie Run for Kakao',
    body: 'The original game, released in South Korea on April 2, 2013, built on Kakao\u2019s messaging platform. This is the version CookieRun Classic is localized from.',
  },
  {
    year: '2014\u20132018',
    title: 'LINE Cookie Run',
    body: 'An international expansion released January 2014 on the LINE platform, popular across Japan, Thailand, and Indonesia. It shut down on June 5, 2018, and is no longer playable.',
  },
  {
    year: '2016',
    title: 'CookieRun: OvenBreak',
    body: 'A separate, more PvP-focused endless runner that succeeded the earlier versions and is still updated today.',
  },
  {
    year: '2021',
    title: 'CookieRun: Kingdom',
    body: 'A city-building RPG spin-off, not an endless runner. This is the game most Western players think of first when they hear \u201cCookieRun,\u201d and it is the most-played entry in the franchise.',
  },
  {
    year: '2024',
    title: 'Kakao version revived',
    body: 'The original Kakao version resumed updates for its 11th anniversary after an extended hiatus, confirming Devsisters was still investing in the original endless-runner format.',
  },
  {
    year: '2026',
    title: 'CookieRun Classic',
    body: 'Released globally on June 25, 2026, as a new English localization of Cookie Run for Kakao \u2014 the endless runner, not the Kingdom RPG. This is the game this site covers.',
  },
]

const FAQ = [
  {
    q: 'Is CookieRun Classic the same game as CookieRun: Kingdom?',
    a: 'No. Kingdom is a city-building RPG released in 2021 where you manage a kingdom and send Cookies on RPG-style battles. Classic is a two-button endless runner where you jump and slide to escape the Witch\u2019s Oven. They share characters and art style, but the gameplay is completely different.',
  },
  {
    q: 'Is CookieRun Classic the old LINE Cookie Run?',
    a: 'No, but it is related. LINE Cookie Run was a separate international release that shut down in 2018. CookieRun Classic is a new localization of Cookie Run for Kakao, the original Korean version, not a revival of the LINE version specifically.',
  },
  {
    q: 'Can I play CookieRun Classic in South Korea or India?',
    a: 'CookieRun Classic is not available in South Korea or India. Those regions already have their own dedicated versions \u2014 Cookie Run for Kakao in South Korea and Cookie Run India \u2014 and Classic is not offered there to avoid overlapping with them.',
  },
  {
    q: 'Why does this wiki cover Classic and not Kingdom?',
    a: 'Kingdom already has a large, well-established wiki ecosystem. Classic just launched globally and needed dedicated, current guides \u2014 codes, tier lists, and beginner routes specific to the endless-runner format, which do not overlap with anything Kingdom-related.',
  },
]

export default function VsKingdomPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Classic vs Kingdom vs Kakao"
        h1="CookieRun Classic vs Kingdom vs Kakao: What's the Difference?"
        intro="Devsisters has released several games under the Cookie Run name over more than a decade, and it is genuinely confusing which one is which. Here is a straight answer, plus the timeline of how CookieRun Classic connects to the rest of the franchise."
        updated={EXPLAINER_UPDATED}
      />
      <PageBody>
        <Section id="quick-answer" title="Quick answer">
          <Callout variant="info" title="If you only read one section, read this one">
            CookieRun Classic (2026) is an endless runner \u2014 jump, slide,
            collect jellies. It is a new global localization of the original
            2013 Cookie Run for Kakao. It is a completely different game from
            CookieRun: Kingdom (2021), which is a city-building RPG. Same
            characters, same publisher, different genre.
          </Callout>
        </Section>

        <Section id="timeline" title="How we got here: a short timeline">
          <div className="space-y-4">
            {TIMELINE.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border-2 border-border bg-card p-5"
              >
                <div className="w-20 shrink-0 font-heading text-lg font-700 text-primary">
                  {item.year}
                </div>
                <div>
                  <h3 className="font-heading text-base font-700 text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="classic-vs-kingdom" title="CookieRun Classic vs CookieRun: Kingdom">
          <Prose>
            <p>
              These are the two games people mix up most often, mainly
              because Kingdom is the more famous one internationally. The
              difference is genre, not just version number:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>CookieRun: Kingdom</strong> is a city-building RPG.
                You construct a kingdom, collect and level up Cookies as
                RPG-style units, and send them into turn-based-adjacent
                battles.
              </li>
              <li>
                <strong>CookieRun Classic</strong> is a two-button endless
                runner. There is no kingdom to build \u2014 you pick a
                Cookie, Pet, and Treasure loadout (see our{' '}
                <Link
                  href="/cookie-run-classic-builds"
                  className="font-700 text-primary hover:underline"
                >
                  builds guide
                </Link>
                ) and run for score and distance.
              </li>
            </ul>
            <p>
              If you came here from a Kingdom-focused community expecting
              base-building, this is not that game. If you want the original
              jump-and-slide format the franchise started with, Classic is
              what you are looking for.
            </p>
          </Prose>
        </Section>

        <Section id="classic-vs-kakao" title="CookieRun Classic vs Cookie Run for Kakao and LINE">
          <Prose>
            <p>
              This is the more direct relationship: CookieRun Classic is not
              a different game from Cookie Run for Kakao so much as a new
              global release of it. Cookie Run for Kakao is the original
              2013 Korean version and is still the version actively played
              in South Korea today. Classic brings the same core game to a
              global, English-speaking audience.
            </p>
            <p>
              LINE Cookie Run was a separate international expansion of the
              same underlying game, released in 2014 and shut down in 2018.
              It is not playable anymore in any form, and CookieRun Classic
              is not a revival of it specifically \u2014 it is a fresh
              localization sourced from the Kakao version, which never
              stopped existing.
            </p>
          </Prose>
        </Section>

        <Section id="faq" title="FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-vs-kingdom" />
      </PageBody>
    </main>
  )
}
