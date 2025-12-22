'use client'

import { useState } from 'react'
import { useAtom } from 'jotai'
import { px } from '@/utils/pxToRem'
import StepsBar from './com/StepsBar'
import FormContent from './com/FormContent'
import TemplateSelection from './com/TemplateSelection'
import TechnicalRequirementsAnalysis from './com/TechnicalRequirementsAnalysis'
import QuantificationOfContributionValue from './com/QuantificationOfContributionValue'
import AllocationAndGovernance from './com/AllocationAndGovernance'
import EconomicDataEstimation from './com/EconomicDataEstimation'
import ProjectHomepagePreview from './com/ProjectHomepagePreview'
import WelcomePage from './com/WelcomePage/WelcomePage'
import { currentStepAtom } from '@/store/atoms'

const steps = [
  { title: 'Purpose Description and Function Sorting' }, // UI: 三行
  { title: 'Naming and Brand Image Establishment' }, // UI: 两行
  { title: 'Model Selection and Technical Documentation Compilation' }, // UI: 两行
  { title: 'Construction Requirements and Contribution Quantification' }, // UI: 两行
  { title: 'Rights Allocation and Project Governance' }, // UI: 两行
  { title: 'Fee Standards and Economic Data Estimation' }, // UI: 两行
  { title: 'Preview and Release' }, // UI: 两行
]

export default function Launchpad() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom)
  const [showWelcome, setShowWelcome] = useState(true)

  // 处理开始按钮点击
  const handleStart = () => {
    setShowWelcome(false)
    // 确保从第一步开始
    if (currentStep === 0) {
      setCurrentStep(1)
    }
  }

  // 切换到下一步
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  // 根据当前步骤渲染对应的组件
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FormContent currentStep={currentStep} onEnter={handleNextStep} />
      case 2:
        return <TemplateSelection onEnter={handleNextStep} />
      case 3:
        return <TechnicalRequirementsAnalysis onEnter={handleNextStep} />
      case 4:
        return <QuantificationOfContributionValue onEnter={handleNextStep} />
      case 5:
        return <AllocationAndGovernance onEnter={handleNextStep} />
      case 6:
        return <EconomicDataEstimation onEnter={handleNextStep} />
      case 7:
        return <ProjectHomepagePreview onEnter={handleNextStep} />
      default:
        return <FormContent currentStep={currentStep} onEnter={handleNextStep} />
    }
  }

  // 如果显示欢迎页，只显示欢迎页
  if (showWelcome) {
    return (
      <section className="bg-white flex flex-col min-h-[calc(100vh-4.5rem)]">
        <WelcomePage onStart={handleStart} />
      </section>
    )
  }

  // 否则显示正常的步骤流程
  return (
    <section className="bg-white flex flex-col min-h-[calc(100vh-4.5rem)]">
      <div className=" flex-1 flex overflow-hidden" style={{ paddingLeft: px(30) }}>
        {/* 左侧步骤条 - 固定不滚动 */}
        <div className="flex-shrink-0" style={{ width: px(300), paddingRight: px(40), paddingTop: px(48), position: 'sticky', top: 0, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 4.5rem - 70px)' }}>
          <StepsBar steps={steps} />
        </div>
        
        {/* 右侧表单内容 - 可滚动 */}
        <div
          key={currentStep}
          className="step-content-transition flex-1 overflow-y-auto scrollbar-hide"
          style={{
            willChange: 'opacity, transform',
            maxHeight: 'calc(100vh - 4.5rem - 70px)',
            paddingTop: px(48),
          }}
        >
          {renderStepContent()}
        </div>
      </div>
    </section>
  )
}

