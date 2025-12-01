/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlueSquareCard from '@/components/Home/com/UseCaseSection/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/UseCaseSection/CollapsiblePanelContent'
import { PlusIcon, MinusIcon, LearnMoreArrowIcon, TopBadgeIcon } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'

export default function WhereUsingBecomes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return ( 
    <section className="min-h-full snap-start bg-white flex flex-col">
      <div className="container-responsive flex-1 flex flex-col justify-between" style={{ paddingBottom: '3.25rem' }}> {/* 52px */}
        <div className="flex items-start justify-between gap-8" style={{ marginTop: '4.625rem' }}> {/* 74px */}
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
              Where Using Becomes Investing
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 - 添加动画 */}
            {/* <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} />  */}
            <div className="relative flex items-center">
              <div 
                className="bg-[#0045FF] overflow-hidden"
                style={{ 
                  width: isExpanded ? px(40) : '0',
                  height: isExpanded ? px(61) : '0',
                  opacity: isExpanded ? 1 : 0,
                  marginRight: isExpanded ? '0' : '0',
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              ></div>  
              <div 
                className="bg-[#0045FF]"
                style={{ 
                  width: px(98), 
                  height: px(98),
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
              <span style={{ marginRight: '0.625rem' }}>Use AI Apps and Earn</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: '1.41875rem' }}> {/* 22.7px */}
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing1.png"
                alt="Investing card 1"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing2.png"
                alt="Investing card 2"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* 中间高亮卡片：使用带 340x340 蓝色背景的通用组件 */}
            <div className="relative">
              {/* 悬浮在卡片上方的 SVG 图标 */}
              <div 
                className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 " 
                style={{ pointerEvents: 'none',marginTop:px(28),display:'flex',flexDirection:'column',alignItems:'center',top:px(38) }}
              >
                <img 
                  src="/images/Investing/WALL-E.png" 
                  alt="" 
                  style={{ width: px(290), height: px(28), maxWidth: px(290), objectFit: 'contain' }}
                />
                <img 
                  src="/images/Investing/waitingEarth.png" 
                  alt="" 
                  style={{ width: px(212), height: px(28), maxWidth: px(212), marginTop: px(17), objectFit: 'contain' }}
                />
              </div>
              <BlueSquareCard
                src="/images/Investing/Investing3.png"
                alt="Investing card 3"
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing4.png"
                alt="Investing card 4"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing5.png"
                alt="Investing card 5"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

