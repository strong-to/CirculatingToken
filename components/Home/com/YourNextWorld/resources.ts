/**
 * YourNextWorld 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 */

// ==================== 图片资源 ====================
export const images = {
  // 卡片背景图（旧版，保留以兼容）
  datasets: '/home/YourNextWorld/img/img_datasets.png',
  computePool: '/home/YourNextWorld/img/img_compute_paool.png',
  foundationalModels: '/home/YourNextWorld/img/img_foundational_models.png',
  workflows: '/home/YourNextWorld/img/img_workflows.png',
  aiAgents: '/home/YourNextWorld/img/img_ai_agents.png',
  
  // 初始化状态图片
  init: {
    datasets: '/home/YourNextWorld/img/init/img1.png',
    computePool: '/home/YourNextWorld/img/init/img2.png',
    foundationalModels: '/home/YourNextWorld/img/init/img3.png',
    workflows: '/home/YourNextWorld/img/init/img4.png',
    aiAgents: '/home/YourNextWorld/img/init/img5.png',
  },
  
  // Hover 状态 GIF 动画
  hover: {
    datasets: '/home/YourNextWorld/img/hover/01.gif',
    computePool: '/home/YourNextWorld/img/hover/02.gif',
    foundationalModels: '/home/YourNextWorld/img/hover/03.gif',
    workflows: '/home/YourNextWorld/img/hover/04.gif',
    aiAgents: '/home/YourNextWorld/img/hover/05.gif',
  },
} as const

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

