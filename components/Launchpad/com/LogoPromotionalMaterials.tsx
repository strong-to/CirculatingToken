'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'

interface LogoPromotionalMaterialsProps {
  buttonText?: string
  hasAsterisk?: boolean
  allowEdit?: boolean // 是否允许删除和上传
  images?: (string | null)[] // 外部传入的图片数组
  onImagesChange?: (images: (string | null)[]) => void // 图片变化回调
  onButtonClick?: () => void // 按钮点击事件
}

export default function LogoPromotionalMaterials({
  buttonText = 'Renovate',
  hasAsterisk = false,
  allowEdit = true, // 默认允许编辑
  images: externalImages,
  onImagesChange,
  onButtonClick,
}: LogoPromotionalMaterialsProps) {
  // 默认图片列表
  const defaultImages = [
    '/launchpad/LogoPromotionalMaterials/img/logo.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask1.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask2.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask3.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask4.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask5.png',
  ]
  
  // 如果外部传入了图片数组，使用外部的；否则使用内部状态
  const [internalImages, setInternalImages] = useState<(string | null)[]>(defaultImages)
  // 统一转换为 (string | null)[] 类型
  const images: (string | null)[] = externalImages !== undefined ? externalImages : internalImages
  
  // 更新图片的函数
  const updateImages = (newImages: (string | null)[]) => {
    if (externalImages !== undefined && onImagesChange) {
      // 如果使用外部图片，通过回调通知父组件
      onImagesChange(newImages)
    } else {
      // 否则更新内部状态
      setInternalImages(newImages)
    }
  }
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])

  // 处理图片删除
  const handleDelete = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const newImages = [...images]
    newImages[index] = null
    updateImages(newImages)
  }

  // 处理文件选择
  const handleFileSelect = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        const newImages = [...images]
        newImages[index] = result
        updateImages(newImages)
      }
      reader.readAsDataURL(file)
    }
  }

  // 触发文件选择
  const handleUploadClick = (index: number) => {
    fileInputRefs.current[index]?.click()
  }

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
          {images.map((imageSrc, index) => {
            const isFirst = index === 0
            const width = isFirst ? px(130) : px(198)
            const height = px(130)
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="relative rounded overflow-hidden"
                style={{
                  width,
                  height,
                  border: `0.5px solid #000000`,
                  borderRadius: px(4),
                  backgroundColor: imageSrc ? '#f5f5f5' : 'transparent',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {imageSrc ? (
                  <>
                    {isFirst ? (
                      <div className="flex items-center justify-center w-full h-full">
                        <div style={{ width: px(50), height: px(50) }}>
                          <Image
                            src={imageSrc}
                            alt={`Logo ${index + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={`Logo ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {/* 删除按钮 - 只在悬停时显示，且允许编辑时 */}
                    {isHovered && allowEdit && (
                      <button
                        onClick={(e) => handleDelete(index, e)}
                        className="absolute top-0 right-0 z-10 cursor-pointer"
                        style={{
                          marginTop: px(4),
                          marginRight: px(4),
                        }}
                      >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle opacity="0.5" cx="13" cy="13" r="13" fill="black"/>
                          <path d="M17.7009 7.50684C17.9219 7.32084 18.2527 7.332 18.4607 7.54004C18.6799 7.75962 18.6799 8.11537 18.4607 8.33496L13.5144 13.2812L18.4607 18.2275C18.6799 18.4471 18.6799 18.8029 18.4607 19.0225C18.2527 19.2305 17.9219 19.2417 17.7009 19.0557L17.6648 19.0225L12.7185 14.0762L7.77319 19.0225L7.73706 19.0557C7.51606 19.2419 7.1854 19.2306 6.97729 19.0225C6.75783 18.8028 6.75782 18.4472 6.97729 18.2275L11.9236 13.2812L6.97729 8.33496C6.75783 8.11533 6.75782 7.75967 6.97729 7.54004C7.1854 7.33193 7.51606 7.32064 7.73706 7.50684L7.77319 7.54004L12.7185 12.4854L17.6648 7.54004L17.7009 7.50684Z" fill="white"/>
                        </svg>
                      </button>
                    )}
                  </>
                ) : (
                  // 上传区域 - 只在允许编辑时显示
                  allowEdit ? (
                    <div
                      onClick={() => handleUploadClick(index)}
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                      style={{
                        border: `0.5px solid #CCCCCC`,
                        borderRadius: px(4),
                        backgroundColor: 'transparent',
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: px(8) }}>
                        <path d="M12 5V19M5 12H19" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span
                        style={{
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontSize: px(16),
                          color: '#083FD8',
                        }}
                      >
                        uploads
                      </span>
                      <input
                        ref={(el) => { fileInputRefs.current[index] = el }}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileSelect(index, e)}
                        style={{ display: 'none' }}
                      />
                    </div>
                  ) : null
                )}
              </div>
            )
          })}
        </div>

        {/* 按钮 */}
        <button
          onClick={onButtonClick}
          className="cursor-pointer hover:bg-[#000000] hover:!text-white active:bg-[#000000] active:!text-white transition-colors"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            height: px(40),
            letterSpacing: '0%',
            width: px(128),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            color: '#000000',
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

