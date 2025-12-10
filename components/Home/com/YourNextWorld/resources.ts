/**
 * YourNextWorld 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 * 文案从 public/home/YourNextWorld/text/texts.json 读取
 */

// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'

// ==================== 图片资源 ====================
export const images = {
  // 卡片背景图（初始化状态）
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
  // hover 状态 gif
  hover: {
    datasets: '/home/YourNextWorld/img/hover/01.gif',
    computePool: '/home/YourNextWorld/img/hover/02.gif',
    foundationalModels: '/home/YourNextWorld/img/hover/03.gif',
    workflows: '/home/YourNextWorld/img/hover/04.gif',
    aiAgents: '/home/YourNextWorld/img/hover/05.gif',
  },
  // 通用图标
  games: '/home/icons/img/games.png',
  arrow: '/home/icons/img/arr.png',
} as const

// 图片路径类型
export type ImageKey = keyof typeof images

// ==================== 文案资源 ====================
// 从 public 目录读取文案
export const texts = textsData as typeof textsData

