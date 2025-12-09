'use client'

import Image from "next/image"
import { px } from '@/utils/pxToRem'

interface HoverContentProps {
  cardIndex: number
  hoveredButtons: Record<string, boolean>
  onMouseEnter: (cardIndex: number, buttonName: string) => void
  onMouseLeave: (cardIndex: number, buttonName: string) => void
  onButtonClick: (cardIndex: number, buttonName: string) => void
}

export default function HoverContent({
  cardIndex,
  hoveredButtons,
  onMouseEnter,
  onMouseLeave,
  onButtonClick
}: HoverContentProps) {
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
              AtmoSet
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
              DBAI0000009
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
            width: '66%',
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
            backgroundColor: hoveredButtons[`${cardIndex}-NaturalLanguage`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-NaturalLanguage`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'NaturalLanguage')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'NaturalLanguage')}
          onClick={() => onButtonClick(cardIndex, 'NaturalLanguage')}
        >Natural Language
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: '33%',
            height: px(28),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4),
            backgroundColor: hoveredButtons[`${cardIndex}-Text`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Text`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Text')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Text')}
          onClick={() => onButtonClick(cardIndex, 'Text')}
        >Text</div>
      </div>

      <div className="w-full flex justify-between" style={{ marginTop: px(10) }}>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: '33%',
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
            backgroundColor: hoveredButtons[`${cardIndex}-Analyze`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Analyze`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Analyze')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Analyze')}
          onClick={() => onButtonClick(cardIndex, 'Analyze')}
        >Analyze</div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: '66%',
            height: px(28),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4),
            backgroundColor: hoveredButtons[`${cardIndex}-PublicHealth`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-PublicHealth`] ? '#ffffff' : '#000000',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'PublicHealth')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'PublicHealth')}
          onClick={() => onButtonClick(cardIndex, 'PublicHealth')}
        >Public Health
        </div>
      </div>

      <div className="w-full flex flex-col justify-between" style={{ height: px(35), marginTop: px(18) }}>
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(18),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000'
        }}>THIS IS A VIDEO</div>
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(18),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
          marginTop: px(5)
        }}>CREATION AIWORKFLOW
        </div>
      </div>
    </>
  )
}

