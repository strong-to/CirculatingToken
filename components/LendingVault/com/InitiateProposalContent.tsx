'use client'

import { px } from '@/utils/pxToRem'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { uploadFile } from '@/utils/fileUpload'
import type { UploadedFileInfo } from '@/utils/fileUpload'
import ProposalContentTextarea from './ProposalContentTextarea'
import { projectsMap } from '@/app/data'
import type { ProjectData } from '@/app/data'
import Toast from '@/components/common/Toast'

export default function InitiateProposalContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const system_id = searchParams.get('system_id')

  // 根据 system_id 获取对应的项目数据
  const projectData: ProjectData | undefined = useMemo(() => {
    if (!system_id) return undefined
    return projectsMap[system_id]
  }, [system_id])

  // 从项目数据中获取 initiateProposal 配置
  const initiateProposalData = projectData?.profile?.projectDetailsPage?.projectGovernance?.tabs?.find(
    (tab) => tab.id === 'proposal'
  )?.data?.initiateProposal

  const [typeSelection, setTypeSelection] = useState(initiateProposalData?.typeSelection?.proposalTypes?.[0] || '')
  const [proposalContent, setProposalContent] = useState('')
  const [thirdProposalContent, setThirdProposalContent] = useState('')
  const [organizedContent, setOrganizedContent] = useState('')
  const [attachmentLink, setAttachmentLink] = useState('')
  const [uploadedFile, setUploadedFile] = useState<UploadedFileInfo | null>(null)
  const [uploadedFileThird, setUploadedFileThird] = useState<UploadedFileInfo | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [showUploadErrorToast, setShowUploadErrorToast] = useState(false)
  const [showUploadSuccessToast, setShowUploadSuccessToast] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isProposalFocused, setIsProposalFocused] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const fileInputRefThird = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const proposalTypes = initiateProposalData?.typeSelection?.proposalTypes

  // 当数据加载后更新默认选中值
  useEffect(() => {
    if (initiateProposalData?.typeSelection?.proposalTypes?.[0] && !typeSelection) {
      setTypeSelection(initiateProposalData.typeSelection.proposalTypes[0])
    }
  }, [initiateProposalData, typeSelection])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  // 如果已经有上传的文件，但文本框还是空的，用文件名填充，避免因为某些分支遗漏导致不展示
  useEffect(() => {
    if (uploadedFile && proposalContent.trim() === '') {
      setProposalContent(uploadedFile.fileName)
    }
  }, [uploadedFile, proposalContent])

  // 第二个 textarea 的上传文件处理
  useEffect(() => {
    if (uploadedFileThird && thirdProposalContent.trim() === '') {
      setThirdProposalContent(uploadedFileThird.fileName)
    }
  }, [uploadedFileThird, thirdProposalContent])

  // 自动生成内容摘要
  useEffect(() => {
    if (proposalContent.trim()) {
      const aiSummaryText = initiateProposalData?.proposalContentOrganization?.aiGeneratedSummary || '[AI Generated Summary: This is a comprehensive summary of your proposal content. The AI will generate a detailed analysis based on the information you provided.]'
      // 这里可以调用 AI API 生成摘要，目前先使用简单的摘要逻辑
      const generateSummary = (content: string) => {
        // 简单的摘要生成：取前200个字符，如果超过则添加省略号
        if (content.length > 200) {
          return content.substring(0, 200) + '...\n\n' + aiSummaryText
        }
        return content + '\n\n' + aiSummaryText
      }
      setOrganizedContent(generateSummary(proposalContent))
    } else {
      setOrganizedContent('')
    }
  }, [proposalContent, initiateProposalData])

  const handleSelectType = (type: string) => {
    setTypeSelection(type)
    setIsDropdownOpen(false)
  }

  return (
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide" style={{ backgroundColor: '#ffffff',paddingBottom: px(200) }}>
      <div style={{ 
        maxWidth: px(1200), 
        margin: '0 auto', 
        paddingTop: px(40), 
        paddingBottom: px(40),
        paddingLeft: px(80),
        paddingRight: px(80)
      }}>
        {/* 标题和按钮 */}
        <div className="flex items-center justify-between" style={{ marginBottom: px(40) }}>
          <h1 style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(48),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            paddingBottom: px(8)
          }}>
            {initiateProposalData?.title || 'Initiate Proposal'}
          </h1>
          <button
            onClick={() => {}}
            style={{
              width: px(230),
              height: px(40),
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: px(4),
              fontFamily: 'PingFang SC',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: px(14),
              lineHeight: '100%',
              letterSpacing: '0%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            {initiateProposalData?.viewProposalRulesButton}
          </button>
        </div>

        <div 
            className="w-full flex items-center justify-center" 
            style={{ 
              width: px(133), 
              height:px(44), 
              backgroundColor:'#000000', 
              color:'#ffffff', 
              marginBottom: px(32), 
              gap: px(5), 
              borderRadius: px(4),
              cursor: 'pointer',
              transition: 'background-color 0.2s, opacity 0.2s'
            }}
            onClick={() => {
              // 获取保存的 tab 状态
              const mainTab = searchParams.get('main_tab')
              const subTab = searchParams.get('sub_tab')
              
              if (mainTab && subTab && system_id) {
                // 返回到指定 tab 状态
                router.push(`/LendingVault?system_id=${system_id}&main_tab=${encodeURIComponent(mainTab)}&sub_tab=${encodeURIComponent(subTab)}`)
              } else {
                router.back()
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#333333";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.opacity = "1";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.999 0.625L1.62224 10.0018L10.9972 19.3768" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M19.5 10L1.62248 9.99905" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
            Go Back
          </div>

        {/* Type Selection */}
        <div style={{ marginBottom: px(40) }}>
        <div className="flex items-center" style={{ marginBottom: px(20) }}>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            display: 'block',
            marginRight: px(5)
          }}>
            {initiateProposalData?.typeSelection?.label }
          </div>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#666666',
          }}>
            {initiateProposalData?.typeSelection?.description }
          </div>
          </div>
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            {/* Dropdown Trigger */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                width: '100%',
                height: px(50),
                paddingLeft: px(16),
                paddingRight: px(16),
                border: '1px solid #e0e0e0',
                borderRadius: px(4),
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(20),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: typeSelection ? '#000000' : '#999999',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{typeSelection || (initiateProposalData?.typeSelection?.selectPlaceholder )}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  marginRight: px(-3)
                }}
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: px(4),
                  backgroundColor: '#ffffff',
                  borderRadius: px(8),
                  overflow: 'hidden',
                  zIndex: 1000,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  maxHeight: px(300),
                  overflowY: 'auto'
                }}
              >
                {proposalTypes.map((type: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleSelectType(type)}
                    style={{
                      padding: px(12),
                      paddingLeft: px(16),
                      paddingRight: px(16),
                      fontFamily: 'PingFang SC',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: px(16),
                      lineHeight: '140%',
                      letterSpacing: '0%',
                      color: typeSelection === type ? '#ffffff' : '#000000',
                      cursor: 'pointer',
                      backgroundColor: typeSelection === type ? '#000000' : '#ffffff',
                      borderBottom: index < proposalTypes.length - 1 ? '1px solid #e0e0e0' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: px(8)
                    }}
                    onMouseEnter={(e) => {
                      if (typeSelection !== type) {
                        e.currentTarget.style.backgroundColor = '#000000'
                        e.currentTarget.style.color = '#ffffff'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (typeSelection !== type) {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.color = '#000000'
                      }
                    }}
                  >
                    {typeSelection === type && (
                      <span style={{ fontSize: px(16), color: '#ffffff' }}>✓</span>
                    )}
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Proposal Content */}
        <div style={{ marginBottom: px(40) }}>
        <div className="flex items-center" style={{ marginBottom: px(20) }}>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            display: 'block',
            marginRight: px(5)
          }}>
            {initiateProposalData?.proposalContent?.label || 'Type Selection'}
          </div>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#666666',
          }}>
            {initiateProposalData?.proposalContent?.description || 'Please select the type of proposal you wish to initiate in the text box below.'}
          </div>
          </div>
          <div style={{ position: 'relative' }}>
            <textarea
              value={proposalContent}
              onChange={(e) => setProposalContent(e.target.value)}
              placeholder={initiateProposalData?.proposalContent?.placeholder || 'Draft or upload your proposal content here.'}
              onFocus={() => setIsProposalFocused(true)}
              onBlur={() => setIsProposalFocused(false)}
              readOnly={uploadedFile !== null && proposalContent.trim() !== ''}
              style={{
                width: '100%',
                minHeight: px(170),
                padding: px(16),
                paddingBottom: px(50),
                border: '1px solid #e0e0e0',
                borderRadius: px(4),
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(20),
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#000000',
                resize: 'vertical',
                cursor: uploadedFile !== null && proposalContent.trim() !== '' ? 'default' : 'text'
              }}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              // 与 Launchpad StepThree 保持一致，支持 doc/docx/ppt/pptx/xls/xlsx/pdf
              accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf,.txt,.md"
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setIsUploading(true)
                  try {
                    const fileInfo = await uploadFile(file)
                    setUploadedFile(fileInfo)
                    // 如果是文本文件，读取内容
                    if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
                      const text = await file.text()
                      setProposalContent(text)
                    } else {
                      // 非纯文本文件：在框里展示文件名，方便用户确认
                      setProposalContent(file.name)
                    }
                    setShowUploadSuccessToast(true)
                  } catch (error) {
                    console.error('Upload failed:', error)
                    setShowUploadErrorToast(true)
                  } finally {
                    setIsUploading(false)
                  }
                }
              }}
            />
            {/* 上传入口文案 */}
            {!isUploading && !isProposalFocused && proposalContent.trim() === '' && (
              <div 
                onClick={(e) => {
                  e.stopPropagation()
                  if (fileInputRef.current) {
                    fileInputRef.current.click()
                  }
                }}
                style={{
                  position: 'absolute',
                  bottom: px(16),
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: px(8),
                  cursor: 'pointer',
                }}
              >
                {/* 上传图标，参考 StepThree 的 uploads 区域 */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6535 9.49494L16.075 10.0738L9.20517 3.21475L2.33532 10.0738L1.75684 9.49494L9.20517 2.05859L16.6535 9.49494Z" fill="#083FD8"/>
                  <path d="M9.61408 3.05859V14.2007H8.7959V3.05859H9.61408Z" fill="#083FD8"/>
                  <path d="M2.4549 14.8281V17.3622H15.9549V14.8281H16.7731V18.1804H1.63672V14.8281H2.4549Z" fill="#083FD8"/>
                </svg>
                <span
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                >
                  uploads
                </span>
              </div>
            )}

            {/* 如果是通过上传填入的文件名，提供一个小的删除按钮 */}
            {uploadedFile && proposalContent.trim() !== '' && (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setUploadedFile(null)
                  setProposalContent('')
                  // 重置文件选择器
                  if (fileInputRef.current) {
                    fileInputRef.current.value = ''
                  }
                }}
                style={{
                  position: 'absolute',
                  top: px(10),
                  right: px(20),
                  width: px(18),
                  height: px(18),
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontSize: px(12),
                    lineHeight: '1',
                    userSelect: 'none',
                  }}
                >
                  ×
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Proposal Content Organization */}
        <div style={{ marginBottom: px(40) }}>
        <div className="flex items-center" style={{ marginBottom: px(20) }}>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            display: 'block',
            marginRight: px(5)
          }}>
            {initiateProposalData?.proposalContentOrganization?.label || 'Type Selection'}
          </div>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#666666',
          }}>
            {initiateProposalData?.proposalContentOrganization?.description || 'Please select the type of proposal you wish to initiate in the text box below.'}
          </div>
          </div>
          <textarea
            readOnly
            value={organizedContent}
            placeholder={initiateProposalData?.proposalContentOrganization?.placeholder || 'This section is for viewing only and cannot be edited.'}
            onFocus={(e) => e.target.blur()}
            style={{
              width: '100%',
              minHeight: px(170),
              padding: px(20),
              border: '1px solid #e0e0e0',
              borderRadius: px(4),
              fontFamily: 'PingFang SC',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '140%',
              letterSpacing: '0%',
              color: '#999999',
              resize: 'vertical',
              cursor: 'not-allowed',
              outline: 'none'
            }}
          />
        </div>

        {/* Attachment Link */}
        <div style={{ marginBottom: px(150) }}>
        <div className="flex items-center" style={{ marginBottom: px(20) }}>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            display: 'block',
            marginRight: px(5)
          }}>
            {initiateProposalData?.attachmentLink?.label || 'Type Selection'}
          </div>
          <div style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(20),
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#666666',
          }}>
            {initiateProposalData?.attachmentLink?.description || 'Please select the type of proposal you wish to initiate in the text box below.'}
          </div>
          </div>

          <div style={{ position: 'relative' }}>
            <ProposalContentTextarea
              value={thirdProposalContent}
              onChange={setThirdProposalContent}
              placeholder={initiateProposalData?.attachmentLink?.placeholder || 'Draft or upload your proposal content here.'}
              readOnly={uploadedFileThird !== null && thirdProposalContent.trim() !== ''}
            />
            <input
              type="file"
              ref={fileInputRefThird}
              style={{ display: 'none' }}
              // 与 Launchpad StepThree 保持一致，支持 doc/docx/ppt/pptx/xls/xlsx/pdf
              accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf,.txt,.md"
              onChange={async (e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setIsUploading(true)
                  try {
                    const fileInfo = await uploadFile(file)
                    setUploadedFileThird(fileInfo)
                    // 如果是文本文件，读取内容
                    if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
                      const text = await file.text()
                      setThirdProposalContent(text)
                    } else {
                      // 非纯文本文件：在框里展示文件名
                      setThirdProposalContent(file.name)
                    }
                    setShowUploadSuccessToast(true)
                  } catch (error) {
                    console.error('Upload failed:', error)
                    setShowUploadErrorToast(true)
                  } finally {
                    setIsUploading(false)
                  }
                }
              }}
            />
            {/* 如果是通过上传填入的文件名，提供一个小的删除按钮 */}
            {uploadedFileThird && thirdProposalContent.trim() !== '' && (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setUploadedFileThird(null)
                  setThirdProposalContent('')
                  // 重置文件选择器
                  if (fileInputRefThird.current) {
                    fileInputRefThird.current.value = ''
                  }
                }}
                style={{
                  position: 'absolute',
                  top: px(10),
                  right: px(20),
                  width: px(18),
                  height: px(18),
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                <span style={{ color: '#ffffff', fontSize: px(12), lineHeight: 1 }}>×</span>
              </div>
            )}
            <div 
              onClick={() => fileInputRefThird.current?.click()}
              style={{
                position: 'absolute',
                bottom: px(16),
                right: px(16),
                display: 'flex',
                alignItems: 'center',
                gap: px(8),
                cursor: 'pointer',
                opacity: isUploading ? 0.5 : 1
              }}
            >
             
            </div>
          </div>


          

        
        </div>

        {/* 上传结果 Toast，与 Launchpad StepThree 一致 */}
        {showUploadErrorToast && (
          <Toast
            message="File upload failed, please try again"
            duration={3000}
            onClose={() => setShowUploadErrorToast(false)}
          />
        )}

        {showUploadSuccessToast && (
          <Toast
            message="File uploaded successfully"
            duration={3000}
            onClose={() => setShowUploadSuccessToast(false)}
          />
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-center" style={{ gap: px(16) }}>
          <button
            onClick={() => {
              const url = initiateProposalData?.actionButtons?.initiateDiscussionUrl
              if (url) {
                router.push(url)
              } else {
                router.back()
              }
            }}
            style={{
              width: px(200),
              height: px(44),
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              borderRadius: px(4),
              fontFamily: 'PingFang SC',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff'
            }}
          >
            {initiateProposalData?.actionButtons?.initiateDiscussion }
          </button>
          <button
            onClick={() => {
              const url = initiateProposalData?.actionButtons?.discussTheResolutionUrl
              if (url) {
                router.push(url)
              }
            }}
            style={{
              width: px(200),
              height: px(44),
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: px(4),
              fontFamily: 'PingFang SC',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
          >
            {initiateProposalData?.actionButtons?.discussTheResolution }
          </button>
        </div>
      </div>
    </div>
  )
}

