// Central content data for CookieRun Classic wiki.

export const SITE = {
  name: 'CRClassic.wiki',
  domain: 'crclassic.wiki',
  tagline: 'The practical CookieRun Classic hub',
  lastSiteUpdate: 'July 9, 2026',
  officialCouponUrl: 'https://coupon.devplay.com/cookierunclassic',
}

export type NavItem = {
  label: string
  href: string
  short: string
  blurb: string
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: 'Codes',
    href: '/cookie-run-classic-codes',
    short: 'Free crystals & rewards',
    blurb: 'Every active CookieRun Classic code with rewards and redeem steps.',
  },
  {
    label: 'Tier List',
    href: '/cookie-run-classic-tier-list',
    short: 'Best Cookies ranked',
    blurb: 'Cookies ranked for early progress, score runs and upgrade order.',
  },
  {
    label: 'Pet Tier List',
    href: '/cookie-run-classic-pet-tier-list',
    short: 'Best Pets ranked',
    blurb: 'The strongest pets for beginners, score runs and pairings.',
  },
  {
    label: 'Treasure Tier List',
    href: '/cookie-run-classic-treasure-tier-list',
    short: 'Best Treasures ranked',
    blurb: 'Treasures worth upgrading first for score and survival.',
  },
  {
    label: 'Builds',
    href: '/cookie-run-classic-builds',
    short: 'Full loadout combos',
    blurb: 'Best Cookie, Pet and Treasure combos for League, coins and clearing quests.',
  },
  {
    label: 'PC Guide',
    href: '/cookie-run-classic-pc',
    short: 'Play on desktop',
    blurb: 'Run CookieRun Classic on PC with Play Games or an emulator.',
  },
  {
    label: 'Code Redeem',
    href: '/cookie-run-classic-code-redeem',
    short: 'Step-by-step redeem',
    blurb: 'Redeem coupons with your DevPlay account or Player ID.',
  },
  {
    label: 'Beginner Guide',
    href: '/cookie-run-classic-beginner-guide',
    short: 'First-week route',
    blurb: 'A practical first-day and first-week route for new accounts.',
  },
  {
    label: 'Reroll',
    href: '/cookie-run-classic-reroll',
    short: 'Keep or restart',
    blurb: 'Decide whether rerolling is worth your time before investing.',
  },
  {
    label: 'Meta',
    href: '/cookie-run-classic-meta',
    short: 'What to focus on now',
    blurb: 'Current priorities for accounts, score runs, Power+, and upgrades.',
  },
  {
    label: 'Wiki Hub',
    href: '/cookie-run-classic-wiki',
    short: 'All guides',
    blurb: 'Find the right CookieRun Classic guide by task and account stage.',
  },
  {
    label: 'Classic vs Kingdom vs Kakao',
    href: '/cookie-run-classic-vs-kingdom',
    short: 'Which game is which',
    blurb: 'What separates CookieRun Classic from Kingdom, Kakao, and the old LINE version.',
  },
]

// ---------- Codes ----------
export type CodeStatus = 'active' | 'expired'
export type GameCode = {
  code: string
  reward: string
  status: CodeStatus
  added: string
  expiresAt?: string
  note?: string
}

export const CODES_LAST_CHECKED = 'July 6, 2026'

export const ACTIVE_CODES: GameCode[] = [
  {
    code: 'AMAZINGKIWICOOK2',
    reward: '20 Crystals',
    status: 'active',
    added: 'Jun 29, 2026',
    note: 'Confirmed working at last check. Case-sensitive.',
  },
  {
    code: 'CRCLASSICLAUNCH',
    reward: '3,000 Coins + 1 Energy Potion',
    status: 'active',
    added: 'Jun 25, 2026',
    note: 'Global launch reward. One use per account.',
  },
  {
    code: 'OVENBREAKBACK',
    reward: '10 Crystals + 5 Rainbow Cubes',
    status: 'active',
    added: 'Jun 26, 2026',
  },
  {
    code: 'WITCHESOVEN500',
    reward: '500 Coins',
    status: 'active',
    added: 'Jun 27, 2026',
  },
]

export const EXPIRED_CODES: GameCode[] = [
  {
    code: 'HELLOCOOKIE',
    reward: '1,000 Coins',
    status: 'expired',
    added: 'Jun 25, 2026',
  },
  {
    code: 'PREREG2MILLION',
    reward: '15 Crystals',
    status: 'expired',
    added: 'Jun 24, 2026',
    note: 'Pre-registration reward, now closed.',
  },
]

// ---------- Cookie tier list ----------
export type Tier = 'S' | 'A' | 'B' | 'C'
export type CookieTier = {
  name: string
  tier: Tier
  role: string
  bestFor: string
  earlyValue: string
  upgradePriority: string
  image: string
}

export const COOKIE_TIER_UPDATED = 'July 6, 2026'

export const COOKIE_TIERS: CookieTier[] = [
  // S TIER Top Meta
  {
    name: 'Princess Bari Cookie',
    tier: 'S',
    role: 'Sustain / High Score',
    bestFor: 'Consistent competitive League score runs',
    earlyValue: 'Her Flower Jelly gauge charges a Sacred Tree that revives her once per run. That single revive makes her the safest pick for both new players and League grinders.',
    upgradePriority: 'Max first. She offers the best score safety net in the roster forgiving enough for beginners, strong enough for veterans.',
    image: '/images/cookies/princess-bari-cookie.png',
  },
  {
    name: 'Lotus Root Phantom Cookie',
    tier: 'S',
    role: 'Extreme Scoring',
    bestFor: 'Endgame League leaderboard records',
    earlyValue: 'Hard to unlock early, but once you do, no other cookie pushes score higher. The ceiling is real, it just takes practice to reach it.',
    upgradePriority: 'Max immediately once unlocked. Best paired with Lotus Sitter.',
    image: '/images/cookies/placeholder.png',
  },
  {
    name: 'Potato Salad Cookie',
    tier: 'S',
    role: 'Legendary Coin Farming',
    bestFor: 'Ultimate coin farming efficiency loops',
    earlyValue: 'The go-to cookie for gold. Unlock him early and your whole account moves faster upgrades, Energy levels, everything costs coins and he prints them.',
    upgradePriority: 'Max immediately. His gold output sustains the upgrade costs for the rest of your S-tier roster.',
    image: '/images/cookies/potato-salad-cookie.png',
  },
  {
    name: 'Wind Archer Cookie',
    tier: 'S',
    role: 'Speed / Scatter Score',
    bestFor: 'High-speed scoring with screen-clearing arrow shots',
    earlyValue: 'Fires homing arrows that wipe obstacles and drop high-value jellies. The speed boost during his skill window covers more ground per activation.',
    upgradePriority: 'Max after establishing a coin farmer. Pairs best with Windy for maximum skill uptime.',
    image: '/images/cookies/wind-archer-cookie.png',
  },
  // A TIER Strong Picks
  {
    name: 'Fire Spirit Cookie',
    tier: 'A',
    role: 'Score / Burst',
    bestFor: 'Burst scoring during obstacle-dense zones',
    earlyValue: 'Shines in bursts during dense obstacle sections, but only with strong treasures backing him up. Not a first pick.',
    upgradePriority: 'Upgrade after establishing your daily farmer and scoring main.',
    image: '/images/cookies/fire-spirit-cookie.png',
  },
  {
    name: 'Buttercream Choco Cookie',
    tier: 'A',
    role: 'Passive / Relay Coin Bonus',
    bestFor: 'Relay (second-runner) position on coin runs',
    earlyValue: 'Do not put him in the lead slot. His value comes at the end of a run the relay bonus multiplies your gold by a flat percentage.',
    upgradePriority: 'Max his level to unlock the highest flat coin-percentage bonus, but only after your primary runner is upgraded.',
    image: '/images/cookies/buttercream-choco-cookie.png',
  },
  {
    name: 'Hero Cookie',
    tier: 'A',
    role: 'Score / Transformation',
    bestFor: 'Mid-to-late game scoring routes',
    earlyValue: 'Enters a powered-up hero state that boosts score and clears obstacles briefly. Strong mid-run but needs treasures to sustain.',
    upgradePriority: 'Upgrade after your main runner. A solid second-scoring option for competitive runs.',
    image: '/images/cookies/hero-cookie.png',
  },
  {
    name: 'Moonlight Cookie',
    tier: 'A',
    role: 'Score / Starfall',
    bestFor: 'Scoring runs with consistent star jelly generation',
    earlyValue: 'Calls down star jellies that grant burst score and creates a dream-like aura. High ceiling but requires practice to position under star drops.',
    upgradePriority: 'Invest after you have a reliable daily farmer. Shines on long, obstacle-light routes.',
    image: '/images/cookies/moonlight-cookie.png',
  },
  {
    name: 'Sea Fairy Cookie',
    tier: 'A',
    role: 'Score / Wave Clear',
    bestFor: 'Clearing dense obstacle sections with tidal waves',
    earlyValue: 'Summons a massive tidal wave that clears obstacles and creates water-drop jellies. Excellent for survival-heavy stages where obstacles pile up.',
    upgradePriority: 'Upgrade after securing your main scorer. A strong flex pick for obstacle-dense League tracks.',
    image: '/images/cookies/sea-fairy-cookie.png',
  },
  {
    name: 'Angel Cookie',
    tier: 'A',
    role: 'Magnet / Utility',
    bestFor: 'Collecting scattered jellies on wide routes',
    earlyValue: 'Unlimited magnetic aura pulls in distant jellies without needing to deviate from the safe path. Lower base Energy compensates for the utility.',
    upgradePriority: 'Useful as a second runner in Relay mode. Upgrade modestly the magnet works at any level.',
    image: '/images/cookies/angel-cookie.png',
  },
  {
    name: 'Ninja Cookie',
    tier: 'A',
    role: 'Speed / Dash',
    bestFor: 'Speed-focused runs with frequent skill windows',
    earlyValue: 'Dashes forward rapidly during skill, covering ground and collecting jellies fast. Great for time-limited events and fast farming.',
    upgradePriority: 'Good early investment for speed-based progression. Less useful on obstacle-dense tracks.',
    image: '/images/cookies/ninja-cookie.png',
  },
  {
    name: 'Skating Queen Cookie',
    tier: 'A',
    role: 'Endurance / Efficiency',
    bestFor: 'Extended runs with lower Energy drain',
    earlyValue: 'Slows Energy decay during her skill, stretching runs by significant margins. Pairs well with survival pets for maximum distance.',
    upgradePriority: 'Upgrade after your coin farmer. An excellent second-runner for relay teams on long stages.',
    image: '/images/cookies/skating-queen-cookie.png',
  },
  {
    name: 'Mint Choco Cookie',
    tier: 'A',
    role: 'Versatile Score',
    bestFor: 'Balanced scoring and survival across multiple stages',
    earlyValue: 'Creates a minty breeze that boosts score and refreshes skill cooldowns slightly. A well-rounded pick that performs decently everywhere.',
    upgradePriority: 'A safe mid-game investment. Won\'t top leaderboards but rarely underperforms.',
    image: '/images/cookies/mint-choco-cookie.png',
  },
  // B TIER Solid but Situational
  {
    name: 'Pirate Cookie',
    tier: 'B',
    role: 'Coin / Ghost Revival',
    bestFor: 'Coin generation with a built-in revival safety net',
    earlyValue: 'Summons coin-producing ghosts and revives once upon death as a ghost. Good bridge between coin farming and survival.',
    upgradePriority: 'Upgrade if you lack Potato Salad for coin farming. Otherwise, invest in stronger scorers.',
    image: '/images/cookies/pirate-cookie.png',
  },
  {
    name: 'Knight Cookie',
    tier: 'B',
    role: 'Shield / Survival',
    bestFor: 'Protecting against obstacle hits on unfamiliar stages',
    earlyValue: 'Activates a shield that absorbs one obstacle hit. Great for learning new stage layouts but offers no scoring benefit.',
    upgradePriority: 'Low. Use while learning stages, then swap to a scoring or farming cookie.',
    image: '/images/cookies/knight-cookie.png',
  },
  {
    name: 'Princess Cookie',
    tier: 'B',
    role: 'Beginner Score',
    bestFor: 'Early-game score runs before unlocking premium cookies',
    earlyValue: 'Basic scoring ability with a simple skill that spawns bonus jellies. Outclassed by Princess Bari in every dimension once you unlock her.',
    upgradePriority: 'Invest only until you unlock an S-tier or A-tier scorer. Do not take past level 5.',
    image: '/images/cookies/princess-cookie.png',
  },
  {
    name: 'Muscle Cookie',
    tier: 'B',
    role: 'Obstacle Destruction',
    bestFor: 'Bulldozing through obstacle-heavy sections',
    earlyValue: 'Punches through obstacles during his skill, clearing the path ahead. Useful on specific stages but offers low scoring potential.',
    upgradePriority: 'Niche upgrade. Only invest if a specific stage blocks your progress repeatedly.',
    image: '/images/cookies/muscle-cookie.png',
  },
  {
    name: 'Zombie Cookie',
    tier: 'B',
    role: 'Revival / Slow Runner',
    bestFor: 'Surviving longer with a guaranteed post-death revival',
    earlyValue: 'Revives once after dying and continues running in a slower zombie state. Pairs well with survival treasures for maximum endurance.',
    upgradePriority: 'Low. The revival is useful but the scoring penalty in zombie form limits his ceiling.',
    image: '/images/cookies/zombie-cookie.png',
  },
  {
    name: 'Coffee Cookie',
    tier: 'B',
    role: 'Speed Burst / Energy',
    bestFor: 'Quick bursts of speed on open track sections',
    earlyValue: 'Gets a temporary speed boost and energy refill during his skill. Good for rapid farming on straightforward stages.',
    upgradePriority: 'Decent early investment for speed farming. Replace with Ninja Cookie once unlocked.',
    image: '/images/cookies/coffee-cookie.png',
  },
  {
    name: 'Pancake Cookie',
    tier: 'B',
    role: 'Generalist / Jump Boost',
    bestFor: 'Flexible runs with enhanced jump mechanics',
    earlyValue: 'Flips pancakes during his skill that act as bonus platforms and score items. Easy to use but scales poorly into late game.',
    upgradePriority: 'Fine for early stages. Do not invest heavily his ceiling is lower than dedicated scorers.',
    image: '/images/cookies/pancake-cookie.png',
  },
  {
    name: 'Skater Cookie',
    tier: 'B',
    role: 'Speed / Trick Score',
    bestFor: 'Speed-based scoring with trick bonuses',
    earlyValue: 'Performs skateboard tricks during his skill that generate bonus points. Fast but fragile obstacles punish him harder than most cookies.',
    upgradePriority: 'A fun pick for speed runs. Not competitive for League scoring.',
    image: '/images/cookies/skater-cookie.png',
  },
  // C TIER Starters / Basic
  {
    name: 'GingerBrave',
    tier: 'C',
    role: 'Starter / Basic Run',
    bestFor: 'Learning basic jump/slide physics',
    earlyValue: 'You start with him. He handles fine and the controls click fast, but there is no real scoring potential.',
    upgradePriority: 'Low. Swap to Potato Salad or Bari as soon as you pull them.',
    image: '/images/cookies/brave-cookie.png',
  },
  {
    name: 'Strawberry Cookie',
    tier: 'C',
    role: 'Basic Coin Pickup',
    bestFor: 'Very early casual coin farming',
    earlyValue: 'Picks up basic coins okay on day one. Once Potato Salad shows up, she stays benched.',
    upgradePriority: 'Do not invest. Save coins for S-tier economic characters.',
    image: '/images/cookies/strawberry-cookie.png',
  },
  {
    name: 'GingerBright',
    tier: 'C',
    role: 'Starter / Magnet',
    bestFor: 'Very early game before unlocking Angel Cookie',
    earlyValue: 'Comes with a small magnetic aura that helps new players collect jellies. Quickly outclassed by Angel Cookie.',
    upgradePriority: 'Do not invest. Upgrade to Angel Cookie as soon as possible.',
    image: '/images/cookies/bright-cookie.png',
  },
  {
    name: 'Cloud Cookie',
    tier: 'C',
    role: 'Basic Survival / Float',
    bestFor: 'Very early stage learning with gentle float mechanics',
    earlyValue: 'Floats briefly after jumps, softening landings. Useful for the first few stages but no scoring benefit.',
    upgradePriority: 'Skip. Even a modestly upgraded B-tier cookie outperforms her.',
    image: '/images/cookies/cloud-cookie.png',
  },
  {
    name: 'Cream Cookie',
    tier: 'C',
    role: 'Basic Score / Puff',
    bestFor: 'Very early casual scoring before unlocking premium cookies',
    earlyValue: 'Puffs cream jellies during her skill for a modest score bump. Entirely replaceable once you pull any A-tier or above.',
    upgradePriority: 'Do not invest. Purely a placeholder until better cookies arrive.',
    image: '/images/cookies/cream-cookie.png',
  },
]

// ---------- Pet tier list ----------
export type PetTier = {
  name: string
  tier: Tier
  pairedCookie: string
  bestFor: string
  /** Short Thai gist for /th pages — not a literal translation, see CHANGELOG. */
  bestForTh?: string
  /** Optional second sentence for B-tier detail on /th pages — real usage context, not padding. */
  bestForThExtra?: string
  earlyValue: string
  upgradePriority: string
  image: string
}

export const PET_TIER_UPDATED = 'July 6, 2026'

export const PET_TIERS: PetTier[] = [
  // S TIER -- Essential / Best-in-Role
  {
    name: 'Mr. Limeguard',
    tier: 'S',
    pairedCookie: 'Potato Salad Cookie',
    bestFor: 'High-speed coin grinding sessions',
    bestForTh: 'ฟาร์มเหรียญเร็ว',
    earlyValue: 'Drops Lime Potions that restore Energy and spawn extra coins. Combined with Potato Salad, these potions extend run duration and maximize his coin conversion cycles.',
    upgradePriority: 'Max alongside Potato Salad Cookie to form the highest yielding economic team.',
    image: '/images/pets/mr-limeguard.webp',
  },
  {
    name: 'Lotus Sitter',
    tier: 'S',
    pairedCookie: 'Lotus Root Phantom Cookie',
    bestFor: 'Endgame scoring synergy',
    bestForTh: 'เสริมคะแนนช่วงปลายเกม',
    earlyValue: 'Generates specialized Lotus Jellies and grants speed boosts to Lotus Root during her skill windows.',
    upgradePriority: 'Max alongside Lotus Root Phantom Cookie for maximum high scores.',
    image: '/images/pets/placeholder.png',
  },
  {
    name: 'Jellyco Cube',
    tier: 'S',
    pairedCookie: 'Any Cookie (Score)',
    bestFor: 'Universal score multiplier for competitive runs',
    bestForTh: 'เพิ่มคะแนนได้ทุกทีม เหมาะกับการแข่งลีก',
    earlyValue: 'Periodically creates a score-multiplying cube that boosts all jelly values within its radius. One of the highest-impact pets for raw scoring output.',
    upgradePriority: 'Max after your main runner. A top-tier scoring pet that works with nearly any cookie.',
    image: '/images/pets/jellyco-cube.webp',
  },
  {
    name: "Pirate's Bomb",
    tier: 'S',
    pairedCookie: 'Pirate Cookie / Any Coin Farmer',
    bestFor: 'Massive coin explosions during skill windows',
    bestForTh: 'ระเบิดเหรียญก้อนใหญ่ตอนใช้สกิล',
    earlyValue: 'Detonates a bomb at regular intervals that converts nearby jellies into high-value gold coins. Economically one of the strongest pets in the game.',
    upgradePriority: 'Max alongside your coin farming cookie of choice for accelerated account progression.',
    image: '/images/pets/pirates-bomb.webp',
  },
  {
    name: 'Pancake Frisbee',
    tier: 'S',
    pairedCookie: 'Pancake Cookie / Any Generalist',
    bestFor: 'Flexible support across scoring and coin runs',
    bestForTh: 'ใช้ได้ทั้งสายคะแนนและสายฟาร์มเหรียญ',
    earlyValue: 'Tosses a frisbee that collects jellies and returns with bonus coins. Adaptable to almost any runner and situation.',
    upgradePriority: 'A top-tier generalist pet. Invest after your role-specific S-tier pets.',
    image: '/images/pets/pancake-frisbee.webp',
  },
  // A TIER Strong Support
  {
    name: 'Cotton Candy Birdie',
    tier: 'A',
    pairedCookie: 'Any Cookie (Survival)',
    bestFor: 'Early progression and learning obstacle patterns',
    bestForTh: 'เหมาะมือใหม่ ช่วยเรียนรู้ด่าน',
    earlyValue: 'Drops revival hearts and extra health items. Great for learning stage layouts without burning through your energy.',
    upgradePriority: 'Keep low. Swap out for scoring pets once you learn stage layouts.',
    image: '/images/pets/cotton-candy-birdie.webp',
  },
  {
    name: 'Wishing Star',
    tier: 'A',
    pairedCookie: 'Any Cookie (Magnet)',
    bestFor: 'Collecting hard-to-reach jellies on wide routes',
    bestForTh: 'ดูดเยลลี่ที่เก็บยากในเส้นทางกว้าง',
    earlyValue: 'Summons a wishing star that pulls in distant jellies during its duration. Excellent for stages with scattered coin and jelly layouts.',
    upgradePriority: 'Upgrade after your main pairing. Provides strong utility without needing a specific cookie.',
    image: '/images/pets/wishing-star.webp',
  },
  {
    name: 'Gold Drop',
    tier: 'A',
    pairedCookie: 'Any Cookie (Coin)',
    bestFor: 'Steady coin generation without skill dependence',
    bestForTh: 'สร้างเหรียญสม่ำเสมอ ไม่ต้องพึ่งสกิล',
    earlyValue: 'Produces a golden drop at regular intervals that converts into bonus coins. Reliable passive income that does not require any specific cookie skill to activate.',
    upgradePriority: 'A solid mid-game investment for passive coin generation. Great second pet for farming.',
    image: '/images/pets/gold-drop.webp',
  },
  {
    name: 'White Gold Drop',
    tier: 'A',
    pairedCookie: 'Any Cookie (High Score)',
    bestFor: 'Enhanced gold value on high-scoring runs',
    bestForTh: 'เพิ่มมูลค่าเหรียญตอนทำคะแนนสูง',
    earlyValue: 'Generates platinum-grade drops worth more coins than standard Gold Drop. Requires longer runs to maximize value.',
    upgradePriority: 'Upgrade after Gold Drop if you consistently reach Bonus Time in your runs.',
    image: '/images/pets/white-gold-drop.webp',
  },
  {
    name: 'Brain Gum',
    tier: 'A',
    pairedCookie: 'Cream Cookie / Any Score Cookie',
    bestFor: 'Boosting score during extended skill windows',
    bestForTh: 'เพิ่มคะแนนตอนสกิลออกฤทธิ์นาน',
    earlyValue: 'Stretches skill duration and boosts point values while active. Particularly effective with cookies that have long transformation skills.',
    upgradePriority: 'Upgrade if your main runner has a long-duration skill. Otherwise, prioritize coin or survival pets first.',
    image: '/images/pets/brain-gum.webp',
  },
  {
    name: "Dragon's Tail",
    tier: 'A',
    pairedCookie: 'Any Cookie (Speed)',
    bestFor: 'Speed-focused runs and time-limited events',
    bestForTh: 'เน้นความเร็ว เหมาะกับอีเวนต์จำกัดเวลา',
    earlyValue: 'Grants a speed boost and tail-whips obstacles within range. Combines survival utility with speed for faster stage clears.',
    upgradePriority: 'Invest if you focus on speed-based progression. Less valuable on obstacle-dense tracks.',
    image: '/images/pets/dragons-tail.webp',
  },
  {
    name: 'Flowercopter',
    tier: 'A',
    pairedCookie: 'Any Cookie (Air)',
    bestFor: 'Collecting airborne jellies on vertical stages',
    bestForTh: 'เก็บเยลลี่ลอยฟ้าในด่านแนวตั้ง',
    earlyValue: 'Hovers above the cookie collecting high-altitude jellies and providing aerial coverage. Shines on stages with vertical jelly placement.',
    upgradePriority: 'Situational upgrade. Good on specific stages but not a universal pick.',
    image: '/images/pets/flowercopter.webp',
  },
  // B TIER Decent Utility
  {
    name: 'Lucky Dice Bros',
    tier: 'B',
    pairedCookie: 'Alchemist Cookie / Any Gambler',
    bestFor: 'Random bonus rewards during runs',
    bestForTh: 'สุ่มโบนัสระหว่างวิ่ง',
    bestForThExtra: 'เหมาะเป็นตัวเสริมสนุกๆ มากกว่าตัวหลัก เพราะผลตอบแทนไม่แน่นอน',
    earlyValue: 'Rolls dice that randomly grant coins, score boosts, or energy. Fun and occasionally lucrative but inconsistent.',
    upgradePriority: 'Low priority. The randomness makes it unreliable for competitive play.',
    image: '/images/pets/lucky-dice-bros.webp',
  },
  {
    name: 'Ms. Do-Re-Mi',
    tier: 'B',
    pairedCookie: 'Any Cookie (Music/Sync)',
    bestFor: 'Rhythm-based score boosts on beat-timed stages',
    bestForTh: 'เพิ่มคะแนนตามจังหวะเพลงในด่านดนตรี',
    bestForThExtra: 'ใช้ได้ดีเฉพาะด่านที่มีจังหวะเพลงชัดเจน นอกด่านแบบนี้จะเสียเปรียบเพ็ทตัวอื่น',
    earlyValue: 'Creates musical notes that boost score when collected in rhythm. Rewards players who can maintain consistent timing.',
    upgradePriority: 'A niche pick for rhythm-focused players. Skip if you prefer straightforward scoring.',
    image: '/images/pets/ms-do-re-mi.webp',
  },
  {
    name: 'Mr. Fa-Sol-La-Si',
    tier: 'B',
    pairedCookie: 'Any Cookie (Music/Sync)',
    bestFor: 'Harmonic pair with Ms. Do-Re-Mi for music-themed runs',
    bestForTh: 'จับคู่กับ Ms. Do-Re-Mi สำหรับด่านดนตรี',
    bestForThExtra: 'ควรมีคู่กันทั้งสองตัวถ้าจะเล่นสายดนตรีจริงจัง แยกใช้ตัวเดียวจะได้ประโยชน์ไม่เต็มที่',
    earlyValue: 'Works alongside Ms. Do-Re-Mi to create harmonic jelly combos. Stronger together but takes two pet slots.',
    upgradePriority: 'Only invest if using both music pets together. Alone, he underperforms.',
    image: '/images/pets/mr-fa-sol-la-si.webp',
  },
  {
    name: 'Ginger Ghost',
    tier: 'B',
    pairedCookie: 'GingerBrave / Brave Cookie',
    bestFor: 'Bonus score after revival events',
    bestForTh: 'ได้คะแนนโบนัสหลังฟื้นคืนชีพ',
    bestForThExtra: 'เหมาะกับบัญชีที่ใช้คุกกี้สายฟื้นคืนชีพ ถ้าไม่ตายบ่อยจะไม่ค่อยได้ใช้ประโยชน์',
    earlyValue: 'Haunts the run after a revival, creating ghost jellies worth bonus points. Only triggers when your cookie revives.',
    upgradePriority: 'Situational. Only useful if your strategy revolves around intentional revival mechanics.',
    image: '/images/pets/ginger-ghost.webp',
  },
  {
    name: 'Enchanted Locket',
    tier: 'B',
    pairedCookie: 'Princess Cookie / Any Coin Farmer',
    bestFor: 'Coin generation tied to obstacle passes',
    bestForTh: 'สร้างเหรียญเมื่อผ่านสิ่งกีดขวาง',
    bestForThExtra: 'เหมาะกับด่านที่มีสิ่งกีดขวางถี่ๆ ด่านโล่งจะได้ผลตอบแทนน้อยกว่า',
    earlyValue: 'Opens at intervals to release coins based on obstacles passed. Decent early-game coin generation before unlocking premium pets.',
    upgradePriority: 'Use early, replace with Gold Drop or Pirate\'s Bomb once available.',
    image: '/images/pets/enchanted-locket.webp',
  },
  {
    name: 'Bean Drop Duo',
    tier: 'B',
    pairedCookie: 'Any Cookie (Score)',
    bestFor: 'Double-drop scoring with synchronized bean jellies',
    bestForTh: 'ทำคะแนนคู่จากเยลลี่ถั่วที่มาพร้อมกัน',
    bestForThExtra: 'ต้องจับจังหวะเก็บเยลลี่ถั่วให้พร้อมกัน ถ้าจับไม่ทันจะได้คะแนนน้อยกว่าที่คิด',
    earlyValue: 'Two beans drop simultaneously from opposite sides, creating score jellies. Moderate scoring output with easy positioning.',
    upgradePriority: 'A decent bridge pet before unlocking S-tier score pets. Do not take past level 5.',
    image: '/images/pets/bean-drop-duo.webp',
  },
  {
    name: 'Mocha Delight',
    tier: 'B',
    pairedCookie: 'Coffee Cookie / Any Speed Cookie',
    bestFor: 'Energy refills during speed-focused runs',
    bestForTh: 'เติมพลังงานตอนวิ่งสายความเร็ว',
    bestForThExtra: 'เหมาะกับคุกกี้ที่ใช้พลังงานเปลืองเร็ว ถ้าคุกกี้ไม่ใช้พลังงานเยอะจะไม่ค่อยจำเป็น',
    earlyValue: 'Brews a mocha that restores a small amount of Energy when collected. Pairs naturally with Coffee Cookie for sustained speed runs.',
    upgradePriority: 'Invest if using Coffee or Ninja Cookie as your main runner. Otherwise skip.',
    image: '/images/pets/mocha-delight.webp',
  },
  // C TIER Starters / Basic
  {
    name: 'Drop of Choco',
    tier: 'C',
    pairedCookie: 'GingerBrave',
    bestFor: 'Very first pet learning pet mechanics',
    bestForTh: 'สัตว์เลี้ยงตัวแรกสำหรับหัดเล่นระบบเพ็ท',
    earlyValue: 'Your starter pet. Drops small chocolate drops that give minor score boosts. The combo bonus with Brave Cookie grants 5 extra Energy.',
    upgradePriority: 'Do not invest. Replace as soon as you unlock any higher-tier pet.',
    image: '/images/pets/drop-of-choco.webp',
  },
  {
    name: 'Cheeseberry',
    tier: 'C',
    pairedCookie: 'GingerBright',
    bestFor: 'Early magnet utility before unlocking Wishing Star',
    bestForTh: 'แม่เหล็กดูดของช่วงต้นเกม ก่อนได้ Wishing Star',
    earlyValue: 'Produces small cheese berries that attract nearby jellies. The combo bonus with Bright Cookie grants 40 extra Energy.',
    upgradePriority: 'Use in your first few runs, then swap to Wishing Star or a scoring pet.',
    image: '/images/pets/cheeseberry.webp',
  },
  {
    name: 'Rainbows End',
    tier: 'C',
    pairedCookie: 'Any Cookie (Beginner)',
    bestFor: 'Very early game rainbow jelly collection',
    bestForTh: 'เก็บเยลลี่สายรุ้งช่วงต้นเกม',
    earlyValue: 'Creates a small rainbow that drops multi-colored jellies. Cute but offers negligible scoring impact beyond the first few stages.',
    upgradePriority: 'Skip. Even B-tier pets massively outperform this one.',
    image: '/images/pets/rainbows-end.webp',
  },
  {
    name: 'Dust Unicorn',
    tier: 'C',
    pairedCookie: 'Any Cookie (Beginner)',
    bestFor: 'Early-game obstacle warning',
    bestForTh: 'เตือนสิ่งกีดขวางช่วงต้นเกม',
    earlyValue: 'Sprinkles dust that briefly highlights upcoming obstacles. Helpful while learning stages but offers zero scoring benefit.',
    upgradePriority: 'Do not invest. Knowledge of stage layouts makes this pet obsolete.',
    image: '/images/pets/dust-unicorn.webp',
  },
  {
    name: 'Cozy Yarn',
    tier: 'C',
    pairedCookie: 'Strawberry Cookie',
    bestFor: 'Early pink bear jelly collection',
    bestForTh: 'เก็บเยลลี่หมีชมพูช่วงต้นเกม',
    earlyValue: 'Knits a cozy yarn ball that attracts Pink Bear Jellies. The combo with Strawberry Cookie adds extra points for Pink Bear Jellies.',
    upgradePriority: 'Skip entirely. Only useful on day one before you have any real pets.',
    image: '/images/pets/cozy-yarn.webp',
  },
  {
    name: 'Witty Dumbell',
    tier: 'C',
    pairedCookie: 'Muscle Cookie',
    bestFor: 'Tiny obstacle destruction for very early runs',
    bestForTh: 'ทำลายสิ่งกีดขวางเล็กๆ ช่วงต้นเกม',
    earlyValue: 'A small dumbbell that occasionally knocks aside a single obstacle. Too slow and inconsistent to rely on for progression.',
    upgradePriority: 'Do not invest. Even Knight Cookie provides better obstacle protection without a pet.',
    image: '/images/pets/witty-dumbell.webp',
  },
]

// ---------- Treasure tier list ----------
export type TreasureCategory = 'Score' | 'Survival' | 'Economy'
export type TreasureTier = {
  name: string
  tier: Tier
  category: TreasureCategory
  effect: string
  bestFor: string
  upgradeTip: string
  image: string
}

export const TREASURE_TIER_UPDATED = 'July 6, 2026'
export const BUILDS_UPDATED = 'July 17, 2026'
export const EXPLAINER_UPDATED = 'July 17, 2026'

export const TREASURE_TIERS: TreasureTier[] = [
  // S TIER
  {
    name: "Gumball Cookie's Jawbreaker Gumball",
    tier: 'S',
    category: 'Score',
    effect: 'Boosts all jelly values during Bonus Time and increases Bonus Time duration.',
    bestFor: 'League score runs maximizes point output during the highest-scoring phase of every run.',
    upgradeTip: 'Max first if scoring is your priority. The Bonus Time extension alone justifies the investment.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: "Squirrel's Refreshing Coconut Water",
    tier: 'S',
    category: 'Survival',
    effect: 'Revives your cookie once per run and grants a coin bonus upon revival.',
    bestFor: 'Pushing past your usual death point on tough League tracks.',
    upgradeTip: 'An essential safety net. Upgrade after your main score treasure.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: "Brave Cookie's Water Gun",
    tier: 'S',
    category: 'Economy',
    effect: 'Sprays water that converts nearby jellies into coins during runs.',
    bestFor: 'Coin farming with Potato Salad Cookie amplifies his already strong gold output.',
    upgradeTip: 'Max alongside your coin farming setup. The conversion rate scales significantly with levels.',
    image: '/images/treasures/placeholder.png',
  },
  // A TIER
  {
    name: 'Icy Creamy Popsicle',
    tier: 'A',
    category: 'Score',
    effect: 'Freezes the screen briefly and converts obstacles into bonus point jellies.',
    bestFor: 'Obstacle-heavy stages where converting hazards to points creates massive score swings.',
    upgradeTip: 'Strong on the right stages. Upgrade after your primary score treasure.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Sparkling Water Drink',
    tier: 'A',
    category: 'Score',
    effect: 'Creates sparkling water jellies during skill activations, boosting combo score.',
    bestFor: 'Cookies with frequent skill windows like Ninja Cookie or Skating Queen.',
    upgradeTip: 'Pair with a cookie that has short skill cooldowns for maximum uptime.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Icy Glass Slippers',
    tier: 'A',
    category: 'Survival',
    effect: 'Creates an ice platform under your cookie after a slide, avoiding pit falls.',
    bestFor: 'Stages with frequent pit traps and narrow platforms.',
    upgradeTip: 'A reliable safety treasure for learning new tracks. Replace with a score treasure once confident.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Bamboo Scented Sticky Rice',
    tier: 'A',
    category: 'Survival',
    effect: 'Restores a chunk of Energy when collected, wrapped in a bamboo leaf.',
    bestFor: 'Extended runs where Energy runs low before Bonus Time triggers.',
    upgradeTip: 'Great for pushing distance-based missions. Upgrade moderately for consistent survival.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Jelly Pogo Stick',
    tier: 'A',
    category: 'Economy',
    effect: 'Bounces you upward into a coin-rich sky zone for a few seconds.',
    bestFor: 'Coin farming on flat stages that lack natural vertical coin placement.',
    upgradeTip: 'Effective for boosting coin income on stages with low natural coin density.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Pink Cherry Blossom Cotton Candy',
    tier: 'A',
    category: 'Economy',
    effect: 'Attracts coins and coin-producing jellies from a wider radius.',
    bestFor: 'Coin runs on stages with scattered coin placements.',
    upgradeTip: 'Pairs well with Potato Salad Cookie for covering more ground per coin cycle.',
    image: '/images/treasures/placeholder.png',
  },
  // B TIER
  {
    name: "Amateur's Baking Powder",
    tier: 'B',
    category: 'Score',
    effect: 'Causes your cookie to rise briefly, collecting overhead jellies and granting a small score boost.',
    bestFor: 'Stages with elevated jelly clusters that are normally out of reach.',
    upgradeTip: 'A budget score treasure. Use until you unlock an A-tier or S-tier alternative.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: "Squirrel's Seashell Necklace",
    tier: 'B',
    category: 'Score',
    effect: 'Increases points for jellies collected while riding or surfing.',
    bestFor: 'Stages with long ride or surf sections.',
    upgradeTip: 'Niche but powerful on the right stages. Only invest if your main track has ride segments.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Wishing Lotus Flower',
    tier: 'B',
    category: 'Survival',
    effect: 'Grants a small shield that absorbs one hit, then blooms into bonus coins.',
    bestFor: 'Preserving your run through a single dangerous obstacle section.',
    upgradeTip: 'A decent early survival pick. Outclassed by Coconut Water for revival value.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Lucky Pouch',
    tier: 'B',
    category: 'Economy',
    effect: 'Randomly drops a pouch containing either coins, energy, or a score boost.',
    bestFor: 'Casual runs where you want a mix of resources without committing to one farm type.',
    upgradeTip: 'The randomness makes it unreliable. Invest only if you enjoy the gamble.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Coin Scale',
    tier: 'B',
    category: 'Economy',
    effect: 'Weighs your coin total at intervals and grants bonus coins based on current balance.',
    bestFor: 'Long coin farming runs where your coin balance builds up significantly.',
    upgradeTip: 'Better on longer runs. Not worth upgrading for short farming sessions.',
    image: '/images/treasures/placeholder.png',
  },
  // C TIER
  {
    name: 'Jelly Scale',
    tier: 'C',
    category: 'Score',
    effect: 'Weighs your jelly count and converts excess into a small score bonus.',
    bestFor: 'Very early score runs before unlocking real score treasures.',
    upgradeTip: 'Your starter score treasure. Replace immediately when you pull anything higher tier.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Yule Log Cake',
    tier: 'C',
    category: 'Survival',
    effect: 'Creates a small yule log that restores a tiny amount of Energy once per run.',
    bestFor: 'The very first few runs before you have any meaningful survival support.',
    upgradeTip: 'Do not invest. Even Bamboo Sticky Rice offers better Energy restoration.',
    image: '/images/treasures/placeholder.png',
  },
  {
    name: 'Oak Barrel',
    tier: 'C',
    category: 'Economy',
    effect: 'Rolls forward dropping a few coins, then breaks on the first obstacle.',
    bestFor: 'Learning how treasure mechanics work in your first runs.',
    upgradeTip: 'A starter economy treasure. Replace with Jelly Pogo Stick or Water Gun as soon as possible.',
    image: '/images/treasures/placeholder.png',
  },
]

// ---------- PC options ----------
export type PcOption = {
  platform: string
  type: string
  bestFor: string
  setup: string
  accountSync: string
  notes: string
}

export const PC_TIERS_UPDATED = 'July 6, 2026'

export const PC_OPTIONS: PcOption[] = [
  {
    platform: 'Google Play Games (Beta)',
    type: 'Official PC app',
    bestFor: 'Most players who want the safest, simplest setup',
    setup: 'Install Google Play Games for PC, sign in, search the game.',
    accountSync: 'Native Google account sync',
    notes: 'Official Google client. Lightest install and easy keyboard mapping.',
  },
  {
    platform: 'LDPlayer',
    type: 'Android emulator',
    bestFor: 'Players who want detailed key-mapping controls',
    setup: 'Install LDPlayer, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Lightweight emulator with flexible controls. Verify before competitive use.',
  },
  {
    platform: 'MuMu Player',
    type: 'Android emulator',
    bestFor: 'A balanced emulator alternative',
    setup: 'Install MuMu Player, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Smooth on mid-range PCs. Keep graphics drivers updated.',
  },
  {
    platform: 'BlueStacks',
    type: 'Android emulator',
    bestFor: 'Players already using BlueStacks for other games',
    setup: 'Install BlueStacks, sign into Google Play, install the game.',
    accountSync: 'DevPlay / Google / Apple login',
    notes: 'Feature-rich but heavier. Close background apps for best results.',
  },
]
