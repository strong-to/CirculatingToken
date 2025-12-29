/**
 * FreedomToEnter 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/FreedomToEnter/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'
import { CDN_PREFIX } from '@/utils/cdn'

const CDN = CDN_PREFIX

// ==================== 图片资源 ====================
const imagePaths = {
  // 背景图片（初始化状态）
  background: `${CDN}/home/FreedomToEnter/img/bgc.png`,
  // Hover 状态 GIF 动画
  hover: `${CDN}/home/FreedomToEnter/img/hover.gif`,
} as const

export const images = imagePaths

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData
