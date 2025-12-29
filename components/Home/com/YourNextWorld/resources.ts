/**
 * YourNextWorld 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 */

import { CDN_PREFIX } from '@/utils/cdn'

const CDN = CDN_PREFIX

// ==================== 图片资源 ====================
const baseImages = {
  // 卡片背景图（旧版，保留以兼容）
  datasets: `${CDN}/home/YourNextWorld/img/img_datasets.png`,
  computePool: `${CDN}/home/YourNextWorld/img/img_compute_paool.png`,
  foundationalModels: `${CDN}/home/YourNextWorld/img/img_foundational_models.png`,
  workflows: `${CDN}/home/YourNextWorld/img/img_workflows.png`,
  aiAgents: `${CDN}/home/YourNextWorld/img/img_ai_agents.png`,
} as const

const initImages = {
  datasets: `${CDN}/home/YourNextWorld/img/init/img1.png`,
  computePool: `${CDN}/home/YourNextWorld/img/init/img2.png`,
  foundationalModels: `${CDN}/home/YourNextWorld/img/init/img3.png`,
  workflows: `${CDN}/home/YourNextWorld/img/init/img4.png`,
  aiAgents: `${CDN}/home/YourNextWorld/img/init/img5.png`,
} as const

const hoverImages = {
  datasets: `${CDN}/home/YourNextWorld/img/hover/01.gif`,
  computePool: `${CDN}/home/YourNextWorld/img/hover/02.gif`,
  foundationalModels: `${CDN}/home/YourNextWorld/img/hover/03.gif`,
  workflows: `${CDN}/home/YourNextWorld/img/hover/04.gif`,
  aiAgents: `${CDN}/home/YourNextWorld/img/hover/05.gif`,
} as const

export const images = {
  datasets: baseImages.datasets,
  computePool: baseImages.computePool,
  foundationalModels: baseImages.foundationalModels,
  workflows: baseImages.workflows,
  aiAgents: baseImages.aiAgents,
  init: initImages,
  hover: hoverImages,
}

// 图片路径类型
export type ImageKey = keyof typeof images

// ==================== 文案资源 ====================
export const texts = {
  // 主标题（两行）
  mainTitle: {
    line1: 'Your Next World-Changing',
    line2: 'Idea Starts Here',
  },
  
  // 按钮文案
  buttonViewMore: 'View More',
  buttonLaunch: 'Launch Your AI Project and Earn',
  buttonLaunchProject: 'Launch Your AI Project and Earn', // 兼容旧字段
  
  // 链接文案
  linkLearnMore: 'Learn more details',
  
  // 卡片标题
  cardDatasets: 'Datasets',
  cardComputePool: 'Compute Pool',
  cardFoundationalModels: 'Foundational Models',
  cardWorkflows: 'Workflows',
  cardAiAgents: 'AI Agents',
} as const
