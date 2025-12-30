'use client'

'use client'

import { px } from '@/utils/pxToRem'
import { useProjectDetail } from '../ProjectDetailProvider'

const formatNumber = (value?: number, options: Intl.NumberFormatOptions = {}) => {
  if (value === undefined || value === null) return '—'
  return value.toLocaleString('en-US', options)
}

export default function TokenTrading() {
  const { project } = useProjectDetail()
  const priceInfo = project.tokenomics.price_info
  const supply = project.tokenomics.supply
  const market = project.market

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
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: px(16) }}
        >
          <Stat label="Current price" value={`$${priceInfo.current_price.toFixed(2)}`} inverted />
          <Stat label="24h change" value={`${priceInfo.change_24h_percent.toFixed(2)}%`} inverted />
          <Stat label="Market cap" value={`$${formatNumber(priceInfo.market_cap)}`} inverted />
          <Stat label="24h volume" value={`$${formatNumber(priceInfo.volume_24h)}`} inverted />
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: px(16),
            marginTop: px(24),
          }}
        >
          <Stat label="Total supply" value={formatNumber(supply.total_supply)} inverted />
          <Stat label="Circulating" value={formatNumber(supply.circulating)} inverted />
          <Stat label="Minted 24h" value={formatNumber(supply.minted_24h)} inverted />
          <Stat label="Burned 24h" value={formatNumber(supply.burned_24h)} inverted />
        </div>
      </div>

      {market?.price_history && market.price_history.length > 0 && (
        <div style={{ marginTop: px(32), backgroundColor: '#ffffff', borderRadius: px(12), padding: px(24) }}>
          <SectionTitle title="Recent price history" />
          <div className="overflow-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Time', 'Open', 'High', 'Low', 'Close', 'Volume'].map((header) => (
                    <th
                      key={header}
                      style={{
                        textAlign: 'left',
                        padding: `${px(12)} ${px(8)}`,
                        borderBottom: '1px solid #e5e5e5',
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 500,
                        fontSize: px(14),
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {market.price_history.slice(0, 6).map((entry) => (
                  <tr key={entry.timestamp}>
                    <td style={tableCellStyle}>{new Date(entry.timestamp * 1000).toLocaleString()}</td>
                    <td style={tableCellStyle}>${entry.open.toFixed(2)}</td>
                    <td style={tableCellStyle}>${entry.high.toFixed(2)}</td>
                    <td style={tableCellStyle}>${entry.low.toFixed(2)}</td>
                    <td style={tableCellStyle}>${entry.close.toFixed(2)}</td>
                    <td style={tableCellStyle}>{formatNumber(entry.volume)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {market?.recent_trades && market.recent_trades.length > 0 && (
        <div style={{ marginTop: px(32), marginBottom: px(40) }}>
          <SectionTitle title="Recent trades" />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: px(16) }}>
            {market.recent_trades.slice(0, 4).map((trade) => (
              <div
                key={trade.id}
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
                  {trade.type.toUpperCase()} · ${trade.price.toFixed(2)}
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
                  {new Date(trade.timestamp * 1000).toLocaleString()}
                </div>
                <div
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(14),
                    marginTop: px(8),
                  }}
                >
                  Amount: {formatNumber(trade.amount)} · Value: ${formatNumber(trade.total_value)}
                </div>
                {trade.trader_info && (
                  <div
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(13),
                      color: '#8C8C8C',
                      marginTop: px(6),
                    }}
                  >
                    {trade.trader_info.name || trade.trader_info.user_id} · {trade.trader_info.wallet_short}
                  </div>
                )}
              </div>
            ))}
          </div>
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

function SectionTitle({ title }: { title: string }) {
  return (
    <h3
      style={{
        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontWeight: 500,
        fontSize: px(22),
        marginBottom: px(12),
      }}
    >
      {title}
    </h3>
  )
}

const tableCellStyle: React.CSSProperties = {
  padding: `${px(12)} ${px(8)}`,
  borderBottom: '1px solid #f0f0f0',
  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
  fontWeight: 300,
  fontSize: px(14),
}
