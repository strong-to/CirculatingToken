export type TaxonomyArray = string[]

export interface ProjectMediaAsset {
  type: 'image' | 'video'
  url: string
  context?: string
  description?: string
}

export interface ProjectMedia {
  logo: string
  banner: string
  assets: ProjectMediaAsset[]
}

export interface ProjectLinks {
  website?: string
  whitepaper?: string
  github?: string
}

export interface ProjectProfile {
  name: string
  symbol: string
  type_en: string
  category_cn: string
  slogan: string
  summary: string
  description_md: string
  media: ProjectMedia
  links: ProjectLinks
}

export interface Project {
  system_id: string
  slug: string
  status: string
  profile: ProjectProfile
  taxonomy: {
    domain: TaxonomyArray
    object: TaxonomyArray
    action: TaxonomyArray
    interaction_form: TaxonomyArray
  }
  metrics: {
    development: {
      start_date: string
      progress: number
      contributors_count: number
      total_commits: number
    }
    operation: {
      total_users: number
      new_users_24h: number
      revenue_total: number
      revenue_24h: number
    }
    rating: {
      score: number
      review_count: number
    }
  }
  tokenomics: {
    base_currency: string
    price_info: {
      current_price: number
      market_cap: number
      change_24h_percent: number
      volume_24h: number
    }
    supply: {
      total_supply: number
      circulating: number
      minted_24h: number
      burned_24h: number
    }
    staking: {
      total_staked: number
      staking_ratio: number
      unstaked_24h: number
      apy: number
    }
  }
}

export interface HomepageFilterConfig {
  label: string
  taxonomyKey: keyof Project['taxonomy']
}

export interface HomepageSectionConfig {
  titleLines: string[]
  panelTriggerLabel: string
  learnMoreLabel: string
  learnMoreHref: string
  cta: {
    label: string
    href: string
  }
  accentColor: string
  badgeIcon?: string
  cardIconOverrides?: string[]
  backgroundColor?: string
  filterKeys: string[]
  projectIds: string[]
}

export interface HomepageIndexConfig {
  filters: Record<string, HomepageFilterConfig>
  sections: Record<string, HomepageSectionConfig>
}

export interface HomepageProjectCard {
  systemId: string
  name: string
  summary: string
  slogan: string
  heroImage: string
  heroAlt: string
  icon?: string
  taxonomy: Project['taxonomy']
  metrics: Project['metrics']
  tokenomics: Project['tokenomics']
}

export interface HomepageSectionData extends HomepageSectionConfig {
  id: string
  filters: Record<string, HomepageFilterConfig>
  projects: HomepageProjectCard[]
}
