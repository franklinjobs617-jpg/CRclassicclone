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
import { SITE, TREASURE_TIER_UPDATED, TREASURE_TIERS } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Treasure Tier List: Upgrade Priority',
  description:
    'Cookie Run Classic treasure tier list with named treasures ranked by category. Upgrade priorities, score treasures, survival treasures, economy treasures, and mistakes to avoid.',
  path: '/cookie-run-classic-treasure-tier-list',
  image: '/images/treasure-upgrade-check.webp',
  imageAlt: 'Cookie Run Classic treasure upgrade checklist preview',
})

const FAQ = [
  {
    q: 'Which treasures should I upgrade first?',
    a: 'Upgrade treasures that improve your main runner setup across many runs. Score and Bonus Time treasures usually give better long-term value than narrow one-route picks.',
  },
  {
    q: 'Should I upgrade coin treasures?',
    a: 'Use coin treasures when you need upgrade money, but do not let them consume resources needed for your main score setup.',
  },
  {
    q: 'When should I use rare treasure upgrade items?',
    a: 'Use them only after the treasure is part of your main loadout and you know what role it fills. Used items cannot be restored, so avoid spending on placeholders.',
  },
  {
    q: 'Are survival treasures bad?',
    a: 'No. They are useful while learning routes or clearing difficult missions. Replace them when you can survive without them and need more score.',
  },
]

const scoreTreasures = TREASURE_TIERS.filter((t) => t.category === 'Score')
const survivalTreasures = TREASURE_TIERS.filter((t) => t.category === 'Survival')
const economyTreasures = TREASURE_TIERS.filter((t) => t.category === 'Economy')

function TreasureTable({ rows }: { rows: typeof TREASURE_TIERS }) {
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-border">
      <table className="w-full min-w-[860px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-secondary text-foreground">
            <th className="w-14 p-3 font-700"> </th>
            <th className="p-3 font-700">Treasure</th>
            <th className="p-3 font-700">Tier</th>
            <th className="p-3 font-700">Effect</th>
            <th className="p-3 font-700">Best For</th>
            <th className="p-3 font-700">Upgrade Tip</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t) => (
            <tr
              key={t.name}
              className="border-t-2 border-border bg-card align-top"
            >
              <td className="p-3">
                <div className="size-12 overflow-hidden rounded-xl border-2 border-border bg-secondary">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                </div>
              </td>
              <td className="p-3 font-700 text-foreground">{t.name}</td>
              <td className="p-3">
                <TierPill tier={t.tier} />
              </td>
              <td className="p-3 text-muted-foreground">{t.effect}</td>
              <td className="p-3 text-muted-foreground">{t.bestFor}</td>
              <td className="p-3 text-muted-foreground">{t.upgradeTip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TreasureTierListPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Treasure Tier List"
        h1="Cookie Run Classic Treasure Tier List"
        intro="Treasures decide how far your resources go. Below are all the named treasures ranked by tier and category, so you can choose score, survival, and economy treasures without wasting rare upgrade items."
        updated={TREASURE_TIER_UPDATED}
      />
      <PageBody>
        <Section id="how-treasures-work" title="How the treasure system works">
          <Prose>
            <p>
              You can equip up to three treasures per run. The first slot is free. The second and third slots cost crystals to unlock — make that your first crystal purchase, before spending anything on treasure draws.
            </p>
            <p>
              Treasures fall into three categories. Every run needs a mix, but the balance shifts depending on your goal. Below is the full list ranked by practical value.
            </p>
          </Prose>
        </Section>

        <Section id="spending-priority" title="How to spend your upgrade resources">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                1. Unlock three slots first
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your first crystals should go toward the second and third treasure slots. Running three treasures at low levels beats running one good treasure in a single slot.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                2. Upgrade for your main runner
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Equip and upgrade treasures that support your daily cookie. A score treasure is wasted if your runner dies before Bonus Time.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                3. Level to 3 before going higher
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Many treasures unlock their secondary effect at level 3. Spread levels across your three equipped treasures before maxing any single one.
              </p>
            </div>
          </div>
        </Section>

        <Section id="score-treasures" title="Score Treasures">
          <p className="mb-4 text-base leading-relaxed text-foreground/90">
            Score treasures boost jelly values, Bonus Time duration, skill-gauge fill rates, and raw point generation. Equip these when your goal is pushing League rankings.
          </p>
          <TreasureTable rows={scoreTreasures} />
        </Section>

        <Section id="survival-treasures" title="Survival Treasures">
          <p className="mb-4 text-base leading-relaxed text-foreground/90">
            Survival treasures grant shields, revival, Energy restoration, and fall protection. Equip these while learning new tracks or tackling tough distance missions.
          </p>
          <TreasureTable rows={survivalTreasures} />
        </Section>

        <Section id="economy-treasures" title="Economy Treasures">
          <p className="mb-4 text-base leading-relaxed text-foreground/90">
            Economy treasures raise coin pickup values, convert jellies to coins, and generate bonus currency. Stack these with Potato Salad Cookie for maximum gold output.
          </p>
          <TreasureTable rows={economyTreasures} />
        </Section>

        <Section id="loadout-strategies" title="Loadout strategies by game stage">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Early game (days 1-3)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prioritize survival. Equip Icy Glass Slippers or Bamboo Sticky Rice to keep runs alive, plus a coin treasure like Jelly Pogo Stick for early income. The goal is distance and coins, not points.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Mid game (farming phase)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Run Brave Cookie&apos;s Water Gun alongside Potato Salad Cookie and Mr. Limeguard. Swap your survival treasure for a second economy or score pick once you no longer die early.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-600 text-foreground">
                Late game (League scoring)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Drop survival gear entirely. Run Jawbreaker Gumball, Icy Creamy Popsicle, and Sparkling Water Drink for maximum score output. Every slot should push points.
              </p>
            </div>
          </div>
        </Section>

        <Section id="spending-rules" title="Ticket and resource spending rules">
          <Callout variant="warning" title="Rare upgrade items do not come back">
            Supreme tickets and rare treasure materials are limited. Spending them on a niche treasure you will replace next week will slow your progress by days.
          </Callout>
          <Prose>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Unlock slots first:</strong> Never draw or upgrade treasures seriously until you have all 3 equipment slots unlocked. Three low-level treasures beat one high-level treasure alone.
              </li>
              <li>
                <strong>Upgrade what you equip:</strong> If a treasure is not in your active loadout, do not level it. Resources spent on unused treasures delay your actual progression.
              </li>
              <li>
                <strong>Check before ranking up:</strong> Some treasures change their behavior at certain level thresholds. Read the preview before confirming a rank-up.
              </li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Treasure Tier List FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-treasure-tier-list" />
      </PageBody>
    </main>
  )
}
