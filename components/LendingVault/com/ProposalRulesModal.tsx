'use client'

import { px } from '@/utils/pxToRem'

interface ProposalRulesModalProps {
  isOpen: boolean
  onClose: () => void
  data?: {
    title?: string
    checklist?: Array<{
      number: number
      title: string
      description: string
    }>
  }
}

export default function ProposalRulesModal({ isOpen, onClose, data }: ProposalRulesModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: px(1360),
          height: px(680),
          backgroundColor: '#FFFFFF',
          borderRadius: px(8),
          padding: px(40),
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: px(20),
            right: px(20),
            width: px(32),
            height: px(32),
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100000,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.6'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 标题 */}
        <h2
          style={{
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: px(32),
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#000000',
            marginBottom: px(32),
            flexShrink: 0,
          }}
        >
          {data?.title || 'Proposal checklist'}
        </h2>

        {/* 清单内容 - 可滚动区域 */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: px(24),
            overflowY: 'auto',
            flex: 1,
            paddingRight: px(8),
          }}
        >
          {data?.checklist?.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: px(16) }}>
              {/* 数字 - 无背景 */}
              <div
                style={{
                  flexShrink: 0,
                  fontFamily: 'PingFang SC',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: px(24),
                  lineHeight: '140%',
                  color: '#000000',
                  width: px(24),
                }}
              >
                {item.number}.
              </div>
              {/* 内容 */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: px(24),
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#000000',
                    marginBottom: px(8),
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: px(20),
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    color: '#666666',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

