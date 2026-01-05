/**
 * 文件上传工具函数
 */

export interface UploadedFileInfo {
  fileId: string
  fileName: string
  fileSize: number
  fileType: string
}

export interface UploadOptions {
  onProgress?: (progress: number) => void
}

/**
 * 上传文件到服务器
 */
export async function uploadFile(
  file: File,
  options?: UploadOptions
): Promise<UploadedFileInfo> {
  const formData = new FormData()
  formData.append('file', file)

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    // 监听上传进度
    if (options?.onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100
          options.onProgress!(progress)
        }
      })
    }

    xhr.addEventListener('load', () => {
      console.log('XHR load event, status:', xhr.status, 'response:', xhr.responseText)
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText)
          if (response.success) {
            resolve({
              fileId: response.fileId,
              fileName: response.fileName,
              fileSize: response.fileSize,
              fileType: response.fileType,
            })
          } else {
            reject(new Error(response.error || 'Upload failed'))
          }
        } catch (error) {
          console.error('Failed to parse response:', error, 'Response text:', xhr.responseText)
          reject(new Error('Failed to parse response'))
        }
      } else {
        try {
          const error = JSON.parse(xhr.responseText)
          reject(new Error(error.error || 'Upload failed'))
        } catch {
          reject(new Error(`Upload failed with status ${xhr.status}`))
        }
      }
    })

    xhr.addEventListener('error', (e) => {
      console.error('XHR error event:', e)
      reject(new Error('Network error'))
    })

    xhr.addEventListener('abort', () => {
      console.error('XHR abort event')
      reject(new Error('Upload aborted'))
    })

    console.log('Starting upload to /api/upload')
    xhr.open('POST', '/api/upload')
    xhr.send(formData)
  })
}

/**
 * 获取文件下载 URL
 */
export function getFileDownloadUrl(fileId: string): string {
  return `/api/files/${fileId}`
}

/**
 * 检查文件类型是否为 docx
 */
export function isDocxFile(fileName: string): boolean {
  const ext = fileName.split('.').pop()?.toLowerCase()
  return ext === 'docx' || ext === 'doc'
}

/**
 * 检查文件类型是否为可预览文件（PDF/PPT等）
 */
export function isPreviewableFile(fileName: string): boolean {
  const ext = fileName.split('.').pop()?.toLowerCase()
  return ['pdf', 'ppt', 'pptx', 'xls', 'xlsx'].includes(ext || '')
}

