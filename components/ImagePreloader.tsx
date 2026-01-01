'use client'

import { useEffect } from 'react'
import { preloadHeaderImages } from '@/utils/imagePreloader'

/**
 * 图片预加载组件
 * 仅预加载 Header 图标（首屏关键图片）
 */
export default function ImagePreloader() {
  useEffect(() => {
    // 等待页面完全加载后再预加载 Header 图标
    if (document.readyState === 'complete') {
      setTimeout(preloadHeaderImages, 100)
    } else {
      window.addEventListener('load', () => {
        setTimeout(preloadHeaderImages, 100)
      })
    }
  }, [])
  
  // 这个组件不渲染任何内容
  return null
}
