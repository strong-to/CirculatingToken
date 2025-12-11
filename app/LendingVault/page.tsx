import Header from '@/components/Header/Header'
import LendingVaultContent from '@/components/LendingVault/LendingVaultContent'

export default function LendingVault() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Title 盒子 - 固定高度 89px */}
      <div>
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <LendingVaultContent />
    </div>
  )
}

