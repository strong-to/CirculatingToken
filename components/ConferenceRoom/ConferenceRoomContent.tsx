'use client'

import { px } from '@/utils/pxToRem'
import ProjectGovernance from './com/ProjectGovernance'
// import ProjectConstruction from '@/components/LendingVault/com/ProjectConstruction'
// import Footer from '@/components/Footer/Footer'

export default function ProjectConstructionContent() {
  return (
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
      <ProjectGovernance />
      {/* <div style={{ marginTop: px(89) }}>
        <Footer />
      </div> */}
    </div>
  )
}

