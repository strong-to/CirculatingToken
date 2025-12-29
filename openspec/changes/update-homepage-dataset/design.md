## 背景
运营希望通过 JSON 文件维护首页展位，而无需触碰 React 代码。虽然 `dataset/projects` 已经保存了权威项目信息，但首页仍然使用静态导入与手写图片路径，无法共享 taxonomy 及文案，并且有些 JSON 中的图片地址与 `/public/images` 已投产资源不一致，需要在切换数据源之前完成对齐。

## 目标 / 非目标
- 目标：让首页卡片完全复用 dataset 中的项目数据；新增轻量的首页配置文件；保持客户端渲染；支持无需后端的筛选交互。
- 非目标：搭建 CMS 界面、增加服务端 API、重做卡片视觉（仅替换数据来源）。

## 关键决策
1. **首页配置**：新增 `dataset/index.json`，包含 `sections`（section id -> 文案、按钮、项目 id 列表）与 `filters`（筛选标签及对应 taxonomy 字段）两部分，便于运营只改 JSON 即可生效。
2. **数据加载器**：实现 `lib/homepageData.ts`，静态导入配置并与 `dataset/projects` 合并，返回类型化对象 `{ sectionId, title, projects[], filters }`，内部缓存解析结果，避免多个组件重复解析。
3. **筛选策略**：在每个 section 组件内使用 React state 做客户端筛选，过滤逻辑直接基于项目里的 taxonomy 数组；各 section 互不干扰，但共享相同的筛选维度定义。
4. **素材与文案对齐**：逐项更新会上线的项目 JSON，把 `profile.media` 中的 hero/asset URL 改成 `/public/images/...`，并确保 `summary`、CTA 文案等与当前页面展示完全一致（若有冲突以现有页面为准），必要时扩展 `heroImage`、`posterDescription` 字段。

## 风险与取舍
- 额外导入 JSON 可能增加 bundle 体积，可通过 loader 仅暴露必要字段来控制大小。
- 客户端筛选意味着所有精选项目数据都会下发到浏览器，但总量约 10~15 张卡片，影响可接受。

## 待确认
- 筛选交互是否需要跨 section 联动？目前假设每个 section 独立记忆自己的筛选状态，如需全局联动需再澄清。
