'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  MarketCapIcon,
  RevenueIcon,
  TotalUsersIcon,
  UserRatingIcon,
} from '@/components/icons/Icons'
import styles from './BlueSquareCard.module.css'

interface BlueSquareCardProps {
  src: string
  alt: string
}

export default function BlueSquareCard({ src, alt }: BlueSquareCardProps) {
  const [showDetail, setShowDetail] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative overflow-hidden shadow-lg ${styles.card}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 底层整张图片 */}
      <Image
        src={src}
        alt={alt}
        width={340}
        height={500}
        className="w-full h-full object-cover"
        priority
      />

      {/* 覆盖在图片上的正方形蓝色方块（宽高相等，位于下半部分） */}
      {(isHovered || showDetail) && (
        <div
          className={`absolute bottom-0 left-0 w-full aspect-square bg-[#8000EA]/80 text-white flex flex-col justify-between cursor-pointer ${styles.overlay}`}
          onClick={() => setShowDetail((prev) => !prev)}
        >
        {showDetail ? (
          <>
            {/* 顶部：左侧图标 + 标题，右侧 Project Details 按钮 */}
            <div className={`flex items-center justify-evenly  ${styles.compactTop}`}>
            <div className={`border border-white flex items-center justify-center ${styles.iconContainerSmallsh}`}>
            <div className={` flex items-center justify-center ${styles.iconContainerSmall} ${styles.iconImageWrapper}`}>
                <Image 
                  src="/home/icons/img/games.png" 
                  alt="games" 
                  fill 
                  className={styles.iconImage}
                />
              </div>
                </div>
              
              <div className="flex-1 text-center">
                <div className={`leading-[1] tracking-[0] text-white font-semibold ${styles.titleTextSmall}`}>
                  WALL-E& EVE
                </div>
                <div className={`leading-[1] tracking-[0] text-white font-semibold ${styles.titleTextSmallMargin}`}>
                  DBAI0000211
                </div>
              </div>
              <div className="h-full">
                {/* <Image src="/home/icons/img/arr.png" alt="arrow" width={24} height={24} /> */}
              </div>
            </div>

            {/* 底部：左侧四个指标 + 右侧三个按钮 */}
            <div className={`flex ${styles.detailBottom}`} style={{width: '100%'}}>
              {/* 左列指标 */}

              <div className={`grid grid-cols-2 font-light ${styles.compactMetrics}`} style={{width: '100%'}}>

              <div>
                <div className={` flex items-center ${styles.item_compactMetricLabel}`}>
                  <MarketCapIcon className={styles.icon18} />
                  <span>Market Cap</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>$12.3k</div>
              </div>

            <div>
              <button className={`border border-white flex items-center justify-center ${styles.buttonactionButton}`}>
              Project Details
                </button>
            </div>

              <div>
                <div className={` flex items-center ${styles.item_compactMetricLabel}`}>
                  <RevenueIcon className={styles.icon12x19} />
                  <span>24h Revenue</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>$250k</div>
              </div>
              <div>
              <button className={`border border-white flex items-center justify-center ${styles.buttonactionButton}`}>
                  Project Details
                </button>
            </div>

              <div>
                <div className={` flex items-center ${styles.item_compactMetricLabel}`}>
                  <TotalUsersIcon className={styles.icon18x16} />
                  <span>Total Users</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>1.2M</div>
              </div>
              <div>
              <button className={`border border-white flex items-center justify-center ${styles.buttonactionButton}`}>
              Lending
                </button>
            </div>

              <div>
                <div className={` flex items-center ${styles.compactMetricLabel}`}>
                  <UserRatingIcon className={styles.icon18x10} />
                  <span>User Rating</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>★★★★★</div>
              </div>
              <div>
              <button className={`border border-white flex items-center justify-center ${styles.buttonactionButton}`}>
              Add to Favorites
                </button>
            </div>

            </div>
              

              {/* 右列按钮 */}
              {/* <div className={`flex flex-col font-semibold ${styles.buttonsColumn}`}>
                <button className={`border border-white flex items-center justify-center ${styles.actionButton}`}>
                  Market
                </button>
                <button className={`border border-white flex items-center justify-center ${styles.actionButton}`}>
                  Lending
                </button>
                <button className={`border border-white flex items-center justify-center ${styles.actionButton}`}>
                  Add to Favorites
                </button>
              </div> */}
            </div>
          </>
        ) : (
          <>
            {/* 顶部：图标 + 标题 + 箭头（紧凑版） */}
            <div className={`flex items-center justify-evenly  ${styles.compactTop}`}>
            <div className={`border border-white flex items-center justify-center ${styles.iconContainerSmallsh}`}>
            <div className={` flex items-center justify-center ${styles.iconContainerSmall} ${styles.iconImageWrapper}`}>
                <Image 
                  src="/home/icons/img/games.png" 
                  alt="games" 
                  fill 
                  className={styles.iconImage}
                />
              </div>
                </div>
              
              <div className="flex-1 text-center">
                <div className={`leading-[1] tracking-[0] text-white font-semibold ${styles.titleTextSmall}`}>
                  WALL-E& EVE
                </div>
                <div className={`leading-[1] tracking-[0] text-white font-semibold ${styles.titleTextSmallMargin}`}>
                  DBAI0000211
                </div>
              </div>
              <div className="h-full">
                <Image src="/home/icons/img/arr.png" alt="arrow" width={24} height={24} />
              </div>
            </div>

            {/* 中间：两个按钮 */}
            <div className={`flex ${styles.compactButtons}`}>
              <button className={`border border-white font-semibold text-white flex items-center justify-center ${styles.compactButton}`}>
                AI avatar
              </button>
              <button className={`border border-white font-semibold text-white flex items-center justify-center ${styles.compactButton} ${styles.compactButtonMargin}`}>
                Emotional connection
              </button>
            </div>

            {/* 底部：四列指标（紧凑版） */}
            <div className={`grid grid-cols-2 font-light ${styles.compactMetrics}`}>
              <div>
                <div className={` flex items-center ${styles.compactMetricLabel}`}>
                  <MarketCapIcon className={styles.icon18} />
                  <span>Market Cap</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>$12.3k</div>
              </div>
              <div>
                <div className={` flex items-center ${styles.compactMetricLabel}`}>
                  <RevenueIcon className={styles.icon12x19} />
                  <span>24h Revenue</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>$250k</div>
              </div>
              <div>
                <div className={` flex items-center ${styles.compactMetricLabel}`}>
                  <TotalUsersIcon className={styles.icon18x16} />
                  <span>Total Users</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>1.2M</div>
              </div>
              <div>
                <div className={` flex items-center ${styles.compactMetricLabel}`}>
                  <UserRatingIcon className={styles.icon18x10} />
                  <span>User Rating</span>
                </div>
                <div className={`font-semibold text-white ${styles.metricValue}`}>★★★★★</div>
              </div>
            </div>
          </>
        )}
        </div>
      )}
    </div>
  )
}


