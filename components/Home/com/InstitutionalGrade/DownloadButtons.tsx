'use client'

import { DownloadIconIPhone, DownloadIconAndroid } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'

export default function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row " style={{ gap: '0.4375rem', marginTop: px(199) }}> {/* gap: 7px, mb: 1px, bottom: 47px */}
      <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white hover:bg-primary-light transition-colors" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50), borderRadius: px(4) }}> {/* px: 19px, height: 50px, borderRadius: 4px */}
        <DownloadIconIPhone />
        <span className="text-body font-medium">Download for iPhone</span>
      </button>
      <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white hover:bg-primary-light transition-colors" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50), borderRadius: px(4) }}> {/* px: 19px, height: 50px, borderRadius: 4px */}
        <DownloadIconAndroid />
        <span className="text-body font-medium">Download for Android</span>
      </button>
    </div>
  )
}

