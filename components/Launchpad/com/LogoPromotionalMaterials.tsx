'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'

interface LogoPromotionalMaterialsProps {
  buttonText?: string
  hasAsterisk?: boolean
}

export default function LogoPromotionalMaterials({
  buttonText = 'Renovate',
  hasAsterisk = false,
}: LogoPromotionalMaterialsProps) {

  return (
    <>
    <div style={{ marginTop: px(40) }}>
      {/* 标签 */}
      <label
        className="block"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(20),
          lineHeight: '100%',
          letterSpacing: '0%',
          height: px(24),
          display: 'flex',
          alignItems: 'center',
          gap: px(8),
          color: '#000000',
          marginBottom: px(10),
        }}
      >
        {hasAsterisk ? (
          <>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
            Recommended LOGO and Promotional Materials
          </>
        ) : (
          'Recommended LOGO and Promotional Materials'
        )}
      </label>

      {/* 图片网格和按钮行 */}
      <div className="flex items-center gap-4">
        {/* 图片网格 */}
        <div className="flex gap-2">
          <div
            className="relative rounded overflow-hidden flex items-center justify-center"
            style={{
              width: px(130),
              height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <div style={{ width: px(50), height: px(50) }}>
            <Image
              src="/images/Launchpad/logo.png"
              alt="Logo 1"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            </div>
        
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{
              width: px(198),
              height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <Image
              src="/images/Launchpad/Mask1.png"
              alt="Logo 2"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{
                width: px(198),
                height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <Image
              src="/images/Launchpad/Mask2.png"
              alt="Logo 3"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{
                width: px(198),
                height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <Image
              src="/images/Launchpad/Mask3.png"
              alt="Logo 4"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{
                width: px(198),
                height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <Image
              src="/images/Launchpad/Mask4.png"
              alt="Logo 5"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="relative rounded overflow-hidden"
            style={{
                width: px(198),
                height: px(130),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              backgroundColor: '#f5f5f5',
            }}
          >
            <Image
              src="/images/Launchpad/Mask5.png"
              alt="Logo 6"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 按钮 */}
        <button
          className="cursor-pointer hover:bg-[#083FD8] hover:!text-white active:bg-[#083FD8] active:!text-white transition-colors"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            height: px(40),
            letterSpacing: '0%',
            width: px(128),
            border: `0.5px solid #083FD8`,
            borderRadius: px(4),
            color: '#083FD8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {buttonText}
        </button>


        
      </div>
      
    </div>
    
    
   </>
  )
}

