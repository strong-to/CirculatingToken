"use client"

import Image from 'next/image'
import { useState } from 'react'
import styles from './BlueSquareCard.module.css'
import { px } from '@/utils/pxToRem'
import { CDN_PREFIX } from '@/utils/cdn'
import type { HomepageProjectCard } from '@/lib/types'

interface BlueSquareCardProps {
  project: HomepageProjectCard
  accentColor: string
}

const FALLBACK_BUTTONS = ['AI', 'Data', 'Earn', 'Share']
const HOVER_OVERLAY_COLOR = '#083FD8'
const DETAIL_OVERLAY_COLOR = '#CB2C22'

function calculateButtonWidths(buttons: string[]): string[] {
  if (buttons.length !== 4) {
    return ['66%', '33%', '33%', '66%']
  }
  const lengths = buttons.map((btn) => btn.length || 1)
  const row1Total = lengths[0] + lengths[1]
  const row2Total = lengths[2] + lengths[3]
  return [
    `${(lengths[0] / row1Total) * 100}%`,
    `${(lengths[1] / row1Total) * 100}%`,
    `${(lengths[2] / row2Total) * 100}%`,
    `${(lengths[3] / row2Total) * 100}%`,
  ]
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`
  return `$${value.toFixed(2)}`
}

function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return `${value}`
}

function RatingStars({ score }: { score: number }) {
  const filledStars = Math.round(score)
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, idx) => (
        <svg
          key={`star-${idx}`}
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z"
            fill={idx < filledStars ? 'white' : 'none'}
            stroke="white"
          />
        </svg>
      ))}
    </div>
  )
}

export default function BlueSquareCard({ project, accentColor: _accentColor }: BlueSquareCardProps) {
  const [showDetail, setShowDetail] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [buttonHovered, setButtonHovered] = useState<string | null>(null)

  const taxonomyButtons = [
    project.taxonomy.interaction_form?.[0],
    project.taxonomy.domain?.[0],
    project.taxonomy.action?.[0],
    project.taxonomy.object?.[0],
  ].map((value, idx) => value ?? FALLBACK_BUTTONS[idx])

  const buttonWidths = calculateButtonWidths(taxonomyButtons)
  const iconSrc = project.icon ?? `${CDN_PREFIX}/home/icons/img/games.png`
  const arrowIcon = `${CDN_PREFIX}/home/icons/img/arr.png`
  const overlayColor = showDetail ? DETAIL_OVERLAY_COLOR : HOVER_OVERLAY_COLOR

  const descriptions = [project.summary, project.slogan ?? project.summary]
  const detailMetrics: Array<{
    label: string
    value: string
    actionLabel: string
    type?: 'rating'
    ratingScore?: number
  }> = [
    {
      label: '24h Revenue',
      value: formatCurrency(project.metrics.operation.revenue_24h),
      actionLabel: 'Details',
    },
    {
      label: 'Market Cap',
      value: formatCurrency(project.tokenomics.price_info.market_cap),
      actionLabel: 'Share',
    },
    {
      label: 'Total Users',
      value: formatNumber(project.metrics.operation.total_users),
      actionLabel: 'Market',
    },
    {
      label: 'User Rating',
      value: `${project.metrics.rating.score.toFixed(1)} / 5`,
      actionLabel: 'Favorites',
      type: 'rating',
      ratingScore: project.metrics.rating.score,
    },
  ]

  return (
    <div
      className={`relative overflow-hidden shadow-lg ${styles.card}`}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowDetail(false)
        setButtonHovered(null)
      }}
    >
      <Image
        src={project.heroImage}
        alt={project.heroAlt}
        width={340}
        height={500}
        className="w-full h-full object-cover"
        priority
      />

      <div
        className="absolute bottom-0 left-0 w-full aspect-square text-white flex flex-col justify-start cursor-pointer transition-all duration-300 ease-in-out"
        style={{
          padding: px(30),
          backgroundColor: overlayColor,
          opacity: isHovered || showDetail ? 1 : 0,
          transform: isHovered || showDetail ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: isHovered || showDetail ? 'auto' : 'none',
        }}
        onClick={(e) => {
          e.stopPropagation()
          setShowDetail(true)
        }}
      >
        {!showDetail && (
          <>
            <div>
              <div className="flex items-center justify-center" style={{ width: px(60), height: px(60), borderRadius: px(3) }}>
                <div className="relative flex items-center justify-center" style={{ width: px(60), height: px(60) }}>
                  <Image src={iconSrc} alt="icon" fill className="object-contain" />
                </div>
              </div>
              <div className="flex justify-between" style={{ marginTop: px(17) }}>
                <div className="flex-1 text-start">
                  <div
                    className="leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontSize: px(23), lineHeight: px(25) }}
                  >
                    {project.name}
                  </div>
                  <div
                    className="leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontSize: px(23), lineHeight: px(25) }}
                  >
                    {project.systemId}
                  </div>
                </div>
                <div className="h-full flex items-end justify-end" style={{ width: px(24), height: px(24) }}>
                  <Image src={arrowIcon} alt="arrow" width={24} height={24} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(30) }}>
              {taxonomyButtons.slice(0, 2).map((button, idx) => (
                <button
                  key={`${button}-${idx}`}
                  className="border border-white flex items-center justify-center cursor-pointer"
                  style={{
                    width: buttonWidths[idx],
                    height: '100%',
                    marginRight: idx === 0 ? px(10) : 0,
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    borderRadius: px(4),
                    backgroundColor: buttonHovered === button ? '#ffffff' : 'transparent',
                    color: buttonHovered === button ? '#000000' : '#ffffff',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={() => setButtonHovered(button)}
                  onMouseLeave={() => setButtonHovered(null)}
                >
                  {button}
                </button>
              ))}
            </div>

            <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(12) }}>
              {taxonomyButtons.slice(2, 4).map((button, idx) => (
                <button
                  key={`${button}-${idx + 2}`}
                  className="border border-white flex items-center justify-center cursor-pointer"
                  style={{
                    width: buttonWidths[idx + 2],
                    height: '100%',
                    marginRight: idx === 0 ? px(10) : 0,
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    borderRadius: px(4),
                    backgroundColor: buttonHovered === button ? '#ffffff' : 'transparent',
                    color: buttonHovered === button ? '#000000' : '#ffffff',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={() => setButtonHovered(button)}
                  onMouseLeave={() => setButtonHovered(null)}
                >
                  {button}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-2 mt-6">
              {descriptions.map((desc, index) => (
                <p
                  key={`${project.systemId}-desc-${index}`}
                  className="text-white font-light"
                  style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontSize: px(14), lineHeight: '130%' }}
                >
                  {desc}
                </p>
              ))}
            </div>
          </>
        )}

        {showDetail && (
          <>
            <div>
              <div className="flex items-center justify-start" style={{ height: px(60) }}>
                <div className="relative flex items-center justify-center" style={{ width: px(60), height: px(60), marginRight: px(15) }}>
                  <Image src={iconSrc} alt="icon" fill className="object-contain" />
                </div>

                <div className="h-full flex flex-col justify-between" style={{ paddingTop: px(2), paddingBottom: px(2) }}>
                  <div
                    className="leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontSize: px(23), lineHeight: px(25) }}
                  >
                    {project.name}
                  </div>
                  <div
                    className="leading-[1] tracking-[0] text-white"
                    style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontSize: px(23), lineHeight: px(25) }}
                  >
                    {project.systemId}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: px(26) }}>
              {detailMetrics.map((metric, idx) => (
                <div
                  key={`${project.systemId}-${metric.label}`}
                  className="flex items-center justify-between"
                  style={{
                    height: px(36),
                    marginTop: idx === 0 ? 0 : px(20),
                  }}
                >
                  <div className="flex flex-col items-start justify-between" style={{ height: '100%' }}>
                    <div
                      className="flex items-center"
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontSize: px(15),
                        color: '#FFC8C5',
                      }}
                    >
                      {metric.label}
                    </div>
                    <div
                      className="flex items-center"
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontSize: px(17),
                        color: '#FFFFFF',
                      }}
                    >
                      {metric.type === 'rating' && metric.ratingScore !== undefined ? (
                        <div className="flex items-center gap-2">
                          <RatingStars score={metric.ratingScore} />
                          <span>{metric.value}</span>
                        </div>
                      ) : (
                        metric.value
                      )}
                    </div>
                  </div>
                  <button type="button" className={styles.buttonactionButton}>
                    {metric.actionLabel}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
