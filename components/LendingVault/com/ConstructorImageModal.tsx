"use client";

import { px } from "@/utils/pxToRem";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ConstructorImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageIndex: number;
  name?: string;
  address?: string;
  totalContributions?: number;
  tokensEarned?: string;
  tagLabel?: string;
  totalContributionsLabel?: string;
  tokensEarnedLabel?: string;
}

export default function ConstructorImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageIndex,
  name = "Quantum",
  address = "0x2b3c...Otla",
  totalContributions = 287,
  tokensEarned = "12,800 GVP",
  tagLabel = "Data Annotation",
  totalContributionsLabel = "Total contributions",
  tokensEarnedLabel = "Tokens earned",
}: ConstructorImageModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // 触发动画
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      // 等待动画完成后再移除DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 z-40"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        onClick={onClose}
      />


      
      
      {/* 弹窗内容 */}
      <div
        className="fixed z-50"
        style={{
          top: "50%",
          left: "50%",
          transform: isAnimating
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.9)",
          width: px(573),
        //   height: px(388),
          backgroundColor: "#ffffff",
          borderRadius: px(8),
          overflow: "hidden",
          opacity: isAnimating ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          padding: px(30),
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
          style={{
            width: px(32),
            height: px(32),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            color: "#ffffff",
            fontSize: px(24),
            lineHeight: "1",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          }}
        >
          ×
        </button>

        {/* 顶部区域：头像和名称 */}
        <div
          className="flex items-center"
          style={{
            gap: px(16),
            marginBottom: px(20),
          }}
        >
          {/* 圆形头像 */}
          <div
            style={{
              width: px(90),
              height: px(90),
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "0.5px solid #000000",
            }}
          >
            <Image
              src={imageSrc}
              alt={`Constructor ${imageIndex + 1}`}
              width={80}
              height={80}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              priority
            />
          </div>

          {/* 名称和地址 */}
          <div className="flex flex-col justify-between" style={{ gap: px(8), height:px(90) , paddingTop:px(10), paddingBottom:px(10) }}>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: px(32),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(24),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#606060",
              }}
            >
              {address}
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#E0E0E0",
            marginBottom: px(35),
          }}
        />

        {/* 中间区域：统计数据 */}
        <div
          className="flex items-start justify-between"
          style={{
            marginBottom: px(20),
          }}
        >
          {/* 左侧：Total contributions */}
          <div className="flex flex-col" style={{ gap: px(10) }}>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(24),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#606060",
                height:px(34),
              }}
            >
              {totalContributionsLabel}
            </div>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: px(28),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
                height:px(28),
              }}
            >
              {totalContributions.toLocaleString()}
            </div>
          </div>

          {/* 右侧：Tokens earned */}
          <div className="flex flex-col" style={{ gap: px(10) }}>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(24),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#606060",
                height:px(34),
              }}
            >
              {tokensEarnedLabel}
            </div>
            <div
              style={{
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: px(28),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
                height:px(28),
              }}
            >
              {tokensEarned}
            </div>
          </div>
        </div>

        {/* 底部区域：标签 */}
        <div className="flex flex-col" style={{ gap: px(12) }}>
          <div
            style={{
              fontFamily: "ITC Avant Garde Gothic Pro",
              fontWeight: 300,
              fontStyle: "normal",
              fontSize: px(24),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#606060",
            }}
          >
            {totalContributionsLabel}
          </div>
          <button
            className="flex items-center justify-center transition-colors whitespace-nowrap"
            style={{
              border: "1px solid #606060",
              borderRadius: px(18),
              fontFamily: "ITC Avant Garde Gothic Pro",
              fontWeight: 300,
              fontSize: px(24),
              width: px(230),
              color: "#606060",
              backgroundColor: "transparent",
              height: px(36),
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#606060";
              e.currentTarget.style.borderColor = "#606060";
            }}
          >
            {tagLabel}
          </button>
        </div>
        {/* <div></div> */}
      </div>


    </>
  );
}

