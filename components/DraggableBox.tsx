'use client'

import { useState, useRef, useEffect } from 'react'

interface DraggableBoxProps {
  initialX?: number
  initialY?: number
  width?: number
  height?: number
  bgColor?: string
  className?: string
}

export default function DraggableBox({
  initialX = 0,
  initialY = 0,
  width = 100,
  height = 100,
  bgColor = 'bg-background-secondary',
  className = '',
}: DraggableBoxProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 })
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setContainerRect(rect)
      // 初始化固定位置
      if (boxRef.current) {
        const boxRect = boxRef.current.getBoundingClientRect()
        setFixedPosition({ x: boxRect.left, y: boxRect.top })
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      // 拖动时使用固定定位，可以覆盖整个页面
      setFixedPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }

    const handleMouseUp = () => {
      if (!isDragging || !containerRef.current) return
      
      // 鼠标松开时，计算相对于容器的位置
      const container = containerRef.current.getBoundingClientRect()
      
      // 使用固定定位的位置计算相对于容器的位置
      setPosition({
        x: fixedPosition.x - container.left,
        y: fixedPosition.y - container.top,
      })
      
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset, fixedPosition])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current || !containerRef.current) return
    
    const rect = boxRef.current.getBoundingClientRect()
    
    // 计算鼠标相对于盒子的偏移
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    
    // 设置初始固定位置
    setFixedPosition({
      x: rect.left,
      y: rect.top,
    })
    
    setIsDragging(true)
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      {/* 拖动时显示的固定定位盒子 */}
      {isDragging && (
        <div
          className={`fixed cursor-move ${bgColor} ${className}`}
          style={{
            left: `${fixedPosition.x}px`,
            top: `${fixedPosition.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            userSelect: 'none',
            zIndex: 99999,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* 正常显示的盒子 */}
      <div
        ref={containerRef}
        className="absolute inset-0"
      >
        <div
          ref={boxRef}
          className={`absolute cursor-move ${bgColor} ${className} ${isDragging ? 'opacity-0' : 'opacity-100'}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            userSelect: 'none',
            zIndex: 1000,
            pointerEvents: isDragging ? 'none' : 'auto',
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </>
  )
}

