'use client'

import { px } from '@/utils/pxToRem'

export default function Statistics() {
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
    >
      <div 
        className="font-light cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize:px(29), // 29px
          height: px(35)
        }}
      >
        <span>357,211</span>
        <span style={{ marginLeft: px(8) }}>PROJECTS</span>
      </div>
      <div 
        className="font-light cursor-pointer" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize:px(29), // 29px
          height: px(35)
        }}
      >
        <span>172,275,455</span>
        <span style={{ marginLeft: px(8) }}>USERS</span>
      </div>
      <div 
        className="font-light cursor-pointer whitespace-nowrap" 
        style={{ 
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: '1.8125rem', // 29px
          height: px(35)
        }}
      >

     <span>$182,588,717,071 </span>
     <span style={{ marginLeft: px(8) }}>Market Value</span>
        
      </div>
    </div>
  )
}

