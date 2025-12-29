'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { px } from '@/utils/pxToRem'
// import TokenImages from '@/components/TokenMarketplace/com/TokenImages'
import FilterSection, { type FilterValues } from '@/components/TokenMarketplace/com/FilterSection'
// import ContentCardList from '@/components/TokenMarketplace/com/ContentCardList'
import ChatImages from '@/components/TokenMarketplace/com/ChatImages'
import ChatContent from '@/components/TokenMarketplace/com/ChatContent'
import PlaceholderComponent from '@/components/TokenMarketplace/com/PlaceholderComponent'
import { projectsList, type ProjectData } from '@/app/data'

const defaultFilters: FilterValues = {
  interactionForm: '',
  domain: '',
  object: '',
  action: '',
  search: '',
}

const matchesSelection = (selection: string, values?: string[]) => {
  if (!selection) return true
  if (!values || values.length === 0) return false
  const normalized = selection.toLowerCase()
  return values.some((value) => value.toLowerCase() === normalized)
}

const matchesSearch = (project: ProjectData, keyword: string) => {
  if (!keyword.trim()) {
    return true
  }

  const normalized = keyword.trim().toLowerCase()
  const targets = [
    project.profile?.name ?? '',
    project.profile?.summary ?? '',
    project.system_id ?? '',
  ]

  return targets.some((target) => target.toLowerCase().includes(normalized))
}

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Chat' | 'List'>('List')
  const [displayList, setDisplayList] = useState(true)
  const [displayChat, setDisplayChat] = useState(false)
  const [filterValues, setFilterValues] = useState<FilterValues>(defaultFilters)

  const handleFilterChange = useCallback((values: FilterValues) => {
    setFilterValues(values)
  }, [])

  const handleResetFilters = useCallback(() => {
    setFilterValues(defaultFilters)
  }, [])

  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      if (!matchesSelection(filterValues.interactionForm, project.taxonomy?.interaction_form)) {
        return false
      }

      if (!matchesSelection(filterValues.domain, project.taxonomy?.domain)) {
        return false
      }

      if (!matchesSelection(filterValues.object, project.taxonomy?.object)) {
        return false
      }

      if (!matchesSelection(filterValues.action, project.taxonomy?.action)) {
        return false
      }

      if (!matchesSearch(project, filterValues.search)) {
        return false
      }

      return true
    })
  }, [filterValues])

  const hasFilteredResults = filteredProjects.length > 0

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
          <FilterSection 
            viewMode={viewMode}
            filterValues={filterValues}
            onViewChange={setViewMode}
            onFilterChange={handleFilterChange}
          />
          </div>

          {hasFilteredResults ? (
            <PlaceholderComponent projects={filteredProjects} />
          ) : (
            <div
              className="flex flex-col items-center justify-center text-center gap-4"
              style={{
                paddingTop: px(80),
                paddingBottom: px(80),
                paddingLeft: px(29),
                paddingRight: px(29),
              }}
            >
              <p
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(20),
                  fontWeight: 300,
                  color: '#000000',
                }}
              >
                No projects match these filters yet.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-3 border border-black rounded"
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontSize: px(16),
                  fontWeight: 300,
                }}
              >
                Reset filters
              </button>
            </div>
          )
          }




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
