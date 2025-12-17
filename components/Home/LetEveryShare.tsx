/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlueSquareCard from '@/components/Home/com/UseCaseSection/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/LetEveryShare/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'
import { images, texts } from '@/components/Home/com/LetEveryShare/resources'

import { px } from '@/utils/pxToRem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function LetEveryShare() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isWindows, setIsWindows] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  
  const gap = 15 // 1.41875rem = 22.7px

  // 小图标：使用 /home/icon/img 里的第 11~20 个 icon
  const letEveryIconImages = Array.from({ length: 10 }, (_, i) => {
    const num = String(10 + i + 1).padStart(2, '0') // 11..20
    return `/home/icon/img/icon${num}.png`
  })

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
    <section className="bg-white flex flex-col min-h-[calc(100vh-4.5rem)]">
      <div className="container-responsive flex-1 flex flex-col justify-between" style={{ paddingTop: '4.625rem', paddingBottom: '3.25rem' }}> {/* 74px, 52px */}
      
      

        <div className="flex flex-col items-start justify-between ">
          <div className=" flex  items-start justify-between w-full ">
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
              Let Every Share Come 
            </div>

            <div className="relative" style={{ width: px(88), height: px(88) }}>
              {/* 中间的大方块 */}
              <div className="bg-[#E1050D]" style={{ width: px(88.72), height: px(88.91), position: 'relative', zIndex: 1 }}></div>
              
              {/* 左边的小方块 - 当展开时显示，重叠在左下角，添加动画 */}
              <div 
                className="bg-[#E1050D] overflow-hidden"
                style={{ 
                  width: isExpanded ? px(26.09) : '0',
                  height: isExpanded ? px(26.15) : '0',
                  opacity: isExpanded ? 1 : 0,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  zIndex: 2,
                  transform: 'translate(-85%, -20%)',
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              ></div>
              
              {/* 右边的小方块 - 当展开时显示，重叠在右上角，添加动画 */}
              <div 
                className="bg-[#E1050D] overflow-hidden"
                style={{ 
                  width: isExpanded ? px(55.66) : '0',
                  height: isExpanded ? px(55.78) : '0',
                  opacity: isExpanded ? 1 : 0,
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: 2,
                  transform: 'translate(70%, -50%)',
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              ></div>
            </div>
          </div>
          
          <div className='w-full flex items-end justify-between' style={{ marginTop: px(15) }}>
              
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
             With Joy
              </div>
  
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
                >
                  Share AI Projects and Earn
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
                <span style={{ marginRight: '0.625rem' }}>{texts.linkLearnMore}</span>
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
            {/* 右侧按钮：View all projects，点击跳转 /ProjectHub */}
            <Link href="/ProjectHub">
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
            </Link>
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
                  <mask id="path-1-inside-1_2241_2422-let" fill="white">
                    <path d="M16 32L0 16.0001L16 0"/>
                  </mask>
                  <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-let)"/>
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
                  <mask id="path-1-inside-1_2241_2422-let-right" fill="white">
                    <path d="M16 32L0 16.0001L16 0"/>
                  </mask>
                  <path d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z" fill="white" mask="url(#path-1-inside-1_2241_2422-let-right)"/>
                </svg>
              </button>
            )}



            <Swiper
              modules={[Navigation, Mousewheel]}
              spaceBetween={gap}
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
              // 滚动逻辑与 WhereUsingBecomes 保持一致：freeMode + mousewheel 惯性左右滑
              freeMode={{
                enabled: true,
                momentum: true,
                momentumRatio: 1.5,
                momentumBounce: false,
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1.2,
                thresholdDelta: 1,
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
              {/* 原始5张卡片（映射 ChatContent 第 11~15 条：索引 10~14） */}
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing1}
                    alt="Investing card 1"
                    cardIndex={10}
                    iconSrcOverride={letEveryIconImages[0]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing2}
                    alt="Investing card 2"
                    cardIndex={11}
                    iconSrcOverride={letEveryIconImages[1]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing3}
                    alt="Investing card 3"
                    cardIndex={12}
                    iconSrcOverride={letEveryIconImages[2]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing4}
                    alt="Investing card 4"
                    cardIndex={13}
                    iconSrcOverride={letEveryIconImages[3]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing5}
                    alt="Investing card 5"
                    cardIndex={14}
                    iconSrcOverride={letEveryIconImages[4]}
                  />
                </div>
              </SwiperSlide>
              
              {/* 复制卡片以支持循环模式（映射 ChatContent 第 16~20 条：索引 15~19） */}
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing6}
                    alt="Investing card 1"
                    cardIndex={15}
                    iconSrcOverride={letEveryIconImages[5]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing7}
                    alt="Investing card 2"
                    cardIndex={16}
                    iconSrcOverride={letEveryIconImages[6]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing8}
                    alt="Investing card 3"
                    cardIndex={17}
                    iconSrcOverride={letEveryIconImages[7]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing9}
                    alt="Investing card 4"
                    cardIndex={18}
                    iconSrcOverride={letEveryIconImages[8]}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                  <BlueSquareCard
                    src={images.investing10}
                    alt="Investing card 5"
                    cardIndex={19}
                    iconSrcOverride={letEveryIconImages[9]}
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

