#!/usr/bin/env node

/**
 * 批量替换项目中的 Image 组件为 ImageWithSkeleton
 * 
 * 使用方法：
 * node scripts/replace-images-with-skeleton.js
 */

const fs = require('fs');
const path = require('path');

// 需要处理的文件列表（排除 ImageWithSkeleton.tsx 本身）
const filesToProcess = [
  'components/Home/FreedomToEnter.tsx',
  'components/Home/LetEveryShare.tsx',
  'components/Home/YourNextWorld.tsx',
  'components/Home/LiquidityThat.tsx',
  'components/Home/com/InstitutionalGrade/Partners.tsx',
  'components/Home/com/InstitutionalGrade/FooterLogo.tsx',
  'components/Home/com/LiquidityThat/BlueSquareCard.tsx',
  'components/Home/com/GovernTogether/BlueSquareCard.tsx',
  'components/Home/com/UseCaseSection/BlueSquareCard copy.tsx',
  'components/Home/com/UseCaseSection/BlueSquareCard.tsx',
  'components/Home/com/YourNextWorld/BlueSquareCard.tsx',
  'components/Home/com/FreedomToEnter/BlueSquareCard.tsx',
  'components/Home/com/LetEveryShare/BlueSquareCard.tsx',
  'components/Home/GovernTogether.tsx',
  'components/Launchpad/com/TemplateSelection.tsx',
  'components/Launchpad/com/ProjectHomepagePreview.tsx',
  'components/Launchpad/com/LogoPromotionalMaterials.tsx',
  'components/TokenMarketplace/com/ChatImages.tsx',
  'components/TokenMarketplace/com/TokenImages.tsx',
  'components/TokenMarketplace/com/ContentCard.tsx',
  'components/TokenMarketplace/com/ChatContent/InitialContent.tsx',
  'components/TokenMarketplace/com/ChatContent/ClickedContent.tsx',
  'components/TokenMarketplace/com/ChatContent/HoverContent.tsx',
  'components/Header/Header.tsx',
];

function processFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  文件不存在: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // 替换 import 语句
  if (content.includes("from 'next/image'") || content.includes('from "next/image"')) {
    // 检查是否已经导入了 ImageWithSkeleton
    if (!content.includes('ImageWithSkeleton')) {
      content = content.replace(
        /import\s+Image\s+from\s+['"]next\/image['"];?/g,
        "import ImageWithSkeleton from '@/components/common/ImageWithSkeleton';"
      );
      modified = true;
    } else {
      // 如果已经导入了 ImageWithSkeleton，只删除 Image 的导入
      content = content.replace(
        /import\s+Image\s+from\s+['"]next\/image['"];?\n?/g,
        ""
      );
      modified = true;
    }
  }

  // 替换 <Image 为 <ImageWithSkeleton（但保留属性）
  // 注意：这是一个简单的替换，可能需要手动调整一些特殊情况
  const imageRegex = /<Image\s+/g;
  if (imageRegex.test(content)) {
    content = content.replace(imageRegex, '<ImageWithSkeleton ');
    modified = true;
  }

  // 替换 </Image> 为 </ImageWithSkeleton>
  if (content.includes('</Image>')) {
    content = content.replace(/<\/Image>/g, '</ImageWithSkeleton>');
    modified = true;
  }

  // 处理常见的 style 属性，转换为 ImageWithSkeleton 的属性
  // objectFit: 从 style={{ objectFit: "cover" }} 转换为 objectFit="cover"
  content = content.replace(
    /style=\{\{\s*objectFit:\s*['"](cover|contain|fill|none|scale-down)['"]\s*\}\}/g,
    (match, fit) => `objectFit="${fit}"`
  );

  // 处理 borderRadius
  content = content.replace(
    /style=\{\{\s*[^}]*borderRadius:\s*([^,}]+)[^}]*\}\}/g,
    (match, radius) => {
      // 提取 borderRadius 值
      const radiusMatch = match.match(/borderRadius:\s*([^,}]+)/);
      if (radiusMatch) {
        return `borderRadius={${radiusMatch[1].trim()}}`;
      }
      return match;
    }
  );

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ 已处理: ${filePath}`);
    return true;
  } else {
    console.log(`⏭️  跳过（无需修改）: ${filePath}`);
    return false;
  }
}

// 主函数
function main() {
  console.log('🚀 开始批量替换 Image 为 ImageWithSkeleton...\n');
  
  let successCount = 0;
  let skipCount = 0;
  
  filesToProcess.forEach(file => {
    if (processFile(file)) {
      successCount++;
    } else {
      skipCount++;
    }
  });
  
  console.log(`\n✨ 处理完成！`);
  console.log(`   ✅ 成功: ${successCount}`);
  console.log(`   ⏭️  跳过: ${skipCount}`);
  console.log(`\n💡 提示: 请检查替换后的文件，可能需要手动调整一些特殊情况`);
}

main();




