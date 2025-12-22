'use client'

import { px } from "@/utils/pxToRem"
import { texts } from './resources'

export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative"> {/* 346px = 21.625rem */}
      <div 
        className="text-black"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(28), // 38px = 2.375rem (PostCSS会自动转换为rem)
          lineHeight: px(60), // 60px (PostCSS会自动转换为rem)
          letterSpacing: '0%'
        }}
      >
        {texts.collapsibleContent}
       </div>
    </div>
  )
}

