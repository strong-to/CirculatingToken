"use client";

import { px } from "@/utils/pxToRem";

interface ProposalDetailLeftSidebarProps {
  data?: {
    ongoingTimer?: {
      label?: string;
      value?: string;
    };
    resultStatistics?: {
      title?: string;
      items?: Array<{
        label?: string;
        value?: string;
      }>;
    };
    process?: {
      title?: string;
      steps?: Array<{
        name?: string;
        date?: string;
      }>;
    };
  };
}

export default function ProposalDetailLeftSidebar({
  data,
}: ProposalDetailLeftSidebarProps) {
  return (
    <div
      style={{
        width: px(350),
        backgroundColor: "#ffffff",
        flexShrink: 0,
      }}
    >
      {/* On going timer */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          marginBottom: px(32),
          border: "1px solid #000000",
          width: px(350),
          height: px(160),
          borderRadius: px(4),
          // padding: px(20),
        }}
      >
        <div
          style={{
            fontFamily: "PingFang SC",
            fontWeight: 400,
            fontSize: px(22),
            color: "#083FD8",
            marginBottom: px(8),
          }}
        >
          {data?.ongoingTimer?.label || "On going"}
        </div>
        <div
          style={{
            fontFamily: "PingFang SC",
            fontWeight: 400,
            fontSize: px(32),
            color: "#000000",
          }}
        >
          {data?.ongoingTimer?.value || "00:22:23"}
        </div>
      </div>

      <div
        className="flex flex-col items-start "
        style={{
          marginBottom: px(32),
          border: "1px solid #000000",
          width: px(350),
          borderRadius: px(4),
          padding: px(20),
          height: px(812),
        }}
      >
        {/* Result Statistics */}
        <div className="w-full">
          <div
          className="flex items-center justify-start"
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(16),
              gap: px(10),
            }}
          >
            {data?.resultStatistics?.title || "Result Statistics"}


<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1109 10C19.1109 4.96818 15.0318 0.889116 10 0.889116C4.96821 0.889116 0.889116 4.96818 0.889116 10C0.889116 15.0318 4.96821 19.1109 10 19.1109V20C4.47715 20 0 15.5229 0 10C0 4.47711 4.47715 0 10 0C15.5228 0 20 4.47711 20 10C20 15.5229 15.5228 20 10 20V19.1109C15.0318 19.1109 19.1109 15.0318 19.1109 10Z" fill="black"/>
<path d="M11.1159 11.746H9.95098V11.659C9.95098 10.6145 10.5019 9.75858 11.4465 8.9607C12.391 8.16283 12.9262 7.58256 12.9262 6.8137C12.9262 5.60964 11.7613 4.65219 10.4705 4.65219C9.21112 4.65219 7.98326 5.50809 7.98326 6.92975V7.17637H6.81836V6.97328C6.81836 4.95684 8.62867 3.63672 10.5177 3.63672C12.5012 3.63672 14.0911 5.01486 14.0911 6.85722C14.0911 7.82917 13.5873 8.51099 12.6428 9.30887C11.6983 10.1067 11.1316 10.8321 11.1159 11.746ZM11.1159 14.5458H9.95098V12.718H11.1159V14.5458Z" fill="black"/>
</svg>

          </div>
          <div
            className="scroll-container"
            style={{
              height: px(150),
              // backgroundColor: '#F5F5F5',
              borderRadius: px(4),
            }}
          >
            <div
              className="scroll-content custom-scrollbar"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: px(24),
                padding: px(15),
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              {data?.resultStatistics?.items?.map((item, index) => (
                <div key={index} className="flex items-center justify-between w-full" style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      fontSize: px(20),
                      color: "#000000",
                      marginBottom: px(4),
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: px(20), color: "#8C8C8C" }}>
                    {item.value }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div>
          <div
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(16),
              marginTop: px(50),
            }}
          >
            {data?.process?.title || "Process"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {data?.process?.steps?.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: px(12),
                }}
              >
                {/* 左侧圆圈和连接线区域 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: px(20),
                    flexShrink: 0,
                  }}
                >
                  {/* 圆圈标记 */}
                  <div
                    style={{
                      width: px(20),
                      height: px(20),
                      borderRadius: "50%",
                      backgroundColor:
                        index === 0
                          ? "transparent"
                          : "rgba(140, 140, 140, 0.5)",
                      border:
                        index === 0
                          ? "2px solid rgba(140, 140, 140, 0.5)"
                          : "none",
                      flexShrink: 0,
                      zIndex: 2,
                    }}
                  />
                  {/* 连接线 - 从圆圈底部开始，连接到下一个圆圈顶部，最后一个不显示 */}
                  {index < (data?.process?.steps?.length || 0) - 1 && (
                    <div
                      style={{
                        transform: "translateX(-50%)",
                        width: px(2),
                        height: px(72),
                        backgroundColor: "#e0e0e0",
                        zIndex: 1,
                      }}
                    />
                  )}
                </div>

                {/* 内容区域 */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: px(20),
                        color: "#000000",
                        fontWeight: 400,
                        marginTop: px(-3),
                      }}
                    >
                      {step.name || ""}
                    </div>
                    <div
                      style={{
                        fontSize: px(18),
                        color: "#8C8C8C",
                      }}
                    >
                      {step.date || ""}
                    </div>
                  </div>
                  {/* 下拉箭头 */}
                  <div
                    style={{
                      width: px(20),
                      height: px(20),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
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
                        d="M2 6L9.99997 14L18 6"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

