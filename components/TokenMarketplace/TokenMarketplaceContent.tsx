'use client'

import { px } from '@/utils/pxToRem'
import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'

export default function TokenMarketplaceContent() {
  return (
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide" style={{ paddingLeft: px(240), paddingRight: px(240) }}>
      {/* 三张图片 */}
      <TokenImages />
      {/* 筛选框 */}
      <FilterSection />
      {/* 内容卡片区域 */}
      <ContentCardList />
    </div>
  )
}
