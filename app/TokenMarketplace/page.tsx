import Header from '@/components/Header/Header'
import TokenMarketplaceContent from '@/components/TokenMarketplace/TokenMarketplaceContent'

export default function TokenMarketplace() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <TokenMarketplaceContent />
    </div>
  )
}

