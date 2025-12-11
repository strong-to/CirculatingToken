'use client'

import { useRef, useState, useEffect } from 'react'
import { px } from "@/utils/pxToRem"
import { LearnMoreArrowIcon } from '@/components/icons/Icons'

export default function SecondScreen() {
  const texts = [
    'Workflow',
    'Video+Audio',
    'Image',
    'Text',
    'Media',
    'Entertainment',
    'Generate',
    'Edit',
    'Text',
    'Model'
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [spacing, setSpacing] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 计算每个文案的实际占用宽度（包括间距）
  useEffect(() => {
    const updateSpacing = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const padding = 80 * 2 // 左右padding
      const availableWidth = containerWidth - padding
      // 计算每个文案的宽度（均分剩余空间）
      setSpacing(availableWidth / texts.length)
    }

    updateSpacing()
    window.addEventListener('resize', updateSpacing)
    return () => window.removeEventListener('resize', updateSpacing)
  }, [texts.length])

  // 复制多组文案以实现无缝循环
  const extendedTexts = [...texts, ...texts, ...texts]
  const totalWidth = spacing * texts.length // 一组的总宽度
  const animationDuration = 20 // 动画持续时间（秒）

  // 动态生成 CSS keyframes
  useEffect(() => {
    const styleId = 'second-screen-text-animation'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }
    
    styleElement.textContent = `
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }
    `
    
    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [totalWidth])

  return (
  
    // <div className="w-full flex flex-col" style={{ minHeight:'calc(100vh - 89px)', scrollMarginTop: px(89) }}>
      <>
      <div 
        ref={containerRef}
        className="flex-shrink-0"
        style={{
          paddingTop: px(90),
          marginLeft: px(80),
          marginRight: px(80),
          marginBottom: px(50),
          overflow: 'visible',
          position: 'relative',
          height: px(20),
          zIndex: 1,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 内容区域，使用 mask 实现左右渐变效果 */}
        <div
          className="overflow-hidden"
          style={{ 
            maskImage: `linear-gradient(to right, transparent 0px, black ${px(80)}, black calc(100% - ${px(80)}), transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${px(80)}, black calc(100% - ${px(80)}), transparent 100%)`,
          }}
        >
          <div
            className="flex items-center"
            style={{
              animation: `scrollLeft ${animationDuration}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'fit-content',
              gap: px(16),
            }}
          >
            {extendedTexts.map((text, index) => (
              <div
                key={`${text}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: `${spacing}px`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(20),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#000000',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 第二个屏的内容 */}
      <div
        style={{
          marginTop: px(50),
          marginLeft: px(80),
          marginRight: px(80),
          height: px(396),
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          className="scrollbar-hide"
          style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingTop: px(40),
            paddingLeft: px(50),
            paddingRight: px(50),
          }}
        >
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(24),
              lineHeight: px(44),
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
            Whether you are already using THE4 apps and earning from them, or you&apos;ve just arrived and are still exploring what this AI ecosystem can do, you can invite friends to join with your referral link. Once your invitees start using THE4 and connect with specific AI projects (Contracts), they will receive rights tokens for those projects as well as tokens from the THE4 Community (Covenant). As the referrer, you&apos;ll also receive a share of both the Contract tokens and Covenant tokens.
           
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          flexShrink: 0,
          paddingBottom: px(40),
          paddingLeft: px(50),
          paddingRight: px(50),
          paddingTop: px(16),
        }}>
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(24),
              lineHeight: px(44),
              letterSpacing: '0%',
              color: '#000000',
              cursor: 'pointer',
            }}
          >
            <span>Learn more details</span>
            <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
          </a>
        </div>
      </div>



      <div className='flex items-center justify-center' style={{ marginTop: px(70), gap: px(16) }}>
        <button
          className="flex items-center justify-center transition-colors cursor-pointer"
          style={{
            width: px(206),
            height: px(44),
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#000000',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff'
            e.currentTarget.style.color = '#000000'
            e.currentTarget.style.borderColor = '#000000'
          }}
        >
          Favorite Project
        </button>

        <button
          className="flex items-center justify-center transition-colors cursor-pointer"
          style={{
            height: px(44),
            paddingLeft: px(24),
            paddingRight: px(24),
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#000000',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff'
            e.currentTarget.style.color = '#000000'
            e.currentTarget.style.borderColor = '#000000'
          }}
        >
          Experience the Project
        </button>
      </div>
      </>
    // </div>
  )
}

