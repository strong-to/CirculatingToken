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
          fontSize: px(28), // 38px = 2.375rem (PostCSS会自动转换为rem)
          lineHeight: px(60), // 60px (PostCSS会自动转换为rem)
          letterSpacing: '0%'
        }}
      >
        Almost everyone has had a breakthrough idea at some point in life, but most ambitions never get a real chance to launch. THE4 changes that. Here, you can turn your concept into an on-chain AI project by submitting a formal Contract proposal to the Launchpad. Once your project is approved and goes live, the Contract will mint a fixed share — up to 10% — of the project’s rights tokens to you as the initiator, along with a corresponding allocation of THE4 Community (Covenant) tokens.
       </div>
    </div>
  )
}

