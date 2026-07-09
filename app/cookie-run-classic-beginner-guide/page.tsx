import type { Metadata } from 'next'
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
import { SITE } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic Beginner Guide: First Week Route',
  description:
    'A first-day and first-week Cookie Run Classic route for missions, coins, Power+, account binding, upgrades, pets, treasures, and daily checks.',
  path: '/cookie-run-classic-beginner-guide',
  image: '/images/beginner-first-mission.webp',
  imageAlt: 'Cookie Run Classic beginner mission route preview',
})

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'What should I do first in CookieRun Classic?',
    a: 'Finish the tutorial, bind your account, claim available launch rewards, then follow episode missions instead of spending resources randomly.',
  },
  {
    q: 'Should I upgrade every Cookie early?',
    a: 'No. Choose one main runner and upgrade around that setup. Spreading coins across every Cookie slows your first week.',
  },
  {
    q: 'What is the best use of coins early?',
    a: 'Spend coins on the Cookie, pet, or treasure you use every day. Save coins when the upgrade does not help your current route.',
  },
  {
    q: 'When should I start caring about tier lists?',
    a: 'Use tier lists after you know your goal: episode missions, League score, coin farming, or a specific Cookie setup.',
  },
]

export default function BeginnerGuidePage() {
  return (
    <main>
      <PageHero
        breadcrumb="Beginner Guide"
        h1="Cookie Run Classic Beginner Guide"
        intro="Start your CookieRun Classic journey with optimal resource allocation, account safety, and progression mechanics. Avoid early investment traps and bypass common mission bugs."
        updated={UPDATED}
      />
      <PageBody>
        {/* Table of Contents / Jump links */}
        <Section title="Quick Navigation">
          <div className="flex flex-wrap gap-2">
            {['#core-mechanics', '#route', '#upgrades', '#quest-bug', '#crystals', '#daily'].map((link) => (
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

        <Section id="core-mechanics" title="Core mechanics explained">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-base font-700 text-foreground">Energy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your starting health and how fast it drains over time. Maxing this stat is your first upgrade goal — more Energy means longer runs, which means more coins and higher scores. The upgrade applies to every cookie you own, so it pays off immediately.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-base font-700 text-foreground">Bonus Time</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A short phase where jelly values multiply and the track gets denser. Trigger it by collecting enough jellies in a run. This is where scores are made — a cookie that reaches Bonus Time reliably will outscore one that dies early every time.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-base font-700 text-foreground">Jelly types</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Basic jellies give base points. Bear Jellies (yellow, pink, ice) give higher values and are the main score source in competitive League runs. Special jellies are tied to specific cookie skills — collecting them charges your active ability faster.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-base font-700 text-foreground">Power+</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A temporary booster you can buy for a single run. It increases your starting Energy, jelly magnet range, or score multiplier. Save it for quests you are stuck on — do not burn it on daily farming runs.
              </p>
            </div>
          </div>
        </Section>

        <Section id="route" title="Day 1 to Week 1 route">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Stage</th>
                  <th className="p-3 font-700">Progression Goal</th>
                  <th className="p-3 font-700">Strategic Actions</th>
                  <th className="p-3 font-700">Critical Traps to Avoid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'First 30 minutes',
                    'Secure Account & Mail loot',
                    'Complete tutorial, bind to DevPlay, redeem launch codes for 3000+ crystals, buy initial energy levels.',
                    'Starting runs as Guest without binding; an app crash can completely wipe your progress.',
                  ],
                  [
                    'Day 1',
                    'Unlock systems',
                    'Unlock Potato Salad Cookie for gold farming. Play Episode 1 missions up to Stage 1-4 using only one main runner.',
                    'Upgrading random common cookies. Spreading gold thins out your progression pace.',
                  ],
                  [
                    'Days 2-3',
                    'Optimize Economy',
                    'Unlock the 2nd and 3rd Treasure slots. Farm gold with Potato Salad Cookie + Mr. Limeguard pet combo.',
                    'Spending crystals on cookie chests. Treasures are universally usable; cookies are situational.',
                  ],
                  [
                    'Week 1',
                    'Climb Leagues & Quests',
                    'Max out your base Energy level. Practice sliding/jumping sequences to transition from survival to scoring.',
                    'Relying on Relay cookies to finish difficult quests (this triggers the Relay Quest Bug).',
                  ],
                ].map(([stage, goal, action, avoid]) => (
                  <tr
                    key={stage}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{stage}</td>
                    <td className="p-3 text-muted-foreground">{goal}</td>
                    <td className="p-3 text-muted-foreground">{action}</td>
                    <td className="p-3 text-muted-foreground">{avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="First 30 minutes checklist">
          <Prose>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <strong>Tutorial:</strong> Complete the initial training track without spending extra resources.
              </li>
              <li>
                <strong>Account Binding:</strong> Open Settings ➔ Game Info and bind your save to a DevPlay account to protect your progress.
              </li>
              <li>
                <strong>Coupon Redemption:</strong> Copy your DevPlay Account ID and paste active coupon codes (such as `CRCLASSICLAUNCH` and `AMAZINGKIWICOOK2`) at the official redemption page to secure a huge crystal starting buffer.
              </li>
              <li>
                <strong>Store Run Ticket Consumables:</strong> Learn the difference between <strong>Hearts</strong> (regular running ticket) and <strong>Keys</strong> (used for Special Episode: Tower of Frozen Waves). 
                <span className="block mt-1 text-muted-foreground text-xs pl-2">
                  *Tower of Frozen Waves detail:* This mode consists of 100 floors, with 3 specific challenges/stages per floor. Collecting waves and stars up to the 300-point milestone will award you the rare **Frozen Wave Drop Pet** completely free.
                </span>
                Note that Boosters (Shields, Magnets, Relay runs) are <strong>temporary one-off items</strong> that must be re-purchased per run.
              </li>
            </ol>
          </Prose>
        </Section>

        <Section id="quest-bug" title="The Relay Quest Bug (Critical Warning)">
          <Callout variant="warning" title="Relay Cookies do not count for Quest progression">
            A common source of confusion in the CookieRun community is failing to complete Episode Quests despite running the required distance. 
            <strong className="block mt-1">
              Most quests require you to achieve the objective (reach a stage, collect specific jellies) using ONLY your primary runner. If your primary Cookie dies and you activate the Relay Cookie, any progress made by the second Cookie will not count towards completing the quest.
            </strong>
            Always focus your upgrades on your main runner to survive the entire distance without needing a relay!
          </Callout>
          <div className="mt-4">
            <ImageFigure
              src="/images/beginner-first-mission.webp"
              alt="CookieRun Classic beginner episode quests and missions screen"
              caption="Episode quests and missions screen for checking early account progress."
            />
          </div>
        </Section>

        <Section id="upgrades" title="Base Upgrades & Priority Order">
          <Prose>
            <p>
              Your coins should go into base upgrades before individual character levels. Focus on the stats that directly keep your runs going longer:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>1. Energy (Max First):</strong> Your absolute top priority. Maxing out Energy increases your starting health and slows down passive energy decay. More energy equals more distance, which directly translates to more coins and higher scores.
              </li>
              <li>
                <strong>2. Jellies:</strong> The secondary priority. Improves the base point multiplier of all standard jellies spawned on the track.
              </li>
              <li>
                <strong>3. Bonus Time (Lowest Priority):</strong> Do not prioritize this early on. Standard Bonus Time lasts long enough initially, and early upgrades yield very minor returns compared to raw health.
              </li>
            </ul>
          </Prose>
        </Section>

        <Section id="crystals" title="First-Week Crystal Allocation Plan">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Unlock 3 Treasure Slots',
                body: 'Your first 1,000 crystals should go towards unlocking the 2nd and 3rd treasure slots. Treasures provide passive, account-wide bonuses that scale infinitely.',
              },
              {
                title: 'Economy Main (Potato Salad)',
                body: 'Prioritize pulling Potato Salad Cookie. He is the undisputed king of gold farming. Getting him early unlocks rapid progression.',
              },
              {
                title: 'Upgrade S-Tier Treasures',
                body: 'Allocate remaining crystals to unlock the three treasure slots first, then draw for score and economy treasures rather than character banners.',
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

        <Section id="daily" title="Daily Checklist & My Strategy">
          <Prose>
            <ul className="ml-5 list-disc space-y-1">
              <li>Claim login rewards from your Mailbox and Event tabs.</li>
              <li>Spend your daily Hearts on coin farming runs with Potato Salad Cookie + Mr. Limeguard.</li>
              <li>Clear story mode stages using your Keys to obtain progression rewards.</li>
              <li>Purchase temporary boosters only when trying to break a difficult quest or personal high score record.</li>
            </ul>
          </Prose>
          <div className="mt-4 rounded-2xl border border-dashed border-primary/40 bg-card p-4">
            <h4 className="font-heading text-sm font-700 text-foreground">From my first week of playing</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              In my first three days I stuck to about five coin runs per day — enough to learn the episode layouts without burning out. Running Potato Salad Cookie with Mr. Limeguard, I hit over 50,000 coins in about two hours of play. The big thing I learned: don't chase high jumps for extra jellies. Stay in the main lane, survive longer, and the coins add up.
            </p>
          </div>
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-beginner-guide" />
      </PageBody>
    </main>
  )
}
