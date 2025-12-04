"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MarketCapIcon,
  RevenueIcon,
  TotalUsersIcon,
  UserRatingIcon,
} from "@/components/icons/Icons";
import styles from "./BlueSquareCard.module.css";
import { px } from "@/utils/pxToRem";

interface BlueSquareCardProps {
  src: string;
  alt: string;
}

export default function BlueSquareCard({ src, alt }: BlueSquareCardProps) {
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden shadow-lg ${styles.card}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDetail(false); // 鼠标移出时重置详细信息状态
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
        className="absolute bottom-0 left-0 w-full aspect-square bg-[#083FD8]/80 text-white flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => setShowDetail((prev) => !prev)}
        style={{
          padding: px(30),
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(20px)",
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        {/* 顶部：图标 + 标题 + 箭头（紧凑版） */}
        <div className="flex  justify-evenly">
          <div
            className="border border-white flex items-center justify-center "
            style={{ width: px(55), height: px(55), borderRadius: px(3) }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: px(44), height: px(32) }}
            >
              <Image
                src="/images/Investing/games.png"
                alt="games"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 text-center">
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

        {/* 中间：两个按钮 */}
        <div className="flex">
          <button
            className="border border-white text-white flex items-center justify-center "
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: "normal",
              fontSize: px(10.5),
              lineHeight: px(12),
              letterSpacing: "0%",
              paddingLeft: px(14),
              paddingRight: px(14),
              paddingTop: px(6),
              paddingBottom: px(6),
              borderRadius: px(3),
              marginRight: px(13),
            }}
          >
            AI avatar
          </button>
          <button
            className="border border-white text-white flex items-center justify-center"
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: "normal",
              fontSize: px(10.5),
              lineHeight: px(12),
              letterSpacing: "0%",
              paddingLeft: px(14),
              paddingRight: px(14),
              paddingTop: px(6),
              paddingBottom: px(6),
              borderRadius: px(3),
            }}
          >
            Emotional connection
          </button>
        </div>

        {/* 底部：四列指标（紧凑版） */}
        <div className="grid grid-cols-2 font-light ">
          <div>
            <div className=" flex items-center ">
              <MarketCapIcon className={styles.icon18} />
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(15),
                  lineHeight: px(16),
                  marginLeft: px(6),
                  letterSpacing: "0%",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              >
                Market Cap
              </span>
            </div>
            <div
              className="font-semibold text-white"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                marginTop: px(11),
                fontStyle: "normal",
                fontSize: px(17),
                lineHeight: px(20),
                letterSpacing: "0%",
              }}
            >
              $12.3k
            </div>
          </div>
          <div>
            <div className="flex items-center ">
              <RevenueIcon className={styles.icon12x19} />
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(15),
                  lineHeight: px(16),
                  marginLeft: px(6),
                  letterSpacing: "0%",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              >
                24h Revenue
              </span>
            </div>
            <div
              className="font-semibold text-white "
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                marginTop: px(11),
                fontStyle: "normal",
                fontSize: px(17),
                lineHeight: px(20),
                letterSpacing: "0%",
              }}
            >
              $250k
            </div>
          </div>
          <div style={{ marginTop: px(21) }}>
            <div className="flex items-center ">
              <TotalUsersIcon className={styles.icon18x16} />
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(15),
                  lineHeight: px(16),
                  marginLeft: px(6),
                  letterSpacing: "0%",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              >
                Total Users
              </span>
            </div>
            <div
              className="font-semibold text-white "
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                marginTop: px(11),
                fontStyle: "normal",
                fontSize: px(17),
                lineHeight: px(20),
                letterSpacing: "0%",
              }}
            >
              1.2M
            </div>
          </div>
          <div style={{ marginTop: px(21) }}>
            <div className="flex items-center">
              <UserRatingIcon className={styles.icon18x10} />
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(15),
                  lineHeight: px(16),
                  marginLeft: px(6),
                  letterSpacing: "0%",
                  color: "rgba(255, 255, 255, 0.65)",
                }}
              >
                User Rating
              </span>
            </div>
            <div
              className="font-semibold text-white "
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                marginTop: px(11),
                fontStyle: "normal",
                fontSize: px(17),
                lineHeight: px(20),
                letterSpacing: "0%",
              }}
            >
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
