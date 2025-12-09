'use client'

import Image from "next/image"
import { px } from '@/utils/pxToRem'
import { chatContentData } from '../../data/ChatContentData'

interface HoverContentProps {
  cardIndex: number
  hoveredButtons: Record<string, boolean>
  onMouseEnter: (cardIndex: number, buttonName: string) => void
  onMouseLeave: (cardIndex: number, buttonName: string) => void
  onButtonClick: (cardIndex: number, buttonName: string) => void
}

// 计算按钮宽度的函数
function calculateButtonWidths(buttons: string[]): string[] {
  if (buttons.length !== 4) {
    // 如果按钮数量不是4个，使用默认分配
    return ['66%', '33%', '33%', '66%']
  }

  // 计算每个按钮的文字长度
  const lengths = buttons.map(btn => btn.length)
  const totalLength = lengths.reduce((sum, len) => sum + len, 0)

  // 第一行：按钮0和按钮1
  const row1Total = lengths[0] + lengths[1]
  const row1Width0 = `${(lengths[0] / row1Total) * 100}%`
  const row1Width1 = `${(lengths[1] / row1Total) * 100}%`

  // 第二行：按钮2和按钮3
  const row2Total = lengths[2] + lengths[3]
  const row2Width2 = `${(lengths[2] / row2Total) * 100}%`
  const row2Width3 = `${(lengths[3] / row2Total) * 100}%`

  return [row1Width0, row1Width1, row2Width2, row2Width3]
}

export default function HoverContent({
  cardIndex,
  hoveredButtons,
  onMouseEnter,
  onMouseLeave,
  onButtonClick
}: HoverContentProps) {
  const cardData = chatContentData[cardIndex] || chatContentData[0]
  const buttonWidths = calculateButtonWidths(cardData.buttons)
  
  return (
    <>
      <div className="">
        <div
          className="flex items-center justify-center "
          style={{ width: px(60), height: px(60), borderRadius: px(3) }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: px(60), height: px(60) }}
          >
            <Image
              src="/tokenMarketplace/ChatContent/img/icon14.png"
              alt="icon14"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-between" style={{ marginTop: px(10) }}>
          <div className="flex-1 text-staart ">
            <div
              className="leading-[1] tracking-[0] text-[#000000]"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(20),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              {cardData.title}
            </div>
            <div
              className="leading-[1] tracking-[0] text-[#000000]"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(20),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              {cardData.subtitle}
            </div>
          </div>

          <div
            className="h-full flex items-end justify-end"
            style={{ width: px(24), height: px(24) }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18V2.00012H2.00317" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M2 18L17.9968 2.00012" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between" style={{ marginTop: px(18) }}>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: buttonWidths[0],
            height: px(28),
            marginRight: px(10),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4),
            backgroundColor: hoveredButtons[`${cardIndex}-${cardData.buttons[0]}`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-${cardData.buttons[0]}`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, cardData.buttons[0])}
          onMouseLeave={() => onMouseLeave(cardIndex, cardData.buttons[0])}
          onClick={() => onButtonClick(cardIndex, cardData.buttons[0])}
        >{cardData.buttons[0]}
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: buttonWidths[1],
            height: px(28),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4),
            backgroundColor: hoveredButtons[`${cardIndex}-${cardData.buttons[1]}`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-${cardData.buttons[1]}`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, cardData.buttons[1])}
          onMouseLeave={() => onMouseLeave(cardIndex, cardData.buttons[1])}
          onClick={() => onButtonClick(cardIndex, cardData.buttons[1])}
        >{cardData.buttons[1]}</div>
      </div>

      <div className="w-full flex justify-between" style={{ marginTop: px(10) }}>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: buttonWidths[2],
            height: px(28),
            marginRight: px(10),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            borderRadius: px(4),
            textAlign: 'center',
            backgroundColor: hoveredButtons[`${cardIndex}-${cardData.buttons[2]}`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-${cardData.buttons[2]}`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, cardData.buttons[2])}
          onMouseLeave={() => onMouseLeave(cardIndex, cardData.buttons[2])}
          onClick={() => onButtonClick(cardIndex, cardData.buttons[2])}
        >{cardData.buttons[2]}</div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: buttonWidths[3],
            height: px(28),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4),
            backgroundColor: hoveredButtons[`${cardIndex}-${cardData.buttons[3]}`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-${cardData.buttons[3]}`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, cardData.buttons[3])}
          onMouseLeave={() => onMouseLeave(cardIndex, cardData.buttons[3])}
          onClick={() => onButtonClick(cardIndex, cardData.buttons[3])}
        >{cardData.buttons[3]}
        </div>
      </div>

      <div className="w-full flex flex-col justify-between" style={{ height: px(35), marginTop: px(18) }}>
        {cardData.descriptions.map((desc, index) => (
          <div 
            key={index}
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(18),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
              marginTop: index > 0 ? px(5) : 0
            }}
          >
            {desc}
          </div>
        ))}
      </div>
    </>
  )
}
