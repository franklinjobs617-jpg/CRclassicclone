import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  Clock,
  Image as ImageIcon,
  Info,
  TriangleAlert,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PRIMARY_NAV } from '@/lib/data'

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-4" />
        </li>
        <li className="font-600 text-foreground" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  )
}

export function PageHero({
  h1,
  intro,
  updated,
  breadcrumb,
}: {
  h1: string
  intro: string
  updated?: string
  breadcrumb: string
}) {
  return (
    <section className="border-b-2 border-border bg-secondary/50">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <Breadcrumbs current={breadcrumb} />
        <h1 className="text-balance font-heading text-3xl font-700 leading-tight text-foreground sm:text-4xl">
          {h1}
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
        {updated && <UpdateBadge updated={updated} className="mt-4" />}
      </div>
    </section>
  )
}

export function UpdateBadge({
  updated,
  className,
  label = 'Updated',
}: {
  updated: string
  className?: string
  label?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-700 text-foreground',
        className,
      )}
    >
      <Clock className="size-3.5 text-primary" aria-hidden="true" />
      {label}: {updated}
    </span>
  )
}

export function Section({
  id,
  title,
  children,
  className,
}: {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      {title && (
        <h2 className="mb-4 font-heading text-2xl font-700 text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-foreground/90">
      {children}
    </div>
  )
}

export function Callout({
  variant = 'info',
  title,
  children,
}: {
  variant?: 'info' | 'warning'
  title?: string
  children: React.ReactNode
}) {
  const isWarn = variant === 'warning'
  return (
    <div
      className={cn(
        'flex gap-3 rounded-2xl border-2 p-4',
        isWarn
          ? 'border-accent/40 bg-accent/10'
          : 'border-primary/30 bg-primary/10',
      )}
    >
      <span className="mt-0.5 shrink-0">
        {isWarn ? (
          <TriangleAlert className="size-5 text-accent" aria-hidden="true" />
        ) : (
          <Info className="size-5 text-primary" aria-hidden="true" />
        )}
      </span>
      <div className="text-sm leading-relaxed text-foreground/90">
        {title && <p className="mb-1 font-700 text-foreground">{title}</p>}
        {children}
      </div>
    </div>
  )
}

const TIER_STYLES: Record<string, string> = {
  S: 'bg-accent text-accent-foreground',
  A: 'bg-primary text-primary-foreground',
  B: 'bg-chart-3 text-foreground',
  C: 'bg-muted text-muted-foreground',
}

export function TierPill({ tier }: { tier: string }) {
  return (
    <span
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-xl font-heading text-base font-700 shadow-[0_2px_0_0_rgba(0,0,0,0.12)]',
        TIER_STYLES[tier] ?? 'bg-muted text-muted-foreground',
      )}
      aria-label={`Tier ${tier}`}
    >
      {tier}
    </span>
  )
}

export function TierLegend() {
  const items: { tier: string; label: string }[] = [
    { tier: 'S', label: 'Top pick — invest first' },
    { tier: 'A', label: 'Strong — great value' },
    { tier: 'B', label: 'Situational — fine to use' },
    { tier: 'C', label: 'Backup — skip upgrades' },
  ]
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((i) => (
        <div key={i.tier} className="flex items-center gap-2">
          <TierPill tier={i.tier} />
          <span className="text-sm text-muted-foreground">{i.label}</span>
        </div>
      ))}
    </div>
  )
}

export type FaqItem = { q: string; a: string }

export function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
  return (
    <div>
      <div className="divide-y divide-border overflow-hidden rounded-2xl border-2 border-border bg-card">
        {items.map((item, idx) => (
          <details key={idx} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-700 text-foreground">
              {item.q}
              <ChevronRight className="size-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

export function ImageFigure({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border-2 border-border bg-card">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="h-auto w-full"
      />
      {caption && (
        <figcaption className="border-t-2 border-border px-4 py-2 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function ImageSlot({
  title,
  description,
  suggestedPath,
  guidance,
}: {
  title: string
  description: string
  suggestedPath: string
  guidance?: string
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5">
      <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl border-2 border-border bg-card text-primary shadow-[0_3px_0_0_oklch(0.89_0.03_75)]">
          <ImageIcon className="size-7" aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-lg font-700 text-foreground">
            📷 Wiki Screenshot Guide: {title}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <figcaption className="border-t-2 border-dashed border-primary/20 bg-card/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        <span className="font-700 text-foreground">💡 Contribution Reference:</span>{' '}
        This section is reserved for an in-game screenshot. To contribute to the wiki, you can save your capture as{' '}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-foreground">
          {suggestedPath}
        </code>
        . {guidance ?? 'Follow the visual guide above to match the exact in-game screen before saving.'}
      </figcaption>
    </figure>
  )
}

export function RelatedLinks({ exclude }: { exclude: string }) {
  const items = PRIMARY_NAV.filter((i) => i.href !== exclude)
  return (
    <Section title="Keep exploring" className="mt-2">
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center justify-between gap-3 rounded-2xl border-2 border-border bg-card p-4 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span>
                <span className="block font-heading font-600 text-foreground">
                  {item.label}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {item.blurb}
                </span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-4 py-10">
      {children}
    </div>
  )
}
