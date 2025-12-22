'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'

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
}

export default function StepFive({ onEnter }: StepFiveProps = {} as StepFiveProps) {
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
    <div className="flex-1">
      <div className="flex flex-col items-center justify-between" style={{ marginTop: px(5), marginBottom: px(30), width: px(570) }}>
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
          }}
        >
          Allocation and Governance
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>
      
      {/* Recommended Requirements */}
      <div style={{ marginTop: px(40) }}>
        <div
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            color: '#000000',
            marginBottom: px(20),
          }}
        >
          Recommended Requirements
        </div>

    <div className='flex items-start' style={{ gap: px(15) }}>
      {/* 左侧两行字段 */}
      <div>
        <div className="flex" style={{ marginBottom: px(15), gap: px(15) }}>
          <RequirementInput
            label="Proportion of initiators"
            inputValue={recommendedValues.proportionOfInitiators.input}
            dropdownValue={recommendedValues.proportionOfInitiators.dropdown}
            options={['5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, proportionOfInitiators: { ...recommendedValues.proportionOfInitiators, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, proportionOfInitiators: { ...recommendedValues.proportionOfInitiators, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Tokens per unit work"
            inputValue={recommendedValues.tokensPerUnitWork.input}
            dropdownValue={recommendedValues.tokensPerUnitWork.dropdown}
            options={['50', '100', '150', '200', '250', '300', '350', '400', '450', '500']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, tokensPerUnitWork: { ...recommendedValues.tokensPerUnitWork, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, tokensPerUnitWork: { ...recommendedValues.tokensPerUnitWork, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Number of tokens minted per phase"
            inputValue={recommendedValues.numberOfTokensMintedPerPhase.input}
            dropdownValue={recommendedValues.numberOfTokensMintedPerPhase.dropdown}
            options={['500,000', '750,000', '1,000,000', '1,250,000', '1,500,000', '1,750,000', '2,000,000', '2,250,000', '2,500,000', '3,000,000']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, numberOfTokensMintedPerPhase: { ...recommendedValues.numberOfTokensMintedPerPhase, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, numberOfTokensMintedPerPhase: { ...recommendedValues.numberOfTokensMintedPerPhase, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Token minting increment difference"
            inputValue={recommendedValues.tokenMintingIncrementDifference.input}
            dropdownValue={recommendedValues.tokenMintingIncrementDifference.dropdown}
            options={['0.5', '0.75', '1', '1.25', '1.5', '1.75', '2', '2.25', '2.5', '3']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, tokenMintingIncrementDifference: { ...recommendedValues.tokenMintingIncrementDifference, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, tokenMintingIncrementDifference: { ...recommendedValues.tokenMintingIncrementDifference, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Token Minting Index"
            inputValue={recommendedValues.tokenMintingIndex.input}
            dropdownValue={recommendedValues.tokenMintingIndex.dropdown}
            options={['1.000', '1.012', '1.024', '1.036', '1.048', '1.060', '1.072', '1.084', '1.096', '1.108']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, tokenMintingIndex: { ...recommendedValues.tokenMintingIndex, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, tokenMintingIndex: { ...recommendedValues.tokenMintingIndex, dropdown: val } })}
            readonly={true}
          />
        </div>
        
        <div className="flex" style={{ gap: px(15) }}>
          <RequirementInput
            label="Proportion of tokens for initiating proposals"
            inputValue={recommendedValues.proportionOfTokensForInitiatingProposals.input}
            dropdownValue={recommendedValues.proportionOfTokensForInitiatingProposals.dropdown}
            options={['1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, proportionOfTokensForInitiatingProposals: { ...recommendedValues.proportionOfTokensForInitiatingProposals, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, proportionOfTokensForInitiatingProposals: { ...recommendedValues.proportionOfTokensForInitiatingProposals, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Pass rate of passive responses"
            inputValue={recommendedValues.passRateOfPassiveResponses.input}
            dropdownValue={recommendedValues.passRateOfPassiveResponses.dropdown}
            options={['30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, passRateOfPassiveResponses: { ...recommendedValues.passRateOfPassiveResponses, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, passRateOfPassiveResponses: { ...recommendedValues.passRateOfPassiveResponses, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Pass rate for adjusting contribution weights"
            inputValue={recommendedValues.passRateForAdjustingContributionWeights.input}
            dropdownValue={recommendedValues.passRateForAdjustingContributionWeights.dropdown}
            options={['50%', '55%', '60%', '66.7%', '70%', '75%', '80%', '85%', '90%', '100%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, passRateForAdjustingContributionWeights: { ...recommendedValues.passRateForAdjustingContributionWeights, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, passRateForAdjustingContributionWeights: { ...recommendedValues.passRateForAdjustingContributionWeights, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Pass rate for adjusting the minting index"
            inputValue={recommendedValues.passRateForAdjustingMintingIndex.input}
            dropdownValue={recommendedValues.passRateForAdjustingMintingIndex.dropdown}
            options={['50%', '55%', '60%', '66.7%', '70%', '75%', '80%', '85%', '90%', '100%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, passRateForAdjustingMintingIndex: { ...recommendedValues.passRateForAdjustingMintingIndex, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, passRateForAdjustingMintingIndex: { ...recommendedValues.passRateForAdjustingMintingIndex, dropdown: val } })}
            readonly={true}
          />
          <RequirementInput
            label="Project liquidation pass rate"
            inputValue={recommendedValues.projectLiquidationPassRate.input}
            dropdownValue={recommendedValues.projectLiquidationPassRate.dropdown}
            options={['50%', '60%', '70%', '80%', '90%', '100%']}
            onInputChange={(val) => setRecommendedValues({ ...recommendedValues, projectLiquidationPassRate: { ...recommendedValues.projectLiquidationPassRate, input: val } })}
            onDropdownChange={(val) => setRecommendedValues({ ...recommendedValues, projectLiquidationPassRate: { ...recommendedValues.projectLiquidationPassRate, dropdown: val } })}
            readonly={true}
          />
        </div>
      </div>
      
      {/* 右侧按钮 - 垂直居中 */}
      <div className='flex items-center' style={{ alignSelf: 'stretch' }}>
        <button
          className="cursor-pointer transition-colors"
          style={{
            width: px(128),
            height: px(44),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Renovate
        </button>
      </div>
    </div>

      </div>

      {/* Confirm Requirements  */}
      <div style={{ marginTop: px(40) }}>
        <div
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            color: '#000000',
            marginBottom: px(20),
          }}
        >
          Confirm Requirements 
        </div>

    <div className='flex items-start' style={{ gap: px(15) }}>
      {/* 左侧两行字段 */}
      <div>
        <div className="flex" style={{ marginBottom: px(15), gap: px(15) }}>
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field1.input}
            dropdownValue={confirmRequirementsValues.field1.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field1: { ...confirmRequirementsValues.field1, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field1: { ...confirmRequirementsValues.field1, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field2.input}
            dropdownValue={confirmRequirementsValues.field2.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field2: { ...confirmRequirementsValues.field2, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field2: { ...confirmRequirementsValues.field2, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field3.input}
            dropdownValue={confirmRequirementsValues.field3.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field3: { ...confirmRequirementsValues.field3, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field3: { ...confirmRequirementsValues.field3, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field4.input}
            dropdownValue={confirmRequirementsValues.field4.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field4: { ...confirmRequirementsValues.field4, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field4: { ...confirmRequirementsValues.field4, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field4.input}
            dropdownValue={confirmRequirementsValues.field4.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field4: { ...confirmRequirementsValues.field4, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field4: { ...confirmRequirementsValues.field4, dropdown: val } })}
          />
        </div>
        
        <div className="flex" style={{ gap: px(15) }}>
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field5.input}
            dropdownValue={confirmRequirementsValues.field5.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field5: { ...confirmRequirementsValues.field5, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field5: { ...confirmRequirementsValues.field5, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field6.input}
            dropdownValue={confirmRequirementsValues.field6.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field6: { ...confirmRequirementsValues.field6, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field6: { ...confirmRequirementsValues.field6, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field7.input}
            dropdownValue={confirmRequirementsValues.field7.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field7: { ...confirmRequirementsValues.field7, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field7: { ...confirmRequirementsValues.field7, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field8.input}
            dropdownValue={confirmRequirementsValues.field8.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field8: { ...confirmRequirementsValues.field8, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field8: { ...confirmRequirementsValues.field8, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmRequirementsValues.field8.input}
            dropdownValue={confirmRequirementsValues.field8.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field8: { ...confirmRequirementsValues.field8, input: val } })}
            onDropdownChange={(val) => setConfirmRequirementsValues({ ...confirmRequirementsValues, field8: { ...confirmRequirementsValues.field8, dropdown: val } })}
          />
        </div>
      </div>
      
      {/* 右侧按钮 - 垂直居中 */}
      <div className='flex items-center' style={{ alignSelf: 'stretch' }}>
        <button
          className="cursor-pointer transition-colors"
          style={{
            width: px(128),
            height: px(44),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            backgroundColor: isConfirmRequirementsFilled() ? '#000000' : 'transparent',
            color: isConfirmRequirementsFilled() ? '#FFFFFF' : '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Submit
        </button>
      </div>
    </div>

      </div>

      {/* Confirm */}
      <div style={{ marginTop: px(40) }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: px(8),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            color: '#000000',
            marginBottom: px(20),
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, display: 'block', alignSelf: 'center' }}>
            <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
          </svg>
          Confirm
        </div>

    <div className='flex items-start' style={{ gap: px(15) }}>
      {/* 左侧两行字段 */}
      <div>
        <div className="flex" style={{ marginBottom: px(15), gap: px(15) }}>
          <RequirementInput
            label=""
            inputValue={confirmValues.field1.input}
            dropdownValue={confirmValues.field1.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field1: { ...confirmValues.field1, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field1: { ...confirmValues.field1, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field2.input}
            dropdownValue={confirmValues.field2.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field2: { ...confirmValues.field2, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field2: { ...confirmValues.field2, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field3.input}
            dropdownValue={confirmValues.field3.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field3: { ...confirmValues.field3, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field3: { ...confirmValues.field3, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field4.input}
            dropdownValue={confirmValues.field4.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field4: { ...confirmValues.field4, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field4: { ...confirmValues.field4, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field4.input}
            dropdownValue={confirmValues.field4.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field4: { ...confirmValues.field4, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field4: { ...confirmValues.field4, dropdown: val } })}
          />
        </div>
        
        <div className="flex" style={{ gap: px(15) }}>
          <RequirementInput
            label=""
            inputValue={confirmValues.field5.input}
            dropdownValue={confirmValues.field5.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field5: { ...confirmValues.field5, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field5: { ...confirmValues.field5, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field6.input}
            dropdownValue={confirmValues.field6.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field6: { ...confirmValues.field6, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field6: { ...confirmValues.field6, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field7.input}
            dropdownValue={confirmValues.field7.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field7: { ...confirmValues.field7, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field7: { ...confirmValues.field7, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field8.input}
            dropdownValue={confirmValues.field8.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field8: { ...confirmValues.field8, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field8: { ...confirmValues.field8, dropdown: val } })}
          />
          <RequirementInput
            label=""
            inputValue={confirmValues.field8.input}
            dropdownValue={confirmValues.field8.dropdown}
            options={['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
            onInputChange={(val) => setConfirmValues({ ...confirmValues, field8: { ...confirmValues.field8, input: val } })}
            onDropdownChange={(val) => setConfirmValues({ ...confirmValues, field8: { ...confirmValues.field8, dropdown: val } })}
          />
        </div>
      </div>
      
      {/* 右侧按钮 - 垂直居中 */}
      <div className='flex items-center' style={{ alignSelf: 'stretch' }}>
        <button
          className="cursor-pointer transition-colors"
          style={{
            width: px(128),
            height: px(44),
            border: `0.5px solid #000000`,
            borderRadius: px(4),
            backgroundColor: isConfirmFilled() ? '#000000' : 'transparent',
            color: isConfirmFilled() ? '#FFFFFF' : '#000000',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Confirm
        </button>
      </div>
    </div>

      </div>

       {/* 底部 Enter 按钮 */}
     <div className="flex items-center justify-center " style={{ marginTop: px(60) ,marginRight: px(290)}}>
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
         justifyContent: 'center'
       }}
     >
       Enter
     </button>
   </div>
    </div>
  )
}
