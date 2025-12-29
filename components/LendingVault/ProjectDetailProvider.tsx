'use client'

import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { Project } from '@/lib/types'

export interface ProjectDetailContextValue {
  project: Project
  relatedProjects: Project[]
}

const ProjectDetailContext = createContext<ProjectDetailContextValue | null>(null)

interface ProviderProps extends ProjectDetailContextValue {
  children: ReactNode
}

export function ProjectDetailProvider({ project, relatedProjects, children }: ProviderProps) {
  return (
    <ProjectDetailContext.Provider value={{ project, relatedProjects }}>
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
