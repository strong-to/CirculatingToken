'use client'

import { useState, useRef, useEffect, useId } from 'react'
import { px } from '@/utils/pxToRem'

interface SubCategory {
  label: string
  description?: string // 二级筛选项的解释文案
}

interface Category {
  label: string
  subCategories: (SubCategory | string)[] // 支持字符串数组或对象数组
  description?: string // 一级筛选的解释文案
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null) // 点击的一级项
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(null) // hover的二级项
  const [hoveredOption, setHoveredOption] = useState<string | null>(null) // hover的简单选项
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const firstLevelRef = useRef<HTMLDivElement>(null)
  const maskId = useId().replace(/:/g, '')
  const [dropdownWidth, setDropdownWidth] = useState<number>(0)
  const [firstLevelHeight, setFirstLevelHeight] = useState<number>(0)

  // 同步外部传入的 value
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

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


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setHoveredCategory(null)
        setSelectedCategory(null)
        setHoveredSubCategory(null)
        setHoveredOption(null)
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
    setSelectedCategory(null)
    setHoveredSubCategory(null)
    setHoveredOption(null)
    onChange?.(option)
  }

  const handleCategoryClick = (categoryLabel: string) => {
    // 点击一级项，切换二级菜单的显示
    if (selectedCategory === categoryLabel) {
      setSelectedCategory(null)
      setHoveredSubCategory(null)
    } else {
      setSelectedCategory(categoryLabel)
      setHoveredSubCategory(null)
    }
  }

  const handleCategorySelect = (categoryLabel: string, subCategory: string) => {
    setSelectedValue(`${categoryLabel} / ${subCategory}`)
    setIsOpen(false)
    setHoveredCategory(null)
    setSelectedCategory(null)
    setHoveredSubCategory(null)
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
          border: `0.5px solid #000000`,
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
            width: `${dropdownWidth * 1.5 + 10}px`,
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
                {/* 解释文字 - 显示在最上面，根据hover的一级项动态变化 */}
                {(description || hoveredCategory) && (
                  <div style={{ 
                    padding: px(16),
                    borderBottom: `1px solid #E4E7ED`,
                    backgroundColor: '#F5F7FA',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontSize: px(16),
                    color: '#000000',
                    lineHeight: px(18),
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                    flexShrink: 0,
                    height: px(18 * 3 + 32), // 固定高度：三行文字的高度 + 上下padding (16*2)
                    display: 'flex',
                    alignItems: 'flex-start', // 顶部对齐
                    overflow: 'hidden', // 超出部分隐藏
                  }}>
                    {hoveredCategory 
                      ? categories.find(c => c.label === hoveredCategory)?.description || description
                      : description
                    }
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
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCategoryClick(category.label)
                        }}
                        style={{
                          height: px(60),
                          padding: `${px(12)} ${px(16)}`,
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: px(16),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: (hoveredCategory === category.label || selectedCategory === category.label) ? '#FFFFFF' : '#252525',
                          backgroundColor: (hoveredCategory === category.label || selectedCategory === category.label) ? '#000000' : '#FFFFFF',
                          borderBottom: index < categories.length - 1 ? `1px solid #E4E7ED` : 'none',
                          transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
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
              
              {/* 右侧 - 二级分类，点击一级项后显示 */}
              {selectedCategory && categories.find(c => c.label === selectedCategory) && firstLevelHeight > 0 && (
                <div
                  onMouseLeave={() => {
                    setHoveredSubCategory(null)
                  }}
                  style={{
                    position: 'absolute',
                    left: '100%',
                    top: 0,
                    width: `${dropdownWidth * 1.5 + 11}px`,
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
                  {/* 二级筛选的解释文案 - 根据hover的二级项动态变化 */}
                  {selectedCategory && (
                    <div style={{ 
                      padding: px(16),
                      borderBottom: `1px solid #E4E7ED`,
                      backgroundColor: '#F5F7FA',
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontSize: px(16),
                      color: '#000000',
                      lineHeight: px(18),
                      wordWrap: 'break-word',
                      whiteSpace: 'normal',
                      flexShrink: 0,
                      height: px(18 * 3 + 32), // 固定高度：三行文字的高度 + 上下padding (16*2)
                      display: 'flex',
                      alignItems: 'flex-start', // 顶部对齐
                      overflow: 'hidden', // 超出部分隐藏
                    }}>
                      {hoveredSubCategory 
                        ? (() => {
                            const currentCategory = categories.find(c => c.label === selectedCategory)
                            if (currentCategory) {
                              const subCategoryItem = currentCategory.subCategories.find((sub: SubCategory | string) => {
                                const subLabel = typeof sub === 'string' ? sub : sub.label
                                return subLabel === hoveredSubCategory
                              })
                              // 如果二级项有独立的description，优先显示
                              if (subCategoryItem && typeof subCategoryItem === 'object' && subCategoryItem.description) {
                                return subCategoryItem.description
                              }
                              // 如果没有二级项的description，显示一级项的description
                              return currentCategory?.description || description
                            }
                            return description
                          })()
                        : categories.find(c => c.label === selectedCategory)?.description || description
                      }
                    </div>
                  )}
                  <div style={{
                    overflowY: 'auto',
                    flex: 1,
                    minHeight: 0,
                  }}>
                    {categories.find(c => c.label === selectedCategory)?.subCategories.map((subCategory, subIndex) => {
                      const subLabel = typeof subCategory === 'string' ? subCategory : subCategory.label
                      return (
                        <div
                          key={subIndex}
                          onClick={() => handleCategorySelect(selectedCategory, subLabel)}
                          className="cursor-pointer  flex items-center justify-start"
                          style={{
                            height: px(60),
                            padding: `${px(12)} ${px(16)}`,
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: px(16),
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: (selectedValue === subLabel || hoveredSubCategory === subLabel) ? '#FFFFFF' : '#252525',
                            backgroundColor: (selectedValue === subLabel || hoveredSubCategory === subLabel) ? '#000000' : '#FFFFFF',
                            borderBottom: `1px solid #E4E7ED`,
                            transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                          onMouseEnter={() => {
                            setHoveredSubCategory(subLabel)
                          }}
                          onMouseLeave={() => {
                            setHoveredSubCategory(null)
                          }}
                        >
                          {subLabel}
                        </div>
                      )
                    })}
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
                  fontSize: px(16),
                  color: '#000000',
                  lineHeight: px(18),
                  wordWrap: 'break-word',
                  whiteSpace: 'normal'
                }}>
                  {description}
                </div>
              )}
              {options?.map((option, index) => {
                const isSelected = selectedValue === option
                const isHovered = hoveredOption === option
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="cursor-pointer flex items-center justify-start"
                    onMouseEnter={() => setHoveredOption(option)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      height: px(60),
                      padding: `${px(10)} ${px(12)}`,
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(16),
                      letterSpacing: '0%',
                      color: (isSelected || isHovered) ? '#FFFFFF' : '#252525',
                      backgroundColor: (isSelected || isHovered) ? '#000000' : '#FFFFFF',
                      borderBottom: index < (options.length - 1) ? `1px solid #E4E7ED` : 'none',
                      transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {option}
                  </div>
                )
              })}
            </>
          )}
        </div>
      )}
    </div>
  )
}
