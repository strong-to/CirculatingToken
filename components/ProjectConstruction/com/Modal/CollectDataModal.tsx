"use client";

import { px } from "@/utils/pxToRem";
import FilterDropdown from "./FilterDropdown";
import { useState } from "react";
import Toast from '@/components/common/Toast';

interface CardData {
  icon?: string;
  title?: string;
  subtitle?: string;
  tags?: Array<{
    type?: "bordered" | "icon";
    text?: string;
    icon?: "lightning" | "clock" | "person" | "gvp";
  }>;
  modal?: {
    statistics?: Array<{
      label?: string;
      value?: string;
      icon?: string;
    }>;
    task?: {
      title?: string;
      progress?: string;
      reward?: string;
    };
    audioPlayer?: {
      label?: string;
    };
    transcription?: {
      text?: string;
    };
    verification?: {
      prompt?: string;
      options?: string[];
    };
    buttons?: {
      skip?: string;
      submit?: string;
    };
  };
}

interface CollectDataModalProps {
  card?: CardData;
}

export default function CollectDataModal({ card }: CollectDataModalProps) {
  console.log('CollectDataModal card data:', card);
  const [skipHovered, setSkipHovered] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
<path d="M10.0686 5.64844C11.3644 5.64855 12.4366 6.41038 12.5598 7.51855H11.7688C11.6963 7.15618 11.5185 6.84695 11.2502 6.61621C10.9319 6.34242 10.5001 6.19242 10.0129 6.19238C9.01495 6.19238 8.20825 6.82721 8.20825 7.67188C8.20834 8.03754 8.36706 8.3549 8.70337 8.62305C9.02976 8.88327 9.51368 9.08856 10.1516 9.2627C11.3668 9.59683 12.0487 9.95432 12.4319 10.3467C12.8086 10.7325 12.925 11.1821 12.925 11.7607C12.925 12.484 12.6346 13.0581 12.1389 13.4512C11.6424 13.8449 10.9141 14.0771 9.99438 14.0771C8.45076 14.0771 7.22607 13.2038 7.14282 11.8057H7.9231C7.9705 12.3066 8.15886 12.7198 8.48364 13.0195C8.85725 13.3641 9.38452 13.5332 9.99438 13.5332C10.6276 13.5332 11.1732 13.3865 11.5618 13.082C11.9519 12.7762 12.1506 12.3366 12.1506 11.8066C12.1505 11.3464 11.9702 10.9756 11.6165 10.6748C11.272 10.382 10.7778 10.168 10.179 9.98633C9.27929 9.71373 8.59636 9.48601 8.13208 9.16211C7.6907 8.85417 7.43481 8.44892 7.43481 7.7793C7.43499 6.54146 8.54122 5.64849 10.0686 5.64844Z" fill="white"/>
<rect x="9.71436" y="4.28906" width="0.571429" height="11.1429" fill="white"/>
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
          {card?.title}
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
        {card?.subtitle}
      </div>
      <div className="w-full h-[1px] bg-[#000000]" />


   {/* 四个卡片 */}
      <div
        className="flex"
        style={{
          paddingLeft: px(30),
          paddingRight: px(30),
          paddingTop: px(20),
          gap: px(25),
        }}
      >
        {(card?.modal?.statistics || []).map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-between"
            style={{
              border: `1px solid rgba(0, 0, 0, 0.25)`,
              borderRadius: px(4),
              paddingLeft: px(25),
              paddingRight: px(25),
              paddingTop: px(15),
              paddingBottom: px(15),
            }}
          >
            <div className="flex flex-col justify-between items-start">
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#555555",
                  height: px(18),
                  marginBottom: px(10),
                }}
              >
                {stat.label}
              </div>
              <div
                className="flex items-end"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(24),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                  height: px(29),
                }}
              >
                {stat.value}
              </div>
            </div>

            <div
              style={{
                width: px(30),
                height: px(30),
                borderRadius: "50%",
                border: "1px dashed #000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  color: "#000000",
                }}
              >
                {stat.icon}
              </span>
            </div>
          </div>
        ))}
      </div>

<div style={{paddingLeft:px(30),paddingRight:px(30),paddingTop:px(20),paddingBottom:px(20)}}>
<div
      style={{
        border: `1px solid rgba(0, 0, 0, 0.25)`,
        borderRadius: px(4),
        paddingLeft: px(25),
        paddingRight: px(25),
        paddingTop: px(25),
        paddingBottom: px(25),
      }}>

        <div className="flex flex-col" style={{ gap: px(20) }}>
          {/* 顶部：标题和按钮 */}
          <div className="flex items-start justify-between">
            {/* 左侧：标题和任务进度 */}
            <div className="flex flex-col">
              <h4
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(22),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                  marginBottom: px(15),
                  height:px(22),
                }}
              >
                {card?.modal?.task?.title || "Tasio Transcription Verification"}
              </h4>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#555555",
                  height:px(19),
                }}
              >
                {card?.modal?.task?.progress || "Task 5 / 5"}
              </div>
            </div>

            {/* 右侧：按钮 */}
            <div
              className="flex items-center"
              style={{
                height:px(25),
                borderRadius: px(15),
                paddingLeft: px(25),
                paddingRight: px(25),
                paddingTop:px(4),
                paddingBottom:px(4),
                gap: px(8),
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  width: px(20),
                  height: px(20),
                
                  border: "1px dashed #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(12),
                    color: "#000000",
                  }}
                >
                  C
                </span>
              </div>
              <span
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                {card?.modal?.task?.reward}
              </span>
            </div>
          </div>

          {/* 底部：进度条 */}
          <div
            style={{
              width: "100%",
              height: px(8),
              backgroundColor: "#000000",
              borderRadius: px(4),
            }}
          />
        </div>


        <div className="flex flex-col" style={{ gap: px(0),marginTop:px(20), height: px(189), 
        borderRadius: px(4),
          
          backgroundColor: "#eff1f7"}}>


            
          {/* Audio Player 部分 */}
          <div
            className="flex items-center justify-center"
            style={{
             
              paddingTop: px(25),
              paddingBottom: px(20),
              gap: px(12),
              marginRight:px(25),
              marginLeft:px(25),
              borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#D6D8DD" />
              <circle cx="19.9993" cy="19.9974" r="13.3333" fill="#AAADB4" />
            </svg>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(18),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              {card?.modal?.audioPlayer?.label || "Audio Player"}
            </div>
          </div>

          {/* 分隔线 */}
          <div
            style={{
              width: "100%",
              height: px(1),
              backgroundColor: "#E0E0E0",
            }}
          />

          {/* 转录文本部分 */}
          <div
            className="flex items-center justify-center"
            style={{
          
              paddingTop: px(40),
              paddingBottom: px(40),
            }}
          >
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(22),
                lineHeight: px(26),
                letterSpacing: "0%",
                textAlign: "center",
                color: "#000000",
              }}
            >
              {card?.modal?.transcription?.text || "Artificial intelligence is changing our way of life"}
            </div>
          </div>

          {/* 验证提示 */}
          
        </div>


        <div
            className="flex items-center justify-center"
            style={{
              marginTop: px(25),
            }}
          >
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(18),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
                textAlign: "center",
              }}
            >
              {card?.modal?.verification?.prompt || "Verify if the transcription is accurate"}
            </div>

          </div>



        <div className="flex flex-col" style={{ gap: px(20),marginTop:px(35) }}>
          {(card?.modal?.verification?.options || [
            "Completely accurate",
            "Mostly accurate (minor errors)",
            "Partially accurate",
            "Inaccurate"
          ]).map((option, index) => {
            const isSelected = selectedOptionIndex === index;
            return (
              <div
                key={index}
                className="flex items-center justify-start"
                style={{
                  paddingLeft: px(15),
                  height: px(44),
                  backgroundColor: isSelected ? "#000000" : "#F5F5F5",
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: isSelected ? "#FFFFFF" : "#555555",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onClick={() => setSelectedOptionIndex(index)}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "#000000";
                    e.currentTarget.style.color = "#FFFFFF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "#F5F5F5";
                    e.currentTarget.style.color = "#555555";
                  }
                }}
              >
                {option}
              </div>
            );
          })}
        </div>

        <div className="w-full flex items-center justify-center" style={{marginTop:px(60),marginBottom:px(20),gap:px(20)}}>
          <button
            className="w-full flex items-center justify-center"
            style={{
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
            {card?.modal?.buttons?.skip || "Skip"}
          </button>
          <button
            className="flex items-center justify-center w-full"
            style={{
              height: px(44),
              backgroundColor: submitHovered || isLoading ? "#000000" : "transparent",
              border: "1px solid #000000",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: submitHovered || isLoading ? "#FFFFFF" : "#000000",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              opacity: isLoading ? 0.7 : 1,
              gap: px(8),
            }}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
            onClick={() => {
              if (isLoading) return;
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setShowSuccessToast(true);
              }, 5000);
            }}
            disabled={isLoading}
          >
            {isLoading && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  animation: 'spin 1s linear infinite',
                }}
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="31.416"
                  strokeDashoffset="31.416"
                  fill="none"
                  opacity="0.3"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="31.416"
                  strokeDashoffset="15.708"
                  fill="none"
                  style={{
                    transformOrigin: '8px 8px',
                  }}
                />
              </svg>
            )}
            {card?.modal?.buttons?.submit || "Submit labels"}
          </button>
        </div>
        

      </div>

</div>




      




      
     

      {/* <div style={{height:px(44),paddingLeft:px(50),paddingRight:px(50),marginTop:px(50)}} className="flex items-center justify-center w-full">
 <button className="cursor-pointer w-full" style={{  height:px(44), backgroundColor:"#000000",borderRadius:px(4), color:"#ffffff",fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',fontWeight: 300,fontSize: px(16),lineHeight: "100%",letterSpacing: "0%"}}>
 Submit Compute Resource
 </button>
      

      </div> */}




      {/* 成功提示 Toast */}
      {showSuccessToast && (
        <Toast
          message="Your contribution has been confirmed successfully"
          duration={5000}
          onClose={() => setShowSuccessToast(false)}
        />
      )}
    </div>
  );
}
