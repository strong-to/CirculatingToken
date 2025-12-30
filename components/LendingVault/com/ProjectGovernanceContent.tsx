'use client'

import FilterDropdown from '@/components/LendingVault/com/FilterDropdown'
import SearchInput from '@/components/LendingVault/com/SearchInput'
import { projectGovernanceData, interactionFormCategories } from '@/components/TokenMarketplace/data/FilterSectionData'
import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'
import DataTable, { Column } from './DataTable'

interface ProjectGovernanceContentProps {
  selectedTab: 'Ecosystem' | 'Token' | 'Finance' | 'Proposal'
}

export default function ProjectGovernanceContent({ selectedTab }: ProjectGovernanceContentProps) {
  const { project } = useProjectDetail()
  const governance = project.governance
  const market = project.market

  const renderFilters = () => (
    <div
      className="flex flex-wrap items-center"
      style={{ width: '100%', marginTop: px(24), gap: px(15), paddingLeft: px(80), paddingRight: px(80) }}
    >
      <div style={{ flex: 1, minWidth: px(200) }}>
        <SearchInput />
      </div>
      <div style={{ flex: 1, minWidth: px(200) }}>
        <FilterDropdown
          placeholder="Sort by"
          options={projectGovernanceData}
        />
      </div>
      <div style={{ flex: 1, minWidth: px(200) }}>
        <FilterDropdown
          placeholder="Interaction / Form"
          categories={interactionFormCategories}
        />
      </div>
    </div>
  )

  const renderEcosystem = () => {
    const { taxonomy, metrics } = project
    const capabilityRows = [
      { label: 'Domain', value: taxonomy.domain?.join(', ') || '—' },
      { label: 'Object', value: taxonomy.object?.join(', ') || '—' },
      { label: 'Action', value: taxonomy.action?.join(', ') || '—' },
      { label: 'Interaction', value: taxonomy.interaction_form?.join(', ') || '—' },
    ]
    const activityStats = [
      { label: 'Total users', value: formatNumber(metrics.operation.total_users), helper: `+${formatNumber(metrics.operation.new_users_24h)} in 24h` },
      { label: 'Revenue', value: `$${formatNumber(metrics.operation.revenue_total)}`, helper: `$${formatNumber(metrics.operation.revenue_24h)} past 24h` },
      { label: 'Contributors', value: formatNumber(metrics.development.contributors_count), helper: `${formatNumber(metrics.development.total_commits)} commits` },
      { label: 'Progress', value: formatPercent(metrics.development.progress), helper: `Started ${metrics.development.start_date}` },
      { label: 'Rating', value: metrics.rating.score.toFixed(1), helper: `${formatNumber(metrics.rating.review_count)} reviews` },
    ]

    return (
      <>
        {renderFilters()}
        <div style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(40) }}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: px(16),
            }}
          >
            {activityStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#ffffff',
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
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(26),
                    marginTop: px(8),
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(13),
                    color: '#8C8C8C',
                    marginTop: px(4),
                  }}
                >
                  {stat.helper}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: px(32) }}>
            <h3
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 500,
                fontSize: px(20),
                marginBottom: px(16),
              }}
            >
              Capability taxonomy
            </h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: px(16) }}>
              {capabilityRows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    border: '1px solid #e5e5e5',
                    borderRadius: px(8),
                    padding: px(16),
                    backgroundColor: '#fafafa',
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 500,
                      fontSize: px(14),
                      color: '#8C8C8C',
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(16),
                      marginTop: px(6),
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  const renderToken = () => {
    const { tokenomics } = project
    const priceInfo = tokenomics.price_info
    const supply = tokenomics.supply
    const staking = tokenomics.staking

    const tokenStats = [
      { label: 'Current price', value: `$${priceInfo.current_price.toFixed(2)}` },
      { label: 'Market cap', value: `$${formatNumber(priceInfo.market_cap)}` },
      { label: '24h change', value: `${priceInfo.change_24h_percent.toFixed(2)}%` },
      { label: '24h volume', value: `$${formatNumber(priceInfo.volume_24h)}` },
      { label: 'Total supply', value: formatNumber(supply.total_supply) },
      { label: 'Circulating', value: formatNumber(supply.circulating) },
      { label: 'Minted 24h', value: formatNumber(supply.minted_24h) },
      { label: 'Burned 24h', value: formatNumber(supply.burned_24h) },
      { label: 'Total staked', value: `$${formatNumber(staking.total_staked)}` },
      { label: 'Staking ratio', value: formatPercent(staking.staking_ratio) },
      { label: 'APY', value: formatPercent(staking.apy) },
      { label: 'Unstaked 24h', value: `$${formatNumber(staking.unstaked_24h)}` },
    ]

    return (
      <>
        {renderFilters()}
        <div style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(40) }}>
          <div
            className="grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: px(16) }}
          >
            {tokenStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#ffffff',
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
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(24),
                    marginTop: px(10),
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  const renderFinance = () => {
    const history = market?.price_history ?? []
    const columns: Column[] = [
      { key: 'timestamp', label: 'Time', width: 220 },
      { key: 'open', label: 'Open', width: 'flex' },
      { key: 'high', label: 'High', width: 'flex' },
      { key: 'low', label: 'Low', width: 'flex' },
      { key: 'close', label: 'Close', width: 'flex' },
      { key: 'volume', label: 'Volume', width: 'flex' },
    ]
    const rows = history.slice(0, 8).map((entry) => ({
      timestamp: formatDate(entry.timestamp),
      open: `$${entry.open.toFixed(2)}`,
      high: `$${entry.high.toFixed(2)}`,
      low: `$${entry.low.toFixed(2)}`,
      close: `$${entry.close.toFixed(2)}`,
      volume: formatNumber(entry.volume),
    }))

    return (
      <>
        {renderFilters()}
        <div style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(40) }}>
          {rows.length > 0 ? (
            <DataTable columns={columns} data={rows} />
          ) : (
            <EmptyState message="Price history will appear once this project reports finance data." />
          )}
        </div>
      </>
    )
  }

  const renderProposal = () => {
    const proposals = governance?.proposals ?? []

    return (
      <>
        {renderFilters()}
        <div style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(40) }}>
          {proposals.length > 0 ? (
            <div className="flex flex-col" style={{ gap: px(16) }}>
              {proposals.map((proposal) => (
                <div
                  key={proposal.proposal_id}
                  style={{
                    border: '1px solid #000000',
                    borderRadius: px(10),
                    padding: px(24),
                    backgroundColor: '#ffffff',
                  }}
                >
                  <div className="flex items-center justify-between" style={{ gap: px(16) }}>
                    <div
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 500,
                        fontSize: px(20),
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
                    Voting ends {proposal.end_timestamp ? formatDate(proposal.end_timestamp) : '—'}
                  </div>
                  {proposal.votes_summary && (
                    <div
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontSize: px(14),
                        marginTop: px(12),
                      }}
                    >
                      {summarizeVotes(proposal.votes_summary)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="No proposals have been submitted for this project yet." />
          )}
        </div>
      </>
    )
  }

  if (selectedTab === 'Token') {
    return renderToken()
  }
  if (selectedTab === 'Finance') {
    return renderFinance()
  }
  if (selectedTab === 'Proposal') {
    return renderProposal()
  }
  return renderEcosystem()
}

const formatNumber = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return value.toLocaleString('en-US')
}

const formatPercent = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return `${(value * 100).toFixed(2)}%`
}

const formatDate = (timestamp?: number) => {
  if (!timestamp) return '—'
  return new Date(timestamp * 1000).toLocaleString()
}

const summarizeVotes = (votes: { for?: number; against?: number; abstain?: number }) => {
  const total = (votes.for ?? 0) + (votes.against ?? 0) + (votes.abstain ?? 0)
  if (total === 0) return 'No votes yet'
  const pct = (count?: number) => (((count ?? 0) / total) * 100).toFixed(1)
  return `${pct(votes.for)}% For · ${pct(votes.against)}% Against · ${pct(votes.abstain)}% Abstain`
}

function EmptyState({ message }: { message: string }) {
  return (
    <div
      style={{
        border: '1px dashed #cccccc',
        borderRadius: px(8),
        padding: px(32),
        textAlign: 'center',
        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontSize: px(18),
      }}
    >
      {message}
    </div>
  )
}
