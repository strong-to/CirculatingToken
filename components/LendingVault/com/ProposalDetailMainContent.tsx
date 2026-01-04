"use client";

import { px } from "@/utils/pxToRem";

interface ProposalDetailMainContentProps {
  data?: {
    proposalOverview?: {
      title?: string;
      subject?: string;
      actionButtons?: Array<{
        text?: string;
        url?: string;
      }>;
    };
    simpleSummary?: {
      title?: string;
      content?: string;
    };
    motivation?: {
      title?: string;
      sections?: Array<{
        title?: string;
        content?: string;
      }>;
    };
    specification?: {
      title?: string;
      tables?: Array<{
        title?: string;
        columns?: string[];
        rows?: Array<{
          label?: string;
          values?: string[];
        }>;
      }>;
    };
    references?: {
      title?: string;
      items?: Array<{
        text?: string;
        link?: string | null;
        url?: string | null;
      }>;
    };
    disclosure?: {
      title?: string;
      paragraphs?: string[];
    };
    copyright?: {
      title?: string;
      content?: string;
    };
  };
}

export default function ProposalDetailMainContent({
  data,
}: ProposalDetailMainContentProps) {
  return (
    <div
      style={{
        flex: 1,
        padding: px(40),
        backgroundColor: "#ffffff",
        border: "1px solid #000000",
        borderRadius: px(4),
        marginLeft: px(15),
        marginRight: px(15),
        flexShrink: 0,
        height: px(1004),
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      {/* Proposal overview */}
      {data?.proposalOverview && (
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
            {data.proposalOverview.title || "Proposal overview"}
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
            {data.proposalOverview.subject || ""}
          </h2>
          {data.proposalOverview.actionButtons && (
            <div
              className="w-full flex items-center justify-end"
              style={{ gap: px(12) }}
            >
              {data.proposalOverview.actionButtons.map((button, index) => (
                <button
                  key={index}
                  style={{
                    width: px(130),
                    height: px(30),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                  {button.text || ""}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Simple Summary */}
      {data?.simpleSummary && (
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
            {data.simpleSummary.title }
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
            {data.simpleSummary.content || ""}
          </p>
        </div>
      )}

      {/* Motivation */}
      {data?.motivation && (
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
            {data.motivation.title || "Motivation"}
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: px(24),
            }}
          >
            {data.motivation.sections?.map((section, index) => (
              <div key={index}>
                <h4
                  style={{
                    fontFamily: "PingFang SC",
                    fontWeight: 400,
                    fontSize: px(24),
                    color: "#000000",
                    marginBottom: px(8),
                  }}
                >
                  {section.title || ""}
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
                  {section.content || ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Specification */}
      {data?.specification && (
        <div style={{ marginBottom: px(20) }} className="w-full">
          <h3
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(20),
              color: "#000000",
              marginBottom: px(30),
            }}
          >
            {data.specification.title || "Specification"}
          </h3>

          {data.specification.tables?.map((table, tableIndex) => (
            <div
              key={tableIndex}
              className="w-full"
              style={{ marginBottom: px(30) }}
            >
              <h3
                style={{
                  fontFamily: "PingFang SC",
                  fontWeight: 400,
                  fontSize: px(24),
                  color: "#000000",
                  marginBottom: px(16),
                }}
              >
                {table.title || ""}
              </h3>

              <div
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e0e0e0",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                {/* 表头 */}
                {table.columns && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `120px ${table.columns
                        .slice(1)
                        .map((_, idx) =>
                          idx < 3 ? "1.3fr" : "1fr"
                        )
                        .join(" ")}`,
                      borderBottom: "1px solid #e0e0e0",
                      minHeight: px(74),
                    }}
                  >
                    {table.columns.map((col, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: px(16),
                          fontSize: px(16),
                          color: "#000000",
                          fontWeight: 400,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {col}
                      </div>
                    ))}
                  </div>
                )}

                {/* 数据行 */}
                {table.rows?.map((row, rowIdx) => (
                  <div
                    key={rowIdx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: `120px ${table.columns
                        ?.slice(1)
                        .map((_, idx) => (idx < 3 ? "1.3fr" : "1fr"))
                        .join(" ") || "repeat(7, 1fr)"}`,
                      borderBottom:
                        rowIdx === (table.rows?.length || 0) - 1
                          ? "none"
                          : "1px solid #e0e0e0",
                      minHeight: px(74),
                    }}
                  >
                    <div
                      style={{
                        padding: px(16),
                        fontSize: px(16),
                        color: "#000000",
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {row.label || ""}
                    </div>
                    {row.values?.map((value, colIdx) => (
                      <div
                        key={colIdx}
                        style={{
                          padding: px(16),
                          fontSize: px(16),
                          color: "#000000",
                          fontWeight: 400,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* References */}
      {data?.references && (
        <div className="w-full" style={{ marginBottom: px(30) }}>
          <h3
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
            }}
          >
            {data.references.title || "References"}
          </h3>

          <ul
            style={{
              listStyle: "none",
              paddingLeft: px(42),
              display: "flex",
              flexDirection: "column",
              gap: px(8),
              marginTop: px(16),
            }}
          >
            {data.references.items?.map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: px(20),
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  gap: px(12),
                }}
              >
                <div
                  style={{
                    width: px(15),
                    height: px(15),
                    borderRadius: "50%",
                    backgroundColor: "#8C8C8C",
                    flexShrink: 0,
                  }}
                />
                <span>
                  {item.text && !item.link ? (
                    item.text
                  ) : (
                    <>
                      {item.text && `${item.text} `}
                      {item.link && (
                        <a
                          href={item.url || "#"}
                          style={{
                            color: "#000000",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          {item.link}
                        </a>
                      )}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclosure */}
      {data?.disclosure && (
        <div className="w-full" style={{ marginBottom: px(30) }}>
          <h3
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(10),
            }}
          >
            {data.disclosure?.title || "Disclosure"}
          </h3>

          {data.disclosure?.paragraphs?.map((paragraph, index) => (
            <div
              key={index}
              style={{
                fontSize: px(20),
                color: "#000000",
                lineHeight: index === 0 ? "normal" : "150%",
                marginBottom: index < (data.disclosure?.paragraphs?.length ?? 0) - 1 ? px(8) : 0,
              }}
            >
              {paragraph}
            </div>
          ))}
        </div>
      )}

      {/* Copyright */}
      {data?.copyright && (
        <div className="w-full" style={{ marginBottom: px(30) }}>
          <h3
            style={{
              fontFamily: "PingFang SC",
              fontWeight: 400,
              fontSize: px(24),
              color: "#000000",
              marginBottom: px(10),
            }}
          >
            {data.copyright.title || "Copyright"}
          </h3>

          <div style={{ fontSize: px(20), color: "#000000" }}>
            {data.copyright.content || ""}
          </div>
        </div>
      )}
    </div>
  );
}

