/**
 * WhereUsingBecomes 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案直接从 public/home/WhereUsingBecomes/text/texts.json 读取
 */

import { loadTextsFromPublicSync } from '@/utils/loadTexts'

// 动态读取文案的函数（避免模块缓存问题）
function getTextsData() {
  if (typeof window === 'undefined') {
    // 服务端：每次调用都从 public 目录重新读取
    // 这样可以确保修改 public 目录的文件后立即生效，无需重启
    try {
      const data = loadTextsFromPublicSync('/home/WhereUsingBecomes/text/texts.json');
      
      // 同步到组件目录（用于客户端 hydration）
      try {
        const fs = require('fs');
        const path = require('path');
        const componentPath = path.join(__dirname, 'text', 'texts.json');
        const componentDir = path.dirname(componentPath);
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir, { recursive: true });
        }
        fs.writeFileSync(componentPath, JSON.stringify(data, null, 2), 'utf-8');
        // 清除 require 缓存，确保下次读取最新数据
        const resolvedPath = require.resolve('./text/texts.json');
        if (require.cache[resolvedPath]) {
          delete require.cache[resolvedPath];
        }
      } catch (syncError) {
        console.warn('同步文案文件失败，但不影响使用', syncError);
      }
      
      return data;
    } catch (error) {
      // 如果 public 目录读取失败，尝试从组件目录读取
      try {
        // 清除缓存后重新读取
        const resolvedPath = require.resolve('./text/texts.json');
        if (require.cache[resolvedPath]) {
          delete require.cache[resolvedPath];
        }
        return require('./text/texts.json');
      } catch (e) {
        console.error('无法读取文案文件', e);
        return {};
      }
    }
  } else {
    // 客户端：从组件目录读取（服务端已同步的最新数据）
    return require('./text/texts.json');
  }
}

// ==================== 图片资源 ====================
export const images = {
  // 卡片图片
  investing1: '/home/WhereUsingBecomes/img/Investing1.png',
  investing2: '/home/WhereUsingBecomes/img/Investing2.png',
  investing3: '/home/WhereUsingBecomes/img/Investing3.png',
  investing4: '/home/WhereUsingBecomes/img/Investing4.png',
  investing5: '/home/WhereUsingBecomes/img/Investing5.png',
  investing6: '/home/WhereUsingBecomes/img/Investing6.png',
  investing7: '/home/WhereUsingBecomes/img/Investing7.png',
  investing8: '/home/WhereUsingBecomes/img/Investing8.png',
  investing9: '/home/WhereUsingBecomes/img/Investing9.png',
  investing10: '/home/WhereUsingBecomes/img/Investing10.png',
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
// 使用函数动态读取，避免模块缓存问题
// 注意：在服务端，每次调用都会重新读取 public 目录的文件
export const texts = getTextsData() as ReturnType<typeof getTextsData>

