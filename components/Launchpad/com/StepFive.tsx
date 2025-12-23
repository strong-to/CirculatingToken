'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
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
            fontSize: px(12),
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
                fontSize: px(12),
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
                    fontSize: px(12),
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

interface StepFiveProps {
  onEnter?: () => void
  previewMode?: boolean
}

export default function StepFive({ onEnter, previewMode }: StepFiveProps = {} as StepFiveProps) {
  const [isEnterHovered, setIsEnterHovered] = useState(false)
  const [recommendedValues, setRecommendedValues] = useState({
    proportionOfInitiators: { input: '', dropdown: '10%' },
    tokensPerUnitWork: { input: '', dropdown: '100' },
    numberOfTokensMintedPerPhase: { input: '', dropdown: '1,000,000' },
    tokenMintingIncrementDifference: { input: '', dropdown: '1' },
    tokenMintingIndex: { input: '', dropdown: '1.024' },
    proportionOfTokensForInitiatingProposals: { input: '', dropdown: '5%' },
    passRateOfPassiveResponses: { input: '', dropdown: '50%' },
    passRateForAdjustingContributionWeights: { input: '', dropdown: '66.7%' },
    passRateForAdjustingMintingIndex: { input: '', dropdown: '66.7%' },
    projectLiquidationPassRate: { input: '', dropdown: '100%' },
  })
  
  const [confirmRequirementsValues, setConfirmRequirementsValues] = useState({
    field1: { input: '', dropdown: '1' },
    field2: { input: '', dropdown: '0.8' },
    field3: { input: '', dropdown: '0.9' },
    field4: { input: '', dropdown: '0.5' },
    field5: { input: '', dropdown: '0.3' },
    field6: { input: '', dropdown: '1' },
    field7: { input: '', dropdown: '0.5' },
    field8: { input: '', dropdown: '1' },
  })
  
  const [confirmValues, setConfirmValues] = useState({
    field1: { input: '', dropdown: '1' },
    field2: { input: '', dropdown: '0.8' },
    field3: { input: '', dropdown: '0.9' },
    field4: { input: '', dropdown: '0.5' },
    field5: { input: '', dropdown: '0.3' },
    field6: { input: '', dropdown: '1' },
    field7: { input: '', dropdown: '0.5' },
    field8: { input: '', dropdown: '1' },
  })
  // 12个字段的数值
  const [fieldValues, setFieldValues] = useState({
    founderTokenProportion: '',
    proposalInitiationTokenProportion: '',
    adjustmentPassRateOfContributionWeight: '',
    passiveResponsePassRate: '',
    adjustmentPassRateOfMintingIndex: '',
    projectLiquidationPassRate: '',
    tokenMintingQuantityPerPhase: '',
    tokenMintingIncrementalDifference: '',
    tokenMintingIndex: '',
    aaa: '',
    bbb: '',
    ccc: '',
  })

  // Refresh按钮是否已点击（只能点击一次）
  const [isRefreshClicked, setIsRefreshClicked] = useState(false)

  // 数字格式化：千分位 + 保留两位小数（没有小数则补 .00）
  const formatNumberWithThousands = (value: string): string => {
    if (!value) return ''
    const numeric = value.replace(/,/g, '')
    if (numeric.trim() === '' || isNaN(Number(numeric))) return value
    const num = Number(numeric)
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  // 从JSON文件加载值并填入所有字段
  const loadValuesFromJSON = async () => {
    try {
      const timestamp = Date.now()
      const response = await fetch(`/launchpad/StepFive/values.json?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      // 将JSON中的值填入所有字段
      setFieldValues({
        founderTokenProportion: data.founderTokenProportion || '',
        proposalInitiationTokenProportion: data.proposalInitiationTokenProportion || '',
        adjustmentPassRateOfContributionWeight: data.adjustmentPassRateOfContributionWeight || '',
        passiveResponsePassRate: data.passiveResponsePassRate || '',
        adjustmentPassRateOfMintingIndex: data.adjustmentPassRateOfMintingIndex || '',
        projectLiquidationPassRate: data.projectLiquidationPassRate || '',
        tokenMintingQuantityPerPhase: data.tokenMintingQuantityPerPhase || '',
        tokenMintingIncrementalDifference: data.tokenMintingIncrementalDifference || '',
        tokenMintingIndex: data.tokenMintingIndex || '',
        aaa: data.aaa || '',
        bbb: data.bbb || '',
        ccc: data.ccc || '',
      })
    } catch (error) {
      console.warn('无法从 public 目录加载值，使用默认值', error)
    }
  }

  // Refresh按钮点击处理：从JSON文件加载值并填入所有字段
  const handleRefreshClick = async () => {
    if (isRefreshClicked) return // 已经点击过，不再执行

    await loadValuesFromJSON()

    // 标记为已点击，禁用按钮
    setIsRefreshClicked(true)
  }
  
  // 检查 Confirm Requirements 部分所有输入框是否都有值
  const isConfirmRequirementsFilled = () => {
    const fields = Object.values(confirmRequirementsValues)
    return fields.every(field => field.input.trim() !== '' && field.dropdown.trim() !== '')
  }
  
  // 检查 Confirm 部分所有输入框是否都有值
  const isConfirmFilled = () => {
    const fields = Object.values(confirmValues)
    return fields.every(field => field.input.trim() !== '' && field.dropdown.trim() !== '')
  }

  return (
    <>
      {!previewMode && (
        <StepTitleBar
          title="Rights Allocation and Project Governance"
          barColor="rgba(255, 240, 5, 0.75)"
          width={843}
          marginTop={5}
          marginBottom={80}
        />
      )}

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

              <button
                onClick={handleRefreshClick}
                disabled={isRefreshClicked}
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
                  backgroundColor: isRefreshClicked ? '#8C8C8C' : '#000000',
                  borderRadius: px(4),
                  border: 'none',
                  cursor: isRefreshClicked ? 'not-allowed' : 'pointer',
                  opacity: isRefreshClicked ? 0.6 : 1,
                }}
              >
                Refresh
              </button>
          </div>

          {/* 6行输入框布局 */}
          {[
            {
              leftLabel: 'Founder Token Proportion',
              leftField: 'founderTokenProportion',
              rightLabel: 'Token Minting Quantity per Phase',
              rightField: 'tokenMintingQuantityPerPhase',
            },
            {
              leftLabel: 'Proposal Initiation Token Proportion',
              leftField: 'proposalInitiationTokenProportion',
              rightLabel: 'Token Minting Incremental Difference',
              rightField: 'tokenMintingIncrementalDifference',
            },
            {
              leftLabel: 'Adjustment Pass Rate of Contribution Weight',
              leftField: 'adjustmentPassRateOfContributionWeight',
              rightLabel: 'Token Minting Index',
              rightField: 'tokenMintingIndex',
            },
            {
              leftLabel: 'Passive Response Pass Rate',
              leftField: 'passiveResponsePassRate',
              rightLabel: 'AAA',
              rightField: 'aaa',
            },
            {
              leftLabel: 'Adjustment Pass Rate of Minting Index',
              leftField: 'adjustmentPassRateOfMintingIndex',
              rightLabel: 'BBB',
              rightField: 'bbb',
            },
            {
              leftLabel: 'Project Liquidation Pass Rate',
              leftField: 'projectLiquidationPassRate',
              rightLabel: 'CCC',
              rightField: 'ccc',
            },
          ].map((row, index) => (
            <div key={index} className='w-full flex items-center justify-between' style={{ marginBottom: index < 5 ? px(20) : 0, gap: px(15) }}>
              {/* 左侧输入框（带%） */}
              <div
                className='w-full flex items-center'
                style={{
                  height: px(44),
                  borderRadius: px(4),
                  border: '0.7px solid #000000',
                  overflow: 'hidden',
                }}
              >
                {/* 左侧标题（非输入框） */}
                <div
                  className='flex items-center'
                  style={{
                    flex: 1,
                    height: '100%',
                    paddingLeft: px(16),
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: '#000000',
                  }}
                >
                  {row.leftLabel}
                </div>

                {/* 中间输入框 83px，千分位 + 两位小数 */}
                <input
                  type="text"
                  value={fieldValues[row.leftField as keyof typeof fieldValues]}
                  onChange={(e) => setFieldValues({ ...fieldValues, [row.leftField]: e.target.value })}
                  onBlur={(e) => setFieldValues({ ...fieldValues, [row.leftField]: formatNumberWithThousands(e.target.value) })}
                  placeholder="0.00"
                  style={{
                    width: px(83),
                    height: '100%',
                    paddingLeft: px(12),
                    paddingRight: px(12),
                    border: 'none',
                    borderLeft: '0.7px solid #000000',
                    outline: 'none',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: fieldValues[row.leftField as keyof typeof fieldValues] ? '#000000' : '#8C8C8C',
                    textAlign: 'center',
                  }}
                />

                {/* 百分比方块 44x44，背景 #F5F5F5 */}
                <div
                  className='flex items-center justify-center'
                  style={{
                    width: px(44),
                    height: '100%',
                    backgroundColor: '#F5F5F5',
                    borderLeft: '0.7px solid #000000',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: '#000000',
                  }}
                >
                  %
                </div>
              </div>

              {/* 右侧输入框（不带%） */}
              <div
                className='w-full flex items-center'
                style={{
                  overflow: 'hidden',
                  height: px(44),
                  borderRadius: px(4),
                  border: '0.7px solid #000000',
                }}
              >
                {/* 左侧标题（非输入框） */}
                <div
                  className='flex items-center'
                  style={{
                    flex: 1,
                    height: '100%',
                    paddingLeft: px(16),
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: '#000000',
                  }}
                >
                  {row.rightLabel}
                </div>

                {/* 输入框 127px，千分位 + 两位小数 */}
                <input
                  type="text"
                  value={fieldValues[row.rightField as keyof typeof fieldValues]}
                  onChange={(e) => setFieldValues({ ...fieldValues, [row.rightField]: e.target.value })}
                  onBlur={(e) => setFieldValues({ ...fieldValues, [row.rightField]: formatNumberWithThousands(e.target.value) })}
                  placeholder="0.00"
                  style={{
                    width: px(127),
                    height: '100%',
                    paddingLeft: px(12),
                    paddingRight: px(12),
                    border: 'none',
                    borderLeft: '0.7px solid #000000',
                    outline: 'none',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: fieldValues[row.rightField as keyof typeof fieldValues] ? '#000000' : '#8C8C8C',
                    textAlign: 'center',
                  }}
                />
              </div>
            </div>
          ))}


      {/* 底部 Next 按钮 */}
      {!previewMode && <StepNextButton onClick={onEnter} label="Next" />}
    </>
  )
}
