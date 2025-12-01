'use client'

import { px } from '@/utils/pxToRem'

export default function Statistics() {
  return (
    <div 
      className="leading-[100%] text-black" 
      style={{ 
        marginTop: px(65), // 38px
        width: '26.3125rem', // 421px
        height: '7.25rem', // 116px
        fontSize: '1.8125rem', // 29px
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
      <div 
        className="font-light" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '1.8125rem', // 29px
          height: '2.155rem' // 34.48px
        }}
      >
        357,211PROJECTS
      </div>
      <div 
        className="font-light" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '1.8125rem', // 29px
          height: '2.155rem' // 34.48px
        }}
      >
        172,275,455USERS
      </div>
      <div 
        className="font-light" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '1.8125rem', // 29px
          height: '2.155rem' // 34.48px
        }}
      >
        $182,588,717,071Market Value
      </div>
    </div>
  )
}

