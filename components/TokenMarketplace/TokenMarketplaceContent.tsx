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
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide" style={{ paddingLeft: px(240), paddingRight: px(240) }}>
      {viewMode === 'List' ? (
        <>
          {/* 三张图片 */}
          <TokenImages />
          {/* 筛选框 */}
          <FilterSection onViewChange={setViewMode} />
          {/* 内容卡片区域 */}
          <ContentCardList />
        </>
      ) : (
        <>
          {/* Chat 视图的图片 */}
          <ChatImages />
          {/* 筛选框 */}
          <FilterSection onViewChange={setViewMode} />
          {/* Chat 内容区域 */}
          <ChatContent />
        </>
      )}
    </div>
  )
}
