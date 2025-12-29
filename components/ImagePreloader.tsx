'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { 
  imageResources, 
  preloadPageImages, 
  preloadImagesWithConcurrency, 
  getOptimalConcurrency 
} from '@/utils/imagePreloader'

/**
 * 图片预加载组件（优化版 - 并发控制多线程加载 + 路由监听）
 * 
 * 加载逻辑说明：
 * 1. **优先级加载**：首屏关键图片优先加载，非关键图片延迟加载
 * 2. **并发控制**：使用 Promise 池控制同时加载的图片数量（默认8张），避免浏览器资源竞争
 * 3. **错误处理**：单个图片加载失败不影响其他图片的加载
 * 4. **性能优化**：使用 requestIdleCallback 在浏览器空闲时加载非关键图片
 * 5. **智能调度**：根据网络状况动态调整并发数（快速网络增加并发，慢速网络减少并发）
 * 6. **路由监听**：当用户导航到任何页面时，立即优先加载该页面的图片
 * 7. **全页面支持**：支持所有页面（Home, Launchpad, TokenMarketplace, LendingVault, ConferenceRoom, MortgageMarket）
 */
export default function ImagePreloader() {
  const pathname = usePathname()
  const loadedPagesRef = useRef<Set<string>>(new Set()) // 记录已加载的页面图片

  useEffect(() => {
    /**
     * 主预加载函数
     */
    const preloadImages = () => {
      // 立即加载关键图片（高优先级）
      preloadImagesWithConcurrency(imageResources.criticalImages, getOptimalConcurrency()).catch(() => {})

      // 根据当前路由决定是否立即加载页面图片
      if (pathname && pathname !== '/') {
        // 如果不在首页，立即高优先级加载当前页面图片
        if (!loadedPagesRef.current.has(pathname)) {
          loadedPagesRef.current.add(pathname)
          preloadPageImages(pathname, 'high')
        }
      } else {
        // 在首页，延迟加载首页图片（中等优先级）
        setTimeout(() => {
          if (!loadedPagesRef.current.has('/')) {
            loadedPagesRef.current.add('/')
            preloadPageImages('/', 'normal')
          }
        }, 200)
      }

      // 在浏览器空闲时预加载其他页面的图片（低优先级）
      const loadLowPriorityImages = () => {
        const allPages = ['/Launchpad', '/TokenMarketplace', '/LendingVault', '/ConferenceRoom', '/MortgageMarket']
        allPages.forEach((page) => {
          if (page !== pathname && !loadedPagesRef.current.has(page)) {
            loadedPagesRef.current.add(page)
            preloadPageImages(page, 'low')
          }
        })
      }

      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadLowPriorityImages, { timeout: 3000 })
      } else {
        setTimeout(loadLowPriorityImages, 2000)
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

  // 监听路由变化，当切换到新页面时立即加载图片
  useEffect(() => {
    if (pathname && !loadedPagesRef.current.has(pathname)) {
      loadedPagesRef.current.add(pathname)
      preloadPageImages(pathname, 'high')
    }
  }, [pathname])
  
  // 这个组件不渲染任何内容
  return null
}
