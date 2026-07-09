import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Callout,
  Faq,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  TierPill,
} from '@/components/blocks'
import { COOKIE_TIER_UPDATED, COOKIE_TIERS } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Tier List: Cookie Rankings',
  description:
    'Cookie Run Classic Cookie upgrade priorities for beginners, score runs, coin farming, and long-term account planning.',
  path: '/cookie-run-classic-tier-list',
  image: '/images/cookie-tier-roster.webp',
  imageAlt: 'Cookie Run Classic Cookie roster and tier list preview',
})

const FAQ = [
  {
    q: 'Who should I upgrade first in CookieRun Classic?',
    a: 'Upgrade the Cookie you actually use for your main League or episode runs first. A focused main Cookie gives better progress than spreading coins across every new Cookie.',
  },
  {
    q: 'Should beginners chase only S-tier Cookies?',
    a: 'No. A beginner-friendly Cookie that clears missions and reaches Bonus Time reliably is often better early than a rare Cookie with no pet, treasure support, or upgrade levels.',
  },
  {
    q: 'When should I stop upgrading a Cookie?',
    a: 'Pause when the Cookie is no longer your main runner, when the next upgrade costs resources you need for treasures, or when you are upgrading only because the Cookie is new.',
  },
  {
    q: 'Do pets and treasures matter more than the Cookie?',
    a: 'They matter together. A strong Cookie without a useful pet and treasure setup can underperform, so build one complete runner setup before starting a second one.',
  },
]

const S_TIER_DETAILS = [
  {
    name: 'Princess Bari Cookie',
    tier: 'S',
    role: 'Sustain & Score Master',
    image: '/images/cookies/princess-bari-cookie.png',
    desc: 'Bari gathers Flower Jellies to charge her sacred meter. When filled, she summons a Sacred Tree that cleanses all obstacles and grants high-value Spirit Jellies. Her built-in self-revival gives beginners and League runners a safety net that no other cookie matches.',
  },
  {
    name: 'Lotus Root Phantom Cookie',
    tier: 'S',
    role: 'Apex Score Ceiling',
    image: '/images/cookies/placeholder.png',
    desc: 'Designed for endgame scoring. Lotus Root Phantom produces high-scoring lotus notes that require active collection. While she has no survival traits, her raw point generation during active skill phases is unmatched. Best paired with Lotus Sitter.',
  },
  {
    name: 'Potato Salad Cookie',
    tier: 'S',
    role: 'Premier Gold Farmer',
    image: '/images/cookies/potato-salad-cookie.png',
    desc: 'Periodically enters a cooking state, converting all standard jellies on the screen into high-value Gold Potato Jellies and coins. Essential for funding account-wide Energy upgrades. Best paired with Mr. Limeguard.',
  },
  {
    name: 'Wind Archer Cookie',
    tier: 'S',
    role: 'Speed & Scatter Scorer',
    image: '/images/cookies/wind-archer-cookie.png',
    desc: 'Fires homing arrows that clear obstacles and drop high-value Spirit Jellies. The speed boost during his skill window covers more ground per activation. Pairs best with Windy.',
  },
]

const A_TIER_DETAILS = [
  {
    name: 'Fire Spirit Cookie',
    tier: 'A',
    role: 'Burst Scorer',
    image: '/images/cookies/fire-spirit-cookie.png',
    desc: 'Transforms into a fire spirit after revival, blazing through obstacles and generating high-value ember jellies. The Power+ version creates Mystery Boxes in Episode 3. Requires strong treasure support to reach full potential.',
  },
  {
    name: 'Buttercream Choco Cookie',
    tier: 'A',
    role: 'Relay Multiplier',
    image: '/images/cookies/buttercream-choco-cookie.png',
    desc: 'Provides a massive flat percentage multiplier (up to 25% at max level) to your total gold earned, but ONLY when placed in the Relay (second runner) slot. Do not upgrade him early unless your primary Potato Salad Cookie is already leveled.',
  },
  {
    name: 'Hero Cookie',
    tier: 'A',
    role: 'Heroic Scorer',
    image: '/images/cookies/hero-cookie.png',
    desc: 'Enters a powered-up hero transformation that boosts score and clears obstacles momentarily. A strong mid-game scorer that bridges the gap between starter cookies and S-tier legends.',
  },
  {
    name: 'Moonlight Cookie',
    tier: 'A',
    role: 'Starfall Scorer',
    image: '/images/cookies/moonlight-cookie.png',
    desc: 'Calls down star jellies from the sky that grant burst score in a dream-like aura. High ceiling but requires practice to position correctly under star drops. A legendary-grade cookie that rewards patient players.',
  },
  {
    name: 'Sea Fairy Cookie',
    tier: 'A',
    role: 'Wave Clearer',
    image: '/images/cookies/sea-fairy-cookie.png',
    desc: 'Summons a massive tidal wave that clears all obstacles and creates water-drop jellies. Exceptional on obstacle-dense League tracks where other cookies get overwhelmed. A legendary-grade pick.',
  },
]

export default function TierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Tier List"
        h1="Cookie Run Classic Tier List"
        intro="Start with one reliable main Cookie, then build score, pet, and treasure support around it. This guide ranks all 25+ Cookies by how useful they are for early progress, League score runs, and upgrade planning."
        updated={COOKIE_TIER_UPDATED}
      />
      <PageBody>
        <Section id="cookie-priority" title="Cookie upgrade priority table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="w-14 p-3 font-700"> </th>
                  <th className="p-3 font-700">Cookie</th>
                  <th className="p-3 font-700">Tier</th>
                  <th className="p-3 font-700">Best Use</th>
                  <th className="p-3 font-700">Beginner Value</th>
                  <th className="p-3 font-700">Upgrade Priority</th>
                </tr>
              </thead>
              <tbody>
                {COOKIE_TIERS.map((cookie) => (
                  <tr
                    key={cookie.name}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3">
                      <div className="size-12 overflow-hidden rounded-xl border-2 border-border bg-secondary">
                        <Image
                          src={cookie.image}
                          alt={cookie.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                          unoptimized
                        />
                      </div>
                    </td>
                    <td className="p-3 font-700 text-foreground">
                      {cookie.name}
                    </td>
                    <td className="p-3">
                      <TierPill tier={cookie.tier} />
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.bestFor}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.earlyValue}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {cookie.upgradePriority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="s-tier" title="S Tier – Top Meta Cookies">
          <Prose>
            <p>
              S-tier Cookies define the current meta. Each one offers a unique path to account dominance — sustain scoring, extreme score ceilings, coin farming, or speed clearing. Build around one of these first.
            </p>
          </Prose>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {S_TIER_DETAILS.map((cookie) => (
              <div
                key={cookie.name}
                className="rounded-2xl border-2 border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-border bg-secondary">
                    <Image
                      src={cookie.image}
                      alt={cookie.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-700 text-foreground">
                        {cookie.name}
                      </h3>
                      <TierPill tier={cookie.tier} />
                    </div>
                    <p className="mt-1 text-xs font-600 text-primary uppercase tracking-wide">
                      {cookie.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cookie.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="a-tier" title="A Tier – Strong Picks">
          <Prose>
            <p>
              A-tier Cookies are excellent in the right role. They may lack the raw dominance of S-tier but excel in specific situations — relay coin bonuses, legendary starfalls, or survival utility.
            </p>
          </Prose>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {A_TIER_DETAILS.map((cookie) => (
              <div
                key={cookie.name}
                className="rounded-2xl border-2 border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-border bg-secondary">
                    <Image
                      src={cookie.image}
                      alt={cookie.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-700 text-foreground">
                        {cookie.name}
                      </h3>
                      <TierPill tier={cookie.tier} />
                    </div>
                    <p className="mt-1 text-xs font-600 text-primary uppercase tracking-wide">
                      {cookie.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cookie.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="goals" title="Choosing by Progression Stage">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: '1. Day 1 Economy',
                body: 'Prioritize Potato Salad Cookie. Leveling him to level 5 is much more valuable than pulling duplicate treasures on Day 1, as it unlocks stable coin income.',
              },
              {
                title: '2. Quest Clearance',
                body: 'Switch to Princess Bari Cookie. Her self-revival keeps runs alive and ensures you clear the required distance without dying.',
              },
              {
                title: '3. League Scoring',
                body: 'Max out Lotus Root Phantom Cookie or Wind Archer Cookie. Both are vulnerable to collisions, so only run them once you have memorized the league track layout.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-border bg-card p-5"
              >
                <h3 className="font-heading text-lg font-600 text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="upgrade-traps" title="Cookie Upgrade Pitfalls to Avoid">
          <Callout variant="warning" title="Spreading gold across your roster slows progress">
            Gold upgrade costs increase exponentially. Upgrading five different cookies to level 5 is far less efficient than maxing out one S-tier main runner. Focus your gold on Base Energy first, and then pour all character gold into Potato Salad (for farming) or Princess Bari (for scoring/quests).
          </Callout>
        </Section>

        <Section id="faq" title="Cookie Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-tier-list" />
      </PageBody>
    </main>
  )
}
