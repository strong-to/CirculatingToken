'use client'
export default function CollapsiblePanelContent() {
  return (
    <div className="w-full relative" style={{ height: '21.625rem' }}> {/* 346px = 21.625rem */}
      <div 
        className="text-black"
        style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: '2.375rem', // 38px = 2.375rem (PostCSS会自动转换为rem)
          lineHeight: '50px', // 60px (PostCSS会自动转换为rem)
          letterSpacing: '0%'
        }}
      >

To keep the ecosystem healthy, the DeepBlue Consensus Staking & Lending Center provides a decentralized lending market for every major token in the DeepBlue economy. When you need extra liquidity, you can deposit your rights tokens as collateral and borrow against them instead of selling on the secondary market. Conversely, you can also act as a lender, supplying liquidity to different lending pools and earning interest over time.
  </div>
    </div>
  )
}

