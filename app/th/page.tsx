import type { Metadata } from 'next'
import Link from 'next/link'
import { ThaiHeader, ThaiFooter } from '@/components/blocks'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'CookieRun Classic ภาษาไทย: โค้ด, จัดอันดับสัตว์เลี้ยง, ไกด์เกม',
  description:
    'รวมโค้ด CookieRun Classic ล่าสุด และจัดอันดับสัตว์เลี้ยง (Pet Tier List) ภาษาไทย อัปเดตต่อเนื่อง',
  path: '/th',
  image: '/images/hero.png',
  imageAlt: 'CookieRun Classic ภาษาไทย',
  type: 'website',
  alternateLanguages: {
    en: 'https://crclassic.wiki/',
    th: 'https://crclassic.wiki/th',
    'x-default': 'https://crclassic.wiki/',
  },
})

export default function ThaiHomePage() {
  return (
    <main>
      <ThaiHeader current="/th" />

      <section className="border-b-2 border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <h1 className="text-balance font-heading text-3xl font-700 leading-tight text-foreground sm:text-4xl">
            CookieRun Classic ภาษาไทย
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            รวมโค้ดล่าสุดและจัดอันดับสัตว์เลี้ยง (Pet Tier List) สำหรับผู้เล่น
            CookieRun Classic ที่อยากได้ข้อมูลเป็นภาษาไทย เนื้อหาส่วนนี้ยังอยู่
            ระหว่างขยายเพิ่มเติม เริ่มจาก 2 หัวข้อที่คนถามหาบ่อยที่สุดก่อน
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/th/cookie-run-classic-pet-tier-list"
            className="group flex flex-col rounded-3xl border-2 border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
          >
            <span className="font-heading text-lg font-700 text-foreground">
              จัดอันดับสัตว์เลี้ยง (Pet Tier List)
            </span>
            <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
              สัตว์เลี้ยงตัวไหนควรปั้นก่อน พร้อมรูปประกอบและคำอธิบายแต่ละตัว
            </span>
            <span className="mt-4 text-sm font-700 text-primary">
              ดูจัดอันดับ →
            </span>
          </Link>
          <Link
            href="/th/cookie-run-classic-codes"
            className="group flex flex-col rounded-3xl border-2 border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
          >
            <span className="font-heading text-lg font-700 text-foreground">
              โค้ดล่าสุด (Codes)
            </span>
            <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
              โค้ดที่ใช้งานได้ตอนนี้ พร้อมวิธีแลกโค้ดทีละขั้นตอน
            </span>
            <span className="mt-4 text-sm font-700 text-primary">
              ดูโค้ด →
            </span>
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground/90">
          <p>
            <span className="font-700 text-foreground">
              หาข้อมูลอื่นไม่เจอ?
            </span>{' '}
            ตอนนี้เรายังไม่มีเวอร์ชันภาษาไทยของทุกหน้า เช่น Tier List คุกกี้
            หลัก, Treasure Tier List, หรือไกด์ผู้เล่นใหม่ — หัวข้อพวกนี้
            สามารถดูเวอร์ชันภาษาอังกฤษได้ที่{' '}
            <Link
              href="/"
              className="font-700 text-primary hover:underline"
            >
              หน้าแรกภาษาอังกฤษ
            </Link>
            {' '}เนื้อหาเป็นภาษาอังกฤษแต่มีตารางและรูปประกอบที่เข้าใจได้แม้ไม่ถนัดภาษา
          </p>
        </div>
      </section>

      <ThaiFooter englishHref="/" />
    </main>
  )
}
