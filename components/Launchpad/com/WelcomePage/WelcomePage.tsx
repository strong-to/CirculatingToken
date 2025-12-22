'use client'

import { useEffect, useState } from 'react'
import { px } from '@/utils/pxToRem'
import { useTexts } from './useTexts'

interface WelcomePageProps {
  onStart: () => void
}

export default function WelcomePage({ onStart }: WelcomePageProps) {
  const texts = useTexts()

  // 控制 4 行文案和按钮依次出现
  const [showLine1, setShowLine1] = useState(false)
  const [showLine2, setShowLine2] = useState(false)
  const [showLine3, setShowLine3] = useState(false)
  const [showLine4, setShowLine4] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const base = 900 // 节奏间隔（减少初始延迟，让第一行更快出现）

    const t1 = setTimeout(() => setShowLine1(true), base * 1) // 第一行
    const t2 = setTimeout(() => setShowLine2(true), base * 2) // 第二行
    const t3 = setTimeout(() => setShowLine3(true), base * 3) // 第三行
    const t4 = setTimeout(() => setShowLine4(true), base * 4) // 第四行
    const t5 = setTimeout(() => setShowButton(true), base * 5) // 按钮

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [])

  const lineStyleBase = {
    transition:
      'opacity 1200ms cubic-bezier(0.19, 1, 0.22, 1), transform 1200ms cubic-bezier(0.19, 1, 0.22, 1), color 1400ms cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'opacity, transform, color',
  } as const

  const getLineStyle = (visible: boolean) => ({
    ...lineStyleBase,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    // 每一行从白色过渡到黑色
    color: visible ? '#000000' : '#FFFFFF',
  })

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: 'calc(100vh - 4.5rem)',
        width: '100%',
      }}
    >
      {/* 欢迎信息 */}
      <div
        className="text-black text-center"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(40),
          lineHeight: '150%',
          letterSpacing: '0%',
          marginBottom: px(24),
          paddingLeft: px(30),
          paddingRight: px(30),
        }}
        suppressHydrationWarning
      >
        <div
          suppressHydrationWarning
          className="whitespace-nowrap"
          style={getLineStyle(showLine1)}
        >
          {texts.welcomeMessage.line1}
        </div>
        <div
          suppressHydrationWarning
          className="whitespace-nowrap"
          style={getLineStyle(showLine2)}
        >
          {texts.welcomeMessage.line2}
        </div>
      </div>

      {/* 描述信息 */}
      <div
        className="text-black text-center"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(40),
          lineHeight: '150%',
          letterSpacing: '0%',
          marginBottom: px(80),
          paddingLeft: px(30),
          paddingRight: px(30),
          color: '#000000',
          marginTop: px(50),
        }}
        suppressHydrationWarning
      >
        <div
          suppressHydrationWarning
          className="whitespace-nowrap"
          style={getLineStyle(showLine3)}
        >
          {texts.description.line1}
        </div>
        <div
          suppressHydrationWarning
          className="whitespace-nowrap"
          style={getLineStyle(showLine4)}
        >
          {texts.description.line2}
        </div>
      </div>

      {/* Start 按钮，最后出现并带有淡入上移效果 */}
      <div className="flex items-center gap-4" style={getLineStyle(showButton)}>
        <button
          onClick={onStart}
          className="flex items-center justify-center transition-all duration-200"
          style={{
            width: px(230),
            height: px(40),
            border: '1px solid #000000',
            borderRadius: px(4),
            backgroundColor: 'transparent',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(15),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#FFFFFF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#000000'
          }}
        >
          <span suppressHydrationWarning>{texts.buttonStart}</span>
        </button>
      </div>
    </div>
  )
}

