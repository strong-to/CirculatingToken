import homepageIndex from '@/dataset/index.json'
import projectsMap from '@/dataset/projects'
import { toCdnUrl } from '@/utils/cdn'
import { buildLendingVaultPath } from '@/config/app'
import type {
  HomepageIndexConfig,
  HomepageProjectCard,
  HomepageSectionData,
  HomepageFilterConfig,
  Project,
} from '@/lib/types'

const config = homepageIndex as HomepageIndexConfig

const PROJECTS: Record<string, Project> = projectsMap

function resolveProject(projectId: string): HomepageProjectCard | null {
  const project = PROJECTS[projectId]
  if (!project) return null
  const heroAsset = project.profile.media.assets[0]
  const heroImage = toCdnUrl(heroAsset?.url ?? project.profile.media.banner)
  const rawIcon = project.profile.media.card_icon ?? project.profile.media.logo
  const icon = rawIcon ? toCdnUrl(rawIcon) : undefined
  return {
    systemId: project.system_id,
    name: project.profile.name,
    summary: project.profile.summary,
    slogan: project.profile.slogan,
    heroImage,
    heroAlt: heroAsset?.description ?? project.profile.summary,
    icon,
    taxonomy: project.taxonomy,
    metrics: project.metrics,
    tokenomics: project.tokenomics,
    detailHref: buildLendingVaultPath(project.system_id),
  }
}

export const homepageSections: HomepageSectionData[] = Object.entries(config.sections).map(
  ([id, section]) => {
    const filters: Record<string, HomepageFilterConfig> = {}
    section.filterKeys.forEach((key) => {
      const filterDef = config.filters[key]
      if (filterDef) {
        filters[key] = filterDef
      }
    })

    const projects = section.projectIds
      .map((projectId) => resolveProject(projectId))
      .filter((card): card is HomepageProjectCard => Boolean(card))

    return {
      id,
      ...section,
      filters,
      projects,
    }
  }
)

export function getHomepageSection(id: string): HomepageSectionData | undefined {
  return homepageSections.find((section) => section.id === id)
}
