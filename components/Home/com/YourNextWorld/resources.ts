/**
 * YourNextWorld 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案直接从 public/home/YourNextWorld/text/texts.json 读取
 */

import { loadTextsFromPublicSync } from '@/utils/loadTexts'

// 动态读取文案的函数（避免模块缓存问题）
function getTextsData() {
  if (typeof window === 'undefined') {
    // 服务端：每次调用都从 public 目录重新读取
    try {
      const data = loadTextsFromPublicSync('/home/YourNextWorld/text/texts.json');
      
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
  // 卡片背景图（初始化状态）
  datasets: '/home/YourNextWorld/img/img_datasets.png',
  computePool: '/home/YourNextWorld/img/img_compute_paool.png',
  foundationalModels: '/home/YourNextWorld/img/img_foundational_models.png',
  workflows: '/home/YourNextWorld/img/img_workflows.png',
  aiAgents: '/home/YourNextWorld/img/img_ai_agents.png',
  // 初始化状态图片
  init: {
    datasets: '/home/YourNextWorld/img/init/img1.png',
    computePool: '/home/YourNextWorld/img/init/img2.png',
    foundationalModels: '/home/YourNextWorld/img/init/img3.png',
    workflows: '/home/YourNextWorld/img/init/img4.png',
    aiAgents: '/home/YourNextWorld/img/init/img5.png',
  },
  // hover 状态 gif
  hover: {
    datasets: '/home/YourNextWorld/img/hover/01.gif',
    computePool: '/home/YourNextWorld/img/hover/02.gif',
    foundationalModels: '/home/YourNextWorld/img/hover/03.gif',
    workflows: '/home/YourNextWorld/img/hover/04.gif',
    aiAgents: '/home/YourNextWorld/img/hover/05.gif',
  },
  // 通用图标
  games: '/home/icons/img/games.png',
  arrow: '/home/icons/img/arr.png',
} as const

// 图片路径类型
export type ImageKey = keyof typeof images

// ==================== 文案资源 ====================
// 使用函数动态读取，避免模块缓存问题
export const texts = getTextsData() as ReturnType<typeof getTextsData>

