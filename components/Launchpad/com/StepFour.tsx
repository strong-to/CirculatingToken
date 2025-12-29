'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import RequirementRow, { RequirementRowData } from './RequirementRow'
import { StepTitleBar, StepNextButton } from './StepCommon'


// 带下拉框的输入组件：左边输入框 + 右边81px下拉框
interface RequirementInputProps {
  label: string
  inputValue: string
  dropdownValue: string
  options: string[]
  onInputChange: (value: string) => void
  onDropdownChange: (value: string) => void
  readonly?: boolean
}

function RequirementInput({ label, inputValue, dropdownValue, options, onInputChange, onDropdownChange, readonly = false }: RequirementInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`mask-${Math.random().toString(36).substr(2, 9)}`).current

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

  return (
    <div className="flex flex-col" style={{ width: px(241),marginRight: px(15)}}>
      <div className="flex" style={{ gap: 0 }}>
        {/* 左边输入框 */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={label || 'Please enter.'}
          readOnly={readonly}
          tabIndex={readonly ? -1 : 0}
          style={{
            flex: 1,
            height: px(44),
            paddingLeft: px(12),
            paddingRight: px(12),
            border: `0.5px solid #000000`,
            borderRight: 'none',
            borderTopLeftRadius: px(4),
            borderBottomLeftRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            color: readonly && !inputValue ? '#000000' : '#000000',
            backgroundColor: '#FFFFFF',
            outline: 'none',
            cursor: readonly ? 'default' : 'text',
          }}
          className={readonly ? 'readonly-input' : ''}
        />
        
        {/* 右边81px下拉框 */}
        <div className="relative" ref={dropdownRef} style={{ width: px(81) }}>
          <div
            className="flex items-center  justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: px(91),
              height: px(44),
              paddingLeft: px(10),
              paddingRight: px(10),
              border: `0.5px solid #000000`,
              borderTopRightRadius: px(4),
              borderBottomRightRadius: px(4),
              backgroundColor: '#FFFFFF',
            }}
          >
            <span
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                color: '#000000',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                marginRight: px(6),
              }}
            >
              {dropdownValue || ''}
            </span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ 
                flexShrink: 0,
                transform: `translateY(-${px(2)}) rotate(${isOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s ease',
              }}
            >
              <mask id={maskId} fill="white">
                <path d="M16.1998 5.39844L8.99983 12.5984L1.7998 5.39844"/>
              </mask>
              <path d="M8.99983 12.5984L8.29273 13.3055L8.99983 14.0127L9.70694 13.3055L8.99983 12.5984ZM16.1998 5.39844L15.4927 4.69133L8.29272 11.8913L8.99983 12.5984L9.70694 13.3055L16.9069 6.10554L16.1998 5.39844ZM8.99983 12.5984L9.70694 11.8913L2.50691 4.69133L1.7998 5.39844L1.0927 6.10555L8.29273 13.3055L8.99983 12.5984Z" fill="black" mask={`url(#${maskId})`}/>
            </svg>
          </div>
          
          {isOpen && options.length > 0 && (
            <div
              className="absolute z-50 dropdown-menu"
              style={{
                width: px(81),
                marginTop: px(4),
                backgroundColor: '#FFFFFF',
                border: `0.5px solid #E4E7ED`,
                borderRadius: px(4),
                boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                right: 0,
              }}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onDropdownChange(option)
                    setIsOpen(false)
                  }}
                  className="cursor-pointer transition-colors"
                  style={{
                    padding: `${px(10)} ${px(8)}`,
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(14),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: dropdownValue === option ? '#FFFFFF' : '#000000',
                    backgroundColor: dropdownValue === option ? '#000000' : '#FFFFFF',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000'
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = dropdownValue === option ? '#000000' : '#FFFFFF'
                    e.currentTarget.style.color = dropdownValue === option ? '#FFFFFF' : '#000000'
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface StepFourProps {
  onEnter?: () => void
  previewMode?: boolean
  data?: import('../Launchpad').StepFourData
  onDataChange?: (data: Partial<import('../Launchpad').StepFourData>) => void
}

export default function StepFour({ onEnter, previewMode, data, onDataChange }: StepFourProps = {} as StepFourProps) {
  // 构造需求项选项和对应的单位映射
  const requirementOptions = [
    'Custom', // 第一条添加自定义选项
    'CPU Computing Power',
    'GPU Computing Power',
    'Language Generation Model API',
    'Image Generation Model API',
    'System Architecture',
    'Data Collection',
    'Data Labeling',
    'Visual Design',
    'Interaction Design',
    'System Testing',
    'Other',
  ]

  const requirementUnitMap: Record<string, string> = {
    'CPU Computing Power': 'GOPS',
    'GPU Computing Power': 'GOPS',
    'Language Generation Model API': 'Tokens',
    'Image Generation Model API': 'Tokens',
    'System Architecture': 'ELOC',
    'Data Collection': 'DataPoint',
    'Data Labeling': 'DataPoint',
    'Visual Design': 'Tasks',
    'Interaction Design': 'Tasks',
    'System Testing': 'FP',
    'Other': 'USD',
  }

  // 12 行数据的状态
  const [requirementRows, setRequirementRows] = useState<RequirementRowData[]>(
    data?.requirementRows || Array.from({ length: 12 }, () => ({
      selectedRequirement: '',
      selectedUnit: '',
      customRequirement: '',
      customUnit: '',
      quantity: '',
      cause: '',
    }))
  )

  // 同步外部数据变化
  useEffect(() => {
    if (data?.requirementRows) {
      setRequirementRows(data.requirementRows)
    }
  }, [data])
  
  // 更新某一行数据
  const handleRowDataChange = (index: number, rowData: RequirementRowData) => {
    const newRows = [...requirementRows]
    newRows[index] = rowData
    setRequirementRows(newRows)
    onDataChange?.({ requirementRows: newRows })
  }
  
  // 生成随机数字（带千分位和小数点后两位）
  const generateRandomNumber = (): string => {
    const integer = Math.floor(Math.random() * 1000000) + 1 // 1 到 1000000
    const decimal = Math.floor(Math.random() * 100) // 0 到 99
    const decimalStr = decimal.toString().padStart(2, '0')
    
    // 格式化千分位
    const formattedInteger = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    return `${formattedInteger}.${decimalStr}`
  }
  
  // 处理刷新按钮点击
  const handleRefreshClick = () => {
    const newRows = requirementRows.map(() => {
      const nonCustomOptions = requirementOptions.filter(opt => opt !== 'Custom')
      const randomRequirement = nonCustomOptions[Math.floor(Math.random() * nonCustomOptions.length)]
      const randomUnit = requirementUnitMap[randomRequirement] || ''
      
      return {
        selectedRequirement: randomRequirement,
        selectedUnit: randomUnit,
        customRequirement: '',
        customUnit: '',
        quantity: generateRandomNumber(),
        cause: generateRandomNumber(),
      }
    })
    
    setRequirementRows(newRows)
    onDataChange?.({ requirementRows: newRows })
  }
  
  
  // 处理数字输入（只允许数字和小数点）
  const handleNumberInput = (value: string, setter: (value: string) => void) => {
    // 只允许数字和小数点
    const cleaned = value.replace(/[^\d.]/g, '')
    // 确保只有一个小数点
    const parts = cleaned.split('.')
    if (parts.length > 2) {
      setter(parts[0] + '.' + parts.slice(1).join(''))
    } else {
      setter(cleaned)
    }
  }
  
  // 格式化数字输入（失焦时调用）
  const formatNumberOnBlur = (value: string, setter: (value: string) => void) => {
    if (!value) {
      setter('')
      return
    }
    
    // 移除所有非数字字符（除了小数点）
    const numericValue = value.replace(/[^\d.]/g, '')
    if (!numericValue) {
      setter('')
      return
    }
    
    // 分割整数和小数部分
    const parts = numericValue.split('.')
    const integerPart = parts[0] || '0'
    const decimalPart = parts[1] || ''
    
    // 格式化整数部分（千分位）
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    
    // 限制小数部分最多两位，并补齐到两位
    const formattedDecimal = decimalPart.slice(0, 2).padEnd(2, '0')
    
    // 返回格式化后的值
    setter(`${formattedInteger}.${formattedDecimal}`)
  }

  const [recommendedValues, setRecommendedValues] = useState({
    gpuComputing: { input: '', dropdown: '1' },
    gpuComputing2: { input: '', dropdown: '1' },
    dataAnnotation1: { input: '', dropdown: '0.8' },
    systemArchitecture: { input: '', dropdown: '0.9' },
    systemTesting: { input: '', dropdown: '0.5' },
    languageModel: { input: '', dropdown: '0.3' },
    imageGeneration: { input: '', dropdown: '1' },
    dataAnnotation2: { input: '', dropdown: '0.5' },
    interactionDesign: { input: '', dropdown: '1' },
    visualDesign: { input: '', dropdown: '1' },
  })
  
  const [confirmRequirementsValues, setConfirmRequirementsValues] = useState({
    field1: { input: '', dropdown: '1' },
    field2: { input: '', dropdown: '1' },
    field3: { input: '', dropdown: '0.8' },
    field4: { input: '', dropdown: '0.9' },
    field5: { input: '', dropdown: '0.5' },
    field6: { input: '', dropdown: '0.3' },
    field7: { input: '', dropdown: '1' },
    field8: { input: '', dropdown: '0.5' },
    field9: { input: '', dropdown: '1' },
    field10: { input: '', dropdown: '1' },
  })
  
  const [confirmValues, setConfirmValues] = useState({
    field1: { input: '', dropdown: '1' },
    field2: { input: '', dropdown: '1' },
    field3: { input: '', dropdown: '0.8' },
    field4: { input: '', dropdown: '0.9' },
    field5: { input: '', dropdown: '0.5' },
    field6: { input: '', dropdown: '0.3' },
    field7: { input: '', dropdown: '1' },
    field8: { input: '', dropdown: '0.5' },
    field9: { input: '', dropdown: '1' },
    field10: { input: '', dropdown: '1' },
  })

  return (
    <>
      {!previewMode && (
        <StepTitleBar
          title="Construction Requirements and Contribution Quantification"
          barColor="rgba(0, 132, 0, 0.65)"
          width={1175}
          marginTop={5}
          marginBottom={80}
        />
      )}


<div style={{marginBottom: px(60)}}>

      <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#8C8C8C', marginRight: px(8), fontSize: px(20), fontWeight: 300 }} >
              Please enter the prompt information in the following text box, or click the control button on the right to let the AI help you <br/> complete the relevant work. Note: The AI can provide this service once.
                </span>

                <span  />
            </div>

            <div
              onClick={handleRefreshClick}
              style={{
                paddingLeft: px(26),
                paddingRight: px(26),
                height: px(40),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(14),
                color: '#ffffff',
                backgroundColor: '#000000',
                borderRadius: px(4),
                cursor: 'pointer',
              }}
            >
              Refresh
            </div>
          </div>


          <div 
            className='w-full flex flex-wrap items-start justify-between'
            style={{
              gap: `${px(20)} ${px(15)}`,
            }}
          >
            {requirementRows.map((rowData, index) => (
              <div
                key={index}
                style={{
                  width: `calc(50% - ${px(7.5)})`, // 两列布局，减去一半的间距
                }}
              >
                <RequirementRow
                  data={rowData}
                  requirementOptions={requirementOptions}
                  requirementUnitMap={requirementUnitMap}
                  onDataChange={(data) => handleRowDataChange(index, data)}
                  handleNumberInput={handleNumberInput}
                  formatNumberOnBlur={formatNumberOnBlur}
                />
              </div>
            ))}
          </div>

          </div>







    
     {!previewMode && <StepNextButton onClick={onEnter} label="Next" />}
      

     
    </>
  )
}
