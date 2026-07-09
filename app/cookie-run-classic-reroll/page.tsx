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
  title: 'Cookie Run Classic Reroll Guide: Keep or Reset',
  description:
    'Decide whether rerolling is worth it in Cookie Run Classic, what makes a keeper account, and what to do after keeping your first account.',
  path: '/cookie-run-classic-reroll',
  image: '/images/reroll-keeper-account.webp',
  imageAlt: 'Cookie Run Classic reroll keeper account checklist preview',
})

const UPDATED = SITE.lastSiteUpdate

const FAQ = [
  {
    q: 'Is rerolling required in CookieRun Classic?',
    a: 'No. Most players should start playing, bind the account, collect rewards, and build one main setup before thinking about rerolling.',
  },
  {
    q: 'Who should reroll?',
    a: 'Reroll only if you want a specific starting Cookie, pet, or treasure and you are willing to repeat the opening route several times.',
  },
  {
    q: 'What makes an account worth keeping?',
    a: 'Keep an account that has a clear main runner direction, useful pet or treasure support, and enough rewards left to build that setup.',
  },
  {
    q: 'Should I reroll after spending resources?',
    a: 'Usually no. Once you have spent meaningful time and resources, improving your current setup is often faster than restarting.',
  },
]

export default function RerollPage() {
  return (
    <main>
      <PageHero
        breadcrumb="Reroll"
        h1="Cookie Run Classic Reroll Guide"
        intro="Maximize your starting roster. Learn the 3-minute in-game account reset technique that lets you roll for S-tier characters without reinstalling massive game files."
        updated={UPDATED}
      />
      <PageBody>
        {/* Table of Contents */}
        <Section title="Quick Navigation">
          <div className="flex flex-wrap gap-2">
            {['#reroll-decision', '#fast-route', '#keeper-criteria', '#reroll-mistakes'].map((link) => (
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

        <Section id="reroll-decision" title="Should you reroll?">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Player Profile</th>
                  <th className="p-3 font-700">Reroll Value</th>
                  <th className="p-3 font-700">Time/Effort Cost</th>
                  <th className="p-3 font-700">Recommended Strategy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Casual Player',
                    'Low',
                    '3-5 minutes per loop',
                    'Keep first account. Launch rewards will carry your progression.',
                  ],
                  [
                    'F2P Score Competitor',
                    'High',
                    'Highly recommended',
                    'Reroll for S-tier gold farmer Potato Salad Cookie to fund early upgrades.',
                  ],
                  [
                    'Dedicated Speedrunner',
                    'Medium',
                    'Worth the effort',
                    'Roll for Princess Bari Cookie for safe early progression runs.',
                  ],
                  [
                    'Already Active Account',
                    'Low',
                    'Not recommended',
                    'Do not reset if you have leveled up your base Energy stat beyond lvl 10.',
                  ],
                ].map(([type, value, cost, alternative]) => (
                  <tr
                    key={type}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">{type}</td>
                    <td className="p-3 text-muted-foreground">{value}</td>
                    <td className="p-3 text-muted-foreground">{cost}</td>
                    <td className="p-3 text-muted-foreground">{alternative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="fast-route" title="The 3-Minute In-Game Reset Route (No Redownload)">
          <Callout title="Do NOT uninstall the app to reroll">
            *CookieRun: Classic* contains massive local database files. Deleting and reinstalling the app from Google Play or Apple App Store is extremely slow and unnecessary. Instead, use the built-in account deletion system.
          </Callout>
          <Prose>
            <p>Follow this optimal sequence to finish a reroll cycle in under 3 minutes:</p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>Launch the game and choose to log in as a **Guest Account**.</li>
              <li>Rush through the opening tutorial stage and clear up to **Episode 1 Stage 1-3** (takes about 90 seconds).</li>
              <li>Go to your in-game mailbox and claim all pre-registration and milestone rewards.</li>
              <li>Go to our codes page, copy all active coupon codes, and redeem them to collect an additional 3,000+ Crystals.</li>
              <li>Spend your crystals on the active character banners to pull for S-tier targets.</li>
              <li>
                <strong>If pulls are successful:</strong> Go to Settings ➔ Game Info and bind your guest account to your DevPlay or Google/Apple accounts.
              </li>
              <li>
                <strong>If pulls fail:</strong> Stay on the Settings ➔ Game Info tab, click the **Delete Account** or **Reset Data** button. Confirm the popup prompt. The game client will instantly return to the title screen with your guest save cleared, allowing you to restart immediately without any download.
              </li>
            </ol>
          </Prose>
          <div className="mt-4">
            <ImageFigure
              src="/images/reroll-keeper-account.webp"
              alt="CookieRun Classic account reset and keeper account screen"
              caption="Account reset and keeper account screen for reroll decisions."
            />
          </div>
        </Section>

        <Section id="keeper-criteria" title="Reroll Target Tier List (What to Keep)">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Primary Target: Potato Salad Cookie (S+)',
                body: 'The absolute best starter Cookie. Gold runs economy in this game. Potato Salad Cookie lets you farm gold twice as fast, speeding up your Energy upgrades dramatically.',
              },
              {
                title: 'Secondary Target: Princess Bari Cookie (S)',
                body: 'A superb scoring and sustain Cookie. Her self-revival skill makes early stages and competitive leagues much easier to clear.',
              },
              {
                title: 'Avoid keeping: Starter upgrades',
                body: 'Do not settle for A-tier or B-tier damage runners. Getting an S-tier economic or sustain character saves weeks of grind.',
              },
              {
                title: 'Pet Pairings (Bonus Target)',
                body: 'If you pull Mr. Limeguard alongside Potato Salad Cookie, or Lotus Sitter alongside Lotus Root, keep the account instantly.',
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

        <Section id="reroll-mistakes" title="Reroll Mistakes to Avoid">
          <Prose>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Rerolling too long:</strong> Don\'t spend 3 days trying to get a perfect triple-S account. Getting one S-tier Coin Cookie (Potato Salad) is enough to progress quickly.
              </li>
              <li>
                <strong>Binding account too early:</strong> Do not link your social media or DevPlay email until you are 100% happy with your pulls. Unlinking is slow and manual.
              </li>
              <li>
                <strong>Spending rewards on Pet Chests:</strong> Always prioritize getting your S-tier Cookie main first. Pets are useful, but a S-tier Cookie provides more raw value early on.
              </li>
            </ul>
          </Prose>
        </Section>

        <Section id="faq" title="Reroll FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-reroll" />
      </PageBody>
    </main>
  )
}
