'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import FormRowWithInputs from './FormRowWithInputs'
import LogoPromotionalMaterials from './LogoPromotionalMaterials'

interface FormContentProps {
  currentStep: number
  onEnter?: () => void
}

export default function FormContent({ currentStep, onEnter }: FormContentProps) {
  const [firstTextareaValue, setFirstTextareaValue] = useState('')
  const [secondTextareaValue, setSecondTextareaValue] = useState('')
  
  // 第一个组件的图片列表（用于随机调换）
  const defaultImages = [
    '/launchpad/LogoPromotionalMaterials/img/logo.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask1.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask2.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask3.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask4.png',
    '/launchpad/LogoPromotionalMaterials/img/Mask5.png',
  ]
  const [firstComponentImages, setFirstComponentImages] = useState<string[]>(defaultImages)
  
  // 第二个和第三个组件的图片列表（初始为空，让用户上传）
  const [secondComponentImages, setSecondComponentImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  )
  const [thirdComponentImages, setThirdComponentImages] = useState<(string | null)[]>(
    Array(6).fill(null)
  )

  // 处理第一个按钮点击 - 随机调换图片位置（第一个logo保持不变）
  const handleRenovateClick = () => {
    const shuffled = [...firstComponentImages]
    // 保持第一个元素（logo）不变，只打乱后面的5个元素
    // Fisher-Yates 洗牌算法，从索引1开始
    for (let i = shuffled.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i - 1 + 1)) + 1; // j 的范围是 [1, i]
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setFirstComponentImages(shuffled)
  }

  // 处理第二个按钮点击
  const handleSubmitClick = () => {
    console.log('Submit clicked')
    // 在这里添加 Submit 按钮的逻辑
  }

  // 处理第三个按钮点击
  const handleConfirmClick = () => {
    console.log('Confirm clicked')
    // 在这里添加 Confirm 按钮的逻辑
  }

  return (
    <div className="flex-1" style={{paddingRight:px(280)}} >
     <div className="flex  flex-col  items-center justify-between" style={{ marginTop: px(5), marginBottom: px(30), width:px(586)}}>
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
       Basic Information Description
      </div>
      <div style={{width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)',marginTop: px(-15)}}></div>
     </div>
      
      
      {/* 表单内容区域 */}
      <div className="">
        {/* Function Description */}
        <div>
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
              marginBottom: px(10),
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: px(-4) }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
            Function Description
          </label>
          <textarea
            className="rounded w-full"
            value={firstTextareaValue}
            onChange={(e) => setFirstTextareaValue(e.target.value)}
            style={{
              
              minHeight: px(170),
              padding: px(12),
              border: `0.5px solid #000000`,
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(14),
              resize: 'vertical',
            }}
            placeholder="Please enter"
          />
        </div>
        
        {/* 按钮 */}
        <div className="flex items-center justify-center w-full" style={{marginTop: px(30),}}>
          <button
            className="cursor-pointer transition-colors"
            onClick={() => setSecondTextareaValue(firstTextareaValue)}
            style={{
              // width: px(720), 
              
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              paddingTop: px(11),
              paddingBottom: px(11),
              paddingLeft: px(38),
              paddingRight: px(38),
              border: `0.5px solid #000000`,
              backgroundColor: firstTextareaValue.trim() ? '#000000' : 'transparent',
              color: firstTextareaValue.trim() ? '#FFFFFF' : '#000000',
              borderRadius: px(4),
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Submit
          </button>
        </div>
      </div>



      <div className="" style={{ marginTop: px(40) }}>
        {/* Function Description */}
        <div>
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
              marginBottom: px(10),
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: px(-4) }}>
              <path d="M8.64078 8.84354L7.11974 10L4.95146 6.80272L2.81553 9.96599L1.2945 8.80952L3.52751 5.68027L0 4.52381L0.582524 2.61905L4.11003 3.91157L4.07767 0H5.95469L5.88997 3.94558L9.41748 2.68707L10 4.55782L6.44013 5.71429L8.64078 8.84354Z" fill="#FF0000"/>
            </svg>
            Function Description
          </label>
          <textarea
            className="rounded w-full"
            value={secondTextareaValue}
            readOnly
            style={{
              minHeight: px(170),
              padding: px(12),
              border: `0.5px solid #000000`,
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(14),
              resize: 'vertical',
              // backgroundColor: '#F5F5F5',
              cursor: 'default',
              outline: 'none',
            }}
            placeholder="Content will be generated after submitting above form"
          />
        </div>
        
        {/* 按钮 */}
        <div className="flex items-center justify-center w-full" style={{ marginTop: px(30) }}>
          <button
            className="cursor-pointer transition-colors"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              paddingTop: px(11),
              paddingBottom: px(11),
              paddingLeft: px(38),
              paddingRight: px(38),
              border: `0.5px solid #000000`,
              backgroundColor: secondTextareaValue.trim() ? '#000000' : 'transparent',
              color: secondTextareaValue.trim() ? '#FFFFFF' : '#000000',
              borderRadius: px(4),
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
           Confirm
          </button>
        </div>
      </div>

      <FormRowWithInputs
        label="Function Description"
        showAsterisk={false}
        inputPlaceholders={['Full name of the project', 'Project Engineer', 'Token Economy', 'Token abbreviation']}
        buttonText="Renovate"
        textareaPlaceholder="Full name of the project"
      />


      {/* Recommended LOGO and Promotional Materials 部分 */}
      <LogoPromotionalMaterials
        hasAsterisk={false}
        buttonText="Renovate"
        allowEdit={false}
        images={firstComponentImages}
        onButtonClick={handleRenovateClick}
      />
      
      <LogoPromotionalMaterials
        hasAsterisk={false}
        buttonText="Submit"
        allowEdit={true}
        images={secondComponentImages}
        onImagesChange={setSecondComponentImages}
        onButtonClick={handleSubmitClick}
      />
      
      <LogoPromotionalMaterials
        hasAsterisk={true}
        buttonText="Confirm"
        allowEdit={true}
        images={thirdComponentImages}
        onImagesChange={setThirdComponentImages}
        onButtonClick={handleConfirmClick}
      />

       {/* 底部 Enter 按钮 */}
     <div className="flex items-center justify-center " style={{ marginTop: px(60)}}>
     <button
       className="cursor-pointer"
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
         marginRight: px(5)
       }}
     >
       Save
     </button>
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
       Next
     </button>
   </div>
      
     

    </div>
  )
}

