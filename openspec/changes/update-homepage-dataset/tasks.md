## 1. 数据编排
- [ ] 1.1 新建 `dataset/index.json`，描述首页各板块、卡片顺序。
- [ ] 1.2 调整相关 `dataset/projects/*.json`，让 `profile.media` 的图片与简介复用远程 OSS 资源（`https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4/...`），若与现有页面文案冲突必须以当前页面为准，确保文案/视觉一致。
- [ ] 1.3 新增类型化加载器（如 `lib/homepageData.ts`），将配置与项目数据合并，输出标准化卡片数据与筛选元信息。
- [x] 1.4 扫描并替换其余引用 `/public` 或相对 `/images/` 的资源路径，统一切换到 OSS 前缀，确保页面运行时不再依赖本地静态文件。

## 2. 前端接入
- [ ] 2.1 重构 `UseCaseSection`、`LetEveryShare`、`BuildWithThe`，通过遍历加载器输出渲染卡片，移除硬编码 JSX。
- [ ] 2.2 更新 `BlueSquareCard` 及其变体，支持接受项目名称、system id、标签、指标、封面等属性，并显示来自数据集的文本/图片。
- [ ] 2.3 针对每个 section 实现至少 domain/action 的客户端筛选，基于 taxonomy 即时过滤可见卡片。

## 3. 验证
- [x] 3.1 执行 `npm run lint`。
- [ ] 3.2 本地访问首页，确认所有板块使用数据集图片/文案渲染，筛选交互无需刷新即可生效。
