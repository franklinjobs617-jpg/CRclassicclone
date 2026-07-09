import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CircleCheck, CircleX } from 'lucide-react'
import {
  ACTIVE_CODES,
  CODES_LAST_CHECKED,
  EXPIRED_CODES,
  SITE,
} from '@/lib/data'
import {
  Callout,
  Faq,
  ImageFigure,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
  UpdateBadge,
} from '@/components/blocks'
import { CopyCode } from '@/components/copy-code'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Codes: Active Rewards & Free Crystals',
  description:
    'Active Cookie Run Classic codes, rewards, redeem steps, and expired code history. Updated and re-checked regularly.',
  path: '/cookie-run-classic-codes',
  image: '/images/codes.png',
  imageAlt: 'Cookie Run Classic codes and rewards preview',
})

const FAQ = [
  {
    q: 'Are Cookie Run Classic codes case-sensitive?',
    a: 'Yes. Codes are case-sensitive and usually all uppercase. Type or paste them exactly as shown, with no extra spaces, or the coupon page will reject them.',
  },
  {
    q: 'How many times can I use a code?',
    a: 'Almost every code is one-time use per account. If you have multiple accounts, you can redeem the same code once on each.',
  },
  {
    q: 'Why does a code say invalid or expired?',
    a: 'Codes have limited lifespans and many are tied to events or milestones. If a working code is rejected, double-check spelling and capitalization; if it still fails, it has likely expired and we will move it to the expired list.',
  },
  {
    q: 'Where do new codes come from?',
    a: 'Devsisters releases codes through official channels: in-game events and notices, the official social media accounts, livestreams, and milestone celebrations. We watch those sources and add new codes after confirming the reward.',
  },
]

function CodeTable({
  rows,
  expired,
}: {
  rows: typeof ACTIVE_CODES
  expired?: boolean
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border-2 border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-secondary text-foreground">
            <th className="p-3 font-700">Code</th>
            <th className="p-3 font-700">Reward</th>
            <th className="p-3 font-700">Status</th>
            <th className="hidden p-3 font-700 sm:table-cell">Added</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.code} className="border-t-2 border-border bg-card align-top">
              <td className="p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="rounded-lg bg-secondary px-2 py-0.5 font-mono font-700 text-foreground">
                    {c.code}
                  </code>
                  {!expired && <CopyCode code={c.code} />}
                </div>
                {c.note && (
                  <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                )}
              </td>
              <td className="p-3 font-600 text-foreground">{c.reward}</td>
              <td className="p-3">
                {expired ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-700 text-destructive">
                    <CircleX className="size-3.5" /> Expired
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-700 text-primary">
                    <CircleCheck className="size-3.5" /> Active
                  </span>
                )}
              </td>
              <td className="hidden p-3 text-muted-foreground sm:table-cell">
                {c.added}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CodesPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Codes"
        h1="Cookie Run Classic Codes"
        intro="Working CookieRun Classic codes for free crystals, coins and items \u2014 with rewards, redeem steps and a history of expired codes. We re-check this list regularly."
        updated={CODES_LAST_CHECKED}
      />
      <PageBody>
        <Section id="active-codes" title="Active codes">
          <p className="mb-4 text-base leading-relaxed text-foreground/90">
            These codes were working at our last check on {CODES_LAST_CHECKED}.
            Redeem them as soon as you can{' \u2014 '}event codes can expire
            without notice.
          </p>
          <CodeTable rows={ACTIVE_CODES} />
          <div className="mt-4">
            <Link
              href="/cookie-run-classic-code-redeem"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-heading font-600 text-primary-foreground shadow-[0_4px_0_0_oklch(0.55_0.15_45)] transition-transform hover:-translate-y-0.5"
            >
              How to redeem
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </Section>

        <Section id="how-to-redeem" title="How to redeem in 60 seconds">
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Open CookieRun Classic and tap the Settings icon (top right).</li>
              <li>Go to the Game Info tab and tap Event Coupon.</li>
              <li>
                On the DevPlay coupon page, sign in or enter your Player ID.
              </li>
              <li>Paste the code exactly, then confirm.</li>
              <li>Collect your reward from the in-game Mail.</li>
            </ol>
          </Prose>
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer the web method? Use the official coupon page:{' '}
            <Link
              href={SITE.officialCouponUrl}
              className="font-700 text-primary hover:underline"
              rel="nofollow noopener"
              target="_blank"
            >
              coupon.devplay.com
            </Link>
            . See our{' '}
            <Link
              href="/cookie-run-classic-code-redeem"
              className="font-700 text-primary hover:underline"
            >
              full redeem guide
            </Link>{' '}
            for screenshots and troubleshooting.
          </p>
        </Section>

        <Section title="Reward not showing up?">
          <Callout variant="warning" title="Check your in-game Mail first">
            Rewards are almost always delivered to the Mail box, not added
            instantly. Open Mail and claim them. If nothing arrives, fully close
            and reopen the game, confirm you redeemed on the correct account
            (Player ID), and make sure the code had not already been used on
            that account.
          </Callout>
        </Section>

        <Section id="expired-codes" title="Expired codes">
          <p className="mb-4 text-base leading-relaxed text-foreground/90">
            Kept for reference so you can tell at a glance whether a code you
            found elsewhere is already dead.
          </p>
          <CodeTable rows={EXPIRED_CODES} expired />
        </Section>

        <Section id="sources" title="Where to find new codes">
          <Prose>
            <p>
              Devsisters hands out codes through official channels. Bookmark
              these and check back here{' \u2014 '}we add confirmed codes as
              they appear:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>In-game event notices and the news board</li>
              <li>Official <Link href="https://x.com/CRClassicEN" rel="nofollow noopener" target="_blank" className="font-700 text-primary hover:underline">X (Twitter)</Link> and <Link href="https://www.instagram.com/crclassic_en/" rel="nofollow noopener" target="_blank" className="font-700 text-primary hover:underline">Instagram</Link> accounts</li>
              <li>Official <Link href="https://coupon.devplay.com/coupon/crg/en" rel="nofollow noopener" target="_blank" className="font-700 text-primary hover:underline">DevPlay coupon portal</Link></li>
              <li>Livestreams and milestone celebrations</li>
              <li>Update and maintenance announcements</li>
            </ul>
          </Prose>
          <div className="mt-4">
            <ImageFigure
              src="/images/codes.png"
              alt="Illustration of a cookie character holding a reward coupon with crystals and coins"
              caption="Codes reward free crystals, coins and items. Illustration."
            />
          </div>
        </Section>

        <Section id="faq" title="Codes FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-codes" />
      </PageBody>
    </main>
  )
}
