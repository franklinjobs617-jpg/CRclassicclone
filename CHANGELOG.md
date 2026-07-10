# Changelog

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

