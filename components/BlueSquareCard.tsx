'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  MarketCapIcon,
  RevenueIcon,
  TotalUsersIcon,
  UserRatingIcon,
} from '@/components/icons/Icons'

interface BlueSquareCardProps {
  src: string
  alt: string
}

export default function BlueSquareCard({ src, alt }: BlueSquareCardProps) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className="relative w-[100%] rounded-[12px] overflow-hidden shadow-lg">
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
      <div
        className="absolute bottom-0 left-0 w-full aspect-square bg-[#083FD8]/80 p-[10px] text-white flex flex-col justify-between cursor-pointer"
        style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}
        // onClick={() => setShowDetail((prev) => !prev)}
      >
        {showDetail ? (
          <>
            {/* 顶部：左侧图标 + 标题，右侧 Project Details 按钮 */}
            <div className="flex items-start justify-between gap-[12px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] border border-white rounded-[3px] flex items-center justify-center">
                  <Image src="/images/Investing/games.png" alt="games" width={30} height={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] leading-[1.1] text-white font-semibold">
                    WALL-E& EVE
                  </span>
                  <span className="text-[16px] leading-[1.1] text-white font-semibold mt-[2px]">
                    DBAI0000211
                  </span>
                </div>
              </div>
              <button className="h-[44px] px-[18px] bg-white text-[#0050E6] rounded-[6px] text-[16px] font-semibold flex items-center justify-center">
                Project Details
              </button>
            </div>

            {/* 底部：左侧四个指标 + 右侧三个按钮 */}
            <div className="mt-[14px] flex gap-[16px]">
              {/* 左列指标 */}
              <div className="flex-1 space-y-[10px] text-[13px]">
                <div>
                  <div className="opacity-80 mb-[2px] flex items-center gap-[6px]">
                    <MarketCapIcon className="w-[18px] h-[18px]" />
                    <span>Market Cap</span>
                  </div>
                  <div className="text-[18px] font-semibold text-white">$12.3k</div>
                </div>
                <div>
                  <div className="opacity-80 mb-[2px] flex items-center gap-[6px]">
                    <TotalUsersIcon className="w-[18px] h-[16px]" />
                    <span>Total Users</span>
                  </div>
                  <div className="text-[18px] font-semibold text-white">1.2M</div>
                </div>
                <div>
                  <div className="opacity-80 mb-[2px] flex items-center gap-[6px]">
                    <RevenueIcon className="w-[12px] h-[19px]" />
                    <span>24h Revenue</span>
                  </div>
                  <div className="text-[18px] font-semibold text-white">$250k</div>
                </div>
                <div>
                  <div className="opacity-80 mb-[2px] flex items-center gap-[6px]">
                    <UserRatingIcon className="w-[18px] h-[10px]" />
                    <span>User Rating</span>
                  </div>
                  <div className="text-[18px] font-semibold text-white">★★★★★</div>
                </div>
              </div>

              {/* 右列按钮 */}
              <div className="flex flex-col w-[180px] space-y-[8px] text-[15px] font-semibold">
                <button className="h-[38px] border border-white rounded-[6px] flex items-center justify-center">
                  Market
                </button>
                <button className="h-[38px] border border-white rounded-[6px] flex items-center justify-center">
                  Lending
                </button>
                <button className="h-[38px] border border-white rounded-[6px] flex items-center justify-center">
                  Add to Favorites
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 顶部：图标 + 标题 + 箭头（紧凑版） */}
            <div className="flex items-center justify-evenly">
              <div className="w-[45px] h-[45px] border border-white rounded-[3px] flex items-center justify-center">
                <Image src="/images/Investing/games.png" alt="games" width={24} height={18} />
              </div>
              <div className="flex-1 text-center">
                <div className="text-[12px] leading-[1] tracking-[0] text-white font-semibold">
                  WALL-E& EVE
                </div>
                <div className="mt-[6px] text-[12px] leading-[1] tracking-[0] text-white font-semibold">
                  DBAI0000211
                </div>
              </div>
              <div>
                <Image src="/images/Investing/arr.png" alt="arrow" width={24} height={24} />
              </div>
            </div>

            {/* 中间：两个按钮 */}
            <div className="mt-[13px] flex">
              <button className="px-[4px] h-[20px] border border-white rounded-[3px] text-[10px] font-semibold text-white flex items-center justify-center">
                AI avatar
              </button>
              <button className="px-[4px] h-[20px] border border-white rounded-[3px] text-[10px] font-semibold text-white flex items-center justify-center ml-[8px]">
                Emotional connection
              </button>
            </div>

            {/* 底部：四列指标（紧凑版） */}
            <div className="mt-[24px] grid grid-cols-2 gap-y-[18px] text-[12px] font-light">
              <div>
                <div className="opacity-80 mb-[6px] flex items-center gap-[6px]">
                  <MarketCapIcon className="w-[18px] h-[18px]" />
                  <span>Market Cap</span>
                </div>
                <div className="text-[18px] font-semibold text-white">$12.3k</div>
              </div>
              <div>
                <div className="opacity-80 mb-[6px] flex items-center gap-[6px]">
                  <RevenueIcon className="w-[12px] h-[19px]" />
                  <span>24h Revenue</span>
                </div>
                <div className="text-[18px] font-semibold text-white">$250k</div>
              </div>
              <div>
                <div className="opacity-80 mb-[6px] flex items-center gap-[6px]">
                  <TotalUsersIcon className="w-[18px] h-[16px]" />
                  <span>Total Users</span>
                </div>
                <div className="text-[18px] font-semibold text-white">1.2M</div>
              </div>
              <div>
                <div className="opacity-80 mb-[6px] flex items-center gap-[6px]">
                  <UserRatingIcon className="w-[18px] h-[10px]" />
                  <span>User Rating</span>
                </div>
                <div className="text-[18px] font-semibold text-white">★★★★★</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


