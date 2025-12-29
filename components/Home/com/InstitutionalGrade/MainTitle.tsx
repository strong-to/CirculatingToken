'use client'

import { px } from '@/utils/pxToRem'
import { texts } from './resources'

export default function MainTitle() {
  return (
    <div 
      className="mt-[ leading-[100%]" 
      style={{ 
        maxWidth: '75.5rem', // 1208px
        marginTop: px(80),
        width: '100%'
      }}
    >
      <div 
        className="font-light leading-[100%] text-black break-words cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '5.25rem', // 84px = 5.25rem
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        }}
      >
        {texts.mainTitle.line1}
      </div>
      <div 
        className="font-light leading-[100%] text-black break-words cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '5.25rem', // 84px = 5.25rem
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        }}
      >
        {texts.mainTitle.line2}
      </div>
    </div>
  )
}

