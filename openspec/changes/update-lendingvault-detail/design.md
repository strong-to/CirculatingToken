## Context
- `app/LendingVault/page.tsx` 直接渲染 `components/LendingVault/LendingVaultContent`，内部所有组件均引用 `CDN_PREFIX + /LendingVault/...` 的 FrameFlow 素材，项目名/编号/指标写死。
- `dataset/projects/index.ts` 已经聚合了 `DBAI*` 与 `DBTF*` 的 JSON，但目前仅 `lib/homepageData.ts` 消费，详情页和 `components/Home` 之间没有共享的数据入口或深链。
- 首页 `WhereUsingBecomes` / `LetEveryShare` / `BuildWithThe` 通过 `useHomepageSection` 渲染 `HomepageProjectCard`，但 `BlueSquareCard` 没有触发导航。

## Goals / Non-Goals
- **Goals**:（1）使 `/LendingVault/[systemId]` 能加载任意 `system_id` 的文案与图片；（2）提供统一的数据获取与降级逻辑，避免在多个组件里重复解析 JSON；（3）让首页的卡片和 CTA 可以跳转到新的详情页。
- **Non-Goals**:（1）不在此变更中改写 Token Marketplace / Project Hub 的全部卡片（仅确保入口不再指向旧路由）；（2）不新增后端 API，所有数据依旧来自静态 JSON；（3）不一次性填满缺失的评论/任务数据——无数据时按规范隐藏。

## Decisions
- **Data Source**: 新增 `lib/projectDetail.ts`（或等价模块）包装 `dataset/projects`，暴露 `getProjectById(systemId)`、`getRelatedProjects(project, limit)` 等 helper，并把默认项目 ID 存入 `config/design.ts`（或新的 `config/routes.ts`）。
- **Routing**: 
  - `app/LendingVault/page.tsx` 仅负责 `redirect(DEFAULT_LENDING_VAULT_ID)`。
  - 新建 `app/LendingVault/[systemId]/page.tsx`：在 Server Component 里调用 `getProjectById`，无结果则 `notFound()`；在 `generateMetadata` 里设置 `<title>{name} | Lending Vault</title>`。
  - 提供 `ProjectDetailProvider`（React context）把 `project`, `relatedProjects`, `metricsStats` 等 memo 化后传给子组件，避免多次 JSON 解析。
- **Section Mapping**:
  - `Banner`：主图取 `profile.media.banner`；轮播取 `profile.media.assets` 中 `context === 'lending_vault_banner_carousel'`，缺失则回退到 `banner`。
  - `Project Introduction`：把 `profile.description_md` 通过 `react-markdown`（现有依赖）渲染；同时展示 `profile.links`。
  - `User Comments`：总评分使用 `metrics.rating`；若存在 `reviews.list` 则渲染评论卡片，否则显示提示与 CTA；柱状统计可由 `reviews.summary_tags` 或 `metrics.rating.review_count` 推导。
  - `Project Construction`：使用 `co_creation.summary`、`co_creation.open_tasks`、`co_creation.contributors_leaderboard`；头像栅格来自 `profile.media.assets` 中 `context === 'project_construction_avatar'`，不足 16 个时循环。
  - `Project Governance` / `Token Trading`：分别绑定 `governance.proposals` 与 `market` / `tokenomics`，没有数据时隐藏模块。
  - `ProjectsYouMayBeInterestedIn`：调用 `getRelatedProjects`（按 `taxonomy.domain`/`action` 匹配）返回最多 6 个卡片，展示 `heroImage` + `systemId` 并链接到详情。
- **Homepage Links**: 扩展 `HomepageProjectCard` 数据结构以暴露 `detailHref = /LendingVault/${systemId}`，`BlueSquareCard` 整卡改用 `<Link>` 包裹，并让 “Learn more details”/“View all projects” CTA 附带当前首卡 ID。

## Risks / Trade-offs
- 部分 `DBAI*` JSON 尚未补齐 `reviews/co_creation`，UI 需要良好的降级体验（空状态、隐藏模块）。
- 在客户端注入完整 `project` 可能增大 bundle（JSON 经 tree-shaking 仍在 client side）。通过 Server Component + context 可以降低重复序列化，但仍需关注体积。
- 相关度推荐策略若基于 taxonomy 可能出现没有足够候选的情况，需要 fallback（例如按最新更新时间随机补齐）。

## Migration Plan
1. 写好新的 data helper 与动态路由后，将原本在组件中的 `CDN_PREFIX + /LendingVault/...` 替换为 `project.media` 数据，保留兜底图片。
2. 更新 `dataset/projects/*.json` 中缺失的 `profile.media.assets`（如 carousel、头像）以适配新上下文键。
3. 修改首页 `BlueSquareCard` 与 CTA，验证 `cmd+click`、`aria-label` 等交互。
4. 手动确认旧路径 `/LendingVault` 被重定向，北向的 Nav/Router 链接无 404。

## Open Questions
- 默认 Featured 项目 ID 是否需要运营配置入口？暂定写在 `config/design.ts` 并在上线前让运营确认。
- `ProjectsYouMayBeInterestedIn` 应该遵循什么排序（taxonomy 相似度 / 配置文件）？若有额外要求，需要后续补充数据源。
