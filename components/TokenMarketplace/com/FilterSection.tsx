'use client'

import { px } from '@/utils/pxToRem'
import FilterDropdown from '@/components/TokenMarketplace/com/FilterDropdown'
import SearchInput from '@/components/TokenMarketplace/com/SearchInput'
import {
  interactionFormCategories,
  domainCategories,
  objectOptions,
  actionCategories
} from '../data/FilterSectionData'

export default function FilterSection() {
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
      
      <SearchInput
        placeholder="Search"
      />
    </div>
  )
}

