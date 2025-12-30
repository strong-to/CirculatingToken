'use client'

import { useState, useRef, useEffect } from 'react'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import { px } from '@/utils/pxToRem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import type { ProjectData } from '@/app/data'
import 'swiper/css'
import 'swiper/css/navigation'
import { log } from 'console'

interface BannerProps {
  projectData?: ProjectData
}

export default function Banner({ projectData }: BannerProps) {
  const [isWindows, setIsWindows] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const swiperRef = useRef<SwiperType | null>(null)
  
  const gap = 42 // 左右间距 58px

  // 检测操作系统
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const platform = navigator.platform.toLowerCase()
      const userAgent = navigator.userAgent.toLowerCase()
      const isWindowsOS = platform.includes('win') || userAgent.includes('windows')
      setIsWindows(isWindowsOS)
    }
  }, [])

  // 键盘事件处理（Windows 左右键）
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isWindows && swiperRef.current) {
        if (e.key === 'ArrowLeft') {
          swiperRef.current.slidePrev()
        } else if (e.key === 'ArrowRight') {
          swiperRef.current.slideNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isWindows])


  // 路径转换函数：将相对路径转换为 Next.js 可用的绝对路径
  const convertPathToPublic = (path: string | undefined): string => {
    if (!path) return '' // 默认值
    // 如果已经是绝对路径（以 / 开头），直接返回
    if (path.startsWith('/')) return path
    // 如果是相对路径，提取 public 之后的部分
    // 处理类似 "../../../public/LendingVault/banner/MaskGroup.png" 的路径
    const publicIndex = path.indexOf('/public/')
    if (publicIndex !== -1) {
      return path.substring(publicIndex + '/public'.length)
    }
    // 如果包含 public，尝试其他方式提取
    const publicMatch = path.match(/public\/(.+)/)
    if (publicMatch) {
      return '/' + publicMatch[1]
    }
    // 如果都不匹配，返回默认值
    return ''
  }
  // console.log('Banner - convertPathToPublic:', projectData.profile.projectDetailsPage.banner)

  // 从项目数据中获取图片路径，如果没有则使用默认值
  const bannerImage = convertPathToPublic(projectData?.profile?.projectDetailsPage?.banner)
  
  // 转换 carouselImages 中的每个路径
  const rawImages = projectData?.profile?.projectDetailsPage?.carouselImages 
  const images = rawImages?.map(img => convertPathToPublic(img)) || Array.from({ length: 6 }, (_, i) => `/LendingVault/banner/item/Mask${i + 1}.png`)

  console.log('images-----------------1212', images)
 
  return (
    <>
      {/* 主 Banner 图片 */}
      <div className="w-full" style={{ height: px(540) }}>
        <ImageWithSkeleton
          src={bannerImage}
          alt="Banner"
          width={1920}
          height={540}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
          objectFit="cover"
          priority
        />
      </div>
 {/* 图片轮播区域 */}
      <div 
        className="w-full relative" 
        style={{ height: px(168), marginTop: px(80) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 左箭头按钮 - 只在 Windows 系统且鼠标悬浮时显示 */}
        {isWindows && isHovered && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              left: px(10),
              width: px(60),
              height: px(60),
              backgroundColor: '#3d4347',
              borderRadius: '50%',
            }}
            aria-label="Previous slide"
          >
            <svg 
              width="14" 
              height="30" 
              viewBox="0 0 14 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: px(-2) }}
            >
              <mask id="path-1-inside-1_2241_2422-banner" fill="white">
                <path d="M16 32L0 16.0001L16 0"/>
              </mask>
              <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-banner)"/>
            </svg>
          </button>
        )}

        {/* 右箭头按钮 - 只在 Windows 系统且鼠标悬浮时显示 */}
        {isWindows && isHovered && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              right: px(10),
              width: px(60),
              height: px(60),
              backgroundColor: '#3d4347',
              borderRadius: '50%',
            }}
            aria-label="Next slide"
          >
            <svg 
              width="14" 
              height="30" 
              viewBox="0 0 14 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ transform: 'rotate(180deg)', marginRight: px(-2) }}
            >
              <mask id="path-1-inside-1_2241_2422-banner-right" fill="white">
                <path d="M16 32L0 16.0001L16 0"/>
              </mask>
              <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-banner-right)"/>
            </svg>
          </button>
        )}
        <div 
          style={{ 
            marginLeft: px(-80),
            width: `calc(100% + ${px(80)})`,
            overflow: 'hidden',
          }}
        >
          <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={gap}
            slidesPerView="auto"
            loop={true}
            grabCursor={true}
            watchSlidesProgress={true}
            // 使用 freeMode + mousewheel，让左右滚动有"惯性"而不是一次滚动一个卡片
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 1.5,      // 惯性更明显一些
              momentumBounce: false,
            }}
            mousewheel={{
              forceToAxis: true,      // 只根据水平方向滚动
              releaseOnEdges: true,   // 滑到边缘时把滚动交还给页面
              sensitivity: 1.2,       // 提高灵敏度，滑一下走得更多
              thresholdDelta: 1,      // 较小的滑动也能触发滚动
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="h-full"
            style={{
              width: '100%',
              overflow: 'hidden',
            }}
          >
            {/* 原始6张图片 */}
            {images?.map((src, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    width: px(299),
                    height: '100%',
                  }}
                >
                  <div className="h-full overflow-hidden">
                    <ImageWithSkeleton
                      src={src}
                      alt={`Banner item ${index + 1}`}
                      width={299}
                      height={168}
                      className="w-full h-full"
                      style={{ width: '100%', height: '100%' }}
                      objectFit="cover"
                      priority={index < 2}
                      loading={index < 2 ? undefined : 'lazy'}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
            
            {/* 复制图片以支持循环模式（Swiper loop 需要至少 slidesPerView * 2 个 slides） */}
            {images?.map((src, index) => {
              return (
                <SwiperSlide
                  key={`duplicate-${index}`}
                  style={{
                    width: px(299),
                    height: '100%',
                  }}
                >
                  <div className="h-full overflow-hidden">
                    <ImageWithSkeleton
                      src={src}
                      alt={`Banner item ${index + 1}`}
                      width={299}
                      height={168}
                      className="w-full h-full"
                      style={{ width: '100%', height: '100%' }}
                      objectFit="cover"
                      priority={index < 2}
                      loading={index < 2 ? undefined : 'lazy'}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          </div>
      </div>


    
     
    </>
  )
}
