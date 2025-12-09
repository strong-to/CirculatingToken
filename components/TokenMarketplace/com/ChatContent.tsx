'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import InitialContent from './ChatContent/InitialContent'
import HoverContent from './ChatContent/HoverContent'
import ClickedContent from './ChatContent/ClickedContent'
import { chatContentImages } from './ChatContent/resources'
import { chatContentData } from '../data/ChatContentData'

export default function ChatContent() {
  const pathname = usePathname()
  const [hoveredButtons, setHoveredButtons] = useState<Record<string, boolean>>({})
  const [cardStates, setCardStates] = useState<Record<number, { isHovered: boolean; isClicked: boolean }>>({})

  // 监听路由变化，重置所有悬停状态
  useEffect(() => {
    setHoveredButtons({})
    setCardStates({})
  }, [pathname])

  const handleMouseEnter = (cardIndex: number, buttonName: string) => {
    setHoveredButtons(prev => ({ ...prev, [`${cardIndex}-${buttonName}`]: true }))
  }

  const handleMouseLeave = (cardIndex: number, buttonName: string) => {
    setHoveredButtons(prev => ({ ...prev, [`${cardIndex}-${buttonName}`]: false }))
  }

  const handleButtonClick = (cardIndex: number, buttonName: string) => {
    // 点击按钮时清除悬停状态，防止跳转回来后状态仍然保持
    setHoveredButtons(prev => ({ ...prev, [`${cardIndex}-${buttonName}`]: false }))
  }

  const handleCardMouseEnter = (index: number) => {
    setCardStates(prev => ({
      ...prev,
      [index]: { ...prev[index], isHovered: true }
    }))
  }

  const handleCardMouseLeave = (index: number) => {
    const currentState = cardStates[index]
    
    // 清除该卡片所有按钮的 hover 状态
    const cardData = chatContentData[index]
    if (cardData) {
      cardData.buttons.forEach(buttonName => {
        setHoveredButtons(prev => {
          const newState = { ...prev }
          delete newState[`${index}-${buttonName}`]
          return newState
        })
      })
    }
    
    if (currentState?.isClicked) {
      // 如果已点击，鼠标移出时重置为初始化状态
      setCardStates(prev => ({
        ...prev,
        [index]: { isHovered: false, isClicked: false }
      }))
    } else {
      setCardStates(prev => ({
        ...prev,
        [index]: { ...prev[index], isHovered: false }
      }))
    }
  }

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCardStates(prev => ({
      ...prev,
      [index]: { ...prev[index], isClicked: true }
    }))
  }

  return (
    <div style={{ paddingLeft: px(29), paddingRight: px(29) ,marginTop: px(21),paddingBottom: px(121)}}>


        
      {/* Chat 视图的内容区域 */}
      <div className="flex flex-wrap w-full" style={{ gap: px(16) }}>
        {chatContentImages.map((imageSrc, index) => {
          const cardState = cardStates[index] || { isHovered: false, isClicked: false }
          const isHovered = cardState.isHovered
          const isClicked = cardState.isClicked
          
          // 根据状态计算背景色
          let backgroundColor = '#F0F4F7' // 初始状态
          if (isClicked) {
            backgroundColor = 'rgba(203, 44, 34, 0.1)' // #CB2C22 的 10%
          } else if (isHovered) {
            backgroundColor = 'rgba(8, 63, 216, 0.1)' // #083FD8 的 10%
          }

          return (
          <div
            key={index}
            style={{
              width: `calc((100% - ${px(5 * 16)}) / 6)`,
              aspectRatio: '1 / 1',
              border: `${px(1)} solid #000000`,
              borderRadius: px(4),
              backgroundColor,
              minWidth: 0,
              padding: px(20),
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'background-color',
              position: 'relative',
            }}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={() => handleCardMouseLeave(index)}
            onClick={(e) => handleCardClick(index, e)}
          >
            {/* 使用绝对定位和透明度实现平滑过渡 */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: px(20),
                opacity: isClicked ? 0 : isHovered ? 0 : 1,
                pointerEvents: isClicked ? 'none' : isHovered ? 'none' : 'auto',
                transition: 'opacity 0.4s ease-in-out',
                willChange: 'opacity',
              }}
            >
              <InitialContent
                cardIndex={index}
                imageSrc={imageSrc}
                hoveredButtons={hoveredButtons}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onButtonClick={handleButtonClick}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: px(20),
                opacity: isClicked ? 0 : isHovered ? 1 : 0,
                pointerEvents: isClicked ? 'none' : isHovered ? 'auto' : 'none',
                transition: 'opacity 0.4s ease-in-out',
                willChange: 'opacity',
              }}
            >
              <HoverContent
                cardIndex={index}
                hoveredButtons={hoveredButtons}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onButtonClick={handleButtonClick}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: px(20),
                opacity: isClicked ? 1 : 0,
                pointerEvents: isClicked ? 'auto' : 'none',
                transition: 'opacity 0.4s ease-in-out',
                willChange: 'opacity',
              }}
            >
              <ClickedContent
                cardIndex={index}
                hoveredButtons={hoveredButtons}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>

          </div>
          )
        })}
      </div>





    </div>
  )
}

