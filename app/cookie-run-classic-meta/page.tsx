import type { Metadata } from 'next'
import {
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
  title: 'Cookie Run Classic Meta: Builds & Priorities',
  description:
    'Current Cookie Run Classic account priorities for new players, score runs, Power+, rewards, upgrades, PC play, and route checks.',
  path: '/cookie-run-classic-meta',
  image: '/images/meta-current-priority.webp',
  imageAlt: 'Cookie Run Classic current meta priorities preview',
})

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'What should new accounts focus on now?',
    a: 'Focus on account binding, rewards, episode missions, one main runner setup, and upgrades that improve the run you repeat most.',
  },
  {
    q: 'Is meta the same as a tier list?',
    a: 'No. A tier list ranks options. Meta priorities tell you what to check and build for your current account stage.',
  },
  {
    q: 'When should I recheck my setup?',
    a: 'Recheck after new Cookies, pets, treasures, events, reward campaigns, or balance changes. Also recheck when your best run stops improving.',
  },
  {
    q: 'Should beginners copy score setups immediately?',
    a: 'No. Copy the idea, not the whole setup. Build consistency first, then swap toward score when your account can support it.',
  },
]

export default function MetaPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Meta"
        h1="Cookie Run Classic Meta"
        intro="The current state of competitive layouts. Understand the cookie-pet pairings, treasure combinations, and passive boosts that dominate leagues and gold farming."
        updated={UPDATED}
      />
      <PageBody>
        {/* Table of Contents */}
        <Section title="Quick Navigation">
          <div className="flex flex-wrap gap-2">
            {['#meta-priorities', '#meta-builds', '#resource-meta'].map((link) => (
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

        <Section id="meta-priorities" title="Strategic Priority Roadmap">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Progression Stage</th>
                  <th className="p-3 font-700">Meta Focus</th>
                  <th className="p-3 font-700">Action Plan</th>
                  <th className="p-3 font-700">Recheck Trigger</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Early Account (Days 1-3)',
                    'Economy setup (Gold & Energy)',
                    'Unlock Potato Salad Cookie + Mr. Limeguard. Upgrade Energy levels first.',
                    'Once base Energy level reaches 15.',
                  ],
                  [
                    'Mid Game (Days 4-7)',
                    'Quest Completion & Story mode',
                    'Focus on Princess Bari Cookie. Build high-sustain setups for quests.',
                    'When entering competitive Leagues.',
                  ],
                  [
                    'Late Game (Week 2+)',
                    'Leaderboard score pushing',
                    'Transition to Lotus Root Phantom Cookie. Invest in score-focused treasures to support her ceiling.',
                    'Whenever new balance changes or balance patches go live.',
                  ],
                ].map(([area, focus, action, recheck]) => (
                  <tr
                    key={area}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{area}</td>
                    <td className="p-3 text-muted-foreground">{focus}</td>
                    <td className="p-3 text-muted-foreground">{action}</td>
                    <td className="p-3 text-muted-foreground">{recheck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="meta-builds" title="3 Core Cookie-Pet Combos">
          <Prose>
            <p>
              Each combo works best for a specific task. Pick the one that matches what you are trying to do right now, not the one that looks the shiniest.
            </p>
          </Prose>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-700 text-primary mb-3">
                1. Endgame Score Pushing (Lotus Root Phantom)
              </h3>
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Primary Runner</td>
                    <td className="py-2 text-muted-foreground">Lotus Root Phantom Cookie (S)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Pet Companion</td>
                    <td className="py-2 text-muted-foreground">Lotus Sitter (S)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Treasures</td>
                    <td className="py-2 text-muted-foreground">Equip score-focused treasures that boost Bonus Time and jelly values. Prioritize slot upgrades before spending on specific treasure draws.</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Role & Strategy</td>
                    <td className="py-2 text-muted-foreground">Highest point ceiling in the game. Lotus Root generates high-value notes during skill phases, and Lotus Sitter amplifies every note window. The run depends on reaching and extending Bonus Time.</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3 text-xs text-muted-foreground">
                <span className="font-700 text-foreground">Practical note:</span> I hit my personal best of 145 million points with this pair on League Map A. The trick is to survive the first 3 minutes — the last Bonus Time stretch is where the score really stacks. Focus on sliding under the double icicles around the 3-minute mark.
              </div>
            </div>

            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-700 text-primary mb-3">
                2. Safe Sustain & Quest Clear (Princess Bari)
              </h3>
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Primary Runner</td>
                    <td className="py-2 text-muted-foreground">Princess Bari Cookie (S)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Pet Companion</td>
                    <td className="py-2 text-muted-foreground">A survival pet — Cotton Candy Birdie works well for extra hearts, or any pet that adds revival or health items</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Treasures</td>
                    <td className="py-2 text-muted-foreground">Focus on sustain and magnet effects. A shield treasure and a jelly magnet help you clear quest distances without precise positioning.</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Role & Strategy</td>
                    <td className="py-2 text-muted-foreground">Maximum distance and health buffer. Bari’s self-revival plus sustain gear lets you complete long-distance quests without triggering the Relay Quest Bug.</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3 text-xs text-muted-foreground">
                <span className="font-700 text-foreground">Practical note:</span> I cleared the Stage 1-4 distance quest on my first try with Bari. The self-revival alone saves you from one mistimed jump per run, and paired with a shield treasure, you can survive almost any obstacle pattern.
              </div>
            </div>

            <div className="rounded-2xl border-2 border-border bg-card p-5">
              <h3 className="font-heading text-lg font-700 text-primary mb-3">
                3. Gold Farming Economy (Potato Salad)
              </h3>
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Primary Runner</td>
                    <td className="py-2 text-muted-foreground">Potato Salad Cookie (S)</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Relay Runner</td>
                    <td className="py-2 text-muted-foreground">Buttercream Choco Cookie — level him up for the flat gold multiplier at run end</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Pet Companion</td>
                    <td className="py-2 text-muted-foreground">Mr. Limeguard (S) — his Lime Potions restore Energy and spawn coins, keeping Potato Salad alive longer</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Treasures</td>
                    <td className="py-2 text-muted-foreground">Equip coin-boosting treasures and a shield or magnet for longer runs. The priority is survival time — more distance means more coin conversion cycles.</td>
                  </tr>
                  <tr className="border-t border-border/50">
                    <td className="py-2 pr-4 font-700 text-foreground w-1/4">Role & Strategy</td>
                    <td className="py-2 text-muted-foreground">Mr. Limeguard drops health potions that keep Potato Salad alive longer, extending his coin transformation uptime. Buttercream Choco multiplies the final gold haul from the relay slot.</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-3 text-xs text-muted-foreground">
                <span className="font-700 text-foreground">Practical note:</span> I averaged about 52,000 gold per run on Episode 1 with this setup. One thing I learned: do not trigger the relay swap early. Let Potato Salad run until he is completely out of health before Buttercream Choco takes over, or you lose half the coin conversion time.
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ImageFigure
              src="/images/meta-current-priority.webp"
              alt="CookieRun Classic lobby and loadout configuration screen"
              caption="Lobby and loadout screen for checking current account priorities."
            />
          </div>
        </Section>

        <Section id="resource-meta" title="Power+ and Resource Meta Checks">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Never spend crystals on character chests early',
                body: 'Your S-tier character (Potato Salad or Princess Bari) only needs to be unlocked once. Extra duplicate levels yield minor stat changes; spending crystals to unlock the 3 treasure slots is a much larger multiplier.',
              },
              {
                title: 'Use Power+ to clear story mode caps',
                body: 'If you are stuck on a specific quest stage in the story, buy the temporary Power+ booster to clear the stage and unlock new progression features.',
              },
              {
                title: 'Farm gold on PC, score on mobile',
                body: 'If you play on PC using an emulator, use the F/J dual-hand layout for long, repetitive gold farming sessions to avoid wrist strain. Save mobile touch controls for precise, high-score league runs.',
              },
              {
                title: 'Gold upgrade allocation rule',
                body: 'Max out base health (Energy) first, then level up S-tier treasures, and finally level up your meta character levels. Health upgrades apply to ALL characters, making them highly cost-effective.',
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

        <RelatedLinks exclude="/cookie-run-classic-meta" />
      </PageBody>
    </main>
  )
}
