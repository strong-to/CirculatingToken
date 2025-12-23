/**
 * BuildWithThe 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/BuildWithThe/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

// ==================== 图片资源 ====================
export const images = {
  // 卡片图片
  investing1: '/home/BuildWithThe/img/Investing1.png',
  investing2: '/home/BuildWithThe/img/Investing2.png',
  investing3: '/home/BuildWithThe/img/Investing3.png',
  investing4: '/home/BuildWithThe/img/Investing4.png',
  investing5: '/home/BuildWithThe/img/Investing5.png',
  investing6: '/home/BuildWithThe/img/Investing6.png',
  investing7: '/home/BuildWithThe/img/Investing7.png',
  investing8: '/home/BuildWithThe/img/Investing8.png',
  investing9: '/home/BuildWithThe/img/Investing9.png',
  investing10: '/home/BuildWithThe/img/Investing10.png',
  // 装饰图标
  earth: '/home/BuildWithThe/img/Earth.png',
  games: '/home/BuildWithThe/img/games.png',
  greenMatrix: '/home/BuildWithThe/img/GREENMatrix.png',
  // 通用图标（从 Icons 资源导入）
  sword: '/home/icons/img/sword.png',
  umbrella: '/home/icons/img/umbrella.png',
  arrow: '/home/icons/img/arr.png',
} as const

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData

