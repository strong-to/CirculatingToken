'use client'

import { useState, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
// import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
// import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'
import ChatImages from '@/components/TokenMarketplace/com/ChatImages'
import ChatContent from '@/components/TokenMarketplace/com/ChatContent'
import PlaceholderComponent from '@/components/TokenMarketplace/com/PlaceholderComponent'

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Chat' | 'List'>('List')
  const [displayList, setDisplayList] = useState(true)
  const [displayChat, setDisplayChat] = useState(false)

  // 延迟隐藏，确保过渡动画完成
  useEffect(() => {
    if (viewMode === 'List') {
      // 切换到 List：先显示 List，延迟隐藏 Chat
      setDisplayList(true)
      const timer = setTimeout(() => {
        setDisplayChat(false)
      }, 500) // 等待过渡完成
      return () => clearTimeout(timer)
    } else {
      // 切换到 Chat：先显示 Chat，延迟隐藏 List
      setDisplayChat(true)
      const timer = setTimeout(() => {
        setDisplayList(false)
      }, 500) // 等待过渡完成
      return () => clearTimeout(timer)
    }
  }, [viewMode])

  return (
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll">
          {/* <ChatImages /> */}
          {/* 筛选框 */}
          <div style={{paddingLeft: px(29), paddingRight: px(29)}}>
          <FilterSection onViewChange={setViewMode} />
          </div>


          <PlaceholderComponent />




          {/* <div style={{ position: 'relative', width: '100%' }}>
          <ChatContent /> */}
            {/* List 视图 */}
            {/* {displayList && (
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
            )} */}
            {/* Chat 视图 */}
            {/* {displayChat && (
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
            )} */}
          {/* </div> */}
        </div>
  )
}
