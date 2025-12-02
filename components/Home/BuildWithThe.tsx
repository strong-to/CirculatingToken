/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlueSquareCard from '@/components/Home/com/BuildWithThe/BlueSquareCard'
import CollapsiblePanelContent from '@/components/Home/com/BuildWithThe/CollapsiblePanelContent'

import { PlusIcon, MinusIcon, LearnMoreArrowIcon } from '@/components/icons/Icons'

import { px } from '@/utils/pxToRem'
import { useCarouselDrag } from '@/hooks/useCarouselDrag'

export default function  BuildWithThe() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // 卡片数据
  const cards = [
    { type: 'blueCard', src: '/images/BuildWithThe/Investing1.png', alt: 'Investing card 1' },
    { type: 'image', src: '/images/BuildWithThe/Investing2.png', alt: 'Investing card 2' },
    { type: 'image', src: '/images/BuildWithThe/Investing3.png', alt: 'Investing card 3' },
    { type: 'image', src: '/images/BuildWithThe/Investing4.png', alt: 'Investing card 4' },
    { type: 'image', src: '/images/BuildWithThe/Investing5.png', alt: 'Investing card 5' },
  ]
  
  // 复制卡片数组以实现无缝循环
  const extendedCards = [...cards, ...cards, ...cards]
  
  // 计算每个卡片的宽度（包括gap）
  const getCardWidth = () => {
    if (!carouselRef.current) return 0
    const containerWidth = carouselRef.current.offsetWidth
    const gap = 22.7 // 1.41875rem = 22.7px
    // 根据屏幕尺寸计算：sm: 3列, lg: 5列
    const isLarge = containerWidth >= 1024
    const isMedium = containerWidth >= 640
    const cols = isLarge ? 5 : isMedium ? 3 : 1
    return (containerWidth - gap * (cols - 1)) / cols + gap
  }
  
  // 使用循环滑动 Hook
  const {
    translateX,
    isDragging,
    isAligning,
    hasMoved,
    carouselRef,
    handleMouseDown,
    handleMouseUp,
  } = useCarouselDrag({
    itemCount: cards.length,
    getItemWidth: getCardWidth,
    enableSnap: true,
    snapDuration: 300,
    dragThreshold: 10,
  })
  
  const cardWidth = getCardWidth()
  const gap = 22.7

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
              <span style={{ marginRight: '0.625rem' ,}} className='whitespace-nowrap' >Contribute AI Projects and Earn</span>
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

          <div 
            ref={carouselRef}
            className="relative overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{ 
              cursor: hasMoved ? 'grabbing' : (isDragging ? 'grabbing' : 'grab'),
            }}
          >
            {/* 内容区域 */}
            <div
              className="flex"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isAligning ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                gap: `${gap}px`,
                pointerEvents: hasMoved ? 'none' : 'auto', // 真正拖拽时阻止子元素交互
              }}
            >
              {extendedCards.map((card, index) => (
                <div
                  key={`${card.alt}-${index}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: `${cardWidth - gap}px`,
                  }}
                >
                  {card.type === 'blueCard' ? (
                    <div className="relative" style={{ aspectRatio: '340 / 340' }}>
                      <BlueSquareCard
                        src={card.src}
                        alt={card.alt}
                      />
                    </div>
                  ) : (
                    <div 
                      className="overflow-hidden shadow-lg bg-black" 
                      style={{ 
                        borderRadius: '0.75rem', 
                        aspectRatio: '340 / 500',
                      }}
                    >
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={340}
                        height={500}
                        className="w-full h-full object-cover"
                        draggable={false}
                        priority={index < 5}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* 左右渐变遮罩（仅在拖拽时显示） */}
            {isDragging && cardWidth > 0 && (
              <>
                {/* 左边渐变遮罩：从半透明到完全透明 */}
                <div
                  className="absolute top-0 left-0 bottom-0 pointer-events-none z-10"
                  style={{
                    width: `${cardWidth}px`,
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), transparent)`,
                  }}
                />
                {/* 右边渐变遮罩：从半透明到完全透明 */}
                <div
                  className="absolute top-0 right-0 bottom-0 pointer-events-none z-10"
                  style={{
                    width: `${cardWidth}px`,
                    background: `linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), transparent)`,
                  }}
                />
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

