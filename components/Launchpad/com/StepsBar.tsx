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

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        
        return (
          <div key={index} className="flex flex-col">
            {/* 圆圈和文字行 - 使用 flex 水平排列，垂直居中 */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleStepClick(stepNumber)}
            >
              {/* 左侧圆圈容器 */}
              <div className="flex items-center justify-center flex-shrink-0" style={{ width: px(30), marginRight: px(16), height: px(30) }}>
                {/* 步骤圆圈 */}
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: px(30),
                    height: px(30),
                    backgroundColor: isActive ? '#083FD8' : 'transparent',
                    border: isActive ? 'none' : `2px solid #8BA6F2`,
                    color: isActive ? '#FFFFFF' : '#8BA6F2',
                    fontSize: px(14),
                    fontWeight: 500,
                  }}
                >
                  {stepNumber}
                </div>
              </div>
              
              {/* 步骤标题 - 使用 flex 垂直居中，高度与圆圈一致 */}
              <div
                className="flex-1 flex items-center"
                style={{
                  height: px(30),
                  color: isActive ? '#000000' : '#888888',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: px(20),
                }}
              >
                {step.title}
              </div>
            </div>
            
            {/* 连接线 - 单独一行，使用 flex 布局 */}
            {index < steps.length - 1 && (
              <div className="flex items-center" style={{ height: px(60) }}>
                <div
                  className="flex-shrink-0"
                  style={{
                    width: px(2),
                    height: px(60),
                    backgroundColor: '#8BA6F2',
                    marginLeft: px(15), // 圆圈中心位置 (30/2 = 15)
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

