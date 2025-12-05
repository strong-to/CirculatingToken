# 设计系统使用指南

## 概述

项目使用统一的设计系统配置文件 `design.ts` 来管理所有的设计规范，包括字体大小、颜色、间距等。

## 配置文件位置

- 设计系统配置: `config/design.ts`
- Tailwind 配置: `tailwind.config.ts`
- 全局样式: `app/globals.css`

## 使用方法

### 1. 在 Tailwind CSS 中使用

```tsx
// 使用背景色
<div className="bg-background-primary">白色背景</div>
<div className="bg-background-secondary">浅灰背景</div>

// 使用文字颜色
<p className="text-text-primary">主要文字</p>
<p className="text-text-secondary">次要文字</p>

// 使用字体大小
<h1 className="text-title">标题 (20px)</h1>
<p className="text-body">正文 (16px)</p>
<span className="text-small">小字 (14px)</span>

// 使用间距
<div className="p-md">中等内边距 (16px)</div>
<div className="m-lg">大外边距 (24px)</div>
```

### 2. 在 TypeScript/JavaScript 中直接使用

```tsx
import { designTokens } from '@/config/design'

// 直接使用配置值
const titleSize = designTokens.fontSize.title // '20px'
const bgColor = designTokens.colors.background.primary // '#ffffff'
```

### 3. 在 CSS 中使用

```css
.custom-class {
  font-size: 20px; /* 使用 title 字体大小 */
  background-color: #ffffff; /* 使用主背景色 */
}
```

## 设计规范

### 字体大小

- **title**: 20px - 标题字体（统一使用）
- **h1**: 32px - 一级标题
- **h2**: 24px - 二级标题
- **h3**: 20px - 三级标题（与 title 相同）
- **h4**: 18px - 四级标题
- **h5**: 16px - 五级标题
- **h6**: 14px - 六级标题
- **body**: 16px - 正文
- **small**: 14px - 小字
- **tiny**: 12px - 极小字

### 颜色

#### 背景色
- **primary**: #ffffff - 主背景色（整个项目统一使用）

#### 文字颜色
- **primary**: #171717 - 主要文字
- **secondary**: #666666 - 次要文字
- **tertiary**: #999999 - 第三级文字
- **disabled**: #cccccc - 禁用文字

### 间距

基于 4px/8px 的倍数系统：
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

## 注意事项

1. **Title 字体统一使用 20px**：所有标题相关的元素都应该使用 `text-title` 类或 `designTokens.fontSize.title`
2. **背景色统一使用 #ffffff**：整个项目的背景色统一为白色
3. **修改设计规范**：只需要修改 `config/design.ts` 文件，所有使用该配置的地方都会自动更新







