"use client";

import { px } from '@/utils/pxToRem'
import { useState } from 'react'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import Modal from './Modal/Modal'
import ProjectFundingModal from './Modal/ProjectFundingModal'
import CollectDataModal from './Modal/CollectDataModal'
import GPUComputeModal from './Modal/GPUComputeModal'
import OptimizeImageModal from './Modal/OptimizeImageModal'
import APIDocumentationModal from './Modal/APIDocumentationModal'
import { CDN_PREFIX } from '@/utils/cdn'

interface Tag {
  type: "bordered" | "icon";
  text: string;
  icon?: "lightning" | "clock" | "person" | "gvp";
}

interface CardData {
  icon: string;
  title: string;
  subtitle: string;
  tags: Tag[];
  buttons: string[];
}

const CDN = CDN_PREFIX

const cardData: CardData[] = [
  {
    icon: `${CDN}/ConferenceRoom/img/icon1.png`,
    title: "Project funding support",
    subtitle: "Support the project with USDC to earn tokens and special benefits",
    tags: [
      { type: "bordered", text: "Online contribution", icon: "lightning" },
      { type: "bordered", text: "Easy" },
      { type: "icon", text: "1,200GVP", icon: "gvp" },
      { type: "icon", text: "Immediate", icon: "clock" },
      { type: "icon", text: "35applicants", icon: "person" },
    ],
    buttons: ["Open", "Funding"],
  },
  {
    icon: `${CDN}/ConferenceRoom/img/icon2.png`,
    title: "Collect labeled data for specific",
    subtitle: "Collect labeled data in medical imaging for fine-tuning and accuracy improvement",
    tags: [
      { type: "bordered", text: "Medium" },
      { type: "icon", text: "2000 GVP", icon: "gvp" },
      { type: "icon", text: "1-2 weeks 2", icon: "clock" },
      { type: "icon", text: "5 applicants", icon: "person" },
    ],
    buttons: ["Open", "Data"],
  },
  {
    icon: `${CDN}/ConferenceRoom/img/icon3.png`,
    title: "NVIDIA A100 GPU Computing Power",
    subtitle: "Provide NVIDIA A100 or equivalent GPU computing power for model training. At least 40GB VRAM GPU required for large-scale image recognition model training and fine-tuning...",
    tags: [
      { type: "bordered", text: "Medium" },
      { type: "icon", text: "8000-15000 GVP", icon: "gvp" },
      { type: "icon", text: "Ongoing", icon: "clock" },
      { type: "icon", text: "5 applicants", icon: "person" },
    ],
    buttons: ["Open", "GPU Compute"],
  },
  {
    icon: `${CDN}/ConferenceRoom/img/icon4.png`,
    title: "Optimize image recognition performance",
    subtitle: "Optimize inference speed for high-resolution images; target 30% reduction in processing time",
    tags: [
      { type: "bordered", text: "Hard" },
      { type: "icon", text: "5000 GVP", icon: "gvp" },
      { type: "icon", text: "2-3 weeks", icon: "clock" },
      { type: "icon", text: "3 applicants", icon: "person" },
    ],
    buttons: ["Open", "Development"],
  },
  {
    icon: `${CDN}/ConferenceRoom/img/icon5.png`,
    title: "Write detailed API documentation",
    subtitle: "Document the new scene analysis feature with examples",
    tags: [
      { type: "bordered", text: "Medium" },
      { type: "icon", text: "1500 GVP", icon: "gvp" },
      { type: "icon", text: "1 week", icon: "clock" },
    ],
    buttons: ["Open", "Documentation"],
  },
];

const modalComponents = [
  ProjectFundingModal,
  CollectDataModal,
  GPUComputeModal,
  OptimizeImageModal,
  APIDocumentationModal,
];

interface ProjectCardListProps {
  filterTab?: string;
}

export default function ProjectCardList({ filterTab = "All" }: ProjectCardListProps) {
  // 初始化时，所有 "Open" 按钮默认选中
  const initialActiveButtons: Record<string, boolean> = {};
  cardData.forEach((card, index) => {
    if (card.buttons.includes("Open")) {
      const buttonKey = `${index}-Open`;
      initialActiveButtons[buttonKey] = true;
    }
  });

  const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>(initialActiveButtons);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  // 按钮到卡片标题的映射
  const filterMap: Record<string, string> = {
    Funding: "Project funding support",
    Data: "Collect labeled data for specific",
    Compute: "NVIDIA A100 GPU Computing Power",
    Development: "Optimize image recognition performance",
    Documentation: "Write detailed API documentation",
  };

  // 根据选中的按钮过滤卡片，同时保留原始索引
  const filteredCardsWithIndex =
    filterTab === "All"
      ? cardData.map((card, index) => ({ card, originalIndex: index }))
      : cardData
          .map((card, index) => ({ card, originalIndex: index }))
          .filter(({ card }) => card.title === filterMap[filterTab]);

  return (
    <>
      <div
        className="flex flex-wrap w-full"
        style={{ marginTop: px(30), gap: px(20) }}
      >
        {filteredCardsWithIndex.map(({ card, originalIndex }, index) => {
          const ModalComponent = modalComponents[originalIndex];
          return (
            <div
              key={originalIndex}
              className="border border-[#000000] flex items-start justify-between cursor-pointer"
              style={{
                width: `calc(50% - ${px(10)})`,
                height: px(155),
                padding: px(25),
                borderRadius: px(4),
              }}
              onClick={() => setOpenModalIndex(originalIndex)}
            >
          <div
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: px(70), height: px(70), marginRight: px(15), borderRadius: px(4) }}
          >
            <ImageWithSkeleton
              src={card.icon}
              alt={card.title}
              fill
              objectFit="contain"
              loading={originalIndex < 2 ? "eager" : "lazy"}
            />
          </div>

          <div className="flex flex-col" style={{ flex: 1, minHeight: 0 }}>
            {/* 标题 */}
            <h2
              style={{
                height: px(22),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(22),
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#000000",
                flexShrink: 0,
              }}
            >
              {card.title}
            </h2>

            {/* 副标题 */}
            <div
              style={{
                marginTop: px(10),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: px(16),
                letterSpacing: "0%",
                color: "#555555",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                flexShrink: 0,
              }}
            >
              {card.subtitle}
            </div>

            {/* 标签组 */}
            <div
              className="flex items-center"
              style={{ gap: px(12), flexWrap: "wrap", marginTop: px(13) }}
            >
              {card.tags.map((tag, tagIndex) => {
                if (tag.type === "bordered") {
                  return (
                    <div
                      key={tagIndex}
                      className="flex items-center"
                      style={{
                        height: px(22),
                        border: "0.5px solid #000000",
                        borderRadius: px(2),
                        paddingLeft: px(10),
                        paddingRight: px(10),
                        paddingTop: px(4),
                        paddingBottom: px(2),
                        color: "#000000",
                      }}
                    >
                      {tag.icon === "lightning" && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ flexShrink: 0 }}
                        >
                          <path
                            d="M9.7517 0L2.80005 7.61093L6.55452 8.467L3.70777 14L11.2 6.93385L7.24465 6.11965"
                            fill="#040000"
                          />
                        </svg>
                      )}
                      <span
                        style={{
                          marginTop: tag.icon === "lightning" ? px(1) : 0,
                          marginLeft: tag.icon === "lightning" ? px(2) : 0,
                          height: px(15),
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: "normal",
                          fontSize: px(16),
                          lineHeight: "100%",
                          color: "#000000",
                        }}
                      >
                        {tag.text}
                      </span>
                    </div>
                  );
                } else {
                  // Icon tag
                  return (
                    <div
                      key={tagIndex}
                      className="flex items-center"
                      style={{
                        borderRadius: px(4),
                        gap: px(6),
                      }}
                    >
                      <div
                        style={{
                          width: px(16),
                          height: px(16),
                          border: "0.5px dashed #e0e0e0",
                          borderRadius: px(2),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {tag.icon === "gvp" && (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.0899 7.60191C13.0899 4.57097 10.6329 2.11392 7.60191 2.11392C4.57098 2.11393 2.11393 4.57098 2.11392 7.60191C2.11392 10.6329 4.57097 13.0899 7.60191 13.0899V14.2038C3.95577 14.2038 1 11.2481 1 7.60191C1.00001 3.95578 3.95578 1.00001 7.60191 1C11.2481 1 14.2038 3.95577 14.2038 7.60191C14.2038 11.2481 11.2481 14.2038 7.60191 14.2038V13.0899C10.6329 13.0899 13.0899 10.6329 13.0899 7.60191Z"
                              fill="black"
                            />
                            <path d="M7 5H8V11H7V5Z" fill="black" />
                            <path
                              d="M16.3501 12.0469L16.9935 12.8124L12.5014 16.5884L11.8579 15.8229L16.3501 12.0469Z"
                              fill="black"
                            />
                            <path
                              d="M15.1809 7.39844C16.8058 7.57968 18.3666 8.3592 19.5017 9.70948C21.8478 12.5005 21.4872 16.6652 18.6961 19.0113C15.9052 21.3572 11.741 20.9966 9.39486 18.2058C8.63212 17.2984 8.15683 16.2453 7.95679 15.1572C8.33234 15.1288 8.7004 15.0736 9.05928 14.994C9.22972 15.8846 9.62228 16.7455 10.2472 17.4889C12.1974 19.809 15.6591 20.1086 17.9793 18.1585C20.2994 16.2082 20.5995 12.7465 18.6494 10.4263C17.7149 9.31469 16.4332 8.66787 15.0966 8.50909C15.1502 8.14634 15.1789 7.77561 15.1809 7.39844Z"
                              fill="black"
                            />
                          </svg>
                        )}
                        {tag.icon === "clock" && (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 2.75C15.5563 2.75 19.25 6.44362 19.25 11C19.25 15.5564 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5564 2.75 11C2.75 6.44362 6.44365 2.75 11 2.75ZM11 3.96094C7.11264 3.96094 3.96094 7.11261 3.96094 11C3.96094 14.8874 7.11264 18.0391 11 18.0391C14.8874 18.0391 18.0391 14.8874 18.0391 11C18.0391 7.11261 14.8874 3.96094 11 3.96094ZM11 12H15V13H10V7H11V12Z"
                              fill="black"
                            />
                          </svg>
                        )}
                        {tag.icon === "person" && (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.96842 10.9191C11.7975 11.0183 14.1365 14.22 14.6667 18H3C3.53855 14.16 5.94516 10.9167 8.83333 10.9167L8.96842 10.9191ZM13.1351 10.9191C15.9642 11.0183 18.3032 14.22 18.8333 18H15.5C15.4674 17.7678 15.4279 17.5379 15.382 17.3107H18.1147C17.4092 14.0541 15.3118 11.606 13 11.606C12.6982 11.606 12.4 11.6477 12.1081 11.7276C11.8586 11.5547 11.6002 11.4061 11.3337 11.2857C11.8624 11.0468 12.4215 10.9167 13 10.9167L13.1351 10.9191ZM8.83333 11.606C6.52269 11.606 4.42426 14.0541 3.71859 17.3107H13.9481C13.2425 14.0541 11.1451 11.606 8.83333 11.606ZM8.83333 3C10.6743 3 12.1667 4.49238 12.1667 6.33333C12.1667 8.17428 10.6743 9.66667 8.83333 9.66667C6.99242 9.66664 5.5 8.17427 5.5 6.33333C5.5 4.4924 6.99242 3.00003 8.83333 3ZM13 3C14.8409 3 16.3333 4.49238 16.3333 6.33333C16.3333 8.17428 14.8409 9.66667 13 9.66667C12.3926 9.66666 11.8237 9.5033 11.3333 9.21948C11.5495 9.09436 11.7503 8.94596 11.9323 8.77718C12.2593 8.92024 12.6203 9.00016 13 9.00016C14.4727 9.00016 15.6668 7.8061 15.6668 6.33333C15.6668 4.86056 14.4727 3.6665 13 3.6665C12.6203 3.66651 12.2592 3.74606 11.9323 3.88908C11.7503 3.72034 11.5495 3.57187 11.3333 3.44678C11.8237 3.16303 12.3927 3.00001 13 3ZM8.83333 3.6665C7.3606 3.66653 6.1665 4.8606 6.1665 6.33333C6.1665 7.80606 7.3606 9.00014 8.83333 9.00016C10.3061 9.00016 11.5002 7.8061 11.5002 6.33333C11.5002 4.86056 10.3061 3.6665 8.83333 3.6665Z"
                              fill="black"
                              stroke="#131313"
                              strokeWidth="0.3"
                              strokeMiterlimit="10"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                          fontWeight: 300,
                          fontStyle: "normal",
                          fontSize: px(16),
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#555555",
                        }}
                      >
                        {tag.text}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {/* 按钮 */}
          <div
            className="flex flex-col flex-shrink-0 items-center justify-center"
            style={{
              width: px(130),
              height: "100%",
              gap: px(15),
              marginLeft: px(9),
            }}
          >
            {card.buttons.map((btnText) => {
              const buttonKey = `${originalIndex}-${btnText}`;
              const isBtnActive = activeButtons[buttonKey] || false;
              return (
                <button
                  key={buttonKey}
                  onClick={() => {
                    setActiveButtons((prev) => {
                      // 先取消同卡片中所有按钮的选中状态
                      const newState = { ...prev };
                      card.buttons.forEach((btn) => {
                        const key = `${originalIndex}-${btn}`;
                        newState[key] = false;
                      });
                      // 然后设置当前点击的按钮为选中状态
                      newState[buttonKey] = true;
                      return newState;
                    });
                  }}
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: px(130),
                    height: px(30),
                    borderRadius: px(4),
                    backgroundColor: isBtnActive ? "#000000" : "transparent",
                    color: isBtnActive ? "#ffffff" : "#000000",
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: px(14),
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    border: "0.5px solid #000000",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isBtnActive) {
                      e.currentTarget.style.backgroundColor = "#000000";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderColor = "#000000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isBtnActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#000000";
                      e.currentTarget.style.borderColor = "#000000";
                    }
                  }}
                >
                  {btnText}
                </button>
              );
            })}
          </div>
        </div>
          );
        })}
      </div>

      {openModalIndex !== null && (
        <Modal
          isOpen={true}
          onClose={() => setOpenModalIndex(null)}
        >
          {(() => {
            const ModalComponent = modalComponents[openModalIndex];
            return ModalComponent ? <ModalComponent /> : null;
          })()}
        </Modal>
      )}
    </>
  );
}
