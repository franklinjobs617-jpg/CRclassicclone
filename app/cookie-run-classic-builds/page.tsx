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
  TierImage,
  TierPill,
} from '@/components/blocks'
import {
  BUILDS_UPDATED,
  COOKIE_TIERS,
  PET_TIERS,
  TREASURE_TIERS,
} from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Builds: Best Cookie, Pet & Treasure Combos',
  description:
    'Complete Cookie Run Classic builds pairing a main Cookie, Pet and Treasure for League scoring, coin farming, and safely clearing quests.',
  path: '/cookie-run-classic-builds',
  image: '/images/cookies.png',
  imageAlt: 'Cookie Run Classic cookie roster preview',
})

function findCookie(name: string) {
  return COOKIE_TIERS.find((c) => c.name === name)
}
function findPet(name: string) {
  return PET_TIERS.find((p) => p.name === name)
}
function findTreasure(name: string) {
  return TREASURE_TIERS.find((t) => t.name === name)
}

type BuildSlot = {
  kind: 'Cookie' | 'Pet' | 'Treasure'
  name: string
  image: string
  tier: string
  note: string
}

type Build = {
  id: string
  title: string
  goal: string
  summary: string
  slots: BuildSlot[]
  whyItWorks: string
  swapNote: string
}

const cookieSlot = (name: string, note: string): BuildSlot => {
  const c = findCookie(name)!
  return { kind: 'Cookie', name, image: c.image, tier: c.tier, note }
}
const petSlot = (name: string, note: string): BuildSlot => {
  const p = findPet(name)!
  return { kind: 'Pet', name, image: p.image, tier: p.tier, note }
}
const treasureSlot = (name: string, note: string): BuildSlot => {
  const t = findTreasure(name)!
  return { kind: 'Treasure', name, image: t.image, tier: t.tier, note }
}

const BUILDS: Build[] = [
  {
    id: 'gold-rush',
    title: 'Gold Rush',
    goal: 'Coin farming',
    summary:
      'The fastest way to fund every other build on this page. Run this until your account has enough coins to level up your League scorer without stalling.',
    slots: [
      cookieSlot(
        'Potato Salad Cookie',
        'Converts jellies into Gold Potato Jellies during his skill — the core income engine.'
      ),
      petSlot(
        'Mr. Limeguard',
        'His Lime Potions restore Energy and add coins, stretching every run he is paired on.'
      ),
      treasureSlot(
        "Brave Cookie's Water Gun",
        'Sprays nearby jellies into coins, amplifying an already strong gold rate.'
      ),
    ],
    whyItWorks:
      'All three pieces are already cross-referenced in our Cookie and Treasure tier lists as a set — Potato Salad and Mr. Limeguard are listed as the top economic pairing, and the Water Gun treasure is called out specifically for stacking with Potato Salad. This build exists to put those three separate recommendations into one loadout.',
    swapNote:
      'No second treasure slot yet? Skip the Water Gun and run any Survival treasure instead — the Cookie and Pet alone still carry the coin rate.',
  },
  {
    id: 'endgame-score',
    title: 'Endgame Score',
    goal: 'League leaderboard runs',
    summary:
      'The highest realistic point ceiling in the game right now. Needs practice to execute — this is a late-game build, not a day-one pick.',
    slots: [
      cookieSlot(
        'Lotus Root Phantom Cookie',
        'Generates high-value lotus notes during skill phases. No survival traits — this build lives or dies on positioning.'
      ),
      petSlot(
        'Lotus Sitter',
        "Her only role is amplifying Lotus Root's note windows and adding a speed boost during them."
      ),
      treasureSlot(
        "Gumball Cookie's Jawbreaker Gumball",
        'Boosts jelly values and extends Bonus Time — the exact window this Cookie scores in.'
      ),
    ],
    whyItWorks:
      'Lotus Root Phantom and Lotus Sitter are already named as a pair on the Cookie tier list. Adding the top-ranked Score treasure closes the loop: every piece in this build is pointed at extending or amplifying the same Bonus Time window instead of three unrelated bonuses.',
    swapNote:
      'If you keep dying before reaching Bonus Time, this is the wrong build for your current account — run Safe Clear below until you can reliably survive the full route first.',
  },
  {
    id: 'safe-clear',
    title: 'Safe Clear',
    goal: 'Quests and unfamiliar routes',
    summary:
      'Built around not dying. Use this for distance quests, new stages, or any run where finishing matters more than your score.',
    slots: [
      cookieSlot(
        'Princess Bari Cookie',
        'Built-in self-revival once per run — the single best safety net in the current roster.'
      ),
      petSlot(
        'Cotton Candy Birdie',
        'Drops revival hearts and extra health items, stacking a second layer of survivability on top of Bari.'
      ),
      treasureSlot(
        "Squirrel's Refreshing Coconut Water",
        'A second revive plus a coin bonus on top of Bari\u2019s own self-revival.'
      ),
    ],
    whyItWorks:
      "Our meta guide already notes clearing a distance quest on the first try using Bari's self-revival paired with a shield-style treasure. This build formalizes that into a repeatable setup by adding a dedicated survival pet on top, for routes where one revive still is not enough.",
    swapNote:
      'Once you can clear a route without using either revive, you are over-investing in survival — move to Endgame Score or Gold Rush instead.',
  },
  {
    id: 'first-week',
    title: 'First Week Starter',
    goal: 'Brand new accounts, days 1-3',
    summary:
      'What to run before you have pulled anything worth building around. Every piece here is available from the start or unlocks in your first sessions.',
    slots: [
      cookieSlot(
        'GingerBrave',
        'Your starting Cookie. No scoring ceiling, but controls are simple while you learn jump/slide timing.'
      ),
      petSlot(
        'Rainbows End',
        'A beginner-friendly pet with no setup requirements — usable the moment you unlock your first pet slot.'
      ),
      treasureSlot(
        'Icy Glass Slippers',
        'Survival-first treasure for keeping early runs alive while you are still learning stage layouts.'
      ),
    ],
    whyItWorks:
      'This mirrors the "Early game (days 1-3)" priority already laid out on the Treasure tier list: survival first, coins second, scoring last. None of these three pieces require resources you will not already have on day one.',
    swapNote:
      'Treat this as temporary. Swap GingerBrave out for your first S-tier pull, and move to Gold Rush the moment Potato Salad Cookie is unlocked — do not invest further into this build past the first week.',
  },
]

const FAQ = [
  {
    q: 'What is the best build in Cookie Run Classic?',
    a: "It depends on your goal, not a single 'best' answer. Gold Rush is best for funding upgrades, Endgame Score is best for League points, and Safe Clear is best for finishing quests without dying. Most accounts rotate between at least two of these.",
  },
  {
    q: 'Do I need a different build for League runs versus story quests?',
    a: 'Usually yes. League runs reward pure scoring (Endgame Score), while quests reward simply finishing the route (Safe Clear). Running a pure score build on an unfamiliar quest route is the most common way to waste a clear attempt.',
  },
  {
    q: 'Can I mix pieces from different builds?',
    a: 'Yes — these are starting points, not fixed sets. A common bridge build is Princess Bari Cookie (Safe Clear) with the Gold Rush treasure loadout while you are still farming coins but want the survivability to avoid wasted runs.',
  },
  {
    q: 'What if I do not have the Cookie or Pet listed in a build?',
    a: "Check that entry's tier list page for the next-best option in the same role — for example, any Score-category pet can stand in for Lotus Sitter if you have not unlocked her yet, just with a smaller bonus.",
  },
]

function SlotCard({ slot }: { slot: BuildSlot }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border-2 border-border bg-secondary/30 p-4">
      <TierImage src={slot.image} alt={slot.name} size={56} />
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-700 uppercase tracking-wide text-primary">
            {slot.kind}
          </span>
          <TierPill tier={slot.tier} />
        </div>
        <p className="mt-1 font-heading text-base font-700 text-foreground">
          {slot.name}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {slot.note}
        </p>
      </div>
    </div>
  )
}

export default function BuildsPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Builds"
        h1="Cookie Run Classic Builds"
        intro="A build is a full loadout: one main Cookie, one Pet, and one Treasure working toward the same goal. Below are four combos assembled from the picks already covered in our Cookie, Pet, and Treasure tier lists — organized by what you are actually trying to do."
        updated={BUILDS_UPDATED}
      />
      <PageBody>
        <Section id="how-builds-work" title="How to read these builds">
          <Prose>
            <p>
              Each build below pulls from Cookies, Pets, and Treasures already
              ranked on their own tier list pages. Nothing here is a new or
              separate ranking — it is the same recommendations regrouped
              around a single goal, since a top-tier Cookie paired with the
              wrong Treasure still underperforms.
            </p>
            <p>
              Pick the build that matches what you are doing right now, not
              the one with the flashiest Cookie. A maxed{' '}
              <Link
                href="/cookie-run-classic-tier-list"
                className="font-700 text-primary hover:underline"
              >
                S-tier scorer
              </Link>{' '}
              in the wrong build still dies before reaching Bonus Time.
            </p>
          </Prose>
        </Section>

        {BUILDS.map((build) => (
          <Section key={build.id} id={build.id} title={build.title}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-700 text-accent-foreground">
                {build.goal.toUpperCase()}
              </span>
            </div>
            <p className="mb-4 text-base leading-relaxed text-foreground/90">
              {build.summary}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {build.slots.map((slot) => (
                <SlotCard key={slot.name} slot={slot} />
              ))}
            </div>
            <div className="mt-4 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-4">
              <p className="text-sm leading-relaxed text-foreground/90">
                <span className="font-700 text-foreground">
                  Why this works:
                </span>{' '}
                {build.whyItWorks}
              </p>
            </div>
            <Callout variant="info" title="When to switch off this build">
              {build.swapNote}
            </Callout>
          </Section>
        ))}

        <Section id="faq" title="Builds FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-builds" />
      </PageBody>
    </main>
  )
}
