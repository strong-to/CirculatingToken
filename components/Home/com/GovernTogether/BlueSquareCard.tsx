"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./BlueSquareCard.module.css";
import { px } from "@/utils/pxToRem";

interface BlueSquareCardProps {
  src: string;
  alt: string;
}

export default function BlueSquareCard({ src, alt }: BlueSquareCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState<string | null>(null);

  return (
    <div
      className={`relative overflow-hidden shadow-lg ${styles.card}`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDetail(false);
      }}
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
      <div
        className={`absolute bottom-0 left-0 w-full aspect-square text-white flex flex-col justify-start cursor-pointer transition-all duration-300 ease-in-out ${
          showDetail ? 'bg-[#CB2C22]/80' : 'bg-[#083FD8]/80'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setShowDetail(true);
        }}
        style={{
          padding: px(30),
          opacity: isHovered || showDetail ? 1 : 0,
          transform: isHovered || showDetail ? "translateY(0)" : "translateY(20px)",
          pointerEvents: isHovered || showDetail ? "auto" : "none",
        }}
      >
        {/* 顶部：图标 + 标题 + 箭头（紧凑版） */}

        {!showDetail && (
        <>
        <div className="">
          <div
            className="flex items-center justify-center "
            style={{ width: px(60), height: px(60), borderRadius: px(3) }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: px(60), height: px(60) }}
            >
              <Image
                src="/images/home/icon/sword.png"
                alt="games"
                fill
                className="object-contain"
              />
              
            </div>
          </div>


        <div className="flex justify-between" style={{ marginTop: px(17) }} >
          <div className="flex-1 text-staart ">
            <div
              className="leading-[1] tracking-[0] text-white"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(23),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              WALL-E& EVE
            </div>
            <div
              className="leading-[1] tracking-[0] text-white"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(23),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              DBAI0000211
            </div>
          </div>


          <div
            className="h-full flex items-end justify-end"
            style={{ width: px(24), height: px(24) }}
          >
            <Image
              src="/images/Investing/arr.png"
              alt="arrow"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>

          </div>


        </div>

        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(30) }}>
          <div className="border border-white flex items-center justify-center" style={{ 
            width: '66%',
            height: '100%',
            marginRight: px(10),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4)
          }}>Natural Language
          </div>
          <div className="border border-white  flex items-center justify-center" style={{ 
            width: '33%',
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4)
          }}>Text</div>
        </div>

        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(10) }}>
          <div className="border border-white flex items-center justify-center " style={{ 
            width: '33%',
            height: '100%',
            marginRight: px(10),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            borderRadius: px(4),
            textAlign: 'center'
          }}>Analyze</div>
          <div className="border border-white flex items-center justify-center" style={{ 
            width: '66%',
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            borderRadius: px(4)
          }}>Public Health
          </div>
        </div>

        <div className="w-full  flex flex-col justify-between" style={{ height: px(35), marginTop: px(25) }}>
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(18),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF'
        }}>THIS IS A VIDEO</div>
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(18),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
          marginTop: px(5)
        }}>CREATION AIWORKFLOW
        </div>
        </div>
        </>
        )}

        {showDetail && (
        <>
        <div className="">

          <div
            className="flex items-center justify-start "
            style={{ height: px(60) }}
          >
            <div
              className="relative flex items-start justify-center"
              style={{ width: px(60), height: px(60),marginRight: px(15) }}
            >
              <Image
                src="/images/home/icon/sword.png"
                alt="games"
                fill
                className="object-contain"
              />
              
            </div>

            <div className=" h-full flex justify-between flex-col" style={{ paddingTop: px(2) , paddingBottom: px(2) }}>
            <div
              className="leading-[1] tracking-[0] text-white"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(23),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              WALL-E& EVE
            </div>
            <div
              className="leading-[1] tracking-[0] text-white"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(23),
                lineHeight: px(25),
                letterSpacing: "0%",
              }}
            >
              DBAI0000211
            </div>
          </div>
          </div>

        </div>


        <div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(24) }}>

        <div  className="flex flex-col items-center justify-between " style={{ height: '100%' }}>
          
          <div className=" flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(15),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFC8C5'
          }}>24h Revenue</div>

          <div className=" flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(17),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF'
          }}>$ 6,550,521</div>
        </div>
        <div 
          className="border border-white flex items-center justify-center" 
          style={{ 
            width: px(128),
            height: '100%',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(14),
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: buttonHovered === 'details' ? '#000000' : '#FFFFFF',
            backgroundColor: buttonHovered === 'details' ? '#FFFFFF' : 'transparent',
            borderRadius: px(4),
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={() => setButtonHovered('details')}
          onMouseLeave={() => setButtonHovered(null)}
        >Details
        </div>
        </div>

 <div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(19) }}>

<div  className="flex flex-col items-start justify-between " style={{ height: '100%' }}>
  
  <div className=" flex items-start justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(15),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFC8C5'
  }}>Market cap</div>

  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(17),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFFFFF'
  }}>$ 76,144,900
</div>
</div>
<div 
  className="border border-white flex items-center justify-center" 
  style={{ 
    width: px(128),
    height: '100%',
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(14),
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: buttonHovered === 'share' ? '#000000' : '#FFFFFF',
    backgroundColor: buttonHovered === 'share' ? '#FFFFFF' : 'transparent',
    borderRadius: px(4),
    transition: 'all 0.2s ease'
  }}
  onMouseEnter={() => setButtonHovered('share')}
  onMouseLeave={() => setButtonHovered(null)}
>Share
</div>
</div>


<div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(19) }}>

<div  className="flex flex-col items-center justify-between " style={{ height: '100%' }}>
  
  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(15),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFC8C5'
  }}>Total Users</div>

  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(17),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFFFFF'
  }}>2,110,977
</div>
</div>
<div 
  className="border border-white flex items-center justify-center" 
  style={{ 
    width: px(128),
    height: '100%',
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(14),
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: buttonHovered === 'market' ? '#000000' : '#FFFFFF',
    backgroundColor: buttonHovered === 'market' ? '#FFFFFF' : 'transparent',
    borderRadius: px(4),
    transition: 'all 0.2s ease'
  }}
  onMouseEnter={() => setButtonHovered('market')}
  onMouseLeave={() => setButtonHovered(null)}
>Market
</div>
</div>


<div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(19) }}>

<div  className="flex flex-col items-start justify-between " style={{ height: '100%' }}>
  
  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(15),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFC8C5'
  }}>User Rating
</div>

  <div className="flex items-center justify-center gap-1">
    {/* 实心星星 */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
    </svg>
    {/* 空心星星 */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3613 6.62598L10.4736 6.97168H15.2432L11.6787 9.56152L11.3848 9.77539L11.4971 10.1201L12.8584 14.3096L9.29395 11.7207L9 11.5068L8.70605 11.7207L5.14062 14.3105L6.50391 10.1201L6.61523 9.77539L6.32227 9.56152L2.75781 6.97168H7.52637L7.63867 6.62598L9 2.43555L10.3613 6.62598Z" stroke="white"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3613 6.62598L10.4736 6.97168H15.2432L11.6787 9.56152L11.3848 9.77539L11.4971 10.1201L12.8584 14.3096L9.29395 11.7207L9 11.5068L8.70605 11.7207L5.14062 14.3105L6.50391 10.1201L6.61523 9.77539L6.32227 9.56152L2.75781 6.97168H7.52637L7.63867 6.62598L9 2.43555L10.3613 6.62598Z" stroke="white"/>
    </svg>
  </div>
</div>
<div 
  className="border border-white flex items-center justify-center" 
  style={{ 
    width: px(128),
    height: '100%',
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(14),
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    color: buttonHovered === 'favorites' ? '#000000' : '#FFFFFF',
    backgroundColor: buttonHovered === 'favorites' ? '#FFFFFF' : 'transparent',
    borderRadius: px(4),
    transition: 'all 0.2s ease'
  }}
  onMouseEnter={() => setButtonHovered('favorites')}
  onMouseLeave={() => setButtonHovered(null)}
>Favorites
</div>
</div>
        </>
        )}

      </div>
    </div>
  );
}
