/**
 * DOCX 文件解析工具
 * 使用 mammoth 库将 docx 转换为 HTML
 */

import mammoth from 'mammoth'

export interface DocxParseResult {
  html: string
  text: string
}

/**
 * 解析 DOCX 文件内容
 */
export async function parseDocxFile(file: File): Promise<DocxParseResult> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.convertToHtml({ arrayBuffer })
    
    return {
      html: result.value,
      text: result.value.replace(/<[^>]*>/g, ''), // 提取纯文本
    }
  } catch (error) {
    console.error('Failed to parse DOCX:', error)
    throw new Error('Failed to parse DOCX file')
  }
}

/**
 * 从文件 URL 解析 DOCX 内容
 */
export async function parseDocxFromUrl(url: string): Promise<DocxParseResult> {
  try {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const result = await mammoth.convertToHtml({ arrayBuffer })
    
    return {
      html: result.value,
      text: result.value.replace(/<[^>]*>/g, ''),
    }
  } catch (error) {
    console.error('Failed to parse DOCX from URL:', error)
    throw new Error('Failed to parse DOCX file')
  }
}

