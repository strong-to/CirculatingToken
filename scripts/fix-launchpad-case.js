#!/usr/bin/env node

/**
 * 构建后脚本：确保 Launchpad 目录在输出中保持大写
 * 在 macOS 等大小写不敏感的文件系统上，Next.js 可能会将路径转换为小写
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const launchpadPath = path.join(outDir, 'launchpad');
const LaunchpadPath = path.join(outDir, 'Launchpad');

// 检查是否存在小写的 launchpad 目录
if (fs.existsSync(launchpadPath) && !fs.existsSync(LaunchpadPath)) {
  console.log('发现小写的 launchpad 目录，重命名为 Launchpad...');
  
  try {
    // 重命名目录
    fs.renameSync(launchpadPath, LaunchpadPath);
    console.log('✓ 成功将 launchpad 重命名为 Launchpad');
  } catch (error) {
    console.error('✗ 重命名失败:', error.message);
    process.exit(1);
  }
} else if (fs.existsSync(LaunchpadPath)) {
  console.log('✓ Launchpad 目录已存在，大小写正确');
} else {
  console.log('⚠ 未找到 Launchpad 目录，可能构建尚未完成');
}

