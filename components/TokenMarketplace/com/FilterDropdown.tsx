'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'

interface Category {
  label: string
  subCategories: string[]
  description?: string // 二级筛选的解释文案
}

interface FilterDropdownProps {
  placeholder: string
  categories?: Category[]
  options?: string[] // 简单选项列表（如果没有分类）
  value?: string
  onChange?: (value: string) => void
  description?: string // 悬浮时的解释文字
}

export default function FilterDropdown({ 
  placeholder, 
  categories, 
  options,
  value, 
  onChange,
  description
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [delayedHoveredCategory, setDelayedHoveredCategory] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const firstLevelRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`dropdown-arrow-${Math.random().toString(36).substring(7)}`).current
  const [dropdownWidth, setDropdownWidth] = useState<number>(0)
  const [firstLevelHeight, setFirstLevelHeight] = useState<number>(0)

  // 获取筛选框的宽度和一级菜单的高度
  useEffect(() => {
    const updateDimensions = () => {
      if (triggerRef.current) {
        setDropdownWidth(triggerRef.current.offsetWidth)
      }
      if (firstLevelRef.current) {
        setFirstLevelHeight(firstLevelRef.current.offsetHeight)
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [isOpen, description])

  // 延迟更新 hoveredCategory，避免快速移动时二级菜单消失
  useEffect(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    
    if (hoveredCategory) {
      setDelayedHoveredCategory(hoveredCategory)
    } else {
      // 延迟清除，给用户时间移动到二级菜单
      hoverTimeoutRef.current = setTimeout(() => {
        setDelayedHoveredCategory(null)
      }, 150)
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [hoveredCategory])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setHoveredCategory(null)
        setDelayedHoveredCategory(null)
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
    setHoveredCategory(null)
    onChange?.(option)
  }

  const handleCategorySelect = (categoryLabel: string, subCategory: string) => {
    setSelectedValue(`${categoryLabel} / ${subCategory}`)
    setIsOpen(false)
    setHoveredCategory(null)
    onChange?.(subCategory)
  }

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between"
        style={{
          width: '100%',
          height: px(44),
          paddingLeft: px(12),
          paddingRight: px(12),
          border: `1px solid #000000`,
          borderRadius: px(4),
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          backgroundColor: '#FFFFFF',
        }}
      >
        <span style={{ 
          color: selectedValue ? '#000000' : '#252525',
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(16),
          lineHeight: '100%',
          letterSpacing: '0%',
        }}>
          {selectedValue || placeholder}
        </span>
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
            <path d="M16.2 5.39844L9.00008 12.5984L1.80005 5.39844"/>
          </mask>
          <path d="M9.00008 12.5984L8.29297 13.3055L9.00008 14.0127L9.70718 13.3055L9.00008 12.5984ZM16.2 5.39844L15.4929 4.69133L8.29297 11.8913L9.00008 12.5984L9.70718 13.3055L16.9072 6.10554L16.2 5.39844ZM9.00008 12.5984L9.70718 11.8913L2.50715 4.69133L1.80005 5.39844L1.09294 6.10555L8.29297 13.3055L9.00008 12.5984Z" fill="black" mask={`url(#${maskId})`}/>
        </svg>
      </div>
      
      {isOpen && dropdownWidth > 0 && (
        <div
          className="absolute z-50 dropdown-menu"
          style={{
            width: dropdownWidth,
            marginTop: px(4),
            backgroundColor: '#FFFFFF',
            border: `1px solid #E4E7ED`,
            borderRadius: px(4),
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'visible',
            left: 0,
            maxHeight: `calc(100vh - ${px(200)})`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {categories ? (
            <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
              {/* 左侧 - 一级分类 */}
              <div ref={firstLevelRef} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                {/* 解释文字 - 显示在最上面 */}
                {description && (
                  <div style={{ 
                    padding: px(16),
                    borderBottom: `1px solid #E4E7ED`,
                    backgroundColor: '#F5F7FA',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontSize: px(12),
                    color: '#000000',
                    lineHeight: px(18),
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    flexShrink: 0,
                  }}>
                    {description}
                  </div>
                )}
                
                {/* 单列布局 - 一级分类 */}
                <div style={{ overflowY: 'auto', flex: 1, maxHeight: `calc(100vh - ${px(300)})` }}>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setHoveredCategory(category.label)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div
                        className="cursor-pointer flex items-center justify-between"
                        style={{
                          padding: `${px(12)} ${px(16)}`,
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: px(16),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: hoveredCategory === category.label ? '#FFFFFF' : '#252525',
                          backgroundColor: hoveredCategory === category.label ? '#000000' : '#FFFFFF',
                          borderBottom: index < categories.length - 1 ? `1px solid #E4E7ED` : 'none',
                        }}
                      >
                        <span>{category.label}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M4.5 2L7.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 桥接区域 - 连接一级和二级菜单，防止鼠标移动时二级菜单消失 */}
              {hoveredCategory && (
                <div
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current)
                    }
                    setHoveredCategory(hoveredCategory)
                    setDelayedHoveredCategory(hoveredCategory)
                  }}
                  style={{
                    position: 'absolute',
                    left: '100%',
                    top: 0,
                    width: px(4),
                    height: firstLevelHeight || '100%',
                    zIndex: 59,
                  }}
                />
              )}
              
              {/* 右侧 - 二级分类，固定位置，顶部对齐 */}
              {delayedHoveredCategory && categories.find(c => c.label === delayedHoveredCategory) && firstLevelHeight > 0 && (
                <div
                  onMouseEnter={() => {
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current)
                    }
                    setHoveredCategory(delayedHoveredCategory)
                    setDelayedHoveredCategory(delayedHoveredCategory)
                  }}
                  onMouseLeave={() => {
                    setHoveredCategory(null)
                  }}
                  style={{
                    position: 'absolute',
                    left: '100%',
                    top: 0,
                    width: dropdownWidth,
                    height: firstLevelHeight,
                    backgroundColor: '#FFFFFF',
                    border: `1px solid #E4E7ED`,
                    borderRadius: px(4),
                    boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
                    marginLeft: px(4),
                    zIndex: 60,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  {/* 二级筛选的解释文案 */}
                  {categories.find(c => c.label === delayedHoveredCategory)?.description && (
                    <div style={{ 
                      padding: px(16),
                      borderBottom: `1px solid #E4E7ED`,
                      backgroundColor: '#F5F7FA',
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontSize: px(12),
                      color: '#000000',
                      lineHeight: px(18),
                      wordWrap: 'break-word',
                      whiteSpace: 'normal',
                      flexShrink: 0,
                    }}>
                      {categories.find(c => c.label === delayedHoveredCategory)?.description}
                    </div>
                  )}
                  <div style={{
                    overflowY: 'auto',
                    flex: 1,
                    minHeight: 0,
                  }}>
                    {categories.find(c => c.label === delayedHoveredCategory)?.subCategories.map((subCategory, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() => handleCategorySelect(delayedHoveredCategory, subCategory)}
                        className="cursor-pointer"
                        style={{
                          padding: `${px(12)} ${px(16)}`,
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: px(16),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: selectedValue === subCategory ? '#FFFFFF' : '#252525',
                          backgroundColor: selectedValue === subCategory ? '#000000' : '#FFFFFF',
                          borderBottom: `1px solid #E4E7ED`,
                        }}
                        onMouseEnter={(e) => {
                          if (selectedValue !== subCategory) {
                            e.currentTarget.style.backgroundColor = '#000000'
                            e.currentTarget.style.color = '#FFFFFF'
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = selectedValue === subCategory ? '#000000' : '#FFFFFF'
                          e.currentTarget.style.color = selectedValue === subCategory ? '#FFFFFF' : '#000000'
                        }}
                      >
                        {subCategory}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // 简单选项列表
            <>
              {/* 解释文字 - 显示在最上面 */}
              {description && (
                <div style={{ 
                  padding: px(16),
                  borderBottom: `1px solid #E4E7ED`,
                  backgroundColor: '#F5F7FA',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(12),
                  color: '#000000',
                  lineHeight: px(18),
                  wordWrap: 'break-word',
                  whiteSpace: 'normal'
                }}>
                  {description}
                </div>
              )}
              {options?.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="cursor-pointer transition-colors"
                  style={{
                    padding: `${px(10)} ${px(12)}`,
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: selectedValue === option ? '#FFFFFF' : '#252525',
                    backgroundColor: selectedValue === option ? '#000000' : '#FFFFFF',
                    borderBottom: index < (options.length - 1) ? `1px solid #E4E7ED` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedValue !== option) {
                      e.currentTarget.style.backgroundColor = '#000000'
                      e.currentTarget.style.color = '#FFFFFF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = selectedValue === option ? '#000000' : '#FFFFFF'
                    e.currentTarget.style.color = selectedValue === option ? '#FFFFFF' : '#000000'
                  }}
                >
                  {option}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

