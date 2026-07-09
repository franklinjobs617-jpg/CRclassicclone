# Changelog

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
