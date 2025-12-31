'use client'

import { px } from '@/utils/pxToRem'
import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { uploadFile } from '@/utils/fileUpload'
import type { UploadedFileInfo } from '@/utils/fileUpload'
import ProposalContentTextarea from './ProposalContentTextarea'
import ProposalRulesModal from './ProposalRulesModal'
import { projectsMap } from '@/app/data'
import type { ProjectData } from '@/app/data'

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
  const [isUploading, setIsUploading] = useState(false)
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const proposalTypes = initiateProposalData?.typeSelection?.proposalTypes || [
    'Regarding Adjustment of Token Minting Coefficient',
    'Type 2',
    'Type 3'
  ]

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
            onClick={() => setIsRulesModalOpen(true)}
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
              <span>{typeSelection || (initiateProposalData?.typeSelection?.selectPlaceholder || 'Select a type')}</span>
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
                <div
                  onClick={() => handleSelectType('')}
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
                    color: typeSelection === '' ? '#ffffff' : '#000000',
                    cursor: 'pointer',
                    backgroundColor: typeSelection === '' ? '#000000' : '#ffffff',
                    borderBottom: '1px solid #e0e0e0'
                  }}
                  onMouseEnter={(e) => {
                    if (typeSelection !== '') {
                      e.currentTarget.style.backgroundColor = '#000000'
                      e.currentTarget.style.color = '#ffffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (typeSelection !== '') {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.color = '#000000'
                    }
                  }}
                >
                  {initiateProposalData?.typeSelection?.selectPlaceholder || 'Select a type'}
                </div>
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
                resize: 'vertical'
              }}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept=".doc,.docx,.txt,.md"
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
                    }
                  } catch (error) {
                    console.error('Upload failed:', error)
                  } finally {
                    setIsUploading(false)
                  }
                }
              }}
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
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
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept=".doc,.docx,.txt,.md"
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
                    }
                  } catch (error) {
                    console.error('Upload failed:', error)
                  } finally {
                    setIsUploading(false)
                  }
                }
              }}
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
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

      {/* Proposal Rules Modal */}
      <ProposalRulesModal
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
        data={initiateProposalData?.proposalRulesModal}
      />
      </div>
    </div>
  )
}

