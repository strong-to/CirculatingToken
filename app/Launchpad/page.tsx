import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import LaunchpadContent from '@/components/Launchpad/Launchpad'

export default function Launchpad() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div className="flex-shrink-0" style={{ height: '5.5625rem' }}> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
        <LaunchpadContent />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

