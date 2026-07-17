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
    <main lang="th">
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
