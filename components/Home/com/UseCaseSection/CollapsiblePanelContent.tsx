'use client'

import { LearnMoreArrowIcon } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'

export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative" > {/* 346px = 21.625rem */}
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
        Within the THE4 project hub, you&apos;ll find AI applications crafted by creative teams from all over the world. Just by using these apps you can enjoy state-of-the-art AI capabilities, and whenever you decide to support(including use) a project with tokens, you instantly move from being &quot;just a user&quot; to becoming an investor and a co-owner of the community&apos;s value. Over time, these rights tokens may also unlock upside you didn&apos;t expect.
      </div>
    </div>
  )
}

