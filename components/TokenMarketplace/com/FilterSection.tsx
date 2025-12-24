'use client'

import { useState, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import FilterDropdown from '@/components/TokenMarketplace/com/FilterDropdown'
import SearchInput from '@/components/TokenMarketplace/com/SearchInput'
import {
  interactionFormCategories,
  domainCategories,
  objectOptions,
  actionCategories,actionSortBy
} from '../data/FilterSectionData'

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
        placeholder="Interaction / Form"
        description="Which of the following ways would you like to interact with AI?"
        categories={interactionFormCategories}
        value={filterValues.interactionForm}
        onChange={(value) => handleFilterChange('interactionForm', value)}
      />
      
      <FilterDropdown
        placeholder="Domain"
        description="Which domain are you interested in?"
        categories={domainCategories}
        value={filterValues.domain}
        onChange={(value) => handleFilterChange('domain', value)}
      />
      
      <FilterDropdown
        placeholder="Object"
        description="What type of object are you looking for?"
        options={objectOptions}
        value={filterValues.object}
        onChange={(value) => handleFilterChange('object', value)}
      />
      
      <FilterDropdown
        placeholder="Action"
        description="What action would you like to perform?"
        categories={actionCategories}
        value={filterValues.action}
        onChange={(value) => handleFilterChange('action', value)}
      />
      <FilterDropdown
        placeholder="Sort by"
        description=""
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

