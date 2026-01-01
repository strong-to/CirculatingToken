/**
 * 图片预加载工具函数
 * 仅用于预加载 Header 图标（首屏关键图片）
 */

/**
 * Header 图标资源定义（仅保留 logo，其他图标已改为 SVG）
 */
export const headerImages = [
  '/header/img/logo.png',
]

/**
 * 检测网络连接速度并返回合适的并发数
 * @returns 并发数（3-16之间）
 */
export const getOptimalConcurrency = (): number => {
  // 使用 Network Information API（如果可用）
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection
  
  if (connection) {
    // 根据网络类型调整并发数
    const effectiveType = connection.effectiveType
    switch (effectiveType) {
      case '4g':
        return 12 // 快速网络，高并发
      case '3g':
        return 8  // 中等网络，中等并发
      case '2g':
      case 'slow-2g':
        return 4  // 慢速网络，低并发
      default:
        return 8  // 默认中等并发
    }
  }
  
  // 如果没有 Network Information API，使用默认值
  return 8
}

/**
 * 单张图片预加载 Promise
 * @param src 图片路径
 * @returns Promise<boolean> 加载成功返回 true，失败返回 false
 */
export const preloadSingleImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false)
      return
    }
    // 检查图片是否已经加载过（通过检查是否有对应的 link 标签）
    const existingLink = document.querySelector(`link[rel="preload"][href="${src}"]`)
    if (existingLink) {
      resolve(true)
      return
    }

    // 使用 link rel="preload" 方式（更高效，浏览器可以优化）
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    
    // 监听加载成功
    link.onload = () => {
      resolve(true)
    }
    
    // 监听加载失败
    link.onerror = () => {
      // 如果 link preload 失败，尝试使用 Image 对象作为备用方案
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = src
    }
    
    document.head.appendChild(link)
  })
}

/**
 * 并发控制的图片预加载池
 * @param images 图片路径数组
 * @param concurrency 并发数（默认8，可根据网络状况调整）
 * @returns Promise<void>
 */
export const preloadImagesWithConcurrency = async (
  images: string[],
  concurrency: number = 8
): Promise<void> => {
  // 去重
  const uniqueImages = [...new Set(images)]
  
  // 创建任务队列
  const tasks = uniqueImages.map((src) => () => preloadSingleImage(src))
  
  // 并发执行任务
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency)
    await Promise.allSettled(batch.map((task) => task()))
    
    // 每批之间添加小延迟，避免阻塞主线程
    if (i + concurrency < tasks.length) {
      await new Promise((resolve) => setTimeout(resolve, 5))
    }
  }
}

/**
 * 预加载 Header 图标
 * 在页面初始化时调用，预加载 Header 中的所有图标
 */
export const preloadHeaderImages = (): void => {
  const concurrency = getOptimalConcurrency()
  preloadImagesWithConcurrency(headerImages, concurrency).catch(() => {
    // 静默处理错误，不影响用户体验
  })
}
