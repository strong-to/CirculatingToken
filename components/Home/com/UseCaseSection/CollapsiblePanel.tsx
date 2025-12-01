'use client'

import { useState } from 'react'
import { PlusIcon } from '@/components/icons/Icons'

interface CollapsiblePanelProps {
  buttonText: string
  children: React.ReactNode
}

export default function CollapsiblePanel({ buttonText, children }: CollapsiblePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* 折叠面板按钮 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-3 text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          marginTop: '2.5rem', // 40px
          fontSize: '1.75rem' // 28px
        }}
      >
        <span style={{ marginRight: '0.625rem' }}>{buttonText}</span>
        <PlusIcon style={{ width: '1rem', height: '1rem' }} />
      </button>

      {/* 折叠面板内容 */}
      {isExpanded && (
        <div 
          className="border-t border-gray-200"
          style={{ 
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            minHeight: '0' /* 确保内容可以正常展开 */
          }}
        >
          {children}
        </div>
      )}
    </>
  )
}


