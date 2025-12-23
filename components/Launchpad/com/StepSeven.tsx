'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'

interface StepSevenProps {
  onEnter?: () => void
}

export default function StepSeven({ onEnter }: StepSevenProps = {} as StepSevenProps) {
 

  return (
    <>
      <div className="flex flex-col items-center justify-between" style={{ marginTop: px(5), marginBottom: px(30), width: px(426) }}>
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
            marginTop: px(5),
          }}
        >
          Preview and Release
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>

      <div style={{fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: px(20),
        lineHeight: '100%',
        letterSpacing: '0%',
        marginBottom: px(160),
        color: '#8C8C8C',
      }}>Click the image below to preview the comprehensive information of the project in full.</div>
      
     <div>
      预览图
     </div>
      {/* Enter 按钮 */}
      <div className="flex items-center justify-center" style={{ marginTop: px(120), width: px(1154),marginLeft: px(110) }}>
        <button
          className="cursor-pointer"
          onClick={onEnter}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            width: px(230),
            height: px(50),
            backgroundColor: '#000000',
            borderRadius: px(4),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Confirm the Release
        </button>
      </div>
    </>
  )
}

