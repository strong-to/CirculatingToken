'use client'

import { px } from '@/utils/pxToRem'

export default function AllocationAndGovernance() {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-between" style={{ marginBottom: px(30), width: px(570) }}>
        <div
          className="text-[#000000]"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(40),
            lineHeight: px(48),
            verticalAlign: 'middle',
            height: px(34),
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Allocation and Governance
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>
      
      <div className="flex items-center justify-center" style={{ marginTop: px(100) }}>
        <div style={{ color: '#888888', fontSize: px(16) }}>Coming Soon</div>
      </div>
    </div>
  )
}

