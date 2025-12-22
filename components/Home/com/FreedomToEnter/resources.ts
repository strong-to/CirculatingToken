/**
 * FreedomToEnter 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案直接从 public/home/FreedomToEnter/text/texts.json 读取
 */

import { loadTextsFromPublicSync } from '@/utils/loadTexts'

// ==================== 图片资源 ====================
export const images = {
  // 背景图（初始化状态）
  background: '/home/FreedomToEnter/img/bgc.png',
  // hover 状态 gif
  hover: '/home/FreedomToEnter/img/hover.gif',
  // 通用图标
  sword: '/home/icons/img/sword.png',
  arrow: '/home/icons/img/arr.png',
} as const

// ==================== 文案资源 ====================
// 动态读取文案的函数（避免模块缓存问题）
function getTextsData() {
  if (typeof window === 'undefined') {
    // 服务端：每次调用都从 public 目录重新读取
    // 在开发模式下，每次都强制重新读取，确保获取最新数据
    try {
      // 清除可能的缓存
      const fs = require('fs');
      const path = require('path');
      const publicPath = path.join(process.cwd(), 'public', 'home', 'FreedomToEnter', 'text', 'texts.json');
      
      // 直接读取 public 目录的文件
      if (fs.existsSync(publicPath)) {
        const fileContent = fs.readFileSync(publicPath, 'utf-8');
        const data = JSON.parse(fileContent);
        
        // 同步到组件目录（用于客户端 hydration）
        try {
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
      } else {
        // 如果 public 文件不存在，从组件目录读取
        const resolvedPath = require.resolve('./text/texts.json');
        if (require.cache[resolvedPath]) {
          delete require.cache[resolvedPath];
        }
        return require('./text/texts.json');
      }
    } catch (error) {
      console.warn('读取 public 目录文案失败，尝试从组件目录读取', error);
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
    // 客户端：从组件目录读取（服务端已同步的最新数据）
    return require('./text/texts.json');
  }
}

// 使用函数动态读取，避免模块缓存问题
export const texts = getTextsData() as ReturnType<typeof getTextsData>

