'use client'

import { createContext, useContext, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { Project, ProjectReviewEntry } from '@/lib/types'
import { toCdnUrl } from '@/utils/cdn'

export interface RatingBucket {
  stars: number
  count: number
  percentage: number
}

export interface ProjectDetailComputed {
  ratingHistogram: RatingBucket[]
  builderAvatars: string[]
}

export interface ProjectDetailContextValue {
  project: Project
  relatedProjects: Project[]
  computed: ProjectDetailComputed
}

const ProjectDetailContext = createContext<ProjectDetailContextValue | null>(null)

interface ProviderProps {
  project: Project
  relatedProjects: Project[]
  children: ReactNode
}

export function ProjectDetailProvider({ project, relatedProjects, children }: ProviderProps) {
  const computed = useMemo<ProjectDetailComputed>(() => ({
    ratingHistogram: buildRatingHistogram(project),
    builderAvatars: buildBuilderAvatars(project, 16),
  }), [project])

  return (
    <ProjectDetailContext.Provider value={{ project, relatedProjects, computed }}>
      {children}
    </ProjectDetailContext.Provider>
  )
}

export function useProjectDetail() {
  const context = useContext(ProjectDetailContext)
  if (!context) {
    throw new Error('useProjectDetail must be used within ProjectDetailProvider')
  }
  return context
}

const clampRating = (value?: number) => {
  if (value === undefined || value === null || Number.isNaN(value)) return undefined
  return Math.min(5, Math.max(1, Math.round(value)))
}

const buildRatingHistogram = (project: Project): RatingBucket[] => {
  const reviews: ProjectReviewEntry[] = project.reviews?.list ?? []
  const reviewCount = project.metrics?.rating?.review_count ?? 0
  const buckets: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  }

  if (reviews.length > 0) {
    reviews.forEach((review) => {
      const bucket = clampRating(review.rating ?? project.metrics?.rating?.score)
      if (bucket) {
        buckets[bucket] += 1
      }
    })
  } else if (reviewCount > 0) {
    const bucket = clampRating(project.metrics?.rating?.score) ?? 5
    buckets[bucket] = reviewCount
  }

  const total = Object.values(buckets).reduce((sum, count) => sum + count, 0)
  const denominator = total || reviewCount || 0

  return [5, 4, 3, 2, 1].map((stars) => {
    const count = buckets[stars] ?? 0
    const percentage = denominator > 0 ? count / denominator : 0
    return { stars, count, percentage }
  })
}

const buildBuilderAvatars = (project: Project, required: number): string[] => {
  const assets = project.profile.media?.assets ?? []
  const avatarCandidates = assets
    .filter((asset) => asset.context === 'project_construction_avatar' && asset.url)
    .map((asset) => toCdnUrl(asset.url))

  if (avatarCandidates.length === 0) {
    const fallback = project.profile.media?.logo || project.profile.media?.banner || ''
    if (fallback) {
      avatarCandidates.push(toCdnUrl(fallback))
    }
  }

  if (avatarCandidates.length === 0) {
    return []
  }

  const filled: string[] = []
  while (filled.length < required) {
    filled.push(avatarCandidates[filled.length % avatarCandidates.length])
  }

  return filled
}
