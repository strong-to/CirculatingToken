/**
 * 文件上传工具函数（前端模拟版本）
 *
 * 说明：
 * - 之前这里是通过 /api/upload 接口上传到服务端。
 * - 为了兼容静态导出（output: 'export'）以及纯静态部署环境，
 *   现在改为在前端“模拟上传”，不再依赖任何后端接口。
 * - 上传成功后返回一个包含文件基本信息的对象，fileId 使用 blob URL，
 *   供前端预览 / 下载使用。
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
 * 模拟上传文件（仅在前端保存文件信息，不依赖后端）
 */
export async function uploadFile(
  file: File,
  options?: UploadOptions
): Promise<UploadedFileInfo> {
  // 简单的进度模拟：直接回调 100%
  if (options?.onProgress) {
    options.onProgress(100)
  }
 
  // 使用 blob URL 作为 fileId，后续用于本地预览 / 下载
  const objectUrl = URL.createObjectURL(file)
 
  return {
    fileId: objectUrl,
    fileName: file.name,
    fileSize: file.size,
    fileType: file.type || 'application/octet-stream',
  }
}
 
/**
 * 获取文件“下载” URL
 * - 现在直接返回 fileId（即 blob URL）
 */
export function getFileDownloadUrl(fileId: string): string {
  return fileId
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

