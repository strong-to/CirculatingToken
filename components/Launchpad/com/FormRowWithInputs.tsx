'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'

interface FormRowWithInputsProps {
  label?: string
  showAsterisk?: boolean
  inputPlaceholders?: string[]
  buttonText?: string
  textareaPlaceholder?: string
}

export default function FormRowWithInputs({
  label = 'Function Description',
  showAsterisk = false,
  inputPlaceholders = ['Full name of the project', 'Project Engineer', 'Token Economy', 'Token abbreviation'],
  buttonText = 'Renovate',
  textareaPlaceholder = 'Full name of the project',
}: FormRowWithInputsProps) {
  // 第二组输入框的状态
  const [secondInput1, setSecondInput1] = useState('')
  const [secondInput2, setSecondInput2] = useState('')
  const [secondInput3, setSecondInput3] = useState('')
  const [secondInput4, setSecondInput4] = useState('')
  
  // 第三组输入框的状态
  const [thirdInput1, setThirdInput1] = useState('')
  const [thirdInput2, setThirdInput2] = useState('')
  const [thirdInput3, setThirdInput3] = useState('')
  const [thirdInput4, setThirdInput4] = useState('')
  
  // 检查第二组是否所有输入框都有值
  const isSecondGroupFilled = secondInput1.trim() && secondInput2.trim() && secondInput3.trim() && secondInput4.trim()
  
  // 检查第三组是否所有输入框都有值
  const isThirdGroupFilled = thirdInput1.trim() && thirdInput2.trim() && thirdInput3.trim() && thirdInput4.trim()

  return (
    <div style={{ marginTop: px(40)}}>
      {/* 标签和输入框行 */}
      <div className="flex flex-col items-start" style={{ marginBottom: px(20) }}>
        {/* 左侧标签 */}
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
            flexShrink: 0,
          }}
        >
          {showAsterisk && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
          )}
          {label}
        </label>
        
          {/* 右侧输入框组 */}
          <div className="flex items-center gap-2" style={{ flex: 1 ,marginTop: px(10) }}>
            <input
              type="text"
              readOnly
              tabIndex={-1}
              className="readonly-input"
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
                color: '#000000',
                backgroundColor: '#FFFFFF',
                cursor: 'default',
              }}
              placeholder="Full name of the project"
            />
            <input
              type="text"
              readOnly
              tabIndex={-1}
              className="readonly-input"
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
                color: '#000000',
                backgroundColor: '#FFFFFF',
                cursor: 'default',
              }}
              placeholder="Project Engineer"
            />
            <input
              type="text"
              readOnly
              tabIndex={-1}
              className="readonly-input"
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
                color: '#000000',
                backgroundColor: '#FFFFFF',
                cursor: 'default',
              }}
              placeholder="Token Economy"
            />
            <input
              type="text"
              readOnly
              tabIndex={-1}
              className="readonly-input"
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
                color: '#000000',
                backgroundColor: '#FFFFFF',
                cursor: 'default',
              }}
              placeholder="Token abbreviation"
            />
          
          {/* 按钮 */}
          <button
            className="cursor-pointertransition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              width: px(128),
              borderRadius: px(4),
              color: '#ffffff',
              backgroundColor: '#000000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              height: px(40),
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>


      <div className="flex flex-col items-start" style={{ marginBottom: px(20) }}>
        {/* 左侧标签 */}
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
            flexShrink: 0,
          }}
        >
          {showAsterisk && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
          )}
          Custom Name
        </label>
        
          {/* 右侧输入框组 */}
          <div className="flex items-center gap-2" style={{ flex: 1 ,marginTop: px(10) }}>
            <input
              type="text"
              value={secondInput1}
              onChange={(e) => setSecondInput1(e.target.value)}
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[0] || 'Full name of the project'}
            />
            <input
              type="text"
              value={secondInput2}
              onChange={(e) => setSecondInput2(e.target.value)}
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[1] || 'Project Engineer'}
            />
            <input
              type="text"
              value={secondInput3}
              onChange={(e) => setSecondInput3(e.target.value)}
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[2] || 'Token Economy'}
            />
            <input
              type="text"
              value={secondInput4}
              onChange={(e) => setSecondInput4(e.target.value)}
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[3] || 'Token abbreviation'}
            />
          
          {/* 按钮 */}
          <button
            className="cursor-pointer transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              width: px(128),
              border: `0.5px solid #000000`,
              backgroundColor: isSecondGroupFilled ? '#000000' : 'transparent',
              color: isSecondGroupFilled ? '#FFFFFF' : '#000000',
              borderRadius: px(4),
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              height: px(40),
            }}
          >
            Submit
          </button>
        </div>
      </div>


      <div className="flex flex-col items-start" style={{ marginBottom: px(10) }}>
        {/* 左侧标签 */}
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
            flexShrink: 0,
          }}
        >
          
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
          
            Confirm Name 
        </label>
        
          {/* 右侧输入框组 */}
          <div className="flex items-center gap-2" style={{ flex: 1 ,marginTop: px(10) }}>
            <input
              type="text"
              value={thirdInput1}
              onChange={(e) => setThirdInput1(e.target.value)}
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[0] || 'Full name of the project'}
            />
            <input
              type="text"
              value={thirdInput2}
              onChange={(e) => setThirdInput2(e.target.value)}
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[1] || 'Project Engineer'}
            />
            <input
              type="text"
              value={thirdInput3}
              onChange={(e) => setThirdInput3(e.target.value)}
              style={{
                width: px(332),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[2] || 'Token Economy'}
            />
            <input
              type="text"
              value={thirdInput4}
              onChange={(e) => setThirdInput4(e.target.value)}
              style={{
                width: px(244),
                padding: px(12),
                border: `0.5px solid #000000`,
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                height: px(44),
              }}
              placeholder={inputPlaceholders[3] || 'Token abbreviation'}
            />
          
          {/* 按钮 */}
          <button
            className="cursor-pointer transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              border: `0.5px solid #000000`,
              backgroundColor: isThirdGroupFilled ? '#000000' : 'transparent',
              color: isThirdGroupFilled ? '#FFFFFF' : '#000000',
              borderRadius: px(4),
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              height: px(40),
              width: px(128),
            }}
          >
           Confirm
          </button>
        </div>
      </div>
      
    
    </div>
  )
}

