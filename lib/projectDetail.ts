import type { Project } from '@/lib/types'
import projectsMap from '@/dataset/projects'

const projects = Object.values(projectsMap) as Project[]

const normalizeSystemId = (systemId: string) => systemId?.toUpperCase?.() ?? ''

export function getProjectById(systemId: string): Project | undefined {
  if (!systemId) return undefined
  return projectsMap[normalizeSystemId(systemId)] as Project | undefined
}

export function getAllProjects(): Project[] {
  return projects
}

const hasTaxonomyOverlap = (project: Project, candidate: Project) => {
  const domains = new Set(project.taxonomy?.domain ?? [])
  const actions = new Set(project.taxonomy?.action ?? [])
  const candidateDomains = candidate.taxonomy?.domain ?? []
  const candidateActions = candidate.taxonomy?.action ?? []
  return candidateDomains.some((value) => domains.has(value)) || candidateActions.some((value) => actions.has(value))
}

const pickRandomProjects = (candidates: Project[], count: number): Project[] => {
  if (count <= 0 || candidates.length === 0) return []
  const pool = [...candidates]
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, Math.min(count, pool.length))
}

export function getRelatedProjects(project: Project, limit = 6): Project[] {
  const targetId = project.system_id
  const candidates = projects.filter((item) => item.system_id !== targetId)
  const overlapping = candidates.filter((candidate) => hasTaxonomyOverlap(project, candidate))
  const selected: Project[] = overlapping.slice(0, limit)
  if (selected.length >= limit) {
    return selected
  }
  const remainingNeed = limit - selected.length
  const fallbackPool = candidates.filter((candidate) => !selected.some((item) => item.system_id === candidate.system_id))
  const fallbackSelection = pickRandomProjects(fallbackPool, remainingNeed)
  return [...selected, ...fallbackSelection]
}
