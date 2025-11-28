'use client'

import { LearnMoreArrowIcon } from '@/components/icons/Icons'

export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative" style={{ height: '21.625rem' }}> {/* 346px = 21.625rem */}
      <div 
        className="text-black"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: '2.375rem', // 38px = 2.375rem (PostCSS会自动转换为rem)
          lineHeight: '60px', // 60px (PostCSS会自动转换为rem)
          letterSpacing: '0%'
        }}
      >
        Within the THE4 project hub, you'll find AI applications crafted by creative teams from all over the world. Just by using these apps you can enjoy state-of-the-art AI capabilities, and whenever you decide to support(including use) a project with tokens, you instantly move from being "just a user" to becoming an investor and a co-owner of the community's value. Over time, these rights tokens may also unlock upside you didn't expect.
      </div>
    </div>
  )
}

