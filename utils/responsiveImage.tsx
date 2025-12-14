/**
 * 响应式图片组件
 * 用于静态导出模式下的图片优化
 * 
 * 功能：
 * 1. 自动检测浏览器是否支持 WebP
 * 2. 提供多种尺寸的图片（响应式）
 * 3. 懒加载支持
 * 4. CDN 支持
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getOptimizedImageUrl } from './imageUtils'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  loading?: 'lazy' | 'eager'
  className?: string
  style?: React.CSSProperties
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  sizes?: string // 响应式图片的 sizes 属性
  quality?: number
}

/**
 * 检测浏览器是否支持 WebP
 */
function useWebPSupport(): boolean {
  const [supportsWebP, setSupportsWebP] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const webP = new window.Image()
    webP.onload = webP.onerror = () => {
      setSupportsWebP(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }, [])

  return supportsWebP
}

/**
 * 获取最佳图片格式
 */
function getBestImageFormat(src: string, supportsWebP: boolean): string {
  if (!supportsWebP) {
    return src
  }

  // 尝试使用 WebP 版本
  const ext = src.substring(src.lastIndexOf('.'))
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    return src.replace(ext, '.webp')
  }

  return src
}

/**
 * 响应式图片组件
 * 
 * 使用示例：
 * ```tsx
 * <ResponsiveImage
 *   src="/header/img/logo.png"
 *   alt="Logo"
 *   width={60}
 *   height={60}
 *   priority
 *   sizes="(max-width: 768px) 60px, 60px"
 * />
 * ```
 */
export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  loading,
  className,
  style,
  objectFit = 'cover',
  sizes,
  quality = 85,
}: ResponsiveImageProps) {
  const supportsWebP = useWebPSupport()
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // 尝试使用 WebP 版本
    const webpSrc = getBestImageFormat(src, supportsWebP)
    
    // 检查 WebP 文件是否存在（通过尝试加载）
    if (typeof window !== 'undefined' && webpSrc !== src && supportsWebP) {
      const img = new window.Image()
      img.onload = () => {
        setImageSrc(webpSrc)
      }
      img.onerror = () => {
        // WebP 不存在，使用原图
        setImageSrc(src)
      }
      img.src = getOptimizedImageUrl(webpSrc, width, quality)
    } else {
      setImageSrc(src)
    }
  }, [src, supportsWebP, width, quality])

  const optimizedSrc = getOptimizedImageUrl(imageSrc, width, quality)
  const imageLoading = loading || (priority ? undefined : 'lazy')

  if (fill) {
    return (
      <Image
        src={optimizedSrc}
        alt={alt}
        fill
        priority={priority}
        loading={imageLoading}
        className={className}
        style={{ objectFit, ...style }}
        onError={() => {
          if (imageSrc !== src) {
            // WebP 加载失败，回退到原图
            setImageSrc(src)
            setHasError(false)
          } else {
            setHasError(true)
          }
        }}
      />
    )
  }

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={imageLoading}
      className={className}
      style={{ objectFit, ...style }}
      sizes={sizes}
      onError={() => {
        if (imageSrc !== src) {
          // WebP 加载失败，回退到原图
          setImageSrc(src)
          setHasError(false)
        } else {
          setHasError(true)
        }
      }}
    />
  )
}

/**
 * 生成响应式图片的 srcSet
 * 用于 <picture> 标签或 srcSet 属性
 */
export function generateSrcSet(
  baseSrc: string,
  sizes: number[],
  quality: number = 85
): string {
  return sizes
    .map(size => {
      const url = getOptimizedImageUrl(baseSrc, size, quality)
      return `${url} ${size}w`
    })
    .join(', ')
}

/**
 * Picture 组件 - 使用 <picture> 标签提供多种格式
 */
export function PictureImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority = false,
  loading,
  quality = 85,
}: Omit<ResponsiveImageProps, 'fill' | 'objectFit' | 'sizes'>) {
  const ext = src.substring(src.lastIndexOf('.'))
  const baseName = src.replace(ext, '')
  const webpSrc = `${baseName}.webp`
  const optimizedSrc = getOptimizedImageUrl(src, width, quality)
  const optimizedWebpSrc = getOptimizedImageUrl(webpSrc, width, quality)
  const imageLoading = loading || (priority ? undefined : 'lazy')

  return (
    <picture>
      {/* WebP 格式（如果存在） */}
      <source srcSet={optimizedWebpSrc} type="image/webp" />
      {/* 原格式作为回退 */}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={imageLoading}
        className={className}
        style={style}
      />
    </picture>
  )
}

