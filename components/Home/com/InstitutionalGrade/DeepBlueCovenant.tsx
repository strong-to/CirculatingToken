'use client'

import { px } from '@/utils/pxToRem'
import { useTexts } from './useTexts'

export default function DeepBlueCovenant() {
  const texts = useTexts();
  
  return (
    <div className="flex flex-col items-start" style={{ marginTop: px(69) }} suppressHydrationWarning>
      {/* 可点击图片 - 悬浮时高度变为48px */}
      <button className="inline-block  cursor-pointer group  z-10" > {/* 43px */}
        <div style={{
          fontFamily: '"IM FELL French Canon SC", serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: px(24),
          lineHeight: '100%',
          letterSpacing: '0%'
        }} suppressHydrationWarning>{texts.deepBlueCovenant.line1}</div>
        <div style={{
          fontFamily: '"IM FELL French Canon SC", serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: px(24),
          lineHeight: '100%',
          letterSpacing: '0%'
        }} suppressHydrationWarning>{texts.deepBlueCovenant.line2}</div>
      </button>
    </div>
  )
}

