import { NextRequest, NextResponse } from 'next/server'
import { readFile, stat } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

async function handleFileRequest(
  request: NextRequest,
  params: Promise<{ id: string }> | { id: string },
  isHead: boolean = false
) {
  try {
    const resolvedParams = await Promise.resolve(params)
    const fileId = resolvedParams.id
    const filePath = join(process.cwd(), 'uploads', fileId)

    console.log('File request:', { fileId, filePath, exists: existsSync(filePath) })

    if (!existsSync(filePath)) {
      console.error('File not found:', filePath)
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const fileExt = fileId.split('.').pop()?.toLowerCase()

    // 根据文件类型设置 Content-Type
    const contentTypeMap: Record<string, string> = {
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      doc: 'application/msword',
      ppt: 'application/vnd.ms-powerpoint',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      xls: 'application/vnd.ms-excel',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      pdf: 'application/pdf',
    }

    const contentType = contentTypeMap[fileExt || ''] || 'application/octet-stream'

    // 如果是 HEAD 请求，只返回头信息
    if (isHead) {
      const stats = await stat(filePath)
      return new NextResponse(null, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Content-Length': stats.size.toString(),
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD',
        },
      })
    }

    // GET 请求，返回文件内容
    const fileBuffer = await readFile(filePath)
    const originalFileName = fileId
    
    // PDF 文件使用 inline（浏览器预览）
    // PPT 文件：不设置 Content-Disposition，让浏览器自己决定如何处理
    // 其他文件使用 attachment（下载）
    const isPDF = fileExt === 'pdf'
    const isPPT = ['ppt', 'pptx'].includes(fileExt || '')
    
    const headers: Record<string, string> = {
      'Content-Type': contentType,
      'Content-Length': fileBuffer.length.toString(),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD',
    }
    
    if (isPDF) {
      // PDF 可以在浏览器中预览
      headers['Content-Disposition'] = `inline; filename="${encodeURIComponent(originalFileName)}"`
    } else if (isPPT) {
      // PPT 文件：设置为 attachment，直接下载
      // 浏览器不支持直接预览 PPT，所以直接下载更合适
      headers['Content-Disposition'] = `attachment; filename="${encodeURIComponent(originalFileName)}"`
    } else {
      // 其他文件：强制下载
      headers['Content-Disposition'] = `attachment; filename="${encodeURIComponent(originalFileName)}"`
    }
    
    return new NextResponse(fileBuffer, {
      headers,
    })
  } catch (error) {
    console.error('File download error:', error)
    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  return handleFileRequest(request, params, false)
}

export async function HEAD(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  return handleFileRequest(request, params, true)
}

