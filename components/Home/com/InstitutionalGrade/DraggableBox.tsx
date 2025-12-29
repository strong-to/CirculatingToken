'use client'

import { useState, useRef, useEffect } from 'react'

interface DraggableBoxProps {
  boxId: string // 盒子唯一ID
  initialX?: number
  initialY?: number
  width?: number
  height?: number
  bgColor?: string
  className?: string
  resetTrigger?: number // 重置触发器，当值变化时重置
  activeBoxId?: string | null // 当前活动的盒子ID
  onResetAll?: () => void // 重置所有盒子的回调
  onActivate?: (boxId: string) => void // 激活盒子的回调
}

export default function DraggableBox({
  boxId,
  initialX = 0,
  initialY = 0,
  width = 6.25, // 默认 100px = 6.25rem
  height = 6.25, // 默认 100px = 6.25rem
  bgColor = 'bg-background-secondary',
  className = '',
  resetTrigger,
  activeBoxId,
  onResetAll,
  onActivate,
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
  const boxElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initialPositionRef.current = { x: initialX, y: initialY }
    if (!isFollowing) {
      setPosition({ x: initialX, y: initialY })
    }
  }, [initialX, initialY, isFollowing])

  // 监听重置触发器
  useEffect(() => {
    if (resetTrigger !== undefined && resetTrigger > 0) {
      setIsFollowing(false)
      setPosition(initialPositionRef.current)
    }
  }, [resetTrigger])

  // 监听活动盒子变化，如果不是活动盒子则停止跟随
  useEffect(() => {
    if (activeBoxId !== null && activeBoxId !== boxId && isFollowing) {
      setIsFollowing(false)
      setPosition(initialPositionRef.current)
    }
  }, [activeBoxId, boxId, isFollowing])

  useEffect(() => {
    if (!isFollowing) return
    // 如果当前盒子不是活动盒子，停止跟随
    if (activeBoxId !== null && activeBoxId !== boxId) {
      setIsFollowing(false)
      setPosition(initialPositionRef.current)
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      // 再次检查是否仍然是活动盒子
      if (activeBoxId !== null && activeBoxId !== boxId) {
        setIsFollowing(false)
        setPosition(initialPositionRef.current)
        return
      }
      
      // 如果鼠标按钮被按下，不更新位置（允许滚动）
      if (event.buttons !== 0) {
        return
      }
      
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

    // 监听滚动事件，滚动时重置盒子（不阻止滚动）
    const handleWheel = (event: WheelEvent) => {
      // 不阻止默认行为，允许页面滚动
      setIsFollowing(false)
      setPosition(initialPositionRef.current)
      if (activeBoxId === boxId) {
        onActivate?.('')
      }
    }

    // 监听触摸滚动事件（移动端）
    const handleTouchMove = (event: TouchEvent) => {
      // 不阻止默认行为，允许页面滚动
      setIsFollowing(false)
      setPosition(initialPositionRef.current)
      if (activeBoxId === boxId) {
        onActivate?.('')
      }
    }

    // 监听全局点击事件，检测是否点击在盒子上
    const handleGlobalClick = (event: MouseEvent) => {
      if (!boxElementRef.current || !isFollowing) return
      
      const rect = boxElementRef.current.getBoundingClientRect()
      const clickX = event.clientX
      const clickY = event.clientY
      
      // 检查点击位置是否在盒子范围内
      if (
        clickX >= rect.left &&
        clickX <= rect.right &&
        clickY >= rect.top &&
        clickY <= rect.bottom
      ) {
        // 点击在盒子上，重置所有盒子
        setIsFollowing(false)
        setPosition(initialPositionRef.current)
        if (activeBoxId === boxId) {
          onActivate?.('')
        }
        onResetAll?.()
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    // 使用 capture 阶段捕获点击事件
    document.addEventListener('click', handleGlobalClick, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('click', handleGlobalClick, true)
    }
  }, [isFollowing, widthPx, heightPx, activeBoxId, boxId, onActivate, onResetAll])

  const startFollowing = (event: React.MouseEvent<HTMLDivElement>) => {
    // 只有当没有其他盒子活动，或者当前盒子是活动盒子时，才启动跟随
    if (activeBoxId === null || activeBoxId === boxId) {
      setIsFollowing(true)
      setPosition({
        x: event.clientX - widthPx / 2,
        y: event.clientY - heightPx / 2,
      })
      onActivate?.(boxId) // 通知父组件这个盒子被激活
    }
  }

  const resetPosition = () => {
    setIsFollowing(false)
    setPosition(initialPositionRef.current)
    // 如果当前盒子是活动盒子，通知父组件清除活动状态
    if (activeBoxId === boxId) {
      onActivate?.('')
    }
  }

  return (
    <div
      ref={boxElementRef}
      className={`${bgColor} ${className}`}
      style={{
        position: isFollowing ? 'fixed' : 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}rem`,
        height: `${height}rem`,
        userSelect: 'none',
        zIndex: isFollowing ? 9999 : 10,
        pointerEvents: isFollowing ? 'none' : 'auto', // 跟随时不拦截鼠标事件，允许滚动和点击穿透
        cursor: isFollowing ? 'pointer' : 'default',
      }}
      onMouseEnter={startFollowing}
      onMouseLeave={(event) => {
        if (isFollowing && !event.relatedTarget) {
          resetPosition()
        }
      }}
      onBlur={resetPosition}
    />
  )
}

