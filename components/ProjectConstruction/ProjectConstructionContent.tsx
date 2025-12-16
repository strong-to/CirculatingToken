"use client";

import { px } from "@/utils/pxToRem";
import { useState } from "react";
import ProjectCardList from "./com/ProjectCardList";

export default function ConferenceRoomContent() {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <>
      <div
        className="w-full"
        style={{ paddingLeft: px(30), paddingRight: px(30) }}
      >
        <div
          className="w-full flex flex-shrink-0"
          style={{
            paddingLeft: px(302),
            paddingRight: px(302),
            height: px(44),
            gap: px(16),
            marginTop: px(40),
          }}
        >
          {[
            "All",
            "Funding",
            "Data",
            "Compute",
            "Development",
            "Documentation",
          ].map((text) => {
            const isActive = activeTab === text;
            return (
              <button
                key={text}
                onClick={() => setActiveTab(text)}
                className="flex items-center justify-center transition-colors"
                style={{
                  flex: 1,
                  height: "100%",
                  borderRadius: px(4),
                  backgroundColor: isActive ? "#000000" : "transparent",
                  color: isActive ? "#ffffff" : "#000000",
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  border: isActive ? "1px solid #000000" : `1px solid #000000`,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "#000000";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#000000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#000000";
                    e.currentTarget.style.borderColor = "#000000";
                  }
                }}
              >
                {text}
              </button>
            );
          })}
        </div>

        <ProjectCardList filterTab={activeTab} />

      </div>
    </>
  );
}
