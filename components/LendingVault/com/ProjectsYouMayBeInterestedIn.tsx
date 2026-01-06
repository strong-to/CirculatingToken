'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import { LearnMoreArrowIcon } from '@/components/icons/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import BlueSquareCard from '@/components/Home/com/UseCaseSection/BlueSquareCard'
import { homeSectionsMap, type HomeSection } from '@/app/data'

const SECTION_ID = 'let-every-share'
const FALLBACK_SECTION: HomeSection = {
  id: SECTION_ID,
  titleLines: ['Let Every Share Come', 'With Joy'],
  panelTriggerLabel: 'Share AI Projects and Earn',
  learnMoreLabel: 'Learn more details',
  learnMoreHref: '#',
  cta: {
    label: 'View all projects',
    href: '/ProjectHub',
  },
  accentColor: '#E1050D',
  backgroundColor: '#FFFFFF',
  filterKeys: [],
  projectIds: [],
  projects: [],
}

export default function ProjectsYouMayBeInterestedIn() {
  const router = useRouter()
  const [isWindows, setIsWindows] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  
  const gap = 15 // 卡片间距

  // 从数据集中获取项目数据
  const section = homeSectionsMap[SECTION_ID] ?? FALLBACK_SECTION
  const projects = section.projects ?? []
  const hasProjects = projects.length > 0
  const shouldLoop = projects.length >= 5

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

  return (
    <div className="w-full" style={{ marginTop: px(50), marginBottom: px(50) }}>
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
          onClick={(e) => {
            e.preventDefault()
            router.push('/ProjectHub')
          }}
          className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity cursor-pointer"
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

      {/* 卡片轮播区域 */}
      <div 
        className="relative"
        style={{
          marginLeft: px(80),
          marginRight: px(80),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 左箭头按钮 - 只在 Windows 系统且鼠标悬浮时显示 */}
        {hasProjects && isWindows && isHovered && (
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
              <mask id="path-1-inside-1_2241_2422-projects" fill="white">
                <path d="M16 32L0 16.0001L16 0"/>
              </mask>
              <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-projects)"/>
            </svg>
          </button>
        )}

        {/* 右箭头按钮 - 只在 Windows 系统且鼠标悬浮时显示 */}
        {hasProjects && isWindows && isHovered && (
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
              <mask id="path-1-inside-1_2241_2422-projects-right" fill="white">
                <path d="M16 32L0 16.0001L16 0"/>
              </mask>
              <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-projects-right)"/>
            </svg>
          </button>
        )}

        {hasProjects ? (
              <Swiper
                modules={[Navigation, Mousewheel]}
                spaceBetween={gap}
                loop={shouldLoop}
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
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={`${project.projectId}-${index}`}>
                    <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                      <BlueSquareCard card={project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="flex items-center justify-center py-10 text-black/60 text-lg">
                Projects will be available soon.
              </div>
            )}
      </div>
    </div>
  )
}
