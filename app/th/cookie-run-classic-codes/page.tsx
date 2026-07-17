import type { Metadata } from 'next'
import Link from 'next/link'
import { ThaiHeader, ThaiFooter } from '@/components/blocks'
import { ACTIVE_CODES, CODES_LAST_CHECKED, EXPIRED_CODES, SITE } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'โค้ด CookieRun Classic ล่าสุด (2026) พร้อมวิธีแลกโค้ด',
  description:
    'รวมโค้ด CookieRun Classic ที่ใช้งานได้ตอนนี้ พร้อมของรางวัลและวิธีแลกโค้ดทีละขั้นตอน อัปเดตล่าสุด',
  path: '/th/cookie-run-classic-codes',
  image: '/images/codes.png',
  imageAlt: 'CookieRun Classic โค้ด',
  alternateLanguages: {
    en: 'https://crclassic.wiki/cookie-run-classic-codes',
    th: 'https://crclassic.wiki/th/cookie-run-classic-codes',
    'x-default': 'https://crclassic.wiki/cookie-run-classic-codes',
  },
})

export default function ThaiCodesPage() {
  return (
    <main lang="th">
      <ThaiHeader current="/th/cookie-run-classic-codes" />

      <section className="border-b-2 border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <h1 className="text-balance font-heading text-3xl font-700 leading-tight text-foreground sm:text-4xl">
            โค้ด CookieRun Classic ล่าสุด
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            รวมโค้ดที่ใช้งานได้ตอนนี้ พร้อมของรางวัลและวิธีแลกโค้ด
            ตรวจสอบล่าสุดเมื่อ {CODES_LAST_CHECKED}
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl space-y-10 px-4 py-10">
        <section>
          <p className="text-sm leading-relaxed text-foreground/90">
            โค้ด (Code) คือของขวัญฟรีที่ Devsisters แจกผ่านช่องทางทางการ เช่น
            ประกาศในเกม, โซเชียลมีเดีย, หรืออีเวนต์เปิดตัว ปกติจะเป็นคริสตัล
            เหรียญ หรือไอเทมอัปเกรด แลกได้ผ่านหน้าเว็บคูปองทางการเท่านั้น
            ไม่ต้องดาวน์โหลดแอปหรือให้ข้อมูลบัญชีกับเว็บอื่น โค้ดมีอายุจำกัด
            บางตัวหมดอายุเร็วโดยไม่มีประกาศล่วงหน้า ควรแลกทันทีที่เห็น
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            โค้ดที่ใช้งานได้ตอนนี้
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            โค้ดเป็นภาษาอังกฤษ พิมพ์หรือคัดลอกให้ตรงตามนี้เป๊ะๆ (ตัวพิมพ์ใหญ่-เล็กมีผล)
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">โค้ด</th>
                  <th className="p-3 font-700">รางวัล</th>
                  <th className="p-3 font-700">เพิ่มเมื่อ</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVE_CODES.map((c) => (
                  <tr key={c.code} className="border-t-2 border-border bg-card">
                    <td className="p-3 font-mono font-700 text-foreground">
                      {c.code}
                    </td>
                    <td className="p-3 text-muted-foreground">{c.reward}</td>
                    <td className="p-3 text-muted-foreground">{c.added}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            วิธีแลกโค้ด
          </h2>
          <ol className="mt-4 ml-5 list-decimal space-y-3 text-sm leading-relaxed text-foreground/90">
            <li>
              เปิดหน้าเว็บแลกโค้ดอย่างเป็นทางการ:{' '}
              <a
                href={SITE.officialCouponUrl}
                target="_blank"
                rel="noopener"
                className="font-700 text-primary hover:underline"
              >
                coupon.devplay.com
              </a>
            </li>
            <li>กรอกบัญชี DevPlay (อีเมลหรือ Player ID ที่ดูได้ในเกม)</li>
            <li>กรอกโค้ดให้ตรงตามตัวสะกด แล้วกดยืนยัน</li>
            <li>เปิดเกมแล้วเข้าไปดูของรางวัลที่กล่องจดหมาย (Mail) ในเกม</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            ถ้าแลกแล้วของรางวัลไม่เข้า ให้ปิดเกมแล้วเปิดใหม่ก่อน
            และเช็กว่าแลกด้วยบัญชี Player ID ที่ถูกต้อง
            แต่ละโค้ดใช้ได้ครั้งเดียวต่อบัญชี
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            โค้ดที่หมดอายุแล้ว
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            เก็บไว้ให้เช็กว่าโค้ดที่เจอจากที่อื่นตายแล้วหรือยัง
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-border">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-foreground">
                  <th className="p-3 font-700">โค้ด</th>
                  <th className="p-3 font-700">รางวัล</th>
                  <th className="p-3 font-700">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {EXPIRED_CODES.map((c) => (
                  <tr key={c.code} className="border-t-2 border-border bg-card opacity-70">
                    <td className="p-3 font-mono font-700 text-foreground">
                      {c.code}
                    </td>
                    <td className="p-3 text-muted-foreground">{c.reward}</td>
                    <td className="p-3 text-muted-foreground">หมดอายุ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            ปัญหาที่พบบ่อยตอนแลกโค้ด
          </h2>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm leading-relaxed text-foreground/90">
            <li>
              <strong>ระบบแจ้งว่าโค้ดไม่ถูกต้อง:</strong>{' '}
              เช็กตัวสะกดอีกครั้ง โค้ดตัวพิมพ์ใหญ่-เล็กมีผล และห้ามมี
              เว้นวรรคติดมาตอนคัดลอก
            </li>
            <li>
              <strong>ระบบแจ้งว่าใช้ไปแล้ว:</strong>{' '}
              โค้ดแต่ละตัวใช้ได้ครั้งเดียวต่อบัญชี ถ้าเคยแลกด้วยบัญชีนี้
              มาก่อนจะไม่สามารถแลกซ้ำได้
            </li>
            <li>
              <strong>แลกสำเร็จแต่ของไม่เข้าเกม:</strong>{' '}
              ปิดเกมให้สนิทแล้วเปิดใหม่ ของรางวัลจะไปรออยู่ที่กล่องจดหมาย
              ไม่ได้เข้ากระเป๋าไอเทมทันที
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            คำถามที่พบบ่อย
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-700 text-foreground">
                โค้ดตัวพิมพ์ใหญ่-เล็กมีผลไหม?
              </p>
              <p className="mt-1 text-muted-foreground">
                มีผล พิมพ์หรือคัดลอกให้ตรงตามที่แสดงเป๊ะๆ ห้ามเว้นวรรคเกิน
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                โค้ดหนึ่งใช้ได้กี่ครั้ง?
              </p>
              <p className="mt-1 text-muted-foreground">
                ส่วนใหญ่ใช้ได้ครั้งเดียวต่อบัญชี ถ้ามีหลายบัญชีสามารถแลกได้
                บัญชีละ 1 ครั้ง
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                หาโค้ดใหม่ได้ที่ไหนบ้าง?
              </p>
              <p className="mt-1 text-muted-foreground">
                ติดตามประกาศในเกม, X (Twitter) ทางการ{' '}
                <a
                  href="https://x.com/CRClassicEN"
                  target="_blank"
                  rel="noopener"
                  className="font-700 text-primary hover:underline"
                >
                  @CRClassicEN
                </a>{' '}
                หรือกลับมาเช็กหน้านี้ เราอัปเดตทันทีที่ยืนยันโค้ดใหม่
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground/90">
          <p>
            ต้องการรายละเอียดเพิ่มเติม (โค้ดที่หมดอายุ, ปัญหาที่พบบ่อย)
            ดูได้ที่{' '}
            <Link
              href="/cookie-run-classic-codes"
              className="font-700 text-primary hover:underline"
            >
              เวอร์ชันภาษาอังกฤษ
            </Link>{' '}
            หรือดู{' '}
            <Link
              href="/th/cookie-run-classic-pet-tier-list"
              className="font-700 text-primary hover:underline"
            >
              จัดอันดับสัตว์เลี้ยง
            </Link>{' '}
            ว่าควรใช้เหรียญที่ได้จากโค้ดปั้นตัวไหนก่อน
          </p>
        </div>
      </div>

      <ThaiFooter englishHref="/cookie-run-classic-codes" />
    </main>
  )
}
