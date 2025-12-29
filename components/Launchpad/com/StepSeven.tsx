'use client'

import { type ReactNode } from 'react'
import { px } from '@/utils/pxToRem'

interface StepSevenProps {
  onEnter?: () => void
  launchpadData?: import('../Launchpad').LaunchpadData
}

const NOT_PROVIDED_TEXT = 'Not provided'
const STEP_TWO_LABELS = ['Full Project Name', 'Short Project Name', 'Full Token Name', 'Short Token Name']

interface PreviewCardProps {
  title: string
  children: ReactNode
}

interface KeyValueRowProps {
  label: string
  value?: string
}

function safeText(value?: string | null) {
  return value && value.trim() ? value : NOT_PROVIDED_TEXT
}

function PreviewCard({ title, children }: PreviewCardProps) {
  return (
    <div
      style={{
        border: '0.5px solid #000000',
        borderRadius: px(8),
        padding: px(24),
        marginBottom: px(24),
      }}
    >
      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 500,
          fontSize: px(18),
          marginBottom: px(16),
        }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}

function KeyValueRow({ label, value }: KeyValueRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: px(24),
        padding: `${px(8)} 0`,
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      }}
    >
      <span
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          color: '#8C8C8C',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          color: '#000000',
          textAlign: 'right',
        }}
      >
        {safeText(value)}
      </span>
    </div>
  )
}

function renderImages(images: (string | null)[]) {
  const hasImages = images.some(Boolean)
  if (!hasImages) {
    return <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
        gap: px(12),
      }}
    >
      {images.map((img, idx) => (
        <div
          key={`${img}-${idx}`}
          style={{
            width: '100%',
            paddingTop: '100%',
            borderRadius: px(4),
            border: '0.5px solid rgba(0,0,0,0.1)',
            backgroundColor: '#F5F5F5',
            backgroundImage: img ? `url(${img})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  )
}

function renderRequirementRows(rows: import('./RequirementRow').RequirementRowData[]) {
  const filledRows = rows.filter((row) =>
    row.selectedRequirement || row.customRequirement || row.quantity || row.cause
  )

  if (!filledRows.length) {
    return <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: px(12) }}>
      {filledRows.map((row, index) => (
        <div
          key={`${row.selectedRequirement}-${index}`}
          style={{
            border: '0.5px solid rgba(0,0,0,0.12)',
            borderRadius: px(6),
            padding: px(12),
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: px(8) }}>
            {safeText(row.selectedRequirement || row.customRequirement)}
          </div>
          <div style={{ fontSize: px(14), color: '#000000' }}>
            Unit: {safeText(row.selectedUnit || row.customUnit)} · Quantity: {safeText(row.quantity)}
          </div>
          <div style={{ fontSize: px(14), color: '#8C8C8C', marginTop: px(4) }}>
            Reason: {safeText(row.cause)}
          </div>
        </div>
      ))}
    </div>
  )
}

function renderPricingRows(quantities: string[], prices: string[]) {
  if (!quantities.some(Boolean) && !prices.some(Boolean)) {
    return <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: px(8) }}>
      {quantities.map((qty, idx) => (
        <div
          key={`pricing-${idx}`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: `${px(6)} ${px(8)}`,
            border: '0.5px solid rgba(0,0,0,0.08)',
            borderRadius: px(4),
            fontSize: px(14),
          }}
        >
          <span>Quantity {idx + 1}</span>
          <span>
            {safeText(qty)} / {safeText(prices[idx])}
          </span>
        </div>
      ))}
    </div>
  )
}

function renderEconomicTable(table: string[][]) {
  if (!table.some((row) => row.some(Boolean))) {
    return <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(13),
        }}
      >
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={`econ-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`econ-${rowIndex}-${cellIndex}`}
                  style={{
                    border: '0.5px solid rgba(0,0,0,0.1)',
                    padding: px(8),
                    textAlign: 'center',
                  }}
                >
                  {safeText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StepSevenPreview({ launchpadData }: { launchpadData?: import('../Launchpad').LaunchpadData }) {
  const stepOne = launchpadData?.stepOne
  const stepTwo = launchpadData?.stepTwo
  const stepThree = launchpadData?.stepThree
  const stepFour = launchpadData?.stepFour
  const stepFive = launchpadData?.stepFive
  const stepSix = launchpadData?.stepSix

  return (
    <div>
      <PreviewCard title="Step 1 · Purpose Description and Function Sorting">
        <KeyValueRow label="Purpose Description" value={stepOne?.firstTextareaValue} />
        <KeyValueRow label="Function Sorting" value={stepOne?.secondTextareaValue} />
      </PreviewCard>

      <PreviewCard title="Step 2 · Naming and Brand Image">
        {STEP_TWO_LABELS.map((label, idx) => (
          <KeyValueRow
            key={`step2-field-${idx}`}
            label={label}
            value={stepTwo?.inputValues[idx]}
          />
        ))}
        <div style={{ marginTop: px(16) }}>
          <div style={{ marginBottom: px(8), fontWeight: 500 }}>Logos & Promotional Materials</div>
          {stepTwo ? renderImages(stepTwo.uploadImages) : <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>}
        </div>
      </PreviewCard>

      <PreviewCard title="Step 3 · Model Selection & Documentation">
        <div style={{ marginBottom: px(12) }}>
          <div style={{ fontWeight: 500, marginBottom: px(4) }}>Filters</div>
          {stepThree && Object.keys(stepThree.filterValues || {}).length ? (
            Object.entries(stepThree.filterValues || {}).map(([key, value]) => (
              <KeyValueRow key={key} label={key} value={value} />
            ))
          ) : (
            <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
          )}
        </div>
        <KeyValueRow label="Uploaded Document" value={stepThree?.uploadedFileInfo?.fileName || ''} />
        <div style={{ marginTop: px(12) }}>
          <div style={{ fontWeight: 500, marginBottom: px(4) }}>AI Preset Content</div>
          <div
            style={{
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontSize: px(14),
              color: '#000000',
              whiteSpace: 'pre-wrap',
            }}
          >
            {safeText(stepThree?.presetContent)}
          </div>
        </div>
      </PreviewCard>

      <PreviewCard title="Step 4 · Construction Requirements">
        {stepFour ? renderRequirementRows(stepFour.requirementRows) : <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>}
      </PreviewCard>

      <PreviewCard title="Step 5 · Rights Allocation">
        {stepFive ? (
          Object.entries(stepFive.fieldValues).map(([key, value]) => (
            <KeyValueRow key={key} label={key} value={value} />
          ))
        ) : (
          <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>
        )}
      </PreviewCard>

      <PreviewCard title="Step 6 · Fee Standards">
        <KeyValueRow label="Basic Pricing Method" value={stepSix?.basicPricingMethod} />
        <KeyValueRow label="Basic Custom Label" value={stepSix?.basicCustomLeftText} />
        <div style={{ marginTop: px(12) }}>{renderPricingRows(stepSix?.basicCustomQuantities || [], stepSix?.basicCustomPrices || [])}</div>
        <KeyValueRow label="Advanced Pricing Method" value={stepSix?.advancedPricingMethod} />
        <KeyValueRow label="Advanced Custom Label" value={stepSix?.advancedCustomLeftText} />
        <div style={{ marginTop: px(12) }}>{renderPricingRows(stepSix?.advancedCustomQuantities || [], stepSix?.advancedCustomPrices || [])}</div>
        <div style={{ marginTop: px(16) }}>
          <div style={{ fontWeight: 500, marginBottom: px(8) }}>Economic Estimates</div>
          {stepSix ? renderEconomicTable(stepSix.economicTableValues) : <div style={{ color: '#8C8C8C' }}>{NOT_PROVIDED_TEXT}</div>}
        </div>
      </PreviewCard>
    </div>
  )
}

export default function StepSeven({ onEnter, launchpadData }: StepSevenProps = {} as StepSevenProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-between" style={{ marginTop: px(5), marginBottom: px(30), width: px(426) }}>
        <div
          className="text-[#000000]"
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(40),
            lineHeight: px(48),
            verticalAlign: 'middle',
            height: px(34),
            display: 'flex',
            alignItems: 'center',
            marginTop: px(5),
          }}
        >
          Preview and Release
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(8, 63, 216, 0.65)', marginTop: px(-15) }}></div>
      </div>

      <div
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: px(20),
          lineHeight: '120%',
          letterSpacing: '0%',
          marginBottom: px(40),
          color: '#8C8C8C',
        }}
      >
        The preview below consolidates everything from Steps 1–6 for review. If you need to edit anything, jump back using the step list on the left.
      </div>

      <div style={{ maxHeight: 'calc(100vh - 320px)', overflowY: 'auto', paddingRight: px(12) }} className="scrollbar-hide">
        <StepSevenPreview launchpadData={launchpadData} />
      </div>

      <div className="flex items-center justify-center" style={{ marginTop: px(40), width: '100%' }}>
        <button
          className="cursor-pointer"
          onClick={onEnter}
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(16),
            lineHeight: '100%',
            letterSpacing: '0%',
            width: px(230),
            height: px(50),
            backgroundColor: '#000000',
            borderRadius: px(4),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Confirm the Release
        </button>
      </div>
    </>
  )
}
