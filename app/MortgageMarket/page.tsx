import Header from '@/components/Header/Header'
import MortgageMarketContent from '@/components/MortgageMarket/MortgageMarketContent'

export default function MortgageMarket() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 72px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <MortgageMarketContent />
    </div>
  )
}

