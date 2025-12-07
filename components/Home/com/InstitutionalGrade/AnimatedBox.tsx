'use client'

import { useEffect } from 'react'
import { px } from '@/utils/pxToRem'

interface AnimatedBoxProps {
  boxId: string
  initialX?: number // px，相对于左边的距离
  initialY: number // px
  initialRight?: number // px，相对于右边的距离（优先级高于 initialX）
  initialWidth: number // rem
  initialHeight: number // rem
  bgColor: string
  animationDelay: number // 动画延迟（秒）
}

// 最大、中间和最小尺寸（rem）
const MAX_SIZE = 15.4375 // 最大盒子尺寸
const MID_SIZE = 9.25 // 中间盒子尺寸
const MIN_SIZE = 5.9375 // 最小盒子尺寸

// 颜色定义
const COLOR_MAX = '#BDBDBD' // 最大尺寸时的背景色（最大盒子的颜色）
const COLOR_MIN = '#000000' // 最小尺寸时的背景色（黑色）

// 从 Tailwind 类名中提取颜色值
function getColorFromClass(bgColor: string): string {
  // 处理 bg-[#HEX] 格式
  const hexMatch = bgColor.match(/bg-\[#([0-9A-Fa-f]{6})\]/)
  if (hexMatch) {
    return `#${hexMatch[1]}`
  }
  
  // 处理 bg-primary-main
  if (bgColor === 'bg-primary-main') {
    return '#000000'
  }
  
  // 默认返回黑色
  return '#000000'
}

export default function AnimatedBox({
  boxId,
  initialX,
  initialY,
  initialRight,
  initialWidth,
  initialHeight,
  bgColor,
  animationDelay,
}: AnimatedBoxProps) {
  // 获取盒子的初始颜色
  const initialColor = getColorFromClass(bgColor)
  
  // 计算缩放比例
  const scaleToMax = MAX_SIZE / initialWidth
  const scaleToMin = MIN_SIZE / initialWidth
  
  // 判断盒子类型
  const isMaxBox = initialWidth >= MAX_SIZE - 0.01 // 第一个盒子（大盒子）
  const isMidBox = Math.abs(initialWidth - MID_SIZE) < 0.01 // 第二个盒子（中间盒子）
  const isMinBox = initialWidth <= MIN_SIZE + 0.01 // 第三个盒子（小盒子）
  
  // 动态生成 CSS keyframes
  useEffect(() => {
    const styleId = `animated-box-${boxId}`
    let styleElement = document.getElementById(styleId) as HTMLStyleElement
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }
    
    // 总周期9秒，每个盒子动画3秒，然后静止6秒
    // 动画在33.33%的时间内完成（3秒/9秒），其余时间保持初始状态
    
    if (isMaxBox) {
      // 第一个盒子（大盒子）：先变成最小再回到最大
      styleElement.textContent = `
        @keyframes pulse-${boxId} {
          0% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          16.67% {
            transform: scale(${scaleToMin});
            background-color: ${COLOR_MIN};
          }
          33.33% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          100% {
            transform: scale(1);
            background-color: ${initialColor};
          }
        }
      `
    } else if (isMidBox) {
      // 第二个盒子（中间盒子）：先变成最大再回到原来的大小
      styleElement.textContent = `
        @keyframes pulse-${boxId} {
          0% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          16.67% {
            transform: scale(${scaleToMax});
            background-color: ${COLOR_MAX};
          }
          33.33% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          100% {
            transform: scale(1);
            background-color: ${initialColor};
          }
        }
      `
    } else if (isMinBox) {
      // 第三个盒子（小盒子）：先变成最大再变成原来的大小
      styleElement.textContent = `
        @keyframes pulse-${boxId} {
          0% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          16.67% {
            transform: scale(${scaleToMax});
            background-color: ${COLOR_MAX};
          }
          33.33% {
            transform: scale(1);
            background-color: ${initialColor};
          }
          100% {
            transform: scale(1);
            background-color: ${initialColor};
          }
        }
      `
    }
    
    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [boxId, initialWidth, initialColor, scaleToMax])

  // 构建样式对象
  const style: React.CSSProperties = {
    top: `${initialY}px`, // 直接使用 px 单位
    width: `${initialWidth}rem`,
    height: `${initialHeight}rem`,
    animation: `pulse-${boxId} 9s ease-in-out infinite`,
    animationDelay: `${animationDelay}s`,
    transformOrigin: 'center center',
    backgroundColor: initialColor, // 初始背景色
  }

  // 如果提供了 initialRight，使用 right 定位，否则使用 left
  if (initialRight !== undefined) {
    style.right = `${initialRight}px`
  } else {
    style.left = `${initialX ?? 0}px`
  }

  return (
    <div
      className="absolute"
      style={style}
    />
  )
}

