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
        x: event.clientX - width / 2,
        y: event.clientY - height / 2,
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
  }, [isFollowing, width, height])

  const startFollowing = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsFollowing(true)
    setPosition({
      x: event.clientX - width / 2,
      y: event.clientY - height / 2,
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
        width: `${width}px`,
        height: `${height}px`,
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

