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
  onViewChange?: (view: 'Chat' | 'List') => void
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
}

export default function FilterSection({ onViewChange, onFilterChange, initialFilterValues }: FilterSectionProps) {
  const [selectedView, setSelectedView] = useState<'Chat' | 'List'>(
    (initialFilterValues?.sortBy as 'Chat' | 'List') || 'List'
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
      if (initialFilterValues.sortBy === 'Chat' || initialFilterValues.sortBy === 'List') {
        setSelectedView(initialFilterValues.sortBy)
      }
    }
  }, [initialFilterValues])

  const handleViewChange = (value: string) => {
    const view = value as 'Chat' | 'List'
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

  return (
    <div className='flex items-center' style={{ width: '100%',  marginTop: px(15), gap: px(15) }}>
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
      
      <FilterDropdown
        placeholder={filterSelectData.filters.object.placeholder}
        description={filterSelectData.filters.object.description}
        options={objectOptions}
        value={filterValues.object}
        onChange={(value) => handleFilterChange('object', value)}
      />
      
      <FilterDropdown
        placeholder={filterSelectData.filters.action.placeholder}
        description={filterSelectData.filters.action.description}
        categories={actionCategories}
        value={filterValues.action}
        onChange={(value) => handleFilterChange('action', value)}
      />
      <FilterDropdown
        placeholder={filterSelectData.filters.sortBy.placeholder}
        description={filterSelectData.filters.sortBy.description}
        options={actionSortBy}
        value={selectedView}
        onChange={(value) => {
          if (value === 'Chat' || value === 'List') {
            handleViewChange(value)
          }
        }}
      />
      
      <SearchInput
        placeholder="Search"
        value={filterValues.search}
        onChange={(value) => handleFilterChange('search', value)}
      />
    </div>
  )
}

