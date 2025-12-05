'use client'

import { useEffect } from 'react'

/**
 * 图片预加载组件
 * 在首屏加载完成后预加载首页和Launchpad页面的图片
 */
export default function ImagePreloader() {
  useEffect(() => {
    // 等待首屏加载完成后再预加载
    const preloadImages = () => {
      // 首页图片列表
      const homeImages = [
        // InstitutionalGrade
        '/images/InstitutionalGrade/asterisk.png',
        '/images/InstitutionalGrade/books.png',
        '/images/InstitutionalGrade/opal.png',
        '/images/InstitutionalGrade/dune.png',
        '/images/InstitutionalGrade/oas.png',
        '/images/DEEPBLUE/foot.png',
        
        // WhereUsingBecomes
        '/images/Investing/Investing1.png',
        '/images/Investing/Investing2.png',
        '/images/Investing/Investing3.png',
        '/images/Investing/Investing4.png',
        '/images/Investing/Investing5.png',
        '/images/Investing/games.png',
        '/images/Investing/arr.png',
        
        // LetEveryShare
        '/images/LetEveryShare/Investing1.png',
        '/images/LetEveryShare/Investing2.png',
        '/images/LetEveryShare/Investing3.png',
        '/images/LetEveryShare/Investing4.png',
        '/images/LetEveryShare/Investing5.png',
        
        // BuildWithThe
        '/images/BuildWithThe/Investing1.png',
        '/images/BuildWithThe/Investing2.png',
        '/images/BuildWithThe/Investing3.png',
        '/images/BuildWithThe/Investing4.png',
        '/images/BuildWithThe/Investing5.png',
        '/images/BuildWithThe/games.png',
        '/images/BuildWithThe/Earth.png',
        '/images/BuildWithThe/GREENMatrix.png',
        
        // YourNextWorld
        '/images/YourNextWorld/img_datasets.png',
        '/images/YourNextWorld/img_compute_paool.png',
        '/images/YourNextWorld/img_foundational_models.png',
        '/images/YourNextWorld/img_workflows.png',
        '/images/YourNextWorld/img_ai_agents.png',
        
        // GovernTogether
        '/images/GovernTogether/bgc.png',
        
        // FreedomToEnter
        '/images/FreedomToEnter/bgc.png',
        
        // LiquidityThat
        '/images/LiquidityThat/bgc.png',
        
        // Header
        '/images/title/search.png',
        '/images/title/language.png',
        '/images/title/Group.png',
        '/images/title/user.png',
      ]
      
      // Launchpad页面图片列表
      const launchpadImages = [
        // TemplateSelection (12张模板图片)
        ...Array.from({ length: 12 }, (_, i) => `/images/Launchpad/TemplateSelection/Mask${i + 1}.png`),
        
        // LogoPromotionalMaterials
        '/images/Launchpad/logo.png',
        '/images/Launchpad/Mask1.png',
        '/images/Launchpad/Mask2.png',
        '/images/Launchpad/Mask3.png',
        '/images/Launchpad/Mask4.png',
        '/images/Launchpad/Mask5.png',
        
        // ProjectHomepagePreview
        '/images/Launchpad/ProjectHomepagPreview/img_13.png',
        '/images/Launchpad/ProjectHomepagPreview/img_14.png',
        '/images/Launchpad/ProjectHomepagPreview/img_15.png',
        '/images/Launchpad/ProjectHomepagPreview/img_16.png',
        '/images/Launchpad/ProjectHomepagPreview/img_17.png',
      ]
      
      // 合并所有图片并去重
      const allImages = [...new Set([...homeImages, ...launchpadImages])]
      
      // 使用link rel="preload"预加载图片（更高效）
      allImages.forEach((src) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
      
      // 同时使用Image对象预加载（作为备用方案）
      allImages.forEach((src) => {
        const img = new Image()
        img.src = src
      })
    }
    
    // 等待页面完全加载后再预加载图片
    if (document.readyState === 'complete') {
      // 页面已经加载完成，延迟一小段时间后开始预加载，避免阻塞首屏渲染
      setTimeout(preloadImages, 100)
    } else {
      // 等待页面加载完成
      window.addEventListener('load', () => {
        setTimeout(preloadImages, 100)
      })
    }
  }, [])
  
  // 这个组件不渲染任何内容
  return null
}

