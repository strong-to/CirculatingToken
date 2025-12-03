/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlueSquareCard from '@/components/Home/com/LetEveryShare/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/LetEveryShare/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'

import { px } from '@/utils/pxToRem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export default function LetEveryShare() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const gap = 22.7 // 1.41875rem = 22.7px

  return ( 
    <section className="bg-white flex flex-col min-h-[calc(100vh-5.5625rem)]">
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
              Let Every Share Come With Joy
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 */}
            {/* <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} />  */}
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

            {/* 折叠面板按钮 - 添加动画 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span style={{ marginRight: '0.625rem' }}>Share AI Projects and Earn</span>
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
            <div className="flex items-center justify-end" style={{ marginTop: '1.5rem' }}>
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
                fontSize: '1.75rem', // 28px
                borderRadius: '0.25rem' // 4px
              }}
            >
              View all projects
            </button>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={gap}
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
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
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing1.png"
                    alt="Investing card 1"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 340' }}>
                  <BlueSquareCard
                    src="/images/LetEveryShare/Investing2.png"
                    alt="Investing card 2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing3.png"
                    alt="Investing card 3"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing4.png"
                    alt="Investing card 4"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing5.png"
                    alt="Investing card 5"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                  />
                </div>
              </SwiperSlide>
              
              {/* 复制卡片以支持循环模式（Swiper loop 需要至少 slidesPerView * 2 个 slides） */}
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing1.png"
                    alt="Investing card 1"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full" style={{ aspectRatio: '340 / 340' }}>
                  <BlueSquareCard
                    src="/images/LetEveryShare/Investing2.png"
                    alt="Investing card 2"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing3.png"
                    alt="Investing card 3"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing4.png"
                    alt="Investing card 4"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="overflow-hidden shadow-lg bg-black w-full" 
                  style={{ 
                    borderRadius: px(4), 
                    aspectRatio: '340 / 500',
                  }}
                >
                  <Image
                    src="/images/LetEveryShare/Investing5.png"
                    alt="Investing card 5"
                    width={340}
                    height={500}
                    className="w-full h-full object-cover"
                    draggable={false}
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

