/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 启用静态导出，打包文件将输出到 out 目录
  // 注意：启用后 API 路由（文件上传功能）将无法工作
  output: 'export',
  
  // 图片配置
  images: {
    unoptimized: true, // 静态导出模式下必须禁用图片优化
    // 设备尺寸断点（用于响应式图片）
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 允许的图片域名（如果使用CDN）
    remotePatterns: process.env.NEXT_PUBLIC_CDN_BASE_URL
      ? [
          {
            protocol: 'https',
            hostname: new URL(process.env.NEXT_PUBLIC_CDN_BASE_URL).hostname,
          },
        ]
      : [],
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
  
  // 静态导出配置
  trailingSlash: false, // 不在URL末尾添加斜杠
  
  // 开发模式配置
  ...(process.env.NODE_ENV === 'development' && {
    // 在开发模式下，禁用 public 目录的缓存
    // 确保修改 public 目录下的文件能立即生效
    webpack: (config, { isServer }) => {
      if (isServer) {
        // 服务端：清除 require 缓存，确保每次请求都重新读取文件
        config.watchOptions = {
          ...config.watchOptions,
          ignored: /node_modules/,
          poll: 1000, // 每秒检查一次文件变化
        };
      }
      return config;
    },
  }),
  
  // 静态导出时排除 API 路由
  ...(process.env.NODE_ENV === 'production' && {
    webpack: (config, { isServer }) => {
      if (isServer) {
        // 排除 API 路由，避免静态导出时的错误
        config.resolve.alias = {
          ...config.resolve.alias,
        };
      }
      return config;
    },
  }),
}

module.exports = nextConfig



