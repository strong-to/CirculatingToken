'use client'

import { ReactNode, useState } from 'react'
import { px } from '@/utils/pxToRem'

interface StepTitleBarProps {
  title: ReactNode
  /** 底部彩色条颜色，默认 StepOne 的蓝色 */
  barColor?: string
  /** 标题容器宽度（px 数值），默认 815 */
  width?: number
  marginTop?: number
  marginBottom?: number
  /** 是否显示底部彩色条，默认 true */
  showBar?: boolean
  /** 标题字体大小（px 数值），默认 40 */
  titleFontSize?: number
  /** 是否左对齐，默认 false（居中） */
  alignLeft?: boolean
  /** 左对齐时的左边距（px 数值），默认 0 */
  leftMargin?: number
}

export function StepTitleBar({
  title,
  barColor = 'rgba(8, 63, 216, 0.65)',
  width = 815,
  marginTop = 5,
  marginBottom = 80,
  showBar = true,
  titleFontSize = 40,
  alignLeft = false,
  leftMargin = 0,
}: StepTitleBarProps) {
  return (
    <div
      className="flex flex-col"
      style={{
        marginTop: px(marginTop),
        marginBottom: px(marginBottom),
        width: alignLeft ? 'auto' : px(width),
        position: 'relative',
        alignItems: alignLeft ? 'flex-start' : 'center',
        paddingLeft: alignLeft ? px(leftMargin) : 0,
      }}
    >
      <div
        className="text-[#000000]"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(titleFontSize),
          lineHeight: px(titleFontSize * 1.2),
          verticalAlign: 'middle',
          height: px(34),
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {title}
      </div>
      {showBar && (
        <div
          style={{
            width: alignLeft ? 'auto' : '100%',
            height: px(18),
            backgroundColor: barColor,
            marginTop: px(-15),
            position: 'relative',
            zIndex: 1,
          }}
        />
      )}
    </div>
  )
}

interface StepNextButtonProps {
  onClick?: () => void
  label?: ReactNode
  /** 按钮外层容器的 marginTop */
  marginTop?: number
}

export function StepNextButton({ onClick, label = 'Next', marginTop = 120 }: StepNextButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center" style={{ marginTop: px(marginTop) }}>
      <button
        className="cursor-pointer"
        onClick={onClick}
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(14),
          lineHeight: '100%',
          letterSpacing: '0%',
          width: px(230),
          height: px(40),
          backgroundColor: isHovered ? '#000000' : '#FFFFFF',
          borderRadius: px(4),
          color: isHovered ? '#FFFFFF' : '#000000',
          border: `${px(1)} solid #000000`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span suppressHydrationWarning>{label}</span>
      </button>
    </div>
  )
}


