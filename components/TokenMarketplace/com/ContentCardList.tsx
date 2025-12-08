'use client'

import { px } from '@/utils/pxToRem'
import ContentCard from '@/components/TokenMarketplace/com/ContentCard'
import { cardData } from '../data/ContentCardListData'

export default function ContentCardList() {
  // 每行显示2个卡片，根据 cardData 数组长度自动分组
  const rows: (typeof cardData)[] = []
  for (let i = 0; i < cardData.length; i += 2) {
    rows.push(cardData.slice(i, i + 2))
  }

  return (
    <div style={{ paddingBottom: px(120) }}>
      {rows.map((rowCards, rowIndex) => (
        <div key={rowIndex} className='flex items-center ' style={{ width: '100%', paddingLeft: px(40), paddingRight: px(40), marginTop: px(15), gap: px(15) }}>
          {rowCards.map((cardDataItem, cardIndex) => (
            <ContentCard key={`${rowIndex}-${cardIndex}`} {...cardDataItem} />
          ))}
        </div>
      ))}
    </div>
  )
}
