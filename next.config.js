/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 静态导出模式下必须禁用图片优化
  },
}

module.exports = nextConfig



