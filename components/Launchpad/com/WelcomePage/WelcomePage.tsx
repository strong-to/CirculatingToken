'use client'

import { px } from '@/utils/pxToRem'
import { useTexts } from './useTexts'

interface WelcomePageProps {
  onStart: () => void
}

export default function WelcomePage({ onStart }: WelcomePageProps) {
  const texts = useTexts()

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
        <div suppressHydrationWarning className='whitespace-nowrap'>{texts.welcomeMessage.line1}</div>
        <div suppressHydrationWarning className='whitespace-nowrap'>{texts.welcomeMessage.line2}</div>
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
        <div suppressHydrationWarning className='whitespace-nowrap'>{texts.description.line1}</div>
        <div suppressHydrationWarning className='whitespace-nowrap'>{texts.description.line2}</div>
      </div>

      {/* 两个 Start 按钮 */}
      <div className="flex items-center gap-4">
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
            e.currentTarget.style.backgroundColor = '#000000';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#000000';
          }}
        >
          <span suppressHydrationWarning>{texts.buttonStart}</span>
        </button>
      </div>
    </div>
  )
}

