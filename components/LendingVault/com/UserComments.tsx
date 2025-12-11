'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { px } from "@/utils/pxToRem"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function UserComments() {
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
            width: px(428),
            height: px(298),
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
           className="flex items-center justify-center"
         >
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
               120,518
             </div>
             <div
               style={{
                 fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                 fontWeight: 300,
                 fontStyle: 'normal',
                 fontSize: px(50),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 color: '#000000',
                 marginTop: px(10),
                 height: px(57),
               }}
             >
               4.5/5
             </div>
            <div className="flex items-center justify-center" style={{marginTop: px(20)}} >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
</svg>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
</svg>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
</svg>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
<path d="M13 1.18359L15.6534 9.34976H24.2398L17.2932 14.3967L19.9466 22.5629L13 17.5159L6.05346 22.5629L8.70681 14.3967L1.76025 9.34976H10.3467L13 1.18359Z" fill="black" fill-opacity="0.2"/>
</svg>

<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.418 8.32031L13.5303 8.66602H20.9404L15.2393 12.8086L14.9453 13.0225L15.0576 13.3672L17.2344 20.0693L11.5332 15.9277L11.2402 15.7139L10.9463 15.9277L5.24414 20.0693L7.42188 13.3672L7.53418 13.0225L7.24023 12.8086L1.53906 8.66602H8.94922L9.06152 8.32031L11.2393 1.61621L13.418 8.32031Z" stroke="black"/>
</svg>

            </div>
        </div>
        
        {/* 第二个盒子 - 宽度拉满 */}
        <div
          className="flex-1"
          style={{
            height: px(298),
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
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
            {[
              { label: 'Excellent', stars: 5, count: 52079, percentage: 95 },
              { label: 'Good', stars: 4, count: 38895, percentage: 75 },
              { label: 'Ordinary', stars: 3, count: 21322, percentage: 50 },
              { label: 'Poor', stars: 2, count: 6427, percentage: 25 },
              { label: 'Terrible', stars: 1, count: 1259, percentage: 5 },
            ].map((item, index) => {
              const isChecked = checkedItems[item.label]
              return (
              <div key={index} className="flex items-center" style={{ gap: px(16) }}>
                {/* 复选框 */}
                <div
                  onClick={() => handleToggle(item.label)}
                  style={{ cursor: 'pointer', width: px(25), height: px(25), display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {isChecked ? (
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 0C23.2091 3.54341e-07 25 1.79086 25 4V21C25 23.2091 23.2091 25 21 25H4C1.79086 25 0 23.2091 0 21V4C3.54346e-07 1.79086 1.79086 0 4 0H21ZM18.7236 8.27148C18.3598 7.90502 17.775 7.91073 17.418 8.28418L11.2871 14.6963L8.58496 11.8398L8.52734 11.7842C8.16926 11.4651 7.62682 11.4751 7.28027 11.8203C6.91448 12.1847 6.90565 12.7847 7.26074 13.1602L10.6211 16.7129L10.6768 16.7666C11.0412 17.0933 11.5973 17.0767 11.9424 16.7158L18.7354 9.61133L18.7891 9.5498C19.091 9.17474 19.0681 8.61863 18.7236 8.27148Z" fill="black"/>
                    </svg>
                  ) : (
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="24" height="24" rx="0" stroke="black" strokeWidth="1" fill="none"/>
                    </svg>
                  )}
                </div>
                
                {/* 类别名称 */}
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                    minWidth: px(80),
                  }}
                >
                  {item.label}
                </div>
                
                {/* 星级显示 */}
                <div className="flex items-center" style={{ gap: px(4) }}>
                  {Array.from({ length: 5 }).map((_, starIndex) => {
                    const isFilled = starIndex < item.stars
                    return isFilled ? (
                      <svg key={starIndex} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.418 8.32031L13.5303 8.66602H20.9404L15.2393 12.8086L14.9453 13.0225L15.0576 13.3672L17.2344 20.0693L11.5332 15.9277L11.2402 15.7139L10.9463 15.9277L5.24414 20.0693L7.42188 13.3672L7.53418 13.0225L7.24023 12.8086L1.53906 8.66602H8.94922L9.06152 8.32031L11.2393 1.61621L13.418 8.32031Z" fill="black"/>
                      </svg>
                    ) : (
                      <svg key={starIndex} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.418 8.32031L13.5303 8.66602H20.9404L15.2393 12.8086L14.9453 13.0225L15.0576 13.3672L17.2344 20.0693L11.5332 15.9277L11.2402 15.7139L10.9463 15.9277L5.24414 20.0693L7.42188 13.3672L7.53418 13.0225L7.24023 12.8086L1.53906 8.66602H8.94922L9.06152 8.32031L11.2393 1.61621L13.418 8.32031Z" stroke="black"/>
                      </svg>
                    )
                  })}
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
              modules={[Navigation]}
              spaceBetween={gap}
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              style={{
                overflow: 'visible',
              }}
            >
              {/* 原始4张卡片 */}
              {[
                { img: 'img1.png', name: 'AtmoSet', id: 'DBAI000000', stars: 5, comment: 'Great tool.......', emoji: '👍👍', date: 'Dec 09 2025' },
                { img: 'img2.png', name: 'Nero', id: 'DB000000137', stars: 5, comment: 'It is very convenient and can be easily used without professional skills!', emoji: '', date: 'Dec 09 2025' },
                { img: 'img3.png', name: 'Ashley', id: 'DBAI0000009', stars: 5, comment: 'It is very efficient, and it would be even better if it could have voice interaction function.', emoji: '', date: 'Dec 09 2025' },
                { img: 'img4.png', name: 'Shi san', id: 'DBAI0000009', stars: 5, comment: 'It\'s the best software I\'ve ever used, and it replaces almost every other tool, perfect!', emoji: '', date: 'Dec 09 2025' },
              ].map((item, cardIndex) => (
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
                        borderRadius: px(4),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={`/LendingVault/UserComments/${item.img}`}
                        alt={item.name}
                        width={60}
                        height={60}
                        style={{ width: px(60), height: px(60), objectFit: 'cover', borderRadius: px(4) }}
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
                  
                  {/* 评论内容区域 - 输入框 */}
                  <div className="flex-1 flex flex-col" style={{ position: 'relative' }}>
                    <textarea
                      defaultValue={`${item.comment}${item.emoji}`}
                      style={{
                        flex: 1,
                        border: '1px solid #000000',
                        borderRadius: px(4),
                        padding: px(16),
                        paddingBottom: px(40),
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(16),
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        color: '#000000',
                        resize: 'none',
                        outline: 'none',
                        overflow: 'hidden',
                      }}
                      className="scrollbar-hide"
                    />
                    {/* 日期 - 显示在输入框右下角 */}
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
              
              {/* 复制卡片以支持循环模式（Swiper loop 需要至少 slidesPerView * 2 个 slides） */}
              {[
                { img: 'img1.png', name: 'AtmoSet', id: 'DBAI000000', stars: 5, comment: 'Great tool.......', emoji: '👍👍', date: 'Dec 09 2025' },
                { img: 'img2.png', name: 'Nero', id: 'DB000000137', stars: 5, comment: 'It is very convenient and can be easily used without professional skills!', emoji: '', date: 'Dec 09 2025' },
                { img: 'img3.png', name: 'Ashley', id: 'DBAI0000009', stars: 5, comment: 'It is very efficient, and it would be even better if it could have voice interaction function.', emoji: '', date: 'Dec 09 2025' },
                { img: 'img4.png', name: 'Shi san', id: 'DBAI0000009', stars: 5, comment: 'It\'s the best software I\'ve ever used, and it replaces almost every other tool, perfect!', emoji: '', date: 'Dec 09 2025' },
              ].map((item, cardIndex) => (
                <SwiperSlide 
                  key={`duplicate-${cardIndex}`}
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
                            borderRadius: px(4),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={`/LendingVault/UserComments/${item.img}`}
                            alt={item.name}
                            width={60}
                            height={60}
                            style={{ width: px(60), height: px(60), objectFit: 'cover', borderRadius: px(4) }}
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
                      
                      {/* 评论内容区域 - 输入框 */}
                      <div className="flex-1 flex flex-col" style={{ position: 'relative' }}>
                        <textarea
                          defaultValue={`${item.comment}${item.emoji}`}
                          style={{
                            flex: 1,
                            border: '1px solid #000000',
                            borderRadius: px(4),
                            padding: px(16),
                            paddingBottom: px(40),
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: px(16),
                            lineHeight: '150%',
                            letterSpacing: '0%',
                            color: '#000000',
                            resize: 'none',
                            outline: 'none',
                            overflow: 'hidden',
                          }}
                          className="scrollbar-hide"
                        />
                        {/* 日期 - 显示在输入框右下角 */}
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
          






    <div className='flex items-center justify-center' style={{ marginTop: px(30), gap: px(16) }}>
        <button
          className="flex items-center justify-center transition-colors cursor-pointer"
          style={{
            width: px(206),
            height: px(44),
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#000000',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff'
            e.currentTarget.style.color = '#000000'
            e.currentTarget.style.borderColor = '#000000'
          }}
        >
          Favorite Project
        </button>

        <button
          className="flex items-center justify-center transition-colors cursor-pointer"
          style={{
            height: px(44),
            paddingLeft: px(24),
            paddingRight: px(24),
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: px(4),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#000000',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#000000'
            e.currentTarget.style.color = '#ffffff'
            e.currentTarget.style.borderColor = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff'
            e.currentTarget.style.color = '#000000'
            e.currentTarget.style.borderColor = '#000000'
          }}
        >
          Experience the Project
        </button>
      </div>

        </div>
       </>
      )
}

