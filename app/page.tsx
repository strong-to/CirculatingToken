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
import ImagePreloader from '@/components/ImagePreloader'
export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 图片预加载组件 - 在首页加载完成后预加载所有图片 */}
      <ImagePreloader />
      
      {/* Title 盒子 - 固定高度 72px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间，连续长页面 */}
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
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

