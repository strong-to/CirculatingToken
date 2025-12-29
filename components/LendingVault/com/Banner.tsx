'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import { px } from '@/utils/pxToRem'
import { CDN_PREFIX, toCdnUrl } from '@/utils/cdn'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useProjectDetail } from '../ProjectDetailProvider'

const FALLBACK_CAROUSEL = Array.from({ length: 6 }, (_, i) => `${CDN_PREFIX}/LendingVault/banner/item/Mask${i + 1}.png`)

export default function Banner() {
  const { project } = useProjectDetail()
  const [isWindows, setIsWindows] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const heroImage = useMemo(() => toCdnUrl(project.profile.media?.banner ?? FALLBACK_CAROUSEL[0]), [project.profile.media?.banner])
  const carouselImages = useMemo(() => {
    const assets = project.profile.media?.assets ?? []
    const matched = assets
      .filter((asset) => asset.context === 'lending_vault_banner_carousel')
      .map((asset) => toCdnUrl(asset.url))
    if (matched.length > 0) {
      return matched
    }
    return FALLBACK_CAROUSEL
  }, [project.profile.media?.assets])

  // Detect OS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const platform = navigator.platform.toLowerCase()
      const userAgent = navigator.userAgent.toLowerCase()
      setIsWindows(platform.includes('win') || userAgent.includes('windows'))
    }
  }, [])

  // Windows arrow key control
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isWindows || !swiperRef.current) return
      if (e.key === 'ArrowLeft') {
        swiperRef.current.slidePrev()
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.slideNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isWindows])

  return (
    <>
      <div className="w-full" style={{ height: px(540) }}>
        <ImageWithSkeleton
          src={heroImage}
          alt={`${project.profile.name} hero`}
          width={1920}
          height={540}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
          objectFit="cover"
          priority
        />
      </div>

      <div
        className="w-full relative"
        style={{ height: px(168), marginTop: px(80) }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isWindows && isHovered && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              left: px(10),
              width: px(60),
              height: px(60),
              backgroundColor: '#3d4347',
              borderRadius: '50%',
            }}
            aria-label="Previous slide"
          >
            <svg
              width="14"
              height="30"
              viewBox="0 0 14 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: px(-2) }}
            >
              <mask id="path-1-inside-1-banner-left" fill="white">
                <path d="M16 32L0 16.0001L16 0" />
              </mask>
              <path
                d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z"
                fill="white"
                mask="url(#path-1-inside-1-banner-left)"
              />
            </svg>
          </button>
        )}

        {isWindows && isHovered && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              right: px(10),
              width: px(60),
              height: px(60),
              backgroundColor: '#3d4347',
              borderRadius: '50%',
            }}
            aria-label="Next slide"
          >
            <svg
              width="14"
              height="30"
              viewBox="0 0 14 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(180deg)', marginRight: px(-2) }}
            >
              <mask id="path-1-inside-1-banner-right" fill="white">
                <path d="M16 32L0 16.0001L16 0" />
              </mask>
              <path
                d="M0 16.0001L-1.41422 14.5858L-2.82843 16.0001L-1.41421 17.4143L0 16.0001ZM16 32L17.4142 30.5858L1.41421 14.5858L0 16.0001L-1.41421 17.4143L14.5858 33.4142L16 32ZM0 16.0001L1.41422 17.4143L17.4142 1.41421L16 0L14.5858 -1.41421L-1.41422 14.5858L0 16.0001Z"
                fill="white"
                mask="url(#path-1-inside-1-banner-right)"
              />
            </svg>
          </button>
        )}

        <div
          style={{
            marginLeft: px(-80),
            width: `calc(100% + ${px(80)})`,
            overflow: 'hidden',
          }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={42}
            slidesPerView="auto"
            loop={carouselImages.length > 1}
            grabCursor
            watchSlidesProgress
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="h-full"
            style={{ width: '100%', overflow: 'hidden' }}
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide
                key={`${src}-${index}`}
                style={{
                  width: px(299),
                  height: '100%',
                }}
              >
                <div className="h-full overflow-hidden">
                  <ImageWithSkeleton
                    src={src}
                    alt={`${project.profile.name} slide ${index + 1}`}
                    width={299}
                    height={168}
                    className="w-full h-full"
                    style={{ width: '100%', height: '100%' }}
                    objectFit="cover"
                    priority={index < 2}
                    loading={index < 2 ? undefined : 'lazy'}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
