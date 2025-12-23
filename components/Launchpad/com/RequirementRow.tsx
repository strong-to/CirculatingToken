'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'

// 表格下拉框组件 - 专门用于表格单元格
interface TableDropdownProps {
  placeholder: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

interface TableDropdownPropsWithCallback extends TableDropdownProps {
  onOpenChange?: (isOpen: boolean) => void
}

function TableDropdown({ placeholder, options, value, onChange, onOpenChange }: TableDropdownPropsWithCallback) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`table-dropdown-${Math.random().toString(36).substr(2, 9)}`).current
  
  // 通知父组件打开状态变化
  useEffect(() => {
    onOpenChange?.(isOpen)
  }, [isOpen, onOpenChange])

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
    onChange?.(option)
    setIsOpen(false)
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      style={{
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between"
        style={{
          width: '100%',
          height: '100%',
          paddingLeft: px(12),
          paddingRight: px(12),
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(12),
          color: value ? '#000000' : '#8C8C8C',
          backgroundColor: '#FFFFFF',
        }}
      >
        <span style={{ 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
        }}>
          {value || placeholder}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            flexShrink: 0,
            marginLeft: px(8),
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <mask id={maskId} fill="white">
            <path d="M16.2 5.39844L9.00008 12.5984L1.80005 5.39844"/>
          </mask>
          <path d="M9.00008 12.5984L8.29297 13.3055L9.00008 14.0127L9.70718 13.3055L9.00008 12.5984ZM16.2 5.39844L15.4929 4.69133L8.29297 11.8913L9.00008 12.5984L9.70718 13.3055L16.9072 6.10554L16.2 5.39844ZM9.00008 12.5984L9.70718 11.8913L2.50715 4.69133L1.80005 5.39844L1.09294 6.10555L8.29297 13.3055L9.00008 12.5984Z" fill={value ? '#000000' : '#8C8C8C'} mask={`url(#${maskId})`}/>
        </svg>
      </div>
      
      {isOpen && options.length > 0 && (
        <div
          className="absolute dropdown-menu"
          style={{
            width: '100%',
            top: '100%',
            marginTop: px(4),
            backgroundColor: '#FFFFFF',
            border: `1px solid #E4E7ED`,
            borderRadius: px(4),
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            left: 0,
            maxHeight: px(300),
            overflowY: 'auto',
            zIndex: 999999,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {options.map((option, index) => {
            const isSelected = value === option
            return (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className="cursor-pointer transition-colors"
                style={{
                  padding: `${px(10)} ${px(12)}`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(12),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: isSelected ? '#FFFFFF' : '#252525',
                  backgroundColor: isSelected ? '#000000' : '#FFFFFF',
                  borderBottom: index < (options.length - 1) ? `1px solid #E4E7ED` : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#000000'
                    e.currentTarget.style.color = '#FFFFFF'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#FFFFFF'
                    e.currentTarget.style.color = '#252525'
                  }
                }}
              >
                {option}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export interface RequirementRowData {
  selectedRequirement: string
  selectedUnit: string
  customRequirement: string
  customUnit: string
  quantity: string
  cause: string
}

export interface RequirementRowProps {
  data: RequirementRowData
  requirementOptions: string[]
  requirementUnitMap: Record<string, string>
  onDataChange: (data: RequirementRowData) => void
  // 格式化数字相关函数（已废弃，保留以兼容）
  handleNumberInput?: (value: string, setter: (value: string) => void) => void
  formatNumberOnBlur?: (value: string, setter: (value: string) => void) => void
}

export default function RequirementRow({
  data,
  requirementOptions,
  requirementUnitMap,
  onDataChange,
  handleNumberInput,
  formatNumberOnBlur,
}: RequirementRowProps) {
  const [localData, setLocalData] = useState<RequirementRowData>(data)
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false)
  const [isTableDropdownOpen, setIsTableDropdownOpen] = useState(false)
  const customDropdownRef = useRef<HTMLDivElement>(null)

  // 同步外部数据变化
  useEffect(() => {
    setLocalData(data)
  }, [data])

  // 更新本地数据并通知父组件
  const updateData = (updates: Partial<RequirementRowData>) => {
    const newData = { ...localData, ...updates }
    setLocalData(newData)
    onDataChange(newData)
  }
  
  // 判断字符串是否是纯数字（可以包含小数点和千分位逗号）
  const isNumericString = (str: string): boolean => {
    if (!str) return false
    // 移除千分位逗号和小数点，检查剩余字符是否都是数字
    const cleaned = str.replace(/,/g, '').replace(/\./g, '')
    return /^\d+$/.test(cleaned) && str.split('.').length <= 2
  }
  
  // 格式化数字：如果是数字则格式化，否则保持原样
  const formatIfNumber = (value: string): string => {
    if (!value) return ''
    
    if (!isNumericString(value)) {
      return value // 不是数字，保持原样
    }
    
    // 移除千分位逗号
    const numericValue = value.replace(/,/g, '')
    if (!numericValue) return ''
    
    // 分割整数和小数部分
    const parts = numericValue.split('.')
    const integerPart = parts[0] || '0'
    const decimalPart = parts[1] || ''
    
    // 格式化整数部分（千分位）
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    // 限制小数部分最多两位，并补齐到两位
    const formattedDecimal = decimalPart.slice(0, 2).padEnd(2, '0')
    
    // 返回格式化后的值
    return `${formattedInteger}.${formattedDecimal}`
  }
  
  // 处理输入：允许任意输入
  const handleInputChange = (value: string, field: keyof RequirementRowData) => {
    updateData({ [field]: value })
  }
  
  // 处理失焦：如果是数字则格式化
  const handleInputBlur = (value: string, field: keyof RequirementRowData) => {
    if (isNumericString(value)) {
      const formatted = formatIfNumber(value)
      updateData({ [field]: formatted })
    }
  }

  // 判断是否为自定义模式
  const isCustomMode = localData.selectedRequirement === '自定义'

  // 处理自定义模式下点击下拉按钮
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (customDropdownRef.current && !customDropdownRef.current.contains(event.target as Node)) {
        setIsCustomDropdownOpen(false)
      }
    }

    if (isCustomDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCustomDropdownOpen])

  // 当下拉菜单打开时，提高容器的 z-index
  const containerZIndex = (isCustomDropdownOpen || isTableDropdownOpen) ? 10000 : 1

  return (
    <div 
      className='flex items-center'
      style={{
        width: '100%',
        border: '0.7px solid #000000',
        borderRadius: px(2),
        overflow: 'visible',
        position: 'relative',
        zIndex: containerZIndex,
      }}
    >
      {/* 第一列：Construction Requirement Item - 下拉框或输入框 */}
      <div 
        className='flex items-center'
        style={{
          flex: 1,
          height: px(44),
          borderRight: '0.7px solid #000000',
          padding: 0,
          position: 'relative',
          overflow: 'visible',
          borderTopLeftRadius: px(4),
          borderBottomLeftRadius: px(4),
        }}
      >
        {isCustomMode ? (
          <div 
            ref={customDropdownRef}
            className="relative flex items-center" 
            style={{ width: '100%', height: '100%' }}
          >
            <input
              type="text"
              value={localData.customRequirement}
              onChange={(e) => updateData({ customRequirement: e.target.value })}
              placeholder="Construction Requirement Item"
              style={{
                width: '100%',
                height: '100%',
                paddingLeft: px(12),
                paddingRight: px(40),
                border: 'none',
                outline: 'none',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(12),
                color: localData.customRequirement ? '#000000' : '#8C8C8C',
                backgroundColor: '#FFFFFF',
              }}
            />
            <div
              onClick={() => setIsCustomDropdownOpen(!isCustomDropdownOpen)}
              className="cursor-pointer flex items-center justify-center"
              style={{
                position: 'absolute',
                right: px(12),
                width: px(18),
                height: px(18),
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isCustomDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <mask id="custom-dropdown-mask" fill="white">
                  <path d="M16.2 5.39844L9.00008 12.5984L1.80005 5.39844"/>
                </mask>
                <path d="M9.00008 12.5984L8.29297 13.3055L9.00008 14.0127L9.70718 13.3055L9.00008 12.5984ZM16.2 5.39844L15.4929 4.69133L8.29297 11.8913L9.00008 12.5984L9.70718 13.3055L16.9072 6.10554L16.2 5.39844ZM9.00008 12.5984L9.70718 11.8913L2.50715 4.69133L1.80005 5.39844L1.09294 6.10555L8.29297 13.3055L9.00008 12.5984Z" fill={localData.customRequirement || localData.selectedRequirement ? '#000000' : '#8C8C8C'} mask="url(#custom-dropdown-mask)"/>
              </svg>
            </div>
            
            {/* 自定义模式下的下拉菜单 */}
            {isCustomDropdownOpen && requirementOptions.length > 0 && (
              <div
                className="absolute dropdown-menu"
                style={{
                  width: '100%',
                  top: '100%',
                  marginTop: px(4),
                  backgroundColor: '#FFFFFF',
                  border: `1px solid #E4E7ED`,
                  borderRadius: px(4),
                  boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  left: 0,
                  maxHeight: px(300),
                  overflowY: 'auto',
                  zIndex: 999999,
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                } as React.CSSProperties}
              >
                {requirementOptions.map((option, index) => {
                  const isSelected = localData.selectedRequirement === option
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        const updates: Partial<RequirementRowData> = { selectedRequirement: option }
                        if (option !== '自定义') {
                          updates.selectedUnit = requirementUnitMap[option] || ''
                          updates.customRequirement = ''
                          updates.customUnit = ''
                        }
                        updateData(updates)
                        setIsCustomDropdownOpen(false)
                      }}
                      className="cursor-pointer transition-colors"
                      style={{
                        padding: `${px(10)} ${px(12)}`,
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(12),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: isSelected ? '#FFFFFF' : '#252525',
                        backgroundColor: isSelected ? '#000000' : '#FFFFFF',
                        borderBottom: index < (requirementOptions.length - 1) ? `1px solid #E4E7ED` : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#000000'
                          e.currentTarget.style.color = '#FFFFFF'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = '#FFFFFF'
                          e.currentTarget.style.color = '#252525'
                        }
                      }}
                    >
                      {option}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <TableDropdown
            placeholder="Construction Requirement Item"
            options={requirementOptions}
            value={localData.selectedRequirement}
            onChange={(value) => {
              const updates: Partial<RequirementRowData> = { selectedRequirement: value }
              // 选择需求项时，始终同步更新对应的单位
              updates.selectedUnit = requirementUnitMap[value] || ''
              updateData(updates)
            }}
            onOpenChange={setIsTableDropdownOpen}
          />
        )}
      </div>
      
      {/* 第二列：Units - 宽度120px，显示对应的单位或输入框 */}
      <div 
        className='flex items-center'
        style={{
          width: px(120),
          height: px(44),
          borderRight: '0.7px solid #000000',
          padding: 0,
        }}
      >
        {isCustomMode ? (
          <input
            type="text"
            value={localData.customUnit}
            onChange={(e) => handleInputChange(e.target.value, 'customUnit')}
            onBlur={(e) => handleInputBlur(e.target.value, 'customUnit')}
            placeholder="Units"
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: px(12),
              paddingRight: px(12),
              border: 'none',
              outline: 'none',
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(12),
                      color: localData.customUnit ? '#000000' : '#8C8C8C',
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            }}
          />
        ) : (
          <input
            type="text"
            value={localData.selectedUnit}
            onChange={(e) => handleInputChange(e.target.value, 'selectedUnit')}
            onBlur={(e) => handleInputBlur(e.target.value, 'selectedUnit')}
            placeholder="Units"
            style={{
              width: '100%',
              height: '100%',
              paddingLeft: px(12),
              paddingRight: px(12),
              border: 'none',
              outline: 'none',
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(12),
                      color: localData.selectedUnit ? '#000000' : '#8C8C8C',
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
            }}
          />
        )}
      </div>
      
      {/* 第三列：Quantity - 宽度120px，输入框 */}
      <div 
        className='flex items-center'
        style={{
          width: px(120),
          height: px(44),
          borderRight: '0.7px solid #000000',
          padding: 0,
        }}
      >
        <input
          type="text"
          value={localData.quantity}
          onChange={(e) => handleInputChange(e.target.value, 'quantity')}
          onBlur={(e) => handleInputBlur(e.target.value, 'quantity')}
          placeholder="Quantity"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: px(12),
            paddingRight: px(12),
            border: 'none',
            outline: 'none',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: localData.quantity ? '#000000' : '#8C8C8C',
            backgroundColor: '#FFFFFF',
            textAlign: 'center',
          }}
        />
      </div>
      
      {/* 第四列：Cause - 宽度120px，输入框 */}
      <div 
        className='flex items-center'
        style={{
          width: px(120),
          height: px(44),
          padding: 0,
          borderTopRightRadius: px(4),
          borderBottomRightRadius: px(4),
        }}
      >
        <input
          type="text"
          value={localData.cause}
          onChange={(e) => handleInputChange(e.target.value, 'cause')}
          onBlur={(e) => handleInputBlur(e.target.value, 'cause')}
          placeholder="Cause"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: px(12),
            paddingRight: px(12),
            border: 'none',
            outline: 'none',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: localData.cause ? '#000000' : '#8C8C8C',
            backgroundColor: '#FFFFFF',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  )
}

