"use client";

import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlueSquareCard.module.css";
import { px } from "@/utils/pxToRem";
import { images } from "../BuildWithThe/resources";

interface BlueSquareCardProps {
  src: string;
  alt: string;
}

export default function BlueSquareCard({ src, alt }: BlueSquareCardProps) {
  const router = useRouter();
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
        setButtonHovered(null);
      }}
    >
      {/* 底层整张图片 */}
      <ImageWithSkeleton
        src={src}
        alt={alt}
        width={340}
        height={500}
        className="w-full h-full"
        objectFit="cover"
        priority
      />

      {/* 覆盖在图片上的正方形蓝色方块（宽高相等，位于下半部分） */}
      <div
        className={`absolute bottom-0 left-0 w-full aspect-square text-white flex flex-col justify-start cursor-pointer transition-all duration-300 ease-in-out ${
          showDetail ? 'bg-[#8000EA]/80' : 'bg-[#083FD8]/80'
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
              <ImageWithSkeleton
                src={images.umbrella}
                alt="games"
                fill
                objectFit="contain"
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
              WELL GUIDE
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
              DBAI0000025
            </div>
          </div>


          <div
            className="h-full flex items-end justify-end"
            style={{ width: px(24), height: px(24) }}
          >
            <ImageWithSkeleton
              src={images.arrow}
              alt="arrow"
              width={24}
              height={24}
              objectFit="contain"
            />
          </div>

          </div>


        </div>

        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(30) }}>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
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
              borderRadius: px(4),
              backgroundColor: buttonHovered === 'NaturalLanguage' ? '#ffffff' : 'transparent',
              color: buttonHovered === 'NaturalLanguage' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
           
          >
            Natural Language

          </div>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
              width: '33%',
              height: '100%',
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(14),
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              borderRadius: px(4),
              backgroundColor: buttonHovered === 'Text' ? '#ffffff' : 'transparent',
              color: buttonHovered === 'Text' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
           
          >Text</div>
        </div>

        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(10) }}>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
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
              textAlign: 'center',
              backgroundColor: buttonHovered === 'Analyze' ? '#ffffff' : 'transparent',
              color: buttonHovered === 'Analyze' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
           
          >Analyze</div>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
              width: '66%',
              height: '100%',
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(14),
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              borderRadius: px(4),
              backgroundColor: buttonHovered === 'PublicHealth' ? '#ffffff' : 'transparent',
              color: buttonHovered === 'PublicHealth' ? '#000000' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
           
          >Public Health
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
        }}>THIS IS A HEALTH 
GUIDANCE AI</div>
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(18),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
          marginTop: px(5)
        }}>AGENT
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
              <ImageWithSkeleton
                src={images.sword}
                alt="games"
                fill
                objectFit="contain"
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


        <div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(26) }}>

        <div  className="flex flex-col items-start justify-between " style={{ height: '100%' }}>
          
          <div className=" flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(15),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFC8C5'
          }}>Contributione</div>

          <div className=" flex items-start justify-center" style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(17),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF'
          }}>21</div>
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
  }}>Start aDate</div>

  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(17),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFFFFF'
  }}>
  Dec17&apos; 2026
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


<div className=" flex justify-between items-start" style={{ height: px(36), marginTop: px(19) }}>

<div  className="flex flex-col items-start justify-between " style={{ height: '100%' }}>
  
  <div className=" flex items-center justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(15),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFC8C5'
  }}>Progress</div>

  <div className=" flex items-start justify-center" style={{
    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: px(17),
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#FFFFFF'
  }}>85%

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
  }}>Contributors
</div>

  <div className="flex items-center justify-center gap-1">
  722
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
  onClick={() => router.push('/Favorites')}
>Favorites
</div>
</div>
        </>
        )}

      </div>
    </div>
  );
}
