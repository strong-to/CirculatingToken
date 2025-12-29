'use client'

import { px } from '@/utils/pxToRem'
import FilterDropdown from '@/components/TokenMarketplace/com/FilterDropdown'
import SearchInput from '@/components/TokenMarketplace/com/SearchInput'
import {
  interactionFormCategories,
  domainCategories,
  objectOptions,
  actionCategories,
  actionSortBy,
} from '../data/FilterSectionData'

export interface FilterValues {
  interactionForm: string
  domain: string
  object: string
  action: string
  search: string
}

interface FilterSectionProps {
  viewMode: 'Chat' | 'List'
  filterValues: FilterValues
  onViewChange?: (view: 'Chat' | 'List') => void
  onFilterChange?: (filterValues: FilterValues) => void
}

export default function FilterSection({
  viewMode,
  filterValues,
  onViewChange,
  onFilterChange,
}: FilterSectionProps) {
  const handleViewChange = (value: string) => {
    const view = value as 'Chat' | 'List'
    onViewChange?.(view)
  }

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    const newFilterValues = { ...filterValues, [key]: value }
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
        value={viewMode}
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
