import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { PRIMARY_NAV, SITE } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-lg font-700"
            >
              <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Cookie className="size-5" aria-hidden="true" />
              </span>
              CRClassic<span className="text-primary">.wiki</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A fan-made resource for CookieRun Classic players: codes, tier
              lists, pet and treasure rankings, and PC play guides. We update
              pages as new content, codes and balance changes go live.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-heading text-sm font-700 uppercase tracking-wide text-foreground">
              Guides
            </h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-3 border-border" />
            <ul className="grid gap-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            CookieRun Classic is a trademark of Devsisters Corporation.{' '}
            {SITE.name} is an independent fan resource and is not affiliated
            with, endorsed by, or sponsored by Devsisters. All game names,
            images and assets belong to their respective owners.
          </p>
          <p className="mt-3">
            Last site review: {SITE.lastSiteUpdate}. We do not host hacks, mods,
            or cheat tools. Always download the game from official stores.
          </p>
        </div>
      </div>
    </footer>
  )
}
