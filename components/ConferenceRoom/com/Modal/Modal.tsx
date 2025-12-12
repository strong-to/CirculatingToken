"use client";

import { px } from "@/utils/pxToRem";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 z-40"
        style={{ backgroundColor: "#4d4d4d" }}
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
