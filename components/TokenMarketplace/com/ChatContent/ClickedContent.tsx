'use client'

import Image from "next/image"
import { px } from '@/utils/pxToRem'

interface ClickedContentProps {
  cardIndex: number
  hoveredButtons: Record<string, boolean>
  onMouseEnter: (cardIndex: number, buttonName: string) => void
  onMouseLeave: (cardIndex: number, buttonName: string) => void
}

export default function ClickedContent({
  cardIndex,
  hoveredButtons,
  onMouseEnter,
  onMouseLeave
}: ClickedContentProps) {
  return (
    <>
      <div className="">
        <div
          className="flex items-center justify-start "
          style={{ height: px(60) }}
        >
          <div
            className="relative flex items-start justify-center"
            style={{ width: px(60), height: px(60), marginRight: px(15) }}
          >
            <Image
              src="/tokenMarketplace/ChatContent/img/icon13.png"
              alt="icon13"
              fill
              className="object-contain"
            />
          </div>

          <div className="h-full flex justify-between flex-col" style={{ paddingTop: px(2), paddingBottom: px(2) }}>
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
        </div>
      </div>

      <div className="flex justify-between items-center" style={{ height: px(30), marginTop: px(26) }}>
        <div className="flex flex-col items-start justify-between" style={{ height: '100%' }}>
          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(11),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>24h Revenue</div>

          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            marginTop: px(2),
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>$ 6,550,521</div>
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: px(128),
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            backgroundColor: hoveredButtons[`${cardIndex}-Details`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Details`] ? '#ffffff' : '#000000',
            borderRadius: px(4),
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Details')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Details')}
        >Details
        </div>
      </div>

      <div className="flex justify-between items-center" style={{ height: px(30), marginTop: px(19) }}>
        <div className="flex flex-col items-start justify-between" style={{ height: '100%' }}>
          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(11),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>Market cap</div>

          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            marginTop: px(2),
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>$ 76,144,900
          </div>
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: px(128),
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            backgroundColor: hoveredButtons[`${cardIndex}-Share`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Share`] ? '#ffffff' : '#000000',
            borderRadius: px(4),
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Share')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Share')}
        >Share
        </div>
      </div>

      <div className="flex justify-between items-center" style={{ height: px(30), marginTop: px(19) }}>
        <div className="flex flex-col items-start justify-between" style={{ height: '100%' }}>
          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(11),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>Total Users</div>

          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            marginTop: px(2),
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>2,110,977
          </div>
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: px(128),
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            backgroundColor: hoveredButtons[`${cardIndex}-Market`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Market`] ? '#ffffff' : '#000000',
            borderRadius: px(4),
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Market')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Market')}
        >Market
        </div>
      </div>

      <div className="flex justify-between items-center" style={{ height: px(30), marginTop: px(19) }}>
        <div className="flex flex-col items-start justify-between" style={{ height: '100%' }}>
          <div className="flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(11),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}>User Rating
          </div>

          <div className="flex items-start justify-center gap-1" style={{ marginTop: px(2) }}>
            {/* 实心星星 */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5001 0.683594L9.03088 5.39484H13.9846L9.97695 8.30655L11.5077 13.0178L7.5001 10.1061L3.49247 13.0178L5.02325 8.30655L1.01562 5.39484H5.96932L7.5001 0.683594Z" fill="black"/>
            </svg>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5001 0.683594L9.03088 5.39484H13.9846L9.97695 8.30655L11.5077 13.0178L7.5001 10.1061L3.49247 13.0178L5.02325 8.30655L1.01562 5.39484H5.96932L7.5001 0.683594Z" fill="black"/>
            </svg>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5001 0.683594L9.03088 5.39484H13.9846L9.97695 8.30655L11.5077 13.0178L7.5001 10.1061L3.49247 13.0178L5.02325 8.30655L1.01562 5.39484H5.96932L7.5001 0.683594Z" fill="black"/>
            </svg>
            {/* 空心星星 */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.79297 5.47168L8.84961 5.64453H13.2158L9.83008 8.10449L9.68262 8.21094L9.73926 8.38379L11.0312 12.3623L7.64746 9.9043L7.5 9.79688L7.35352 9.9043L3.96777 12.3633L5.26074 8.38379L5.31738 8.21094L5.16992 8.10449L1.78418 5.64453H6.15137L6.20703 5.47168L7.5 1.49219L8.79297 5.47168Z" stroke="black" strokeWidth="0.5"/>
            </svg>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.79297 5.47168L8.84961 5.64453H13.2158L9.83008 8.10449L9.68262 8.21094L9.73926 8.38379L11.0312 12.3623L7.64746 9.9043L7.5 9.79688L7.35352 9.9043L3.96777 12.3633L5.26074 8.38379L5.31738 8.21094L5.16992 8.10449L1.78418 5.64453H6.15137L6.20703 5.47168L7.5 1.49219L8.79297 5.47168Z" stroke="black" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
        <div 
          className="border border-[#000000] flex items-center justify-center cursor-pointer" 
          style={{ 
            width: px(128),
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            backgroundColor: hoveredButtons[`${cardIndex}-Favorites`] ? '#000000' : 'transparent',
            color: hoveredButtons[`${cardIndex}-Favorites`] ? '#ffffff' : '#000000',
            borderRadius: px(4),
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => onMouseEnter(cardIndex, 'Favorites')}
          onMouseLeave={() => onMouseLeave(cardIndex, 'Favorites')}
        >Favorites
        </div>
      </div>
    </>
  )
}

