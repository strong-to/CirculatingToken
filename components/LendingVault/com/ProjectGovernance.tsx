'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'
import ProjectGovernanceContent from './ProjectGovernanceContent'

const tabs = ['Ecosystem', 'Token', 'Finance', 'Proposal'] as const
type Tab = typeof tabs[number]

export default function ProjectGovernance() {
  const { project } = useProjectDetail()
  const governance = project.governance
  const proposals = governance?.proposals ?? []
  const totalVotes = proposals.reduce(
    (sum, proposal) =>
      sum +
      ((proposal.votes_summary?.for ?? 0) +
        (proposal.votes_summary?.against ?? 0) +
        (proposal.votes_summary?.abstain ?? 0)),
    0,
  )
  const [selectedTab, setSelectedTab] = useState<Tab>('Ecosystem')

  const statCards = [
    { label: 'Active proposals', value: governance?.active_proposal_count },
    { label: 'Total votes', value: totalVotes },
    { label: 'Token price', value: `$${project.tokenomics.price_info.current_price.toFixed(2)}` },
    { label: '24h change', value: `${project.tokenomics.price_info.change_24h_percent.toFixed(2)}%` },
  ]

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(80) }}>
      <div
        style={{
          backgroundColor: '#000000',
          borderRadius: px(12),
          padding: px(32),
          color: '#ffffff',
        }}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: px(16),
          }}
        >
          {statCards.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  color: '#B9B9B9',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 500,
                  fontSize: px(28),
                  marginTop: px(8),
                }}
              >
                {stat.value ?? '—'}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-between"
          style={{ gap: px(24), marginTop: px(32) }}
        >
          <div className="flex flex-wrap" style={{ gap: px(16) }}>
            {tabs.map((tab) => {
              const isSelected = selectedTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedTab(tab)}
                  className="transition-colors"
                  style={{
                    width: px(200),
                    height: px(56),
                    borderRadius: px(4),
                    border: '0.5px solid #ffffff',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#000000' : '#ffffff',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(18),
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.color = '#000000'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#ffffff'
                    }
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <ProjectGovernanceContent selectedTab={selectedTab} />
    </div>
  )
}
