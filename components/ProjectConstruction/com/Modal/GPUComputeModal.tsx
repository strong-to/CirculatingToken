"use client";

import { px } from "@/utils/pxToRem";
import FilterDropdown from "@/components/ProjectConstruction/com/Modal/FilterDropdown";
import { useState, useRef, useEffect } from "react";

export default function GPUComputeModal() {
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
          NVIDIA A100 GPU Computing Power
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
        Provide NVIDIA A100 or equivalent GPU computing power for model
        training. At least 40GB VRAM GPU required for large-scale image
        recognition model training and fine-tuning. Please provide GPU specs and
        accessible address (IP + port or API endpoint). Expected contribution:
        100-200 GPU hours per week.
      </div>
      <div className="w-full h-[1px] bg-[#000000]" />

      {/* 表单卡片区域 */}
      <div
        className="flex flex-wrap"
        style={{
          paddingLeft: px(30),
          paddingRight: px(30),
          paddingTop: px(30),
          gap: px(20),
        }}
      >
        {/* 左侧卡片：NVIDIA A100 GPU Computing Power */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(4),
            padding: px(20),
          }}
        >
          <div
            className="flex items-center"
            style={{
              marginBottom: px(12),
            }}
          >
            <div style={{width:px(20),height:px(20) , marginTop:px(-10),marginRight:px(10)  }}>

            
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1109 10C19.1109 4.96818 15.0318 0.889116 10 0.889116C4.96821 0.889116 0.889116 4.96818 0.889116 10C0.889116 15.0318 4.96821 19.1109 10 19.1109V20C4.47715 20 0 15.5229 0 10C0 4.47711 4.47715 0 10 0C15.5228 0 20 4.47711 20 10C20 15.5229 15.5228 20 10 20V19.1109C15.0318 19.1109 19.1109 15.0318 19.1109 10Z" fill="black"/>
<path d="M14.209 12.5041H15.4528C14.3739 14.3437 12.4408 15.456 10.3429 15.456C7.18106 15.456 4.5437 13.0745 4.5437 10.0086C4.5437 6.91408 7.13611 4.54688 10.3279 4.54688C12.3809 4.54688 14.5237 5.67343 15.4078 7.42745H14.1641C13.3099 6.21532 11.8114 5.50231 10.3129 5.50231C7.8404 5.50231 5.65259 7.58431 5.65259 10.0228C5.65259 12.39 7.84041 14.5005 10.3279 14.5005C11.8414 14.5005 13.205 13.7733 14.209 12.5041Z" fill="black"/>
</svg>
</div>
            <div
              style={{
                marginLeft: px(10),
                color: "#000000",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(22),
                lineHeight: px(26),
              }}
            >
              NVIDIA A100 GPU Computing Power
            </div>
          </div>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "150%",
              color: "#555555",
              marginBottom: px(16),
            }}
          >
            Provide NVIDIA A100 or equivalent GPU computing power for model
            training. At least 40GB VRAM GPU required for large-scale image
            recognition model training and fine-tuning. Please provide GPU specs
            ...
          </div>
          {/* 标签按钮组 */}
          <div
            className="flex items-center"
            style={{ gap: px(12), flexWrap: "wrap" }}
          >
            <button
              className="flex items-center justify-center"
              style={{
                height: px(32),
                paddingLeft: px(16),
                paddingRight: px(16),
                borderRadius: px(2),
                backgroundColor: "#000000",
                color: "#ffffff",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                cursor: "pointer",
              }}
            >
              8000-15000 GVP
            </button>
            <button
              className="flex items-center justify-center"
              style={{
                height: px(32),
                paddingLeft: px(16),
                paddingRight: px(16),
                borderRadius: px(2),
                border: "1px solid #000000",
                color: "#000000",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                cursor: "pointer",
              }}
            >
              medium
            </button>
            <button
              className="flex items-center justify-center"
              style={{
                height: px(32),
                paddingLeft: px(16),
                paddingRight: px(16),
                borderRadius: px(2),
                border: "1px solid #000000",
                color: "#000000",
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(16),
                cursor: "pointer",
              }}
            >
              Ongoing
            </button>
          </div>
        </div>

        {/* 右侧卡片：Compute Type */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(5),
            padding: px(20),
            position: "relative",
          }}
        >
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(5),
            }}
          >
            Compute Type
          </h3>
          <p
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(16),
              lineHeight: "150%",
              color: "#555555",
              marginBottom: px(16),
            }}
          >
            Select the type of compute resource you can provide
          </p>
          <FilterDropdown
            placeholder="GPU Computing"
            description="Select the type of compute resource you can provide"
            options={["GPU Computing", "GPU Computing1", "GPU Computing2"]}
            value="GPU Computing"
            backgroundColor="#F5F5F5"
          />
        </div>
      </div>

      {/* GPU Specifications 和 Access Information 卡片 */}
      <div
        className="flex flex-wrap"
        style={{
          paddingLeft: px(30),
          paddingRight: px(30),
          paddingTop: px(20),
          gap: px(20),
        }}
      >
        {/* 左侧卡片：GPU Specifications */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(4),
            padding: px(25),
          }}
        >
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(22),
              color: "#000000",
              marginBottom: px(20),
            }}
          >
            GPU Specifications
          </h3>

          {/* GPU Model */}
          <div style={{ marginBottom: px(16) }}>
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
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: px(4) }}
              >
                <path
                  d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                  fill="#CB2C22"
                />
              </svg>
              GPU Model
            </label>

            <FilterDropdown
              placeholder="GPU Model"
              options={[
                "NVIDIA A100, 80GB",
                "NVIDIA A100, 40GB",
                "NVIDIA A6000, 48GB",
                "NVIDIA V100, 32GB",
                "NVIDIA V100, 16GB",
                "NVIDIA RTX 4090, 24GB",
                "NVIDIA RTX 3090, 24GB",
                "NVIDIA RTX 3080, 10GB",
                "NVIDIA L40, 48GB",
                "NVIDIA T4, 16GB",
                "Other"
              ]}
            />
          </div>

          {/* GPU Count */}
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
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: px(4) }}
              >
                <path
                  d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                  fill="#CB2C22"
                />
              </svg>
              GPU Count
            </label>

            <FilterDropdown
              placeholder="1"
              options={["1", "2", "4", "8", "16", "32+"]}
              value="1"
            />
          </div>
        </div>

        {/* 右侧卡片：Access Information */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(4),
            padding: px(25),
            position: "relative",
          }}
        >
          <div className="flex items-center" style={{ marginBottom: px(20) }}>
            <h3
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(22),
                color: "#000000",
                marginRight: px(4),
              }}
            >
              Access Information
            </h3>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1998 9C17.1998 4.47136 13.5286 0.800204 9 0.800204C4.47139 0.800204 0.800204 4.47136 0.800204 9C0.800204 13.5286 4.47139 17.1998 9 17.1998V18C4.02944 18 0 13.9706 0 9C0 4.0294 4.02944 0 9 0C13.9706 0 18 4.0294 18 9C18 13.9706 13.9706 18 9 18V17.1998C13.5286 17.1998 17.1998 13.5286 17.1998 9Z"
                fill="black"
              />
              <path
                d="M10.004 10.5718H8.95559V10.4935C8.95559 9.55342 9.45146 8.78311 10.3015 8.06502C11.1516 7.34694 11.6333 6.82469 11.6333 6.13272C11.6333 5.04907 10.5849 4.18736 9.42313 4.18736C8.28971 4.18736 7.18464 4.95767 7.18464 6.23717V6.45912H6.13623V6.27634C6.13623 4.46154 7.76551 3.27344 9.46563 3.27344C11.2508 3.27344 12.6817 4.51377 12.6817 6.17189C12.6817 7.04665 12.2283 7.66028 11.3783 8.37837C10.5282 9.09645 10.0182 9.74926 10.004 10.5718ZM10.004 13.0916H8.95559V11.4466H10.004V13.0916Z"
                fill="black"
              />
            </svg>
          </div>

          <div
            style={{ marginBottom: px(16), gap: px(15) }}
            className=" w-full flex items-center justify-between"
          >
            {/* IP Address / Domain */}
            <div className="w-full">
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
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: px(4) }}
                >
                  <path
                    d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                    fill="#CB2C22"
                  />
                </svg>
                IP Address / Domain
              </label>
              <input
                type="text"
                placeholder="e.g. 192.168.1.100 or example.com"
                style={{
                  width: "100%",
                  height: px(44),
                  paddingLeft: px(12),
                  paddingRight: px(12),
                  border: "1px solid #e0e0e0",
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(14),
                  backgroundColor: "#ffffff",
                }}
              />
            </div>

            {/* Port */}
            <div className="w-full">
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
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: px(4) }}
                >
                  <path
                    d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                    fill="#CB2C22"
                  />
                </svg>
                Port
              </label>
              <input
                type="text"
                placeholder="e.g., 8080"
                style={{
                  width: "100%",
                  height: px(44),
                  paddingLeft: px(12),
                  paddingRight: px(12),
                  border: "1px solid #e0e0e0",
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(14),
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
          </div>

          {/* SSH Public Key (optional) */}
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
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: px(4) }}
              >
                <path
                  d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                  fill="#CB2C22"
                />
              </svg>
              SSH Public Key (optional)
            </label>
            <input
              type="text"
              placeholder="ssh-rsa AAAAB3..."
              style={{
                width: "100%",
                height: px(44),
                paddingLeft: px(12),
                paddingRight: px(12),
                border: "1px solid #e0e0e0",
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(14),
                backgroundColor: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>

      {/* Availability & Duration 和 Additional Information 卡片 */}
      <div
        className="flex flex-wrap"
        style={{
          paddingLeft: px(30),
          paddingRight: px(30),
          paddingTop: px(30),
          gap: px(20),
        }}
      >
        {/* 左侧卡片：Availability & Duration */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(4),
            padding: px(25),
          }}
        >
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(22),
              color: "#000000",
              marginBottom: px(20),
            }}
          >
            Availability & Duration
          </h3>

          {/* Availability */}
          <div style={{ marginBottom: px(16) }}>
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
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: px(4) }}
              >
                <path
                  d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                  fill="#CB2C22"
                />
              </svg>
              Availability
            </label>
            <FilterDropdown
              placeholder="24/7"
              options={["24/7", "Business Hours", "Custom"]}
              value="24/7"
            />
          </div>

          {/* Commitment Duration */}
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
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: px(4) }}
              >
                <path
                  d="M7.47598 7.27875L6.15998 8.23075L4.28398 5.59875L2.43598 8.20275L1.11998 7.25075L3.05198 4.67475L-2.33799e-05 3.72275L0.503977 2.15475L3.55598 3.21875L3.52798 -0.00125027H5.15198L5.09598 3.24675L8.14798 2.21075L8.65198 3.75075L5.57198 4.70275L7.47598 7.27875Z"
                  fill="#CB2C22"
                />
              </svg>
              Commitment Duration
            </label>
            <FilterDropdown
              placeholder="1 Month"
              options={["1 Week", "Month", "3 Months", "6 Months", "1 Year"]}
              value="Month"
            />
          </div>
        </div>

        {/* 右侧卡片：Additional Information */}
        <div
          style={{
            flex: 1,
            minWidth: px(400),
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: px(4),
            padding: px(25),
          }}
        >
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(22),
              color: "#000000",
              marginBottom: px(20),
            }}
          >
            Additional Information
          </h3>
          <textarea
            placeholder="e.g., SLA guarantees, special configurations, maintenance windows..."
            style={{
              width: "100%",
              minHeight: px(159),
              padding: px(12),
              border: "1px solid #e0e0e0",
              borderRadius: px(4),
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontSize: px(14),
              backgroundColor: "#ffffff",
              resize: "vertical",
            }}
          />
        </div>
      </div>


      <div style={{height:px(44),paddingLeft:px(50),paddingRight:px(50),marginTop:px(60)}} className="flex items-center justify-center w-full">
 <button className="cursor-pointer w-full" style={{  height:px(44), backgroundColor:"#000000",borderRadius:px(4), color:"#ffffff",fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',fontWeight: 300,fontSize: px(16),lineHeight: "100%",letterSpacing: "0%"}}>
 Submit Compute Resource
 </button>
      

      </div>




    </div>
  );
}
