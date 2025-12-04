'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'

// 自定义下拉框组件
interface CustomSelectProps {
  placeholder: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

function CustomSelect({ placeholder, options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const selectRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`path-1-inside-1_${placeholder}_${Math.random().toString(36).substring(7)}`).current

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (option: string) => {
    setSelectedValue(option)
    setIsOpen(false)
    onChange?.(option)
  }

  return (
    <div className="relative" ref={selectRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between"
        style={{
          width: px(288),
          height: px(44),
          paddingLeft: px(13),
          paddingRight: px(13),
          border: `0.5px solid #000000`,
          borderRadius: px(4),
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          backgroundColor: '#FFFFFF',
        }}
      >
        <span style={{ color: selectedValue ? '#000000' : '#888888' }}>
          {selectedValue || placeholder}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <mask id={maskId} fill="white">
            <path d="M16.1998 5.39844L8.99983 12.5984L1.7998 5.39844"/>
          </mask>
          <path d="M8.99983 12.5984L8.29273 13.3055L8.99983 14.0127L9.70694 13.3055L8.99983 12.5984ZM16.1998 5.39844L15.4927 4.69133L8.29272 11.8913L8.99983 12.5984L9.70694 13.3055L16.9069 6.10554L16.1998 5.39844ZM8.99983 12.5984L9.70694 11.8913L2.50691 4.69133L1.7998 5.39844L1.0927 6.10555L8.29273 13.3055L8.99983 12.5984Z" fill="black" mask={`url(#${maskId})`}/>
        </svg>
      </div>
      
      {isOpen && (
        <div
          className="absolute z-50 dropdown-menu"
          style={{
            width: px(288),
            marginTop: px(4),
            backgroundColor: '#FFFFFF',
            border: `0.5px solid #E4E7ED`,
            borderRadius: px(4),
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer transition-colors"
              style={{
                padding: `${px(10)} ${px(13)}`,
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                color: '#000000',
                backgroundColor: selectedValue === option ? '#F5F7FA' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = selectedValue === option ? '#F5F7FA' : 'transparent'
                e.currentTarget.style.color = '#000000'
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

interface TemplateSelectionProps {
  onEnter?: () => void
}

export default function TemplateSelection({ onEnter }: TemplateSelectionProps = {} as TemplateSelectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // 12张模板图片
  const templateImages = Array.from({ length: 12 }, (_, i) => `Mask${i + 1}.png`)

  return (
    <div className="flex-1">
      <div className="flex flex-col items-center justify-between" style={{ marginBottom: px(30), width: px(391) }}>
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
          Template Selection
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>

      {/* 搜索和筛选区域 */}
      <div className="flex items-center gap-4" style={{ marginBottom: px(30) }}>
        {/* 搜索框 */}
        <div className="relative" style={{ width: px(451), height: px(44) }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: px(40),
              paddingRight: px(12),
              border: `0.5px solid #000000`,
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(14),
            }}
          />
          <div className="absolute" style={{ left: px(12), top: '50%', transform: 'translateY(-50%)' }}>
            <Image
              src="/images/title/search.png"
              alt="Search"
              width={18}
              height={18}
            />
          </div>
        </div>

        {/* 下拉框组 */}
        <CustomSelect
          placeholder="Tags"
          options={['Filter', 'Tags', 'Sort']}
        />

        <CustomSelect
          placeholder="Filter"
          options={['Filter', 'Tags', 'Sort']}
        />

        <CustomSelect
          placeholder="Sort"
          options={['Filter', 'Tags', 'Sort']}
        />
      </div>

      {/* 图片网格 */}
      <div className="grid" style={{ 
        gridTemplateColumns: `repeat(6, ${px(214)})`,
        gridTemplateRows: `repeat(2, ${px(214)})`,
        gap: px(15),
        marginBottom: px(40),
        width: px(1359), // 6列 × 214px + 5个间距 × 15px = 1284 + 75 = 1359px
      }}>
        {templateImages.map((imageName, index) => {
          const isSelected = selectedImage === index
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                
                className="cursor-pointer"
                style={{
                  width: px(214),
                  height: px(214),
                  borderRadius: px(4),
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src={`/images/Launchpad/TemplateSelection/${imageName}`}
                  alt={`Template ${index + 1}`}
                  width={214}
                  height={214}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* 选中时显示尺寸信息 */}
              {isSelected && (
                <div
                  style={{
                    marginTop: px(8),
                    padding: `${px(4)} ${px(8)}`,
                    backgroundColor: '#083FD8',
                    borderRadius: px(4),
                    color: '#FFFFFF',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontSize: px(12),
                  }}
                >
                  214 × 214
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Enter 按钮 */}
      <div className="flex items-center justify-center" style={{ width: px(1359) }}>
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
            width: px(200),
            height: px(50),
            backgroundColor: '#000000',
            borderRadius: px(4),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Enter
        </button>
      </div>
    </div>
  )
}

