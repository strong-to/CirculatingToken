import Header from '@/components/Header/Header'
import InstitutionalGrade from '@/components/Home/InstitutionalGrade'
import WhereUsingBecomes from '@/components/Home/WhereUsingBecomes'
import LetEveryShare from '@/components/Home/LetEveryShare'
import BuildWithThe from '@/components/Home/BuildWithThe'
import YourNextWorld from '@/components/Home/YourNextWorld'
import GovernTogether from '@/components/Home/GovernTogether'
import FreedomToEnter from '@/components/Home/FreedomToEnter'
import LiquidityThat from '@/components/Home/LiquidityThat'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div className="flex-shrink-0" style={{ height: '5.5625rem' }}> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间，按屏翻页 */}
      <div className="flex-1 min-h-0 overflow-y-scroll snap-y snap-mandatory">
        <InstitutionalGrade />
        <WhereUsingBecomes />
        <LetEveryShare />
        <BuildWithThe />
        <YourNextWorld />
        <GovernTogether />
        <FreedomToEnter />
        <LiquidityThat />
        <Footer />
      </div>
    </div>
  )
}

