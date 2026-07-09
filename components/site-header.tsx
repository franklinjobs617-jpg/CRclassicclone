'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cookie, Menu, X } from 'lucide-react'
import { PRIMARY_NAV } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-700 text-foreground"
          aria-label="CRClassic.wiki home"
        >
          <span className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_3px_0_0_oklch(0.55_0.15_45)]">
            <Cookie className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            CRClassic
            <span className="text-primary">.wiki</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {PRIMARY_NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-2 py-2 text-xs font-700 transition-colors xl:px-3 xl:text-sm',
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-secondary hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border-2 border-border bg-card text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t-2 border-border bg-background lg:hidden"
        >
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-4 py-3">
            {PRIMARY_NAV.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex flex-col rounded-2xl px-4 py-3 transition-colors',
                      active ? 'bg-primary text-primary-foreground' : 'bg-secondary',
                    )}
                  >
                    <span className="font-heading font-600">{item.label}</span>
                    <span
                      className={cn(
                        'text-xs',
                        active ? 'text-primary-foreground/80' : 'text-muted-foreground',
                      )}
                    >
                      {item.short}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
