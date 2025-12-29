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
  card_icon?: string
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

export interface ProjectReviewEntry {
  id: string
  user_id?: string
  user_name?: string
  avatar?: string
  rating?: number
  content?: string
  date?: string
  likes?: number
}

export interface ProjectReviews {
  summary_tags?: string[]
  list?: ProjectReviewEntry[]
}

export interface ProjectMarketPricePoint {
  timestamp: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export interface ProjectMarketOrder {
  price: number
  amount: number
}

export interface ProjectMarketTrade {
  id: string
  timestamp: number
  type: string
  price: number
  amount: number
  total_value: number
  trader_info?: {
    user_id?: string
    name?: string
    avatar?: string
    wallet_short?: string
  }
}

export interface ProjectMarket {
  price_history?: ProjectMarketPricePoint[]
  order_book?: {
    bids?: ProjectMarketOrder[]
    asks?: ProjectMarketOrder[]
  }
  recent_trades?: ProjectMarketTrade[]
}

export interface ProjectCoCreationTask {
  task_id: string
  title?: string
  type?: string
  category?: string
  status?: string
  progress_current?: number
  progress_target?: number
  reward_display?: string
}

export interface ProjectContributor {
  rank?: number
  user_id?: string
  name?: string
  avatar?: string
  role?: string
  contribution_points?: number
  last_active?: string
}

export interface ProjectContributionRecord {
  record_id?: string
  user_id?: string
  user_name?: string
  task_title?: string
  amount?: number
  unit?: string
  timestamp?: number
}

export interface ProjectCoCreation {
  summary?: {
    total_contributions_recorded?: number
    active_builders_count?: number
  }
  exchange_rates?: Array<{
    resource_key?: string
    unit_name?: string
    description?: string
    reward_token?: number
  }>
  open_tasks?: ProjectCoCreationTask[]
  contributors_leaderboard?: ProjectContributor[]
  contribution_history?: ProjectContributionRecord[]
}

export interface ProjectGovernanceVote {
  user_id?: string
  name?: string
  avatar?: string
  vote_option?: string
  weight?: number
  timestamp?: number
}

export interface ProjectGovernanceProposal {
  proposal_id: string
  title?: string
  proposer?: {
    name?: string
    avatar?: string
    address?: string
  }
  status?: string
  end_timestamp?: number
  description?: string
  votes_summary?: {
    for?: number
    against?: number
    abstain?: number
  }
  recent_votes?: ProjectGovernanceVote[]
}

export interface ProjectGovernance {
  active_proposal_count?: number
  proposals?: ProjectGovernanceProposal[]
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
  reviews?: ProjectReviews
  market?: ProjectMarket
  co_creation?: ProjectCoCreation
  governance?: ProjectGovernance
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
  detailHref: string
}

export interface HomepageSectionData extends HomepageSectionConfig {
  id: string
  filters: Record<string, HomepageFilterConfig>
  projects: HomepageProjectCard[]
}
