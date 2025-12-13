/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef, useEffect } from 'react'
import BlueSquareCard from '@/components/Home/com/BuildWithThe/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/BuildWithThe/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'
import { images } from '@/components/Home/com/BuildWithThe/resources'

import { px } from '@/utils/pxToRem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function  BuildWithThe() {
  const [isExpanded, setIsExpanded] = useState(false)
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

  return ( 
    <section className="bg-[#F5F5F5] flex flex-col min-h-[calc(100vh-4.5rem)]">
      <div className="container-responsive flex-1 flex flex-col justify-between" style={{ paddingTop: '4.625rem', paddingBottom: '3.25rem' }}> {/* 74px, 52px */}
        <div className="flex items-start justify-between gap-8">
          <div className="space-y-4  ">
            <div
              className="text-black"
              style={{ 
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '5.125rem', // 82px = 5.125rem
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
             Build With The Brightest Minds Worldwide
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 - 添加动画 */}
            {/* <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} />  */}
            <div className="relative flex items-center">
              <div 
                className="bg-[#8000EA] overflow-hidden"
                style={{ 
                  width: isExpanded ? px(38) : '0',
                  height: isExpanded ? px(58) : '0',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              ></div>  
              <div className="bg-[#8000EA]" style={{ width: px(92), height: px(92) }}></div>
              <div 
                className="bg-[#8000EA] overflow-hidden"
                style={{ 
                  width: isExpanded ? px(38) : '0',
                  height: isExpanded ? px(58) : '0',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              ></div>  
            </div>

            {/* 折叠面板按钮 - 添加动画 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span
                style={{
                  marginRight: '0.625rem',
                  fontFamily: "ITC Avant Garde Gothic Pro",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(28),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "right",
                }}
                className='whitespace-nowrap'
              >
                Contribute AI Projects and Earn
              </span>
              <div className="relative" style={{ width: '31px', height: '31px' }}>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isExpanded ? 0 : 1,
                    transform: isExpanded ? 'rotate(90deg) scale(0.8)' : 'rotate(0deg) scale(1)',
                    transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <PlusIcon style={{ width: '31px', height: '31px' }} />
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.8)',
                    transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <MinusIcon style={{ width: '31px', height: '2px' }} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 折叠面板内容 - 撑满整个屏幕，固定时长的动画 */}
        <div 
          className="w-full overflow-hidden"
          style={{
            display: 'grid',
            gridTemplateRows: isExpanded ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div 
            className="w-full min-h-0"
            style={{ 
              paddingBottom: '3.8125rem', // 61px = 3.8125rem
              opacity: isExpanded ? 1 : 0,
              transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div 
              className="w-full"
              style={{ 
                marginTop: '1.5rem',
                paddingTop: '1rem',
              }}
            >
              <CollapsiblePanelContent />
            </div>
            
            {/* Learn more details 链接 - 在下边框外面紧挨着 */}
            <div className="flex items-center justify-end" style={{ marginTop: px(74) }}>
              <a
                href="#"
                className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: '1.73rem', // 27.68px = 1.73rem
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                <span style={{ marginRight: '0.625rem' }}>Learn more details</span>
                <LearnMoreArrowIcon style={{ width: '31px', height: '31px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* 下面的卡片区域 - 会自动往下推，平滑过渡 */}
        <div 
          className="space-y-4"
          style={{
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div 
            className="flex items-center justify-between"
            style={{ marginBottom: '2.5625rem' }} // 41px
          >
            <div
              className="text-black"
              style={{ 
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: '1.75rem' // 28px
              }}
            >
              Top Use-to-Earn Picks
            </div>
            {/* 右侧按钮：View all projects，边框 #000000，圆角 1px，点击(active) 时黑底白字 */}
            <button
              className="flex items-center justify-center text-black border border-[#000000] transition-colors active:bg-black active:text-white"
              style={{
                width: '17.296875rem', // 276.75px
                height: '3.9375rem', // 63px
                borderRadius: '0.25rem' // 4px
              }}
            >
              <span
                style={{
                  fontFamily: "ITC Avant Garde Gothic Pro",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(26),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                View all projects
              </span>
            </button>
          </div>

          <div 
            className="relative"
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
                  <mask id="path-1-inside-1_2241_2422-build" fill="white">
                    <path d="M16 32L0 16.0001L16 0"/>
                  </mask>
                  <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-build)"/>
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
                  <mask id="path-1-inside-1_2241_2422-build-right" fill="white">
                    <path d="M16 32L0 16.0001L16 0"/>
                  </mask>
                  <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-build-right)"/>
                </svg>
              </button>
            )}

            <Swiper
              modules={[Navigation]}
              spaceBetween={gap}
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
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
              {/* 原始5张卡片 */}
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 340' }}>
                  <BlueSquareCard
                    src={images.investing1}
                    alt="Investing card 1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing2}
                    alt="Investing card 2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing3}
                    alt="Investing card 3"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing4}
                    alt="Investing card 4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing5}
                    alt="Investing card 5"
                  />
                </div>
              </SwiperSlide>
              
              {/* 复制卡片以支持循环模式（Swiper loop 需要至少 slidesPerView * 2 个 slides） */}
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 340' }}>
                  <BlueSquareCard
                    src={images.investing1}
                    alt="Investing card 1"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing2}
                    alt="Investing card 2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing3}
                    alt="Investing card 3"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing4}
                    alt="Investing card 4"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 500' }}>
                  <BlueSquareCard
                    src={images.investing5}
                    alt="Investing card 5"
                  />
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  )
}

