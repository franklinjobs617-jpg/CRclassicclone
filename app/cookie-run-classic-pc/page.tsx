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
import { PC_OPTIONS, PC_TIERS_UPDATED } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Run Classic PC Guide: Setup & Key Mapping',
  description:
    'How to play Cookie Run Classic on PC with Google Play Games or Android emulators, plus account sync, controls, lag, crash, and safe download tips.',
  path: '/cookie-run-classic-pc',
  image: '/images/pc-install-keymap.webp',
  imageAlt: 'Cookie Run Classic PC install and keyboard mapping preview',
})

const FAQ = [
  {
    q: 'Can I play CookieRun Classic on PC?',
    a: 'Yes. Start with Google Play Games for PC if the game is available in your region and account. If it is not available, use a trusted Android emulator and sign in with the same account system used on your phone.',
  },
  {
    q: 'What is the safest PC option?',
    a: 'Use official store clients first. If you use an emulator, download it from the emulator developer site, keep it updated, and never enter your game login on coupon or generator sites.',
  },
  {
    q: 'Will my phone progress sync to PC?',
    a: 'It can sync when your save is linked to Google, Apple, or DevPlay. Bind the account on your phone before trying a PC install.',
  },
  {
    q: 'What should I do if the game crashes on PC?',
    a: 'Update the emulator, update graphics drivers, lower resolution, close background apps, and restart the emulator before reinstalling the game.',
  },
]

export default function PcPage() {
  return (
    <main>
      <PageHero
        breadcrumb="PC Guide"
        h1="Cookie Run Classic PC Guide"
        intro="Optimize your CookieRun Classic performance on PC. Set up lag-free controls, configure emulators to eliminate input delay, and resolve screen freezing."
        updated={PC_TIERS_UPDATED}
      />
      <PageBody>
        {/* Table of Contents */}
        <Section title="Quick Navigation">
          <div className="flex flex-wrap gap-2">
            {['#pc-options', '#key-mapping', '#input-lag', '#performance-trouble'].map((link) => (
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

        <Section id="pc-options" title="PC Emulator Comparison Matrix">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Client / Emulator</th>
                  <th className="p-3 font-700">Platform Type</th>
                  <th className="p-3 font-700">Recommended For</th>
                  <th className="p-3 font-700">Initial Setup Route</th>
                  <th className="p-3 font-700">Account Synchronization</th>
                </tr>
              </thead>
              <tbody>
                {PC_OPTIONS.map((option) => (
                  <tr
                    key={option.platform}
                    className="border-t-2 border-border bg-card align-top"
                  >
                    <td className="p-3 font-700 text-foreground">
                      {option.platform}
                    </td>
                    <td className="p-3 text-muted-foreground">{option.type}</td>
                    <td className="p-3 text-muted-foreground">
                      {option.bestFor}
                    </td>
                    <td className="p-3 text-muted-foreground">{option.setup}</td>
                    <td className="p-3 text-muted-foreground">
                      {option.accountSync}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="key-mapping" title="Optimal Keyboard Layout (Double-Hand Style)">
          <Prose>
            <p>
              *CookieRun: Classic* requires rapid, successive taps. A bad keyboard layout can cause severe hand strain. We strongly recommend the **Dual-Hand Layout** to balance the mechanical load, particularly on emulators like **LDPlayer 9.0** and **MuMu Player 12** which feature built-in macro mapping:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Left Hand: F Key (Jump)</strong> — Use your index finger for jumps and double-jumps.
              </li>
              <li>
                <strong>Right Hand: J Key (Slide)</strong> — Use your index finger to slide. This layout separates the two core actions, minimizing finger fatigue.
              </li>
              <li>
                <em>Alternative (Single-Hand): Spacebar (Jump) + Down Arrow (Slide).</em> Heavy on the thumb and wrist; not recommended for longer competitive league sessions.
              </li>
            </ul>
          </Prose>
          <div className="mt-4 rounded-2xl border border-dashed border-primary/40 bg-card p-4">
            <h4 className="font-heading text-sm font-700 text-foreground">My keymapping setup</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              On LDPlayer 9.0, I switched from the default Space + Down Arrow to F/J and the input lag disappeared. I mapped the active skill to D so I can hit it with my left index finger during Potato Salad's coin conversion loop without moving my hands.
            </p>
          </div>
          <div className="mt-4">
            <ImageFigure
              src="/images/pc-install-keymap.webp"
              alt="CookieRun Classic PC key mapping layout"
              caption="PC key mapping layout for jump, slide, and skill controls."
            />
          </div>
        </Section>

        <Section id="input-lag" title="Eliminating Input Lag (Crucial Settings)">
          <Callout variant="warning" title="Input delay is the main cause of failed double-jumps">
            Emulators running at default settings usually introduce 50ms to 100ms of input delay. In a fast runner game, this delay causes your cookie to hit obstacles even when you react in time.
          </Callout>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Enable High Frame Rates (90+ FPS)',
                body: 'Go to Emulator Settings ➔ Game Settings. Set the frame rate limit to 90 FPS or 120 FPS. Higher frame rates directly reduce input delay.',
              },
              {
                title: 'Disable V-Sync (Vertical Sync)',
                body: 'Disable V-Sync in both the emulator settings and your graphics driver panel. V-Sync forces frame synchronization, adding minor input delay.',
              },
              {
                title: 'Graphics Renderer Selection',
                body: 'Switch the graphics engine renderer from standard OpenGL to Vulkan (or DirectX if you are on an older GPU). Vulkan handles 2D sprites with less rendering delay.',
              },
              {
                title: 'Use Keyboard for Actions',
                body: 'Never use mouse clicks to trigger Jump or Slide actions during runs. Mouse clicks introduce high click latency compared to keyboard switches.',
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

        <Section id="performance-trouble" title="Emulator Crashing & Freezing Fixes">
          <div className="overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">Problem</th>
                  <th className="p-3 font-700">Primary Root Cause</th>
                  <th className="p-3 font-700">Resolution Steps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Game stutters/drops frames',
                    'VT (Virtualization Technology) is disabled in computer BIOS.',
                    'Restart PC, enter BIOS (F2/Del), and enable Intel Virtualization (VT-x) or AMD SVM.',
                  ],
                  [
                    'Black screen or game freeze on launch',
                    'Outdated graphics drivers or incompatible graphics API.',
                    'Update graphics card drivers, and switch emulator graphics mode to Vulkan.',
                  ],
                  [
                    'Keys stop responding mid-run',
                    'Keyboard focus lost due to emulator background notification pops.',
                    'Enable "Boss Key" or full-screen mode to lock mouse/keyboard focus into the emulator window.',
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
            <Callout title="Synchronize Account BEFORE playing on PC">
              Make sure to bind your phone save to a DevPlay Account in your mobile app settings before launching the game on PC. Logging into an unlinked guest account on PC will generate a fresh level-1 save, which can overwrite or corrupt your mobile progress if synced incorrectly.
            </Callout>
          </div>
        </Section>

        <Section id="faq" title="PC Guide FAQ">
          <Faq items={FAQ} />
        </Section>

        <RelatedLinks exclude="/cookie-run-classic-pc" />
      </PageBody>
    </main>
  )
}
