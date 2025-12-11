# 生产环境优化配置指南

## 📋 已完成的优化配置

### 1. Next.js 配置优化 (`next.config.js`)
- ✅ 启用 SWC 压缩（比 Terser 快 7 倍）
- ✅ 启用 CSS 优化
- ✅ 禁用生产环境 source maps（减少构建时间）
- ✅ 移除 X-Powered-By 头（提高安全性）
- ✅ 支持 CDN 资源前缀（通过环境变量 `ASSET_PREFIX`）

### 2. 图片预加载优化 (`components/ImagePreloader.tsx`)
- ✅ 提高默认并发数：6 → 8
- ✅ TokenMarketplace 页面并发数：12 → 16
- ✅ 减少批次延迟：10ms → 5ms
- ✅ 智能网络检测和动态调整并发数

### 3. 图片加载策略优化
- ✅ 首屏图片使用 `priority` 属性
- ✅ 非首屏图片使用 `loading="lazy"`
- ✅ hover/click 状态图片延迟加载

### 4. 服务器配置

#### Apache 服务器 (`public/.htaccess`)
已创建 `.htaccess` 文件，包含：
- ✅ Gzip 压缩（HTML、CSS、JS、图片、字体）
- ✅ 浏览器缓存策略（图片 1 年，CSS/JS 1 个月）
- ✅ Cache-Control 头设置
- ✅ 安全头配置（XSS 保护、MIME 类型保护等）

**使用方法：**
将 `public/.htaccess` 文件复制到服务器根目录（与 `out` 目录同级）

#### Nginx 服务器 (`nginx.conf.example`)
已创建 Nginx 配置示例，包含：
- ✅ Gzip/Brotli 压缩
- ✅ 静态资源缓存
- ✅ 安全头配置

**使用方法：**
1. 复制 `nginx.conf.example` 到你的 Nginx 配置目录
2. 修改 `server_name` 和 `root` 路径
3. 重新加载 Nginx：`sudo nginx -s reload`

## 🚀 部署前检查清单

### 必须完成的步骤：

1. **图片优化**（最重要！）
   ```bash
   # 参考 scripts/optimize-images.md
   # 使用工具压缩图片，转换为 WebP 格式
   # 预期可以减少 50-70% 的图片体积
   ```

2. **服务器配置**
   - Apache: 确保 `.htaccess` 文件已部署
   - Nginx: 使用提供的配置示例

3. **CDN 配置**（可选但强烈推荐）
   ```bash
   # 设置环境变量（如果使用 CDN）
   export ASSET_PREFIX=https://cdn.yourdomain.com
   npm run build
   ```

4. **构建和部署**
   ```bash
   npm run build
   # 将 out 目录部署到服务器
   ```

## 📊 预期性能提升

优化后的预期效果：

| 指标 | 优化前 | 优化后 | 提升 |
|------|--------|--------|------|
| 首屏加载时间 | ~5-8s | ~2-3s | **60-70%** |
| 图片加载时间 | ~3-5s | ~1-2s | **60-70%** |
| 总页面大小 | ~10-15MB | ~3-5MB | **60-70%** |
| 带宽使用 | 100% | 30-40% | **60-70%** |

## 🔧 环境变量配置

### 开发环境
无需额外配置

### 生产环境（使用 CDN）
```bash
# .env.production
ASSET_PREFIX=https://cdn.yourdomain.com
```

## 📝 注意事项

1. **图片优化是必须的**
   - 即使配置了所有优化，如果图片文件本身很大，加载仍然会很慢
   - 建议使用 WebP 格式，体积可减少 50-70%

2. **服务器配置**
   - Apache: 确保 `mod_deflate` 和 `mod_expires` 模块已启用
   - Nginx: 确保 `gzip` 模块已启用

3. **CDN 使用**
   - 如果使用 CDN，设置 `ASSET_PREFIX` 环境变量
   - CDN 可以进一步提升全球访问速度

4. **缓存策略**
   - 图片缓存 1 年（文件名包含 hash 时）
   - HTML 不缓存（确保内容更新）

## 🐛 故障排查

### 问题：图片仍然加载慢
1. 检查图片是否已优化（文件大小）
2. 检查服务器压缩是否启用
3. 检查 CDN 是否正常工作
4. 使用浏览器开发者工具检查网络请求

### 问题：.htaccess 不生效
1. 确保文件在正确位置（网站根目录）
2. 检查 Apache 是否允许 `.htaccess` 覆盖
3. 检查相关模块是否已启用

### 问题：Nginx 配置错误
1. 使用 `sudo nginx -t` 测试配置
2. 检查错误日志：`tail -f /var/log/nginx/error.log`

## 📚 相关文档

- [图片优化指南](./scripts/optimize-images.md)
- [Next.js 优化文档](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev 性能优化](https://web.dev/fast/)

