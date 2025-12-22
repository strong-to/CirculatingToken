"use client";

import { px } from "@/utils/pxToRem";
import { useState } from "react";

export default function CollectDataModal() {
  const [skipHovered, setSkipHovered] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-start"
        style={{
          fontWeight: 300,
          fontSize: px(24),
          marginBottom: px(12),
          paddingTop: px(70),
          paddingLeft: px(30),
          lineHeight: px(26),
        }}
      >
        <div style={{width:px(20),height:px(20) , marginTop:px(-10),marginRight:px(10)  }}> 
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="2" fill="black"/>
            <rect x="8" y="8.57031" width="2.57143" height="0.571429" fill="white"/>
            <path d="M6.57153 13.9967H13.7144V9.85379V7.68602L11.5947 5.71094H6.57153V13.9967Z" stroke="white" strokeWidth="0.5"/>
            <path d="M11.5 6L11.65 5.8L11.3173 5.55045L11.253 5.96137L11.5 6ZM13.5 7.5L13.5788 7.73727C13.6671 7.70796 13.7318 7.63203 13.7467 7.5402C13.7617 7.44837 13.7244 7.35583 13.65 7.3L13.5 7.5ZM11.1431 8.28237L10.8961 8.24374L10.8327 8.6488L11.2218 8.51964L11.1431 8.28237ZM13.5 7.5L13.4212 7.26273L11.0643 8.0451L11.1431 8.28237L11.2218 8.51964L13.5788 7.73727L13.5 7.5ZM11.1431 8.28237L11.3901 8.32099L11.747 6.03863L11.5 6L11.253 5.96137L10.8961 8.24374L11.1431 8.28237ZM13.5 7.5L13.65 7.3L11.65 5.8L11.5 6L11.35 6.2L13.35 7.7L13.5 7.5Z" fill="white"/>
            <rect x="8" y="10.2812" width="4.28571" height="0.571429" fill="white"/>
            <rect x="8" y="12" width="4.28571" height="0.571429" fill="white"/>
          </svg>
        </div>
        <h2
          className="flex items-center justify-start"
          style={{
            marginLeft: px(10),
            color: "#000000",
            marginTop: px(3),
            fontSize:px(26),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          }}
        >
          © Collect labeled data for specific
        </h2>
      </div>
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(16),
          lineHeight: "150%",
          color: "#555555",
          paddingLeft: px(30),
          paddingRight: px(30),
          marginBottom: px(30),
        }}
      >
        Collect labeled data in medical imaging for fine-tuning and accuracy improvement
      </div>
      <div className="w-full h-[1px] bg-[#000000]" /> 

      <div className=" w-full flex flex-col items-center justify-center" style={{marginTop:px(439),gap:px(20)}}>
        <div
          style={{
            height: px(20),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#555555",
          }}
        >
          This task type is not supported for online contributions yet
        </div>
        <div
          style={{
            height: px(20),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#555555",
          }}
        >
          Please contact the project team for details
        </div>
        <div
          style={{
            height: px(20),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontSize: px(20),
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#555555",
          }}
        >
          Task Info:
        </div>
        <div style={{height:px(20),
         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
         fontWeight: 300,
         fontSize: px(20),
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#555555",
          }}
        >
          Collect labeled data in medical imaging for fine-tuning and accuracy improvement
        </div>
      </div>

      {/* 按钮 */}
      <div className=" flex items-center justify-center" style={{marginTop:px(50),gap:px(20)}}>
          <button
            className=" flex items-center justify-center"
            style={{
              width:px(206),
              height: px(44),
              backgroundColor: skipHovered ? "#000000" : "transparent",
              border: "1px solid #000000",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: skipHovered ? "#FFFFFF" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setSkipHovered(true)}
            onMouseLeave={() => setSkipHovered(false)}
          >
            2000 GVP
          </button>
          <button
            className="flex items-center justify-center w-full"
            style={{
              width:px(206),
              height: px(44),
              backgroundColor: submitHovered ? "#000000" : "transparent",
              border: "1px solid #000000",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: submitHovered ? "#FFFFFF" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
          >
           Medium
          </button>
        </div>
    </div>
  );
}



