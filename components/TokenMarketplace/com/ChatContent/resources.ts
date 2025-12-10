// ChatContent 图片资源
// 从 public/tokenMarketplace/ChatContent/img/ 目录读取图片

export const chatContentImages = Array.from({ length: 30 }, (_, i) => {
  const iconNumber = String(i + 1).padStart(2, '0')
  return `/tokenMarketplace/ChatContent/img/icon${iconNumber}.png`
})



