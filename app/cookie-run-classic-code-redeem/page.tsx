import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CODES_LAST_CHECKED } from '@/lib/data'
import {
  Callout,
  Faq,
  ImageFigure,
  PageBody,
  PageHero,
  Prose,
  RelatedLinks,
  Section,
} from '@/components/blocks'
import { pageMetadata } from '@/lib/seo'

const OFFICIAL_COUPON_URL = 'https://coupon.devplay.com/coupon/crg/en'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Redeem Codes: DevPlay Guide',
  description:
    'How to redeem Cookie Run Classic codes with DevPlay Account and Coupon Code fields, plus Mail rewards, restart steps, and account safety checks.',
  path: '/cookie-run-classic-code-redeem',
  image: '/images/redeem-coupon-code.webp',
  imageAlt: 'Cookie Run Classic coupon code redeem page preview',
})

const STEPS = [
  {
    title: 'Open the coupon page',
    body: 'Use the in-game Event Coupon button or open the official DevPlay CookieRun Classic coupon page in your browser.',
  },
  {
    title: 'Enter DevPlay Account',
    body: 'Type the DevPlay Account tied to your save. Check the account screen before submitting so rewards go to the right save.',
  },
  {
    title: 'Enter Coupon Code',
    body: 'Paste the code exactly, submit it once, then fully restart CookieRun Classic before checking your in-game Mail.',
  },
]

const FAQ = [
  {
    q: 'Where do rewards go after redeeming a code?',
    a: 'Rewards are delivered to in-game Mail. Restart the game after submitting the coupon, then open Mail and claim the reward.',
  },
  {
    q: 'Can I use the same coupon twice?',
    a: 'No. Each coupon can be used once per account. If it says already used, check Mail before trying again.',
  },
  {
    q: 'Do I need to enter my password to redeem a code?',
    a: 'No. A normal coupon redeem asks for account and code fields, not your game password. Leave any page that asks for a password or promises free generators.',
  },
  {
    q: 'What if I entered the wrong account?',
    a: 'Rewards go to the account you entered. Before submitting future codes, copy the account details directly from the game account screen.',
  },
]

export default function RedeemPage() {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to redeem Cookie Run Classic codes',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <PageHero
        breadcrumb="Code Redeem"
        h1="Cookie Run Classic Code Redeem"
        intro="Step-by-step instructions to redeem CookieRun Classic promo codes. Find your DevPlay ID, bypass iOS client restrictions, and fix missing rewards."
        updated={CODES_LAST_CHECKED}
      />
      <PageBody>
        {/* Table of Contents */}
        <Section title="Quick Navigation">
          <div className="flex flex-wrap gap-2">
            {['#ios-workaround', '#devplay-id', '#redeem-steps', '#troubleshooting'].map((link) => (
              <a
                key={link}
                href={link}
                className="rounded-xl border border-border bg-secondary/30 px-3 py-1.5 text-xs font-600 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.replace('#', '').toUpperCase().replace('-', ' ')}
              </a>
            ))}
          </div>
        </Section>

        <Section id="ios-workaround" title="iOS Device Restrictions & Workaround">
          <Callout variant="warning" title="No 'Event Coupon' button on iOS devices">
            Due to Apple App Store policies, Devsisters **does not include the in-game 'Event Coupon' button on iOS clients**. If you play on an iPhone or iPad, you cannot redeem codes directly from the game settings.
            <span className="block mt-2">
              **Workaround:** You must use an external web browser to visit the official Web Coupon Portal and enter your account ID manually.
            </span>
          </Callout>
        </Section>

        <Section id="devplay-id" title="How to find your DevPlay Account ID">
          <Prose>
            <p>
              Your coupon reward will fail to deliver if you submit your in-game nickname instead of your system ID. Follow these steps to find the correct string:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Launch CookieRun Classic on your phone.</li>
              <li>Tap the <strong>Settings (Gear)</strong> icon in the top-right corner.</li>
              <li>Select the <strong>Game Info</strong> tab from the sidebar.</li>
              <li>Locate the <strong>DevPlay Account</strong> field. It usually looks like a registered email address or a specific string ending with a domain suffix.</li>
              <li>Tap the **Copy** button next to it. Do not manually type it, as spelling mistakes will send your crystals to a non-existent account.</li>
            </ol>
          </Prose>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ImageFigure
              src="/images/redeem-devplay-account.webp"
              alt="CookieRun Classic DevPlay Account field location"
              caption="DevPlay Account location used for coupon redemption."
            />
            <ImageFigure
              src="/images/redeem-coupon-code.webp"
              alt="CookieRun Classic official coupon code portal"
              caption="Official coupon portal fields for DevPlay Account and Coupon Code."
            />
          </div>
        </Section>

        <Section id="redeem-steps" title="Redeem Steps (Web & Android)">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Step</th>
                  <th className="p-3 font-700">What to Do</th>
                  <th className="p-3 font-700">Required Inputs / Checkpoints</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    '1. Access Portal',
                    'Android: Tap Settings ➔ Game Info ➔ Event Coupon.\niOS: Open coupon.devplay.com in Safari/Chrome.',
                    'Make sure the portal URL belongs to devplay.com to protect your account safety.',
                  ],
                  [
                    '2. Fill ID & Code',
                    'Paste your DevPlay Account ID into the first box, and paste the active code in the second box.',
                    'Codes are case-sensitive. Clear any trailing blank spaces before clicking submit.',
                  ],
                  [
                    '3. Claim Mailbox',
                    'Click "Claim Reward", then completely restart the game client.',
                    'Rewards are sent to the in-game Mailbox. Check under the coupon notices tab.',
                  ],
                ].map(([step, action, check]) => (
                  <tr
                    key={step}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground whitespace-pre-line">{step}</td>
                    <td className="p-3 text-muted-foreground whitespace-pre-line">{action}</td>
                    <td className="p-3 text-muted-foreground">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={OFFICIAL_COUPON_URL}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-heading font-600 text-primary-foreground shadow-[0_4px_0_0_oklch(0.55_0.15_45)] transition-transform hover:-translate-y-0.5"
              rel="nofollow noopener"
              target="_blank"
            >
              Open Official Coupon Portal
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/cookie-run-classic-codes"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-5 py-3 font-heading font-600 text-foreground transition-transform hover:-translate-y-0.5"
            >
              View Active Codes
            </Link>
          </div>
        </Section>

        <Section id="troubleshooting" title="Troubleshooting Missing Rewards">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Common Issue</th>
                  <th className="p-3 font-700">Root Cause Analysis</th>
                  <th className="p-3 font-700">Instant Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Coupon claimed, but Mailbox is empty',
                    'The game needs a connection handshake refresh to pull mailbox updates from the server.',
                    'Force close the game from your app switcher and relaunch it.',
                  ],
                  [
                    'Error: "Invalid ID or Account"',
                    'Inputting nickname instead of the specific system ID string shown in Info tab.',
                    'Copy the ID directly using the in-game COPY button instead of typing it.',
                  ],
                  [
                    'Error: "Already Redeemed"',
                    'Coupon codes have a strict limit of one use per DevPlay account.',
                    'Confirm you did not claim it earlier. Check your crystal log or mailbox history.',
                  ],
                  [
                    'Error: "Expired Code"',
                    'The code has passed its seasonal or event expiration date.',
                    'Refer to our Active Codes page for codes that are verified to be currently working.',
                  ],
                ].map(([problem, check, fix]) => (
                  <tr
                    key={problem}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{problem}</td>
                    <td className="p-3 text-muted-foreground">{check}</td>
                    <td className="p-3 text-muted-foreground">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <ImageFigure
              src="/images/redeem-mail-reward.webp"
              alt="CookieRun Classic in-game Mail reward claim screen"
              caption="Mail reward screen where redeemed coupon rewards can be claimed."
            />
          </div>
        </Section>

        <Section id="safety" title="Account Safety Checklist">
          <Callout variant="warning" title="Redemption portals never request passwords">
            The official DevPlay coupon system **only requires your DevPlay Account ID and the promo code**. Any third-party site or portal that asks for your game password, Facebook/Google login credentials, or promises a "Crystal Generator" is a phishing attempt. Never share your credentials.
          </Callout>
        </Section>

        <Section id="faq" title="Redeem FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-code-redeem" />
      </PageBody>
    </main>
  )
}
