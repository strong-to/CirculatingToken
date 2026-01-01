'use client'

import { useState, useEffect, useMemo } from 'react'
import { px } from '@/utils/pxToRem'
// import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
// import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'
import ChatImages from '@/components/TokenMarketplace/com/ChatImages'
import ChatContent from '@/components/TokenMarketplace/com/ChatContent'
import PlaceholderComponent from '@/components/TokenMarketplace/com/PlaceholderComponent'
import { projectsList, type ProjectData } from '@/app/data'

type FilterValues = {
  interactionForm: string
  domain: string
  object: string
  action: string
  sortBy: string
  search: string
}

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Chat' | 'List'>('List')
  const [displayList, setDisplayList] = useState(true)
  const [displayChat, setDisplayChat] = useState(false)
  const [filters, setFilters] = useState<FilterValues>({
    interactionForm: '',
    domain: '',
    object: '',
    action: '',
    sortBy: 'List',
    search: '',
  })

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

  const filteredProjects = useMemo(() => {
    const normalize = (value?: string) => value?.trim().toLowerCase() || ''
    const matchesCategory = (values: string[] | undefined, target: string) => {
      if (!target) return true
      if (!values || values.length === 0) return false
      const normalizedTarget = target.trim().toLowerCase()
      return values.some(item => item?.toLowerCase() === normalizedTarget)
    }

    const searchTerm = normalize(filters.search)

    return projectsList.filter((project: ProjectData) => {
      const taxonomy = project.taxonomy || (project.profile as any)?.taxonomy
      const matchesInteractionForm = matchesCategory(taxonomy?.interaction_form as string[] | undefined, filters.interactionForm)
      const matchesDomain = matchesCategory(taxonomy?.domain as string[] | undefined, filters.domain)
      const matchesObject = matchesCategory(taxonomy?.object as string[] | undefined, filters.object)
      const matchesAction = matchesCategory(taxonomy?.action as string[] | undefined, filters.action)

      const matchesSearch = !searchTerm || [
        project.profile?.name,
        project.system_id,
        project.slug,
        project.profile?.summary,
        project.profile?.media?.introduction,
        project.profile?.type_en,
      ].some(field => field?.toLowerCase().includes(searchTerm))

      return matchesInteractionForm && matchesDomain && matchesObject && matchesAction && matchesSearch
    })
  }, [filters])

  const handleFilterChange = (newFilters: Partial<FilterValues>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
    }))
  }

  return (
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll">
          {/* <ChatImages /> */}
          {/* 筛选框 */}
          <div style={{paddingLeft: px(29), paddingRight: px(29)}}>
          <FilterSection onViewChange={setViewMode} onFilterChange={handleFilterChange} />
          </div>


          <PlaceholderComponent projects={filteredProjects} />




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
