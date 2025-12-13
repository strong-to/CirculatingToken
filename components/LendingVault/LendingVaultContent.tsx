'use client'

import { px } from '@/utils/pxToRem'
import Banner from './com/Banner'
import SecondScreen from './com/SecondScreen'
import ProjectIntroduction from './com/ProjectIntroduction'
import UserComments from './com/UserComments'
import ProjectConstruction from './com/ProjectConstruction'
import ProjectGovernance from './com/ProjectGovernance'
import TokenTrading from './com/TokenTrading'
import ProjectsYouMayBeInterestedIn from './com/ProjectsYouMayBeInterestedIn'
import { useState } from 'react'
import Footer from '../Footer/Footer'

export default function LendingVaultContent() {

  const [activeTab, setActiveTab] = useState('Project Introduction')
  return (
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
      {/* 第一屏 */}
      <div className="flex flex-col" style={{ height: 'calc(100vh - 89px)' }}>
        {/* Banner 组件 */}
        <div className="flex-1 min-h-0">
          <Banner />
        </div>

        
      </div>

      {/* 第二屏 */}
      {/* <SecondScreen /> */}


     

        <div className="w-full flex flex-col" style={{ minHeight:'calc(100vh - 89px)' }}>
        <div 
          className="w-full flex flex-shrink-0" 
          style={{ 
            paddingLeft: px(302),
            paddingRight: px(302),
            height: px(44),
            gap: px(16),
            marginTop: px(40),
          }}
        >
          {[
            'Project Introduction',
            'User Comments',
            'Project Construction',
            'Project Governance',
            'Token Trading',
            'Token Lending'
          ].map((text) => {
            const isActive = activeTab === text
            return (
              <button
                key={text}
                onClick={() => setActiveTab(text)}
                className="flex items-center justify-center transition-colors"
                style={{
                  flex: 1,
                  height: '100%',
                  borderRadius: px(4),
                  backgroundColor: isActive ? '#000000' : 'transparent',
                  color: isActive ? '#ffffff' : '#000000',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  border: isActive ? '1px solid #000000' : `1px solid #000000`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#000000'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = '#000000'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#000000'
                    e.currentTarget.style.borderColor = '#000000'
                  }
                }}
              >
                {text}
              </button>
            )
          })}
        </div>
        
      {/* 根据 activeTab 显示不同的组件 */}
      {activeTab === 'Project Introduction' && <SecondScreen />}
      {activeTab === 'User Comments' && <UserComments />}
      {activeTab === 'Project Construction' && <ProjectConstruction />}
      {activeTab === 'Project Governance' && <ProjectGovernance />}
      {activeTab === 'Token Trading' && <ProjectGovernance />}
      {activeTab === 'Token Lending' && <ProjectGovernance />}

      {/* Projects You May Be Interested In */}
     
      </div>

      <ProjectsYouMayBeInterestedIn />
      <div style={{marginTop: px(89)}}> <Footer /></div>
  
    </div>
  )
}

