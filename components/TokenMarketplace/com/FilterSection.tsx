'use client'

import { useState } from 'react'
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
}

export default function FilterSection({ onViewChange }: FilterSectionProps) {
  const [selectedView, setSelectedView] = useState<'Chat' | 'List'>('List')

  const handleViewChange = (value: string) => {
    const view = value as 'Chat' | 'List'
    setSelectedView(view)
    onViewChange?.(view)
  }

  return (
    <div className='flex items-center' style={{ width: '100%', paddingLeft: px(40), paddingRight: px(40), marginTop: px(15), gap: px(15) }}>
      <FilterDropdown
        placeholder="Interaction / Form"
        description="Which of the following ways would you like to interact with AI?"
        categories={interactionFormCategories}
      />
      
      <FilterDropdown
        placeholder="Domain"
        description="Which domain are you interested in?"
        categories={domainCategories}
      />
      
      <FilterDropdown
        placeholder="Object"
        description="What type of object are you looking for?"
        options={objectOptions}
      />
      
      <FilterDropdown
        placeholder="Action"
        description="What action would you like to perform?"
        categories={actionCategories}
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
      />
    </div>
  )
}

