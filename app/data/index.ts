

type StringArray = string[] | undefined;

export interface ProjectProfile {
  name?: string;
  symbol?: string;
  type_en?: string;
  category_cn?: string;
  summary?: string;
  slogan?: string;
  description_md?: string;
  media?: {
    logo?: string;
    banner?: string;
    introduction?: string;
    description?: string;
    assets?: Array<{
      type?: string;
      url?: string;
      context?: string;
      description?: string;
    }>;
  };
}

export interface ProjectMetrics {
  development?: {
    start_date?: string;
    progress?: number;
    contributors_count?: number;
  };
  operation?: {
    total_users?: number;
    new_users_24h?: number;
    revenue_total?: number;
    revenue_24h?: number;
  };
  rating?: {
    score?: number;
    review_count?: number;
  };
}

export interface ProjectTokenomics {
  price_info?: {
    current_price?: number;
    market_cap?: number;
    change_24h_percent?: number;
  };
  staking?: {
    total_staked?: number;
    staking_ratio?: number;
    apy?: number;
  };
}

export interface ProjectGovernanceProposal {
  proposal_id: string;
  title?: string;
  votes_summary?: {
    for?: number;
    against?: number;
  };
}

export interface ProjectData {
  system_id: string;
  slug?: string;
  status?: string;
  profile?: ProjectProfile;
  taxonomy?: {
    domain?: StringArray;
    object?: StringArray;
    action?: StringArray;
    interaction_form?: StringArray;
  };
  metrics?: ProjectMetrics;
  tokenomics?: ProjectTokenomics;
  governance?: {
    active_proposal_count?: number;
    proposals?: ProjectGovernanceProposal[];
  };
}

export interface UserProfileAsset {
  system_id: string;
  symbol: string;
  balance_available?: number;
  balance_staked?: number;
  balance_locked?: number;
  balance_total?: number;
  unclaimed_rewards?: number;
}

export interface UserProfileContribution {
  record_id: string;
  project_name: string;
  task_title: string;
  type: string;
  status: string;
  amount_contributed?: number;
  unit?: string;
  reward_earned?: number;
  timestamp?: number;
}

export interface UserProfileTransaction {
  tx_hash: string;
  type: string;
  system_id: string;
  amount?: number;
  price_at_moment?: number;
  total_value_usd?: number;
  status?: string;
  timestamp?: number;
}

export interface UserProfileVote {
  system_id: string;
  proposal_id: string;
  proposal_title: string;
  my_vote: string;
  vote_weight?: number;
  timestamp?: number;
}

export interface UserProfileData {
  user_id: string;
  wallet_address: string;
  nickname: string;
  avatar: string;
  kyc_status?: string;
  badges?: string[];
  join_date?: string;
  assets?: UserProfileAsset[];
  transactions?: UserProfileTransaction[];
  contributions?: {
    summary?: {
      total_tasks_completed?: number;
      total_earned_tokens?: number;
      current_level?: string;
    };
    history?: UserProfileContribution[];
  };
  governance_votes?: UserProfileVote[];
  created_projects?: Array<{
    system_id: string;
    name: string;
    role?: string;
    status?: string;
  }>;
  settings?: {
    theme?: string;
    language?: string;
    currency_display?: string;
    notifications?: Record<string, boolean>;
    security?: Record<string, boolean>;
  };
}

const stripJsonComments = (input = '') => {
  let isInString = false;
  let isEscaped = false;
  let isSingleLineComment = false;
  let isMultiLineComment = false;
  let result = '';

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (isSingleLineComment) {
      if (char === '\n') {
        isSingleLineComment = false;
        result += '\n';
      }
      continue;
    }

    if (isMultiLineComment) {
      if (char === '*' && next === '/') {
        isMultiLineComment = false;
        i += 1;
      }
      continue;
    }

    if (!isInString && char === '/' && next === '/') {
      isSingleLineComment = true;
      i += 1;
      continue;
    }

    if (!isInString && char === '/' && next === '*') {
      isMultiLineComment = true;
      i += 1;
      continue;
    }

    result += char;

    if (char === '"' && !isEscaped) {
      isInString = !isInString;
    }

    isEscaped = char === '\\' && !isEscaped;
  }

  return result;
};

// 动态导入所有项目数据
import DBTF0000001 from './projects/DBTF0000001.json';
import DBTF0000002 from './projects/DBTF0000002.json';
import DBTF0000003 from './projects/DBTF0000003.json';
import DBTF0000004 from './projects/DBTF0000004.json';
import DBTF0000005 from './projects/DBTF0000005.json';
import DBTF0000006 from './projects/DBTF0000006.json';
import DBTF0000007 from './projects/DBTF0000007.json';
import DBTF0000008 from './projects/DBTF0000008.json';
import DBTF0000009 from './projects/DBTF0000009.json';
import DBTF0000010 from './projects/DBTF0000010.json';
import DBTF0000011 from './projects/DBTF0000011.json';
import DBTF0000012 from './projects/DBTF0000012.json';
import DBTF0000013 from './projects/DBTF0000013.json';
import DBTF0000014 from './projects/DBTF0000014.json';
import DBTF0000015 from './projects/DBTF0000015.json';
import DBTF0000016 from './projects/DBTF0000016.json';
import DBTF0000017 from './projects/DBTF0000017.json';
import DBTF0000018 from './projects/DBTF0000018.json';
import DBTF0000019 from './projects/DBTF0000019.json';
import DBTF0000020 from './projects/DBTF0000020.json';
import DBTF0000021 from './projects/DBTF0000021.json';
import DBTF0000022 from './projects/DBTF0000022.json';
import DBTF0000023 from './projects/DBTF0000023.json';
import DBTF0000024 from './projects/DBTF0000024.json';
import DBTF0000025 from './projects/DBTF0000025.json';
import DBTF0000026 from './projects/DBTF0000026.json';
import DBTF0000027 from './projects/DBTF0000027.json';
import DBTF0000028 from './projects/DBTF0000028.json';
import DBTF0000029 from './projects/DBTF0000029.json';
import DBTF0000030 from './projects/DBTF0000030.json';

const projectModules = {
  DBTF0000001,
  DBTF0000002,
  DBTF0000003,
  DBTF0000004,
  DBTF0000005,
  DBTF0000006,
  DBTF0000007,
  DBTF0000008,
  DBTF0000009,
  DBTF0000010,
  DBTF0000011,
  DBTF0000012,
  DBTF0000013,
  DBTF0000014,
  DBTF0000015,
  DBTF0000016,
  DBTF0000017,
  DBTF0000018,
  DBTF0000019,
  DBTF0000020,
  DBTF0000021,
  DBTF0000022,
  DBTF0000023,
  DBTF0000024,
  DBTF0000025,
  DBTF0000026,
  DBTF0000027,
  DBTF0000028,
  DBTF0000029,
  DBTF0000030,
};

const projectEntries: ProjectData[] = Object.values(projectModules)
  .map((data) => data as ProjectData)
  .sort((a, b) => a.system_id.localeCompare(b.system_id));

export const projectsList = projectEntries;
export const projectsMap = projectEntries.reduce<Record<string, ProjectData>>((acc, project) => {
  acc[project.system_id] = project;
  return acc;
}, {});



