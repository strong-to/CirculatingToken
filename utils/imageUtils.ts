/**
 * 图片工具函数
 * 用于处理CDN、图片优化和懒加载
 */

/**
 * 获取优化后的图片URL
 * @param src 原始图片路径
 * @param width 目标宽度（可选，用于CDN缩放）
 * @param quality 图片质量 1-100（可选）
 * @returns 优化后的图片URL
 */
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  quality: number = 85
): string {
  // 如果已经是完整URL（http/https），直接返回
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // 生产环境CDN配置
  const CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_BASE_URL || ''
  const USE_CDN = process.env.NEXT_PUBLIC_USE_CDN === 'true'

  // 如果配置了CDN且不是开发环境
  if (USE_CDN && CDN_BASE_URL && process.env.NODE_ENV === 'production') {
    // 移除开头的斜杠
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src
    
    // 检测是否是真正的CDN服务（支持参数格式）
    // 真正的CDN通常包含：imagekit.io, cloudinary.com, cdn.example.com 等
    const isRealCDN = CDN_BASE_URL.includes('imagekit.io') || 
                     CDN_BASE_URL.includes('cloudinary.com') ||
                     CDN_BASE_URL.includes('cdn.') ||
                     CDN_BASE_URL.includes('cloudfront.net')
    
    // 如果是真正的CDN且指定了宽度，使用CDN的缩放功能
    if (isRealCDN && width) {
      // 格式：https://cdn.example.com/w_800,q_85/图片路径
      return `${CDN_BASE_URL}/w_${width},q_${quality}/${cleanSrc}`
    }
    
    // 普通服务器地址或未指定宽度，直接拼接路径（不添加CDN参数）
    return `${CDN_BASE_URL}/${cleanSrc}`
  }

  // 开发环境或未配置CDN，返回原始路径
  return src
}

/**
 * 判断图片是否应该在首屏加载（使用priority）
 * @param src 图片路径
 * @param isAboveFold 是否在首屏可见
 * @returns 是否应该使用priority
 */
export function shouldUsePriority(src: string, isAboveFold: boolean = false): boolean {
  // 首屏关键图片列表
  const criticalImages = [
    '/header/img/logo.png',
    '/header/img/search.png',
    '/header/img/language.png',
    '/header/img/Group.png',
    '/header/img/user.png',
  ]

  // 如果是关键图片或在首屏，使用priority
  return criticalImages.some(critical => src.includes(critical)) || isAboveFold
}

/**
 * 判断图片是否应该懒加载
 * @param src 图片路径
 * @param isAboveFold 是否在首屏可见
 * @returns 是否应该懒加载
 */
export function shouldLazyLoad(src: string, isAboveFold: boolean = false): boolean {
  // 首屏图片不懒加载
  if (isAboveFold) {
    return false
  }

  // 关键图片不懒加载
  const criticalImages = [
    '/header/img/logo.png',
    '/header/img/search.png',
    '/header/img/language.png',
    '/header/img/Group.png',
    '/header/img/user.png',
  ]

  if (criticalImages.some(critical => src.includes(critical))) {
    return false
  }

  // 其他图片都懒加载
  return true
}

/**
 * 获取图片的loading属性
 * @param src 图片路径
 * @param isAboveFold 是否在首屏可见
 * @returns 'lazy' | 'eager' | undefined
 */
export function getImageLoading(
  src: string,
  isAboveFold: boolean = false
): 'lazy' | 'eager' | undefined {
  if (shouldLazyLoad(src, isAboveFold)) {
    return 'lazy'
  }
  return undefined // Next.js Image默认是eager
}

/**
 * 预加载图片（用于关键图片）
 * @param src 图片路径
 */
export function preloadImage(src: string): void {
  if (typeof window === 'undefined') return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = getOptimizedImageUrl(src)
  
  // 检查是否已经存在
  const existing = document.querySelector(`link[rel="preload"][href="${link.href}"]`)
  if (!existing) {
    document.head.appendChild(link)
  }
}

