'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 图片资源定义
 */
const imageResources = {
  // 优先级1：首屏关键图片（Header、FooterLogo、首屏可见组件）
  criticalImages: [
    '/header/img/search.png',
    '/header/img/language.png',
    '/header/img/Group.png',
    '/header/img/user.png',
    '/home/FooterLogo/img/asterisk.png',
    '/home/FooterLogo/img/books.png',
    '/home/FooterLogo/img/opal.png',
    '/home/FooterLogo/img/dune.png',
    '/home/FooterLogo/img/oas.png',
    '/home/icons/img/sword.png',
    '/home/icons/img/umbrella.png',
    '/home/icons/img/arr.png',
    '/home/icons/img/games.png',
  ],

  // 优先级2：首页重要图片（首屏下方可见）
  homeImages: [
    '/home/InstitutionalGrade/img/DEEPBLUE/foot.png',
    '/home/YourNextWorld/img/img_datasets.png',
    '/home/YourNextWorld/img/img_compute_paool.png',
    '/home/YourNextWorld/img/img_foundational_models.png',
    '/home/YourNextWorld/img/img_workflows.png',
    '/home/YourNextWorld/img/img_ai_agents.png',
    '/home/WhereUsingBecomes/img/Investing1.png',
    '/home/WhereUsingBecomes/img/Investing2.png',
    '/home/WhereUsingBecomes/img/Investing3.png',
    '/home/WhereUsingBecomes/img/Investing4.png',
    '/home/WhereUsingBecomes/img/Investing5.png',
    '/home/WhereUsingBecomes/img/games.png',
    '/home/WhereUsingBecomes/img/arr.png',
    '/home/LetEveryShare/img/Investing1.png',
    '/home/LetEveryShare/img/Investing2.png',
    '/home/LetEveryShare/img/Investing3.png',
    '/home/LetEveryShare/img/Investing4.png',
    '/home/LetEveryShare/img/Investing5.png',
    '/home/BuildWithThe/img/Investing1.png',
    '/home/BuildWithThe/img/Investing2.png',
    '/home/BuildWithThe/img/Investing3.png',
    '/home/BuildWithThe/img/Investing4.png',
    '/home/BuildWithThe/img/Investing5.png',
    '/home/BuildWithThe/img/games.png',
    '/home/BuildWithThe/img/Earth.png',
    '/home/BuildWithThe/img/GREENMatrix.png',
    '/home/GovernTogether/img/bgc.png',
    '/home/FreedomToEnter/img/bgc.png',
    '/home/LiquidityThat/img/bgc.png',
  ],

  // Launchpad页面图片
  launchpadImages: [
    ...Array.from({ length: 12 }, (_, i) => `/launchpad/TemplateSelection/img/Mask${i + 1}.png`),
    '/launchpad/LogoPromotionalMaterials/img/logo.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask1.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask2.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask3.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask4.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask5.png',
    '/launchpad/ProjectHomepagePreview/img/img_13.png',
    '/launchpad/ProjectHomepagePreview/img/img_14.png',
    '/launchpad/ProjectHomepagePreview/img/img_15.png',
    '/launchpad/ProjectHomepagePreview/img/img_16.png',
    '/launchpad/ProjectHomepagePreview/img/img_17.png',
  ],

  // TokenMarketplace页面图片
  tokenMarketplaceImages: [
    '/tokenMarketplace/TokenImages/img/Mask1.png',
    '/tokenMarketplace/TokenImages/img/Mask2.png',
    '/tokenMarketplace/TokenImages/img/Mask3.png',
    '/tokenMarketplace/ContentCard/img/bg.png',
    '/tokenMarketplace/ContentCard/img/icon2.png',
    ...Array.from({ length: 30 }, (_, i) => `/tokenMarketplace/ContentCard/img/icon/icon_${i + 1}.png`),
  ],
}

/**
 * 检测网络连接速度并返回合适的并发数
 * @returns 并发数（3-10之间）
 */
const getOptimalConcurrency = (): number => {
  // 使用 Network Information API（如果可用）
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection
  
  if (connection) {
    // 根据网络类型调整并发数
    const effectiveType = connection.effectiveType
    switch (effectiveType) {
      case '4g':
        return 10 // 快速网络，高并发
      case '3g':
        return 6  // 中等网络，中等并发
      case '2g':
      case 'slow-2g':
        return 3  // 慢速网络，低并发
      default:
        return 6  // 默认中等并发
    }
  }
  
  // 如果没有 Network Information API，使用默认值
  return 6
}

/**
 * 单张图片预加载 Promise
 * @param src 图片路径
 * @returns Promise<boolean> 加载成功返回 true，失败返回 false
 */
const preloadSingleImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
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
 * @param concurrency 并发数（默认6，可根据网络状况调整）
 * @returns Promise<void>
 */
const preloadImagesWithConcurrency = async (
  images: string[],
  concurrency: number = 6
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
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
  }
}

/**
 * 图片预加载组件（优化版 - 并发控制多线程加载 + 路由监听）
 * 
 * 加载逻辑说明：
 * 1. **优先级加载**：首屏关键图片优先加载，非关键图片延迟加载
 * 2. **并发控制**：使用 Promise 池控制同时加载的图片数量（默认6张），避免浏览器资源竞争
 * 3. **错误处理**：单个图片加载失败不影响其他图片的加载
 * 4. **性能优化**：使用 requestIdleCallback 在浏览器空闲时加载非关键图片
 * 5. **智能调度**：根据网络状况动态调整并发数（快速网络增加并发，慢速网络减少并发）
 * 6. **路由监听**：当用户导航到 Launchpad 或 TokenMarketplace 时，立即优先加载该页面的图片
 */
export default function ImagePreloader() {
  const pathname = usePathname()
  const loadedPagesRef = useRef<Set<string>>(new Set()) // 记录已加载的页面图片

  useEffect(() => {
    /**
     * 加载指定页面的图片
     * @param pageName 页面名称：'home' | 'launchpad' | 'tokenMarketplace'
     * @param priority 优先级：'high' | 'normal' | 'low'
     */
    const loadPageImages = (pageName: 'home' | 'launchpad' | 'tokenMarketplace', priority: 'high' | 'normal' | 'low' = 'normal') => {
      // 如果已经加载过，跳过
      if (loadedPagesRef.current.has(pageName)) {
        return
      }

      const concurrency = getOptimalConcurrency()
      let images: string[] = []

      switch (pageName) {
        case 'home':
          images = [...imageResources.criticalImages, ...imageResources.homeImages]
          break
        case 'launchpad':
          images = imageResources.launchpadImages
          break
        case 'tokenMarketplace':
          images = imageResources.tokenMarketplaceImages
          break
      }

      if (images.length === 0) return

      // 标记为已加载
      loadedPagesRef.current.add(pageName)

      const loadFn = () => {
        preloadImagesWithConcurrency(images, priority === 'high' ? Math.min(concurrency + 2, 12) : concurrency).catch(() => {
          // 静默处理错误，不影响用户体验
        })
      }

      if (priority === 'high') {
        // 高优先级：立即加载
        loadFn()
      } else if (priority === 'normal') {
        // 正常优先级：延迟加载
        setTimeout(loadFn, 100)
      } else {
        // 低优先级：浏览器空闲时加载
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadFn, { timeout: 2000 })
        } else {
          setTimeout(loadFn, 500)
        }
      }
    }

    /**
     * 主预加载函数
     */
    const preloadImages = () => {
      // 立即加载关键图片（高优先级）
      preloadImagesWithConcurrency(imageResources.criticalImages, getOptimalConcurrency()).catch(() => {})

      // 延迟加载首页图片（中等优先级）
      setTimeout(() => {
        loadPageImages('home', 'normal')
      }, 200)

      // 根据当前路由决定是否立即加载页面图片
      if (pathname === '/Launchpad') {
        // 如果当前在 Launchpad 页面，立即高优先级加载
        loadPageImages('launchpad', 'high')
      } else if (pathname === '/TokenMarketplace') {
        // 如果当前在 TokenMarketplace 页面，立即高优先级加载
        loadPageImages('tokenMarketplace', 'high')
      } else {
        // 否则在浏览器空闲时加载（低优先级）
        const loadLowPriorityImages = () => {
          loadPageImages('launchpad', 'low')
          loadPageImages('tokenMarketplace', 'low')
        }

        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadLowPriorityImages, { timeout: 2000 })
        } else {
          setTimeout(loadLowPriorityImages, 1000)
        }
      }
    }
    
    // 等待页面完全加载后再预加载图片
    if (document.readyState === 'complete') {
      setTimeout(preloadImages, 100)
    } else {
      window.addEventListener('load', () => {
        setTimeout(preloadImages, 100)
      })
    }
  }, [pathname])

  // 监听路由变化，当切换到 Launchpad 或 TokenMarketplace 时立即加载图片
  useEffect(() => {
    if (pathname === '/Launchpad' && !loadedPagesRef.current.has('launchpad')) {
      // 立即高优先级加载 Launchpad 图片
      const concurrency = getOptimalConcurrency()
      const images = imageResources.launchpadImages
      loadedPagesRef.current.add('launchpad')
      preloadImagesWithConcurrency(images, Math.min(concurrency + 2, 12)).catch(() => {})
    } else if (pathname === '/TokenMarketplace' && !loadedPagesRef.current.has('tokenMarketplace')) {
      // 立即高优先级加载 TokenMarketplace 图片
      const concurrency = getOptimalConcurrency()
      const images = imageResources.tokenMarketplaceImages
      loadedPagesRef.current.add('tokenMarketplace')
      preloadImagesWithConcurrency(images, Math.min(concurrency + 2, 12)).catch(() => {})
    }
  }, [pathname])
  
  // 这个组件不渲染任何内容
  return null
}
