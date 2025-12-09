'use client'

import { useEffect } from 'react'

/**
 * 图片预加载组件
 * 在首屏加载完成后预加载首页、Launchpad和TokenMarketplace页面的图片
 */
export default function ImagePreloader() {
  useEffect(() => {
    // 等待首屏加载完成后再预加载
    const preloadImages = () => {
      // 首页图片列表（使用新的 public 目录结构）
      const homeImages = [
        // InstitutionalGrade / FooterLogo
        '/home/FooterLogo/img/asterisk.png',
        '/home/FooterLogo/img/books.png',
        '/home/FooterLogo/img/opal.png',
        '/home/FooterLogo/img/dune.png',
        '/home/FooterLogo/img/oas.png',
        '/home/InstitutionalGrade/img/DEEPBLUE/foot.png',
        
        // WhereUsingBecomes
        '/home/WhereUsingBecomes/img/Investing1.png',
        '/home/WhereUsingBecomes/img/Investing2.png',
        '/home/WhereUsingBecomes/img/Investing3.png',
        '/home/WhereUsingBecomes/img/Investing4.png',
        '/home/WhereUsingBecomes/img/Investing5.png',
        '/home/WhereUsingBecomes/img/games.png',
        '/home/WhereUsingBecomes/img/arr.png',
        
        // LetEveryShare
        '/home/LetEveryShare/img/Investing1.png',
        '/home/LetEveryShare/img/Investing2.png',
        '/home/LetEveryShare/img/Investing3.png',
        '/home/LetEveryShare/img/Investing4.png',
        '/home/LetEveryShare/img/Investing5.png',
        
        // BuildWithThe
        '/home/BuildWithThe/img/Investing1.png',
        '/home/BuildWithThe/img/Investing2.png',
        '/home/BuildWithThe/img/Investing3.png',
        '/home/BuildWithThe/img/Investing4.png',
        '/home/BuildWithThe/img/Investing5.png',
        '/home/BuildWithThe/img/games.png',
        '/home/BuildWithThe/img/Earth.png',
        '/home/BuildWithThe/img/GREENMatrix.png',
        
        // YourNextWorld
        '/home/YourNextWorld/img/img_datasets.png',
        '/home/YourNextWorld/img/img_compute_paool.png',
        '/home/YourNextWorld/img/img_foundational_models.png',
        '/home/YourNextWorld/img/img_workflows.png',
        '/home/YourNextWorld/img/img_ai_agents.png',
        
        // GovernTogether
        '/home/GovernTogether/img/bgc.png',
        
        // FreedomToEnter
        '/home/FreedomToEnter/img/bgc.png',
        
        // LiquidityThat
        '/home/LiquidityThat/img/bgc.png',
        
        // Header
        '/header/img/search.png',
        '/header/img/language.png',
        '/header/img/Group.png',
        '/header/img/user.png',
        
        // 通用图标
        '/home/icons/img/sword.png',
        '/home/icons/img/umbrella.png',
        '/home/icons/img/arr.png',
        '/home/icons/img/games.png',
      ]
      
      // Launchpad页面图片列表（使用新的 public 目录结构）
      const launchpadImages = [
        // TemplateSelection (12张模板图片)
        ...Array.from({ length: 12 }, (_, i) => `/launchpad/TemplateSelection/img/Mask${i + 1}.png`),
        
        // LogoPromotionalMaterials
        '/launchpad/LogoPromotionalMaterials/img/logo.png',
        '/launchpad/LogoPromotionalMaterials/img/Mask1.png',
        '/launchpad/LogoPromotionalMaterials/img/Mask2.png',
        '/launchpad/LogoPromotionalMaterials/img/Mask3.png',
        '/launchpad/LogoPromotionalMaterials/img/Mask4.png',
        '/launchpad/LogoPromotionalMaterials/img/Mask5.png',
        
        // ProjectHomepagePreview
        '/launchpad/ProjectHomepagePreview/img/img_13.png',
        '/launchpad/ProjectHomepagePreview/img/img_14.png',
        '/launchpad/ProjectHomepagePreview/img/img_15.png',
        '/launchpad/ProjectHomepagePreview/img/img_16.png',
        '/launchpad/ProjectHomepagePreview/img/img_17.png',
      ]
      
      // TokenMarketplace页面图片列表（使用新的 public 目录结构）
      const tokenMarketplaceImages = [
        // TokenImages 组件的3张顶部图片
        '/tokenMarketplace/TokenImages/img/Mask1.png',
        '/tokenMarketplace/TokenImages/img/Mask2.png',
        '/tokenMarketplace/TokenImages/img/Mask3.png',
        
        // ContentCard 的背景图片（所有卡片共用）
        '/tokenMarketplace/ContentCard/img/bg.png',
        
        // ContentCard 的点击状态图标（所有卡片共用）
        '/tokenMarketplace/ContentCard/img/icon2.png',
        
        // ContentCard 的30个图标（icon_1.png 到 icon_30.png）
        ...Array.from({ length: 30 }, (_, i) => `/tokenMarketplace/ContentCard/img/icon/icon_${i + 1}.png`),
      ]
      
      // 合并所有图片并去重
      const allImages = [...new Set([...homeImages, ...launchpadImages, ...tokenMarketplaceImages])]
      
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

