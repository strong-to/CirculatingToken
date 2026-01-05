'use client'

import { useState, useMemo } from 'react'
import { px } from '@/utils/pxToRem'
import FilterSection from '@/components/TokenMarketplace/com/FilterSection'
import PlaceholderComponent from '@/components/TokenMarketplace/com/PlaceholderComponent'
import { projectsList, type ProjectData } from '@/app/data'
import Footer from '../Footer/Footer'

type FilterValues = {
  interactionForm: string
  domain: string
  object: string
  action: string
  sortBy: string
  search: string
}

export default function TokenMarketplaceContent() {
  const [viewMode, setViewMode] = useState<'Number of Users' | 'Latest Contribution'>('Latest Contribution')
  const [filters, setFilters] = useState<FilterValues>({
    interactionForm: '',
    domain: '',
    object: '',
    action: '',
    sortBy: 'Latest Contribution',
    search: '',
  })

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
      <div className="flex-1 min-h-0 flex flex-col">
          {/* 筛选框 - 固定在顶部，不滚动 */}
          <div style={{paddingLeft: px(29), paddingRight: px(29), flexShrink: 0,marginBottom: px(20)}}>
          <FilterSection onViewChange={setViewMode} onFilterChange={handleFilterChange} />
          </div>

          {/* 可滚动内容区域 */}
          <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide smooth-scroll">
            <PlaceholderComponent projects={filteredProjects} />

            <div style={{ marginTop: px(20) }}>
            <Footer />
            </div>
          </div>
        </div>
  )
}
