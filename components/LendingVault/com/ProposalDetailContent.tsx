"use client";

import { px } from "@/utils/pxToRem";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { projectsMap } from "@/app/data";
import type { ProjectData } from "@/app/data";
import ProposalDetailLeftSidebar from "./ProposalDetailLeftSidebar";
import ProposalDetailMainContent from "./ProposalDetailMainContent";
import ProposalDetailRightSidebar from "./ProposalDetailRightSidebar";

export default function ProposalDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const system_id = searchParams.get("system_id");
  const proposalId = searchParams.get("proposal_id");
  const proposalIndex = searchParams.get("proposal_index");

  // 根据 system_id 获取对应的项目数据
  const projectData: ProjectData | undefined = useMemo(() => {
    if (!system_id) return undefined;
    return projectsMap[system_id];
  }, [system_id]);

  // 获取提案数据 - 优先使用 id，如果没有则使用 index
  const proposalData = useMemo(() => {
    const tableData =
      projectData?.profile?.projectDetailsPage?.projectGovernance?.tabs?.find(
        (tab) => tab.id === "proposal"
      )?.data?.tableData;
    
    if (!tableData) return null;
    
    if (proposalId) {
      return tableData.find((item: any) => item.id === proposalId) || null;
    } else if (proposalIndex) {
      const index = parseInt(proposalIndex);
      return tableData[index] || null;
    }
    
    return null;
  }, [projectData, proposalId, proposalIndex]);

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
            className="w-full flex items-center justify-center" 
            style={{ 
              width: px(133), 
              height:px(44), 
              backgroundColor:'#000000', 
              color:'#ffffff', 
              marginBottom: px(32), 
              gap: px(5), 
              borderRadius: px(4),
              cursor: 'pointer',
              transition: 'background-color 0.2s, opacity 0.2s'
            }}
            onClick={() => router.back()}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#333333";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.opacity = "1";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.999 0.625L1.62224 10.0018L10.9972 19.3768" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M19.5 10L1.62248 9.99905" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
            {proposalData?.detail?.mainContent?.goBackButton?.text || "Go Back"}
          </div>
        <div    
          className="flex scrollbar-hide"
          style={{ height: "100vh", alignItems: "flex-start" ,paddingBottom:px(300) ,
            }}
        >
          {/* 左侧边栏 */}
          <ProposalDetailLeftSidebar data={proposalData?.detail?.leftSidebar} />

          {/* 主内容区 */}
          <ProposalDetailMainContent data={proposalData?.detail?.mainContent} />

          {/* 右侧边栏 */}
          <ProposalDetailRightSidebar data={proposalData?.detail?.rightSidebar} proposalData={proposalData} />
        </div>
      </div>
    </div>
  );
}
