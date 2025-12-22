/**
 * LetEveryShare 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案直接从 public/home/LetEveryShare/text/texts.json 读取
 */

import { loadTextsFromPublicSync } from '@/utils/loadTexts'

// 动态读取文案的函数（避免模块缓存问题）
function getTextsData() {
  if (typeof window === 'undefined') {
    // 服务端：每次调用都从 public 目录重新读取
    try {
      const data = loadTextsFromPublicSync('/home/LetEveryShare/text/texts.json');
      
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
        const resolvedPath = require.resolve('./text/texts.json');
        if (require.cache[resolvedPath]) {
          delete require.cache[resolvedPath];
        }
      } catch (syncError) {
        console.warn('同步文案文件失败，但不影响使用', syncError);
      }
      
      return data;
    } catch (error) {
      try {
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
    return require('./text/texts.json');
  }
}

// ==================== 图片资源 ====================
export const images = {
  // 卡片图片
  investing1: '/home/LetEveryShare/img/Investing1.png',
  investing2: '/home/LetEveryShare/img/Investing2.png',
  investing3: '/home/LetEveryShare/img/Investing3.png',
  investing4: '/home/LetEveryShare/img/Investing4.png',
  investing5: '/home/LetEveryShare/img/Investing5.png',
  investing6: '/home/LetEveryShare/img/Investing6.png',
  investing7: '/home/LetEveryShare/img/Investing7.png',
  investing8: '/home/LetEveryShare/img/Investing8.png',
  investing9: '/home/LetEveryShare/img/Investing9.png',
  investing10: '/home/LetEveryShare/img/Investing10.png',
  // 通用图标
  sword: '/home/icons/img/sword.png',
  arrow: '/home/icons/img/arr.png',
} as const

// ==================== 文案资源 ====================
// 使用函数动态读取，避免模块缓存问题
export const texts = getTextsData() as ReturnType<typeof getTextsData>

