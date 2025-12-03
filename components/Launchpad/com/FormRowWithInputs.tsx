'use client'

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
            className="cursor-pointer active:bg-[#083FD8] active:!text-white transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              width: px(128),
              border: `0.5px solid #083FD8`,
              borderRadius: px(4),
              color: '#083FD8',
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
            className="cursor-pointer active:bg-[#083FD8] active:!text-white transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              width: px(128),
              border: `0.5px solid #083FD8`,
              borderRadius: px(4),
              color: '#083FD8',
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
            className="cursor-pointer active:bg-[#083FD8] active:!text-white transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              border: `0.5px solid #083FD8`,
              borderRadius: px(4),
              color: '#083FD8',
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

