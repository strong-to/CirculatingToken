'use client'

import { useState, useRef, useEffect } from 'react'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import { px } from "@/utils/pxToRem"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

interface UserCommentsProps {
  userComments?: {
    overallRating?: string;
    totalReviews?: number;
    ratingData?: Array<{
      stars: number;
      count: number;
      percentage: number;
    }>;
    commentList?: Array<{
      img: string;
      name: string;
      id: string;
      stars: number;
      comment: string;
      emoji: string;
      date: string;
    }>;
  };
}

export default function UserComments({ userComments }: UserCommentsProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    'Excellent': true,
    'Good': false,
    'Ordinary': false,
    'Poor': false,
    'Terrible': false,
  })

  const swiperRef = useRef<SwiperType | null>(null)
  const gap = 30 // 卡片间距 30px

  const handleToggle = (label: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }
    return (
       <>
       <div className="w-full flex flex-col" >
     <div style={{marginTop: px(50), }} className="flex justify-between items-center w-full">
      {/* 两个盒子容器 */}
      <div
        className="flex w-full"
        style={{
          marginTop: px(50),
          marginLeft: px(80),
          marginRight: px(80),
          gap: px(30),
          width: `calc(100% - ${px(160)})`,
        }}
      >
        {/* 第一个盒子 - 宽度428px */}
        <div
          style={{
            // width: px(428),
            height: px(298),
            paddingTop: px(40),
            // backgroundColor: '#ffffff',
            // boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            overflow: 'hidden',
          }}
           className="flex items-center justify-center"
         >
           <div
               style={{
                 fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                 fontWeight: 700,
                 fontStyle: 'normal',
                 fontSize: px(50),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 color: '#000000',
                 marginTop: px(10),
                 height: px(57),
               }}
             >
               {userComments?.overallRating}
             </div>
             <div
               style={{
                 fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                 fontWeight: 300,
                 fontStyle: 'normal',
                 fontSize: px(24),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 color: '#606060',
                 height: px(24),
               }}
             >
               {userComments?.totalReviews?.toLocaleString()}
             </div>
            
        </div>
        
        {/* 第二个盒子 - 宽度拉满 */}
        <div
          className="flex-1"
          style={{
            height: px(298),
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >

          <div
            className="flex flex-col"
            style={{
              paddingTop: px(40),
              paddingLeft: px(50),
              paddingRight: px(50),
              paddingBottom: px(40),
              gap: px(20),
            }}
          >
            {/* 评分数据 */}
            {(userComments?.ratingData || []).map((item, index) => {
              return (
              <div key={index} className="flex items-center " style={{ gap: px(16) }}>
                {/* 星级显示 - 水平排列 */}
                <div className="flex items-end justify-end" style={{ gap: px(4),width: px(160) }}>
                  {Array.from({ length: item.stars }).map((_, starIndex) => (
                    <svg key={starIndex} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.418 8.32031L13.5303 8.66602H20.9404L15.2393 12.8086L14.9453 13.0225L15.0576 13.3672L17.2344 20.0693L11.5332 15.9277L11.2402 15.7139L10.9463 15.9277L5.24414 20.0693L7.42188 13.3672L7.53418 13.0225L7.24023 12.8086L1.53906 8.66602H8.94922L9.06152 8.32031L11.2393 1.61621L13.418 8.32031Z" fill="black"/>
                    </svg>
                  ))}
                </div>
                
                {/* 进度条 */}
                <div className="flex-1 relative" style={{ height: px(8), backgroundColor: '#E5E5E5', borderRadius: px(4) }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${item.percentage}%`,
                      backgroundColor: '#000000',
                      borderRadius: px(4),
                    }}
                  />
                </div>
                
                {/* 数字统计 */}
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                    minWidth: px(60),
                    textAlign: 'right',
                  }}
                >
                  {item.count.toLocaleString()}
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
          </div>




          {/*  */}

<div style={{marginLeft: px(70),marginRight: px(70)}}>
<div style={{overflow: 'hidden' ,height: px(360), lineHeight:'px(360)', paddingLeft: px(10), paddingRight: px(10),paddingTop: px(50)}} className='relative'>
            
            {/* 4个评论卡片 - 使用 Swiper 实现按下滚动 */}
            <Swiper
              modules={[Navigation, Mousewheel]}
              spaceBetween={gap}
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
              // 使用 freeMode + mousewheel，让左右滚动有"惯性"而不是一次滚动一个卡片
              freeMode={{
                enabled: true,
                momentum: true,
                momentumRatio: 1.5,      // 惯性更明显一些
                momentumBounce: false,
                sticky: true,           // 滚动结束时自动对齐到最近的完整卡片
              }}
              mousewheel={{
                forceToAxis: true,      // 只根据水平方向滚动
                releaseOnEdges: true,   // 滑到边缘时把滚动交还给页面
                sensitivity: 1.2,       // 提高灵敏度，滑一下走得更多
                thresholdDelta: 1,      // 较小的滑动也能触发滚动
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{
                overflow: 'visible',
              }}
            >
              {/* 评论卡片 */}
              {(userComments?.commentList || []).map((item, cardIndex) => (
                <SwiperSlide 
                  key={cardIndex}
                  style={{
                    overflow: 'visible',
                    padding: '0',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: px(251),
                      backgroundColor: '#ffffff',
                      border: '1px solid #000000',
                      borderRadius: px(4),
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                    }}
                  >
                <div className="flex flex-col w-full h-full" style={{ padding: px(20) }}>
                  {/* 顶部：图标、名称、评分 */}
                  <div className="flex items-center" style={{ gap: px(16), marginBottom: px(20) }}>
                    {/* 图片盒子 60x60 */}
                    <div
                      style={{
                        width: px(60),
                        height: px(60),
                        border: '0.5px solid #000000',
                        borderRadius: px(4),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        overflow: 'hidden',
                      }}
                    >
                      <ImageWithSkeleton
                        src={item.img}
                        alt={item.name}
                        width={60}
                        height={60}
                        borderRadius={px(4)}
                        objectFit="cover"
                      />
                    </div>
                    
                    {/* 名称和ID */}
                    <div className="flex flex-col flex-1" style={{ gap: px(4) }}>
                      <div
                        style={{
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: px(20),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#000000',
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: px(20),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#000000',
                        }}
                      >
                        {item.id}
                      </div>
                    </div>
                    
                    {/* 星级显示 */}
                    <div className="" style={{ gap: px(4), flexShrink: 0 }}>

                    <div
                    className="flex items-center justify-start"
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(16),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#888888',
                        pointerEvents: 'none',
                        marginBottom: px(3),
                      }}
                    >
                      {item.date}
                    </div>
                    <div className="flex items-center" style={{ gap: px(2), flexShrink: 0 }}>
                    {Array.from({ length: item.stars }).map((_, starIndex) => (
                        
<svg key={starIndex} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50009 0.683594L9.03086 5.39484H13.9846L9.97693 8.30655L11.5077 13.0178L7.50009 10.1061L3.49247 13.0178L5.02324 8.30655L1.01562 5.39484H5.96931L7.50009 0.683594Z" fill="black"/>
<path d="M7.50009 0.683594L9.03086 5.39484H13.9846L9.97693 8.30655L11.5077 13.0178L7.50009 10.1061L3.49247 13.0178L5.02324 8.30655L1.01562 5.39484H5.96931L7.50009 0.683594Z" fill="black" fill-opacity="0.2"/>
<path d="M7.50009 0.683594L9.03086 5.39484H13.9846L9.97693 8.30655L11.5077 13.0178L7.50009 10.1061L3.49247 13.0178L5.02324 8.30655L1.01562 5.39484H5.96931L7.50009 0.683594Z" fill="black" fill-opacity="0.2"/>
<path d="M7.50009 0.683594L9.03086 5.39484H13.9846L9.97693 8.30655L11.5077 13.0178L7.50009 10.1061L3.49247 13.0178L5.02324 8.30655L1.01562 5.39484H5.96931L7.50009 0.683594Z" fill="black" fill-opacity="0.2"/>
<path d="M7.50009 0.683594L9.03086 5.39484H13.9846L9.97693 8.30655L11.5077 13.0178L7.50009 10.1061L3.49247 13.0178L5.02324 8.30655L1.01562 5.39484H5.96931L7.50009 0.683594Z" fill="black" fill-opacity="0.2"/>
</svg>

                      ))}

                    </div>
                     
                      
                    </div>
                    
                  </div>
                  
                  {/* 评论内容区域 */}
                  <div className="flex-1 flex flex-col" style={{ position: 'relative' }}>
                    <div
                      style={{
                        flex: 1,
                        padding: px(16),
                        paddingBottom: px(40),
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(16),
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        color: '#000000',
                      }}
                    >
                      {`${item.comment}${item.emoji}`}
                    </div>
                    {/* 日期 - 显示在右下角 */}
                   
                  </div>
                </div>
                  </div>
                </SwiperSlide>
              ))}
              
              {/* 复制卡片以支持循环模式（Swiper loop 需要至少 slidesPerView * 2 个 slides） */}
              {(userComments?.commentList || []).map((item, cardIndex) => (
                <SwiperSlide 
                  key={`duplicate-${cardIndex}`}
                  style={{
                    overflow: 'visible',
                    padding: '0',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: px(251),
                      backgroundColor: '#ffffff',
                      border: '1px solid #000000',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      borderRadius: px(4),
                    }}
                  >
                    <div className="flex flex-col w-full h-full" style={{ padding: px(20) }}>
                      {/* 顶部：图标、名称、评分 */}
                      <div className="flex items-center" style={{ gap: px(16), marginBottom: px(20) }}>
                        {/* 图片盒子 60x60 */}
                        <div
                          style={{
                            width: px(60),
                            height: px(60),
                            borderRadius: px(4),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            overflow: 'hidden',
                            border: '0.5px solid #000000',
                          }}
                        >
                          <ImageWithSkeleton
                            src={item.img}
                            alt={item.name}
                            width={60}
                            height={60}
                            borderRadius={px(4)}
                            objectFit="cover"
                          />
                        </div>
                        
                        {/* 名称和ID */}
                        <div className="flex flex-col flex-1" style={{ gap: px(4) }}>
                          <div
                            style={{
                              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                              fontWeight: 300,
                              fontStyle: 'normal',
                              fontSize: px(20),
                              lineHeight: '100%',
                              letterSpacing: '0%',
                              color: '#000000',
                            }}
                          >
                            {item.name}
                          </div>
                          <div
                            style={{
                              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                              fontWeight: 300,
                              fontStyle: 'normal',
                              fontSize: px(20),
                              lineHeight: '100%',
                              letterSpacing: '0%',
                              color: '#000000',
                            }}
                          >
                            {item.id}
                          </div>
                        </div>
                        
                        {/* 5颗实心星星 */}
                        <div className="flex items-center" style={{ gap: px(4), flexShrink: 0 }}>
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg key={starIndex} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.418 8.32031L13.5303 8.66602H20.9404L15.2393 12.8086L14.9453 13.0225L15.0576 13.3672L17.2344 20.0693L11.5332 15.9277L11.2402 15.7139L10.9463 15.9277L5.24414 20.0693L7.42188 13.3672L7.53418 13.0225L7.24023 12.8086L1.53906 8.66602H8.94922L9.06152 8.32031L11.2393 1.61621L13.418 8.32031Z" fill="black"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      {/* 评论内容区域 */}
                      <div className="flex-1 flex flex-col" style={{ position: 'relative' }}>
                        <div
                          style={{
                            flex: 1,
                            padding: px(16),
                            paddingBottom: px(40),
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: px(16),
                            lineHeight: '150%',
                            letterSpacing: '0%',
                            color: '#000000',
                          }}
                        >
                          {`${item.comment}${item.emoji}`}
                        </div>
                        {/* 日期 - 显示在右下角 */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: px(16),
                            right: px(16),
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: px(14),
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#888888',
                            pointerEvents: 'none',
                          }}
                        >
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

</div>
          






        </div>
       </>
      )
}

