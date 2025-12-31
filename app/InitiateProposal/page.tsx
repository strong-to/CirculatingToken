import { Suspense } from 'react'
import Header from '@/components/Header/Header'
import InitiateProposalContent from '@/components/LendingVault/com/InitiateProposalContent'
import ImagePreloader from '@/components/ImagePreloader'

export default function InitiateProposal() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ImagePreloader />
      
      <div>
        <Header />
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <InitiateProposalContent />
      </Suspense>
    </div>
  )
}

