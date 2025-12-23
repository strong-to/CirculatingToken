'use client'

import { useState, useEffect } from 'react'
import { px } from '@/utils/pxToRem'

interface StepOneProps {
  currentStep: number
  onEnter?: () => void
}

// 默认文案（作为回退），实际文案从 public/launchpad/stepOne/texts.json 加载
const defaultTexts = {
  title: 'Purpose Description and Function Sorting',
  purposeLabel: 'Purpose Description',
  purposeHelp:
    'Please enter the prompt information in the following text box, or click the control button on the right to let the AI help you complete the relevant work. The AI can provide this service for 5 times.',
  functionSortingLabel: 'Function Sorting',
  functionSortingHelp:
    'The AI will generate an understandable manuscript in real time in the following text box based on the information you input for your confirmation',
  textarea1Placeholder:
    'The plan you are going to implement, the conception, the goal you want to achieve, or just a simple idea',
  textarea2Placeholder: 'The AI will generate content here based on the plan above',
  nextButton: 'Next',
}

type StepOneTexts = typeof defaultTexts

export default function StepOne({ currentStep, onEnter }: StepOneProps) {
  const [firstTextareaValue, setFirstTextareaValue] = useState('')
  const [secondTextareaValue, setSecondTextareaValue] = useState('')
  const [isNextHovered, setIsNextHovered] = useState(false)
  const [texts, setTexts] = useState<StepOneTexts>(defaultTexts)

  // 从 public 目录加载文案
  useEffect(() => {
    const url = `/launchpad/stepOne/texts.json?t=${Date.now()}`
    fetch(url, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setTexts({ ...defaultTexts, ...data }))
      .catch(() => {
        // 加载失败时使用默认文案
        setTexts(defaultTexts)
      })
  }, [])

  // 根据上方输入生成下方文案（目前先保持相同，后续可以在这里做加工）
  const generateFunctionSortingText = (input: string) => {
    return input
  }

  return (
    <div className="flex-1" style={{paddingRight:px(280)}} >
       <div className="flex  flex-col  items-center justify-between" style={{ marginTop: px(5), marginBottom: px(80), width:px(815)}}>
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
       {texts.title}
      </div>
      <div style={{width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)',marginTop: px(-15)}}></div>
     </div>
      
      
      {/* 表单内容区域 */}
      <div className="">
        {/* Function Description */}
        <div style={{marginBottom: px(82)}}>
          <div style={{marginBottom: px(20)}}>
            <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }}>{texts.purposeLabel}</span>
              {texts.purposeHelp}
            </div>

              <div>
              
              </div>
          </div>
          <textarea
            className="rounded w-full"
            value={firstTextareaValue}
            onChange={(e) => {
              const value = e.target.value
              setFirstTextareaValue(value)
              setSecondTextareaValue(generateFunctionSortingText(value))
            }}
            style={{
              minHeight: px(170),
              padding: px(12),
              border: `0.5px solid #000000`,
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(14),
              resize: 'vertical',
            }}
            placeholder={texts.textarea1Placeholder}
          />
        </div>
        

        <div>
          <div style={{marginBottom: px(20)}}>
            <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }}>{texts.functionSortingLabel}</span>
              {texts.functionSortingHelp}
            </div>

              <div>
              
              </div>
          </div>
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
              cursor: 'default',
              outline: 'none',
            }}
            placeholder={texts.textarea2Placeholder}
          />
        </div>
        




      </div>

      {/* <FormRowWithInputs
        label="Function Description"
        showAsterisk={false}
        inputPlaceholders={['Full name of the project', 'Project Engineer', 'Token Economy', 'Token abbreviation']}
        buttonText="Renovate"
        textareaPlaceholder="Full name of the project"
      />


     
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
      /> */}

       {/* 底部 Enter 按钮 */}
     <div className="flex items-center justify-center" style={{ marginTop: px(60) }}>
     <button
       className="cursor-pointer"
       onClick={onEnter}
       style={{
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontStyle: 'normal',
         fontSize: px(14),
         lineHeight: '100%',
         letterSpacing: '0%',
         width: px(230),
         height: px(40),
         backgroundColor: isNextHovered ? '#000000' : '#FFFFFF',
         borderRadius: px(4),
         color: isNextHovered ? '#FFFFFF' : '#000000',
         border: `${px(1)} solid #000000`,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
       }}
       onMouseEnter={() => setIsNextHovered(true)}
       onMouseLeave={() => setIsNextHovered(false)}
     >
       <span suppressHydrationWarning>{texts.nextButton}</span>
     </button>
   </div>
      
     

    </div>
  )
}

