'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { images } from '@/components/Home/com/YourNextWorld/resources'
import { useTexts } from '@/components/Home/com/YourNextWorld/useTexts'
import { useGlobalModal } from '@/components/GlobalModal/GlobalModal'

interface ModelCardSliderProps {
  previewMode?: boolean
}

export default function ModelCardSlider({ previewMode = false }: ModelCardSliderProps = {}) {
  const texts = useTexts()
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const { setSelectedCard, clickedCards, setClickedCards } = useGlobalModal()
  const swiperRef = useRef<SwiperType | null>(null)
  const gap = 15 // 1.41875rem = 22.7px

  const handleCardClick = (cardType: string) => {
    if (previewMode) return
    // 只能选一个：如果点击的是已经选中的卡片，则取消选中；否则清空之前的选中，只选中当前卡片
    setClickedCards(prev => {
      const newSet = new Set<string>()
      if (prev.has(cardType)) {
        // 如果点击的是已选中的卡片，则取消选中（返回空 Set）
        setSelectedCard(null)
        return newSet
      } else {
        // 否则清空之前的选中，只选中当前卡片
        newSet.add(cardType)
        setSelectedCard(cardType)
        return newSet
      }
    })
  }

  return (
    <div 
      className="space-y-4"
      style={{
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div 
        className="flex items-center justify-between"
        style={{ marginBottom: '2.5625rem' }} // 41px
      >
        <div
          className="text-black"
          style={{ 
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: '1.75rem' // 28px
          }}
        >
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={gap}
          loop={true}
          grabCursor={true}
          watchSlidesProgress={true}
          centeredSlides={false}
          // 滚动逻辑：freeMode + mousewheel 惯性左右滑，参考 ProjectsYouMayBeInterestedIn
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 1.5,
            momentumBounce: false,
            sticky: false,
          }}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 1.2,
            thresholdDelta: 1,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 1,
            },
          }}
        >
          {/* 5 个盒子 */}
          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg  flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("datasets")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("datasets")}
            >
              {/* 初始化图片 */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "datasets" || clickedCards.has("datasets")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.datasets}
                  alt={texts.cardDatasets}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* hover gif */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "datasets" || clickedCards.has("datasets")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.datasets}
                  alt={texts.cardDatasets}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardDatasets}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("computePool")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("computePool")}
            >
              {/* 初始化图片 */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "computePool" || clickedCards.has("computePool")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.computePool}
                  alt={texts.cardComputePool}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* hover gif */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "computePool" || clickedCards.has("computePool")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.computePool}
                  alt={texts.cardComputePool}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardComputePool}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg  flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("foundationalModels")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("foundationalModels")}
            >
              {/* 初始化图片 */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity:
                    (hoveredCard === "foundationalModels" || clickedCards.has("foundationalModels")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.foundationalModels}
                  alt={texts.cardFoundationalModels}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* hover gif */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity:
                    (hoveredCard === "foundationalModels" || clickedCards.has("foundationalModels")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.foundationalModels}
                  alt={texts.cardFoundationalModels}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardFoundationalModels}
              </div>
            </div>
          </SwiperSlide>
       
          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("workflows")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("workflows")}
            >
              {/* 初始化图片 */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "workflows" || clickedCards.has("workflows")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.workflows}
                  alt={texts.cardWorkflows}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* hover gif */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "workflows" || clickedCards.has("workflows")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.workflows}
                  alt={texts.cardWorkflows}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardWorkflows}
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("aiAgents")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("aiAgents")}
            >
              {/* 初始化图片 */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "aiAgents" || clickedCards.has("aiAgents")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.aiAgents}
                  alt={texts.cardAiAgents}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* hover gif */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "aiAgents" || clickedCards.has("aiAgents")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.aiAgents}
                  alt={texts.cardAiAgents}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardAiAgents}
              </div>
            </div>
          </SwiperSlide>

          {/* 额外再复制 5 个盒子，初始化时一共 10 张，滚动更顺畅 */}
          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg  flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("datasets")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("datasets")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "datasets" || clickedCards.has("datasets")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.datasets}
                  alt={texts.cardDatasets}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "datasets" || clickedCards.has("datasets")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.datasets}
                  alt={texts.cardDatasets}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardDatasets}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("computePool")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("computePool")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "computePool" || clickedCards.has("computePool")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.computePool}
                  alt={texts.cardComputePool}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "computePool" || clickedCards.has("computePool")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.computePool}
                  alt={texts.cardComputePool}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardComputePool}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg  flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("foundationalModels")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("foundationalModels")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity:
                    (hoveredCard === "foundationalModels" || clickedCards.has("foundationalModels")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.foundationalModels}
                  alt={texts.cardFoundationalModels}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity:
                    (hoveredCard === "foundationalModels" || clickedCards.has("foundationalModels")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.foundationalModels}
                  alt={texts.cardFoundationalModels}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardFoundationalModels}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("workflows")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("workflows")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "workflows" || clickedCards.has("workflows")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.workflows}
                  alt={texts.cardWorkflows}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "workflows" || clickedCards.has("workflows")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.workflows}
                  alt={texts.cardWorkflows}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardWorkflows}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="relative overflow-hidden shadow-lg flex items-end justify-center"
              style={{
                paddingBottom: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                borderRadius: px(4),
                aspectRatio: "2 / 3",
                cursor: previewMode ? 'default' : 'pointer',
              }}
              onMouseEnter={previewMode ? undefined : () => setHoveredCard("aiAgents")}
              onMouseLeave={previewMode ? undefined : () => setHoveredCard(null)}
              onClick={previewMode ? undefined : () => handleCardClick("aiAgents")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "aiAgents" || clickedCards.has("aiAgents")) ? 0 : 1,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.init.aiAgents}
                  alt={texts.cardAiAgents}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: (hoveredCard === "aiAgents" || clickedCards.has("aiAgents")) ? 1 : 0,
                  transition:
                    "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  willChange: "opacity",
                }}
              >
                <Image
                  src={images.hover.aiAgents}
                  alt={texts.cardAiAgents}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-[#FFFFFF] relative z-10"
                style={{ fontSize: px(25) }}
              >
                {texts.cardAiAgents}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

