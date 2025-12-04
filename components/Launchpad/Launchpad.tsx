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
  const [currentStep] = useAtom(currentStepAtom)

  // 根据当前步骤渲染对应的组件
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FormContent currentStep={currentStep} />
      case 2:
        return <TemplateSelection />
      case 3:
        return <TechnicalRequirementsAnalysis />
      case 4:
        return <QuantificationOfContributionValue />
      case 5:
        return <AllocationAndGovernance />
      case 6:
        return <EconomicDataEstimation />
      case 7:
        return <ProjectHomepagePreview />
      default:
        return <FormContent currentStep={currentStep} />
    }
  }

  return (
    <section className="bg-white flex flex-col min-h-[calc(100vh-5.5625rem)]">
      <div className=" flex-1 flex" style={{ paddingLeft: px(30),paddingTop: px(48),paddingBottom: px(70) }}>
        {/* 左侧步骤条 */}
        <div className="flex-shrink-0" style={{ width: px(300), paddingRight: px(40) }}>
          <StepsBar steps={steps} />
        </div>
        
        {/* 右侧表单内容 - 根据步骤显示不同组件 */}
        {renderStepContent()}
      </div>
    </section>
  )
}

