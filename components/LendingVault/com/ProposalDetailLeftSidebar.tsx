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
          padding: px(20),
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
        className="flex flex-col items-start justify-center"
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
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(16),
            }}
          >
            {data?.resultStatistics?.title || "Result Statistics"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: px(24),
            }}
          >
            {data?.resultStatistics?.items?.map((item, index) => (
              <div key={index} className="flex items-center justify-between w-full">
                <div
                  style={{
                    fontSize: px(20),
                    color: "#000000",
                    marginBottom: px(4),
                  }}
                >
                  {item.label || "Quorum:"}
                </div>
                <div style={{ fontSize: px(20), color: "#8C8C8C" }}>
                  {item.value || "0.000.000"}
                </div>
              </div>
            ))}
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

