# Change: 动态化 Lending Vault 项目详情流量

## Why
- `/LendingVault` 目前只渲染 FrameFlow（DBTF0000017）的静态文案与图片，其他项目即便在 `dataset/projects/*.json` 中已经维护，也无法通过路由展示，阻断了运营切换 featured 项目的能力。
- 首页的「Where Using Becomes Investing」「Let Every Share」「Build With The」等分区虽然已经列出 `DBAI` 项目，但卡片没有深链到项目详情，用户无法从发现页直接跳到 Lending Vault。

## What Changes
- 新增 `/LendingVault/[systemId]` 动态路由（含 `/LendingVault` → 默认项目的重定向），并用 `dataset/projects` 作为唯一数据源，校验 `system_id` 是否存在，不存在时返回 404。
- 构建项目详情数据提供器（可放在 `lib/projectDetail.ts` 或上下文），把 `profile`、`metrics`、`tokenomics`、`reviews`/`co_creation` 等字段注入 `Banner`、`ProjectIntroduction`、`UserComments`、`ProjectConstruction`、`ProjectsYouMayBeInterestedIn` 等组件，替换掉所有硬编码的 FrameFlow 资产。
- 支持数据匮乏的项目：缺少 `reviews` 或自定义图片时提供降级（如隐藏轮播、使用 `logo` 或占位图），确保任意 `DBAI/DBTF` 项目都能加载。
- 首页 `BlueSquareCard` 及 CTA 统一跳转到 `/LendingVault/[systemId]`，使用 `next/link`，保持键盘与新标签页可用。
- 记录默认 Featured 项目 ID（配置化），供 Header 导航和空路由复用，避免再次硬编码 017。

## Impact
- Specs: `project-detail`, `project-navigation`
- Code: `app/LendingVault/*`, `components/LendingVault/*`, `components/Home/*`, `lib/homepageData.ts`, `components/Header/Header.tsx`, 以及 `dataset/projects/*.json` 中与详情相关的媒体字段
