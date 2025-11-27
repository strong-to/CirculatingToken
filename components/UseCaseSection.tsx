'use client'

import Image from 'next/image'
import BlueSquareCard from '@/components/BlueSquareCard'
import { PlusIcon } from '@/components/icons/Icons'

export default function UseCaseSection() {
  return ( 
    <section className="h-full snap-start bg-white flex flex-col">
      <div className="container-responsive flex-1 flex flex-col justify-between pb-[52px]">
        <div className="flex items-start justify-between gap-8 mt-[74px]">
          <div className="space-y-4  ">
            <div
              className="text-[64px] font-light leading-[1.1] text-black"
              style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}
            >
              Where Using Becomes Investing
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* 右上蓝色方块 */}
            <div className="w-[90px] h-[90px] bg-[#0045FF]" />

            {/* 文案 + 加号图标 */}
            <div className="flex items-center gap-3 mt-[40px] text-[20px] text-[#000000]">
              <span className="mr-[10px]">Use AI Apps and Earn</span>
              <PlusIcon />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-[41px]">
            <div
              className="text-[28px] text-black"
              style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}
            >
              Top Use-to-Earn Picks
            </div>
            {/* 右侧按钮：View all projects，边框 #000000，圆角 1px，点击(active) 时黑底白字 */}
            <button
              className="flex items-center justify-center text-[20px] text-black border border-[#000000] rounded-[4px] transition-colors active:bg-black active:text-white"
              style={{
                width: '276.75px',
                height: '63px',
              }}
            >
              View all projects
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[22.7px]">
            <div className="rounded-[12px] overflow-hidden shadow-lg bg-black">
              <Image
                src="/images/Investing/Investing1.png"
                alt="Investing card 1"
                width={340}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-lg bg-black">
              <Image
                src="/images/Investing/Investing2.png"
                alt="Investing card 2"
                width={340}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* 中间高亮卡片：使用带 340x340 蓝色背景的通用组件 */}
            <BlueSquareCard
              src="/images/Investing/Investing3.png"
              alt="Investing card 3"
            />
            <div className="rounded-[12px] overflow-hidden shadow-lg bg-black">
              <Image
                src="/images/Investing/Investing4.png"
                alt="Investing card 4"
                width={340}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="rounded-[12px] overflow-hidden shadow-lg bg-black">
              <Image
                src="/images/Investing/Investing5.png"
                alt="Investing card 5"
                width={340}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

