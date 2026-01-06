"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./BlueSquareCard.module.css";
import { px } from "@/utils/pxToRem";
import type { HomeProjectCard } from "@/app/data";

interface BlueSquareCardProps {
  card?: HomeProjectCard;
}

// 计算按钮宽度（参考 ChatContent/InitialContent）
function calculateButtonWidths(buttons: string[]): string[] {
  if (buttons.length !== 4) {
    // 如果不是 4 个按钮，回退到原来的 66% / 33% 固定布局
    return ["66%", "33%", "33%", "66%"];
  }

  const lengths = buttons.map((btn) => btn.length);

  // 第一行：按钮 0 和 1
  const row1Total = lengths[0] + lengths[1];
  const row1Width0 = `${(lengths[0] / row1Total) * 100}%`;
  const row1Width1 = `${(lengths[1] / row1Total) * 100}%`;

  // 第二行：按钮 2 和 3
  const row2Total = lengths[2] + lengths[3];
  const row2Width2 = `${(lengths[2] / row2Total) * 100}%`;
  const row2Width3 = `${(lengths[3] / row2Total) * 100}%`;

  return [row1Width0, row1Width1, row2Width2, row2Width3];
}

const FALLBACK_CARD: HomeProjectCard = {
  systemId: "DBTF0000000",
  projectId: "DBAI0000000",
  title: "AI Project",
  subtitle: "DBAI0000000",
  image: "",
  logo: "",
  buttons: ["Natural Language", "Text", "Analyze", "Public Health"],
  descriptions: ["THIS IS A VIDEO", "CREATION AI WORKFLOW"],
};

const FALLBACK_BUTTONS = ["Details", "Share", "Market", "Favorites"];
const FALLBACK_DESCRIPTIONS = ["AI project", ""];

const ensureButtonLabels = (buttons: string[]) => {
  const filtered = buttons.filter(Boolean);
  const labels = [...filtered];
  FALLBACK_BUTTONS.forEach((label) => {
    if (labels.length < 4 && !labels.includes(label)) {
      labels.push(label);
    }
  });
  while (labels.length < 4) {
    labels.push(FALLBACK_BUTTONS[labels.length] ?? FALLBACK_BUTTONS[0]);
  }
  return labels.slice(0, 4);
};

const ensureDescriptions = (descriptions: string[]) => {
  const filtered = descriptions.filter((desc) => desc && desc.trim());
  while (filtered.length < 2) {
    filtered.push(FALLBACK_DESCRIPTIONS[filtered.length] ?? FALLBACK_DESCRIPTIONS[0]);
  }
  return filtered.slice(0, 2);
};

export default function BlueSquareCard({ card }: BlueSquareCardProps) {
  const router = useRouter();
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState<string | null>(null);

  const cardData = card ?? FALLBACK_CARD;
  const cardImage = cardData.image || FALLBACK_CARD.image;
  const iconSrc = cardData.logo || FALLBACK_CARD.logo;
  const [btn0, btn1, btn2, btn3] = ensureButtonLabels(cardData.buttons ?? []);
  const [desc0, desc1] = ensureDescriptions(cardData.descriptions ?? FALLBACK_DESCRIPTIONS);

  const buttonWidths = calculateButtonWidths([btn0, btn1, btn2, btn3]);

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
      <Image
        src={cardImage}
        alt={cardData.title ?? FALLBACK_CARD.title}
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
            style={{
              width: px(60),
              height: px(60),
              borderRadius: px(3),
              border: `${px(1)} solid rgba(255,255,255,0.6)`,
            }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: px(60), height: px(60) }}
            >
              <Image
                    src={iconSrc}
                    alt="icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

              <div className="flex justify-between" style={{ marginTop: px(17) }}>
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
                    {cardData.title ?? FALLBACK_CARD.title}
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
                    {cardData.subtitle}
            </div>
          </div>

          <div
            className="h-full flex items-end justify-end"
            style={{ width: px(24), height: px(24) }}
          >
            <Image
              src="/home/icons/img/arr.png"
              alt="arrow"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          </div>
        </div>

            {/* 按钮区域：宽度和样式不变，仅文案来自 cardData.buttons */}
        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(30) }}>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
                  width: buttonWidths[0],
                  height: "100%",
              marginRight: px(10),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
                  fontStyle: "normal",
              fontSize: px(14),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
              borderRadius: px(4),
                  backgroundColor: buttonHovered === btn0 ? "#ffffff" : "transparent",
                  color: buttonHovered === btn0 ? "#000000" : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
            
              >
                {btn0}
          </div>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
                  width: buttonWidths[1],
                  height: "100%",
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
                  fontStyle: "normal",
              fontSize: px(14),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
              borderRadius: px(4),
                  backgroundColor: buttonHovered === btn1 ? "#ffffff" : "transparent",
                  color: buttonHovered === btn1 ? "#000000" : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
               
              >
                {btn1}
              </div>
        </div>

        <div className="w-full flex justify-between" style={{ height: px(30), marginTop: px(10) }}>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
                  width: buttonWidths[2],
                  height: "100%",
              marginRight: px(10),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
                  fontStyle: "normal",
              fontSize: px(14),
                  lineHeight: "100%",
                  letterSpacing: "0%",
              borderRadius: px(4),
                  textAlign: "center",
                  backgroundColor: buttonHovered === btn2 ? "#ffffff" : "transparent",
                  color: buttonHovered === btn2 ? "#000000" : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
             
              >
                {btn2}
              </div>
          <div 
            className="border border-white flex items-center justify-center cursor-pointer" 
            style={{ 
                  width: buttonWidths[3],
                  height: "100%",
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
                  fontStyle: "normal",
              fontSize: px(14),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
              borderRadius: px(4),
                  backgroundColor: buttonHovered === btn3 ? "#ffffff" : "transparent",
                  color: buttonHovered === btn3 ? "#000000" : "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              
              >
                {btn3}
          </div>
        </div>

            {/* 描述区域：保持样式，仅替换为 cardData.descriptions 前两行 */}
            <div
              className="w-full  flex flex-col justify-between"
              style={{ height: px(35), marginTop: px(25) }}
            >
              <div
                style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
                  fontStyle: "normal",
          fontSize: px(18),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                {desc0}
              </div>
              <div
                style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
                  fontStyle: "normal",
          fontSize: px(18),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                  marginTop: px(5),
                }}
              >
                {desc1}
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
                  style={{
                    width: px(60),
                    height: px(60),
                    marginRight: px(15),
                    border: `${px(1)} solid rgba(255,255,255,0.6)`,
                    borderRadius: px(3),
                  }}
            >
              <Image
                    src={iconSrc}
                    alt="icon"
                fill
                className="object-contain"
              />
            </div>

                <div
                  className=" h-full flex justify-between flex-col"
                  style={{ paddingTop: px(2), paddingBottom: px(2) }}
                >
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
                    {cardData.title}
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
                    {cardData.subtitle ?? FALLBACK_CARD.subtitle}
            </div>
          </div>
          </div>

        </div>


        <div className=" flex justify-between items-center" style={{ height: px(36), marginTop: px(26) }}>

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
          className="border border-white flex items-center justify-center cursor-pointer" 
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
          onClick={(e) => {
            e.stopPropagation();
            if (cardData.systemId) {
              // 设置标记，表示应该滚动到顶部（从卡片点击跳转）
              sessionStorage.setItem('lendingVaultScrollToTop', 'true')
              router.push(`/LendingVault?system_id=${cardData.systemId}`);
            }
          }}
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
  className="border border-white flex items-center justify-center cursor-pointer" 
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
