/**
 * YourNextWorld 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 */

// ==================== 图片资源 ====================
export const images = {
  // 卡片背景图
  datasets: '/home/YourNextWorld/img/img_datasets.png',
  computePool: '/home/YourNextWorld/img/img_compute_paool.png',
  foundationalModels: '/home/YourNextWorld/img/img_foundational_models.png',
  workflows: '/home/YourNextWorld/img/img_workflows.png',
  aiAgents: '/home/YourNextWorld/img/img_ai_agents.png',
} as const

// 图片路径类型
export type ImageKey = keyof typeof images

// ==================== 文案资源 ====================
export const texts = {
  // 主标题
  mainTitle: 'Your Next World-Changing Idea Starts Here',
  
  // 按钮文案
  buttonViewMore: 'View More',
  buttonLaunchProject: 'Launch Your AI Project and Earn',
  
  // 卡片标题
  cardDatasets: 'Datasets',
  cardComputePool: 'Compute Pool',
  cardFoundationalModels: 'Foundational Models',
  cardWorkflows: 'Workflows',
  cardAiAgents: 'AI Agents',
} as const

