'use client'

import { useState, useRef, useEffect } from 'react'
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

  // 复制logo数组以实现无缝循环
  const extendedLogos = [...logos, ...logos, ...logos]
  
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const logoWidth = 200 // 每个logo的宽度（px）

  // 计算每个logo的实际占用宽度（包括间距）
  const getLogoSpacing = () => {
    if (!containerRef.current) return logoWidth
    const containerWidth = containerRef.current.offsetWidth
    const padding = 300 * 2 // 左右padding
    const availableWidth = containerWidth - padding
    return availableWidth / 5 // 均分剩余空间
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const diff = e.clientX - startX
      let newTranslate = currentTranslate + diff
      
      const spacing = getLogoSpacing()
      const logoCount = logos.length
      const totalWidth = spacing * logoCount
      
      // 链条循环效果：当滚动超出边界时，无缝重置位置
      if (newTranslate > -totalWidth) {
        // 向右滚动超出左边界，重置到右侧
        newTranslate = newTranslate - totalWidth
        setCurrentTranslate(newTranslate)
        setStartX(e.clientX)
      } else if (newTranslate < -totalWidth * 2) {
        // 向左滚动超出右边界，重置到左侧
        newTranslate = newTranslate + totalWidth
        setCurrentTranslate(newTranslate)
        setStartX(e.clientX)
      }
      
      setTranslateX(newTranslate)
    }

    const handleMouseUp = () => {
      if (!isDragging) return
      setIsDragging(false)
      // 松开时保持当前位置，不做任何对齐或回弹
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, startX, currentTranslate, logos.length])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setCurrentTranslate(translateX)
  }

  // 初始化位置到中间区域（等待容器渲染完成）
  useEffect(() => {
    if (!containerRef.current) return
    
    const spacing = getLogoSpacing()
    const logoCount = logos.length
    const initialTranslate = -logoCount * spacing
    setTranslateX(initialTranslate)
    setCurrentTranslate(initialTranslate)
  }, [logos.length])

  const spacing = getLogoSpacing()

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden relative"
      style={{ height: px(150) }}
      onMouseDown={handleMouseDown}
    >
      {/* 内容区域，左右各留300px空白 */}
      <div
        className="h-full absolute overflow-hidden"
        style={{ 
          left: px(320),
          right: px(320),
          maskImage: `linear-gradient(to right, transparent 0px, black ${spacing}px, black calc(100% - ${spacing}px), transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${spacing}px, black calc(100% - ${spacing}px), transparent 100%)`,
        }}
      >
        <div
          className="flex items-center h-full"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
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

