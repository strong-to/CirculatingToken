'use client'

import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'

const formatVotes = (votes?: { for?: number; against?: number; abstain?: number }) => {
  if (!votes) return '—'
  const total = (votes.for ?? 0) + (votes.against ?? 0) + (votes.abstain ?? 0)
  if (total === 0) return '—'
  const toPercent = (value?: number) => (((value ?? 0) / total) * 100).toFixed(1)
  return `${toPercent(votes.for)}% For · ${toPercent(votes.against)}% Against · ${toPercent(votes.abstain)}% Abstain`
}

export default function ProjectGovernance() {
  const { project } = useProjectDetail()
  const governance = project.governance
  const proposals = governance?.proposals ?? []

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(80) }}>
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: px(16) }}
      >
        <Stat label="Active proposals" value={governance?.active_proposal_count} />
        <Stat label="Total votes" value={proposals.reduce((sum, proposal) => sum + ((proposal.votes_summary?.for ?? 0) + (proposal.votes_summary?.against ?? 0) + (proposal.votes_summary?.abstain ?? 0)), 0)} />
        <Stat label="Token price" value={`$${project.tokenomics.price_info.current_price.toFixed(2)}`} />
        <Stat label="24h change" value={`${project.tokenomics.price_info.change_24h_percent.toFixed(2)}%`} />
      </div>

      {proposals.length > 0 ? (
        <div style={{ marginTop: px(32), marginBottom: px(32) }}>
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(22),
              marginBottom: px(16),
            }}
          >
            Governance proposals
          </h3>
          <div className="flex flex-col" style={{ gap: px(16) }}>
            {proposals.map((proposal) => (
              <div
                key={proposal.proposal_id}
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#fff',
                }}
              >
                <div className="flex items-center justify-between" style={{ gap: px(12) }}>
                  <div
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 500,
                      fontSize: px(18),
                    }}
                  >
                    {proposal.title}
                  </div>
                  <span
                    style={{
                      border: '1px solid #000000',
                      borderRadius: px(999),
                      padding: `${px(4)} ${px(12)}`,
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontSize: px(14),
                    }}
                  >
                    {proposal.status}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(16),
                    lineHeight: px(24),
                    marginTop: px(12),
                  }}
                >
                  {proposal.description}
                </p>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                    marginTop: px(12),
                  }}
                >
                  {formatVotes(proposal.votes_summary)}
                </div>
                {proposal.recent_votes && proposal.recent_votes.length > 0 && (
                  <div style={{ marginTop: px(12) }}>
                    <div
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 500,
                        fontSize: px(14),
                        marginBottom: px(6),
                      }}
                    >
                      Recent votes
                    </div>
                    <div className="flex flex-wrap" style={{ gap: px(8) }}>
                      {proposal.recent_votes.slice(0, 3).map((vote, index) => (
                        <span
                          key={`${proposal.proposal_id}-vote-${index}`}
                          style={{
                            border: '1px solid #e5e5e5',
                            borderRadius: px(4),
                            padding: `${px(4)} ${px(8)}`,
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontSize: px(13),
                          }}
                        >
                          {vote.name || vote.user_id}: {vote.vote_option}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            marginTop: px(32),
            border: '1px dashed #cccccc',
            borderRadius: px(8),
            padding: px(32),
            textAlign: 'center',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(18),
          }}
        >
          This project has no governance proposals yet.
        </div>
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value?: number | string }) {
  return (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: px(8),
        padding: px(20),
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(14),
          color: '#8C8C8C',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 500,
          fontSize: px(22),
          marginTop: px(10),
        }}
      >
        {value !== undefined && value !== null ? value : '—'}
      </div>
    </div>
  )
}
