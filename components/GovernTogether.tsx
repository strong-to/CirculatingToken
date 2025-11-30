'use client'

import { useState } from 'react'
// import Image from 'next/image'
// import BlueSquareCard from '@/components/com/GovernTogether/BlueSquareCard'
import CollapsiblePanelContent from '@/components/com/GovernTogether/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'


import { px } from '@/utils/pxToRem'

export default function  GovernTogether() {
  const [isExpanded, setIsExpanded] = useState(false)

  return ( 
    <section className="min-h-full snap-start bg-white flex flex-col" style={{paddingBottom:px(120)}}>
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
             Govern Together, <br />
             Grow Together
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
              View More
            </button>

            {/* 折叠面板按钮 */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span style={{ marginRight: '0.625rem' }} className='whitespace-nowrap' >Shape Projects and Community With Your Tokens</span>
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
        </div>
      </div>

      {/* 黑色盒子 - 撑满整个屏幕宽度，不受 container-responsive 内边距限制 */}
      <div className="w-full bg-[#000000] relative" style={{ height:px(520), paddingRight:px(66),paddingBottom:px(22), overflow: 'hidden' }}> {/* 22.7px */}
        
        {/* 椭圆弧线 - 6个椭圆从左下到右上形成轨迹 */}
        <div className="absolute inset-0" style={{ bottom: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1920 520" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
            <defs>
              <clipPath id="bottomClip">
                <rect x="0" y="0" width="1920" height="520" />
              </clipPath>
            </defs>
            <g clipPath="url(#bottomClip)">
              {/* 椭圆1 - 左下，底部对齐到520px */}
              <g transform="translate(100, 520) scale(0.761) translate(-170, -213.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
              
              {/* 椭圆2 - 沿着-18度角度方向往右上移动，增加重叠（相邻中心距离180px） */}
              <g transform="translate(271, 464) scale(0.761) translate(-190, -250.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
              
              {/* 椭圆3 */}
              <g transform="translate(442, 409) scale(0.761) translate(-190, -303.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
              
              {/* 椭圆4 */}
              <g transform="translate(614, 353) scale(0.761) translate(-190, -323.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
              
              {/* 椭圆5 */}
              <g transform="translate(785, 298) scale(0.761) translate(-190, -400.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
              
              {/* 椭圆6 - 右上，与椭圆5重叠，距离右边362px */}
              <g transform="translate(956, 242) scale(0.761) translate(-120, -453.42) rotate(-2 104 713.42)">
                <path d="M318.701 713.42C410.952 683.449 434.21 500.552 370.65 304.909C307.089 109.266 180.778 -25.0366 88.5269 4.93517C-3.72449 34.9069 -26.9829 217.804 36.5779 413.446C100.139 609.089 226.449 743.392 318.701 713.42Z" fill="none" stroke="white" strokeWidth="1.50048" strokeMiterlimit="10" />
              </g>
            </g>
          </svg>
        </div>

         {/* Learn more details 链接 - 在下边框外面紧挨着 */}
         <div className="flex items-center justify-end absolute" style={{ bottom: px(22), right: px(66) }}>
           <span className='text-[#FFFFFF]' style={{ marginRight: '0.625rem',fontSize:px(26),lineHeight: '100%',letterSpacing: '0%',fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif'}}>
           Explore More
          </span>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5339 0.525635V32.5247H0.969234" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M0.533943 0.526611L32.0987 32.5256" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
          </svg>
        
        </div>
       

      </div>
    </section>
  )
}

