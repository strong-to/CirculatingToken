'use client'

import { useMemo, useState } from 'react'
import { getHomepageSection } from '@/lib/homepageData'
import type { HomepageSectionData, HomepageProjectCard } from '@/lib/types'

type ActiveFilterState = Record<string, string | null>

export function useHomepageSection(sectionId: string) {
  const sectionData = getHomepageSection(sectionId)

  const [activeFilters, setActiveFilters] = useState<ActiveFilterState>(() => {
    if (!sectionData) return {}
    return sectionData.filterKeys.reduce<ActiveFilterState>((acc, key) => {
      acc[key] = null
      return acc
    }, {})
  })

  const filterOptions = useMemo(() => {
    if (!sectionData) return []
    return sectionData.filterKeys.map((key) => {
      const filterConfig = sectionData.filters[key]
      const taxonomyKey = filterConfig?.taxonomyKey
      const options = taxonomyKey
        ? Array.from(
            new Set(
              sectionData.projects.flatMap(
                (project) => project.taxonomy[taxonomyKey] ?? []
              )
            )
          )
        : []
      return {
        key,
        label: filterConfig?.label ?? key,
        options,
      }
    })
  }, [sectionData])

  const filteredProjects = useMemo(() => {
    if (!sectionData) return []
    return sectionData.projects.filter((project) =>
      Object.entries(activeFilters).every(([filterKey, value]) => {
        if (!value) return true
        const taxonomyKey = sectionData.filters[filterKey]?.taxonomyKey
        if (!taxonomyKey) return true
        const values = project.taxonomy[taxonomyKey] ?? []
        return values.includes(value)
      })
    )
  }, [sectionData, activeFilters])

  const hasActiveFilters = Object.values(activeFilters).some(Boolean)
  const cardsToRender: HomepageProjectCard[] = hasActiveFilters
    ? filteredProjects
    : sectionData?.projects ?? []

  const toggleFilter = (filterKey: string, option: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey] === option ? null : option,
    }))
  }

  return {
    sectionData,
    cards: cardsToRender,
    filterOptions,
    hasActiveFilters,
    toggleFilter,
    activeFilters,
  }
}
