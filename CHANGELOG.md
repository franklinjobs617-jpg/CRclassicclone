# Changelog

## 2026-07-17 — New Builds page + homepage freshness snapshot + tier list placeholder fix

**背景**：GSC全量数据（6/30-7/16）+ GA页面数据交叉分析后确认三件事：(1) 首页平均互动时长5.5秒，全站最低，比第二低的页面还低将近3倍；(2) 抓取行为97%是Refresh、仅3%是Discovery，说明站点缺少持续的新内容/新URL，和曝光量从7/9起连续下滑的时间线吻合；(3) "cookie run classic build(s)"系列关键词有真实曝光（3个变体共41次）但站内没有对应页面承接，排名全部在10名开外。

**Added（新增文件）:**
- `app/cookie-run-classic-builds/page.tsx` — 新增Builds页面，对应"build/builds"关键词缺口。内容不引入任何新的游戏事实，完全基于 `COOKIE_TIERS`/`PET_TIERS`/`TREASURE_TIERS` 里已存在、已核实的数据重新组织成4套完整loadout（Gold Rush 刷金 / Endgame Score 冲分 / Safe Clear 安全过关 / First Week Starter 新手起步），每套明确标注引用了哪些已有页面的既定结论（例如Potato Salad+Mr. Limeguard的搭配、Bari自救流的实战笔记），不做超出现有数据范围的断言

**Modified（修改文件）:**
- `lib/data.ts` — `PRIMARY_NAV` 新增Builds条目（紧跟Treasure Tier List之后）；新增 `BUILDS_UPDATED` 常量
- `app/page.tsx`：
  - 新增"CookieRun Classic this week"时效性板块，位置在"Where to start"和"Start here"之间。内容完全由现有数据动态生成（`ACTIVE_CODES.length`、`SITE.lastSiteUpdate`、五个攻略页各自的最后核对日期），不写死具体游戏内容数字，避免编造未经核实的"本周更新"类断言
  - `ICONS` 数组同步新增Builds对应图标（Layers），位置和`PRIMARY_NAV`新条目对齐
  - `FRESHNESS` 展示卡片网格新增Builds页面，5列改6列布局
- `app/sitemap.ts` — 新增 `/cookie-run-classic-builds` 路由；首页 `lastModified` 同步更新为 2026-07-17

**修复（视觉一致性，非本轮重点但顺带处理）:**
- `components/blocks.tsx` — 新增 `TierImage` 组件，自动判断图片路径是否为占位图，是则渲染统一的"待补图"图标框（而非裸露显示同一张generic占位图）
- `app/cookie-run-classic-treasure-tier-list/page.tsx` — 17处占位图（Treasure Tier List表格里全部17个条目）统一替换为 `TierImage`
- `app/cookie-run-classic-tier-list/page.tsx`、`app/cookie-run-classic-pet-tier-list/page.tsx` — 各自1处占位图同步替换，保持全站视觉规则一致

**验证:**
- `npx tsc --noEmit` 通过，无类型错误
- 手动脚本核对Builds页面引用的全部12个Cookie/Pet/Treasure名字与`lib/data.ts`原始拼写逐一比对，确认无非空断言(`!`)运行时崩溃风险

**待办：**
- Builds页面效果需要2-4周GSC数据验证，确认是否真的补上了"build/builds"关键词的排名缺口
- 首页新板块和Builds页面上线后，建议持续观察抓取行为里Discovery占比是否回升，这是判断"内容更新节奏"是否奏效的核心指标，不是一次性任务
- 外链投入目前为0（站长已确认非本轮处理范围）

---

## 2026-07-09 — Codes/Redeem differentiation + freshness dating (P0, from competitor SERP audit)

**背景**：搜"cookie run classic codes"发现已有4个established游戏媒体站+2个同类EMD竞品(cookierun-classic.wiki、cookierunclassicwiki.wiki)在这个词上有排名。竞品cookierunclassicwiki.wiki用的是"codes hub + 独立月度spoke文章"结构，且把"how to redeem"拆成独立文章，不和codes列表混在一个页面。

**Modified（修改文件）:**
- `app/cookie-run-classic-codes/page.tsx`：
  - Title/H1/description 加入"(July 2026)"月度标记，对齐竞品验证过的"codes july 2026"月度刷新search pattern
  - "How to redeem in 60 seconds"小节从完整5步列表精简为2-3句话+CTA按钮，不再和`/code-redeem`页面重复相同的步骤内容，只做引导
- `app/sitemap.ts` — `/cookie-run-classic-codes` lastModified 更新为 2026-07-09

**未改动：**
- `/cookie-run-classic-code-redeem` 页面本身内容已经足够深（iOS workaround、DevPlay ID定位、故障排查表、账号安全提示），和`/codes`的定位差异已经清晰，本轮不需要改

**验证:**
- `npx tsc --noEmit` 通过

**待办：**
- 效果需要观察2-4周后再看GSC数据变化，判断月度命名+去重是否带来曝光量提升
- 是否要新增"where to find new codes"独立spoke页面，需先做KGR/KDRoi关键词验证（v4 SOP第二章），不能照抄竞品清单

---

## 2026-07-09 — Homepage content expansion (P0, from GSC/GA analysis)

**背景**：GSC数据显示首页排名14.43（全站最差），GA平均停留时长4.59秒（全站最低）——诊断为hub页内容深度不够，只有导航卡片没有实质文字。

**Modified（修改文件）:**
- `app/page.tsx` — 首页从约725词（含JSX噪音的粗略估算）扩展到约1286词：
  - Hero区新增可见的 UpdateBadge（此前首页没有显示更新日期）
  - "What is CookieRun Classic?" 章节从2段扩到4段，新增游戏系统机制说明（Cookie/Pet/Treasure联动逻辑）和双轨进度说明（Score League vs 账号成长），并内链到 tier-list 和 codes 页
  - 新增 "Where to start" 大段，按"全新账号/纠结是否reroll/不知道升级谁/想上PC/已经玩了几周"五种场景分别给建议，每种场景都内链到对应的spoke页面——这是本次最主要的Hub-and-Spoke内链强化
  - FAQ 从4条扩到7条，新增"和Kingdom有什么区别"、"新手该重抽吗"、"新账号该优先做什么"三条
- `lib/data.ts` — `SITE.lastSiteUpdate` 从 2026-07-06 更新为 2026-07-09
- `app/sitemap.ts` — 首页 lastModified 同步更新为 2026-07-09

**验证:**
- `npx tsc --noEmit` 通过

**待办（本轮未处理，需要更多数据）：**
- `/cookie-run-classic-codes` 和 `/cookie-run-classic-code-redeem` 曝光量异常低（分别3次和55次，9天内），怀疑是索引覆盖问题而非纯粹的关键词蚕食——两页Title/H1确实有一定语义重叠（都以"Cookie Run Classic Code(s)"开头），/codes页面还有一个"How to redeem in 60 seconds"小节和/code-redeem内容重叠，但根本原因需要GSC后台的URL Inspection工具确认具体收录状态，本轮无法通过代码自查完全定位
- 9张AI生成占位配图（codes.png等，均为1024x1024方图）待替换为真实截图，用户后续会提供素材

---

## 2026-07-09 — AdSense readiness fix: Contact page, About expansion, Privacy Policy consistency

**Added（新增文件）:**
- `app/contact/page.tsx` — 新增 Contact 页，约500词，含 General/Corrections、Business/Partnerships、Copyright/DMCA、What this site can't help with 四个分类说明，联系邮箱 admin@crclassic.wiki

**Modified（修改文件）:**
- `app/about/page.tsx` — 内容从约350词扩展到约750-800词，补充"How guides are researched and kept accurate"章节，说明信息来源与核对方式；末尾新增指向 /contact 的引导
- `app/privacy/page.tsx` — 移除"We do not use advertising networks"的错误陈述（与实际已加载的 AdSense script 矛盾）；新增"Advertising (Google AdSense)"章节，披露广告 cookie、Google Ads Settings 退出链接、EEA/UK 同意声明；新增"Children's privacy"章节；新增"Changes to this policy"章节；Contact 章节改为指向 /contact 页

**Modified — wiring（导航/内链变动）:**
- `components/site-footer.tsx` — Footer 次级导航新增 Contact 链接
- `app/sitemap.ts` — 新增 `/contact` 路由，priority 0.3；同步更新 /about、/privacy 的 lastModified 为 2026-07-09

**验证:**
- `npx tsc --noEmit` 通过，无 TypeScript 错误
- 依据：`建站与提审通用准则-v4-融合版.md` 第七章「AdSense 提审专项检查清单」

