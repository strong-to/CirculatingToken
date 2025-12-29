#!/usr/bin/env node

/**
 * 图片优化脚本
 * 用于在构建前优化所有图片
 * 
 * 功能：
 * 1. 压缩 PNG/JPEG 图片
 * 2. 转换为 WebP 格式（可选）
 * 3. 生成多种尺寸的图片（可选）
 * 
 * 使用方法：
 * npm run optimize-images
 * 或
 * node scripts/optimize-images.js
 */

const fs = require('fs')
const path = require('path')

// 配置
const config = {
  // 图片目录
  imageDirs: [
    'public/header/img',
    'public/home',
    'public/LendingVault',
    'public/ConferenceRoom',
    'public/MortgageMarket',
    'public/launchpad',
    'public/tokenMarketplace',
  ],
  
  // 支持的图片格式
  imageExtensions: ['.png', '.jpg', '.jpeg'],
  
  // WebP 质量（1-100）
  webpQuality: 85,
  
  // 压缩质量（对于 JPEG）
  jpegQuality: 85,
  
  // 是否生成 WebP 版本
  generateWebP: true,
  
  // 是否压缩原图
  compressOriginal: true,
  
  // 是否生成多种尺寸（响应式图片）
  generateResponsive: false,
  
  // 响应式图片尺寸
  responsiveSizes: [400, 800, 1200, 1920],
}

/**
 * 检查是否安装了必要的工具
 */
function checkDependencies() {
  const tools = {
    'sharp': 'npm install sharp --save-dev',
    'imagemin': 'npm install imagemin imagemin-mozjpeg imagemin-pngquant --save-dev',
  }
  
  const missing = []
  
  try {
    require.resolve('sharp')
  } catch (e) {
    missing.push('sharp')
  }
  
  if (missing.length > 0) {
    console.error('❌ 缺少必要的依赖包：')
    missing.forEach(tool => {
      console.error(`   请运行: ${tools[tool]}`)
    })
    process.exit(1)
  }
  
  console.log('✅ 依赖检查通过')
}

/**
 * 获取目录下所有图片文件
 */
function getAllImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList
  }
  
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList)
    } else {
      const ext = path.extname(file).toLowerCase()
      if (config.imageExtensions.includes(ext)) {
        fileList.push(filePath)
      }
    }
  })
  
  return fileList
}

/**
 * 使用 Sharp 优化图片
 */
async function optimizeImageWithSharp(imagePath) {
  try {
    const sharp = require('sharp')
    const ext = path.extname(imagePath).toLowerCase()
    const dir = path.dirname(imagePath)
    const name = path.basename(imagePath, ext)
    
    // 读取原图
    const image = sharp(imagePath)
    const metadata = await image.metadata()
    
    console.log(`📸 优化: ${imagePath} (${metadata.width}x${metadata.height})`)
    
    // 压缩原图
    // 注意：sharp 不允许输入和输出是同一个文件，所以需要先读取到 buffer
    if (config.compressOriginal) {
      let buffer
      if (ext === '.jpg' || ext === '.jpeg') {
        buffer = await image
          .jpeg({ quality: config.jpegQuality, mozjpeg: true })
          .toBuffer()
      } else if (ext === '.png') {
        buffer = await image
          .png({ quality: config.webpQuality, compressionLevel: 9 })
          .toBuffer()
      }
      
      if (buffer) {
        // 写入到临时文件，然后替换原文件
        const tempPath = `${imagePath}.tmp`
        fs.writeFileSync(tempPath, buffer)
        fs.renameSync(tempPath, imagePath)
        console.log(`   ✅ 压缩原图: ${imagePath}`)
      }
    }
    
    // 生成 WebP 版本
    if (config.generateWebP) {
      const webpPath = path.join(dir, `${name}.webp`)
      
      // 如果 WebP 文件已存在，先删除（解决权限问题）
      if (fs.existsSync(webpPath)) {
        try {
          fs.unlinkSync(webpPath)
        } catch (err) {
          // 如果删除失败（权限问题），尝试使用 chmod 修改权限
          try {
            fs.chmodSync(webpPath, 0o666)
            fs.unlinkSync(webpPath)
          } catch (chmodErr) {
            console.log(`   ⚠️  无法删除已存在的 WebP 文件（权限不足），跳过: ${webpPath}`)
            return // 跳过这个文件的 WebP 生成
          }
        }
      }
      
      await image
        .webp({ quality: config.webpQuality })
        .toFile(webpPath)
      console.log(`   ✅ 生成 WebP: ${webpPath}`)
    }
    
    // 生成响应式图片
    if (config.generateResponsive) {
      for (const size of config.responsiveSizes) {
        if (metadata.width > size) {
          const responsivePath = path.join(dir, `${name}-${size}w${ext}`)
          await image
            .resize(size, null, { withoutEnlargement: true })
            .toFile(responsivePath)
          console.log(`   ✅ 生成 ${size}w: ${responsivePath}`)
        }
      }
    }
    
    return true
  } catch (error) {
    console.error(`   ❌ 优化失败: ${error.message}`)
    return false
  }
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始优化图片...\n')
  
  // 检查依赖
  checkDependencies()
  
  // 收集所有图片
  let allImages = []
  config.imageDirs.forEach(dir => {
    const images = getAllImages(dir)
    allImages = allImages.concat(images)
  })
  
  console.log(`\n📊 找到 ${allImages.length} 张图片\n`)
  
  if (allImages.length === 0) {
    console.log('⚠️  没有找到需要优化的图片')
    return
  }
  
  // 优化每张图片
  let successCount = 0
  let failCount = 0
  
  for (const imagePath of allImages) {
    const success = await optimizeImageWithSharp(imagePath)
    if (success) {
      successCount++
    } else {
      failCount++
    }
  }
  
  console.log(`\n✨ 优化完成！`)
  console.log(`   ✅ 成功: ${successCount}`)
  console.log(`   ❌ 失败: ${failCount}`)
  console.log(`\n💡 提示: 如果生成了 WebP 版本，可以在代码中使用 <picture> 标签或检测浏览器支持`)
}

// 运行
main().catch(console.error)

