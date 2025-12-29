/**
 * Home 页面通用图标资源
 * 所有子组件共享的图标
 */

import { CDN_PREFIX } from '@/utils/cdn'

const CDN = CDN_PREFIX

const iconPaths = {
  sword: `${CDN}/home/icons/img/sword.png`,
  umbrella: `${CDN}/home/icons/img/umbrella.png`,
  arrow: `${CDN}/home/icons/img/arr.png`,
  games: `${CDN}/home/icons/img/games.png`,
} as const

export const icons = iconPaths







