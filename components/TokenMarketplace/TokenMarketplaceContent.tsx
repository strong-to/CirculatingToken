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
          {viewMode === 'List' ?  <ContentCardList /> : <ChatContent />}
        </div>
  )
}
