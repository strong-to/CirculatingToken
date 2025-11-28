/**
 * 将 px 值转换为 rem 值
 * 基于 1rem = 16px 的换算
 * 
 * @param px - 像素值
 * @returns rem 值（字符串格式，带 'rem' 单位）
 * 
 * @example
 * pxToRem(16) // '1rem'
 * pxToRem(20) // '1.25rem'
 * pxToRem(84) // '5.25rem'
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`
}

/**
 * 批量转换多个 px 值为 rem 值
 * 
 * @param values - 包含 px 值的对象
 * @returns 转换后的对象，所有数值都转换为 rem 字符串
 * 
 * @example
 * pxToRemObject({ width: 100, height: 50, fontSize: 16 })
 * // { width: '6.25rem', height: '3.125rem', fontSize: '1rem' }
 */
export function pxToRemObject<T extends Record<string, number | string>>(
  values: T
): Record<keyof T, string> {
  const result = {} as Record<keyof T, string>
  
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'number') {
      result[key as keyof T] = pxToRem(value)
    } else {
      result[key as keyof T] = value
    }
  }
  
  return result
}

/**
 * CSS 属性值的 px 转 rem 辅助函数
 * 可以直接在 style 对象中使用
 * 
 * @example
 * style={{
 *   width: px(100),
 *   height: px(50),
 *   fontSize: px(16)
 * }}
 */
export const px = pxToRem

