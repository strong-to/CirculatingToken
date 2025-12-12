"use client";

import { px } from "@/utils/pxToRem";
import FilterDropdown from "./FilterDropdown";
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" rx="2" fill="black" />
          <path d="M8 6.57031H8.57143V9.99886H8V6.57031Z" fill="white" />
          <path
            d="M11.3491 8.14618C11.3491 6.37538 9.91357 4.93986 8.14276 4.93986C6.37196 4.93987 4.93645 6.37538 4.93644 8.14618C4.93644 9.91699 6.37196 11.3525 8.14276 11.3525V12.0033C6.01253 12.0033 4.28564 10.2764 4.28564 8.14618C4.28565 6.01596 6.01254 4.28907 8.14276 4.28906C10.273 4.28906 11.9999 6.01595 11.9999 8.14618C11.9999 10.2764 10.273 12.0033 8.14276 12.0033V11.3525C9.91357 11.3525 11.3491 9.91699 11.3491 8.14618Z"
            fill="white"
          />
          <path
            d="M13.2537 10.7422L13.6213 11.1796L10.9968 13.3857L10.6292 12.9483L13.2537 10.7422Z"
            fill="white"
          />
          <path
            d="M12.5707 8.03125C13.52 8.13714 14.4319 8.59257 15.0951 9.38146C16.4658 11.0121 16.2551 13.4453 14.6245 14.816C12.9939 16.1866 10.561 15.9759 9.19028 14.3454C8.74466 13.8152 8.46697 13.1999 8.3501 12.5643C8.56951 12.5476 8.78455 12.5154 8.99422 12.4689C9.0938 12.9892 9.32315 13.4922 9.68823 13.9265C10.8276 15.282 12.8501 15.4571 14.2057 14.3177C15.5612 13.1783 15.7365 11.1558 14.5972 9.80028C14.0512 9.15081 13.3024 8.7729 12.5215 8.68014C12.5528 8.46821 12.5696 8.25161 12.5707 8.03125Z"
            fill="white"
          />
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
         Collect labeled data for specific scenes
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
       Collec abeled data in medical imaging for fine-tuning and accuracy improvement
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
        {/* Card 1: This round */}
        <div
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
                height:px(18),
                marginBottom: px(10),
              }}
            >
              This round
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
                height:px(29),
              }}
            >
              1
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
              C
            </span>
          </div>
        </div>

        {/* Card 2: Accuracy */}
        <div
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
              Accuracy
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
              96.5%
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
              C
            </span>
          </div>
        </div>

        {/* Card 3: Rewards Earned */}
        <div
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
              Rewards Earned
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
              2
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
              C
            </span>
          </div>
        </div>

        {/* Card 4: Avg Time */}
        <div
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
              Avg Time
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
              45s
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
              C
            </span>
          </div>
        </div> 
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
                Tasio Transcription Verification
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
                Task 5 / 5
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
                +2 GVP
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
              Audio Player
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
              Artificial intelligence is changing our way of life
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
              Verify if the transcription is accurate
            </div>

          </div>



<div className="flex flex-col" style={{ gap: px(20),marginTop:px(25) }}>
          {/* Completely accurate */}
          <div
            className="flex items-center justify-start"
            style={{
              paddingLeft: px(15),
              height: px(44),
              backgroundColor: "#F5F5F5",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#555555",
              cursor: "pointer",
            }}
          >
            Completely accurate
          </div>

          {/* Mostly accurate (minor errors) */}
          <div
            className="flex items-center justify-start"
            style={{
              paddingLeft: px(15),
              height: px(44),
              backgroundColor: "#F5F5F5",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#555555",
              cursor: "pointer",
            }}
          >
            Mostly accurate (minor errors)
          </div>

          {/* Partially accurate */}
          <div
            className="flex items-center justify-start "
            style={{
              paddingLeft: px(15),
              height: px(44),
              backgroundColor: "#F5F5F5",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#555555",
              cursor: "pointer",
            }}
          >
            Partially accurate
          </div>

          {/* Inaccurate */}
          <div
            className="flex items-center justify-start"
            style={{
              paddingLeft: px(15),
              height: px(44),
              backgroundColor: "#F5F5F5",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#555555",
              cursor: "pointer",
            }}
          >
            Inaccurate
          </div>
        </div>

        <div className="w-full flex items-center justify-center" style={{marginTop:px(40),gap:px(20)}}>
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
            Skip
          </button>
          <button
            className="flex items-center justify-center w-full"
            style={{
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
            Submit labels
          </button>
        </div>
        

      </div>

</div>




      




      
     

      {/* <div style={{height:px(44),paddingLeft:px(50),paddingRight:px(50),marginTop:px(50)}} className="flex items-center justify-center w-full">
 <button className="cursor-pointer w-full" style={{  height:px(44), backgroundColor:"#000000",borderRadius:px(4), color:"#ffffff",fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',fontWeight: 300,fontSize: px(16),lineHeight: "100%",letterSpacing: "0%"}}>
 Submit Compute Resource
 </button>
      

      </div> */}




    </div>
  );
}
