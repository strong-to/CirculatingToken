#!/usr/bin/env node

/**
 * 图片加载性能诊断脚本
 * 用于检查图片优化和加载配置
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 图片加载性能诊断\n');

// 1. 检查环境变量
console.log('1. 检查环境变量配置:');
const envFiles = ['.env.local', '.env.production', '.env'];
let hasCdnConfig = false;

envFiles.forEach(file => {
  const envPath = path.join(process.cwd(), file);
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    if (content.includes('NEXT_PUBLIC_CDN_BASE_URL')) {
      console.log(`   ✅ ${file}: 找到 CDN 配置`);
      hasCdnConfig = true;
      const cdnUrl = content.match(/NEXT_PUBLIC_CDN_BASE_URL=(.+)/)?.[1];
      if (cdnUrl) {
        console.log(`      CDN URL: ${cdnUrl}`);
      }
    } else {
      console.log(`   ⚠️  ${file}: 未找到 CDN 配置`);
    }
  }
});

if (!hasCdnConfig) {
  console.log('   ❌ 未配置 CDN，建议配置以加速图片加载\n');
}

// 2. 检查图片优化脚本
console.log('\n2. 检查图片优化配置:');
const optimizeScript = path.join(process.cwd(), 'scripts/optimize-images.js');
if (fs.existsSync(optimizeScript)) {
  console.log('   ✅ 图片优化脚本存在');
} else {
  console.log('   ❌ 图片优化脚本不存在');
}

// 3. 检查 package.json 中的优化脚本
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);
if (packageJson.scripts && packageJson.scripts['optimize-images']) {
  console.log('   ✅ package.json 中配置了 optimize-images 脚本');
} else {
  console.log('   ⚠️  package.json 中未配置 optimize-images 脚本');
}

if (packageJson.scripts.prebuild === 'npm run optimize-images') {
  console.log('   ✅ prebuild 已配置为自动优化图片');
} else {
  console.log('   ⚠️  prebuild 未配置为自动优化图片');
}

// 4. 检查 next.config.js
console.log('\n3. 检查 Next.js 配置:');
const nextConfig = fs.readFileSync(path.join(process.cwd(), 'next.config.js'), 'utf8');
if (nextConfig.includes('unoptimized: true')) {
  console.log('   ⚠️  图片优化已禁用（静态导出模式必需）');
  console.log('   💡 建议：使用 CDN 或手动优化图片');
} else {
  console.log('   ✅ 图片优化已启用');
}

// 5. 检查图片文件大小
console.log('\n4. 检查 LendingVault 页面图片大小:');
const lendingVaultImgDir = path.join(process.cwd(), 'public/LendingVault');
if (fs.existsSync(lendingVaultImgDir)) {
  const checkImageSize = (dir, maxSize = 500 * 1024) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let largeFiles = [];
    
    files.forEach(file => {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        largeFiles = largeFiles.concat(checkImageSize(filePath, maxSize));
      } else if (/\.(png|jpg|jpeg)$/i.test(file.name)) {
        const stats = fs.statSync(filePath);
        if (stats.size > maxSize) {
          largeFiles.push({
            path: filePath.replace(process.cwd(), ''),
            size: (stats.size / 1024).toFixed(2) + ' KB'
          });
        }
      }
    });
    
    return largeFiles;
  };
  
  const largeFiles = checkImageSize(lendingVaultImgDir);
  if (largeFiles.length > 0) {
    console.log(`   ⚠️  发现 ${largeFiles.length} 个大文件（>500KB）:`);
    largeFiles.slice(0, 10).forEach(file => {
      console.log(`      ${file.path}: ${file.size}`);
    });
    if (largeFiles.length > 10) {
      console.log(`      ... 还有 ${largeFiles.length - 10} 个文件`);
    }
    console.log('   💡 建议：运行 npm run optimize-images 优化这些图片');
  } else {
    console.log('   ✅ 未发现过大的图片文件');
  }
} else {
  console.log('   ⚠️  LendingVault 图片目录不存在');
}

// 6. 检查 ImagePreloader 使用情况
console.log('\n5. 检查图片预加载配置:');
const lendingVaultPage = fs.readFileSync(
  path.join(process.cwd(), 'app/LendingVault/page.tsx'),
  'utf8'
);
if (lendingVaultPage.includes('ImagePreloader')) {
  console.log('   ✅ LendingVault 页面已使用 ImagePreloader');
} else {
  console.log('   ❌ LendingVault 页面未使用 ImagePreloader');
}

// 7. 优化建议
console.log('\n📋 优化建议:');
console.log('   1. 配置 CDN（如果未配置）:');
console.log('      - 创建 .env.production 文件');
console.log('      - 设置 NEXT_PUBLIC_CDN_BASE_URL 和 NEXT_PUBLIC_USE_CDN=true');
console.log('');
console.log('   2. 优化图片:');
console.log('      - 运行: npm run optimize-images');
console.log('      - 这会压缩图片并生成 WebP 版本');
console.log('');
console.log('   3. 服务器配置:');
console.log('      - 启用 Gzip 压缩');
console.log('      - 配置静态资源缓存头');
console.log('      - 使用 HTTP/2');
console.log('');
console.log('   4. 检查网络:');
console.log('      - 在浏览器开发者工具中检查图片加载时间');
console.log('      - 确认图片是否从 CDN 加载');
console.log('      - 检查是否有 404 错误');

