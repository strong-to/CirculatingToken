/**
 * Home 页面通用图标资源文件
 * 包含所有子组件使用的图标
 */

import { CDN_PREFIX } from '@/utils/cdn'

const CDN = CDN_PREFIX

// ==================== 图片资源 ====================
const iconPaths = {
  sword: `${CDN}/home/icons/img/sword.png`,
  umbrella: `${CDN}/home/icons/img/umbrella.png`,
  arrow: `${CDN}/home/icons/img/arr.png`, // 从 Investing/arr.png 迁移
  games: `${CDN}/home/icons/img/games.png`, // 从 Investing/games.png 迁移
} as const

export const images = iconPaths







