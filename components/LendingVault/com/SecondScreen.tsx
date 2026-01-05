'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { px } from "@/utils/pxToRem"
import { LearnMoreArrowIcon } from '@/components/icons/Icons'

interface SecondScreenProps {
  projectIntroduction?: {
    ratingData?: string[];
    content?: string;
    arrowContent?: string;
    buttonList?: Array<{
      id: string;
      name: string;
      url: string;
    }>;
  };
}

export default function SecondScreen({ projectIntroduction }: SecondScreenProps) {
  // 从 projectIntroduction 对象中获取 ratingData，如果没有则使用空数组
  const texts = projectIntroduction?.ratingData || []
  const router = useRouter()

  const containerRef = useRef<HTMLDivElement>(null)
  const textItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [totalWidth, setTotalWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const gapValue = 120 // 固定间距值（px）
  const gap = px(gapValue) // CSS 值

  // 复制多组文案以实现无缝循环
  const extendedTexts = [...texts, ...texts, ...texts]
  const animationDuration = 20 // 动画持续时间（秒）

  // 计算一组文字的总宽度（包括文字宽度和间距）
  useEffect(() => {
    const calculateTotalWidth = () => {
      if (textItemsRef.current.length === 0 || texts.length === 0) return
      
      // 只计算第一组文字（前 texts.length 个）
      let width = 0
      for (let i = 0; i < texts.length; i++) {
        const element = textItemsRef.current[i]
        if (element) {
          width += element.offsetWidth
          // 除了最后一个，每个文字后面都有间距
          if (i < texts.length - 1) {
            width += gapValue
          }
        }
      }
      setTotalWidth(width)
    }

    // 延迟计算，确保DOM已渲染
    const timer = setTimeout(calculateTotalWidth, 100)
    window.addEventListener('resize', calculateTotalWidth)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateTotalWidth)
    }
  }, [texts.length, gapValue])

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
          marginBottom: px(120),
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
              gap: gap,
            }}
          >
            {extendedTexts.map((text, index) => (
              <div
                key={`${text}-${index}`}
                ref={(el) => {
                  // 只保存第一组文字的ref用于计算宽度
                  if (index < texts.length) {
                    textItemsRef.current[index] = el
                  }
                }}
                className="flex items-center justify-center flex-shrink-0 whitespace-nowrap"
                style={{
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
      <div style={{   backgroundColor: '#ffffff',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)', paddingBottom: px(50),
          marginLeft: px(80),
          marginRight: px(80),}}>

      
      <div
        style={{
          
          marginTop: px(50),
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          paddingRight: px(20),
        }}
      >
        {/* 外层容器负责圆角和裁剪，内层使用公共滚动条样式 */}
        <div
          className="scroll-container"
          style={{
            flex: 1,
          }}
        >
          <div
            className="scroll-content custom-scrollbar"
            style={{
              paddingLeft: px(50),
              paddingRight: px(50),
              maxHeight: px(396),
              position: 'relative',
              // maskImage: `linear-gradient(to bottom, transparent 0px, black ${px(50)}, black calc(100% - ${px(50)}), transparent 100%)`,
              // WebkitMaskImage: `linear-gradient(to bottom, transparent 0px, black ${px(50)}, black calc(100% - ${px(50)}), transparent 100%)`,
              // paddingTop: px(50),
              // paddingBottom: px(50),
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
              {projectIntroduction?.content}
            </div>
            <div className='flex justify-end w-full' style={{ marginTop: px(20) }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  router.push('/Favorites')
                }}
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
                <span>{projectIntroduction?.arrowContent}</span>
                <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
              </a>
            </div>
          </div>
        </div>
        {/* <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginTop: px(50),
          flexShrink: 0,
          paddingBottom: px(128),
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
            <span>{projectIntroduction?.arrowContent}</span>
            <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
          </a>
        </div> */}
      </div>
      </div>
      </>
    // </div>
  )
}

