import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Faq,
  ImageFigure,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from '@/components/blocks'
import { PRIMARY_NAV, SITE } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Wiki Hub: Guides & Tools',
  description:
    'Cookie Run Classic wiki hub for codes, redeem steps, beginner routes, tier lists, pets, treasures, PC setup, reroll, and meta priorities.',
  path: '/cookie-run-classic-wiki',
  image: '/images/wiki-hub-overview.webp',
  imageAlt: 'Cookie Run Classic wiki hub overview preview',
})

const UPDATED = SITE.lastSiteUpdate

const GROUPS = [
  {
    title: 'Start Here',
    items: [
      '/cookie-run-classic-beginner-guide',
      '/cookie-run-classic-meta',
      '/cookie-run-classic-reroll',
    ],
  },
  {
    title: 'Codes and Redeem',
    items: ['/cookie-run-classic-codes', '/cookie-run-classic-code-redeem'],
  },
  {
    title: 'Upgrade Planning',
    items: [
      '/cookie-run-classic-tier-list',
      '/cookie-run-classic-pet-tier-list',
      '/cookie-run-classic-treasure-tier-list',
    ],
  },
  {
    title: 'PC and Account Help',
    items: ['/cookie-run-classic-pc'],
  },
]

const FAQ = [
  {
    q: 'Where should a new player start?',
    a: 'Start with the beginner guide, then use codes and redeem steps before choosing long-term Cookie, pet, and treasure upgrades.',
  },
  {
    q: 'Where do I find upgrade advice?',
    a: 'Use the Cookie, pet, and treasure tier list pages together. They are designed to help you build one complete setup instead of spending randomly.',
  },
  {
    q: 'Where do I solve account or PC problems?',
    a: 'Use the PC guide for installs, account sync, controls, lag, crashes, and safe download checks.',
  },
  {
    q: 'What is the meta page for?',
    a: 'Use the meta page when you want a short account-priority check before spending rewards or changing your main setup.',
  },
]

function GuideCard({ href }: { href: string }) {
  const item = PRIMARY_NAV.find((nav) => nav.href === href)
  if (!item) return null

  return (
    <li>
      <Link
        href={item.href}
        className="flex h-full items-center justify-between gap-4 rounded-2xl border-2 border-border bg-card p-4 transition-colors hover:border-primary hover:bg-primary/5"
      >
        <span>
          <span className="block font-heading text-lg font-600 text-foreground">
            {item.label}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
            {item.blurb}
          </span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-primary" />
      </Link>
    </li>
  )
}

export default function WikiHubPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Wiki Hub"
        h1="Cookie Run Classic Wiki Hub"
        intro="Find the right CookieRun Classic guide by task: redeem codes, start a new account, choose upgrades, play on PC, decide on rerolling, or recheck current priorities."
        updated={UPDATED}
      />
      <PageBody>
        <Section title="Quick answer">
          <Prose>
            <p>
              New players should start with account binding, rewards, missions,
              and one complete runner setup. Returning players should jump to
              codes, meta priorities, or the upgrade pages for Cookies, pets,
              and treasures.
            </p>
          </Prose>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-border bg-card p-4">
              <h3 className="font-heading text-sm font-700 text-foreground">Core systems</h3>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li><strong className="text-foreground">Energy</strong> — starting health. Max it first.</li>
                <li><strong className="text-foreground">Bonus Time</strong> — score multiplier phase. Reach it every run.</li>
                <li><strong className="text-foreground">Hearts / Keys</strong> — Hearts for normal runs, Keys for Tower of Frozen Waves.</li>
                <li><strong className="text-foreground">Power+</strong> — one-run boosters for stuck quests.</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-4">
              <h3 className="font-heading text-sm font-700 text-foreground">Quick links by task</h3>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li>Need free crystals? → <Link href="/cookie-run-classic-codes" className="font-700 text-primary hover:underline">Codes</Link></li>
                <li>First day setup? → <Link href="/cookie-run-classic-beginner-guide" className="font-700 text-primary hover:underline">Beginner Guide</Link></li>
                <li>What to upgrade? → <Link href="/cookie-run-classic-tier-list" className="font-700 text-primary hover:underline">Tier List</Link></li>
                <li>Play on PC? → <Link href="/cookie-run-classic-pc" className="font-700 text-primary hover:underline">PC Guide</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <ImageFigure
              src="/images/wiki-hub-overview.webp"
              alt="CookieRun Classic wiki hub overview screen"
              caption="Overview image for the CookieRun Classic guide hub."
            />
          </div>
        </Section>

        {GROUPS.map((group) => (
          <Section key={group.title} title={group.title}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {group.items.map((href) => (
                <GuideCard key={href} href={href} />
              ))}
            </ul>
          </Section>
        ))}

        <Section title="Latest update checks">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">When this changes</th>
                  <th className="p-3 font-700">Check this page</th>
                  <th className="p-3 font-700">What to review</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'New coupon or reward',
                    'Codes / Redeem',
                    'Code status, reward delivery, and account ID.',
                  ],
                  [
                    'New Cookie or pet',
                    'Tier / Pet / Meta',
                    'Main setup, pairing, and upgrade order.',
                  ],
                  [
                    'New treasure or item',
                    'Treasure Tier List',
                    'Spending checklist and stop-upgrade rules.',
                  ],
                  [
                    'PC issue or device switch',
                    'PC Guide',
                    'Account sync, controls, and performance fixes.',
                  ],
                ].map(([change, page, review]) => (
                  <tr
                    key={change}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{change}</td>
                    <td className="p-3 text-muted-foreground">{page}</td>
                    <td className="p-3 text-muted-foreground">{review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="faq" title="Wiki hub FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-wiki" />
      </PageBody>
    </main>
  )
}
