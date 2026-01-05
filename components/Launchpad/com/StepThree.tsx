'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import { StepTitleBar, StepNextButton } from './StepCommon'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
import ModelCardSlider from './StepThree/ModelCardSlider'
import FileUploadArea from './StepThree/FileUploadArea'
import type { UploadedFileInfo } from '@/utils/fileUpload'

// 带下拉框的输入组件：左边输入框 + 右边81px下拉框
interface RequirementInputProps {
  label: string
  inputValue: string
  dropdownValue: string
  options: string[]
  onInputChange: (value: string) => void
  onDropdownChange: (value: string) => void
  readonly?: boolean
}

function RequirementInput({ label, inputValue, dropdownValue, options, onInputChange, onDropdownChange, readonly = false }: RequirementInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`mask-${Math.random().toString(36).substr(2, 9)}`).current

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="flex flex-col" style={{ width: px(241),marginRight: px(15)}}>
      <div className="flex" style={{ gap: 0 }}>
        {/* 左边输入框 */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={label || 'Please enter.'}
          readOnly={readonly}
          tabIndex={readonly ? -1 : 0}
          style={{
            flex: 1,
            height: px(44),
            paddingLeft: px(12),
            paddingRight: px(12),
            border: `0.5px solid #000000`,
            borderRight: 'none',
            borderTopLeftRadius: px(4),
            borderBottomLeftRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(12),
            color: readonly && !inputValue ? '#000000' : '#000000',
            backgroundColor: '#FFFFFF',
            outline: 'none',
            cursor: readonly ? 'default' : 'text',
          }}
          className={readonly ? 'readonly-input' : ''}
        />
        
        {/* 右边81px下拉框 */}
        <div className="relative" ref={dropdownRef} style={{ width: px(81) }}>
          <div
            className="flex items-center  justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: px(91),
              height: px(44),
              paddingLeft: px(10),
              paddingRight: px(10),
              border: `0.5px solid #000000`,
              borderTopRightRadius: px(4),
              borderBottomRightRadius: px(4),
              backgroundColor: '#FFFFFF',
            }}
          >
            <span
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(12),
                color: '#000000',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                marginRight: px(6),
              }}
            >
              {dropdownValue || ''}
            </span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ 
                flexShrink: 0,
                transform: `translateY(-${px(2)}) rotate(${isOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s ease',
              }}
            >
              <mask id={maskId} fill="white">
                <path d="M16.1998 5.39844L8.99983 12.5984L1.7998 5.39844"/>
              </mask>
              <path d="M8.99983 12.5984L8.29273 13.3055L8.99983 14.0127L9.70694 13.3055L8.99983 12.5984ZM16.1998 5.39844L15.4927 4.69133L8.29272 11.8913L8.99983 12.5984L9.70694 13.3055L16.9069 6.10554L16.1998 5.39844ZM8.99983 12.5984L9.70694 11.8913L2.50691 4.69133L1.7998 5.39844L1.0927 6.10555L8.29273 13.3055L8.99983 12.5984Z" fill="black" mask={`url(#${maskId})`}/>
            </svg>
          </div>
          
          {isOpen && options.length > 0 && (
            <div
              className="absolute z-50 dropdown-menu"
              style={{
                width: px(81),
                marginTop: px(4),
                backgroundColor: '#FFFFFF',
                border: `0.5px solid #E4E7ED`,
                borderRadius: px(4),
                boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                right: 0,
              }}
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onDropdownChange(option)
                    setIsOpen(false)
                  }}
                  className="cursor-pointer transition-colors"
                  style={{
                    padding: `${px(10)} ${px(8)}`,
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(12),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: dropdownValue === option ? '#FFFFFF' : '#000000',
                    backgroundColor: dropdownValue === option ? '#000000' : '#FFFFFF',
                    textAlign: 'center',
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface StepThreeProps {
  onEnter?: () => void
  previewMode?: boolean
  data?: import('../Launchpad').StepThreeData
  onDataChange?: (data: Partial<import('../Launchpad').StepThreeData>) => void
}

export default function StepThree({ onEnter, previewMode, data, onDataChange }: StepThreeProps = {} as StepThreeProps) {
  const [firstTextareaValue, setFirstTextareaValue] = useState('')
  const [secondTextareaValue, setSecondTextareaValue] = useState('')
  const [uploadedFileInfo, setUploadedFileInfo] = useState<UploadedFileInfo | null>(data?.uploadedFileInfo || null)
  const [isNextHovered, setIsNextHovered] = useState(false)
  const [isRefreshClicked, setIsRefreshClicked] = useState(false)
  const [presetContent, setPresetContent] = useState<string>(data?.presetContent || '')
  
  // 从 data.texts 获取文案，如果没有则使用默认值
  const texts = data?.texts || {
    title: "Model Selection and Technical Documentation Compilation",
    modelSelectionSection: {
      label: "Type Template Selection",
      description: "Please select one of the AI-recommended models as the project framework, or you can sort out the model selection scope through the screening menu below"
    },
    uploadSection: {
      label: "Type Template Selection",
      description: "Please upload materials according to the prompt information in the following frame, or click the control button on the right to let the AI help you complete the relevant work. Note: The AI can provide this service for once",
      refreshButton: "Refresh"
    },
    nextButton: "Next"
  }

  // 同步外部数据变化
  useEffect(() => {
    if (data) {
      setUploadedFileInfo(data.uploadedFileInfo)
      setPresetContent(data.presetContent)
    }
  }, [data])


  const [viewMode, setViewMode] = useState<'Number of Users' | 'Latest Contribution'>('Latest Contribution')
  
  const [recommendedValues, setRecommendedValues] = useState({
    gpuComputing: { input: '', dropdown: '100,000' },
    dataAnnotation1: { input: '', dropdown: '200,000' },
    systemArchitecture: { input: '', dropdown: '15,000' },
    systemTesting: { input: '', dropdown: '200,000' },
    languageModel: { input: '', dropdown: '500,000' },
    dataAnnotation2: { input: '', dropdown: '200,000' },
    interactionDesign: { input: '', dropdown: '500' },
    visualDesign: { input: '', dropdown: '1000' },
  })
  
  const [confirmRequirementsValues, setConfirmRequirementsValues] = useState({
    field1: { input: '', dropdown: '100,000' },
    field2: { input: '', dropdown: '200,000' },
    field3: { input: '', dropdown: '15,000' },
    field4: { input: '', dropdown: '200,000' },
    field5: { input: '', dropdown: '200,000' },
    field6: { input: '', dropdown: '500,000' },
    field7: { input: '', dropdown: '200,000' },
    field8: { input: '', dropdown: '500' },
    field9: { input: '', dropdown: '1000' },
    field10: { input: '', dropdown: '1000' },
  })
  
  const [confirmValues, setConfirmValues] = useState({
    field1: { input: '', dropdown: '100,000' },
    field2: { input: '', dropdown: '200,000' },
    field3: { input: '', dropdown: '15,000' },
    field4: { input: '', dropdown: '200,000' },
    field5: { input: '', dropdown: '200,000' },
    field6: { input: '', dropdown: '500,000' },
    field7: { input: '', dropdown: '200,000' },
    field8: { input: '', dropdown: '500' },
    field9: { input: '', dropdown: '1000' },
    field10: { input: '', dropdown: '1000' },
  })
  
  // 检查 Confirm Requirements 部分所有输入框是否都有值
  const isConfirmRequirementsFilled = () => {
    const fields = Object.values(confirmRequirementsValues)
    return fields.every(field => field.input.trim() !== '' && field.dropdown.trim() !== '')
  }
  
  // 检查 Confirm 部分所有输入框是否都有值
  const isConfirmFilled = () => {
    const fields = Object.values(confirmValues)
    return fields.every(field => field.input.trim() !== '' && field.dropdown.trim() !== '')
  }
  
  // 生成随机文字内容
  const generateRandomContent = () => {
    // 从 JSON 数据中获取预设内容模板，如果没有则使用默认值
    const paragraphs = data?.presetContentTemplates || [
      'This document outlines the technical specifications and requirements for the AI project development.',
      'The project aims to create an innovative solution that leverages advanced machine learning algorithms to solve complex problems.',
      'Key components include data preprocessing, model training, and deployment infrastructure.',
      'We will utilize state-of-the-art neural network architectures to achieve optimal performance.',
      'The development process will follow agile methodologies with regular iterations and feedback cycles.',
      'Quality assurance measures will be implemented throughout the project lifecycle.',
      'Documentation and code reviews are essential for maintaining high standards.',
      'The team will collaborate closely to ensure seamless integration of all system components.',
    ]
    
    // 随机选择3-5段文字
    const numParagraphs = Math.floor(Math.random() * 3) + 3
    const selectedParagraphs = []
    for (let i = 0; i < numParagraphs; i++) {
      const randomIndex = Math.floor(Math.random() * paragraphs.length)
      selectedParagraphs.push(paragraphs[randomIndex])
    }
    
    return selectedParagraphs.join('\n\n')
  }

  // 处理 Refresh 按钮点击
  const handleRefreshClick = () => {
    if (!isRefreshClicked) {
      const randomContent = generateRandomContent()
      setPresetContent(randomContent)
      setIsRefreshClicked(true)
      onDataChange?.({ presetContent: randomContent })
    }
  }

  return (
    <>
      {!previewMode && (
        <StepTitleBar
          title={texts.title}
          barColor="rgba(132, 0, 249, 0.65)"
          width={1197}
          marginTop={5}
          marginBottom={82}
        />
      )}








 <div style={{marginBottom: px(60)}}>



      <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }} suppressHydrationWarning>
              {texts.modelSelectionSection.label}
                </span>
                <span suppressHydrationWarning>
                {texts.modelSelectionSection.description}
                </span>
            </div>

      
          </div>



          <div style={{marginBottom: px(30)}}>
          <FilterSection 
            onViewChange={previewMode ? undefined : setViewMode}
            onFilterChange={previewMode ? undefined : (filterValues) => {
              onDataChange?.({ filterValues })
            }}
            initialFilterValues={data?.filterValues}
            previewMode={previewMode}
          />
          </div>

          <div style={{marginBottom: px(82)}}>
            
          <ModelCardSlider previewMode={previewMode} />
          </div>





          <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }} suppressHydrationWarning>
              {texts.uploadSection.label}
                </span>
                <span suppressHydrationWarning>
                {texts.uploadSection.description}
                </span>
            </div>

            {!previewMode && (
              <div
                  onClick={handleRefreshClick}
                  style={{
                    height: px(40),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#ffffff',
                    backgroundColor: isRefreshClicked ? '#8C8C8C' : '#000000',
                    borderRadius: px(4),
                    marginLeft: px(32),
                    paddingLeft: px(26),
                    paddingRight: px(26),
                    cursor: isRefreshClicked ? 'not-allowed' : 'pointer',
                    opacity: isRefreshClicked ? 0.6 : 1,
                  }}
                >
               {texts.uploadSection.refreshButton}
                
                </div>
            )}

      
          </div>

          {/* 文件上传与预览区域 */}
          <FileUploadArea
            onFileUploaded={(fileInfo) => {
              setUploadedFileInfo(fileInfo)
              onDataChange?.({ uploadedFileInfo: fileInfo })
            }}
            onFileDeleted={() => {
              setPresetContent('')
              setUploadedFileInfo(null)
              onDataChange?.({ presetContent: '', uploadedFileInfo: null })
              // 不重置 isRefreshClicked，保持按钮禁用状态
            }}
            presetContent={presetContent}
            uploadedFileInfo={uploadedFileInfo}
            previewMode={previewMode}
          />






</div>




      {/* 底部 Next 按钮 */}
      {!previewMode && <StepNextButton onClick={onEnter} label={texts.nextButton} />}
      

     

    </>
  )
}

