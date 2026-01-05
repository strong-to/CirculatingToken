'use client'

import { useState, useEffect, useMemo } from 'react'
import { useAtom } from 'jotai'
import { useSearchParams } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import StepsBar from './com/StepsBar'
import StepOne from './com/StepOne'
import StepTwo from './com/StepTwo'
import StepThree from './com/StepThree'
import StepFour from './com/StepFour'
import StepFive from './com/StepFive'
import StepSix from './com/StepSix'
import StepSeven from './com/StepSeven'
import WelcomePage from './com/WelcomePage/WelcomePage'
import SuccessPage from './com/SuccessPage'
import { currentStepAtom } from '@/store/atoms'
import type { RequirementRowData } from './com/RequirementRow'
import type { UploadedFileInfo } from '@/utils/fileUpload'
import { launchpadMap } from '@/app/data'

// 定义各步骤的数据类型
export interface StepOneData {
  firstTextareaValue: string
  secondTextareaValue: string
  texts?: {
    title: string
    purposeLabel: string
    purposeHelp: string
    functionSortingLabel: string
    functionSortingHelp: string
    textarea1Placeholder: string
    textarea2Placeholder: string
    nextButton: string
  }
}

export interface StepTwoData {
  inputValues: string[] // 4个输入框
  uploadImages: (string | null)[] // 7张图片
  texts?: {
    title: string
    projectNameSection: {
      label: string
      description: string
      refreshButton: string
      inputPlaceholders: {
        fullProjectName: string
        shortProjectName: string
        fullTokenName: string
        shortTokenName: string
      }
    }
    logoSection: {
      label: string
      description: string
      refreshButton: string
      uploadLabels: {
        logo: string
        image: string
      }
    }
    nextButton: string
  }
  imageGroups?: Array<{
    logo: string
    [key: string]: string
  }>
}

export interface StepThreeData {
  filterValues: {
    interactionForm?: string
    domain?: string
    object?: string
    action?: string
    sortBy?: string
    search?: string
  }
  uploadedFileInfo: UploadedFileInfo | null
  presetContent: string
  texts?: {
    title: string
    modelSelectionSection: {
      label: string
      description: string
    }
    uploadSection: {
      label: string
      description: string
      refreshButton: string
    }
    nextButton: string
  }
  presetContentTemplates?: string[]
}

export interface StepFourData {
  requirementRows: RequirementRowData[] // 12行数据
  texts?: {
    title: string
    description: string
    refreshButton: string
    nextButton: string
  }
  requirementOptions?: string[]
  requirementUnitMap?: Record<string, string>
}

export interface StepFiveData {
  fieldValues: {
    founderTokenProportion: string
    proposalInitiationTokenProportion: string
    adjustmentPassRateOfContributionWeight: string
    passiveResponsePassRate: string
    adjustmentPassRateOfMintingIndex: string
    projectLiquidationPassRate: string
    tokenMintingQuantityPerPhase: string
    tokenMintingIncrementalDifference: string
    tokenMintingIndex: string
    aaa: string
    bbb: string
    ccc: string
  }
  texts?: {
    title: string
    description: string
    refreshButton: string
    nextButton: string
  }
  fieldLabels?: {
    leftColumn: string[]
    rightColumn: string[]
  }
}

export interface StepSixData {
  basicPricingMethod: string
  basicCustomLeftText: string
  basicCustomQuantities: string[]
  basicCustomPrices: string[]
  advancedPricingMethod: string
  advancedCustomLeftText: string
  advancedCustomQuantities: string[]
  advancedCustomPrices: string[]
  economicTableValues: string[][] // 6行 x 7列
  texts?: {
    title: string
    feeStandardSection: {
      label: string
      description: string
      refreshButton: string
    }
    economicDataSection: {
      label: string
      description: string
      refreshButton: string
    }
    nextButton: string
  }
  pricingOptions?: string[]
  pricingMethodLabels?: {
    placeholder: string
    quantityUnit: string
    price: string
    pricePlaceholder: string
  }
  tableLabels?: {
    basicFunctions: string
    advancedFunctions: string
    accountColumn: string
    monthColumns: string[]
    accountRows: string[]
  }
  pricingMethodData?: {
    bySubscriptionDuration: [string, string][]
    byAchievedResults: [string, string][]
    byConsumedResources: [string, string][]
  }
}

// 所有步骤的数据
export interface LaunchpadData {
  stepOne: StepOneData
  stepTwo: StepTwoData
  stepThree: StepThreeData
  stepFour: StepFourData
  stepFive: StepFiveData
  stepSix: StepSixData
}

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
  const [showSuccess, setShowSuccess] = useState(false)
  const searchParams = useSearchParams()
  const launchpadId = searchParams.get('launchpad_id') || 'LAUNCHPAD0000001'

  // 从 JSON 数据中获取初始数据
  const initialData = useMemo(() => {
    const launchpadItem = launchpadMap[launchpadId]
    if (launchpadItem?.data) {
      return launchpadItem.data
    }
    // 如果没有找到数据，返回默认值
    return {
      stepOne: {
        firstTextareaValue: '',
        secondTextareaValue: '',
      },
    stepTwo: {
      inputValues: ['', '', '', ''],
      uploadImages: Array(7).fill(null),
    },
    stepThree: {
      filterValues: {},
      uploadedFileInfo: null,
      presetContent: '',
    },
    stepFour: {
      requirementRows: Array.from({ length: 12 }, () => ({
        selectedRequirement: '',
        selectedUnit: '',
        customRequirement: '',
        customUnit: '',
        quantity: '',
        cause: '',
      })),
    },
    stepFive: {
      fieldValues: {
        founderTokenProportion: '',
        proposalInitiationTokenProportion: '',
        adjustmentPassRateOfContributionWeight: '',
        passiveResponsePassRate: '',
        adjustmentPassRateOfMintingIndex: '',
        projectLiquidationPassRate: '',
        tokenMintingQuantityPerPhase: '',
        tokenMintingIncrementalDifference: '',
        tokenMintingIndex: '',
        aaa: '',
        bbb: '',
        ccc: '',
      },
    },
    stepSix: {
      basicPricingMethod: '',
      basicCustomLeftText: '',
      basicCustomQuantities: ['', '', '', ''],
      basicCustomPrices: ['', '', '', ''],
      advancedPricingMethod: '',
      advancedCustomLeftText: '',
      advancedCustomQuantities: ['', '', '', ''],
      advancedCustomPrices: ['', '', '', ''],
      economicTableValues: Array(6).fill(null).map(() => Array(7).fill('')),
    },
    }
  }, [launchpadId])

  // 统一的状态管理 - 所有步骤的数据，从 JSON 数据初始化
  const [launchpadData, setLaunchpadData] = useState<LaunchpadData>(initialData)

  // 当 launchpadId 变化时，更新数据
  useEffect(() => {
    setLaunchpadData(initialData)
  }, [initialData])

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
    } else {
      // 所有步骤完成后显示成功页
      setShowSuccess(true)
    }
  }

  // 更新各步骤数据的函数
  const updateStepOneData = (data: Partial<StepOneData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepOne: { ...prev.stepOne, ...data },
    }))
  }

  const updateStepTwoData = (data: Partial<StepTwoData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepTwo: { ...prev.stepTwo, ...data },
    }))
  }

  const updateStepThreeData = (data: Partial<StepThreeData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepThree: { ...prev.stepThree, ...data },
    }))
  }

  const updateStepFourData = (data: Partial<StepFourData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepFour: { ...prev.stepFour, ...data },
    }))
  }

  const updateStepFiveData = (data: Partial<StepFiveData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepFive: { ...prev.stepFive, ...data },
    }))
  }

  const updateStepSixData = (data: Partial<StepSixData>) => {
    setLaunchpadData(prev => ({
      ...prev,
      stepSix: { ...prev.stepSix, ...data },
    }))
  }

  // 根据当前步骤渲染对应的组件
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            currentStep={currentStep}
            onEnter={handleNextStep}
            data={launchpadData.stepOne}
            onDataChange={updateStepOneData}
          />
        )
      case 2:
        return (
          <StepTwo
            onEnter={handleNextStep}
            data={launchpadData.stepTwo}
            onDataChange={updateStepTwoData}
          />
        )
      case 3:
        return (
          <StepThree
            onEnter={handleNextStep}
            data={launchpadData.stepThree}
            onDataChange={updateStepThreeData}
          />
        )
      case 4:
        return (
          <StepFour
            onEnter={handleNextStep}
            data={launchpadData.stepFour}
            onDataChange={updateStepFourData}
          />
        )
      case 5:
        return (
          <StepFive
            onEnter={handleNextStep}
            data={launchpadData.stepFive}
            onDataChange={updateStepFiveData}
          />
        )
      case 6:
        return (
          <StepSix
            onEnter={handleNextStep}
            data={launchpadData.stepSix}
            onDataChange={updateStepSixData}
          />
        )
      case 7:
        return (
          <StepSeven
            onEnter={handleNextStep}
            launchpadData={launchpadData}
          />
        )
      default:
        return (
          <StepOne
            currentStep={currentStep}
            onEnter={handleNextStep}
            data={launchpadData.stepOne}
            onDataChange={updateStepOneData}
          />
        )
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

  // 所有步骤完成后的成功页
  if (showSuccess) {
    return (
      <section className="bg-white flex flex-col min-h-[calc(100vh-4.5rem)]">
        <SuccessPage />
      </section>
    )
  }

  // 否则显示正常的步骤流程
  return (
    <section className="bg-white flex flex-col" style={{ height: 'calc(100vh - 4.5rem)' }}>
      <div className="flex-1 flex overflow-hidden" style={{ paddingLeft: px(30) }}>
        {/* 左侧步骤条 - 固定不滚动 */}
        <div 
          className="flex-shrink-0 scrollbar-hide" 
          style={{ 
            width: px(240), 
            paddingTop: px(48), 
            position: 'sticky', 
            top: 0, 
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 4.5rem)',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <StepsBar steps={steps} />
        </div>
        
        {/* 右侧表单内容 - 可滚动 */}
        <div
          key={currentStep}
          className="step-content-transition flex-1 overflow-y-auto scrollbar-hide"
          style={{
            willChange: 'opacity, transform',
            height: 'calc(100vh - 4.5rem)',
            paddingTop: px(45),
            paddingRight: px(260),
            paddingBottom: px(120)
          }}
        >
        
          {renderStepContent()}
        </div>

      </div>
    </section>
  )
}

