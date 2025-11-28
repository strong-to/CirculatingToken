'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlueSquareCard from '@/components/com/BuildWithThe/BlueSquareCard'
import CollapsiblePanelContent from '@/components/com/BuildWithThe/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'

import { px } from '@/utils/pxToRem'

export default function  BuildWithThe() {
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
             Build With The Brightest Minds Worldwide
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 */}
            {/* <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} />  */}
            <div className="relative flex items-center ">
              {isExpanded && <div className="bg-[#8000EA]"  style={{ width: px(38), height: px(58)  }}></div> }  
                <div className="bg-[#8000EA]"  style={{ width: px(92), height: px(92)  }}></div>
              {isExpanded && <div className="bg-[#8000EA]"  style={{ width: px(38), height: px(58)  }}></div>}  
            </div>

            {/* 折叠面板按钮 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span style={{ marginRight: '0.625rem' ,}} className='whitespace-nowrap' >Contribute AI Projects and Earn</span>
              {isExpanded ? (
                <MinusIcon style={{ width: '31px', height: '2px' }} />
              ) : (
                <PlusIcon style={{ width: '31px', height: '31px' }} />
              )}
            </button>
          </div>
        </div>

        {/* 折叠面板内容 - 撑满整个屏幕 */}
        {isExpanded && (
          <div className="w-full" 
          style={{ 
            paddingBottom: '3.8125rem', // 61px = 3.8125rem
          }}>
            <div 
              className="w-full "
              style={{ 
                marginTop: '1.5rem',
                paddingTop: '1rem',
                minHeight: '0' /* 确保内容可以正常展开 */
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
        )}

        {/* 下面的卡片区域 - 会自动往下推 */}
        <div className="space-y-4">
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
             {/* 中间高亮卡片：使用带 340x340 蓝色背景的通用组件 */}
            <BlueSquareCard
              src="/images/BuildWithThe/Investing1.png"
              alt="Investing card 3"
            />
           
           
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/BuildWithThe/Investing2.png"
                alt="Investing card 1"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>


           
            
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/BuildWithThe/Investing3.png"
                alt="Investing card 2"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
           
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/BuildWithThe/Investing4.png"
                alt="Investing card 4"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/BuildWithThe/Investing5.png"
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

