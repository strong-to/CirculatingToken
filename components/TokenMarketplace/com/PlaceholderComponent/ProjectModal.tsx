'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import Image from 'next/image'
import Link from 'next/link'
import type { ProjectData } from '@/app/data'
import type { ReactNode } from 'react'

interface ProjectModalProps {
  selectedCard: ProjectData | null
  onClose: () => void
  getMaskImagePath: (index: number) => string
  getIconImagePath: (index: number) => string
  formatNumber: (value: number | undefined) => string
  formatCurrency: (value: number | undefined) => string
}

const renderMarkdown = (markdown?: string): ReactNode => {
  if (!markdown) return null

  const blocks = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.map((block, index) => {
    if (block.startsWith('### ')) {
      return (
        <h4
          key={`modal-md-h3-${index}`}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(20),
            marginTop: index === 0 ? 0 : px(20),
          }}
        >
          {block.replace(/^###\s+/, '')}
        </h4>
      )
    }

    if (block.startsWith('## ')) {
      return (
        <h3
          key={`modal-md-h2-${index}`}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 500,
            fontSize: px(24),
            marginTop: index === 0 ? 0 : px(24),
          }}
        >
          {block.replace(/^##\s+/, '')}
        </h3>
      )
    }

    const lines = block.split('\n')
    const listLines = lines.filter((line) => line.trim().startsWith('- '))
    if (listLines.length === lines.length) {
      return (
        <ul key={`modal-md-list-${index}`} style={{ paddingLeft: px(20), marginTop: index === 0 ? 0 : px(16) }}>
          {listLines.map((line, itemIndex) => (
            <li
              key={`modal-md-li-${index}-${itemIndex}`}
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                lineHeight: px(24),
                color: '#000000',
              }}
            >
              {line.replace(/^-+\s*/, '')}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p
        key={`modal-md-p-${index}`}
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(16),
          lineHeight: px(26),
          color: '#000000',
          marginTop: index === 0 ? 0 : px(14),
        }}
      >
        {block}
      </p>
    )
  })
}

export default function ProjectModal({
  selectedCard,
  onClose,
  getMaskImagePath,
  getIconImagePath,
  formatNumber,
  formatCurrency,
}: ProjectModalProps) {
  const [isDetailsHovered, setIsDetailsHovered] = useState(false)
  const [isFavoritesHovered, setIsFavoritesHovered] = useState(false)

  if (selectedCard === null) return null

  // 从 system_id 中提取索引（例如 DBTF0000001 -> 0, DBTF0000002 -> 1）
  const cardIndex = selectedCard.system_id ? parseInt(selectedCard.system_id.replace('DBTF', '')) - 1 : 0
  const detailHref = selectedCard.system_id ? `/LendingVault/${selectedCard.system_id}` : '#'

  return (
    <div
      className="fixed inset-0"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 99999,
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          borderRadius: px(4),
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
            const svg = e.currentTarget.querySelector('svg path')
            if (svg) {
              svg.setAttribute('fill', '#000000')
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            const svg = e.currentTarget.querySelector('svg path')
            if (svg) {
              svg.setAttribute('fill', '#252525')
            }
          }}
          style={{
            position: 'absolute',
            top: px(20),
            right: px(20),
            width: px(30),
            height: px(30),
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100000,
            borderRadius: '50%',
            transition: 'background-color 0.2s ease',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99805 23.2676L13.6748 15.0449L5.45117 7.36816L6.73047 5.99805L14.9541 13.6748L22.6318 5.44922L24.002 6.72852L16.3252 14.9541L24.5488 22.6309L23.2695 24.001L15.0459 16.3242L7.36914 24.5469L5.99805 23.2676Z" fill="#252525"/>
          </svg>
        </button>

        {/* 弹窗内容 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width:px(680), 
            height: px(680), 
            position: 'relative', 
            flexShrink: 0,
            overflow: 'hidden',
            borderRadius: 0,
          }}>
            <Image
              src={selectedCard?.profile?.media?.banner?.replace(/^\.\.\/\.\.\/\.\.\/public/, '') || getMaskImagePath(cardIndex)}
              alt={selectedCard?.profile?.name || selectedCard?.system_id || ''}
              fill
              className="object-cover"
              style={{
                borderRadius: 0,
              }}
            />
          </div>

          <div style={{
            width:px(680),
            height: px(680),
            backgroundColor: '#ffffff',
            paddingLeft: px(40),
            paddingRight: px(40),
            paddingTop: px(40),
            paddingBottom: px(40),
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            flexShrink: 0,
            position: 'relative',
          }}>
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
                const svg = e.currentTarget.querySelector('svg path')
                if (svg) {
                  svg.setAttribute('fill', '#000000')
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                const svg = e.currentTarget.querySelector('svg path')
                if (svg) {
                  svg.setAttribute('fill', '#252525')
                }
              }}
              style={{
                position: 'absolute',
                top: px(20),
                right: px(20),
                width: px(30),
                height: px(30),
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100000,
                borderRadius: '50%',
                transition: 'background-color 0.2s ease',
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99805 23.2676L13.6748 15.0449L5.45117 7.36816L6.73047 5.99805L14.9541 13.6748L22.6318 5.44922L24.002 6.72852L16.3252 14.9541L24.5488 22.6309L23.2695 24.001L15.0459 16.3242L7.36914 24.5469L5.99805 23.2676Z" fill="#252525"/>
              </svg>
            </button>

            {/* 图标、名称和ID */}
            <div className='flex items-center' style={{ gap: px(12), marginBottom: px(20) }}>
              <div style={{ width: px(60), height: px(60), position: 'relative' }}>
                <Image
                  src={
                    selectedCard?.profile?.media?.logo
                      ? selectedCard?.profile?.media?.logo.replace(/^\.\.\/\.\.\/\.\.\/public/, '')
                      : '/default-logo.png'
                  }
                  alt={selectedCard?.profile?.name || selectedCard?.system_id || ''}
                  fill
                  className="object-cover"
                />
              </div>
              <div className='flex flex-col justify-between'>
                <div style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(24),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                  height: px(20),
                }}>
                    {selectedCard?.profile?.name || selectedCard?.system_id}
                </div>

                <div style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  marginTop: px(12),
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(24),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                  height: px(20),
                }}>
                    {selectedCard?.system_id}
                </div>
              </div>
            </div>

            {/* 描述文字 */}
            <div style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(19),
              fontWeight: 300,
              color: '#000000',
              lineHeight: '1.2',
              textAlign: 'left',
              marginBottom: px(22),
            }}>
                {selectedCard?.profile?.slogan || selectedCard?.profile?.summary || ''}
            </div>

            {/* 标签按钮区域 */}
            {selectedCard && (
              <div style={{ marginBottom: px(20) }}>
                <div className='flex flex-wrap' style={{ gap: px(8), marginBottom: px(8) }}>
                    
                <div  style={{
                      padding: `${px(7)} ${px(12)}`,
                      border: '0.7px solid #000000',
                      borderRadius: px(4),
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontSize: px(14),
                      fontWeight: 300,
                      color: '#000000',
                    }}>
                        11111
                </div>
                
                </div>
               
              </div>
            )}

            {/* 指标数据 */}
            {selectedCard && (
              <div className='flex flex-wrap' style={{ gap: px(20), marginBottom: px(20) }}>
                <div>
                  <div style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontSize: px(15),
                    fontWeight: 300,
                    color: '#8C8C8C',
                    marginBottom: px(4),
                  }}>24h Revenue</div>

                  <div style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontSize: px(20),
                    fontWeight: 300,
                    color: '#000000',
                  }}>
                    {formatCurrency(selectedCard?.metrics?.operation?.revenue_24h)}</div>
                </div>
               
              </div>
            )}

            {/* 大文本框 */}
            <div
              style={{
                minHeight: px(140),
                border: '0.7px solid #000000',
                borderRadius: px(4),
                padding: px(16),
                marginBottom: px(60),
                overflow: 'auto',
              }}
            >
              {renderMarkdown(
                selectedCard?.profile?.description_md ||
                  selectedCard?.profile?.summary ||
                  selectedCard?.profile?.slogan ||
                  ''
              )}
            </div>

            {/* 底部按钮 */}
            <div className='flex justify-center items-center' style={{ gap: px(20) }}>
              <Link
                href={detailHref}
                prefetch={false}
                onMouseEnter={() => setIsDetailsHovered(true)}
                onMouseLeave={() => setIsDetailsHovered(false)}
                onClick={() => onClose()}
                style={{
                  width: px(130),
                  height: px(30),
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isDetailsHovered ? '#000000' : '#FFFFFF',
                  color: isDetailsHovered ? '#FFFFFF' : '#000000',
                  border: isDetailsHovered ? 'none' : '0.7px solid #000000',
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(14),
                  fontWeight: 300,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
              >
                Details
              </Link>
              <button
                onMouseEnter={() => setIsFavoritesHovered(true)}
                onMouseLeave={() => setIsFavoritesHovered(false)}
                style={{
                  width: px(130),
                  height: px(30),
                  backgroundColor: isFavoritesHovered ? '#000000' : '#FFFFFF',
                  color: isFavoritesHovered ? '#FFFFFF' : '#000000',
                  border: isFavoritesHovered ? 'none' : '0.7px solid #000000',
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(14),
                  fontWeight: 300,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
