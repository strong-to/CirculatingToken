"use client";

import { useState } from "react";
import { px } from "@/utils/pxToRem";
import ConstructorImageModal from "./ConstructorImageModal";

interface ModalData {
  name?: string;
  address?: string;
  totalContributions?: number;
  tokensEarned?: string;
  tagLabel?: string;
  totalContributionsLabel?: string;
  tokensEarnedLabel?: string;
}

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
      avatar?: string;
      modal?: ModalData;
    };
    voter?: {
      title?: string;
      items?: Array<{
        name?: string;
        value?: string;
        avatar?: string;
        modal?: ModalData;
      }>;
    };
    forumDiscussion?: {
      text?: string;
      url?: string;
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
  const [isProposerModalOpen, setIsProposerModalOpen] = useState(false);
  const [selectedVoterIndex, setSelectedVoterIndex] = useState<number | null>(null);

  const selectedVoter = selectedVoterIndex !== null ? data?.voter?.items?.[selectedVoterIndex] : null;

  return (
    <>
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
            {data.votingInfo.title }
          </div>
          <div
            style={{
              fontSize: px(24),
              color: "#8C8C8C",
            }}
          >
            {data.votingInfo.status }
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
              onClick={() => data.proposer?.modal && setIsProposerModalOpen(true)}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: px(24),
                cursor: data.proposer.modal ? "pointer" : "default",
                transition: "opacity 0.2s",
                padding: px(4),
                borderRadius: px(4),
              }}
              onMouseEnter={(e) => {
                if (data.proposer?.modal) {
                  e.currentTarget.style.opacity = "0.7";
                }
              }}
              onMouseLeave={(e) => {
                if (data.proposer?.modal) {
                  e.currentTarget.style.opacity = "1";
                }
              }}
            >
              <div
                style={{
                  width: px(70),
                  height: px(70),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                    src={data.proposer.avatar}
                    alt="proposer"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
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
              }}
              className="scrollbar-hide"
            >
              {data.voter.items && data.voter.items.length > 0 ? (
                data.voter.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => item.modal && setSelectedVoterIndex(index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: px(12),
                      flexShrink: 0,
                      cursor: item.modal ? "pointer" : "default",
                      transition: "opacity 0.2s",
                      padding: px(4),
                      borderRadius: px(4),
                    }}
                    onMouseEnter={(e) => {
                      if (item.modal) {
                        e.currentTarget.style.opacity = "0.7";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (item.modal) {
                        e.currentTarget.style.opacity = "1";
                      }
                    }}
                  >
                    <div
                      style={{
                        width: px(45),
                        height: px(45),
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        overflow: "hidden",
                      }}
                    >
                     <img
                          src={item.avatar}
                          alt="voter"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
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
              ) : null}
            </div>
          </div>
        )}

        {/* Forum discussion */}
        {data?.forumDiscussion && (
          <div>
            <button
              onClick={() => {
                if (data.forumDiscussion?.url) {
                  window.open(data.forumDiscussion.url, '_blank');
                }
              }}
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

    {/* Proposer Modal */}
    {isProposerModalOpen && data?.proposer?.modal && data.proposer.avatar && (
      <ConstructorImageModal
        isOpen={isProposerModalOpen}
        onClose={() => setIsProposerModalOpen(false)}
        imageSrc={data.proposer.avatar}
        imageIndex={-1}
        name={data.proposer.modal.name}
        address={data.proposer.modal.address}
        totalContributions={data.proposer.modal.totalContributions}
        tokensEarned={data.proposer.modal.tokensEarned}
        tagLabel={data.proposer.modal.tagLabel}
        totalContributionsLabel={data.proposer.modal.totalContributionsLabel}
        tokensEarnedLabel={data.proposer.modal.tokensEarnedLabel}
      />
    )}

    {/* Voter Modal */}
    {selectedVoterIndex !== null && selectedVoter?.modal && selectedVoter.avatar && (
      <ConstructorImageModal
        isOpen={selectedVoterIndex !== null}
        onClose={() => setSelectedVoterIndex(null)}
        imageSrc={selectedVoter.avatar}
        imageIndex={selectedVoterIndex}
        name={selectedVoter.modal.name}
        address={selectedVoter.modal.address}
        totalContributions={selectedVoter.modal.totalContributions}
        tokensEarned={selectedVoter.modal.tokensEarned}
        tagLabel={selectedVoter.modal.tagLabel}
        totalContributionsLabel={selectedVoter.modal.totalContributionsLabel}
        tokensEarnedLabel={selectedVoter.modal.tokensEarnedLabel}
      />
    )}
    </>
  );
}

