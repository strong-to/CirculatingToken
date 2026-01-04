import Header from '@/components/Header/Header'
import { px } from '@/utils/pxToRem'

export default function Favorites() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Title 盒子 - 固定高度 72px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full flex flex-col items-center justify-center" style={{ minHeight: '100%', padding: px(40) }}>
          <div className="flex flex-col items-center" style={{ gap: px(24) }}>
            <h1 
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(48),
                fontWeight: 300,
                color: '#000000',
                textAlign: 'center',
                letterSpacing: '0%',
                lineHeight: '120%',
              }}
            >
              This page is under development
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

