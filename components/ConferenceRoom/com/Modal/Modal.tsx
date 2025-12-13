"use client";

import { px } from "@/utils/pxToRem";
import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
      }, 350); // 与动画时长一致
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 z-40"
        style={{
          backgroundColor: "#4d4d4d",
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={onClose}
      />
      {/* 弹窗内容 */}
      <div
        className="fixed z-50"
        style={{
          top: px(30),
          left: px(30),
          right: px(30),
          bottom: px(0),
          backgroundColor: "#ffffff",
          overflowY: "auto",
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.96)",
          transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transformOrigin: "center center",
        }}
        onClick={onClose}
      >
        <div
          className="relative"
          style={{
            width: "100%",
            height: "100%"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            style={{
              fontSize: px(24),
              lineHeight: "1",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            ×
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
