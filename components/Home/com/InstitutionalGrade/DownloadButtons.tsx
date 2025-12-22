'use client'

import { DownloadIconIPhone, DownloadIconAndroid } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'
import { useTexts } from './useTexts'

export default function DownloadButtons() {
  const texts = useTexts();

  return (
    <div className="flex flex-col sm:flex-row " style={{ gap: '0.4375rem', marginTop: px(136) }} suppressHydrationWarning> {/* gap: 7px, mb: 1px, bottom: 47px */}
      <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white hover:bg-primary-light transition-colors cursor-pointer" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50), borderRadius: px(4) }}> {/* px: 19px, height: 50px, borderRadius: 4px */}
        <DownloadIconIPhone />
        <span
          style={{
            fontFamily: "ITC Avant Garde Gothic Pro",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: px(16),
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
          suppressHydrationWarning
        >
          {texts.downloadButtons.iphone}
        </span>
      </button>
      <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white hover:bg-primary-light transition-colors cursor-pointer" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50), borderRadius: px(4) }}> {/* px: 19px, height: 50px, borderRadius: 4px */}
        <DownloadIconAndroid />
        <span
          style={{
            fontFamily: "ITC Avant Garde Gothic Pro",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: px(16),
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
          suppressHydrationWarning
        >
          {texts.downloadButtons.android}
        </span>
      </button>
    </div>
  )
}

