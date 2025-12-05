/**
 * pxToRem 使用示例
 * 
 * 这个文件展示了如何在项目中使用 px 转 rem 的工具函数
 */

import { px, pxToRem, pxToRemObject } from './pxToRem'

// ========== 示例 1: 基本使用 ==========
export function Example1() {
  return (
    <div
      style={{
        width: px(100),        // 自动转换为 '6.25rem'
        height: px(50),        // 自动转换为 '3.125rem'
        fontSize: px(16),     // 自动转换为 '1rem'
        padding: px(20),       // 自动转换为 '1.25rem'
      }}
    >
      示例 1
    </div>
  )
}

// ========== 示例 2: 批量转换 ==========
export function Example2() {
  const styles = pxToRemObject({
    width: 200,
    height: 100,
    fontSize: 24,
    marginTop: 16,
    padding: 20,
  })
  // 结果: { width: '12.5rem', height: '6.25rem', fontSize: '1.5rem', marginTop: '1rem', padding: '1.25rem' }

  return <div style={styles}>示例 2</div>
}

// ========== 示例 3: 在 CSS 文件中直接写 px（会自动转换） ==========
// 在 globals.css 或任何 .css 文件中：
/*
.example {
  width: 100px;    // 构建时自动转换为 6.25rem
  height: 50px;    // 构建时自动转换为 3.125rem
  font-size: 16px; // 构建时自动转换为 1rem
}
*/

// ========== 示例 4: Tailwind 任意值（需要手动转换） ==========
export function Example4() {
  // ❌ 不推荐：Tailwind 任意值不会自动转换
  // <div className="w-[100px] h-[50px]">
  
  // ✅ 推荐：使用 style 属性
  return (
    <div style={{ width: px(100), height: px(50) }}>
      示例 4
    </div>
  )
  
  // ✅ 或者：使用 Tailwind 的 rem 值
  // <div className="w-[6.25rem] h-[3.125rem]">
}

// ========== 示例 5: 复杂样式对象 ==========
export function Example5() {
  return (
    <div
      style={{
        ...pxToRemObject({
          width: 300,
          height: 200,
          padding: 20,
          margin: 16,
        }),
        backgroundColor: '#ffffff', // 非数值属性保持不变
        display: 'flex',
      }}
    >
      示例 5
    </div>
  )
}

// ========== 使用建议 ==========
/*
1. CSS 文件（.css, .scss 等）：
   - 直接写 px，PostCSS 会自动转换为 rem
   - 例如：width: 100px; → width: 6.25rem;

2. 内联样式（style 属性）：
   - 使用 px() 函数：style={{ width: px(100) }}
   - 或使用 pxToRemObject() 批量转换

3. Tailwind 任意值：
   - 推荐使用 style 属性 + px() 函数
   - 或手动计算 rem 值：w-[6.25rem]

4. 不需要转换的情况：
   - border: 1px solid #000; （1px 边框通常不转换）
   - 可以通过 PostCSS 配置排除某些属性
*/






