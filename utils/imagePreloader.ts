/**
 * 图片预加载工具函数
 * 用于在 Header hover 和页面切换时预加载图片
 */

/**
 * 图片资源定义
 */
export const imageResources = {
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
    '/tokenMarketplace/TokenImages/img/Mask4.png',
    '/tokenMarketplace/TokenImages/img/Mask5.png',
    '/tokenMarketplace/TokenImages/img/Mask6.png',
    '/tokenMarketplace/ContentCard/img/bg.png',
    '/tokenMarketplace/ContentCard/img/icon2.png',
    ...Array.from({ length: 30 }, (_, i) => `/tokenMarketplace/ContentCard/img/icon/icon_${i + 1}.png`),
    ...Array.from({ length: 30 }, (_, i) => `/tokenMarketplace/ChatContent/img/icon${String(i + 1).padStart(2, '0')}.png`),
  ],

  // LendingVault页面图片
  lendingVaultImages: [
    '/header/img/logo.png', // Header logo
    '/LendingVault/banner/MaskGroup.png',
    ...Array.from({ length: 6 }, (_, i) => `/LendingVault/banner/item/Mask${i + 1}.png`),
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask1.png',
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask2.png',
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask3.png',
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask4.png',
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask5.png',
    '/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask6.png',
    '/LendingVault/UserComments/img1.png',
    '/LendingVault/UserComments/img2.png',
    '/LendingVault/UserComments/img3.png',
    '/LendingVault/UserComments/img4.png',
    '/LendingVault/ProjectConstruction/logo.png',
    ...Array.from({ length: 16 }, (_, i) => `/LendingVault/ProjectConstruction/item/img${i + 1}.png`),
  ],

  // ConferenceRoom页面图片
  conferenceRoomImages: [
    '/header/img/logo.png', // Header logo
    ...Array.from({ length: 5 }, (_, i) => `/ConferenceRoom/img/icon${i + 1}.png`),
  ],

  // MortgageMarket页面图片
  mortgageMarketImages: [
    '/header/img/logo.png', // Header logo
    '/MortgageMarket/img/Mask1.png',
    '/MortgageMarket/img/Mask2.png',
    '/MortgageMarket/img/Mask3.png',
    '/MortgageMarket/img/Mask4.png',
    '/MortgageMarket/img/Mask5.png',
    '/MortgageMarket/img/Mask6.png',
    '/MortgageMarket/img/Mask7.png',
    '/MortgageMarket/img/Mask8.png',
    // img2 目录的图片（循环展示的第二组）
    '/MortgageMarket/img2/Mask1.png',
    '/MortgageMarket/img2/Mask2.png',
    '/MortgageMarket/img2/Mask3.png',
    '/MortgageMarket/img2/Mask4.png',
    '/MortgageMarket/img2/Mask5.png',
    '/MortgageMarket/img2/Mask6.png',
    '/MortgageMarket/img2/Mask7.png',
    '/MortgageMarket/img2/Mask8.png',
  ],
}

/**
 * 页面名称到图片资源的映射
 */
export const pageImageMap: Record<string, string[]> = {
  '/': [...imageResources.criticalImages, ...imageResources.homeImages],
  '/Launchpad': imageResources.launchpadImages,
  '/TokenMarketplace': imageResources.tokenMarketplaceImages,
  '/LendingVault': imageResources.lendingVaultImages,
  '/ConferenceRoom': imageResources.conferenceRoomImages,
  '/MortgageMarket': imageResources.mortgageMarketImages,
}

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
 * 预加载指定页面的图片
 * @param pathname 页面路径
 * @param priority 优先级：'high' | 'normal' | 'low'
 */
export const preloadPageImages = (
  pathname: string,
  priority: 'high' | 'normal' | 'low' = 'normal'
): void => {
  const images = pageImageMap[pathname]
  if (!images || images.length === 0) return

  const concurrency = getOptimalConcurrency()
  const adjustedConcurrency = priority === 'high' 
    ? Math.min(concurrency + 4, 16) 
    : priority === 'normal'
    ? concurrency
    : Math.max(concurrency - 2, 4)

  const loadFn = () => {
    preloadImagesWithConcurrency(images, adjustedConcurrency).catch(() => {
      // 静默处理错误，不影响用户体验
    })
  }

  if (priority === 'high') {
    // 高优先级：立即加载
    loadFn()
  } else if (priority === 'normal') {
    // 正常优先级：延迟加载
    setTimeout(loadFn, 50)
  } else {
    // 低优先级：浏览器空闲时加载
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadFn, { timeout: 2000 })
    } else {
      setTimeout(loadFn, 500)
    }
  }
}

