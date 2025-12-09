/**
 * ContentCard 组件资源文件
 * 包含该组件使用的所有图片路径和文案
 */

// ==================== 图片资源 ====================
export const images = {
  // 卡片背景图（所有卡片共用）
  background: '/tokenMarketplace/ContentCard/img/bg.png',
  // 点击状态图标（所有卡片共用）
  clickedIcon: '/tokenMarketplace/ContentCard/img/icon2.png',
  // 卡片图标（30个）
  icons: {
    icon1: '/tokenMarketplace/ContentCard/img/icon/icon_1.png',
    icon2: '/tokenMarketplace/ContentCard/img/icon/icon_2.png',
    icon3: '/tokenMarketplace/ContentCard/img/icon/icon_3.png',
    icon4: '/tokenMarketplace/ContentCard/img/icon/icon_4.png',
    icon5: '/tokenMarketplace/ContentCard/img/icon/icon_5.png',
    icon6: '/tokenMarketplace/ContentCard/img/icon/icon_6.png',
    icon7: '/tokenMarketplace/ContentCard/img/icon/icon_7.png',
    icon8: '/tokenMarketplace/ContentCard/img/icon/icon_8.png',
    icon9: '/tokenMarketplace/ContentCard/img/icon/icon_9.png',
    icon10: '/tokenMarketplace/ContentCard/img/icon/icon_10.png',
    icon11: '/tokenMarketplace/ContentCard/img/icon/icon_11.png',
    icon12: '/tokenMarketplace/ContentCard/img/icon/icon_12.png',
    icon13: '/tokenMarketplace/ContentCard/img/icon/icon_13.png',
    icon14: '/tokenMarketplace/ContentCard/img/icon/icon_14.png',
    icon15: '/tokenMarketplace/ContentCard/img/icon/icon_15.png',
    icon16: '/tokenMarketplace/ContentCard/img/icon/icon_16.png',
    icon17: '/tokenMarketplace/ContentCard/img/icon/icon_17.png',
    icon18: '/tokenMarketplace/ContentCard/img/icon/icon_18.png',
    icon19: '/tokenMarketplace/ContentCard/img/icon/icon_19.png',
    icon20: '/tokenMarketplace/ContentCard/img/icon/icon_20.png',
    icon21: '/tokenMarketplace/ContentCard/img/icon/icon_21.png',
    icon22: '/tokenMarketplace/ContentCard/img/icon/icon_22.png',
    icon23: '/tokenMarketplace/ContentCard/img/icon/icon_23.png',
    icon24: '/tokenMarketplace/ContentCard/img/icon/icon_24.png',
    icon25: '/tokenMarketplace/ContentCard/img/icon/icon_25.png',
    icon26: '/tokenMarketplace/ContentCard/img/icon/icon_26.png',
    icon27: '/tokenMarketplace/ContentCard/img/icon/icon_27.png',
    icon28: '/tokenMarketplace/ContentCard/img/icon/icon_28.png',
    icon29: '/tokenMarketplace/ContentCard/img/icon/icon_29.png',
    icon30: '/tokenMarketplace/ContentCard/img/icon/icon_30.png',
  },
} as const

// ==================== 文案资源 ====================
// 从组件目录读取文案（JSON 文件从 public 目录同步过来）
import textsData from './text/texts.json'
export const texts = textsData as typeof textsData

