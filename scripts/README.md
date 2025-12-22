# 图片优化脚本使用说明

## 快速开始

### 1. 安装依赖

```bash
npm install --save-dev sharp
```

### 2. 运行优化脚本

```bash
npm run optimize-images
```

### 3. 自动优化（构建前）

脚本已配置为在构建前自动运行：

```bash
npm run build  # 会自动先运行 optimize-images
```

## 功能说明

### 主要功能

1. **压缩原图**：自动压缩 PNG/JPEG 图片，减少文件体积
2. **生成 WebP**：为每张图片生成 WebP 格式版本（体积减少 50-70%）
3. **响应式图片**：可选生成多种尺寸的图片（400w, 800w, 1200w, 1920w）

### 配置选项

编辑 `scripts/optimize-images.js` 中的 `config` 对象：

```javascript
const config = {
  // 图片目录（会自动递归查找子目录）
  imageDirs: [
    'public/header/img',
    'public/home',
    // ... 添加更多目录
  ],
  
  // WebP 质量（1-100，推荐 85）
  webpQuality: 85,
  
  // JPEG 质量（1-100，推荐 85）
  jpegQuality: 85,
  
  // 是否生成 WebP 版本
  generateWebP: true,
  
  // 是否压缩原图
  compressOriginal: true,
  
  // 是否生成响应式尺寸
  generateResponsive: false,
  
  // 响应式图片尺寸
  responsiveSizes: [400, 800, 1200, 1920],
}
```

## 优化效果

### 典型优化结果

| 原图格式 | 原图大小 | WebP 大小 | 压缩率 |
|---------|---------|----------|--------|
| PNG | 500KB | 150KB | 70% |
| JPEG | 300KB | 200KB | 33% |

### 性能提升

- **图片体积**：减少 50-70%
- **页面加载速度**：提升 30-50%
- **Lighthouse 分数**：图片优化分数提升至 90+

## 使用响应式图片组件

优化后，使用 `ResponsiveImage` 组件自动选择最佳格式：

```tsx
import ResponsiveImage from '@/utils/responsiveImage'

<ResponsiveImage
  src="/header/img/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority
/>
```

组件会自动：
1. 检测浏览器是否支持 WebP
2. 如果支持且存在 WebP 版本，使用 WebP
3. 否则使用原图格式

## 注意事项

1. **备份原图**：优化脚本会直接修改原图，建议先备份
2. **Git 管理**：WebP 文件需要添加到 Git
3. **构建时间**：首次优化可能需要几分钟，后续只优化新增图片

## 故障排除

### 问题：sharp 模块未找到

```bash
npm install --save-dev sharp
```

### 问题：优化后图片损坏

检查原图是否损坏，或降低压缩质量：

```javascript
webpQuality: 80,  // 降低质量
jpegQuality: 80,
```

### 问题：WebP 文件不显示

确保 WebP 文件已生成，检查文件路径是否正确。

## 高级用法

### 只优化特定目录

修改 `imageDirs` 配置：

```javascript
imageDirs: [
  'public/header/img',  // 只优化这个目录
],
```

### 跳过某些图片

在脚本中添加过滤逻辑：

```javascript
function getAllImages(dir, fileList = []) {
  // ... 现有代码 ...
  
  // 跳过特定文件
  if (file.includes('skip-this')) {
    return fileList
  }
  
  // ... 继续处理 ...
}
```




