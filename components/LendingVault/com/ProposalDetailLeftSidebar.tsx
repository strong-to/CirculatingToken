"use client";

import { useState } from "react";
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
        subSteps?: Array<{
          name?: string;
          date?: string;
        }>;
      }>;
    };
  };
}

export default function ProposalDetailLeftSidebar({
  data,
}: ProposalDetailLeftSidebarProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    setExpandedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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
          paddingRight: px(0),
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
        <div className="flex flex-col w-full" style={{ flex: 1, minHeight: 0,paddingRight: px(10) }}>
          <div
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(30),
              marginTop: px(50),
            }}
          >
            {data?.process?.title || "Process"}
          </div>

          <div
            className="scroll-container scrollbar-hide"
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties}
          >
            <div
              className="scroll-content scrollbar-hide"
              style={{
                display: "flex",
                flexDirection: "column",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingTop: px(20),
              } as React.CSSProperties}
            >
              <div className="flex flex-col items-start justify-start">
                {data?.process?.steps?.map((step, index) => {
                  const isExpanded = expandedSteps.has(index);
                  const hasSubSteps = step.subSteps && step.subSteps.length > 0;
                  const isLastStep = index === (data?.process?.steps?.length || 0) - 1;
                  
                  return (
                    <div key={index} className="flex  flex-col items-start justify-start w-full">
                      <div style={{width: px(20), height: px(20), border: "1px solid #000000", borderRadius: px(50)}}></div>
                      <div className="w-full" style={{ paddingLeft: px(34), marginLeft: px(10),fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(20), color: "#000000", borderLeft: isLastStep ? "none" : "1px solid #000000", paddingBottom: px(60), width: "100%", overflow: "visible" }}>
                        <div className="flex items-center justify-between w-full" style={{gap: px(5),marginTop: px(-35),paddingBottom: px(20), minWidth: 0 }} >
                          <div
                            onClick={hasSubSteps ? () => toggleStep(index) : undefined}
                            style={{ 
                              flex: 1,
                              cursor: hasSubSteps ? "pointer" : "default"
                            }}
                          >
                            <div style={{fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(18), color: "#000000"}}>{step.name || ""}</div>
                            <div style={{fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(16), color: "#8C8C8C"}}>{step.date || ""}</div>
                          </div> 
                          {hasSubSteps && (
                            <div
                              onClick={(e) => { e.stopPropagation(); toggleStep(index); }}
                              style={{ cursor: "pointer", transition: "transform 0.3s ease", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0, minWidth: px(48), display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.53125 9.0625L8.53122 1.0625L16.5312 9.0625" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
                              </svg>
                            </div>
                          )}
                        </div>

                        {isExpanded && hasSubSteps && step.subSteps && (
                          <>
                            {step.subSteps.map((subStep, subIndex) => {
                              const isLastSubStep = subIndex === (step.subSteps?.length || 0) - 1;
                              return (
                                <div key={subIndex} className="flex  flex-col items-start justify-start">
                                  <div style={{width: px(20), height: px(20), border: "1px solid #000000", borderRadius: px(50)}}></div>
                                  <div style={{ paddingLeft: px(34), marginLeft: px(10),fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(20), color: "#000000", borderLeft: isLastSubStep ? "none" : "1px solid #000000", height: isLastSubStep ? px(30) : px(60) }}>
                                    <div className="flex items-center justify-between" style={{gap: px(5),marginTop: px(-35)}} >
                                      <div>
                                        <div style={{fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(14), color: "#000000"}}>{subStep.name || ""}</div>
                                        <div style={{fontFamily: "PingFang SC", fontWeight: 400, fontSize: px(12), color: "#8C8C8C"}}>{subStep.date || ""}</div>
                                      </div> 
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
