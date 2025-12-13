"use client";

import { px } from "@/utils/pxToRem";
import { useState } from "react";
import PlayIcon from "./com/Icons/PlayIcon";
import UserIcon from "./com/Icons/UserIcon";
import ImageGrid from "./com/ImageGrid";
import ImageDetail from "./com/ImageDetail";

export default function MortgageMarketContent() {
  const [activeTab, setActiveTab] = useState<"play" | "user">("play");

  return (
    <div
      className="w-full flex-1"
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* left */}
      <div
        className="flex flex-col items-center justify-center flex-shrink-0"
        style={{
          width: px(90),
          height: "100vh",
          backgroundColor: "#000000",
          gap: px(35),
        }}
      >
        <div
          onClick={() => setActiveTab("play")}
          style={{ cursor: "pointer" }}
        >
          <PlayIcon isActive={activeTab === "play"} />
        </div>
        <div
          onClick={() => setActiveTab("user")}
          style={{ cursor: "pointer" }}
        >
          <UserIcon isActive={activeTab === "user"} />
        </div>
      </div>

      {/* right */}
      <div
        className="flex-1 relative"
        style={{
          overflow: activeTab === "play" ? "auto" : "hidden",
        }}
      >
        {/* ImageDetail */}
        <div
          className="scrollbar-hide"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: activeTab !== "play" ? 1 : 0,
            visibility: activeTab !== "play" ? "visible" : "hidden",
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: activeTab !== "play" ? "auto" : "none",
            overflow: "hidden",
          }}
        >
          <ImageDetail imageSrc="" onBack={() => {}} />
        </div>
        
        {/* ImageGrid */}
        <div
          className="scrollbar-hide"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: activeTab === "play" ? 1 : 0,
            visibility: activeTab === "play" ? "visible" : "hidden",
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: activeTab === "play" ? "auto" : "none",
            overflow: "auto",
          }}
        >
          <ImageGrid />
        </div>
      </div>

      {/* Fixed Video Description Overlay */}
      <div
        className="flex flex-col items-center justify-between"
        style={{
          position: "fixed",
          bottom: px(20),
          left: "50%",
          transform: "translateX(-50%)",
          width: px(766),
          height: px(122),
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: px(12),
          padding: px(15),
          display: "flex",
          flexDirection: "column",
          gap: px(12),
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Input Field */}
        <input
          type="text"
          placeholder="Describe your video..."
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontFamily: "ITC Avant Garde Gothic Pro",
            fontWeight: 300,
            fontSize: px(16),
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000000",
            backgroundColor: "transparent",
          }}
        />

        {/* Bottom Section with Buttons */}
        <div
          className="flex items-center justify-between"
          style={{
            width: "100%",
          }}
        >
          {/* Left: Plus Icon and Storyboard Button */}
          <div className="flex items-center " style={{ gap: px(12) }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 1.5625C18.5408 1.5625 23.4375 6.45936 23.4375 12.5C23.4375 18.5406 18.5408 23.4375 12.5 23.4375C6.45948 23.4375 1.5625 18.5405 1.5625 12.5C1.5625 6.45948 6.45948 1.5625 12.5 1.5625ZM12.5 3.125C7.32242 3.125 3.125 7.32242 3.125 12.5C3.125 17.6257 7.23876 21.7911 12.3447 21.874L12.5 21.875L12.6553 21.874C17.7098 21.792 21.792 17.7097 21.874 12.6553L21.875 12.5C21.875 7.3223 17.6778 3.125 12.5 3.125ZM12.5 7.42188C12.9118 7.42188 13.2493 7.74042 13.2793 8.14453L13.2812 8.20312V11.7188H16.7969C17.2283 11.7188 17.5781 12.0685 17.5781 12.5C17.5781 12.9118 17.2596 13.2493 16.8555 13.2793L16.7969 13.2812H13.2812V16.7969C13.2812 17.2283 12.9315 17.5781 12.5 17.5781C12.0882 17.5781 11.7507 17.2596 11.7207 16.8555L11.7188 16.7969V13.2812H8.20312C7.77165 13.2812 7.42188 12.9315 7.42188 12.5C7.42188 12.0882 7.74042 11.7507 8.14453 11.7207L8.20312 11.7188H11.7188V8.20312C11.7188 7.77165 12.0685 7.42188 12.5 7.42188Z" fill="#252525"/>
              </svg>
            </div>
            <button
              style={{
                padding: `${px(8)} ${px(16)}`,
                border: "0.5px solid #000000",
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "ITC Avant Garde Gothic Pro",
                fontWeight: 300,
                fontSize: px(14),
                lineHeight: "100%",
                letterSpacing: "0%",
                cursor: "pointer",
                borderRadius: px(6),
              }}
            >
              + Storyboard
            </button>
          </div>

          {/* Right: Filter and Upload Icons */}
          <div className="flex items-center" style={{ gap: px(8) }}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path d="M12.5 1.5625C18.5408 1.5625 23.4375 6.45936 23.4375 12.5C23.4375 18.5406 18.5408 23.4375 12.5 23.4375C6.45948 23.4375 1.5625 18.5405 1.5625 12.5C1.5625 6.45948 6.45948 1.5625 12.5 1.5625ZM12.5 3.125C7.32242 3.125 3.125 7.32242 3.125 12.5C3.125 17.6257 7.23876 21.7911 12.3447 21.874L12.5 21.875L12.6553 21.874C17.7098 21.792 21.792 17.7097 21.874 12.6553L21.875 12.5C21.875 7.3223 17.6778 3.125 12.5 3.125Z" fill="#252525"/>
              <rect width="12" height="1.28571" transform="matrix(-1 0 0 1 19 14.7109)" fill="black"/>
              <rect width="12" height="1.28571" transform="matrix(-1 0 0 1 19 14.7109)" fill="black" fillOpacity="0.2"/>
              <rect width="12" height="1.28571" transform="matrix(-1 0 0 1 19 14.7109)" fill="black" fillOpacity="0.2"/>
              <rect width="12" height="1.28571" transform="matrix(-1 0 0 1 19 14.7109)" fill="black" fillOpacity="0.2"/>
              <rect width="12" height="1.28571" transform="matrix(-1 0 0 1 19 14.7109)" fill="black" fillOpacity="0.2"/>
              <rect x="7" y="8.71094" width="12" height="1.28571" fill="black"/>
              <rect x="7" y="8.71094" width="12" height="1.28571" fill="black" fillOpacity="0.2"/>
              <rect x="7" y="8.71094" width="12" height="1.28571" fill="black" fillOpacity="0.2"/>
              <rect x="7" y="8.71094" width="12" height="1.28571" fill="black" fillOpacity="0.2"/>
              <rect x="7" y="8.71094" width="12" height="1.28571" fill="black" fillOpacity="0.2"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" fill="white"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" stroke="black" strokeWidth="1.5"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="13.8571" cy="9.57143" r="1.82143" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" fill="white"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" stroke="black" strokeWidth="1.5"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
              <circle cx="2.57143" cy="2.57143" r="1.82143" transform="matrix(-1 0 0 1 13.8572 13)" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path d="M12.9375 2C18.9783 2 23.875 6.89686 23.875 12.9375C23.875 18.9781 18.9783 23.875 12.9375 23.875C6.89698 23.875 2 18.978 2 12.9375C2 6.89698 6.89698 2 12.9375 2ZM12.9375 3.5625C7.75992 3.5625 3.5625 7.75992 3.5625 12.9375C3.5625 18.0632 7.67626 22.2286 12.7822 22.3115L12.9375 22.3125L13.0928 22.3115C18.1473 22.2295 22.2295 18.1472 22.3115 13.0928L22.3125 12.9375C22.3125 7.7598 18.1153 3.5625 12.9375 3.5625Z" fill="#8C8C8C"/>
              <path d="M18 12.4883L17.4367 13.052L12.5 8.1258L7.56329 13.052L7 12.4883L12.5 7L18 12.4883Z" fill="#8C8C8C" stroke="#8C8C8C" strokeWidth="0.5"/>
              <path d="M12.8985 7.96875V18.8183H12.1018V7.96875H12.8985Z" fill="#8C8C8C" stroke="#8C8C8C" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
