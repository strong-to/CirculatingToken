# ContentCard 组件资源说明

## 组件用途
Token Marketplace 页面的内容卡片组件，展示 AI 工具/数据集/工作流等信息

## 图片资源 (img/)

- `bg.png` - 卡片背景图片（所有卡片共用）
- `icon2.png` - 点击状态的图标（所有卡片共用）
- `icon/icon_1.png` 到 `icon_30.png` - 30个卡片的图标

## 文案资源 (text/)

- `content_card_list_data.json` - 所有30个卡片的数据配置（包含标题、描述、按钮等文案）

## 卡片数据说明

每个卡片包含：
- `title` - 卡片标题（如 "TENSOR GRID"）
- `subtitle` - 卡片副标题（DBAI ID，如 "DBAI0000002"）
- `descriptions` - 描述文案数组
- `buttons` - 按钮标签数组（最多4个）
- `dataCards` - 点击后显示的数据卡片（24h Revenue, Market cap, Total Users, User Rating）

## 使用位置

- 组件路径：`components/TokenMarketplace/com/ContentCard.tsx`
- 数据路径：`components/TokenMarketplace/data/ContentCardListData.ts`
- 页面路径：Token Marketplace 页面 (`app/TokenMarketplace/page.tsx`)



