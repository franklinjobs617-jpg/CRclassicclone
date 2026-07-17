import type { Metadata } from 'next'
import Link from 'next/link'
import { ThaiHeader, ThaiFooter, TierImage, TierPill } from '@/components/blocks'
import { PET_TIERS, PET_TIER_UPDATED } from '@/lib/data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'จัดอันดับสัตว์เลี้ยง CookieRun Classic (Pet Tier List) พร้อมรูป',
  description:
    'จัดอันดับสัตว์เลี้ยง CookieRun Classic ตัวไหนควรปั้นก่อน พร้อมรูปประกอบทุกตัวและคำแนะนำการจับคู่กับคุกกี้และสมบัติ',
  path: '/th/cookie-run-classic-pet-tier-list',
  image: '/images/cookies.png',
  imageAlt: 'CookieRun Classic สัตว์เลี้ยง',
  alternateLanguages: {
    en: 'https://crclassic.wiki/cookie-run-classic-pet-tier-list',
    th: 'https://crclassic.wiki/th/cookie-run-classic-pet-tier-list',
    'x-default': 'https://crclassic.wiki/cookie-run-classic-pet-tier-list',
  },
})

const S_TIER_DETAILS = [
  {
    name: 'Mr. Limeguard',
    tier: 'S',
    role: 'ตัวคูณเศรษฐกิจ',
    pairedCookie: 'Potato Salad Cookie',
    desc: 'ปล่อยยาโปชั่นไลม์ที่ฟื้นพลังงานเล็กน้อยและสร้างเหรียญ เมื่อจับคู่กับ Potato Salad Cookie จะช่วยให้วิ่งได้นานขึ้นและเข้ารอบแปลงเหรียญได้บ่อยขึ้น เหมาะสำหรับสายฟาร์มเหรียญโดยเฉพาะ ถือเป็นคู่ที่แนะนำที่สุดสำหรับใครที่กำลังเก็บเหรียญเพื่ออัปเกรดคุกกี้และสมบัติตัวอื่นๆ',
    image: '/images/pets/mr-limeguard.webp',
  },
  {
    name: 'Lotus Sitter',
    tier: 'S',
    role: 'พาร์ทเนอร์เฉพาะทางสายคะแนน',
    pairedCookie: 'Lotus Root Phantom Cookie',
    desc: 'สร้างเยลลี่กลีบบัวเป็นระยะและเพิ่มความเร็วให้ Lotus Root Phantom Cookie ตอนใช้สกิล ความเร็วที่เพิ่มขึ้นทำให้วิ่งได้ระยะไกลขึ้นในแต่ละครั้ง เหมาะกับผู้เล่นที่เน้นทำคะแนนสูงสุดในลีก แต่ต้องมี Lotus Root Phantom Cookie ปลดล็อกแล้วถึงจะคุ้มค่าที่จะปั้น',
    image: '/images/pets/placeholder.png',
  },
  {
    name: 'Jellyco Cube',
    tier: 'S',
    role: 'ตัวเพิ่มคะแนนสากล',
    pairedCookie: 'ใช้ได้เกือบทุกคุกกี้',
    desc: 'สร้างลูกบาศก์เพิ่มคะแนนเป็นระยะ เพิ่มมูลค่าเยลลี่ทุกตัวในรัศมี เป็นเพ็ทเพิ่มคะแนนที่ทรงพลังที่สุดตัวหนึ่งในเกม จุดเด่นคือใช้ได้กับเกือบทุกคุกกี้ ไม่ต้องมีคุกกี้เฉพาะทาง เหมาะเป็นตัวเลือกแรกถ้ายังไม่แน่ใจว่าจะเล่นสายไหนถาวร',
    image: '/images/pets/jellyco-cube.webp',
  },
  {
    name: "Pirate's Bomb",
    tier: 'S',
    role: 'ระเบิดเหรียญก้อนใหญ่',
    pairedCookie: 'คุกกี้สายฟาร์มเหรียญ',
    desc: 'จุดระเบิดที่เปลี่ยนเยลลี่รอบตัวเป็นเหรียญทองมูลค่าสูง ด้านเศรษฐกิจถือเป็นเพ็ทที่แข็งแกร่งที่สุดตัวหนึ่งในเกม เหมาะจับคู่กับคุกกี้สายฟาร์มเหรียญตัวไหนก็ได้ ไม่จำเป็นต้องเป็น Pirate Cookie โดยเฉพาะ',
    image: '/images/pets/pirates-bomb.webp',
  },
  {
    name: 'Pancake Frisbee',
    tier: 'S',
    role: 'ตัวเก่งรอบด้าน',
    pairedCookie: 'ใช้ได้แทบทุกตัว',
    desc: 'ขว้างจานร่อนกวาดเก็บเยลลี่ทั่วจอแล้วนำเหรียญโบนัสกลับมา ปรับใช้ได้กับตัววิ่งและด่านเกือบทุกแบบ ถ้ายังไม่รู้จะเลือกตัวไหน นี่คือตัวเลือกที่ปลอดภัยที่สุด เพราะไม่มีจุดอ่อนชัดเจนในสถานการณ์ไหนเลย',
    image: '/images/pets/pancake-frisbee.webp',
  },
]

const A_TIER_DETAILS = [
  {
    name: 'Cotton Candy Birdie',
    tier: 'A',
    role: 'ตัวช่วยฟื้นคืนชีพสำหรับมือใหม่',
    pairedCookie: 'ใช้ได้ทุกคุกกี้ (สายเอาตัวรอด)',
    desc: 'ปล่อยหัวใจฟื้นคืนชีพและไอเทมฟื้นฟูพลังชีวิตระหว่างวิ่ง มีประโยชน์มากตอนกำลังเรียนรู้รูปแบบด่าน แต่ควรเปลี่ยนไปใช้เพ็ทสายคะแนนทันทีที่เริ่มไม่ตายซ้ำจุดเดิมแล้ว เก็บไว้ใช้ตอนเจอด่านใหม่ที่ยังไม่คุ้นเคย',
    image: '/images/pets/cotton-candy-birdie.webp',
  },
  {
    name: 'Wishing Star',
    tier: 'A',
    role: 'ตัวช่วยดูดของ',
    pairedCookie: 'ใช้ได้ทุกคุกกี้ (สายแม่เหล็ก)',
    desc: 'เรียกดาวที่ดูดเยลลี่ระยะไกลเข้ามาระหว่างที่สกิลทำงาน เหมาะมากกับด่านที่มีเหรียญและเยลลี่กระจายอยู่ทั่วจอ ซึ่งปกติจะเก็บไม่ทันหรือพลาดไป ช่วยเพิ่มรายได้ต่อรอบวิ่งโดยไม่ต้องเปลี่ยนวิธีเล่น',
    image: '/images/pets/wishing-star.webp',
  },
  {
    name: 'Gold Drop',
    tier: 'A',
    role: 'เครื่องผลิตเหรียญอัตโนมัติ',
    pairedCookie: 'ใช้ได้ทุกคุกกี้ (สายเหรียญ)',
    desc: 'สร้างหยดทองเป็นระยะที่แปลงเป็นเหรียญโบนัส เป็นรายได้แบบพาสซีฟที่เชื่อถือได้ ไม่ต้องกดใช้สกิลเอง แค่ติดตัวไว้ก็ทำงานเอง เหมาะกับผู้เล่นที่ไม่อยากจับจังหวะสกิลให้ยุ่งยาก',
    image: '/images/pets/gold-drop.webp',
  },
  {
    name: 'Flowercopter',
    tier: 'A',
    role: 'ตัวเก็บของลอยฟ้า',
    pairedCookie: 'ใช้ได้ทุกคุกกี้ (สายอากาศ)',
    desc: 'บินอยู่เหนือคุกกี้คอยเก็บเยลลี่ที่ลอยอยู่สูง ให้ความคุ้มครองทางอากาศ โดดเด่นในด่านที่มีเยลลี่วางตำแหน่งแนวตั้งซึ่งเพ็ทตัวอื่นเก็บไม่ถึง เหมาะสำหรับด่านที่มีแพลตฟอร์มเยอะๆ',
    image: '/images/pets/flowercopter.webp',
  },
]

const TIER_GROUPS: { tier: string; heading: string; desc: string }[] = [
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

function DetailCard({
  pet,
}: {
  pet: { name: string; tier: string; role: string; pairedCookie: string; desc: string; image: string }
}) {
  return (
    <div className="rounded-2xl border-2 border-border bg-card p-5">
      <div className="flex items-start gap-4">
        <TierImage src={pet.image} alt={pet.name} size={72} rounded="rounded-2xl" />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-base font-700 text-foreground">
              {pet.name}
            </h3>
            <TierPill tier={pet.tier} />
          </div>
          <p className="mt-1 text-xs font-600 text-primary">
            {pet.role} · คู่กับ {pet.pairedCookie}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {pet.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ThaiPetTierListPage() {
  return (
    <main lang="th">
      <ThaiHeader current="/th/cookie-run-classic-pet-tier-list" />

      <section className="border-b-2 border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <h1 className="text-balance font-heading text-3xl font-700 leading-tight text-foreground sm:text-4xl">
            จัดอันดับสัตว์เลี้ยง CookieRun Classic (Pet Tier List)
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            สัตว์เลี้ยงตัวไหนควรปั้นก่อน พร้อมรูปประกอบและคำแนะนำการจับคู่กับ
            คุกกี้แต่ละตัว จัดอันดับจาก S ถึง C ตามความคุ้มค่าจริงในเกม
            อัปเดตล่าสุด {PET_TIER_UPDATED}
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl space-y-10 px-4 py-10">
        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            สัตว์เลี้ยงสำคัญแค่ไหน?
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              สัตว์เลี้ยง (Pet) เป็นระบบเสริมที่ทำงานคู่กับคุกกี้หลักตลอดการวิ่ง
              แต่ละตัวมีจุดแข็งต่างกัน — บางตัวเน้นเพิ่มคะแนน บางตัวเน้นฟาร์ม
              เหรียญ บางตัวเน้นช่วยให้รอดชีวิตนานขึ้น การเลือกสัตว์เลี้ยงที่
              เข้ากับคุกกี้หลักและเป้าหมายการเล่นของตัวเอง สำคัญพอๆ กับการ
              อัปเกรดคุกกี้เลย เพราะสัตว์เลี้ยงที่แรงในทางทฤษฎีแต่ไม่เข้ากับ
              ทีม อาจให้ผลลัพธ์แย่กว่าตัวที่คะแนนดิบต่ำกว่าแต่จับคู่ถูก
            </p>
            <p>
              ในตารางด้านล่าง แต่ละตัวจะบอกว่าควรจับคู่กับคุกกี้ตัวไหน
              เพื่อดึงศักยภาพออกมาให้ได้มากที่สุด สัตว์เลี้ยงบางตัวจำเป็น
              ต้องมีคุกกี้เฉพาะทางถึงจะคุ้มค่า (เช่น Lotus Sitter ต้องมี
              Lotus Root Phantom Cookie) ในขณะที่บางตัวใช้ได้กับเกือบทุก
              คุกกี้โดยไม่ต้องรอปลดล็อกอะไรเพิ่ม
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            S Tier — ตัวหลักที่ควรปั้นก่อน
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            สัตว์เลี้ยงกลุ่มนี้ให้ผลตอบแทนสูงสุดไม่ว่าจะเล่นสายคะแนนหรือสาย
            ฟาร์มเหรียญ แต่ละตัวพลิกโฉมสไตล์การเล่นแบบใดแบบหนึ่งได้ชัดเจน
            ควรปั้นอย่างน้อย 1 ตัวจากกลุ่มนี้เป็นแกนหลักของทีม
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {S_TIER_DETAILS.map((pet) => (
              <DetailCard key={pet.name} pet={pet} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl font-700 text-foreground">
            A Tier — ตัวรองที่ใช้งานได้จริง
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            แข็งแกร่งในบทบาทเฉพาะทาง เหมาะเสริมทีมหลังจากมีตัว S Tier แล้ว
            หรือใช้เป็นตัวเสริมชั่วคราวระหว่างเก็บทรัพยากรปั้นตัว S Tier
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {A_TIER_DETAILS.map((pet) => (
              <DetailCard key={pet.name} pet={pet} />
            ))}
          </div>
        </section>

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
                        {pet.bestForThExtra && ` ${pet.bestForThExtra}`}
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
            จับคู่สัตว์เลี้ยงกับสมบัติยังไงให้คุ้ม?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            สัตว์เลี้ยงทำงานได้ดีที่สุดเมื่อจับคู่กับสมบัติที่เสริมบทบาท
            เดียวกัน ไม่ใช่สุ่มใส่ตามใจชอบ ตัวอย่างเช่น ถ้าใช้ Mr. Limeguard
            สายฟาร์มเหรียญ ควรใส่สมบัติหมวดเศรษฐกิจ (Economy) คู่กันไปด้วย
            เพื่อดันรายได้ต่อรอบให้สูงสุด ส่วนใครเล่น Jellyco Cube สายคะแนน
            ควรจับคู่กับสมบัติหมวดคะแนน (Score) แทน ดูรายละเอียดสมบัติแต่ละ
            หมวดได้ที่{' '}
            <Link
              href="/cookie-run-classic-treasure-tier-list"
              className="font-700 text-primary hover:underline"
            >
              Treasure Tier List (ภาษาอังกฤษ)
            </Link>
          </p>
        </section>

        <section className="rounded-2xl border-2 border-border bg-card p-5">
          <h2 className="font-heading text-lg font-700 text-foreground">
            ข้อผิดพลาดที่พบบ่อย
          </h2>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm leading-relaxed text-foreground/90">
            <li>
              <strong>ปั้นหลายตัวพร้อมกัน:</strong>{' '}
              ทรัพยากรอัปเกรดมีจำกัด การกระจายไปหลายตัวทำให้ไม่มีตัวไหนแรง
              พอจะใช้งานจริง ควรปั้นตัวเดียวให้จบก่อนค่อยขยาย
            </li>
            <li>
              <strong>เลือกตามชื่อเสียงแทนที่จะดูว่าเข้ากับคุกกี้ไหม:</strong>{' '}
              สัตว์เลี้ยง S Tier ที่ต้องมีคุกกี้เฉพาะทาง (เช่น Lotus Sitter)
              จะไม่มีประโยชน์เลยถ้ายังไม่ปลดล็อกคุกกี้คู่ของมัน
            </li>
            <li>
              <strong>ใช้สัตว์เลี้ยงสายเอาตัวรอดตลอดไป:</strong>{' '}
              Cotton Candy Birdie มีประโยชน์แค่ช่วงกำลังเรียนรู้ด่าน
              เมื่อคล่องแล้วควรเปลี่ยนไปใช้ตัวที่เพิ่มคะแนนหรือเหรียญแทน
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border-2 border-border bg-card p-5">
          <h2 className="font-heading text-lg font-700 text-foreground">
            ควรเลือกสัตว์เลี้ยงตัวแรกยังไง?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="font-700 text-foreground text-sm">
                เพิ่งเริ่มเล่น
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                เลือก Pancake Frisbee — ใช้ได้กับทุกคุกกี้ ไม่ต้องรอปลดล็อก
                อะไรเพิ่ม เป็นตัวเลือกที่ปลอดภัยที่สุดสำหรับบัญชีใหม่
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground text-sm">
                เน้นฟาร์มเหรียญ
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Mr. Limeguard คู่กับ Potato Salad Cookie คือคอมโบฟาร์มเหรียญ
                ที่แรงที่สุดตอนนี้ ควรปั้นให้เต็มก่อนขยับไปสายอื่น
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground text-sm">
                เน้นแข่งลีก
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Jellyco Cube ใช้ได้กับคุกกี้สายคะแนนแทบทุกตัว เป็นตัวเลือก
                ที่ปลอดภัยที่สุดก่อนจะขยับไปหาสัตว์เลี้ยงเฉพาะทางอย่าง
                Lotus Sitter
              </p>
            </div>
          </div>
        </section>

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
                แล้วค่อยขยายทีมทีหลัง สัตว์เลี้ยงตัวที่สองมักมีประโยชน์
                น้อยกว่าการอัปเกรดตัวแรกให้เต็มระดับ
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                สัตว์เลี้ยงกับสมบัติ อันไหนสำคัญกว่ากัน?
              </p>
              <p className="mt-1 text-muted-foreground">
                สำคัญพอกัน ทั้งสองระบบต้องทำงานร่วมกัน สัตว์เลี้ยงที่ดีแต่
                ไม่มีสมบัติรองรับ อาจให้ผลลัพธ์แย่กว่าที่คิด
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                ทำไมสัตว์เลี้ยงบางตัวยังไม่มีรูป?
              </p>
              <p className="mt-1 text-muted-foreground">
                บางตัว (เช่น Lotus Sitter) ยังรอภาพหน้าจอจริงจากในเกม
                จะอัปเดตให้เร็วที่สุดเมื่อมีภาพพร้อม
              </p>
            </div>
            <div>
              <p className="font-700 text-foreground">
                สัตว์เลี้ยง A Tier คุ้มกับปั้นไหม?
              </p>
              <p className="mt-1 text-muted-foreground">
                คุ้มถ้าตรงกับสไตล์การเล่น เช่น Wishing Star เหมาะกับด่านที่
                เยลลี่กระจัดกระจาย แต่ถ้าเทียบกับตัว S Tier ในบทบาทเดียวกัน
                ตัว S Tier มักให้ผลตอบแทนต่อการลงทุนที่ดีกว่า
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground/90">
          <p>
            ต้องการรายละเอียดเชิงลึกกว่านี้ (กลไกสกิลแบบเต็ม, ตารางอัปเกรด,
            คำแนะนำการจับทีมแบบละเอียด) ดูได้ที่{' '}
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
