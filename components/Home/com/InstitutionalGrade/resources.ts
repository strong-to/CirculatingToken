/**
 * InstitutionalGrade 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案直接从 public/home/InstitutionalGrade/text/texts.json 读取
 * 
 * 无论服务端还是客户端，都优先从 public 目录读取
 */

import { loadTextsFromPublicSync } from '@/utils/loadTexts'

// 直接从 public 目录读取文案
// 服务端：从 public 目录读取，并同步到组件目录
// 客户端：从 public 目录读取（通过 URL），如果失败则从组件目录读取
let textsData: any;

if (typeof window === 'undefined') {
  // 服务端：从 public 目录读取，并同步到组件目录
  try {
    textsData = loadTextsFromPublicSync('/home/InstitutionalGrade/text/texts.json');
    // 同步到组件目录，确保客户端也能读到最新数据
    try {
      const fs = require('fs');
      const path = require('path');
      const componentPath = path.join(__dirname, 'text', 'texts.json');
      const componentDir = path.dirname(componentPath);
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
      }
      fs.writeFileSync(componentPath, JSON.stringify(textsData, null, 2), 'utf-8');
      // 清除模块缓存，确保下次 require 时能读到最新数据
      const resolvedPath = require.resolve('./text/texts.json');
      if (require.cache[resolvedPath]) {
        delete require.cache[resolvedPath];
      }
    } catch (syncError) {
      // 同步失败不影响使用，只是客户端可能会读到旧数据
      console.warn('同步文案文件失败，但不影响使用', syncError);
    }
  } catch (error) {
    // 如果失败，从组件目录读取
    textsData = require('./text/texts.json');
  }
} else {
  // 客户端：从组件目录读取（服务端已同步的最新数据）
  // 清除模块缓存，确保能读到最新数据
  try {
    const resolvedPath = require.resolve('./text/texts.json');
    if (require.cache && require.cache[resolvedPath]) {
      delete require.cache[resolvedPath];
    }
  } catch (e) {
    // 忽略错误
  }
  textsData = require('./text/texts.json');
}

// ==================== 图片资源 ====================
export const images = {
  // FooterLogo 图片
  footerLogo: {
    asterisk: '/home/FooterLogo/img/asterisk.png',
    books: '/home/FooterLogo/img/books.png',
    dune: '/home/FooterLogo/img/dune.png',
    oas: '/home/FooterLogo/img/oas.png',
    opal: '/home/FooterLogo/img/opal.png',
  },
  // DEEPBLUE 图片
  deepBlue: {
    deepblue: '/home/InstitutionalGrade/img/DEEPBLUE/DEEPBLUE.png',
    foot: '/home/InstitutionalGrade/img/DEEPBLUE/foot.png',
    frame: '/home/InstitutionalGrade/img/DEEPBLUE/Frame.png',
    projects: '/home/InstitutionalGrade/img/DEEPBLUE/PROJECTS.png',
  },
} as const

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData

