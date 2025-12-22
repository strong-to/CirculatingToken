# 文件上传系统使用说明

## 概述

本项目实现了一套完整的文件上传和预览系统，支持以下文件类型：
- Word 文档：`.doc`, `.docx`（自动解析内容并显示）
- PowerPoint：`.ppt`, `.pptx`（点击下载，用系统默认应用打开）
- Excel：`.xls`, `.xlsx`（点击下载，用系统默认应用打开）
- PDF：`.pdf`（点击下载，用系统默认应用打开）

## 架构说明

### 1. API 路由

- **`/app/api/upload/route.ts`**：处理文件上传
  - 接收 `multipart/form-data` 格式的文件
  - 验证文件类型和大小（最大 50MB）
  - 使用 UUID 生成唯一文件名，保存到 `uploads/` 目录
  - 返回文件信息（fileId, fileName, fileSize, fileType）

- **`/app/api/files/[id]/route.ts`**：处理文件下载
  - 根据 fileId 从 `uploads/` 目录读取文件
  - 设置正确的 Content-Type 和 Content-Disposition 头
  - 返回文件流供浏览器下载

### 2. 工具函数

- **`utils/fileUpload.ts`**：
  - `uploadFile()`：上传文件到服务器，支持进度回调
  - `getFileDownloadUrl()`：获取文件下载 URL
  - `isDocxFile()`：检查是否为 DOCX 文件
  - `isPreviewableFile()`：检查是否为可预览文件

- **`utils/docxParser.ts`**：
  - `parseDocxFile()`：解析 DOCX 文件内容为 HTML
  - `parseDocxFromUrl()`：从 URL 解析 DOCX 文件内容
  - 使用 `mammoth` 库进行 DOCX 解析

### 3. 组件

- **`components/Launchpad/com/StepThree/FileUploadArea.tsx`**：
  - 文件上传组件，封装了上传、预览、下载逻辑
  - 支持拖拽上传（可选）
  - DOCX 文件自动解析并显示内容
  - PDF/PPT 等文件显示文件名，点击可下载

## 使用方法

### 在组件中使用

```tsx
import FileUploadArea from '@/components/Launchpad/com/StepThree/FileUploadArea'
import type { UploadedFileInfo } from '@/utils/fileUpload'

function MyComponent() {
  const [fileInfo, setFileInfo] = useState<UploadedFileInfo | null>(null)

  return (
    <FileUploadArea
      onFileUploaded={(fileInfo) => {
        setFileInfo(fileInfo)
        console.log('文件上传成功:', fileInfo)
      }}
    />
  )
}
```

### 直接使用工具函数

```tsx
import { uploadFile, getFileDownloadUrl } from '@/utils/fileUpload'

async function handleUpload(file: File) {
  try {
    const fileInfo = await uploadFile(file, {
      onProgress: (progress) => {
        console.log(`上传进度: ${progress}%`)
      }
    })
    
    console.log('文件 ID:', fileInfo.fileId)
    console.log('下载 URL:', getFileDownloadUrl(fileInfo.fileId))
  } catch (error) {
    console.error('上传失败:', error)
  }
}
```

## 文件存储

- 上传的文件保存在项目根目录的 `uploads/` 文件夹中
- 文件名使用 UUID 生成，避免文件名冲突
- `uploads/` 目录已添加到 `.gitignore`，不会提交到版本控制

## 安全注意事项

1. **文件类型验证**：API 路由会验证文件类型，只允许指定的文件类型
2. **文件大小限制**：默认最大 50MB，可在 `app/api/upload/route.ts` 中修改
3. **文件名安全**：使用 UUID 生成文件名，避免路径遍历攻击
4. **生产环境建议**：
   - 将文件存储到对象存储服务（如 AWS S3、阿里云 OSS）
   - 添加用户认证和权限控制
   - 添加文件病毒扫描
   - 使用 CDN 加速文件下载

## 依赖包

- `uuid`：生成唯一文件名
- `mammoth`：解析 DOCX 文件内容

## 扩展功能

### 添加更多文件类型支持

1. 在 `app/api/upload/route.ts` 的 `ALLOWED_TYPES` 中添加新的 MIME 类型
2. 在 `app/api/files/[id]/route.ts` 的 `contentTypeMap` 中添加对应的 Content-Type
3. 在 `FileUploadArea.tsx` 的 `accept` 属性中添加文件扩展名

### 集成对象存储

修改 `app/api/upload/route.ts`，将文件上传到对象存储而不是本地：

```typescript
// 示例：使用 AWS S3
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({ region: 'us-east-1' })
await s3Client.send(new PutObjectCommand({
  Bucket: 'your-bucket',
  Key: fileName,
  Body: buffer,
}))
```

### 添加预览功能

对于 PDF 文件，可以使用 `react-pdf` 库实现预览：

```bash
npm install react-pdf
```

然后在组件中渲染 PDF 预览。

