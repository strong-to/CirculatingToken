/**
 * BuildWithThe 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/BuildWithThe/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'
import { CDN_PREFIX } from '@/utils/cdn'

const CDN = CDN_PREFIX

// ==================== 图片资源 ====================
const imagePaths = {
  // 卡片图片
  investing1: `${CDN}/home/BuildWithThe/img/Investing1.png`,
  investing2: `${CDN}/home/BuildWithThe/img/Investing2.png`,
  investing3: `${CDN}/home/BuildWithThe/img/Investing3.png`,
  investing4: `${CDN}/home/BuildWithThe/img/Investing4.png`,
  investing5: `${CDN}/home/BuildWithThe/img/Investing5.png`,
  investing6: `${CDN}/home/BuildWithThe/img/Investing6.png`,
  investing7: `${CDN}/home/BuildWithThe/img/Investing7.png`,
  investing8: `${CDN}/home/BuildWithThe/img/Investing8.png`,
  investing9: `${CDN}/home/BuildWithThe/img/Investing9.png`,
  investing10: `${CDN}/home/BuildWithThe/img/Investing10.png`,
  // 装饰图标
  earth: `${CDN}/home/BuildWithThe/img/Earth.png`,
  games: `${CDN}/home/BuildWithThe/img/games.png`,
  greenMatrix: `${CDN}/home/BuildWithThe/img/GREENMatrix.png`,
  // 通用图标（从 Icons 资源导入）
  sword: `${CDN}/home/icons/img/sword.png`,
  umbrella: `${CDN}/home/icons/img/umbrella.png`,
  arrow: `${CDN}/home/icons/img/arr.png`,
} as const

export const images = imagePaths

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData
