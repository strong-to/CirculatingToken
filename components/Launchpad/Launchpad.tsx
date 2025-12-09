'use client'

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
import { currentStepAtom } from '@/store/atoms'

const steps = [
  { title: 'Basic Information Description' },
  { title: 'Template Selection' },
  { title: 'Technical Requirements Analysis' },
  { title: 'Quantification of Contribution Value' },
  { title: 'Allocation and Governance' },
  { title: 'Economic Data Estimation' },
  { title: 'Project Homepage Preview' },
]

export default function Launchpad() {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom)

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

  return (
    <section className="bg-white flex flex-col min-h-[calc(100vh-4.5rem)]">
      <div className=" flex-1 flex overflow-hidden" style={{ paddingLeft: px(30),paddingTop: px(48) }}>
        {/* 左侧步骤条 - 固定不滚动 */}
        <div className="flex-shrink-0" style={{ width: px(300), paddingRight: px(40), position: 'sticky', top: px(48), alignSelf: 'flex-start', maxHeight: 'calc(100vh - 4.5rem - 48px - 70px)' }}>
          <StepsBar steps={steps} />
        </div>
        
        {/* 右侧表单内容 - 可滚动 */}
        <div
          key={currentStep}
          className="step-content-transition flex-1 overflow-y-auto scrollbar-hide"
          style={{
            willChange: 'opacity, transform',
            maxHeight: 'calc(100vh - 4.5rem - 48px - 70px)',
          }}
        >
          {renderStepContent()}
        </div>
      </div>
    </section>
  )
}

