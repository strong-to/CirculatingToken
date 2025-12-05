'use client'

import { useAtom } from 'jotai'
import { px } from '@/utils/pxToRem'
import { currentStepAtom } from '@/store/atoms'

interface Step {
  title: string
  completed?: boolean
}

interface StepsBarProps {
  steps: Step[]
  space?: number
}

export default function StepsBar({ steps, space = 40 }: StepsBarProps) {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom)

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber)
  }

  // 格式化标题：为每个步骤添加强制换行逻辑
  const formatTitle = (title: string, stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        // "Basic Information Description" -> "Basic Information\nDescription"
        return title.replace(' Description', '\nDescription')
      case 2:
        // "Template Selection" -> "Template\nSelection"
        return title.replace(' Selection', '\nSelection')
      case 3:
        // "Technical Requirements Analysis" -> "Technical\nRequirements Analysis"
        return title.replace('Technical ', 'Technical\n')
      case 4:
        // "Quantification of Contribution Value" -> "Quantification of\nContribution Value"
        return title.replace(' of Contribution', ' of\nContribution')
      case 5:
        // "Allocation and Governance" -> "Allocation and\nGovernance"
        return title.replace(' Governance', '\nGovernance')
      case 6:
        // "Economic Data Estimation" -> "Economic Data\nEstimation"
        return title.replace(' Estimation', '\nEstimation')
      case 7:
        // "Project Homepage Preview" -> "Project Homepage\nPreview"
        return title.replace(' Preview', '\nPreview')
      default:
        return title
    }
  }

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        const formattedTitle = formatTitle(step.title, stepNumber)
        
        return (
          <div key={index} className="flex">
            {/* 左侧固定列：圆圈和连接线 */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: px(30), marginRight: px(16) }}>
              {/* 圆圈 */}
              <div
                className="rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => handleStepClick(stepNumber)}
                style={{
                  width: px(30),
                  height: px(30),
                  backgroundColor: isActive ? '#000000' : isCompleted ? '#000000' : 'transparent',
                  border: isActive || isCompleted ? 'none' : `2px solid #8C8C8C`,
                  color: isActive ? '#FFFFFF' : isCompleted ? '#FFFFFF' : '#8C8C8C',
                  fontSize: px(14),
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {isCompleted ? (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4678 9.55566C22.0311 9.12731 21.3298 9.13371 20.9014 9.57031L13.5439 17.0674L10.3027 13.7285L10.2334 13.6631C9.80374 13.29 9.15219 13.3015 8.73633 13.7051C8.29738 14.1312 8.28681 14.8325 8.71289 15.2715L12.7451 19.4258L12.8125 19.4893C13.2498 19.871 13.9171 19.8516 14.3311 19.4297L22.4834 11.1221L22.5469 11.0508C22.9094 10.6121 22.8814 9.96158 22.4678 9.55566Z" fill="white"/>
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              
              {/* 连接线 - 固定在圆圈下方 */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    width: px(2),
                    height: px(60),
                    backgroundColor: '#8C8C8C',
                    marginTop: 0,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
            
            {/* 右侧文字区域 - 强制换行，与圆圈顶部对齐 */}
            <div
              className="flex-1 cursor-pointer"
              onClick={() => handleStepClick(stepNumber)}
              style={{
                paddingTop: 0,
                color: '#000000',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: isActive ? px(20) : px(14),
                lineHeight: px(20),
                whiteSpace: 'pre-line',
                overflow: 'hidden',
                maxWidth: px(254), // 300 - 30(圆圈) - 16(间距) = 254
                maxHeight: px(40), // 限制为两行高度 (20px * 2)
              }}
            >
              {formattedTitle}
            </div>
          </div>
        )
      })}
    </div>
  )
}

