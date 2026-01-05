'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { px } from '@/utils/pxToRem'
import { useTexts } from '@/components/Home/com/YourNextWorld/useTexts'

interface GlobalModalContextType {
  selectedCard: string | null
  setSelectedCard: (card: string | null) => void
  clickedCards: Set<string>
  setClickedCards: (cards: Set<string> | ((prev: Set<string>) => Set<string>)) => void
}

const GlobalModalContext = createContext<GlobalModalContextType | undefined>(undefined)

export function useGlobalModal() {
  const context = useContext(GlobalModalContext)
  if (!context) {
    throw new Error('useGlobalModal must be used within GlobalModalProvider')
  }
  return context
}

export function GlobalModalProvider({ children }: { children: ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [clickedCards, setClickedCards] = useState<Set<string>>(new Set())
  const texts = useTexts()

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  // 根据卡片类型获取对应的文字
  const getCardText = (cardType: string | null): string => {
    if (!cardType) return ''
    switch (cardType) {
      case 'datasets':
        return texts.cardDatasets
      case 'computePool':
        return texts.cardComputePool
      case 'foundationalModels':
        return texts.cardFoundationalModels
      case 'workflows':
        return texts.cardWorkflows
      case 'aiAgents':
        return texts.cardAiAgents
      default:
        return ''
    }
  }

  return (
    <GlobalModalContext.Provider value={{ selectedCard, setSelectedCard, clickedCards, setClickedCards }}>
      {children}
      
      {/* 全局弹窗 */}
      {selectedCard && (
        <div
          className="fixed inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 99999,
            margin: 0,
            padding: 0,
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: 'absolute',
              top: px(200),
              left: px(280),
              right: px(280),
              bottom: px(200),
              backgroundColor: '#FFFFFF',
              borderRadius: px(4),
              padding: px(40),
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: px(20),
                right: px(20),
                width: px(32),
                height: px(32),
                borderRadius: '50%',
                backgroundColor: '#000000',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100000,
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
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 弹窗内容 */}
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(24),
                color: '#000000',
              }}
            >
              {getCardText(selectedCard)}
            </div>
          </div>
        </div>
      )}
    </GlobalModalContext.Provider>
  )
}

