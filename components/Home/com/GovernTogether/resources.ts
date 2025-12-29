/**
 * GovernTogether 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/GovernTogether/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

// ==================== 图片资源 ====================
export const images = {
  // 背景图片（初始化状态）
  background: '/home/GovernTogether/img/bgc.png',
  // Hover 状态 GIF 动画
  hover: '/home/GovernTogether/img/hover.gif',
} as const

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData
