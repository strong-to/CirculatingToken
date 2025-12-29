'use client'

import { px } from "@/utils/pxToRem"
import Image from 'next/image'
import { useState } from "react"
import EcosystemContent from "./EcosystemContent"
import TokenContent from "./TokenContent"
import FinanceContent from "./FinanceContent"
import ProposalContent from "./ProposalContent"

export default function ProjectGovernance() {
  const [selectedTab, setSelectedTab] = useState<'Ecosystem' | 'Token' | 'Finance' | 'Proposal'>('Ecosystem')



    return (
        <div className="w-full"  style={{marginTop:px(50)}}>
            <div className='flex items-center w-full justify-start' style={{height:px(32),gap:px(20),paddingLeft:px(80),paddingBottom:px(25)}}>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
             Number of Ongoing Projects：960,876
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
             Number of Available Projects ：960,876
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
             Total Number of Projects：38,960,876
             </div>
           </div>
           <div className='flex items-center w-full justify-start' style={{height:px(25),gap:px(20),paddingLeft:px(80),paddingBottom:px(25),marginTop:px(5)}}>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
             Total Number of Visits：771,565,002
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
             Total Number of Registered Users：2,052.11
             </div>
           </div>

        <div className="w-full bg-black relative flex items-center justify-between"  style={{ height:px(140), paddingLeft:px(80), paddingRight:px(80) }}>
          <div className="flex items-center " style={{gap:px(20) }}>
            {(['Ecosystem', 'Token', 'Finance', 'Proposal'] as const).map((label) => {
              const isSelected = selectedTab === label
              return (
                <button
                  key={label}
                  onClick={() => setSelectedTab(label)}
                  className="transition-colors cursor-pointer"
                  style={{
                    width: px(230),
                    height: px(60),
                    border: '0.5px solid #ffffff',
                    borderRadius: px(4),
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(20),
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: isSelected ? '#000000' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.color = '#000000'
                      e.currentTarget.style.borderColor = '#ffffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.borderColor = '#ffffff'
                    }
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
          
          <div
            style={{
              position:"absolute",
              right:px(83),
              bottom:(41),
              width: px(200),
              height: px(200),
              // backgroundColor: '#f5f5f5',
              borderRadius: px(4),
              flexShrink: 0,
            }}
          >
            {/* <Image
              src="https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4/LendingVault/ProjectConstruction/logo2.png"
              alt="Project Construction Logo2"
              width={200}
              height={200}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: px(4) }}
            /> */}
          </div>
        </div>

      {/* 根据选中的 tab 显示对应的内容 */}
      {selectedTab === 'Ecosystem' && <EcosystemContent />}
      {selectedTab === 'Token' && <TokenContent />}
      {selectedTab === 'Finance' && <FinanceContent />}
      {selectedTab === 'Proposal' && <ProposalContent />}



        </div>
      )
}
