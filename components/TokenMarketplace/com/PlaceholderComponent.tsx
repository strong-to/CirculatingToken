'use client'

import { useState, useRef } from 'react'
import { px } from '@/utils/pxToRem'
import Image from 'next/image'
import { projectsList, type ProjectData } from '@/app/data'
import ProjectModal from './PlaceholderComponent/ProjectModal'
import { log } from 'console'

interface PlaceholderComponentProps {
  // 可以添加需要的 props
}

// 获取图片路径的辅助函数
const getMaskImagePath = (index: number) => {
  return `/ProjectHub/PlaceholderComponent/img/Mask${index + 1}.png`
}

const getIconImagePath = (index: number) => {
  const iconNum = (index + 1).toString().padStart(3, '0')
  return `/ProjectHub/PlaceholderComponent/icon/img_${iconNum}.png`
}

// 格式化数字（千分位）
const formatNumber = (value: number | undefined): string => {
  if (typeof value !== 'number') return '0'
  return value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
}

// 格式化货币
const formatCurrency = (value: number | undefined): string => {
  if (typeof value !== 'number') return '$0.00'
  return `$${value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })}`
}

export default function PlaceholderComponent({}: PlaceholderComponentProps = {}) {
  // 使用真实数据
  const displayData = projectsList
  console.log('displayData--------------------------------1212',displayData)
  const [selectedCard, setSelectedCard] = useState<ProjectData | null>(null)
  const timersRef = useRef<Map<number, NodeJS.Timeout[]>>(new Map())

  const handleCardClick = (card: ProjectData) => {
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  const clearCardTimers = (index: number) => {
    const timers = timersRef.current.get(index)
    if (timers) {
      timers.forEach(timer => clearTimeout(timer))
      timersRef.current.delete(index)
    }
  }

  return (
    <div
    className='w-fill'
      style={{
        
        paddingLeft: px(29),
        paddingRight: px(29),
        paddingTop: px(20),
        paddingBottom: px(120),
      }}
    >
      {/* 在这里添加你的内容 */}


      <div className='w-full flex flex-wrap' style={{ gap: px(16) }}>
        
        {displayData.map((card, index) => (
          <div
            key={index}
            className='flex-col bgc-[#fdfdfd] cursor-pointer'
            style={{
              width: `calc((100% - ${px(16 * 5)}) / 6)`,
              borderRadius: px(8),
              boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              const card = e.currentTarget
              // 清除之前的定时器
              clearCardTimers(index)
              
              // 先放大
              card.style.transform = 'scale(1.05)'
              // 添加更明显的抖动效果（加快速度）
              const timers: NodeJS.Timeout[] = []
              
              timers.push(setTimeout(() => {
                card.style.transform = 'scale(1.02) translateX(-4px) translateY(-2px)'
              }, 20))
              timers.push(setTimeout(() => {
                card.style.transform = 'scale(1.08) translateX(4px) translateY(2px)'
              }, 40))
              timers.push(setTimeout(() => {
                card.style.transform = 'scale(1.04) translateX(-2px) translateY(-1px)'
              }, 60))
              timers.push(setTimeout(() => {
                card.style.transform = 'scale(1.06) translateX(2px) translateY(1px)'
              }, 80))
              timers.push(setTimeout(() => {
                card.style.transform = 'scale(1.05) translateX(0) translateY(0)'
              }, 100))
              
              timersRef.current.set(index, timers)
            }}
            onMouseLeave={(e) => {
              // 清除所有定时器
              clearCardTimers(index)
              // 立即重置状态
              e.currentTarget.style.transform = 'scale(1) translateX(0) translateY(0)'
            }}
            onClick={() => handleCardClick(card)}
          >
            <div 
              className='w-full relative overflow-hidden' 
              style={{
                aspectRatio: '1 / 1',
              }}
            >
              <Image
                src={
                  card.profile?.media?.banner
                    ? card.profile.media.banner.replace(/^\.\.\/\.\.\/\.\.\/public/, '')
                    : '/default-banner.png'
                }
                alt={card.profile?.name || card.system_id}
                fill
                className="object-cover"
              />
            </div>

           <div style={{
            paddingTop: px(18),
            paddingLeft: px(20),
            paddingRight: px(18),
            paddingBottom: px(20),
           }}
           className='flex flex-col bgc-[#FFFFFF]'
           >

            <div className='flex items-center' style={{ gap: px(12) }}>

                <div style={{ width: px(40), height: px(40), position: 'relative' }}>
                  <Image
                     src={
                        card.profile?.media?.logo
                          ? card.profile.media.logo.replace(/^\.\.\/\.\.\/\.\.\/public/, '')
                          : '/default-logo.png'
                      }
                    alt={card.profile?.name || card.system_id}
                    fill
                    className="object-cover"
                  />
                  
                </div>

                 <div className='flex flex-col justify-between'>

                     <div style={{
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(20),
                       lineHeight: '100%',
                       letterSpacing: '0%',
                       color: '#000000',
                       height: px(18),
                     }}>{card.profile?.name || card.system_id}</div>


                     
                     <div style={{
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       marginTop: px(5),
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(20),
                       lineHeight: '100%',
                       letterSpacing: '0%',
                       color: '#8C8C8C',
                       height: px(17),
                     }}>{card.system_id}</div>

                 </div>


            </div>



             <div style={{
                marginTop: px(17),
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontSize: px(18),
               fontWeight: 300,
               color: '#000000',
               lineHeight: '1.2',
               textAlign: 'left',
                 }}>
                    {card.profile?.media?.introduction || ''}
            </div>

           </div>
          </div>
        ))}
      </div>
      
      {/* 弹窗 */}
      <ProjectModal
        selectedCard={selectedCard}
        onClose={handleCloseModal}
        getMaskImagePath={getMaskImagePath}
        getIconImagePath={getIconImagePath}
        formatNumber={formatNumber}
        formatCurrency={formatCurrency}
      />

    </div>
  )
}
