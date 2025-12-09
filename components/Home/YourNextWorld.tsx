'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlueSquareCard from '@/components/Home/com/YourNextWorld/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/YourNextWorld/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'
import { images, texts } from '@/components/Home/com/YourNextWorld/resources'

import { px } from '@/utils/pxToRem'

export default function  YourNextWorld() {
  const [isExpanded, setIsExpanded] = useState(false)

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
             {texts.mainTitle}
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 */}
            {/* <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} />  */}
            {/* <div className="relative flex items-center ">
              {isExpanded && <div className="bg-[#8000EA]"  style={{ width: px(38), height: px(58)  }}></div> }  
                <div className="bg-[#8000EA]"  style={{ width: px(92), height: px(92)  }}></div>
              {isExpanded && <div className="bg-[#8000EA]"  style={{ width: px(38), height: px(58)  }}></div>}  
            </div> */}

            <button
              className="flex items-center justify-center text-black border border-[#000000] transition-colors active:bg-black active:text-white"
              style={{
                width: '17.296875rem', // 276.75px
                height: '3.9375rem', // 63px
                fontSize: '1.75rem', // 28px
                borderRadius: '0.25rem' // 4px
              }}
            >
              {texts.buttonViewMore}
            </button>

            {/* 折叠面板按钮 - 添加动画 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span style={{ marginRight: '0.625rem' }} className='whitespace-nowrap' >{texts.buttonLaunchProject}</span>
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
            </div>
            {/* 右侧按钮：View all projects，边框 #000000，圆角 1px，点击(active) 时黑底白字 */}
            {/* <button
              className="flex items-center justify-center text-black border border-[#000000] transition-colors active:bg-black active:text-white"
              style={{
                width: '17.296875rem', // 276.75px
                height: '3.9375rem', // 63px
                fontSize: '1.75rem', // 28px
                borderRadius: '0.25rem' // 4px
              }}
            >
              View all projects
            </button> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: '1.41875rem' }}> {/* 22.7px */}
            
             {/* 中间高亮卡片：使用带 340x340 蓝色背景的通用组件 */}
            {/* <BlueSquareCard
              src={images.games}
              alt="Investing card 3"
            /> */}
            <div className="relative overflow-hidden shadow-lg bg-[#8000EA] flex items-end justify-center" style={{paddingBottom:px(22) ,fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', borderRadius: px(4), aspectRatio: '340 / 500'}}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src={images.datasets}
                alt={texts.cardDatasets}
                fill
                className="object-cover"
                priority
              />
              <div className='text-[#FFFFFF] relative z-10' style={{fontSize:px(25)}}>{texts.cardDatasets}</div>
            </div>
           
           
            <div className="relative overflow-hidden shadow-lg bg-[#fdf166] flex items-end justify-center" style={{ borderRadius: px(4), aspectRatio: '340 / 500',paddingBottom:px(22) ,fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src={images.computePool}
                alt={texts.cardComputePool}
                fill
                className="object-cover"
                priority
              />
              <div className='text-[#000000] relative z-10' style={{fontSize:px(25)}}>{texts.cardComputePool}</div>
            </div>


           
            
            <div className="relative overflow-hidden shadow-lg bg-[#008400] flex items-end justify-center" style={{ borderRadius: px(4), aspectRatio: '340 / 500',paddingBottom:px(22) ,fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src={images.foundationalModels}
                alt={texts.cardFoundationalModels}
                fill
                className="object-cover"
                priority
              />
              <div className='text-[#FFFFFF] relative z-10' style={{fontSize:px(25)}}>{texts.cardFoundationalModels}</div>
            </div>
           
            <div className="relative overflow-hidden shadow-lg bg-[#E1050D] flex items-end justify-center" style={{ borderRadius: px(4), aspectRatio: '340 / 500',paddingBottom:px(22) ,fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src={images.workflows}
                alt={texts.cardWorkflows}
                fill
                className="object-cover"
                priority
              />
              <div className='text-[#FFFFFF] relative z-10' style={{fontSize:px(25)}}>{texts.cardWorkflows}</div>
            </div>
            <div className="relative overflow-hidden shadow-lg bg-[#083fd8] flex items-end justify-center" style={{ borderRadius: px(4), aspectRatio: '340 / 500',paddingBottom:px(22) ,fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src={images.aiAgents}
                alt={texts.cardAiAgents}
                fill
                className="object-cover"
                priority
              />
              <div className='text-[#FFFFFF] relative z-10' style={{fontSize:px(25)}}>{texts.cardAiAgents}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

