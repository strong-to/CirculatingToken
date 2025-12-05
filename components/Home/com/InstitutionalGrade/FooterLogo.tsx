'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'

export default function FooterLogo() {
  const logos = [
    { src: '/images/InstitutionalGrade/asterisk.png', alt: 'Asterisk' },
    { src: '/images/InstitutionalGrade/books.png', alt: 'Books' },
    { src: '/images/InstitutionalGrade/opal.png', alt: 'Opal' },
    { src: '/images/InstitutionalGrade/dune.png', alt: 'Dune' },
    { src: '/images/InstitutionalGrade/oas.png', alt: 'Oas' },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [spacing, setSpacing] = useState(200)
  const [isPaused, setIsPaused] = useState(false)

  // 计算每个logo的实际占用宽度（包括间距）
  useEffect(() => {
    const updateSpacing = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const padding = 300 * 2 // 左右padding
      const availableWidth = containerWidth - 200
      setSpacing(availableWidth / 5) // 均分剩余空间
    }

    updateSpacing()
    window.addEventListener('resize', updateSpacing)
    return () => window.removeEventListener('resize', updateSpacing)
  }, [])

  // 复制多组 logos 以实现无缝循环
  const extendedLogos = [...logos, ...logos, ...logos]
  const totalWidth = spacing * logos.length // 一组的总宽度
  const animationDuration = 10 // 动画持续时间（秒），可以调整速度

  // 动态生成 CSS keyframes
  useEffect(() => {
    const styleId = 'footer-logo-animation'
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
    <div 
      ref={containerRef}
      className="w-full overflow-hidden relative"
      style={{ height: px(250) }}
    >
      {/* 内容区域，左右各留300px空白 */}
      <div
        className="h-full absolute overflow-hidden"
        style={{ 
          left: px(80),
          right: px(80),
          maskImage: `linear-gradient(to right, transparent 0px, black ${spacing}px, black calc(100% - ${spacing}px), transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${spacing}px, black calc(100% - ${spacing}px), transparent 100%)`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex items-center h-full"
          style={{
            animation: `scrollLeft ${animationDuration}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content',
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: `${spacing}px`, height: px(50) }}
            >
              <div
                className="flex items-center justify-center"
                style={{ width: px(200), height: px(50) }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={50}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

