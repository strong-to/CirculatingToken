/**
 * WhereUsingBecomes 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/WhereUsingBecomes/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

import { CDN_PREFIX, toCdnUrl } from '@/utils/cdn'

const CDN = CDN_PREFIX

// ==================== 图片资源 ====================
const imagePaths = {
  // 卡片图片
  investing1: `${CDN}/home/WhereUsingBecomes/img/Investing1.png`,
  investing2: `${CDN}/home/WhereUsingBecomes/img/Investing2.png`,
  investing3: `${CDN}/home/WhereUsingBecomes/img/Investing3.png`,
  investing4: `${CDN}/home/WhereUsingBecomes/img/Investing4.png`,
  investing5: `${CDN}/home/WhereUsingBecomes/img/Investing5.png`,
  investing6: `${CDN}/home/WhereUsingBecomes/img/Investing6.png`,
  investing7: `${CDN}/home/WhereUsingBecomes/img/Investing7.png`,
  investing8: `${CDN}/home/WhereUsingBecomes/img/Investing8.png`,
  investing9: `${CDN}/home/WhereUsingBecomes/img/Investing9.png`,
  investing10: `${CDN}/home/WhereUsingBecomes/img/Investing10.png`,
  // 装饰图标
  arr: `${CDN}/home/icons/img/arr.png`, // 使用通用图标
  games: `${CDN}/home/icons/img/games.png`, // 使用通用图标
  vector1: `${CDN}/home/WhereUsingBecomes/img/Vector1.png`,
  vector2: `${CDN}/home/WhereUsingBecomes/img/Vector2.png`,
  vector3: `${CDN}/home/WhereUsingBecomes/img/Vector3.png`,
  vector4: `${CDN}/home/WhereUsingBecomes/img/Vector4.png`,
  waitingEarth: `${CDN}/home/WhereUsingBecomes/img/waitingEarth.png`,
  wallE: `${CDN}/home/WhereUsingBecomes/img/WALL-E.png`,
} as const

export const images = Object.fromEntries(
  Object.entries(imagePaths).map(([key, value]) => [key, toCdnUrl(value)])
) as typeof imagePaths

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData
