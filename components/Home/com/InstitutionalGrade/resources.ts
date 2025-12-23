/**
 * InstitutionalGrade 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/InstitutionalGrade/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

// ==================== 图片资源 ====================
export const images = {
  footerLogo: {
    asterisk: '/home/FooterLogo/img/asterisk.png',
    books: '/home/FooterLogo/img/books.png',
    opal: '/home/FooterLogo/img/opal.png',
    dune: '/home/FooterLogo/img/dune.png',
    oas: '/home/FooterLogo/img/oas.png',
  },
} as const

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData
