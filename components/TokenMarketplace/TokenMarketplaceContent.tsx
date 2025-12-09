'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'
import ChatImages from '@/components/TokenMarketplace/com/ChatImages'
import ChatContent from '@/components/TokenMarketplace/com/ChatContent'

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Chat' | 'List'>('List')

  return (
    <>
      {viewMode === 'List' ? (
        <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll" style={{ paddingLeft: px(240), paddingRight: px(240) }}>
          <TokenImages />
          {/* 筛选框 */}
          <div style={{paddingLeft: px(40), paddingRight: px(40)}}>

          <FilterSection onViewChange={setViewMode} />
          </div>
          {/* 内容卡片区域 */}
          <ContentCardList />
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll">
          <ChatImages />
          {/* 筛选框 */}
          <div style={{paddingLeft: px(29), paddingRight: px(29)}}>
          <FilterSection onViewChange={setViewMode} />
          </div>
         
          <ChatContent />
        </div>
      )}
    </>
  )
}
