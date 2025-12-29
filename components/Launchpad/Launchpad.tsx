'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
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

const LAUNCHPAD_STORAGE_KEY = 'launchpad-data'
const LAUNCHPAD_STEP_KEY = 'launchpad-current-step'

// 定义各步骤的数据类型
export interface StepOneData {
  firstTextareaValue: string
  secondTextareaValue: string
}

export interface StepTwoData {
  inputValues: string[] // 4个输入框
  uploadImages: (string | null)[] // 7张图片
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
}

export interface StepFourData {
  requirementRows: RequirementRowData[] // 12行数据
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

const createDefaultLaunchpadData = (): LaunchpadData => ({
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
    economicTableValues: Array(6)
      .fill(null)
      .map(() => Array(7).fill('')),
  },
})

const mergeLaunchpadData = (incoming?: Partial<LaunchpadData>): LaunchpadData => {
  const base = createDefaultLaunchpadData()
  if (!incoming) return base
  return {
    stepOne: {
      ...base.stepOne,
      ...incoming.stepOne,
    },
    stepTwo: {
      inputValues: incoming.stepTwo?.inputValues
        ? [...incoming.stepTwo.inputValues]
        : [...base.stepTwo.inputValues],
      uploadImages: incoming.stepTwo?.uploadImages
        ? [...incoming.stepTwo.uploadImages]
        : [...base.stepTwo.uploadImages],
    },
    stepThree: {
      filterValues: { ...base.stepThree.filterValues, ...incoming.stepThree?.filterValues },
      uploadedFileInfo: incoming.stepThree?.uploadedFileInfo ?? base.stepThree.uploadedFileInfo,
      presetContent: incoming.stepThree?.presetContent ?? base.stepThree.presetContent,
    },
    stepFour: {
      requirementRows: incoming.stepFour?.requirementRows
        ? [...incoming.stepFour.requirementRows]
        : [...base.stepFour.requirementRows],
    },
    stepFive: {
      fieldValues: {
        ...base.stepFive.fieldValues,
        ...incoming.stepFive?.fieldValues,
      },
    },
    stepSix: {
      basicPricingMethod: incoming.stepSix?.basicPricingMethod ?? base.stepSix.basicPricingMethod,
      basicCustomLeftText: incoming.stepSix?.basicCustomLeftText ?? base.stepSix.basicCustomLeftText,
      basicCustomQuantities: incoming.stepSix?.basicCustomQuantities
        ? [...incoming.stepSix.basicCustomQuantities]
        : [...base.stepSix.basicCustomQuantities],
      basicCustomPrices: incoming.stepSix?.basicCustomPrices
        ? [...incoming.stepSix.basicCustomPrices]
        : [...base.stepSix.basicCustomPrices],
      advancedPricingMethod:
        incoming.stepSix?.advancedPricingMethod ?? base.stepSix.advancedPricingMethod,
      advancedCustomLeftText:
        incoming.stepSix?.advancedCustomLeftText ?? base.stepSix.advancedCustomLeftText,
      advancedCustomQuantities: incoming.stepSix?.advancedCustomQuantities
        ? [...incoming.stepSix.advancedCustomQuantities]
        : [...base.stepSix.advancedCustomQuantities],
      advancedCustomPrices: incoming.stepSix?.advancedCustomPrices
        ? [...incoming.stepSix.advancedCustomPrices]
        : [...base.stepSix.advancedCustomPrices],
      economicTableValues: incoming.stepSix?.economicTableValues
        ? incoming.stepSix.economicTableValues.map(row => [...row])
        : base.stepSix.economicTableValues.map(row => [...row]),
    },
  }
}

const hasAnyUserInput = (data: LaunchpadData): boolean => {
  if (data.stepOne.firstTextareaValue || data.stepOne.secondTextareaValue) return true
  if (data.stepTwo.inputValues.some(value => value && value.trim() !== '')) return true
  if (data.stepTwo.uploadImages.some(Boolean)) return true
  if (data.stepThree.presetContent?.trim()) return true
  if (data.stepThree.uploadedFileInfo) return true
  if (data.stepFour.requirementRows.some(row => row.quantity || row.cause || row.selectedRequirement || row.customRequirement)) return true
  if (Object.values(data.stepFive.fieldValues).some(value => value && value.trim() !== '')) return true
  if (
    data.stepSix.basicPricingMethod ||
    data.stepSix.advancedPricingMethod ||
    data.stepSix.basicCustomQuantities.some(Boolean) ||
    data.stepSix.basicCustomPrices.some(Boolean) ||
    data.stepSix.advancedCustomQuantities.some(Boolean) ||
    data.stepSix.advancedCustomPrices.some(Boolean) ||
    data.stepSix.economicTableValues.some(row => row.some(Boolean))
  ) {
    return true
  }
  return false
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
  const [isHydrated, setIsHydrated] = useState(false)

  // 统一的状态管理 - 所有步骤的数据
  const [launchpadData, setLaunchpadData] = useState<LaunchpadData>(() => createDefaultLaunchpadData())

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const savedDataRaw = window.localStorage.getItem(LAUNCHPAD_STORAGE_KEY)
      if (savedDataRaw) {
        const parsed = JSON.parse(savedDataRaw) as Partial<LaunchpadData>
        const merged = mergeLaunchpadData(parsed)
        setLaunchpadData(merged)
        if (hasAnyUserInput(merged)) {
          setShowWelcome(false)
        }
      }

      const savedStepRaw = window.localStorage.getItem(LAUNCHPAD_STEP_KEY)
      if (savedStepRaw) {
        const savedStep = Number(savedStepRaw)
        if (!Number.isNaN(savedStep) && savedStep >= 1 && savedStep <= steps.length) {
          setCurrentStep(savedStep)
          if (savedStep > 1) {
            setShowWelcome(false)
          }
        }
      }
    } catch (error) {
      console.warn('Failed to hydrate Launchpad progress', error)
    } finally {
      setIsHydrated(true)
    }
  }, [setCurrentStep])

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return
    try {
      window.localStorage.setItem(LAUNCHPAD_STORAGE_KEY, JSON.stringify(launchpadData))
    } catch (error) {
      console.warn('Failed to persist Launchpad data', error)
    }
  }, [launchpadData, isHydrated])

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return
    try {
      window.localStorage.setItem(LAUNCHPAD_STEP_KEY, String(currentStep))
    } catch (error) {
      console.warn('Failed to persist Launchpad step', error)
    }
  }, [currentStep, isHydrated])

  const clearPersistedProgress = () => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.removeItem(LAUNCHPAD_STORAGE_KEY)
      window.localStorage.removeItem(LAUNCHPAD_STEP_KEY)
    } catch (error) {
      console.warn('Failed to clear Launchpad progress', error)
    }
  }

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
      clearPersistedProgress()
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
        <div className="flex-shrink-0" style={{ width: px(240), paddingTop: px(48), position: 'sticky', top: 0, alignSelf: 'flex-start' }}>
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
