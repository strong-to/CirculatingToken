'use client'

import { useState, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import FilterDropdown from '@/components/TokenMarketplace/com/FilterDropdown'
import SearchInput from '@/components/TokenMarketplace/com/SearchInput'
import filterSelectData from '@/app/data/projectHubSelect/select.json'

// 类型定义
interface SubCategory {
  label: string
  description?: string
}

interface Category {
  label: string
  subCategories: (SubCategory | string)[]
  description?: string
}

// 从 JSON 数据中提取筛选配置
const interactionFormCategories: Category[] = filterSelectData.filters.interactionForm.categories.map((cat: any) => ({
  label: cat.label,
  description: cat.description,
  subCategories: cat.subCategories || []
}))

const domainCategories: Category[] = filterSelectData.filters.domain.categories.map((cat: any) => ({
  label: cat.label,
  description: cat.description,
  subCategories: cat.subCategories || []
}))

const objectOptions: string[] = filterSelectData.filters.object.options || []

const actionCategories: Category[] = filterSelectData.filters.action.categories.map((cat: any) => ({
  label: cat.label,
  description: cat.description,
  subCategories: cat.subCategories || []
}))

const actionSortBy: string[] = filterSelectData.filters.sortBy.options || []

interface FilterSectionProps {
  onViewChange?: (view: 'Number of Users' | 'Latest Contribution') => void
  onFilterChange?: (filterValues: {
    interactionForm?: string
    domain?: string
    object?: string
    action?: string
    sortBy?: string
    search?: string
  }) => void
  initialFilterValues?: {
    interactionForm?: string
    domain?: string
    object?: string
    action?: string
    sortBy?: string
    search?: string
  }
  previewMode?: boolean
  alignWithCards?: boolean // 是否与卡片宽度对齐（用于 Project Hub），默认为 false（保持原来的 flex-1 布局）
}

export default function FilterSection({ onViewChange, onFilterChange, initialFilterValues, previewMode = false, alignWithCards = false }: FilterSectionProps) {
  const [selectedView, setSelectedView] = useState<'Number of Users' | 'Latest Contribution'>(
    (initialFilterValues?.sortBy as 'Number of Users' | 'Latest Contribution') || 'Latest Contribution'
  )
  const [filterValues, setFilterValues] = useState({
    interactionForm: initialFilterValues?.interactionForm || '',
    domain: initialFilterValues?.domain || '',
    object: initialFilterValues?.object || '',
    action: initialFilterValues?.action || '',
    sortBy: initialFilterValues?.sortBy || '',
    search: initialFilterValues?.search || '',
  })

  // 同步外部初始值
  useEffect(() => {
    if (initialFilterValues) {
      setFilterValues(prev => ({ ...prev, ...initialFilterValues }))
      if (initialFilterValues.sortBy === 'Number of Users' || initialFilterValues.sortBy === 'Latest Contribution') {
        setSelectedView(initialFilterValues.sortBy as 'Number of Users' | 'Latest Contribution')
      }
    }
  }, [initialFilterValues])

  const handleViewChange = (value: string) => {
    const view = value as 'Number of Users' | 'Latest Contribution'
    setSelectedView(view)
    onViewChange?.(view)
    const newFilterValues = { ...filterValues, sortBy: view }
    setFilterValues(newFilterValues)
    onFilterChange?.(newFilterValues)
  }

  const handleFilterChange = (key: string, value: string) => {
    const newFilterValues = { ...filterValues, [key]: value }
    setFilterValues(newFilterValues)
    onFilterChange?.(newFilterValues)
  }

  // 如果 alignWithCards 为 true，则使用固定宽度与卡片对齐（用于 Project Hub）
  // 否则使用原来的 flex-1 布局（用于 Launchpad）
  const cardWidth = alignWithCards ? `calc((100% - ${px(16 * 5)}) / 6)` : undefined
  const searchWidth = alignWithCards ? `calc((100% - ${px(16 * 5)}) / 6 * 2 + ${px(16)})` : undefined
  const gap = alignWithCards ? px(16) : px(15)
  
  return (
    <div className='flex items-center' style={{ width: '100%',  marginTop: px(15), gap }}>
      {alignWithCards ? (
        <>
          <div style={{ width: cardWidth, flexShrink: 0 }}>
            <FilterDropdown
              placeholder={filterSelectData.filters.interactionForm.placeholder}
              description={filterSelectData.filters.interactionForm.description}
              categories={interactionFormCategories}
              value={filterValues.interactionForm}
              onChange={(value) => handleFilterChange('interactionForm', value)}
            />
          </div>
          
          <div style={{ width: cardWidth, flexShrink: 0 }}>
            <FilterDropdown
              placeholder={filterSelectData.filters.domain.placeholder}
              description={filterSelectData.filters.domain.description}
              categories={domainCategories}
              value={filterValues.domain}
              onChange={(value) => handleFilterChange('domain', value)}
            />
          </div>
          
          <div style={{ width: cardWidth, flexShrink: 0 }}>
            <FilterDropdown
              placeholder={filterSelectData.filters.object.placeholder}
              description={filterSelectData.filters.object.description}
              options={objectOptions}
              value={filterValues.object}
              onChange={(value) => handleFilterChange('object', value)}
            />
          </div>
          
          <div style={{ width: cardWidth, flexShrink: 0 }}>
            <FilterDropdown
              placeholder={filterSelectData.filters.action.placeholder}
              description={filterSelectData.filters.action.description}
              categories={actionCategories}
              value={filterValues.action}
              onChange={(value) => handleFilterChange('action', value)}
            />
          </div>
          
          <div style={{ width: searchWidth, flexShrink: 0 }}>
            <SearchInput
              placeholder="Search"
              value={filterValues.search}
              onChange={previewMode ? undefined : (value) => handleFilterChange('search', value)}
              previewMode={previewMode}
            />
          </div>
        </>
      ) : (
        <>
          <FilterDropdown
            placeholder={filterSelectData.filters.interactionForm.placeholder}
            description={filterSelectData.filters.interactionForm.description}
            categories={interactionFormCategories}
            value={filterValues.interactionForm}
            onChange={(value) => handleFilterChange('interactionForm', value)}
          />
          
          <FilterDropdown
            placeholder={filterSelectData.filters.domain.placeholder}
            description={filterSelectData.filters.domain.description}
            categories={domainCategories}
            value={filterValues.domain}
            onChange={(value) => handleFilterChange('domain', value)}
          />
          
          {/* Launchpad 中交换 Object 和 Action 的位置 */}
          <FilterDropdown
            placeholder={filterSelectData.filters.action.placeholder}
            description={filterSelectData.filters.action.description}
            categories={actionCategories}
            value={filterValues.action}
            onChange={(value) => handleFilterChange('action', value)}
          />
          
          <FilterDropdown
            placeholder={filterSelectData.filters.object.placeholder}
            description={filterSelectData.filters.object.description}
            options={objectOptions}
            value={filterValues.object}
            onChange={(value) => handleFilterChange('object', value)}
          />
          
          <SearchInput
            placeholder="Search"
            value={filterValues.search}
            onChange={previewMode ? undefined : (value) => handleFilterChange('search', value)}
            previewMode={previewMode}
          />
        </>
      )}
    </div>
  )
}

