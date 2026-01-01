"use client";

import { useState } from "react";
import Image from "next/image";
import { px } from "@/utils/pxToRem";
import { getOptimizedImageUrl, getImageLoading } from "@/utils/imageUtils";

interface ImageSkeletonProps {
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  borderRadius?: number | string;
}

// 骨架屏组件
function ImageSkeleton({ width, height, aspectRatio, borderRadius }: ImageSkeletonProps) {
  return (
    <div
      className="relative animate-pulse"
      style={{
        width: width || "100%",
        height: height || "100%",
        aspectRatio: aspectRatio,
        borderRadius: borderRadius || 0,
        backgroundColor: "#E5E5E5",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, #E5E5E5 0%, #F0F0F0 50%, #E5E5E5 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  // 固定尺寸模式
  width?: number | string;
  height?: number | string;
  // fill 模式（用于填充容器）
  fill?: boolean;
  // 样式相关
  borderRadius?: number | string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  style?: React.CSSProperties;
  className?: string;
  // 其他 Next.js Image 属性
  priority?: boolean;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * 带骨架屏的图片组件
 * 
 * 使用方式：
 * 1. 固定尺寸模式：传入 width 和 height
 * 2. fill 模式：传入 fill={true}，图片会填充父容器
 * 
 * @example
 * // 固定尺寸
 * <ImageWithSkeleton
 *   src="/image.png"
 *   alt="Description"
 *   width={200}
 *   height={200}
 *   borderRadius="50%"
 * />
 * 
 * @example
 * // fill 模式
 * <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
 *   <ImageWithSkeleton
 *     src="/image.png"
 *     alt="Description"
 *     fill
 *     aspectRatio="1 / 1"
 *   />
 * </div>
 */
export default function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  fill = false,
  borderRadius,
  aspectRatio,
  objectFit,
  style,
  className,
  priority,
  loading,
  onLoad,
  onError,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const safeSrc = src && src.trim().length > 0 ? src : '';

  // 从 className 中提取 objectFit（如果未通过 props 提供）
  const finalObjectFit = objectFit || (() => {
    if (className?.includes('object-contain')) return 'contain';
    if (className?.includes('object-cover')) return 'cover';
    if (className?.includes('object-fill')) return 'fill';
    if (className?.includes('object-none')) return 'none';
    if (className?.includes('object-scale-down')) return 'scale-down';
    return 'cover'; // 默认值
  })();

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // 确定骨架屏的尺寸
  const skeletonWidth = fill ? "100%" : width;
  const skeletonHeight = fill ? "100%" : height;

  return (
    <div
      className={className}
      style={{
        position: fill ? "relative" : "static",
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        aspectRatio: fill ? aspectRatio : undefined,
        borderRadius: borderRadius || 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* 骨架屏 */}
      {isLoading && !hasError && (
        <ImageSkeleton
          width={skeletonWidth}
          height={skeletonHeight}
          aspectRatio={fill ? aspectRatio : undefined}
          borderRadius={borderRadius}
        />
      )}

      {/* 图片 */}
      {/* 使用CDN优化后的URL */}
      {(() => {
        const optimizedSrc = getOptimizedImageUrl(safeSrc, typeof width === "number" ? width : undefined)
        const imageLoading = loading || getImageLoading(safeSrc, priority === true)
        
        // 如果 width 或 height 是字符串，或者 fill=true，使用 fill 模式
        if (fill || typeof width === "string" || typeof height === "string") {
          return (
            <Image
              src={optimizedSrc}
              alt={alt}
              fill
              className={className}
              style={{
                objectFit: finalObjectFit,
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
                ...style,
              }}
              priority={priority}
              loading={imageLoading}
              onLoad={handleLoad}
              onError={handleError}
            />
          )
        } else {
          return (
            <Image
              src={optimizedSrc}
              alt={alt}
              width={typeof width === "number" ? width : undefined}
              height={typeof height === "number" ? height : undefined}
              className={className}
              style={{
                width: "100%",
                height: "100%",
                objectFit: finalObjectFit,
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
                ...style,
              }}
              priority={priority}
              loading={imageLoading}
              onLoad={handleLoad}
              onError={handleError}
            />
          )
        }
      })()}

      {/* 错误占位符 */}
      {hasError && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#E5E5E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999999",
            fontSize: px(14),
          }}
        >
          加载失败
        </div>
      )}
    </div>
  );
}
