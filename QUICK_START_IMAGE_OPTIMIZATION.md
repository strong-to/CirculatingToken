# 图片优化快速开始指南

## ✅ 方案A已配置完成！

所有必要的文件都已创建并配置好，现在只需要3步即可开始使用：

## 🚀 快速开始（3步）

### 步骤1: 安装依赖

```bash
npm install
```

这会自动安装 `sharp`（图片处理库）。

### 步骤2: 运行优化脚本

```bash
npm run optimize-images
```

脚本会自动：
- ✅ 扫描所有图片目录
- ✅ 压缩 PNG/JPEG 图片（减少体积）
- ✅ 生成 WebP 格式（体积再减少 50-70%）
- ✅ 显示优化进度和结果

### 步骤3: 使用响应式图片组件

在代码中替换现有的 `Image` 组件：

```tsx
// 之前
import Image from 'next/image'
<Image src="/header/img/logo.png" alt="Logo" width={60} height={60} />

// 现在（自动使用 WebP 如果可用）
import ResponsiveImage from '@/utils/responsiveImage'
<ResponsiveImage src="/header/img/logo.png" alt="Logo" width={60} height={60} priority />
```

## 📦 已配置的内容

### ✅ 1. 优化脚本 (`scripts/optimize-images.js`)
- 自动扫描所有图片目录
- 压缩原图
- 生成 WebP 版本
- 已配置到构建流程（`prebuild`）

### ✅ 2. 响应式图片组件 (`utils/responsiveImage.tsx`)
- 自动检测 WebP 支持
- 优先使用 WebP，不支持时回退
- 支持懒加载和优先级
- 集成 CDN 支持

### ✅ 3. 构建集成
- `package.json` 已配置 `prebuild` 钩子
- 每次 `npm run build` 前自动优化图片

### ✅ 4. 依赖管理
- `sharp` 已添加到 `devDependencies`

## 🎯 优化效果

运行优化后，你会看到类似输出：

```
🚀 开始优化图片...

✅ 依赖检查通过

📊 找到 156 张图片

📸 优化: public/header/img/logo.png (60x60)
   ✅ 生成 WebP: public/header/img/logo.webp
📸 优化: public/home/YourNextWorld/img/img_datasets.png (340x500)
   ✅ 生成 WebP: public/home/YourNextWorld/img/img_datasets.webp
...

✨ 优化完成！
   ✅ 成功: 156
   ❌ 失败: 0
```

## 📝 使用示例

### 示例1: 首屏关键图片

```tsx
import ResponsiveImage from '@/utils/responsiveImage'

<ResponsiveImage
  src="/header/img/logo.png"
  alt="Logo"
  width={60}
  height={60}
  priority  // 首屏图片，立即加载
/>
```

### 示例2: 非首屏图片（懒加载）

```tsx
import ResponsiveImage from '@/utils/responsiveImage'

<ResponsiveImage
  src="/home/YourNextWorld/img/img_datasets.png"
  alt="Datasets"
  width={340}
  height={500}
  loading="lazy"  // 懒加载
/>
```

### 示例3: 填充容器

```tsx
<div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
  <ResponsiveImage
    src="/some/image.png"
    alt="Image"
    fill
    aspectRatio="1/1"
  />
</div>
```

## 🔧 配置选项

如果需要调整优化参数，编辑 `scripts/optimize-images.js`：

```javascript
const config = {
  webpQuality: 85,        // WebP 质量（1-100）
  jpegQuality: 85,        // JPEG 质量（1-100）
  generateWebP: true,      // 是否生成 WebP
  compressOriginal: true, // 是否压缩原图
}
```

## ⚠️ 注意事项

1. **首次运行**：优化脚本会直接修改原图，建议先备份或提交到 Git
2. **WebP 文件**：生成的 `.webp` 文件需要添加到 Git 仓库
3. **构建时间**：首次优化可能需要几分钟，后续只优化新增图片

## 🎉 完成！

现在你的项目已经配置好图片优化了！

- ✅ 运行 `npm run optimize-images` 优化图片
- ✅ 使用 `ResponsiveImage` 组件自动选择最佳格式
- ✅ 每次构建前自动优化（已配置）

享受更快的页面加载速度吧！🚀

