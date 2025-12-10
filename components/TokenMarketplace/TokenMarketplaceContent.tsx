'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
// import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'
import ChatImages from '@/components/TokenMarketplace/com/ChatImages'
import ChatContent from '@/components/TokenMarketplace/com/ChatContent'

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Chat' | 'List'>('List')

  return (
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll">
          <ChatImages />
          {/* 筛选框 */}
          <div style={{paddingLeft: px(29), paddingRight: px(29)}}>
          <FilterSection onViewChange={setViewMode} />
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            {/* List 视图 */}
            <div 
              key="list-view"
              style={{
                position: viewMode === 'List' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: viewMode === 'List' ? 1 : 0,
                visibility: viewMode === 'List' ? 'visible' : 'hidden',
                pointerEvents: viewMode === 'List' ? 'auto' : 'none',
                transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'opacity',
                zIndex: viewMode === 'List' ? 1 : 0,
              }}
            >
              <ContentCardList />
            </div>
            {/* Chat 视图 */}
            <div 
              key="chat-view"
              style={{
                position: viewMode === 'Chat' ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: viewMode === 'Chat' ? 1 : 0,
                visibility: viewMode === 'Chat' ? 'visible' : 'hidden',
                pointerEvents: viewMode === 'Chat' ? 'auto' : 'none',
                transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'opacity',
                zIndex: viewMode === 'Chat' ? 1 : 0,
              }}
            >
              <ChatContent />
            </div>
          </div>
        </div>
  )
}
