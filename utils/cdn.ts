const CDN_BASE = 'https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4'

export function toCdnUrl(path: string): string {
  if (!path) return CDN_BASE
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  if (path.startsWith('/')) {
    return `${CDN_BASE}${path}`
  }
  return `${CDN_BASE}/${path}`
}

export const CDN_PREFIX = CDN_BASE
