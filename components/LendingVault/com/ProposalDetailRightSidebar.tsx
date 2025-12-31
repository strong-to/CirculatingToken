"use client";

import { px } from "@/utils/pxToRem";

interface ProposalDetailRightSidebarProps {
  data?: {
    votingInfo?: {
      title?: string;
      status?: string;
      buttons?: Array<{
        text?: string;
      }>;
    };
    votingResults?: {
      title?: string;
      items?: Array<{
        label?: string;
        value?: string;
        color?: string;
      }>;
    };
    proposer?: {
      title?: string;
    };
    voter?: {
      title?: string;
      items?: Array<{
        name?: string;
        value?: string;
      }>;
    };
    forumDiscussion?: {
      text?: string;
    };
  };
  proposalData?: {
    yae?: string;
    nay?: string;
  };
}

export default function ProposalDetailRightSidebar({
  data,
  proposalData,
}: ProposalDetailRightSidebarProps) {
  return (
    <div style={{ backgroundColor: "#ffffff", flexShrink: 0 }}>
      {/* Your voting info */}
      {data?.votingInfo && (
        <div
          style={{
            marginBottom: px(32),
            width: px(350),
            height: px(160),
            border: "1px solid #000000",
            borderRadius: px(4),
            padding: px(24),
            gap: px(12),
          }}
        >
          <div
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
            }}
          >
            {data.votingInfo.title || "Your voting info"}
          </div>
          <div
            style={{
              fontSize: px(24),
              color: "#8C8C8C",
            }}
          >
            {data.votingInfo.status || "Voting is on"}
          </div>
          {data.votingInfo.buttons && (
            <div style={{ display: "flex", gap: px(12), marginTop: px(10) }}>
              {data.votingInfo.buttons.map((button, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    flex: 1,
                    width: px(130),
                    height: px(30),
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    borderRadius: px(4),
                    fontSize: px(20),
                    cursor: "pointer",
                    border: "0.5px solid #000000",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#000000";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#000000";
                  }}
                >
                  {button.text || ""}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        style={{
          width: px(350),
          border: "1px solid #000000",
          borderRadius: px(4),
          padding: px(24),
          height: px(812),
        }}
      >
        {/* Voting results */}
        {data?.votingResults && (
          <div style={{ marginBottom: px(32) }}>
            <div
              style={{
                fontFamily: "PingFang SC",
                fontWeight: 400,
                fontSize: px(24),
                color: "#000000",
                marginBottom: px(16),
              }}
            >
              {data.votingResults.title || "Voting results"}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: px(12),
              }}
            >
              {data.votingResults.items?.map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: px(4),
                    }}
                  >
                    <span style={{ fontSize: px(20), color: "#666666" }}>
                      {item.label || ""}
                    </span>
                    <span style={{ fontSize: px(22), color: "#000000" }}>
                      {item.value || (index === 0 ? proposalData?.yae || "0.000.000" : proposalData?.nay || "0.000.000")}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: px(9),
                      backgroundColor: item.color || (index === 0 ? "#34C759" : "#CB2C22"),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proposer */}
        {data?.proposer && (
          <div style={{ marginBottom: px(12) }}>
            <div
              style={{ display: "flex", alignItems: "center", gap: px(24) }}
            >
              <div
                style={{
                  width: px(70),
                  height: px(70),
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                    fill="#666666"
                  />
                  <path
                    d="M10 12C5.58172 12 2 15.5817 2 20H18C18 15.5817 14.4183 12 10 12Z"
                    fill="#666666"
                  />
                </svg>
              </div>
              <div style={{ fontSize: px(24), color: "#000000" }}>
                {data.proposer.title || "Proposer"}
              </div>
            </div>

            {data.voter && (
              <div
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginTop: px(30),
                }}
              >
                {data.voter.title || "Voter"}
              </div>
            )}
          </div>
        )}

        {/* Voter */}
        {data?.voter && (
          <div style={{ marginBottom: px(12) }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: px(15),
                height: px(380),
                overflowY: "auto",
                overflowX: "hidden",
                padding: px(15),
                backgroundColor: data.voter.items && data.voter.items.length > 0 ? "#F5F5F5" : "transparent",
              }}
              className="scrollbar-hide"
            >
              {data.voter.items && data.voter.items.length > 0 ? (
                data.voter.items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: px(12),
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: px(45),
                        height: px(45),
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
                          fill="#666666"
                        />
                        <path
                          d="M8 9.5C4.96243 9.5 2.5 11.9624 2.5 15H13.5C13.5 11.9624 11.0376 9.5 8 9.5Z"
                          fill="#666666"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center">
                      <div style={{ fontSize: px(18), color: "#000000" }}>
                        {item.name || ""}
                      </div>
                      <div
                        style={{
                          marginLeft: px(25),
                          fontSize: px(18),
                          color: "#8C8C8C",
                        }}
                      >
                        {item.value || ""}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // 如果没有数据，显示默认的10个占位项
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: px(12),
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: px(45),
                        height: px(45),
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
                          fill="#666666"
                        />
                        <path
                          d="M8 9.5C4.96243 9.5 2.5 11.9624 2.5 15H13.5C13.5 11.9624 11.0376 9.5 8 9.5Z"
                          fill="#666666"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center">
                      <div style={{ fontSize: px(18), color: "#000000" }}>
                        YAE
                      </div>
                      <div
                        style={{
                          marginLeft: px(25),
                          fontSize: px(18),
                          color: "#8C8C8C",
                        }}
                      >
                        0,000,000{" "}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Forum discussion */}
        {data?.forumDiscussion && (
          <div>
            <button
              style={{
                width: px(206),
                height: px(44),
                padding: px(12),
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "none",
                borderRadius: px(4),
                fontSize: px(16),
                cursor: "pointer",
                transition: "background-color 0.2s, opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.opacity = "1";
              }}
            >
              {data.forumDiscussion.text || "Forum discussion"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

