'use client'

import { px } from "@/utils/pxToRem"

export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative"> {/* 346px = 21.625rem */}
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
        Whether you are already using THE4 apps and earning from them, or you’ve just arrived and are still exploring what this AI ecosystem can do, you can invite friends to join with your referral link. Once your invitees start using THE4 and connect with specific AI projects (Contracts), they will receive rights tokens for those projects as well as tokens from the THE4 Community (Covenant). As the referrer, you’ll also receive a share of both the Contract tokens and Covenant tokens.
      </div>
    </div>
  )
}

