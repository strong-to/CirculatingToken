'use client'

import Image from 'next/image'
import DraggableBox from './DraggableBox'

export default function Hero() {
  const stats = [
    { value: '357,211', label: 'PROJECTS' },
    { value: '172,275,455', label: 'USERS' },
    { value: '$182,588,717,071', label: 'Market Value' },
  ]

  return (
    <section className="w-full h-full flex flex-col bg-background-primary overflow-y-auto">
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
            <div className='mt-[49px]'>
              <Image
                src="/images/DEEPBLUE/Frame.png"
                alt="Institutional-Grade Finance, Reimagined for Everyone"
                width={1208}
                height={197}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* 统计数据 */}
            <div className="mt-[38px] w-[421px] h-[116px]">
              <Image
                src="/images/DEEPBLUE/PROJECTS.png"
                alt=""
                width={421}
                height={116}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* 下载按钮 */}
            <div className="flex flex-col sm:flex-row gap-[7px] mb-[1px] absolute bottom-[47px] left-[0px]">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors w-[220px] h-[48px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13V3M10 13L6 9M10 13L14 9M3 16H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-body font-medium">Download for iPhone</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-main text-white rounded-md hover:bg-primary-light transition-colors w-[220px] h-[48px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13V3M10 13L6 9M10 13L14 9M3 16H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
      
      {/* 底部标题 */}
      {/* <div className="container-responsive w-full pb-8 lg:pb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
          Where Using Becomes Investing
        </h2>
      </div> */}
    </section>
  )
}

