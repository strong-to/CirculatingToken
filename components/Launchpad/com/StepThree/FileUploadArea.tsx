'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import { uploadFile, getFileDownloadUrl, isDocxFile, isPreviewableFile, type UploadedFileInfo } from '@/utils/fileUpload'
import { parseDocxFile } from '@/utils/docxParser'
import Toast from '@/components/common/Toast'

interface FileUploadAreaProps {
  onFileUploaded?: (fileInfo: UploadedFileInfo) => void
  onFileDeleted?: () => void
  presetContent?: string
  uploadedFileInfo?: UploadedFileInfo | null
  previewMode?: boolean
}

export default function FileUploadArea({ onFileUploaded, onFileDeleted, presetContent, uploadedFileInfo, previewMode }: FileUploadAreaProps) {
  const [uploadedFile, setUploadedFile] = useState<UploadedFileInfo | null>(uploadedFileInfo || null)
  const [docxContent, setDocxContent] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [containerHeight, setContainerHeight] = useState<number>(170) // 存储像素值
  const [isResizing, setIsResizing] = useState(false)
  const [showUploadErrorToast, setShowUploadErrorToast] = useState(false)
  const [showUploadSuccessToast, setShowUploadSuccessToast] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // 调试：监听成功提示状态变化
  useEffect(() => {
    if (showUploadSuccessToast) {
      console.log('✅ showUploadSuccessToast 为 true，Toast 应该显示')
    }
  }, [showUploadSuccessToast])

  // 在预览模式下，从 props 中读取 uploadedFileInfo
  useEffect(() => {
    if (previewMode && uploadedFileInfo) {
      setUploadedFile(uploadedFileInfo)
      // 如果是 docx 文件且有 presetContent，显示内容
      if (isDocxFile(uploadedFileInfo.fileName) && presetContent) {
        const htmlContent = presetContent.split('\n\n').map(para => `<p>${para}</p>`).join('')
        setDocxContent(htmlContent)
      }
    }
  }, [previewMode, uploadedFileInfo, presetContent])

  // 当 presetContent 传入时（非预览模式），模拟上传了一个 docx 文件
  useEffect(() => {
    if (!previewMode && presetContent && presetContent.trim() !== '' && !uploadedFile) {
      const mockFileInfo: UploadedFileInfo = {
        fileId: `preset-${Date.now()}`,
        fileName: 'AI Generated Content.docx',
        fileSize: presetContent.length,
        fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      }
      setUploadedFile(mockFileInfo)
      // 将纯文本转换为 HTML，保持换行
      const htmlContent = presetContent.split('\n\n').map(para => `<p>${para}</p>`).join('')
      setDocxContent(htmlContent)
      onFileUploaded?.(mockFileInfo)
    } else if (!previewMode && (!presetContent || presetContent.trim() === '')) {
      // 如果 presetContent 被清除，也清除文件状态
      if (uploadedFile && uploadedFile.fileId.startsWith('preset-')) {
        setUploadedFile(null)
        setDocxContent('')
        setContainerHeight(170)
      }
    }
  }, [presetContent, uploadedFile, onFileUploaded, previewMode])

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 预览模式下禁止上传
    if (previewMode) {
      return
    }
    
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)

    try {
      console.log('开始上传文件:', file.name, file.size, file.type)
      
      // 上传文件
      const fileInfo = await uploadFile(file, {
        onProgress: (progress) => {
          console.log('上传进度:', progress)
          setUploadProgress(progress)
        },
      })

      console.log('文件上传成功:', fileInfo)
      setUploadedFile(fileInfo)

      // 如果是 docx 文件，解析内容
      if (isDocxFile(fileInfo.fileName)) {
        try {
          const result = await parseDocxFile(file)
          setDocxContent(result.html)
        } catch (error) {
          console.error('Failed to parse DOCX:', error)
          // 解析失败不影响上传，只显示文件名
        }
      }

      onFileUploaded?.(fileInfo)
      console.log('准备显示成功提示，设置 showUploadSuccessToast 为 true')
      setShowUploadSuccessToast(true)
      console.log('showUploadSuccessToast 状态已设置，应该显示 Toast')
    } catch (error) {
      console.error('Upload failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.error('Error message:', errorMessage)
      setShowUploadErrorToast(true)
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    // 预览模式下禁止点击上传
    if (previewMode) {
      return
    }
    
    // 如果点击的是文件名区域，不触发上传
    if ((e.target as HTMLElement).tagName === 'SPAN' || 
        (e.target as HTMLElement).closest('span')) {
      return
    }
    
    if (!uploadedFile && !isUploading) {
      fileInputRef.current?.click()
    }
  }

  const handleFileNameClick = async (e: React.MouseEvent) => {
    // 预览模式下禁止点击文件名
    if (previewMode) {
      e.stopPropagation()
      e.preventDefault()
      return
    }
    
    e.stopPropagation()
    e.preventDefault()
    
    if (!uploadedFile) return

    // docx 文件：只显示内容，不可点击
    if (isDocxFile(uploadedFile.fileName)) {
      return
    }

    const downloadUrl = getFileDownloadUrl(uploadedFile.fileId)
    console.log('File URL:', downloadUrl, 'File ID:', uploadedFile.fileId, 'File Name:', uploadedFile.fileName)
    
    try {
      const fileExt = uploadedFile.fileName.split('.').pop()?.toLowerCase()
      const isPDF = fileExt === 'pdf'
      const isPPT = fileExt === 'ppt' || fileExt === 'pptx'
      
      if (isPDF) {
        // PDF 文件：在新标签页中打开预览
        window.open(downloadUrl, '_blank')
      } else if (isPPT) {
        // PPT 文件：浏览器不支持直接预览，直接下载
        // 使用 fetch 获取文件，创建 blob URL 来触发下载
        try {
          const response = await fetch(downloadUrl)
          if (response.ok) {
            const blob = await response.blob()
            const blobUrl = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = uploadedFile.fileName
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
            
            // 清理
            setTimeout(() => {
              document.body.removeChild(link)
              URL.revokeObjectURL(blobUrl)
            }, 100)
          } else {
            // 如果 fetch 失败，回退到直接下载
            const link = document.createElement('a')
            link.href = downloadUrl
            link.download = uploadedFile.fileName
            link.style.display = 'none'
            document.body.appendChild(link)
            link.click()
            setTimeout(() => {
              document.body.removeChild(link)
            }, 100)
          }
        } catch (fetchError) {
          console.error('Fetch error:', fetchError)
          // 如果 fetch 出错，回退到直接下载
          const link = document.createElement('a')
          link.href = downloadUrl
          link.download = uploadedFile.fileName
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          setTimeout(() => {
            document.body.removeChild(link)
          }, 100)
        }
      } else {
        // 其他文件类型：下载
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = uploadedFile.fileName
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        
        // 延迟移除链接，确保下载开始
        setTimeout(() => {
          document.body.removeChild(link)
        }, 100)
      }
    } catch (error) {
      console.error('File open error:', error)
      alert('打开文件失败，请重试')
    }
  }

  const handleDelete = (e: React.MouseEvent) => {
    if (previewMode) return
    e.stopPropagation()
    e.preventDefault()
    
    // 清除文件状态，允许重新上传
    setUploadedFile(null)
    setDocxContent('')
    setContainerHeight(170) // 重置高度
    
    // 重置文件输入
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    
    // 通知父组件文件已删除（用于清除预设内容）
    onFileDeleted?.()
  }

  // 调整大小处理
  const handleResizeStart = (e: React.MouseEvent) => {
    // 预览模式下禁止调整大小
    if (previewMode) {
      e.stopPropagation()
      e.preventDefault()
      return
    }
    
    e.stopPropagation()
    e.preventDefault()
    setIsResizing(true)
    
    const startY = e.clientY
    const startHeight = containerHeight

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.clientY - startY
      const newHeight = Math.max(170, startHeight + deltaY) // 最小高度 170px
      setContainerHeight(newHeight)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {/* 删除按钮 - 固定在外层，不随内容滚动 */}
      {uploadedFile && previewMode !== true && (
        <div
          onClick={handleDelete}
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: px(6),
            right: px(6),
            width: px(20),
            height: px(20),
            borderRadius: '50%',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3L3 9M3 3L9 9"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* 内容容器 - 可滚动 */}
      <div
        ref={containerRef}
        onClick={previewMode ? undefined : handleClick}
        style={{
          position: 'relative',
          width: '100%',
          height: px(containerHeight),
          minHeight: px(170),
          overflow: 'auto',
          padding: px(16),
          border: `0.5px solid #000000`,
          borderRadius: px(4),
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(16),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
          cursor: previewMode ? 'default' : (uploadedFile || isUploading ? 'default' : 'pointer'),
          display: 'flex',
          flexDirection: 'column',
          gap: px(12),
          justifyContent: uploadedFile || isUploading ? 'flex-start' : 'center',
          alignItems: uploadedFile || isUploading ? 'flex-start' : 'center',
          // 隐藏滚动条但保持滚动功能
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
        className="hide-scrollbar"
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf"
          onChange={previewMode ? undefined : handleFileSelect}
          disabled={previewMode}
        />

        {isUploading ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <div>上传中... {Math.round(uploadProgress)}%</div>
          </div>
        ) : uploadedFile ? (
          <div
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginBottom: px(20)
              }}
            >
              <span
                onClick={previewMode ? undefined : handleFileNameClick}
                onMouseDown={previewMode ? undefined : (e) => e.stopPropagation()}
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                  cursor: previewMode ? 'default' : (isDocxFile(uploadedFile.fileName) ? 'default' : 'pointer'),
                  textDecoration: previewMode ? 'none' : (isDocxFile(uploadedFile.fileName) ? 'none' : 'underline'),
                  userSelect: 'none',
                }}
              >
                {uploadedFile.fileName}
              </span>
            </div>

            {/* DOCX 文件内容显示 */}
            {docxContent && (
              <div
                style={{
                  width: '100%',
                  whiteSpace: 'pre-wrap',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(14),
                  lineHeight: '150%',
                  color: '#000000',
                }}
                dangerouslySetInnerHTML={{ __html: docxContent }}
              />
            )}
          </div>
        ) : (
          !previewMode && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: px(8),
              }}
            >
              {/* 上传图标 */}
              <svg
                width="91"
                height="19"
                viewBox="0 0 91 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M36.656 13H35.6V11.64H35.568C35.072 12.648 34.048 13.208 32.784 13.208C30.912 13.208 28.992 12.216 28.992 9.256V4.248H30.112V9.128C30.112 11.112 30.96 12.2 32.784 12.2C34.288 12.2 35.536 11.144 35.536 9.048V4.248H36.656V13ZM39.8784 16.072H38.7584V4.248H39.8784V5.784H39.9104C40.7264 4.632 41.9264 4.024 43.3184 4.024C45.9744 4.024 48.0224 6.056 48.0224 8.6C48.0224 11.176 46.0064 13.208 43.3184 13.208C41.9584 13.208 40.6944 12.6 39.9104 11.464H39.8784V16.072ZM46.9024 8.648C46.9024 6.632 45.4304 5.032 43.3024 5.032C41.4144 5.032 39.8144 6.632 39.8144 8.632C39.8144 10.584 41.3344 12.2 43.3184 12.2C45.3984 12.2 46.9024 10.648 46.9024 8.648ZM50.8006 13H49.6806V1.16H50.8006V13ZM57.0758 13.208C54.5958 13.208 52.5158 11.112 52.5158 8.68C52.5158 6.104 54.5958 4.024 57.0758 4.024C59.6198 4.024 61.6678 6.168 61.6678 8.616C61.6678 11.16 59.5398 13.208 57.0758 13.208ZM57.0918 12.2C59.0598 12.2 60.5478 10.568 60.5478 8.568C60.5478 6.664 59.0118 5.032 57.0758 5.032C55.1718 5.032 53.6358 6.68 53.6358 8.664C53.6358 10.584 55.1878 12.2 57.0918 12.2ZM72.2641 13H71.1441V11.464H71.1121C70.3921 12.552 69.1281 13.208 67.7041 13.208C65.0801 13.208 63.0001 11.224 63.0001 8.6C63.0001 5.976 65.1441 4.024 67.7041 4.024C69.1601 4.024 70.4081 4.68 71.1121 5.784H71.1441V4.248H72.2641V13ZM67.7041 12.2C69.6561 12.2 71.2081 10.6 71.2081 8.632C71.2081 6.68 69.6721 5.032 67.6881 5.032C65.6721 5.032 64.1201 6.568 64.1201 8.648C64.1201 10.664 65.6401 12.2 67.7041 12.2ZM83.138 13H82.018V11.464H81.986C81.218 12.6 79.938 13.208 78.578 13.208C75.954 13.208 73.874 11.224 73.874 8.6C73.874 5.976 76.018 4.024 78.578 4.024C79.938 4.024 81.234 4.664 81.986 5.752H82.018V1.16H83.138V13ZM78.578 12.2C80.514 12.2 82.082 10.616 82.082 8.632C82.082 6.68 80.562 5.032 78.562 5.032C76.514 5.032 74.994 6.584 74.994 8.648C74.994 10.648 76.498 12.2 78.578 12.2ZM89.7231 6.408H88.6031C88.5391 5.56 88.0111 5.032 87.2911 5.032C86.5551 5.032 85.9631 5.592 85.9631 6.344C85.9631 6.984 86.4111 7.432 87.4831 7.784C89.6111 8.488 90.0271 9.336 90.0271 10.584C90.0271 12.184 88.9551 13.208 87.2751 13.208C85.7711 13.208 84.5871 12.136 84.5871 10.472V10.408H85.7071C85.7231 11.576 86.3311 12.2 87.2751 12.2C88.2831 12.2 88.9071 11.64 88.9071 10.632C88.9071 9.784 88.3631 9.32 87.3551 8.952C85.8191 8.392 84.8431 7.96 84.8431 6.456C84.8431 5.048 85.8991 4.024 87.3391 4.024C88.6511 4.024 89.7231 5.016 89.7231 6.408Z" fill="black"/>
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
          )
        )}
      </div>

      {/* 调整大小手柄 - 右下角 */}
      {uploadedFile && docxContent && previewMode !== true && (
        <div
          onMouseDown={handleResizeStart}
          style={{
            position: 'absolute',
            bottom: px(-2),
            right: px(-2),
            width: px(16),
            height: px(16),
            cursor: 'nwse-resize',
            zIndex: 100,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: px(2),
          }}
        >
          {/* Resize 图标 - 类似 textarea 右下角的图标 */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              opacity: 0.5,
            }}
          >
            <path
              d="M2 10L10 2M10 8V10H8M2 4V2H4"
              stroke="#000000"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* 上传失败提示 Toast */}
      {showUploadErrorToast && (
        <Toast
          message="File upload failed, please try again"
          duration={3000}
          onClose={() => setShowUploadErrorToast(false)}
        />
      )}

      {/* 上传成功提示 Toast */}
      {showUploadSuccessToast && (
        <Toast
          message="File uploaded successfully"
          duration={3000}
          onClose={() => setShowUploadSuccessToast(false)}
        />
      )}
    </div>
  )
}

