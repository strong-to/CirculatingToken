'use client'

'use client'

import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'

const formatCurrency = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

const formatPercent = (value?: number) => {
  if (value === undefined || value === null) return '—'
  return `${(value * 100).toFixed(2)}%`
}

export default function TokenLending() {
  const { project } = useProjectDetail()
  const staking = project.tokenomics.staking
  const exchangeRates = project.co_creation?.exchange_rates ?? []

  return (
    <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(80), marginBottom: px(60) }}>
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
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: px(16) }}
        >
          <Stat label="Total staked" value={formatCurrency(staking.total_staked)} inverted />
          <Stat label="Staking ratio" value={formatPercent(staking.staking_ratio)} inverted />
          <Stat label="APY" value={formatPercent(staking.apy)} inverted />
          <Stat label="Unstaked (24h)" value={formatCurrency(staking.unstaked_24h)} inverted />
        </div>
      </div>

      {exchangeRates.length > 0 ? (
        <div style={{ marginTop: px(32) }}>
          <h3
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 500,
              fontSize: px(22),
              marginBottom: px(12),
            }}
          >
            Contribution exchange rates
          </h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: px(16) }}>
            {exchangeRates.map((rate) => (
              <div
                key={rate.resource_key || rate.unit_name}
                style={{
                  border: '1px solid #000000',
                  borderRadius: px(8),
                  padding: px(20),
                  backgroundColor: '#fff',
                }}
              >
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 500,
                    fontSize: px(16),
                  }}
                >
                  {rate.description || rate.resource_key}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    color: '#8C8C8C',
                    marginTop: px(6),
                  }}
                >
                  Reward token: {rate.reward_token ?? '—'}
                </div>
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
            padding: px(28),
            textAlign: 'center',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(18),
          }}
        >
          Staking parameters will be published soon.
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, inverted = false }: { label: string; value?: string; inverted?: boolean }) {
  return (
    <div
      style={{
        border: inverted ? '1px solid rgba(255,255,255,0.2)' : '1px solid #e5e5e5',
        borderRadius: px(8),
        padding: px(20),
        backgroundColor: inverted ? 'rgba(255,255,255,0.08)' : '#fff',
      }}
    >
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(14),
          color: inverted ? '#CFCFCF' : '#8C8C8C',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 500,
          fontSize: px(24),
          marginTop: px(10),
          color: inverted ? '#ffffff' : '#000000',
        }}
      >
        {value ?? '—'}
      </div>
    </div>
  )
}
