'use client'

import { useEffect, useState } from 'react'
import { px } from '@/utils/pxToRem'

interface ToastProps {
  message: string
  duration?: number
  onClose?: () => void
}

export default function Toast({ message, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 触发显示动画
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 10)

    // 自动隐藏
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setShouldRender(false)
        onClose?.()
      }, 300) // 等待淡出动画完成
    }, duration)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [duration, onClose])

  if (!shouldRender) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: px(60),
        left: '50%',
        backgroundColor: '#FFFFFF',
        border: `0.5px solid #000000`,
        borderRadius: px(4),
        padding: `${px(16)} ${px(26)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(-50%) translateY(0)' 
          : 'translateX(-50%) translateY(-10px)',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        pointerEvents: 'none',
        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
      }}
    >
      {/* 消息文本 */}
      <span
        style={{
          color: '#000000',
          fontSize: px(14),
          fontWeight: 300,
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        {message}
      </span>
    </div>
  )
}

