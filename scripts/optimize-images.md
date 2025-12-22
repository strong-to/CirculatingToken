# 图片优化指南

## 为什么需要优化图片？

在生产环境中，图片文件通常占据大部分带宽。优化图片可以：
- 减少加载时间 50-80%
- 降低服务器带宽成本
- 提升用户体验
- 改善 SEO 排名

## 优化方案

### 1. 使用 WebP 格式（推荐）

WebP 格式比 PNG/JPEG 小 25-35%，且质量相同。

#### 使用工具批量转换：

**使用 cwebp（Google 官方工具）:**
```bash
# 安装 cwebp
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# 批量转换 PNG 到 WebP
find public -name "*.png" -exec cwebp -q 80 {} -o {}.webp \;

# 批量转换 JPEG 到 WebP
find public -name "*.jpg" -exec cwebp -q 80 {} -o {}.webp \;
```

**使用 Sharp（Node.js）:**
```bash
npm install -g sharp-cli
sharp -i "public/**/*.{png,jpg,jpeg}" -o public -f webp -q 80
```

### 2. 图片压缩

**使用 imagemin（推荐）:**
```bash
npm install --save-dev imagemin imagemin-webp imagemin-pngquant imagemin-mozjpeg
```

创建 `scripts/optimize-images.js`:
```javascript
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  // 压缩 PNG
  await imagemin(['public/**/*.png'], {
    destination: 'public',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  // 压缩 JPEG
  await imagemin(['public/**/*.{jpg,jpeg}'], {
    destination: 'public',
    plugins: [
      imageminMozjpeg({
        quality: 80
      })
    ]
  });

  // 转换为 WebP
  await imagemin(['public/**/*.{png,jpg,jpeg}'], {
    destination: 'public',
    plugins: [
      imageminWebp({
        quality: 80
      })
    ]
  });

  console.log('图片优化完成！');
})();
```

### 3. 在线工具（适合小批量）

- **TinyPNG**: https://tinypng.com/ (免费，每月 500 张)
- **Squoosh**: https://squoosh.app/ (Google 开源，无限制)
- **ImageOptim**: https://imageoptim.com/ (macOS 应用)

### 4. 自动化脚本

在 `package.json` 中添加：
```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js",
    "build": "npm run optimize:images && next build"
  }
}
```

## 优化建议

1. **PNG 图片**: 如果不需要透明背景，转换为 JPEG
2. **大图片**: 使用响应式图片，提供多个尺寸
3. **图标**: 使用 SVG 格式（矢量图，无损缩放）
4. **GIF**: 考虑使用视频格式（MP4）替代，体积更小

## 预期效果

优化后，图片体积通常可以减少：
- PNG → WebP: 减少 25-35%
- JPEG → WebP: 减少 25-30%
- 压缩优化: 额外减少 20-40%

总体可以减少 50-70% 的图片体积！






