'use client'

import Image from 'next/image'
import BlueSquareCard from '@/components/BlueSquareCard'
import { PlusIcon } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'

export default function UseCaseSection() {
  return ( 
    <section className="h-full snap-start bg-white flex flex-col">
      <div className="container-responsive flex-1 flex flex-col justify-between" style={{ paddingBottom: '3.25rem' }}> {/* 52px */}
        <div className="flex items-start justify-between gap-8" style={{ marginTop: '4.625rem' }}> {/* 74px */}
          <div className="space-y-4  ">
            <div
              className="font-light leading-[1.1] text-black"
              style={{ 
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: '5.25rem' // 84px = 5.25rem
              }}
            >
              Where Using Becomes Investing
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 */}
            <div className="bg-[#0045FF]" style={{ width: '5.625rem', height: '5.625rem' }} /> {/* 90px */}

            {/* 文案 + 加号图标 */}
            <div 
              className="flex items-center gap-3 text-[#000000]"
              style={{
                marginTop: '2.5rem', // 40px
                fontSize: '1.75rem' // 28px
              }}
            >
              <span style={{ marginRight: '0.625rem' }}>Use AI Apps and Earn</span>
              <PlusIcon />
            </div>
          </div>
        </div>

        <div className="space-y-4">
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
              Top Use-to-Earn Picks
            </div>
            {/* 右侧按钮：View all projects，边框 #000000，圆角 1px，点击(active) 时黑底白字 */}
            <button
              className="flex items-center justify-center text-black border border-[#000000] transition-colors active:bg-black active:text-white"
              style={{
                width: '17.296875rem', // 276.75px
                height: '3.9375rem', // 63px
                fontSize: '1.75rem', // 28px
                borderRadius: '0.25rem' // 4px
              }}
            >
              View all projects
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: '1.41875rem' }}> {/* 22.7px */}
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing1.png"
                alt="Investing card 1"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing2.png"
                alt="Investing card 2"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* 中间高亮卡片：使用带 340x340 蓝色背景的通用组件 */}
            <BlueSquareCard
              src="/images/Investing/Investing3.png"
              alt="Investing card 3"
            />
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing4.png"
                alt="Investing card 4"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="overflow-hidden shadow-lg bg-black" style={{ borderRadius: '0.75rem', aspectRatio: '340 / 500' }}> {/* 12px, 保持 340:500 宽高比 */}
              <Image
                src="/images/Investing/Investing5.png"
                alt="Investing card 5"
                width={340}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

