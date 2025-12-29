'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'

interface StepSixDropdownProps {
  placeholder: string
  options?: string[]
  value?: string
  onChange?: (value: string) => void
  isCustom?: boolean
  customText?: string
  onCustomTextChange?: (value: string) => void
}

export default function StepSixDropdown({
  placeholder,
  options = [],
  value,
  onChange,
  isCustom,
  customText,
  onCustomTextChange,
}: StepSixDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [dropdownWidth, setDropdownWidth] = useState<number>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const maskId = useRef(`step-six-dropdown-${Math.random().toString(36).substring(7)}`).current

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  useEffect(() => {
    const updateDimensions = () => {
      if (triggerRef.current) {
        setDropdownWidth(triggerRef.current.offsetWidth)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className="relative flex-1" ref={dropdownRef}>
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-center"
        style={{
          width: '100%',
          height: px(44),
          paddingLeft: px(12),
          // 让箭头距离文字约 10px，不再贴到最右侧
          paddingRight: px(12),
          columnGap: px(10),
          // 去掉边框，让下拉看起来"无边框"
          border: 'none',
          borderRadius: 0,
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          backgroundColor: 'transparent',
        }}
      >
        {isCustom ? (
          <input
            type="text"
            value={customText || ''}
            onChange={(e) => onCustomTextChange?.(e.target.value)}
            placeholder={placeholder}
            onClick={(e) => e.stopPropagation()} // 点击输入不展开下拉
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: '#000000',
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          />
        ) : (
          <span
            style={{
              color: selectedValue ? '#000000' : '#252525',
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            {selectedValue || placeholder}
          </span>
        )}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <mask id={maskId} fill="white">
            <path d="M16.2 5.39844L9.00008 12.5984L1.80005 5.39844" />
          </mask>
          <path
            d="M9.00008 12.5984L8.29297 13.3055L9.00008 14.0127L9.70718 13.3055L9.00008 12.5984ZM16.2 5.39844L15.4929 4.69133L8.29297 11.8913L9.00008 12.5984L9.70718 13.3055L16.9072 6.10554L16.2 5.39844ZM9.00008 12.5984L9.70718 11.8913L2.50715 4.69133L1.80005 5.39844L1.09294 6.10555L8.29297 13.3055L9.00008 12.5984Z"
            fill="black"
            mask={`url(#${maskId})`}
          />
        </svg>
      </div>

      {isOpen && options.length > 0 && (
        <div
          className="absolute z-50"
          style={{
            width: dropdownWidth || '100%',
            marginTop: px(4),
            backgroundColor: '#FFFFFF',
            border: `1px solid #E4E7ED`,
            borderRadius: px(4),
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            left: 0,
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
              style={{
                padding: `${px(10)} ${px(12)}`,
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(14),
                backgroundColor: hoveredIndex === index ? '#000000' : '#FFFFFF',
                color: hoveredIndex === index ? '#FFFFFF' : '#000000',
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


