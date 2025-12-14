# 部署配置说明

## 问题1: CDN图片配置

### 方法1: 使用环境变量配置CDN

1. 创建 `.env.production` 文件：
```env
NEXT_PUBLIC_CDN_BASE_URL=https://your-cdn-domain.com
NEXT_PUBLIC_USE_CDN=true
```

2. 在代码中使用图片工具函数：
```typescript
import { getOptimizedImageUrl } from '@/utils/imageUtils'

// 使用示例
const imageUrl = getOptimizedImageUrl('/header/img/logo.png', 800, 85)
```

### 方法2: 直接在服务器配置CDN（推荐）

如果使用Nginx，可以在配置中设置反向代理：

```nginx
# 图片请求代理到CDN
location /_next/static/ {
    proxy_pass https://your-cdn-domain.com;
}

location /public/ {
    proxy_pass https://your-cdn-domain.com;
}
```

### 方法3: 使用对象存储（OSS/COS/S3）

1. 将图片上传到对象存储
2. 配置CDN加速
3. 修改图片路径为CDN地址

## 问题2: 刷新404问题解决

### Apache服务器（推荐）

1. 确保服务器已启用 `mod_rewrite` 模块
2. 将 `public/.htaccess` 文件复制到服务器根目录（与 `out` 目录同级）
3. 确保 `.htaccess` 文件有读取权限

### Nginx服务器

创建或修改 Nginx 配置文件：

```nginx
server {
    listen 80;
    server_name 47.238.229.11;
    root /path/to/your/out;  # Next.js 构建输出目录
    
    index index.html;
    
    # 处理 Next.js 路由
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(jpg|jpeg|png|gif|webp|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

然后重新加载Nginx：
```bash
sudo nginx -t  # 测试配置
sudo nginx -s reload  # 重新加载
```

## 问题3: 图片懒加载和按需加载

### 已实现的优化

1. **图片预加载工具** (`utils/imagePreloader.ts`)
   - 自动预加载关键图片
   - Header hover时预加载目标页面图片
   - 智能并发控制

2. **图片工具函数** (`utils/imageUtils.ts`)
   - `getOptimizedImageUrl()` - CDN图片URL处理
   - `shouldLazyLoad()` - 判断是否懒加载
   - `getImageLoading()` - 获取loading属性

### 使用建议

#### 首屏图片（使用priority）
```tsx
import Image from 'next/image'
import { getOptimizedImageUrl } from '@/utils/imageUtils'

<Image
  src={getOptimizedImageUrl('/header/img/logo.png')}
  alt="Logo"
  width={60}
  height={60}
  priority  // 首屏关键图片
/>
```

#### 非首屏图片（使用lazy）
```tsx
import Image from 'next/image'
import { getOptimizedImageUrl, getImageLoading } from '@/utils/imageUtils'

<Image
  src={getOptimizedImageUrl('/some/image.png', 800)}
  alt="Image"
  width={800}
  height={600}
  loading={getImageLoading('/some/image.png', false)}  // 懒加载
/>
```

#### 使用ImageWithSkeleton组件（已实现懒加载）
```tsx
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'

<ImageWithSkeleton
  src="/some/image.png"
  alt="Image"
  fill
  loading="lazy"  // 懒加载
/>
```

## 部署检查清单

- [ ] 将 `public/.htaccess` 复制到服务器根目录（Apache）
- [ ] 配置Nginx路由规则（Nginx）
- [ ] 设置环境变量 `.env.production`（如果使用CDN）
- [ ] 确保所有图片路径正确
- [ ] 测试所有路由刷新是否正常
- [ ] 检查图片加载性能

## 性能优化建议

1. **图片压缩**：使用工具压缩图片（推荐使用 [Squoosh](https://squoosh.app/)）
2. **格式转换**：将PNG转换为WebP格式（可减少50-70%体积）
3. **CDN加速**：使用CDN加速图片加载
4. **懒加载**：非首屏图片使用 `loading="lazy"`
5. **预加载**：关键图片使用 `priority` 属性

