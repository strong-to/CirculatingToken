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
  width = 6.25, // 默认 100px = 6.25rem
  height = 6.25, // 默认 100px = 6.25rem
  bgColor = 'bg-background-secondary',
  className = '',
}: DraggableBoxProps) {
  // 将 rem 转换为像素（基于当前根字体大小）
  const getRemInPx = (rem: number) => {
    if (typeof window === 'undefined') return rem * 16
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return rem * rootFontSize
  }

  const widthPx = getRemInPx(width)
  const heightPx = getRemInPx(height)

  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isFollowing, setIsFollowing] = useState(false)
  const initialPositionRef = useRef({ x: initialX, y: initialY })

  useEffect(() => {
    initialPositionRef.current = { x: initialX, y: initialY }
    if (!isFollowing) {
      setPosition({ x: initialX, y: initialY })
    }
  }, [initialX, initialY, isFollowing])

  useEffect(() => {
    if (!isFollowing) return

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - widthPx / 2,
        y: event.clientY - heightPx / 2,
      })
    }

    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        setIsFollowing(false)
        setPosition(initialPositionRef.current)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isFollowing, widthPx, heightPx])

  const startFollowing = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsFollowing(true)
    setPosition({
      x: event.clientX - widthPx / 2,
      y: event.clientY - heightPx / 2,
    })
  }

  const resetPosition = () => {
    setIsFollowing(false)
    setPosition(initialPositionRef.current)
  }

  return (
    <div
      className={`${bgColor} ${className}`}
      style={{
        position: isFollowing ? 'fixed' : 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}rem`,
        height: `${height}rem`,
        userSelect: 'none',
        zIndex: isFollowing ? 9999 : 10,
        pointerEvents: isFollowing ? 'none' : 'auto',
      }}
      onMouseEnter={startFollowing}
      onMouseLeave={(event) => {
        if (isFollowing && !event.relatedTarget) {
          resetPosition()
        }
      }}
      onMouseUp={resetPosition}
      onBlur={resetPosition}
    />
  )
}

