# ContentCard 组件文案说明

## 文案文件列表

- `content_card_list_data.json` - 所有30个卡片的数据配置
  - 包含每个卡片的标题、副标题、描述、按钮标签等文案
  - 使用位置：`components/TokenMarketplace/data/ContentCardListData.ts`

## 卡片文案结构

每个卡片包含以下文案字段：
- `title` - 卡片标题（如 "TENSOR GRID"）
- `subtitle` - 卡片副标题（DBAI ID，如 "DBAI0000002"）
- `descriptions` - 描述文案数组（如 ["THIS IS A GPU COMPUTE AI TOOL"]）
- `buttons` - 按钮标签数组（最多4个，如 ["Table", "Computing", "GPU", "Optimize"]）
- `dataCards` - 点击后显示的数据卡片文案：
  - `label` - 数据标签（如 "24h Revenue", "Market cap", "Total Users", "User Rating"）
  - `value` - 数据值（如 "$6,550,521"）
  - `buttonText` - 按钮文案（如 "Details", "Share", "Market", "Favorites"）

## 注意事项

- 当前文案数据存储在 TypeScript 文件中，建议迁移到 JSON 文件以便于维护和国际化
- 共有30个卡片，每个卡片都有独立的配置









