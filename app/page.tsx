import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Gift,
  Trophy,
  PawPrint,
  Gem,
  Layers,
  Monitor,
  Ticket,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  BookOpen,
  RotateCcw,
  Activity,
  Library,
  Compass,
} from 'lucide-react'
import {
  ACTIVE_CODES,
  BUILDS_UPDATED,
  CODES_LAST_CHECKED,
  COOKIE_TIER_UPDATED,
  PC_TIERS_UPDATED,
  PET_TIER_UPDATED,
  PRIMARY_NAV,
  SITE,
  TREASURE_TIER_UPDATED,
} from '@/lib/data'
import { Faq, UpdateBadge } from '@/components/blocks'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'CookieRun Classic Wiki: Codes, Tiers & Beginner Guides',
  description:
    'Codes, redeem steps, beginner route, PC setup, tier lists, pet rankings, treasure rankings, and upgrade priorities for CookieRun Classic.',
  path: '/',
  image: '/images/hero.png',
  imageAlt: 'CookieRun Classic Wiki guide hub preview',
  type: 'website',
})

const ICONS = [
  Gift,
  Trophy,
  PawPrint,
  Gem,
  Layers,
  Monitor,
  Ticket,
  BookOpen,
  RotateCcw,
  Activity,
  Library,
  Compass,
]

const FRESHNESS = [
  { label: 'Codes', href: '/cookie-run-classic-codes', updated: CODES_LAST_CHECKED },
  { label: 'Cookie tier list', href: '/cookie-run-classic-tier-list', updated: COOKIE_TIER_UPDATED },
  { label: 'Pet tier list', href: '/cookie-run-classic-pet-tier-list', updated: PET_TIER_UPDATED },
  { label: 'Treasure tier list', href: '/cookie-run-classic-treasure-tier-list', updated: TREASURE_TIER_UPDATED },
  { label: 'Builds', href: '/cookie-run-classic-builds', updated: BUILDS_UPDATED },
  { label: 'PC guide', href: '/cookie-run-classic-pc', updated: PC_TIERS_UPDATED },
]

const HOME_FAQ = [
  {
    q: 'What is CookieRun Classic?',
    a: 'CookieRun Classic is Devsisters\u2019 endless runner that returns the series to its roots: simple two-button jump and slide gameplay where you collect jellies, dodge obstacles, and escape the Witch\u2019s Oven while chasing high scores in Leagues.',
  },
  {
    q: 'Is CookieRun Classic free to play?',
    a: 'Yes. The game is free to download on the App Store and Google Play, with optional in-app purchases for crystals and cosmetics. You can also redeem free codes for crystals and coins.',
  },
  {
    q: 'How is CookieRun Classic different from CookieRun Kingdom?',
    a: 'Kingdom is a base-building and RPG-style game. Classic goes back to the original endless-runner format \u2014 shorter runs, score-based Leagues, and a simpler two-button control scheme, with Cookies, Pets and Treasures built around run performance instead of city management.',
  },
  {
    q: 'Should I reroll when starting out?',
    a: 'It depends on what you pull and how much time you are willing to spend rerolling. Our reroll guide covers what counts as a strong starting pull and the fastest way to check before committing.',
  },
  {
    q: 'What should a new account prioritize first?',
    a: 'Redeem every active code before spending starting crystals, then follow the beginner guide\u2019s first-week order \u2014 it is built around what gives the most account-wide value early rather than what looks flashiest.',
  },
  {
    q: 'How often do you update these guides?',
    a: 'We re-check codes frequently and refresh tier lists and guides whenever new cookies, pets, treasures or balance changes go live. Each page shows its last update or last-checked date near the top.',
  },
  {
    q: 'Do you cover hacks or mod APKs?',
    a: 'No. We never link to hacks, mods, or cheat tools. They risk bans and malware. Everything here works with the official game and store downloads.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `https://${SITE.domain}`,
    description:
      'CookieRun Classic codes, tier lists, pet rankings, treasure rankings, PC play guides, and redeem steps.',
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-border bg-secondary/50">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-700 text-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              The practical CookieRun Classic hub
            </span>
            <h1 className="mt-4 text-balance font-heading text-4xl font-700 leading-[1.05] text-foreground sm:text-5xl">
              CookieRun Classic Wiki
            </h1>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Codes, redeem steps, beginner route, PC setup, and upgrade
              priorities for CookieRun Classic. Pick the guide that matches
              what you are trying to do next.
            </p>
            <UpdateBadge updated={SITE.lastSiteUpdate} className="mt-4" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cookie-run-classic-codes"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-heading font-600 text-primary-foreground shadow-[0_4px_0_0_oklch(0.55_0.15_45)] transition-transform hover:-translate-y-0.5"
              >
                <Gift className="size-5" aria-hidden="true" />
                Get free codes
              </Link>
              <Link
                href="/cookie-run-classic-tier-list"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-5 py-3 font-heading font-600 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Trophy className="size-5 text-primary" aria-hidden="true" />
                View tier list
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border-2 border-border shadow-[0_8px_0_0_oklch(0.89_0.03_75)]">
              <Image
                src="/images/hero.png"
                alt="CookieRun Classic gingerbread cookie running through a candy world collecting jellies"
                width={1200}
                height={1200}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest guide strip */}
      <section className="border-b-2 border-border bg-primary/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-700 text-accent-foreground">
              LATEST CHECKS
            </span>
            <span className="text-xs text-muted-foreground">
              Codes checked {CODES_LAST_CHECKED}. Start with redeem steps,
              beginner route, and upgrade priorities.
            </span>
          </div>
          <Link
            href="/cookie-run-classic-wiki"
            className="inline-flex items-center gap-1 text-sm font-700 text-primary hover:underline"
          >
            Open wiki hub <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Where to start */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-12">
        <h2 className="font-heading text-2xl font-700 text-foreground sm:text-3xl">
          Where to start
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          <p>
            CookieRun Classic launched globally on June 25, 2026 (it&apos;s
            the newest global localization of{' '}
            <Link
              href="/cookie-run-classic-vs-kingdom"
              className="font-700 text-primary hover:underline"
            >
              Cookie Run for Kakao
            </Link>
            , not the same game as CookieRun: Kingdom), so most players
            reading this are either brand new or still in their first few
            weeks. What you need depends on where you are:
          </p>
          <p>
            <strong>Brand new account:</strong> start with the{' '}
            <Link
              href="/cookie-run-classic-beginner-guide"
              className="font-700 text-primary hover:underline"
            >
              beginner guide
            </Link>{' '}
            for the first-week priority order, then redeem every{' '}
            <Link
              href="/cookie-run-classic-codes"
              className="font-700 text-primary hover:underline"
            >
              active code
            </Link>{' '}
            before you spend your starting crystals — codes are free and
            expire, so there is no reason to leave them unclaimed.
          </p>
          <p>
            <strong>Deciding whether to reroll:</strong> check the{' '}
            <Link
              href="/cookie-run-classic-reroll"
              className="font-700 text-primary hover:underline"
            >
              reroll guide
            </Link>{' '}
            before you commit to your starting account — it is much easier to
            reroll in the first few minutes than to fix a weak start later.
          </p>
          <p>
            <strong>Choosing what to upgrade:</strong> the{' '}
            <Link
              href="/cookie-run-classic-tier-list"
              className="font-700 text-primary hover:underline"
            >
              Cookie tier list
            </Link>
            ,{' '}
            <Link
              href="/cookie-run-classic-pet-tier-list"
              className="font-700 text-primary hover:underline"
            >
              Pet tier list
            </Link>
            , and{' '}
            <Link
              href="/cookie-run-classic-treasure-tier-list"
              className="font-700 text-primary hover:underline"
            >
              Treasure tier list
            </Link>{' '}
            each explain upgrade order, not just a static ranking, since the
            right pick often depends on what you already have.
          </p>
          <p>
            <strong>Playing on a bigger screen:</strong> the{' '}
            <Link
              href="/cookie-run-classic-pc"
              className="font-700 text-primary hover:underline"
            >
              PC guide
            </Link>{' '}
            covers emulator setup and key mapping. <strong>Already a
            few weeks in:</strong> the{' '}
            <Link
              href="/cookie-run-classic-meta"
              className="font-700 text-primary hover:underline"
            >
              meta guide
            </Link>{' '}
            covers what to reprioritize once your account is more
            established, and the{' '}
            <Link
              href="/cookie-run-classic-wiki"
              className="font-700 text-primary hover:underline"
            >
              wiki hub
            </Link>{' '}
            is the full index if you would rather browse everything at once.
          </p>
        </div>
      </section>

      {/* Current snapshot */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-10">
        <div className="rounded-3xl border-2 border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-700 text-accent-foreground">
              RIGHT NOW
            </span>
            <h2 className="font-heading text-xl font-700 text-foreground sm:text-2xl">
              CookieRun Classic this week
            </h2>
          </div>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/90">
            CookieRun Classic is still in its first weeks since the June 25, 2026 global
            launch, which is why the numbers below move fast: new codes land
            often, and every guide gets rechecked rather than left to go stale.
            Right now there are{' '}
            <strong>
              {ACTIVE_CODES.length} active code{ACTIVE_CODES.length === 1 ? '' : 's'}
            </strong>{' '}
            waiting to be redeemed, and this site was last reviewed end-to-end on{' '}
            <strong>{SITE.lastSiteUpdate}</strong>.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {FRESHNESS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border-2 border-border bg-secondary/40 p-4 transition-colors hover:border-primary hover:bg-primary/10"
              >
                <span className="font-heading text-sm font-700 text-foreground">
                  {item.label}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-600 text-muted-foreground">
                  <RefreshCw className="size-3.5" aria-hidden="true" />
                  Checked {item.updated}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Primary entries */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-700 text-foreground sm:text-3xl">
            Start here
          </h2>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">
            Choose the task you need now: rewards, account setup, upgrades,
            PC play, or first-week progress.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRIMARY_NAV.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-3xl border-2 border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_0_0_oklch(0.89_0.03_75)]"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="mt-4 font-heading text-lg font-600 text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-700 text-primary">
                    Open guide
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      {/* What is the game */}
      <section className="border-y-2 border-border bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-3xl border-2 border-border md:order-1">
            <Image
              src="/images/cookies.png"
              alt="A roster of colorful CookieRun Classic cookie characters"
              width={1200}
              height={750}
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-2xl font-700 text-foreground sm:text-3xl">
              What is CookieRun Classic?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/90">
              <p>
                CookieRun Classic is an endless runner from{' '}
                <Link
                  href="http://www.devsisters.com/"
                  className="font-700 text-primary hover:underline"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Devsisters
                </Link>{' '}
                that brings the series back to its simple, fast-paced roots. You tap
                to jump and slide, collect jellies, dodge obstacles, and run as
                far as you can to escape the Witch&apos;s Oven.
              </p>
              <p>
                Your score depends on three things working together:{' '}
                <strong>Cookies</strong> (your playable characters and their
                skills), <strong>Pets</strong> (support companions), and{' '}
                <strong>Treasures</strong> (upgradeable passive boosts). Climb
                the global Leagues by building the strongest combination for
                your account.
              </p>
              <p>
                Each run is short but the systems behind it are not: Cookies
                have distinct active skills that fire automatically as you
                run, Pets add passive buffs like extra jelly value or a
                one-time revive, and Treasures stack flat or percentage
                bonuses that scale with how far you upgrade them. A team that
                looks strong on paper can still underperform if the skill
                timing or jelly-value curve does not match the course you are
                running — which is why raw stat totals alone do not tell the
                full story, and why our{' '}
                <Link
                  href="/cookie-run-classic-tier-list"
                  className="font-700 text-primary hover:underline"
                >
                  tier list
                </Link>{' '}
                explains the reasoning behind each ranking instead of just
                listing letters.
              </p>
              <p>
                Progress is measured in two parallel tracks. <strong>Score
                Leagues</strong> rank you against other players on your best
                single run, refreshed on a season cycle — this is where
                Cookie and Pet skill synergy matters most. <strong>Account
                progression</strong> is the longer game: leveling Cookies,
                enhancing Treasures, and clearing story stages to unlock new
                content, which is where{' '}
                <Link
                  href="/cookie-run-classic-codes"
                  className="font-700 text-primary hover:underline"
                >
                  codes
                </Link>{' '}
                and efficient early resource use matter most.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                'Two-button gameplay',
                'Cookies, Pets & Treasures',
                'Global Leagues',
                'Free to play',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-border bg-card px-3 py-1 text-sm font-600 text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / EEAT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <h2 className="font-heading text-2xl font-700 text-foreground sm:text-3xl">
          Why trust this wiki
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: RefreshCw,
              title: 'Checked and dated',
              body: 'Every codes list and tier list shows when we last verified it, so you always know how fresh the info is.',
            },
            {
              icon: ShieldCheck,
              title: 'Safe by default',
              body: 'No hacks, no mod APKs, no fake generators. We only cover the official game and legitimate redeem methods.',
            },
            {
              icon: Sparkles,
              title: 'Built for players',
              body: 'Tier lists include why a pick is good, who it suits, and what to upgrade first \u2014 not just a copied ranking.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border-2 border-border bg-card p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <card.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-600 text-foreground">
                {card.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 pb-4">
        <h2 className="mb-4 font-heading text-2xl font-700 text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <Faq items={HOME_FAQ} />
      </section>
    </main>
  )
}
