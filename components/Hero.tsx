'use client'

import Image from 'next/image'
import DraggableBox from '@/components/DraggableBox'
import { DownloadIcon } from '@/components/icons/Icons'
import { px } from '@/utils/pxToRem'

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
              <button className="inline-block w-auto cursor-pointer group relative z-10" style={{ marginTop: px(86) }}> {/* 43px */}
                <Image
                  src="/images/DEEPBLUE/DEEPBLUE.png"
                  alt="DEEP BLUE"
                  width={200}
                  height={48}
                  className="w-auto transition-all duration-300"
                  style={{ height: '3rem' }} // 48px
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
            <div 
              className="mt-[ leading-[100%]" 
              style={{ 
                maxWidth: '75.5rem', // 1208px
                marginTop: px(125),
                width: '100%'
              }}
            >
              <div 
                className="font-light leading-[100%] text-black break-words" 
                style={{ 
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: '5.25rem', // 84px = 5.25rem
                  whiteSpace: 'normal',
                  wordBreak: 'break-word'
                }}
              >
                Institutional-Grade Finance,
              </div>
              <div 
                className="font-light leading-[100%] text-black break-words" 
                style={{ 
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: '5.25rem', // 84px = 5.25rem
                  whiteSpace: 'normal',
                  wordBreak: 'break-word'
                }}
              >
                Reimagined for Everyone
              </div>
            </div>

            {/* 统计数据 */}
            <div 
              className="leading-[100%] text-black" 
              style={{ 
                marginTop: px(65), // 38px
                width: '26.3125rem', // 421px
                height: '7.25rem', // 116px
                fontSize: '1.8125rem', // 29px
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div 
                className="font-light" 
                style={{ 
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: '1.8125rem', // 29px
                  height: '2.155rem' // 34.48px
                }}
              >
                357,211PROJECTS
              </div>
              <div 
                className="font-light" 
                style={{ 
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: '1.8125rem', // 29px
                  height: '2.155rem' // 34.48px
                }}
              >
                172,275,455USERS
              </div>
              <div 
                className="font-light" 
                style={{ 
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: '1.8125rem', // 29px
                  height: '2.155rem' // 34.48px
                }}
              >
                $182,588,717,071Market Value
              </div>
            </div>

            {/* 下载按钮 */}
            <div className="flex flex-col sm:flex-row absolute" style={{ gap: '0.4375rem', marginBottom: px(86), bottom: '2.9375rem', left: '0' }}> {/* gap: 7px, mb: 1px, bottom: 47px */}
              <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50) }}> {/* px: 19px, height: 50px */}
                <DownloadIcon />
                <span className="text-body font-medium">Download for iPhone</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors" style={{ paddingLeft: px(19), paddingRight: px(19), height: px(50) }}> {/* px: 19px, height: 50px */}
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
              width={15.4375}
              height={15.4375}
              bgColor="bg-[#BDBDBD]"
              className=""
            />
            <DraggableBox
              initialX={0}
              initialY={400}
              width={9.25}
              height={9.25}
              bgColor="bg-primary-main"
              className=""
            />
            <DraggableBox
              initialX={-300}
              initialY={550}
              width={5.9375}
              height={5.9375}
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

