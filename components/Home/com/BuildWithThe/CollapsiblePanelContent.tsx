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
Just like traditional software, AI needs to be researched, deployed, and continuously iterated. But instead of leaving all of that to a single centralized company, THE4 invites builders from all backgrounds to collaborate openly. You can propose ideas, join existing teams, or contribute to live AI projects. In return, builders receive meaningful allocations of rights tokens for the AI projects (Contracts) they help grow, as well as tokens from the THE4 Community (Covenant).      </div>
    </div>
  )
}

