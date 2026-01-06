'use client'

import { useAtom } from 'jotai'
import { useState, useEffect } from 'react'
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
  const [stepsData, setStepsData] = useState<{ steps: Array<{ title: string }> } | null>(null)

  // 从 public 目录加载步骤数据（禁止缓存，保证改文案后能立即生效）
  useEffect(() => {
    const url = `/launchpad/steps.json?t=${Date.now()}`

    fetch(url, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setStepsData(data))
      .catch(err => console.error('Failed to load steps data:', err))
  }, [])

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber)
  }

  // 格式化标题：根据特殊符号处理换行
  // / 表示选中时换行， # 表示未选中时换行
  const formatTitle = (title: string, stepNumber: number, isActive: boolean) => {
    // 从 JSON 文件中获取带标记的标题，如果没有则使用原始标题
    const markedTitle = stepsData?.steps[stepNumber - 1]?.title || title
    
    if (isActive) {
      // 选中状态：使用 / 作为换行符，移除 #
      return markedTitle
        .replace(/#/g, '') // 移除未选中换行标记
        .replace(/\s*\/\s*/g, '\n') // 将 / 替换为换行符
        .trim()
    } else {
      // 未选中状态：使用 # 作为换行符，移除 /
      return markedTitle
        .replace(/\//g, '') // 移除选中换行标记
        .replace(/#/g, '\n') // 将 # 替换为换行符
        .trim()
    }
  }

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const formattedTitle = formatTitle(step.title, stepNumber, isActive)

        return (
          <div key={index} className="flex">
            {/* 左侧固定列：数字和连接线（顶部对齐） */}
            <div
              className="flex flex-col items-center flex-shrink-0"
              style={{ width: px(30), marginRight: px(16) }}
            >
              <div
                className="cursor-pointer"
                onClick={() => handleStepClick(stepNumber)}
                style={{
                  // 未选中状态的基础样式不变，仅在选中时放大字号
                  fontSize: isActive ? px(40) : px(30),
                  color: '#000000',
                  fontWeight: 500,
                  flexShrink: 0,
                  lineHeight: 1,
                  marginLeft: isActive ? px(-5) : 0,
                }}
              >
                {stepNumber}
              </div>

              {/* 连接线 */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    width: px(2),
                    height: px(105),
                    backgroundColor: '',
                    marginTop: 0,
                    flexShrink: 0,
                  }}
                />
              )}
            </div>

            {/* 右侧文字区域 - 强制换行 */}
            <div
              className="flex-1 cursor-pointer"
              onClick={() => handleStepClick(stepNumber)}
              style={{
                paddingTop: isActive ? px(5.5) : 0,
                color: '#000000',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: isActive ? px(20) : px(14),
                lineHeight: isActive ? px(24) : px(20), // 选中时行高增加4px (20 + 4 = 24)
                whiteSpace: 'pre-line',
                overflow: 'hidden',
                // maxWidth: px(254), // 300 - 30(数字) - 16(间距) = 254
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

