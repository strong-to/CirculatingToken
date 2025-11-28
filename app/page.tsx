import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UseCaseSection from '@/components/UseCaseSection'

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div className="flex-shrink-0" style={{ height: '5.5625rem' }}> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间，按屏翻页 */}
      <div className="flex-1 min-h-0 overflow-y-scroll snap-y snap-mandatory">
        <Hero />
        <UseCaseSection />
      </div>
    </div>
  )
}

