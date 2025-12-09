/**
 * TemplateSelection 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 */

// ==================== 图片资源 ====================
export const images = {
  // 模板图片（12张）
  templates: Array.from({ length: 12 }, (_, i) => 
    `/launchpad/TemplateSelection/img/Mask${i + 1}.png`
  ),
  // 搜索图标
  searchIcon: '/header/img/search.png',
} as const

// ==================== 文案资源 ====================
export const texts = {
  // （待添加文案）
} as const

