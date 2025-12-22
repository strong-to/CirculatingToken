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
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${encodeURIComponent(originalFileName)}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD',
      },
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

