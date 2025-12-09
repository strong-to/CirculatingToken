/**
 * WhereUsingBecomes 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/WhereUsingBecomes/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

// ==================== 图片资源 ====================
export const images = {
  // 卡片图片
  investing1: '/home/WhereUsingBecomes/img/Investing1.png',
  investing2: '/home/WhereUsingBecomes/img/Investing2.png',
  investing3: '/home/WhereUsingBecomes/img/Investing3.png',
  investing4: '/home/WhereUsingBecomes/img/Investing4.png',
  investing5: '/home/WhereUsingBecomes/img/Investing5.png',
  // 装饰图标
  arr: '/home/icons/img/arr.png', // 使用通用图标
  games: '/home/icons/img/games.png', // 使用通用图标
  vector1: '/home/WhereUsingBecomes/img/Vector1.png',
  vector2: '/home/WhereUsingBecomes/img/Vector2.png',
  vector3: '/home/WhereUsingBecomes/img/Vector3.png',
  vector4: '/home/WhereUsingBecomes/img/Vector4.png',
  waitingEarth: '/home/WhereUsingBecomes/img/waitingEarth.png',
  wallE: '/home/WhereUsingBecomes/img/WALL-E.png',
} as const

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData

