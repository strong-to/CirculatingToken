# Change: 数据集驱动的首页内容

## 背景
当前首页多个板块（例如「Where Using Becomes Investing」等）完全写死在组件内部，无法复用 `dataset/projects/*.json` 中已经维护好的 30+ 项目数据，运营同学也无法在不改代码的情况下调整展位。与此同时，部分项目 JSON 的媒体链接与 `/public/images` 中正在使用的图片不一致，导致一旦切换到数据源渲染就会出现缺图或描述不匹配的问题。

## 预期改动
- 新增 `dataset/index.json`，集中配置各个首页板块的标题、CTA、展示顺序以及项目 id 列表，并定义需要的筛选维度。
- 编写数据装载工具（如 `lib/homepageData.ts`），在构建期/运行期读取配置与项目 JSON，将卡片所需字段（标题、编号、简介、封面、taxonomy）标准化后提供给前端组件。
- 将 `UseCaseSection`、`LetEveryShare`、`BuildWithThe` 等组件改为遍历数据渲染卡片，并植入 taxonomy 的客户端筛选（至少 domain/action），让用户能即时过滤。
- 对被引用的 `dataset/projects/*.json` 修正图片地址与简介文案，统一指向 `/public/images/...`，保证卡片展示与现有视觉一致。

## 影响范围
- 规格：homepage-curation
- 代码：主页分区组件、`BlueSquareCard` 家族、`dataset/index.json` 与相关项目 JSON、新增数据工具（位于 `lib/` 或 `utils/`）
