#!/usr/bin/env node

/**
 * 监听 public 目录下的 texts.json 文件变化，自动同步到组件目录
 * 使用方法: node scripts/watch-texts.js
 */

const fs = require('fs');
const path = require('path');

// 需要同步的文件映射
const syncMap = [
  {
    source: 'public/home/InstitutionalGrade/text/texts.json',
    target: 'components/Home/com/InstitutionalGrade/text/texts.json'
  },
  {
    source: 'public/home/YourNextWorld/text/texts.json',
    target: 'components/Home/com/YourNextWorld/text/texts.json'
  },
  {
    source: 'public/home/LetEveryShare/text/texts.json',
    target: 'components/Home/com/LetEveryShare/text/texts.json'
  },
  {
    source: 'public/home/BuildWithThe/text/texts.json',
    target: 'components/Home/com/BuildWithThe/text/texts.json'
  },
  {
    source: 'public/home/WhereUsingBecomes/text/texts.json',
    target: 'components/Home/com/WhereUsingBecomes/text/texts.json'
  },
  {
    source: 'public/tokenMarketplace/ContentCard/text/texts.json',
    target: 'components/TokenMarketplace/com/ContentCard/text/texts.json'
  }
];

// 同步单个文件
function syncFile(source, target) {
  const sourcePath = path.resolve(__dirname, '..', source);
  const targetPath = path.resolve(__dirname, '..', target);
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  源文件不存在: ${source}`);
    return;
  }

  // 确保目标目录存在
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 复制文件
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`✓ 已同步: ${source} -> ${target}`);
}

// 初始化：同步所有文件
console.log('🔄 开始监听文案文件变化...\n');
syncMap.forEach(({ source, target }) => {
  syncFile(source, target);
});

// 监听文件变化
syncMap.forEach(({ source, target }) => {
  const sourcePath = path.resolve(__dirname, '..', source);
  const sourceDir = path.dirname(sourcePath);
  const fileName = path.basename(sourcePath);

  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  目录不存在: ${sourceDir}`);
    return;
  }

  // 监听目录
  fs.watch(sourceDir, { recursive: false }, (eventType, file) => {
    if (file === fileName && eventType === 'change') {
      console.log(`\n📝 检测到文件变化: ${source}`);
      syncFile(source, target);
      console.log('✅ 同步完成！页面会自动刷新。\n');
    }
  });

  console.log(`👀 正在监听: ${source}`);
});

console.log('\n✨ 文件监听已启动！修改 public 目录下的 texts.json 文件会自动同步。');
console.log('按 Ctrl+C 停止监听。\n');

