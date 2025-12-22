'use client'

import { px } from '@/utils/pxToRem'
import { useTexts } from './useTexts'

export default function Statistics() {
  const texts = useTexts();
  
  return (
    <div 
      className="leading-[100%] text-black" 
      style={{ 
        marginTop: px(50), // 38px
        width: '26.3125rem', // 421px
        height: '7.25rem', // 116px
        fontSize: '1.8125rem', // 29px
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
      suppressHydrationWarning
    >
      <div 
        className="font-light cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize:px(29), // 29px
          height: px(35)
        }}
        suppressHydrationWarning
      >
        <span>{texts.statistics.projects.value}</span>
        <span style={{ marginLeft: px(12) }}>{texts.statistics.projects.label}</span>
      </div>
      <div 
        className="font-light cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize:px(29), // 29px
          height: px(35)
        }}
        suppressHydrationWarning
      >
        <span>{texts.statistics.users.value}</span>
        <span style={{ marginLeft: px(12) }}>{texts.statistics.users.label}</span>
      </div>
      <div 
        className="font-light cursor-pointer whitespace-nowrap" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '1.8125rem', // 29px
          height: px(35)
        }}
        suppressHydrationWarning
      >
        <span>{texts.statistics.marketValue.value} </span>
        <span style={{ marginLeft: px(12) }}>{texts.statistics.marketValue.label}</span>
      </div>
    </div>
  )
}

