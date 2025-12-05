# px 自动转换为 rem 使用指南

项目已配置自动将 `px` 转换为 `rem`，实现响应式缩放。

## 🎯 工作原理

1. **CSS 文件自动转换**：PostCSS 插件会在构建时自动将 CSS 文件中的 `px` 转换为 `rem`
2. **JavaScript/TypeScript 辅助函数**：提供 `px()` 函数用于内联样式

## 📝 使用方法

### 方法 1: CSS 文件中直接写 px（推荐）

在 `.css`、`.scss` 等样式文件中，直接写 `px`，构建时会自动转换：

```css
/* 源代码 */
.container {
  width: 100px;
  height: 50px;
  font-size: 16px;
  padding: 20px;
}

/* 构建后自动转换为 */
.container {
  width: 6.25rem;
  height: 3.125rem;
  font-size: 1rem;
  padding: 1.25rem;
}
```

### 方法 2: 内联样式使用 px() 函数

在 React 组件的 `style` 属性中使用 `px()` 函数：

```tsx
import { px } from '@/utils/pxToRem'

function MyComponent() {
  return (
    <div
      style={{
        width: px(100),      // 自动转换为 '6.25rem'
        height: px(50),     // 自动转换为 '3.125rem'
        fontSize: px(16),   // 自动转换为 '1rem'
        padding: px(20),    // 自动转换为 '1.25rem'
      }}
    >
      内容
    </div>
  )
}
```

### 方法 3: 批量转换样式对象

使用 `pxToRemObject()` 批量转换：

```tsx
import { pxToRemObject } from '@/utils/pxToRem'

function MyComponent() {
  const styles = pxToRemObject({
    width: 200,
    height: 100,
    fontSize: 24,
    marginTop: 16,
    padding: 20,
  })
  // 结果: { width: '12.5rem', height: '6.25rem', fontSize: '1.5rem', ... }

  return <div style={styles}>内容</div>
}
```

## ⚠️ 注意事项

### 1. Tailwind 任意值不会自动转换

```tsx
// ❌ 不推荐：Tailwind 任意值不会自动转换
<div className="w-[100px] h-[50px]">

// ✅ 推荐：使用 style 属性
<div style={{ width: px(100), height: px(50) }}>

// ✅ 或者：手动计算 rem 值
<div className="w-[6.25rem] h-[3.125rem]">
```

### 2. 1px 边框通常不转换

PostCSS 配置中设置了 `minPixelValue: 1`，所以 `1px` 的边框不会被转换：

```css
/* 1px 边框保持原样 */
border: 1px solid #000;  /* 不会转换 */

/* 其他值正常转换 */
border-width: 2px;  /* 转换为 0.125rem */
```

### 3. 媒体查询中的 px 不转换

配置中 `mediaQuery: false`，所以媒体查询中的 `px` 不会转换：

```css
@media (min-width: 768px) {
  /* 768px 不会转换 */
}
```

## 🔧 配置说明

配置文件：`postcss.config.js`

- `rootValue: 16` - 1rem = 16px（基于 1920px 设计稿）
- `minPixelValue: 1` - 小于 1px 的值不转换（保留 1px 边框）
- `unitPrecision: 5` - rem 值保留 5 位小数

## 📊 转换对照表

| px 值 | rem 值 | 说明 |
|-------|--------|------|
| 1px   | 1px    | 不转换（边框） |
| 4px   | 0.25rem | |
| 8px   | 0.5rem  | |
| 12px  | 0.75rem | |
| 16px  | 1rem    | 基准值 |
| 20px  | 1.25rem | |
| 24px  | 1.5rem  | |
| 32px  | 2rem    | |
| 48px  | 3rem    | |
| 64px  | 4rem    | |
| 84px  | 5.25rem | |
| 89px  | 5.5625rem | |

## 💡 最佳实践

1. **优先使用 CSS 文件**：在 `.css` 文件中直接写 `px`，让 PostCSS 自动转换
2. **内联样式用函数**：在 `style` 属性中使用 `px()` 函数
3. **保持一致性**：统一使用 `px` 作为设计单位，让工具自动转换
4. **特殊值手动处理**：1px 边框、媒体查询等特殊场景按需处理

## 🚀 开始使用

现在你可以：

1. ✅ 在 CSS 文件中直接写 `px`，构建时自动转换
2. ✅ 在 JavaScript/TypeScript 中使用 `px()` 函数
3. ✅ 所有尺寸都会根据屏幕大小自适应缩放

享受编码的便利！🎉






