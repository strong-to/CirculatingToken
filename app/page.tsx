import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div className="h-[89px] flex-shrink-0">
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <Hero />
      </div>
      
      {/* Foot 盒子 - 固定高度 243px */}
      <div className="h-[138px] flex-shrink-0">
        <Partners />
      </div>
    </div>
  )
}

