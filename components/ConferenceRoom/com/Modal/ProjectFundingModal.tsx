"use client";

import { px } from "@/utils/pxToRem";
import FilterDropdown from "@/components/ConferenceRoom/com/Modal/FilterDropdown";
import { useEffect, useRef, useState } from "react";

export default function ProjectFundingModal() {
  const [sliderValue, setSliderValue] = useState(33); // 初始值33%
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderValue(percentage);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

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
        <div
          style={{
            width: px(20),
            height: px(20),
            marginTop: px(-10),
            marginRight: px(10),
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="2" fill="black" />
            <path
              d="M10.0005 5.64062C11.1183 5.64069 12.1057 5.88314 12.7954 6.25098C13.5067 6.63032 13.7856 7.07013 13.7856 7.42676C13.7854 7.7833 13.5063 8.22238 12.7954 8.60156C12.1057 8.9694 11.1183 9.21185 10.0005 9.21191C8.88248 9.21191 7.89437 8.96945 7.20459 8.60156C6.49373 8.22239 6.21457 7.78328 6.21436 7.42676C6.21436 7.07015 6.49341 6.6303 7.20459 6.25098C7.89437 5.88309 8.88248 5.64062 10.0005 5.64062Z"
              stroke="white"
            />
            <path
              d="M6.28857 8.85156C6.52309 9.06767 6.82298 9.25898 7.17236 9.42285C6.77061 9.69869 6.71436 9.92614 6.71436 9.99512C6.7148 10.0782 6.795 10.3845 7.43994 10.7285C8.04394 11.0506 8.948 11.2803 10.0005 11.2803C11.0528 11.2802 11.9561 11.0506 12.5601 10.7285C13.2051 10.3845 13.2852 10.0782 13.2856 9.99512C13.2856 9.9261 13.2291 9.69891 12.8267 9.42285C13.1754 9.25939 13.4741 9.06804 13.7085 8.85254C14.0742 9.18918 14.2856 9.57813 14.2856 9.99512L14.2798 10.1123C14.1647 11.3198 12.2931 12.2802 10.0005 12.2803L9.56201 12.2686C7.47307 12.1554 5.82785 11.242 5.72021 10.1123L5.71436 9.99512C5.71436 9.57857 5.92351 9.18794 6.28857 8.85156Z"
              fill="white"
            />
            <path
              d="M6.28857 11.4297C6.52309 11.6458 6.82298 11.8371 7.17236 12.001C6.77061 12.2768 6.71436 12.5043 6.71436 12.5732C6.7148 12.6563 6.795 12.9626 7.43994 13.3066C8.04394 13.6287 8.948 13.8584 10.0005 13.8584C11.0528 13.8583 11.9561 13.6287 12.5601 13.3066C13.2051 12.9626 13.2852 12.6563 13.2856 12.5732C13.2856 12.5042 13.2291 12.277 12.8267 12.001C13.1754 11.8375 13.4741 11.6462 13.7085 11.4307C14.0742 11.7673 14.2856 12.1563 14.2856 12.5732L14.2798 12.6904C14.1647 13.8979 12.2931 14.8583 10.0005 14.8584L9.56201 14.8467C7.47307 14.7336 5.82785 13.8201 5.72021 12.6904L5.71436 12.5732C5.71436 12.1567 5.92351 11.7661 6.28857 11.4297Z"
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
            fontSize: px(26),
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          }}
        >
          Project funding support
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
        Support the project with USDC to earn tokens and special benefits
      </div>
      <div className="w-full h-[1px] bg-[#000000]" />

      {/* 表单卡片区域 */}
      <div
        className="w-full "
        style={{
          paddingLeft: px(30),
          paddingRight: px(30),
          paddingTop: px(30),
        }}
      >
        {/* 左侧卡片：NVIDIA A100 GPU Computing Power */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #E3E3E3",
            borderRadius: px(4),
            padding: px(20),
          }}
        >
          <div
            style={{
              color: "#000000",
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(22),
              lineHeight: px(26),
            }}
          >
            Contribute Funds
          </div>

          {/* 12 */}
          <div
            style={{
              marginTop: px(10),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "150%",
              color: "#555555",
              marginBottom: px(16),
            }}
          >
            Support the project with USDC to earn tokens and special benefits
          </div>

          <div>
            <label
              className="flex items-center"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(14),
                color: "#000000",
                marginBottom: px(5),
              }}
            >
              Contribution Amount (USDC)
            </label>
            <input
              type="text"
              placeholder="$ 100"
              style={{
                width: "100%",
                height: px(44),
                paddingLeft: px(12),
                paddingRight: px(12),
                border: "0.5px solid #000000",
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(14),
                backgroundColor: "#ffffff",
              }}
            />
          </div>

          <div
            style={{
              height: px(19),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              color: "#555555",
              marginTop: px(10),
            }}
          >
            Minimum contribution: 50 USDC
          </div>

          <div className="flex" style={{ marginTop: px(11), gap: px(20) }}>
            <div
              className=" flex items-center justify-center "
              style={{
                width: px(80),
                height: px(40),
                border: "0.5px solid #000000",
                borderRadius: px(4),
              }}
            >
              $100
            </div>
            <div
              className=" flex items-center justify-center "
              style={{
                width: px(80),
                height: px(40),
                border: "0.5px solid #000000",
                borderRadius: px(4),
              }}
            >
              $500
            </div>
            <div
              className=" flex items-center justify-center "
              style={{
                width: px(80),
                height: px(40),
                border: "0.5px solid #000000",
                borderRadius: px(4),
              }}
            >
              $1000
            </div>
            <div
              className=" flex items-center justify-center "
              style={{
                width: px(80),
                height: px(40),
                border: "0.5px solid #000000",
                borderRadius: px(4),
              }}
            >
              $5000
            </div>
          </div>

          <div
            style={{
              marginTop: px(31),
              color: "#000000",
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(22),
              lineHeight: px(26),
            }}
          >
            Lock Period (extra rewards)
          </div>

          <div
            className="w-full flex items-center justify-between"
            style={{ marginTop: px(15) }}
          >
            <div
              style={{
                color: "#555555",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                lineHeight: px(19),
              }}
            >
              6 months
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                height: px(25),
                borderRadius: px(12.5),
                paddingLeft: px(25),
                paddingRight: px(25),
                border: "0.5px solid #000000",
              }}
            >
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
                +10% Bonus
              </span>
            </div>
          </div>

          {/* 滚动轴 */}
          <div
            ref={sliderRef}
            className="relative"
            style={{
              width: "100%",
              height: px(15),
              marginTop: px(20),
              cursor: "pointer",
            }}
            onMouseDown={(e) => {
              if (sliderRef.current) {
                setIsDragging(true);
                const rect = sliderRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = Math.max(
                  0,
                  Math.min(100, (x / rect.width) * 100)
                );
                setSliderValue(percentage);
              }
            }}
          >
            {/* 滑块轨道 */}
            <div
              className="relative w-full h-full"
              style={{
                borderRadius: px(7.5),
                overflow: "hidden",
              }}
            >
              {/* 黑色部分（左侧） */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: `${sliderValue}%`,
                  height: "100%",
                  backgroundColor: "#000000",
                  borderRadius: px(7.5),
                }}
              />
              {/* 灰色部分（右侧） */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: `${100 - sliderValue}%`,
                  height: "100%",
                  backgroundColor: "#E3E3E3",
                  borderRadius: px(7.5),
                }}
              />
            </div>

            {/* 圆圈把手 */}
            <div
              style={{
                position: "absolute",
                left: `calc(${sliderValue}% - ${px(15)})`,
                top: px(-9),
                width: px(30),
                height: px(30),
                cursor: "grab",
                userSelect: "none",
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                setIsDragging(true);
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="black" />
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.2" />
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.2" />
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.2" />
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.2" />
                <circle cx="14.9971" cy="15" r="10" fill="white" />
              </svg>
            </div>
          </div>

          <div
            className="w-full flex items-center justify-between"
            style={{ marginTop: px(15) }}
          >
            <div
              style={{
                color: "#555555",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                lineHeight: px(19),
              }}
            >
              No lock
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#555555",
              }}
            >
              24months
            </div>
          </div>

          <div
            className="flex items-center  w-full bg-[#EFF6FF]"
            style={{
              paddingLeft: px(25),
              paddingRight: px(10),
              marginTop: px(30),
              height: px(44),
              border: "0.5px solid #000000",
              borderRadius: px(4),
              color: "#435B9B",
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              gap: px(10),
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1998 10C18.1998 5.47136 14.5286 1.8002 10 1.8002C5.47139 1.8002 1.8002 5.47136 1.8002 10C1.8002 14.5286 5.47139 18.1998 10 18.1998V19C5.02944 19 1 14.9706 1 10C1 5.0294 5.02944 1 10 1C14.9706 1 19 5.0294 19 10C19 14.9706 14.9706 19 10 19V18.1998C14.5286 18.1998 18.1998 14.5286 18.1998 10Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 4.6875L9.99679 11.8875L9.09679 11.8871L9.1 4.6871L10 4.6875Z"
                fill="#252525"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99609 14.6094L9.99667 13.3157L9.09667 13.3153L9.09609 14.609L9.99609 14.6094Z"
                fill="#252525"
              />
            </svg>
            Longer lock periods yield more token rewards. Tokens unlock
            gradually during the lock, and you still retain governance voting
            rights.
          </div>

          <div
            className="w-full bg-[#EFFAF8]"
            style={{
              marginTop: px(20),
              paddingLeft: px(25),
              paddingRight: px(10),
              paddingTop: px(40),
              height: px(276),
              border: "0.5px solid #000000",
              borderRadius: px(4),
            }}
          >
            <div className="flex items-center justify-between">
              <div
                className="flex items-center justify-start"
                style={{
                  fontWeight: 300,
                  fontSize: px(24),
                  marginBottom: px(12),
                  lineHeight: px(20),
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: px(30),
                    height: px(30),
                    marginRight: px(10),
                    flexShrink: 0,
                    marginTop: px(-10),
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.247 3C20.291 3 24.38 7.08896 24.38 12.133C24.38 14.1623 23.7176 16.0366 22.598 17.5527L25.5148 22.7134L25.8089 23.2344L22.0014 22.8991L20.8401 26.0417L20.6039 26.6783L20.2705 26.0872L17.4004 21.0095C16.7098 21.1765 15.9889 21.266 15.247 21.266C14.6043 21.266 13.9773 21.1992 13.3721 21.0729L10.5384 26.0872L10.205 26.6783L9.96879 26.0417L8.80747 22.8991L5 23.2344L5.29402 22.7134L8.07674 17.7895C6.84789 16.2339 6.11395 14.2693 6.11395 12.133C6.11395 7.08896 10.2029 3 15.247 3ZM6.13671 22.5018L9.23128 22.2293L9.31493 22.455L10.3237 25.1861L12.7367 20.9167C11.0912 20.4473 9.63563 19.5277 8.511 18.3L6.13671 22.5018ZM22.1748 18.0829C21.0856 19.35 19.655 20.3143 18.0254 20.8342L20.4852 25.1861L21.4939 22.455L21.5776 22.2293L24.6722 22.5018L22.1748 18.0829ZM15.247 3.81193C10.6514 3.81193 6.92588 7.53745 6.92588 12.133C6.92588 13.959 7.51446 15.6473 8.51161 17.0194L8.53437 16.9806L8.8247 17.3497C9.62882 18.3728 10.7588 19.1138 11.7028 19.6016C12.0491 19.7805 12.3673 19.9243 12.6309 20.034C13.4536 20.3062 14.333 20.4541 15.247 20.4541C16.4571 20.4541 17.6068 20.1953 18.6442 19.7307C18.7426 19.6783 18.8455 19.6229 18.9517 19.5634C19.4417 19.289 20.0037 18.9394 20.5787 18.5202C22.4052 16.9939 23.5681 14.6996 23.5681 12.133C23.5681 7.53745 19.8425 3.81193 15.247 3.81193Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.3"
                    />
                  </svg>
                </div>

                <h2
                  style={{
                    color: "#000000",
                    fontSize: px(26),
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  Estimated Reward
                </h2>
              </div>

              <div
                style={{
                  height: px(32),
                  width: px(112),
                  backgroundColor: "#008236",
                  borderRadius: px(16),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                Supporter
              </div>
            </div>

            <h1
              style={{
                width: px(208),
                height: px(38),
                marginTop: px(25),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 700,
                fontSize: px(35),
                lineHeight: px(54),
                letterSpacing: "4%",
                color: "#008236",
                opacity: 1,
              }}
            >
              1,150 GVP
            </h1>

            <div
              className="flex flex-col"
              style={{ gap: px(10), marginTop: px(20) }}
            >
              {/* Base reward (10x) */}
              <div
                className="flex items-center justify-between"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#555555",
                  height: px(19),
                }}
              >
                <span>Base reward (10x):</span>
                <span>1.000 GVP</span>
              </div>

              {/* Tier bonus (5%) */}
              <div
                className="flex items-center justify-between"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#555555",
                  height: px(19),
                }}
              >
                <span>Tier bonus (5%):</span>
                <span>+50</span>
              </div>

              {/* Lock bonus (10%) */}
              <div
                className="flex items-center justify-between"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#555555",
                  height: px(19),
                }}
              >
                <span>Lock bonus (10%):</span>
                <span>+100</span>
              </div>
            </div>
          </div>

          <div
            style={{ height: px(44), marginTop: px(50) }}
            className="flex items-center justify-center w-full"
          >
            <button
              className="cursor-pointer w-full"
              style={{
                height: px(44),
                backgroundColor: "#000000",
                borderRadius: px(4),
                color: "#ffffff",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Confirm Contribution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
