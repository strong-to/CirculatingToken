"use client";

import { px } from "@/utils/pxToRem";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { projectsMap } from "@/app/data";
import type { ProjectData } from "@/app/data";

export default function ProposalDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const system_id = searchParams.get("system_id");
  const proposalIndex = searchParams.get("proposal_index");

  // 根据 system_id 获取对应的项目数据
  const projectData: ProjectData | undefined = useMemo(() => {
    if (!system_id) return undefined;
    return projectsMap[system_id];
  }, [system_id]);

  // 获取提案数据
  const proposalData = useMemo(() => {
    if (!proposalIndex) return null;
    const index = parseInt(proposalIndex);
    const tableData =
      projectData?.profile?.projectDetailsPage?.projectGovernance?.tabs?.find(
        (tab) => tab.id === "proposal"
      )?.data?.tableData;
    return tableData?.[index] || null;
  }, [projectData, proposalIndex]);

  if (!proposalData) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div>Proposal not found</div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0" style={{ backgroundColor: "#ffffff" }}>
      <div
        className=" w-full"
        style={{ paddingLeft: px(80), paddingRight: px(80) }}
      >
        <div
          className="flex"
          style={{ height: "100vh", alignItems: "flex-start" }}
        >
          {/* 左侧边栏 */}
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
                On going
              </div>
              <div
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(32),
                  color: "#000000",
                }}
              >
                {proposalData.timing || "00:22:23"}
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
                paddingBottom: px(190),
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
                  Result Statistics
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: px(24),
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      style={{
                        fontSize: px(20),
                        color: "#000000",
                        marginBottom: px(4),
                      }}
                    >
                      Quorum:
                    </div>
                    <div style={{ fontSize: px(20), color: "#8C8C8C" }}>
                      0.000.000
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div
                      style={{
                        fontSize: px(20),
                        color: "#000000",
                        marginBottom: px(4),
                      }}
                    >
                      Quorum:
                    </div>
                    <div style={{ fontSize: px(20), color: "#8C8C8C" }}>
                      0.000.000
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div
                      style={{
                        fontSize: px(20),
                        color: "#000000",
                        marginBottom: px(4),
                      }}
                    >
                      Quorum:
                    </div>
                    <div style={{ fontSize: px(20), color: "#8C8C8C" }}>
                      0.000.000
                    </div>
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
                  Process
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {[
                    "Created",
                    "Open for voting",
                    "Voting closed",
                    "Payloads executed",
                  ].map((step, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        //   marginBottom: index < 3 ? px(24) : 0,
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
                        {index < 3 && (
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
                              // marginBottom: px(4)
                            }}
                          >
                            {step}
                          </div>
                          <div
                            style={{
                              fontSize: px(18),
                              color: "#8C8C8C",
                            }}
                          >
                            {proposalData.type || "DEC11,2025—DEC17,2025"}
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
                              stroke-width="1.5"
                              stroke-miterlimit="10"
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

          {/* 主内容区 */}
          <div
            style={{
              flex: 1,
              padding: px(40),
              backgroundColor: "#ffffff",
              border: "1px solid #000000",
              borderRadius: px(4),
              marginLeft: px(15),
              marginRight: px(15),
              height: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Proposal overview */}
            <div style={{ marginBottom: px(40) }}>
              <h1
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(20),
                  color: "#000000",
                  marginBottom: px(8),
                }}
              >
                Proposal overview
              </h1>
              <h2
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                Ethena February E-Modes Adjustments
              </h2>
              <div className="w-full flex items-center justify-end" style={{  gap: px(12) }}>
                <button
                  style={{
                    width: px(130),
                    height: px(30),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: "1px solid #e0e0e0",
                    borderRadius: px(4),
                    fontSize: px(14),
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    cursor: "pointer",
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
                  Raw-Ipfs
                </button>
                <button
                  style={{
                    width: px(130),
                    height: px(30),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: "1px solid #e0e0e0",
                    borderRadius: px(4),
                    fontSize: px(14),
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    cursor: "pointer",
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
                 Share on twitter
                </button>
                <button
                  style={{
                    width: px(130),
                    height: px(30),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: "1px solid #e0e0e0",
                    borderRadius: px(4),
                    fontSize: px(14),
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    cursor: "pointer",
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
                 Share on Lens
                </button>

                
              </div>
            </div>

            {/* Simple Summary */}
            <div style={{ marginBottom: px(40) }}>
              <h3
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                Simple Summary
              </h3>
              <p
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(20),
                  color: "#000000",
                  lineHeight: "140%",
                }}
              >
                This proposal recommends adding sUSDe as an eligible collateral
                asset in various E-Modes, and USDe in the PT-USDe Stablecoins
                E-mode. This will allow users to leverage their positions more
                efficiently and reduce friction for sUSDe-based principal token
                loopers.
              </p>
            </div>

            {/* Motivation */}
            <div style={{ marginBottom: px(40) }}>
              <h3
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                Motivation
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: px(24),
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "PingFang SC",
                      fontWeight: 400,
                      fontSize: px(24),
                      color: "#000000",
                      marginBottom: px(8),
                    }}
                  >
                    sUSDe
                  </h4>
                  <p
                    style={{
                      fontFamily: "PingFang SC",
                      fontWeight: 400,
                      fontSize: px(20),
                      color: "#000000",
                      lineHeight: "140%",
                    }}
                  >
                    We recommend adding sUSDe as an eligible collateral asset in both the PTsUSDe5FEB/Stablecoins and PTsUSDe5FEB/USDe E-Modes to reduce potential friction for sUSDe-based principal token loopers when substituting collateral. As PT-sUSDe-5FEB2025 can only be redeemed for sUSDe, enabling sUSDe within these E-Modes will allow users to migrate collateral from the principal token to sUSDe while preserving E-Mode benefits, rather than fully unwinding their positions.
                    To date, this substitution path has seen limited use: in September, approximately 24.27 million sUSDe of collateral, out of more than 2 billion principal tokens with September maturity, was swapped via transactions that burned PT-sUSDe and minted aEthsUSDe. While not widely adopted historically, we view this as a useful tool for advanced position management and would recommend supporting it as the markets scale. This adjustment is therefore expected to increase the stickiness of PT-sUSDe-based demand for stablecoin borrowing, reduce unnecessary deleveraging and operational overhead around redemption events, and lower potential liquidity stress when positions are adjusted at substantial market sizes.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "PingFang SC",
                      fontWeight: 400,
                      fontSize: px(24),
                      color: "#000000",
                      marginBottom: px(8),
                    }}
                  >
                    USDe
                  </h4>
                  <p
                    style={{
                      fontFamily: "PingFang SC",
                      fontWeight: 400,
                      fontSize: px(20),
                      color: "#000000",
                      lineHeight: "140%",
                    }}
                  >
                   The motivation behind the addition of sUSDe in the PT-sUSDe E-Modes strains from the fact that users would otherwise need to fully unwind highly leveraged positions in order to shift from the November sUSDe PTs to the February maturity tokens. Since Pendle allows one-to-one redemption of the PTs at maturity, users receive sUSDe without incurring in any swapping cost, which, while yield-bearing, can be utilized as collateral, and can act as a substitution for the PT-sUSDe when users are exiting the previous maturity PTs while awaiting the next maturity PTs (either to be listed or to have sufficient capacity). This way, the presence of sUSDe in the E-Modes serves a high-utility purpose for a subset of users.
The inclusion of USDe in the E-Modes does not provide such utility as it is not yield-bearing. Hence, if users redeem PT-USDe for USDe and then collateralize the debt with USDe, they would be taking a leveraged annualized loss equal to the borrowing costs of the notional debt. We’d also like to note that the utility of such collateral in the PT-related E-Modes does not depend on the type of PT (sUSDe or USDe), as no incremental utility is provided by USDe in either case. In case of unwinding staked USDe positions, the inclusion of USDe under the same parameters effectively presents the same utility. Nevertheless, the inclusion of USDe in the PT-USDe E-Mode can reduce the costs of transition in one specific edge case. Given that a user has a substantial leveraged position and is paying borrowing costs on the notional, if the next PT is expected to be listed within a reasonably short period of time, it might be beneficial to incur the funding costs of the net position instead of converting the USDe collateral to the debt assets.
While the inclusion of USDe in the proposed E-Modes presents limited utility, such an adjustment does not introduce additional risk; therefore, we support the proposed adjustment.
                  </p>
                </div>
              </div>
            </div>

            {/* References */}
            <div style={{ marginBottom: px(40) }}>
              <h3
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(20),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                Specification
              </h3>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: px(24),
                  display: "flex",
                  flexDirection: "column",
                  gap: px(8),
                }}
              >
                <li style={{ fontSize: px(16), color: "#666666" }}>
                  Implementation: AaveV3Ethereum
                </li>
                <li style={{ fontSize: px(16), color: "#666666" }}>
                  Tests: AaveV3Ethereum
                </li>
                <li style={{ fontSize: px(16), color: "#666666" }}>
                  Snapshot: Direct-to-AIP
                </li>
                <li style={{ fontSize: px(16), color: "#666666" }}>
                  Discussion
                </li>
              </ul>
            </div>

            {/* Disclosure */}
            <div style={{ marginBottom: px(40) }}>
              <p
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(14),
                  color: "#666666",
                  lineHeight: "140%",
                }}
              >
                Chaos Labs has not been compensated for this recommendation.
                Caps updates are implemented via risk steward.
              </p>
            </div>

            {/* Copyright */}
            <div>
              <p
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(14),
                  color: "#666666",
                }}
              >
                Copyright and related rights waived via CCO.
              </p>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div style={{ backgroundColor: "#ffffff", flexShrink: 0 }}>
            {/* Your voting info */}
            <div
              style={{
                marginBottom: px(32),
                width: px(350),
                border: "1px solid #000000",
                borderRadius: px(4),
                padding: px(24),
              }}
            >
              <div
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                Your voting info
              </div>
              <div
                style={{
                  fontSize: px(24),
                  color: "#8C8C8C",
                  marginBottom: px(24),
                }}
              >
                Voting is on
              </div>
              <div style={{ display: "flex", gap: px(12) }}>
                <button
                  className="flex items-center justify-center"
                  style={{
                    flex: 1,
                    width: px(130),
                    height: px(30),
                    color: "#000000",
                    borderRadius: px(4),
                    fontSize: px(20),
                    cursor: "pointer",
                    border: "0.5px solid #000000",
                  }}
                >
                  YAE
                </button>
                <button
                  className="flex items-center justify-center"
                  style={{
                    width: px(130),
                    height: px(30),
                    flex: 1,
                    color: "#000000",
                    border: "0.5px solid #000000",
                    borderRadius: px(4),
                    fontSize: px(20),
                    cursor: "pointer",
                  }}
                >
                  NAY
                </button>
              </div>
            </div>

            <div
              style={{
                width: px(350),
                border: "1px solid #000000",
                borderRadius: px(4),
                padding: px(24),
              }}
            >
              {/* Voting results */}
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
                  Voting results
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: px(12),
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: px(4),
                      }}
                    >
                      <span style={{ fontSize: px(20), color: "#666666" }}>
                        YAE
                      </span>
                      <span style={{ fontSize: px(22), color: "#000000" }}>
                        {proposalData.yae || "0.000.000"}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: px(9),
                        backgroundColor: "#34C759",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: px(4),
                      }}
                    >
                      <span style={{ fontSize: px(20), color: "#666666" }}>
                        NAY
                      </span>
                      <span style={{ fontSize: px(22), color: "#000000" }}>
                        {proposalData.nay || "0.000.000"}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: px(9),
                        backgroundColor: "#CB2C22",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Proposer */}
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
                    Proposer
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "PingFang SC",
                    fontWeight: 400,
                    fontSize: px(24),
                    color: "#000000",
                    marginTop: px(30),
                  }}
                >
                  Voter
                </div>
              </div>

              {/* Voter */}
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
                  }}
                  className="scrollbar-hide"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
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
                  ))}
                </div>
              </div>

              {/* Forum discussion */}
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
                  Forum discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
