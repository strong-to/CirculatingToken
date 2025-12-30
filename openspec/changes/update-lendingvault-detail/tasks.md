## 1. Routing & Data Loading
- [x] 1.1 在 `config` 或 `lib` 中新增可配置的 `DEFAULT_LENDING_VAULT_ID`，并在 Header/导航中引用。
- [x] 1.2 把 `app/LendingVault/page.tsx` 拆成 `/LendingVault/[systemId]/page.tsx`，加上 `/LendingVault/page.tsx` 的重定向逻辑，确保未知 ID 返回 404。
- [x] 1.3 新建 `projectDetail` 数据提供器（服务器端获取 + 客户端 context/hook），复用 `dataset/projects` 并标准化缺省字段。

## 2. Detail Composition
- [x] 2.1 更新 `Banner` 与首屏轮播，使用 `profile.media.banner` 及 `assets`（按 `context` 过滤），缺图时降级。
- [x] 2.2 将标签页（Project Introduction / User Comments / Project Construction / Project Governance / Token Trading）所需的简介、Markdown、指标、评论、任务等数据全部取自提供器，若数据不存在需显示占位或隐藏段落。
- [x] 2.3 重写 `ProjectsYouMayBeInterestedIn`，用当前项目的 taxonomy 求出最多 6 个推荐项目并链接到其详情，如果不足随机补全，项目不可重复。
- [x] 2.4 为详情页导出 `generateMetadata`，标题/描述随项目动态变化。

## 3. Homepage & Discovery Links
- [x] 3.1 调整 `components/Home/*`（WhereUsingBecomes、LetEveryShare、BuildWithThe）的 `BlueSquareCard` 与 “Learn more details / View all projects” CTA，统一指向 `/LendingVault/[systemId]`，支持 cmd/ctrl+click。
- [x] 3.2 确认其它入口（如 `ProjectsYouMayBeInterestedIn` 列表、可能的 Project Hub 卡片）也指向新的详情路由，避免残留的 `/LendingVault` 静态链接。

## 4. Validation
- [x] 4.1 运行 `npm run lint` 并确保通过。
- [x] 4.2 手动验证 `/LendingVault/DBAI0000001`、`/LendingVault/DBTF0000017`、不存在的 ID、以及首页卡片跳转行为。

## 5. UI Parity & Data Fixes
- [ ] 5.1 恢复 `UserComments` 原有评分概览 + 柱状计数 + 轮播布局，评分、头像、条数全部来自项目数据并确保空缺时降级占位。
- [ ] 5.2 `ProjectIntroduction` 底部补齐 “Favorite Project / Experience the Project” CTA，保持交互效果。
- [ ] 5.3 `ProjectConstruction` 重新套用黑底+头像栏布局，指标数据来自 `co_creation` / `metrics`，头像可循环补齐 16 个。
- [ ] 5.4 `ProjectGovernance` 恢复顶部黑色 tab 壳体并渲染 `Ecosystem/Token/Finance/Proposal` 内容，展示项目治理 / 市场数据但不改动既有外观。
- [ ] 5.5 `TokenTrading`、`TokenLending` 对齐旧样式（含按钮、格栅），并绑定 `tokenomics` / `market` 数据；图片错误需保持占位尺寸。
- [ ] 5.6 `ProjectsYouMayBeInterestedIn` 若关联不足 6 条，用非重复随机项目补齐，确保 `generateStaticParams` 等静态导出要求满足。
