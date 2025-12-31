import { Suspense } from 'react'
import Header from '@/components/Header/Header'
import ProposalDetailContent from '@/components/LendingVault/com/ProposalDetailContent'
import ImagePreloader from '@/components/ImagePreloader'

export default function ProposalDetail() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ImagePreloader />
      
      <div>
        <Header />
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ProposalDetailContent />
      </Suspense>
    </div>
  )
}

