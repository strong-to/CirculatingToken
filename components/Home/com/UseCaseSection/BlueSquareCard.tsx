"use client"

import Image from 'next/image'
import { useState } from 'react'
import styles from './BlueSquareCard.module.css'
import { px } from '@/utils/pxToRem'
import { CDN_PREFIX, toCdnUrl } from '@/utils/cdn'
import type { HomepageProjectCard } from '@/lib/types'

interface BlueSquareCardProps {
  project: HomepageProjectCard
  accentColor: string
}

const FALLBACK_BUTTONS = ['AI', 'Data', 'Earn', 'Share']

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

export default function BlueSquareCard({ project, accentColor }: BlueSquareCardProps) {
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

  const descriptions = [project.summary, project.slogan ?? project.summary]
  const metrics = [
    { label: 'Market Cap', value: formatCurrency(project.tokenomics.price_info.market_cap) },
    { label: '24h Revenue', value: formatCurrency(project.metrics.operation.revenue_24h) },
    { label: 'Total Users', value: formatNumber(project.metrics.operation.total_users) },
    { label: 'User Rating', value: `${project.metrics.rating.score.toFixed(1)} / 5` },
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
          backgroundColor: showDetail ? accentColor : `${accentColor}CC`,
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
          <div className="mt-4 grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={`${project.systemId}-${metric.label}`}>
                <div
                  className="text-white/70 flex items-center gap-2"
                  style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontSize: px(14) }}
                >
                  {metric.label}
                </div>
                <div
                  className="font-semibold text-white"
                  style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontSize: px(18), marginTop: px(4) }}
                >
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
