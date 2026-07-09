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
import { PET_TIER_UPDATED, PET_TIERS } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Pet Tier List: Pairings & Upgrades',
  description:
    'Best Cookie Run Classic pets ranked by tier with pairing rules, beginner value, score value, and upgrade mistakes to avoid. Full roster of 24+ pets.',
  path: '/cookie-run-classic-pet-tier-list',
  image: '/images/pet-tier-roster.webp',
  imageAlt: 'Cookie Run Classic pet roster and tier list preview',
})

const FAQ = [
  {
    q: 'What pet should I upgrade first?',
    a: 'Upgrade the pet that supports your main Cookie and current goal. A pet tied to your daily runner is more valuable than a high-rarity pet sitting unused.',
  },
  {
    q: 'Should I upgrade a pet without its best Cookie?',
    a: 'Only if the pet gives useful value on its own. If the pet depends on a specific Cookie skill, wait until you use that Cookie regularly.',
  },
  {
    q: 'Are survival pets worth using?',
    a: 'Yes while you are learning routes or clearing missions. Swap toward score pets when you can survive consistently without the extra safety.',
  },
  {
    q: 'How many pets should I build early?',
    a: 'Build one main score or progression pet first, then one backup for missions or survival. More than that usually spreads resources too thin.',
  },
]

const S_TIER_DETAILS = [
  {
    name: 'Mr. Limeguard',
    tier: 'S',
    role: 'Economy Multiplier',
    image: '/images/pets/mr-limeguard.webp',
    desc: 'Drops Lime Potions that restore a small chunk of Energy and spawn coins. Paired with Potato Salad Cookie, these potions keep the run going longer and let his coin conversion cycle fire more times.',
  },
  {
    name: 'Lotus Sitter',
    tier: 'S',
    role: 'Dedicated Score Synergy',
    image: '/images/pets/placeholder.png',
    desc: 'Generates lotus petal Jellies at regular intervals and gives Lotus Root Phantom Cookie a speed boost during skill windows. That extra speed means more ground covered in each activation.',
  },
  {
    name: 'Jellyco Cube',
    tier: 'S',
    role: 'Universal Score Amplifier',
    image: '/images/pets/jellyco-cube.webp',
    desc: 'Creates a score-multiplying cube at intervals that boosts all jelly values within its radius. One of the highest-impact scoring pets in the game. Works with nearly any cookie.',
  },
  {
    name: "Pirate's Bomb",
    tier: 'S',
    role: 'Massive Coin Explosion',
    image: '/images/pets/pirates-bomb.webp',
    desc: 'Detonates a bomb that converts nearby jellies into high-value gold coins. Economically one of the strongest pets. Pairs best with any dedicated coin farming cookie.',
  },
  {
    name: 'Pancake Frisbee',
    tier: 'S',
    role: 'Flexible Generalist',
    image: '/images/pets/pancake-frisbee.webp',
    desc: 'Tosses a frisbee that sweeps across the screen collecting jellies and returns with bonus coins. Adaptable to almost any runner and stage, making it the best general-purpose pet.',
  },
]

const A_TIER_DETAILS = [
  {
    name: 'Cotton Candy Birdie',
    tier: 'A',
    role: 'Beginner Reviver',
    image: '/images/pets/cotton-candy-birdie.webp',
    desc: 'Drops revival hearts and health-restoring items during the run. Useful while you are learning obstacle layouts, but swap to a scoring pet once you stop dying to the same sections.',
  },
  {
    name: 'Wishing Star',
    tier: 'A',
    role: 'Magnet Support',
    image: '/images/pets/wishing-star.webp',
    desc: 'Summons a star that pulls in distant jellies during its active window. Excellent for stages with scattered coin and jelly layouts where you would otherwise miss pickups.',
  },
  {
    name: 'Gold Drop',
    tier: 'A',
    role: 'Passive Coin Generator',
    image: '/images/pets/gold-drop.webp',
    desc: 'Produces a golden drop at regular intervals that converts into bonus coins. Reliable passive income that does not require skill activation — it just works.',
  },
  {
    name: 'Flowercopter',
    tier: 'A',
    role: 'Aerial Collector',
    image: '/images/pets/flowercopter.webp',
    desc: 'Hovers above the cookie collecting high-altitude jellies and providing aerial coverage. Shines on stages with vertical jelly placement that other pets cannot reach.',
  },
]

export default function PetTierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Pet Tier List"
        h1="Cookie Run Classic Pet Tier List"
        intro="Build the pet that makes your main Cookie better. This page ranks all 24+ pets for beginner progress, score runs, survival, and upgrade timing — with pairing rules for every pet."
        updated={PET_TIER_UPDATED}
      />
      <PageBody>
        <Section id="pet-ranking" title="Pet ranking table">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="w-14 p-3 font-700"> </th>
                  <th className="p-3 font-700">Pet</th>
                  <th className="p-3 font-700">Tier</th>
                  <th className="p-3 font-700">Best Pairing</th>
                  <th className="p-3 font-700">Best Use</th>
                  <th className="p-3 font-700">Upgrade Priority</th>
                </tr>
              </thead>
              <tbody>
                {PET_TIERS.map((pet) => (
                  <tr
                    key={pet.name}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3">
                      <div className="size-12 overflow-hidden rounded-xl border-2 border-border bg-secondary">
                        <Image
                          src={pet.image}
                          alt={pet.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                          unoptimized
                        />
                      </div>
                    </td>
                    <td className="p-3 font-700 text-foreground">
                      {pet.name}
                    </td>
                    <td className="p-3">
                      <TierPill tier={pet.tier} />
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {pet.pairedCookie}
                    </td>
                    <td className="p-3 text-muted-foreground">{pet.bestFor}</td>
                    <td className="p-3 text-muted-foreground">
                      {pet.upgradePriority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="best-pets" title="S Tier – Essential Pets">
          <Prose>
            <p>
              S-tier pets provide the highest return on investment. Each one dramatically improves a specific playstyle — coin farming, score pushing, or general progression. Build at least one of these as your cornerstone pet.
            </p>
          </Prose>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {S_TIER_DETAILS.map((pet) => (
              <div
                key={pet.name}
                className="rounded-2xl border-2 border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-border bg-secondary">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-700 text-foreground">
                        {pet.name}
                      </h3>
                      <TierPill tier={pet.tier} />
                    </div>
                    <p className="mt-1 text-xs font-600 text-primary uppercase tracking-wide">
                      {pet.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pet.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="a-tier-pets" title="A Tier – Strong Support Pets">
          <Prose>
            <p>
              A-tier pets offer reliable utility across multiple scenarios. They may not redefine a run like S-tier pets, but they provide consistent value and pair well with a wide range of cookies.
            </p>
          </Prose>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {A_TIER_DETAILS.map((pet) => (
              <div
                key={pet.name}
                className="rounded-2xl border-2 border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-border bg-secondary">
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-700 text-foreground">
                        {pet.name}
                      </h3>
                      <TierPill tier={pet.tier} />
                    </div>
                    <p className="mt-1 text-xs font-600 text-primary uppercase tracking-wide">
                      {pet.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pet.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pairing-meta" title="Synergy Pairing Rules">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">If your main runner is...</th>
                  <th className="p-3 font-700">Choose a pet that...</th>
                  <th className="p-3 font-700">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Potato Salad Cookie (Gold)',
                    'Mr. Limeguard or Pirate\'s Bomb. Extra Energy or coin explosions directly sustain coin cycles.',
                    'Score-only pets like Lotus Sitter or Jellyco Cube.',
                  ],
                  [
                    'Lotus Root Phantom (Score)',
                    'Lotus Sitter. The speed bonus multiplies note production and score output.',
                    'Coin or revival pets that dilute point scores.',
                  ],
                  [
                    'Princess Bari (Sustain/Quests)',
                    'Cotton Candy Birdie for extra hearts, or any survival pet that helps you stay alive longer.',
                    'Farming pets that do not help clear quest requirements.',
                  ],
                  [
                    'Wind Archer Cookie (Speed/Score)',
                    'Wishing Star or Jellyco Cube for maximum score amplification during speed windows.',
                    'Slow, passive pets that do not keep up with his pace.',
                  ],
                ].map(([cookie, choose, avoid]) => (
                  <tr
                    key={cookie}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{cookie}</td>
                    <td className="p-3 text-muted-foreground">{choose}</td>
                    <td className="p-3 text-muted-foreground">{avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="pet-errors" title="Pet Upgrading Traps to Avoid">
          <Callout variant="warning" title="Upgrade pets in lockstep with their runner">
            Do not waste gold leveling up Lotus Sitter if your Lotus Root Phantom Cookie is only level 1. Leveling a Pet past level 5 is extremely expensive. Always upgrade your main runner Cookie first, and match the Pet level to support the runner&apos;s passive stats.
          </Callout>
        </Section>

        <Section id="faq" title="Pet Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-pet-tier-list" />
      </PageBody>
    </main>
  )
}
