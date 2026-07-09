import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Gift,
  Trophy,
  PawPrint,
  Gem,
  Monitor,
  Ticket,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  BookOpen,
  RotateCcw,
  Activity,
  Library,
} from 'lucide-react'
import {
  CODES_LAST_CHECKED,
  PRIMARY_NAV,
  SITE,
} from '@/lib/data'
import { Faq } from '@/components/blocks'
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
  Monitor,
  Ticket,
  BookOpen,
  RotateCcw,
  Activity,
  Library,
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
