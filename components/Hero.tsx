'use client'

import Image from 'next/image'
import DraggableBox from '@/components/DraggableBox'
import { DownloadIcon } from '@/components/icons/Icons'

export default function Hero() {
  return (
    <section className="h-full snap-start flex flex-col bg-background-primary overflow-hidden">
      <div className="container-responsive w-full flex-1 flex">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12 w-full">
          {/* 左侧内容 */}
          <div className="flex flex-col relative">
            {/* DEEP BLUE COVENANT */}
            <div className="flex flex-col r">
              {/* 可点击图片 - 悬浮时高度变为48px */}
              <button className="inline-block w-auto cursor-pointer group relative z-10 mt-[43px]">
                <Image
                  src="/images/DEEPBLUE/DEEPBLUE.png"
                  alt="DEEP BLUE"
                  width={200}
                  height={48}
                  className="h-[48px] w-auto transition-all duration-300"
                  priority
                />
              </button>
                
            {/* <span className="text-f24  text-[#000000]">
              DEEP BLUE 
            </span>
            <span className="text-f24  text-[#000000]">
              COVENANT
            </span> */}
            </div>
           

            {/* 主标题 */}
            {/* <h1 className="text-[42px]  leading-tight">
              Institutional-Grade Finance, Reimagined for Everyone
            </h1> */}
            <div className="mt-[49px] max-w-[1208px] leading-[100%]">
              <div className="font-light text-[64px] leading-[100%] text-black" style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}>
                Institutional-Grade Finance,
              </div>
              <div className="font-light text-[64px] leading-[100%] text-black" style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}>
                Reimagined for Everyone
              </div>
            </div>

            {/* 统计数据 */}
            <div className="mt-[38px] w-[421px] h-[116px] text-[29px] leading-[100%] text-black space-y-2">
              <div className="font-light h-[34.48px]" style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}>357,211PROJECTS</div>
              <div className="font-light h-[34.48px]" style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}>172,275,455USERS</div>
              <div className="font-light h-[34.48px]" style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif' }}>$182,588,717,071Market Value</div>
            </div>

            {/* 下载按钮 */}
            <div className="flex flex-col sm:flex-row gap-[7px] mb-[1px] absolute bottom-[47px] left-[0px]">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors w-[220px] h-[48px]">
                <DownloadIcon />
                <span className="text-body font-medium">Download for iPhone</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors w-[220px] h-[48px]">
                <DownloadIcon />
                <span className="text-body font-medium">Download for Android</span>
              </button>
            </div>
          </div>

          {/* 右侧占位区域 - 可拖动的盒子 */}
          <div className="hidden lg:block relative h-full w-full overflow-visible">
            {/* 三个可拖动的盒子 */}
            <DraggableBox
              initialX={0}
              initialY={100}
              width={247}
              height={247}
              bgColor="bg-[#BDBDBD]"
              className=""
            />
            <DraggableBox
              initialX={0}
              initialY={400}
              width={148}
              height={148}
              bgColor="bg-primary-main"
              className=""
            />
            <DraggableBox
              initialX={-300}
              initialY={550}
              width={95}
              height={95}
              bgColor="bg-[#666666]"
              className=""
            />
          </div>
        </div>
      </div>

      {/* 首屏底部品牌 logo（随 Hero 一起滚动） */}
      <div className="w-full flex items-center bg-background-primary border-t border-gray-100">
        <Image
          src="/images/DEEPBLUE/foot.png"
          alt="Partners"
          width={800}
          height={243}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}

