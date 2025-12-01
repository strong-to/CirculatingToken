'use client'

import { px } from '@/utils/pxToRem'

export default function DeepBlueCovenant() {
  return (
    <div className="flex flex-col items-start">
      {/* 可点击图片 - 悬浮时高度变为48px */}
      <button className="inline-block  cursor-pointer group  z-10" style={{ marginTop: px(86) }}> {/* 43px */}
        <div style={{
          fontFamily: '"IM FELL French Canon SC", serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: px(24),
          lineHeight: '100%',
          letterSpacing: '0%'
        }}>DEEP BLUE</div>
        <div style={{
          fontFamily: '"IM FELL French Canon SC", serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: px(24),
          lineHeight: '100%',
          letterSpacing: '0%'
        }}>COVENANT</div>
      </button>
    </div>
  )
}

