'use client'

import { px } from "@/utils/pxToRem"

export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative" > {/* 346px = 21.625rem */}
      <div 
        className="text-black"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: '2.375rem', // 38px = 2.375rem (PostCSS会自动转换为rem)
          lineHeight: px(60), // 60px (PostCSS会自动转换为rem)
          letterSpacing: '0%'
        }}
      >

THE4 Community (Covenant) and every AI project (Contract) maintain a 24/7 booth on the DeepBlue Consensus Token Marketplace. Revenue from the community and each project is routed back to their respective rights tokens. With a simple trading flow, you can sell any rights token you hold and lock in profits — or, just like investors worldwide, you can buy into tokens you believe have long-term upside and share in the growth of the AI projects behind them.
         </div>
    </div>
  )
}

