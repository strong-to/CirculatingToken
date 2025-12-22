# 图片优化指南 - 静态导出模式

由于项目使用 `output: 'export'` 静态导出，Next.js 的图片优化功能被禁用。本指南提供了完整的图片优化方案。

## 📋 优化方案总览

### 方案1: 构建时优化（推荐）⭐
- 使用脚本在构建前压缩和转换图片
- 生成 WebP 格式
- 生成响应式尺寸

### 方案2: CDN 图片优化
- 使用 CDN 服务（如 Cloudinary、ImageKit）
- 自动压缩、格式转换、尺寸调整
- 按需生成优化版本

### 方案3: 手动优化
- 使用工具压缩图片
- 转换为 WebP 格式
- 手动管理多种尺寸

## 🚀 方案1: 构建时优化（推荐）

### 步骤1: 安装依赖

```bash
npm install --save-dev sharp
```

### 步骤2: 运行优化脚本

```bash
# 优化所有图片
npm run optimize-images

# 或在 package.json 中添加脚本：
# "optimize-images": "node scripts/optimize-images.js"
```

### 步骤3: 使用响应式图片组件

```tsx
import ResponsiveImage from '@/utils/responsiveImage'

// 自动检测 WebP 支持
<ResponsiveImage
  src="/header/img/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority
/>
```

### 配置选项

编辑 `scripts/optimize-images.js` 中的配置：

```javascript
const config = {
  webpQuality: 85,        // WebP 质量
  jpegQuality: 85,        // JPEG 质量
  generateWebP: true,     // 是否生成 WebP
  compressOriginal: true,  // 是否压缩原图
  generateResponsive: false, // 是否生成响应式尺寸
  responsiveSizes: [400, 800, 1200, 1920], // 响应式尺寸
}
```

## 🌐 方案2: CDN 图片优化

### 使用 Cloudinary（推荐）

1. **注册 Cloudinary 账号**：https://cloudinary.com

2. **配置环境变量**：
```env
NEXT_PUBLIC_CDN_BASE_URL=https://res.cloudinary.com/your-cloud-name/image/upload
NEXT_PUBLIC_USE_CDN=true
```

3. **上传图片到 Cloudinary**：
```bash
# 使用 Cloudinary CLI
npm install -g cloudinary-cli
cloudinary upload public/header/img/logo.png
```

4. **代码中使用**：
```tsx
import { getOptimizedImageUrl } from '@/utils/imageUtils'

// 自动添加 CDN 优化参数
const imageUrl = getOptimizedImageUrl('/header/img/logo.png', 800, 85)
// 结果: https://res.cloudinary.com/.../w_800,q_85/header/img/logo.png
```

### 使用 ImageKit

1. **注册 ImageKit**：https://imagekit.io

2. **配置环境变量**：
```env
NEXT_PUBLIC_CDN_BASE_URL=https://ik.imagekit.io/your-imagekit-id
NEXT_PUBLIC_USE_CDN=true
```

3. **代码中使用**：
```tsx
// ImageKit 会自动优化图片
const imageUrl = getOptimizedImageUrl('/header/img/logo.png', 800)
```

## 🛠️ 方案3: 手动优化

### 工具推荐

1. **Squoosh**（在线工具）
   - 网址：https://squoosh.app
   - 功能：压缩、格式转换、质量调整

2. **ImageOptim**（Mac）
   - 下载：https://imageoptim.com
   - 功能：批量压缩、自动优化

3. **TinyPNG**（在线工具）
   - 网址：https://tinypng.com
   - 功能：PNG/JPEG 压缩

4. **Sharp CLI**（命令行）
   ```bash
   npm install -g sharp-cli
   sharp -i input.png -o output.webp -q 85
   ```

### 优化建议

1. **PNG 图片**：
   - 压缩率：70-85%
   - 转换为 WebP 可减少 50-70% 体积

2. **JPEG 图片**：
   - 质量：80-90
   - 转换为 WebP 可减少 25-35% 体积

3. **图标/Logo**：
   - 使用 SVG 格式（如果可能）
   - 或使用 PNG-8（256色）

## 📦 集成到构建流程

### 在 package.json 中添加脚本

```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js",
    "prebuild": "npm run optimize-images",
    "build": "next build"
  }
}
```

这样每次构建前会自动优化图片。

## 🎯 最佳实践

### 1. 图片格式选择

- **照片/复杂图片**：JPEG → WebP
- **图标/Logo**：PNG → WebP 或 SVG
- **透明背景**：PNG → WebP
- **动画**：GIF → WebP 或 MP4

### 2. 图片尺寸

- **首屏图片**：使用实际显示尺寸，不要过大
- **非首屏图片**：使用 `loading="lazy"` 延迟加载
- **响应式图片**：提供多种尺寸（400w, 800w, 1200w）

### 3. 代码示例

```tsx
// ✅ 好的做法
import ResponsiveImage from '@/utils/responsiveImage'

<ResponsiveImage
  src="/header/img/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority
  sizes="(max-width: 768px) 60px, 60px"
/>

// ❌ 不好的做法
<Image
  src="/header/img/logo.png"  // 未优化
  alt="Logo"
  width={60}
  height={60}
/>
```

### 4. 使用 Picture 标签（多格式支持）

```tsx
import { PictureImage } from '@/utils/responsiveImage'

<PictureImage
  src="/header/img/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority
/>
```

## 📊 性能对比

| 方案 | 构建时间 | 图片体积 | 加载速度 | 复杂度 |
|------|---------|---------|---------|--------|
| 构建时优化 | +30s | -60% | ⭐⭐⭐⭐⭐ | 中 |
| CDN 优化 | 0s | -50% | ⭐⭐⭐⭐ | 低 |
| 手动优化 | 0s | -40% | ⭐⭐⭐ | 高 |

## 🔍 检查优化效果

### 使用 Chrome DevTools

1. 打开 Network 面板
2. 筛选 Images
3. 查看图片大小和加载时间
4. 对比优化前后的体积

### 使用 Lighthouse

```bash
# 运行 Lighthouse 测试
npm install -g lighthouse
lighthouse http://47.238.229.11 --view
```

查看 "Optimize images" 建议。

## 🚨 常见问题

### Q: WebP 文件不存在怎么办？
A: 组件会自动回退到原格式，确保原图已优化。

### Q: CDN 配置后图片不显示？
A: 检查环境变量是否正确，确保 CDN URL 可访问。

### Q: 构建时间太长？
A: 可以只优化新增图片，或使用 CDN 方案。

### Q: 如何批量优化现有图片？
A: 运行 `npm run optimize-images` 脚本。

## 📝 总结

**推荐方案**：
1. **开发阶段**：使用构建时优化脚本
2. **生产环境**：使用 CDN 服务（Cloudinary/ImageKit）
3. **关键图片**：手动优化确保最佳效果

**预期效果**：
- 图片体积减少 50-70%
- 页面加载速度提升 30-50%
- Lighthouse 图片优化分数达到 90+



