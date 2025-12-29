'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { px } from '@/utils/pxToRem'
import { LearnMoreArrowIcon } from '@/components/icons/Icons'
import { useProjectDetail } from '../ProjectDetailProvider'

const FALLBACK_TERMS = [
  'Workflow',
  'Video+Audio',
  'Image',
  'Text',
  'Media',
  'Entertainment',
  'Generate',
  'Edit',
  'Model',
]

export default function SecondScreen() {
  const { project } = useProjectDetail()
  const containerRef = useRef<HTMLDivElement>(null)
  const [spacing, setSpacing] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const marqueeTexts = useMemo(() => {
    const tokens = new Set<string>([
      ...(project.taxonomy?.interaction_form ?? []),
      ...(project.taxonomy?.action ?? []),
      ...(project.taxonomy?.domain ?? []),
      project.profile?.type_en ?? '',
    ].filter(Boolean))
    if (tokens.size === 0) {
      return FALLBACK_TERMS
    }
    return Array.from(tokens)
  }, [project])

  useEffect(() => {
    const updateSpacing = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const padding = 80 * 2
      const availableWidth = containerWidth - padding
      setSpacing(availableWidth / marqueeTexts.length)
    }

    updateSpacing()
    window.addEventListener('resize', updateSpacing)
    return () => window.removeEventListener('resize', updateSpacing)
  }, [marqueeTexts.length])

  const extendedTexts = [...marqueeTexts, ...marqueeTexts, ...marqueeTexts]
  const totalWidth = spacing * marqueeTexts.length
  const animationDuration = 20

  useEffect(() => {
    const styleId = 'second-screen-text-animation'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement | null

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth}px); }
      }
    `

    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [totalWidth])

  const learnMoreHref = project.profile.links?.website || '#'

  return (
    <>
      <div
        ref={containerRef}
        className="flex-shrink-0"
        style={{
          paddingTop: px(90),
          marginLeft: px(80),
          marginRight: px(80),
          marginBottom: px(50),
          overflow: 'visible',
          position: 'relative',
          height: px(20),
          zIndex: 1,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="overflow-hidden"
          style={{
            maskImage: `linear-gradient(to right, transparent 0px, black ${px(80)}, black calc(100% - ${px(80)}), transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${px(80)}, black calc(100% - ${px(80)}), transparent 100%)`,
          }}
        >
          <div
            className="flex items-center"
            style={{
              animation: `scrollLeft ${animationDuration}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'fit-content',
              gap: px(16),
            }}
          >
            {extendedTexts.map((text, index) => (
              <div
                key={`${text}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: `${spacing}px`,
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(20),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#000000',
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: px(50),
          marginLeft: px(80),
          marginRight: px(80),
          minHeight: px(200),
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          className="scrollbar-hide"
          style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: px(40),
          }}
        >
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(24),
              lineHeight: px(36),
              letterSpacing: '0%',
              color: '#000000',
            }}
          >
            {project.profile.summary}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexShrink: 0,
            paddingBottom: px(32),
            paddingLeft: px(50),
            paddingRight: px(50),
            paddingTop: px(16),
          }}
        >
          <a
            href={learnMoreHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(24),
              lineHeight: px(36),
              letterSpacing: '0%',
              color: '#000000',
              cursor: 'pointer',
            }}
          >
            <span>Learn more details</span>
            <LearnMoreArrowIcon style={{ width: px(24), height: px(24) }} />
          </a>
        </div>
      </div>
    </>
  )
}
