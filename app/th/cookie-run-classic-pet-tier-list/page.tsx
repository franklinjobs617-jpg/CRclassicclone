import type { Metadata } from 'next'
import Link from 'next/link'
import { ThaiHeader, ThaiFooter, TierImage, TierPill } from '@/components/blocks'
import { PET_TIERS, PET_TIER_UPDATED } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'จัดอันดับสัตว์เลี้ยง CookieRun Classic (Pet Tier List) พร้อมรูป',
  description:
    'จัดอันดับสัตว์เลี้ยง CookieRun Classic ตัวไหนควรปั้นก่อน พร้อมรูปประกอบทุกตัวและคำแนะนำการจับคู่กับคุกกี้',
  path: '/th/cookie-run-classic-pet-tier-list',
  image: '/images/cookies.png',
  imageAlt: 'CookieRun Classic สัตว์เลี้ยง',
  alternateLanguages: {
    en: 'https://crclassic.wiki/cookie-run-classic-pet-tier-list',
    th: 'https://crclassic.wiki/th/cookie-run-classic-pet-tier-list',
    'x-default': 'https://crclassic.wiki/cookie-run-classic-pet-tier-list',
  },
})

const TIER_GROUPS: { tier: string; heading: string; desc: string }[] = [
  {
    tier: 'S',
    heading: 'S Tier — ตัวหลักที่ควรปั้นก่อน',
    desc: 'สัตว์เลี้ยงกลุ่มนี้ให้ผลตอบแทนสูงสุดไม่ว่าจะเล่นสายคะแนนหรือสายฟาร์มเหรียญ เหมาะเป็นตัวแรกที่ควรลงทุนอัปเกรด',
  },
  {
    tier: 'A',
    heading: 'A Tier — ตัวรองที่ใช้งานได้จริง',
    desc: 'แข็งแกร่งในบทบาทเฉพาะทาง เหมาะเสริมทีมหลังจากมีตัว S Tier แล้ว',
  },
  {
    tier: 'B',
    heading: 'B Tier — เฉพาะทาง เหมาะบางสถานการณ์',
    desc: 'ใช้ได้ดีในบางด่านหรือบางโหมด แต่ไม่ใช่ตัวเลือกอันดับแรกสำหรับบัญชีทั่วไป',
  },
  {
    tier: 'C',
    heading: 'C Tier — เหมาะช่วงต้นเกมเท่านั้น',
    desc: 'ใช้เรียนรู้ระบบตอนเริ่มเล่น แล้วเปลี่ยนไปใช้ตัวที่สูงกว่าเมื่อมีตัวเลือกดีกว่า',
  },
]

function petsByTier(tier: string) {
  return PET_TIERS.filter((p) => p.tier === tier)
}

export default function ThaiPetTierListPage() {
  return (
    <main>
      <ThaiHeader current="/th/cookie-run-classic-pet-tier-list" />

      <section className="border-b-2 border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <h1 className="text-balance font-heading text-3xl font-700 leading-tight text-foreground sm:text-4xl">
            จัดอันดับสัตว์เลี้ยง CookieRun Classic (Pet Tier List)
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            สัตว์เลี้ยงตัวไหนควรปั้นก่อน พร้อมรูปประกอบและคำแนะนำการจับคู่กับ
            คุกกี้แต่ละตัว อัปเดตล่าสุด {PET_TIER_UPDATED}
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl space-y-10 px-4 py-10">
        {TIER_GROUPS.map((group) => {
          const pets = petsByTier(group.tier)
          if (pets.length === 0) return null
          return (
            <section key={group.tier}>
              <h2 className="font-heading text-xl font-700 text-foreground">
                {group.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.desc}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {pets.map((pet) => (
                  <div
                    key={pet.name}
                    className="flex items-start gap-3 rounded-2xl border-2 border-border bg-card p-4"
                  >
                    <TierImage src={pet.image} alt={pet.name} size={56} />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <TierPill tier={pet.tier} />
                        <span className="font-heading text-sm font-700 text-foreground">
                          {pet.name}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        จับคู่กับ: {pet.pairedCookie}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                        {pet.bestForTh}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        <section className="rounded-2xl border-2 border-border bg-card p-5">
          <h2 className="font-heading text-lg font-700 text-foreground">
            คำถามที่พบบ่อย
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-700 text-foreground">
                ควรปั้นสัตว์เลี้ยงตัวไหนก่อน?
              </p>
              <p className="mt-1 text-muted-foreground">
                เลือกตามคุกกี้หลักที่ใช้อยู่ก่อน ถ้าเล่นสายฟาร์มเหรียญให้ปั้น
                Mr. Limeguard คู่กับ Potato Salad Cookie ถ้าเล่นสายคะแนนให้ดู
                Jellyco Cube ซึ่งใช้ได้กับเกือบทุกคุกกี้
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                สัตว์เลี้ยง S Tier ต้องมีครบทุกตัวไหม?
              </p>
              <p className="mt-1 text-muted-foreground">
                ไม่จำเป็น เลือกแค่ 1 ตัวที่เข้ากับคุกกี้หลักของตัวเองก่อน
                แล้วค่อยขยายทีมทีหลัง
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground/90">
          <p>
            ต้องการรายละเอียดเชิงลึกกว่านี้ (กลไกสกิล, การอัปเกรด,
            คำแนะนำการจับทีมแบบเต็ม) ดูได้ที่{' '}
            <Link
              href="/cookie-run-classic-pet-tier-list"
              className="font-700 text-primary hover:underline"
            >
              เวอร์ชันภาษาอังกฤษ
            </Link>{' '}
            หรือดูตัวอย่างการจับทีมแบบเต็มที่{' '}
            <Link
              href="/cookie-run-classic-builds"
              className="font-700 text-primary hover:underline"
            >
              Builds guide
            </Link>
          </p>
        </div>
      </div>

      <ThaiFooter englishHref="/cookie-run-classic-pet-tier-list" />
    </main>
  )
}
