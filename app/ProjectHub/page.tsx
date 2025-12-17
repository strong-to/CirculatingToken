import Header from '@/components/Header/Header'
import TokenMarketplaceContent from '@/components/TokenMarketplace/TokenMarketplaceContent'
import ImagePreloader from '@/components/ImagePreloader'

export default function TokenMarketplace() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 图片预加载组件 - 在页面加载时预加载 TokenMarketplace 图片 */}
      <ImagePreloader />
      
      {/* Title 盒子 - 固定高度 89px */}
      <div> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <TokenMarketplaceContent />
    </div>
  )
}

