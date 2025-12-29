import Header from '@/components/Header/Header'
import LendingVaultContent from '@/components/LendingVault/LendingVaultContent'
import ImagePreloader from '@/components/ImagePreloader'

export default function LendingVault() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 图片预加载组件 - 在页面加载时预加载 LendingVault 图片 */}
      <ImagePreloader />
      
      {/* Title 盒子 - 固定高度 89px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <LendingVaultContent />
    </div>
  )
}

