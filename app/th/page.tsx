import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Gift, Trophy, Sparkles, ArrowRight } from 'lucide-react'
import { ThaiHeader, ThaiFooter, UpdateBadge } from '@/components/blocks'
import { CODES_LAST_CHECKED, SITE } from '@/lib/data'
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name} TH`,
    url: `https://${SITE.domain}/th`,
    description: 'รวมโค้ด CookieRun Classic ล่าสุด และจัดอันดับสัตว์เลี้ยงภาษาไทย',
    inLanguage: 'th',
  }

  return (
    <main lang="th">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ThaiHeader current="/th" />

      <section className="relative overflow-hidden border-b-2 border-border bg-secondary/50">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-border bg-card px-3 py-1 text-xs font-700 text-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              ศูนย์รวมข้อมูล CookieRun Classic ภาษาไทย
            </span>
            <h1 className="mt-4 text-balance font-heading text-4xl font-700 leading-[1.05] text-foreground sm:text-5xl">
              CookieRun Classic ภาษาไทย
            </h1>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              รวมโค้ดล่าสุดและจัดอันดับสัตว์เลี้ยง (Pet Tier List) สำหรับ
              ผู้เล่นที่อยากได้ข้อมูลเป็นภาษาไทย เริ่มจาก 2 หัวข้อที่คนถามหา
              บ่อยที่สุดก่อน
            </p>
            <UpdateBadge updated={SITE.lastSiteUpdate} label="อัปเดตล่าสุด" className="mt-4" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/th/cookie-run-classic-codes"
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 font-heading font-600 text-primary-foreground shadow-[0_4px_0_0_oklch(0.55_0.15_45)] transition-transform hover:-translate-y-0.5"
              >
                <Gift className="size-5" aria-hidden="true" />
                ดูโค้ดฟรี
              </Link>
              <Link
                href="/th/cookie-run-classic-pet-tier-list"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-5 py-3 font-heading font-600 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Trophy className="size-5 text-primary" aria-hidden="true" />
                ดูจัดอันดับสัตว์เลี้ยง
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border-2 border-border shadow-[0_8px_0_0_oklch(0.89_0.03_75)]">
              <Image
                src="/images/hero.png"
                alt="คุกกี้ขิงวิ่งผ่านโลกลูกกวาดเก็บเยลลี่ใน CookieRun Classic"
                width={1200}
                height={1200}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border bg-primary/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-700 text-accent-foreground">
              เช็กล่าสุด
            </span>
            <span className="text-xs text-muted-foreground">
              เช็กโค้ดล่าสุดเมื่อ {CODES_LAST_CHECKED} เริ่มจากหน้าโค้ด
              และจัดอันดับสัตว์เลี้ยงก่อน
            </span>
          </div>
          <Link
            href="/cookie-run-classic-wiki"
            className="inline-flex items-center gap-1 text-sm font-700 text-primary hover:underline"
          >
            ดูไกด์ทั้งหมด (ภาษาอังกฤษ) <ArrowRight className="size-4" />
          </Link>
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

      <section className="border-t-2 border-border bg-secondary/40 py-10">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="font-heading text-xl font-700 text-foreground">
            CookieRun Classic คืออะไร?
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              CookieRun Classic เป็นเกมวิ่งหนีสองปุ่ม (กระโดด/สไลด์) จาก
              Devsisters เปิดให้เล่นทั่วโลกเมื่อวันที่ 25 มิถุนายน 2026
              เป็นการนำเกม Cookie Run for Kakao เวอร์ชันดั้งเดิม (เปิดตัวที่
              เกาหลีปี 2013) มาทำเป็นเวอร์ชันภาษาอังกฤษสำหรับผู้เล่นทั่วโลก
            </p>
            <p>
              คุกกี้ (Cookie) แต่ละตัวมีสกิลเฉพาะตัวที่ทำงานอัตโนมัติระหว่าง
              วิ่ง ผสมกับสัตว์เลี้ยง (Pet) ที่ให้บัฟเสริมแบบพาสซีฟ และสมบัติ
              (Treasure) ที่เลือกติดตัวไปได้สูงสุด 3 ชิ้นต่อรอบ ทั้งสาม
              ระบบต้องทำงานร่วมกัน — คุกกี้แรงแค่ไหนก็ตาม ถ้าจับคู่สัตว์
              เลี้ยงและสมบัติผิดทาง ผลลัพธ์ก็จะออกมาไม่เต็มศักยภาพ
            </p>
            <p>
              คะแนนวัดจากระยะทางและเยลลี่ที่เก็บได้ระหว่างวิ่ง มีสอง
              แทร็กความคืบหน้าคู่กัน: <strong>League คะแนน</strong>{' '}
              แข่งกับผู้เล่นคนอื่นแบบรีเซ็ตทุกสัปดาห์ วัดจากรอบที่ทำคะแนน
              ได้ดีที่สุด และ <strong>ความคืบหน้าบัญชี</strong> ระยะยาว
              ที่มาจากการอัปเกรดคุกกี้ สัตว์เลี้ยง สมบัติ และเคลียร์ด่านเนื้อ
              เรื่องไปเรื่อยๆ
            </p>
            <p>
              เกมนี้{' '}
              <strong>ไม่ใช่เกมเดียวกับ CookieRun: Kingdom</strong>{' '}
              (เกมสร้างอาณาจักรแบบ RPG) — ถ้าสนใจความแตกต่างแบบละเอียด
              อ่านได้ที่{' '}
              <Link
                href="/cookie-run-classic-vs-kingdom"
                className="font-700 text-primary hover:underline"
              >
                Classic vs Kingdom vs Kakao (ภาษาอังกฤษ)
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="font-heading text-xl font-700 text-foreground">
            ทำไมต้องเชื่อวิกินี้?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-border bg-card p-4">
              <p className="font-700 text-foreground text-sm">
                เช็กและลงวันที่ทุกครั้ง
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                ทุกหน้ามีวันที่อัปเดตล่าสุดกำกับไว้ ให้รู้ว่าข้อมูลยังใหม่
                อยู่ไหม ไม่ปล่อยให้ข้อมูลเก่าค้างโดยไม่บอก
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-4">
              <p className="font-700 text-foreground text-sm">
                ไม่มีแฮก ไม่มีม็อด
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                ไม่แนะนำแฮก ม็อด APK หรือเครื่องมือโกงใดๆ ทั้งสิ้น
                ครอบคลุมเฉพาะเกมทางการและวิธีแลกโค้ดที่ถูกต้องเท่านั้น
              </p>
            </div>
            <div className="rounded-2xl border-2 border-border bg-card p-4">
              <p className="font-700 text-foreground text-sm">
                ทำเพื่อผู้เล่นจริง
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                จัดอันดับมาพร้อมเหตุผลว่าทำไมถึงแรง เหมาะกับใคร ไม่ใช่แค่
                ลอกอันดับตัวอักษรมาแปะ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="font-heading text-xl font-700 text-foreground">
            คำถามที่พบบ่อย
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-700 text-foreground">
                เว็บนี้เป็นเว็บทางการของ Devsisters ไหม?
              </p>
              <p className="mt-1 text-muted-foreground">
                ไม่ใช่ เว็บนี้จัดทำโดยแฟนเกม ไม่มีความเกี่ยวข้องกับ
                Devsisters โดยตรง
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                เนื้อหาภาษาไทยจะมีเพิ่มอีกไหม?
              </p>
              <p className="mt-1 text-muted-foreground">
                มีแผนจะขยายเพิ่ม ตอนนี้เริ่มจาก 2 หัวข้อที่คนถามหาบ่อยที่สุด
                ก่อน หากมีคนค้นหาหัวข้ออื่นเพิ่มขึ้น จะทยอยเพิ่มให้
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-4xl px-4">
          <h2 className="font-heading text-xl font-700 text-foreground">
            เพิ่งเริ่มเล่น ควรทำอะไรก่อน?
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              <strong>ขั้นแรก:</strong> ไปที่หน้า{' '}
              <Link
                href="/th/cookie-run-classic-codes"
                className="font-700 text-primary hover:underline"
              >
                โค้ดล่าสุด
              </Link>{' '}
              แลกโค้ดที่ยังใช้งานได้ทุกตัวก่อนใช้คริสตัลตั้งต้น
              โค้ดเป็นของฟรีและมีอายุจำกัด ไม่แลกไว้ก็เสียเปล่า
            </p>
            <p>
              <strong>ขั้นที่สอง:</strong> ดู{' '}
              <Link
                href="/th/cookie-run-classic-pet-tier-list"
                className="font-700 text-primary hover:underline"
              >
                จัดอันดับสัตว์เลี้ยง
              </Link>{' '}
              เพื่อตัดสินใจว่าจะปั้นสัตว์เลี้ยงตัวไหนก่อน จะได้ไม่เสีย
              ทรัพยากรไปกับตัวที่ไม่เข้ากับทีม
            </p>
            <p>
              <strong>ขั้นที่สาม:</strong>{' '}
              เก็บเหรียญและคริสตัลไว้อัปเกรดคุกกี้หลักตัวเดียวให้เต็มก่อน
              ดีกว่ากระจายไปหลายตัว — หลักการนี้ใช้ได้กับทั้งคุกกี้
              สัตว์เลี้ยง และสมบัติ
            </p>
          </div>
        </div>
      </section>

      <ThaiFooter englishHref="/" />
    </main>
  )
}
