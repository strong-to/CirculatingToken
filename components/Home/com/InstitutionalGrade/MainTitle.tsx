'use client'

import { px } from '@/utils/pxToRem'

export default function MainTitle() {
  return (
    <div 
      className="mt-[ leading-[100%]" 
      style={{ 
        maxWidth: '75.5rem', // 1208px
        marginTop: px(125),
        width: '100%'
      }}
    >
      <div 
        className="font-light leading-[100%] text-black break-words" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '5.25rem', // 84px = 5.25rem
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        }}
      >
        Institutional-Grade Finance,
      </div>
      <div 
        className="font-light leading-[100%] text-black break-words" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '5.25rem', // 84px = 5.25rem
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        }}
      >
        Reimagined for Everyone
      </div>
    </div>
  )
}

