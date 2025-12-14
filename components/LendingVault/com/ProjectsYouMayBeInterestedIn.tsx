'use client'

import { useState, useRef, useEffect } from 'react'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import { px } from '@/utils/pxToRem'
import { LearnMoreArrowIcon } from '@/components/icons/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ProjectsYouMayBeInterestedIn() {
  const [isWindows, setIsWindows] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  
  const gap = 22.7 // 1.41875rem = 22.7px

  // 检测操作系统
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const platform = navigator.platform.toLowerCase()
      const userAgent = navigator.userAgent.toLowerCase()
      // 检测 Windows 系统
      const isWindowsOS = platform.includes('win') || userAgent.includes('windows')
      setIsWindows(isWindowsOS)
    }
  }, [])

  // 6张图片路径
  const images = Array.from({ length: 6 }, (_, i) => `/LendingVault/ProjectsYouMayBeInterestedIn/img/Mask${i + 1}.png`)

  return (
    



    <div className="w-full" style={{ marginTop: px(50) , height: px(600) }}>
      {/* 标题和 Learn more 链接 */}
      <div 
        className="flex items-center justify-between"
        style={{ 
          marginLeft: px(80),
          marginRight: px(80),
          marginBottom: px(41),
        }}
      >
        <div
          className="text-black"
          style={{ 
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(28),
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          Projects You May Be Interested In
        </div>
        <a
          href="#"
          className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(24),
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          <span>Learn more details</span>
          <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
        </a>
      </div>

      <div 
        className="flex"
        style={{
          marginLeft: px(80),
          marginRight: px(80),
          gap: px(14),
          height: px(383),
        }}
      >
        {images.map((src, index) => (
          <div 
            key={index}
            className="relative flex-1 flex-shrink-0"
            style={{ 
                height: px(383),
            }}
          >
            <ImageWithSkeleton
              src={src}
              alt={`Project ${index + 1}`}
              fill
              objectFit="cover"
              priority={index < 2}
              loading={index < 2 ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>

      
    </div>

  )
}
