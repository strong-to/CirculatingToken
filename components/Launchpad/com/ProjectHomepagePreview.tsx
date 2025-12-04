'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'

interface ProjectHomepagePreviewProps {
  onEnter?: () => void
}

export default function ProjectHomepagePreview({ onEnter }: ProjectHomepagePreviewProps = {} as ProjectHomepagePreviewProps) {
  const previewImages = [
    'img_13.png',
    'img_14.png',
    'img_15.png',
    'img_16.png',
    'img_17.png',
  ]

  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-between" style={{ marginBottom: px(30), width: px(553) }}>
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
          Project Homepage Preview
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>
      
      {/* 图片画廊 */}
      <div 
        style={{ 
          marginTop: px(40), 
          width: '100%', 
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
        className="scrollbar-hide"
      >
        <div
          style={{
            display: 'flex',
            width: px(1154), // 计算：第5张从954px开始，显示200px（一半），所以总宽度是954+200=1154px
            position: 'relative',
            height: px(400),
          }}
        >
          {previewImages.map((imageName, index) => {
            // 计算每张图片的 marginLeft
            let marginLeftValue: number | string = 0
            if (index === 1) {
              marginLeftValue = px(-106) // 第1和第2重叠106px
            } else if (index === 2) {
              marginLeftValue = px(-150) // 第2和第3重叠150px
            } else if (index === 3) {
              marginLeftValue = px(-180) // 第3和第4重叠180px
            } else if (index === 4) {
              marginLeftValue = px(-210) // 第4和第5重叠210px
            }
            
            return (
              <div
                key={index}
                style={{
                  width: px(400),
                  height: px(400),
                  marginLeft: marginLeftValue,
                  borderRadius: px(4),
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: previewImages.length - index, // 后面的图片在上层
                  flexShrink: 0,
                }}
              >
                <Image
                  src={`/images/Launchpad/ProjectHomepagPreview/${imageName}`}
                  alt={`Preview ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Enter 按钮 */}
      <div className="flex items-center justify-center" style={{ marginTop: px(40) }}>
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
          EConfirm Publication
        </button>
      </div>
    </div>
  )
}

