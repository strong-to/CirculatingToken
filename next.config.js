/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // 图片配置
  images: {
    unoptimized: true, // 静态导出模式下必须禁用图片优化
    // 图片格式优化提示（虽然不能自动优化，但可以提示开发者）
    formats: ['image/webp'],
    // 设备尺寸断点（用于响应式图片）
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 压缩配置
  compress: true,
  
  // 生产环境优化
  swcMinify: true, // 使用 SWC 压缩，比 Terser 快 7 倍
  
  // 构建优化
  productionBrowserSourceMaps: false, // 生产环境不生成 source maps，减少构建时间
  
  // 静态资源优化
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.ASSET_PREFIX 
    ? process.env.ASSET_PREFIX 
    : '',
  
  // 页面配置
  poweredByHeader: false, // 移除 X-Powered-By 头，提高安全性
}

module.exports = nextConfig



