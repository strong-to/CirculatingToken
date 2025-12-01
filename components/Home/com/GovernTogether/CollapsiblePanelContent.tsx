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

        As a Contract-based organization inside the DeepBlue economic ecosystem, 100% of the economic rights of every AI project in THE4 are encoded into its Contract tokens. Anyone holding those tokens becomes a co-owner of that project’s future cash flow and governance.
At the community layer, THE4 is organized as a Covenant: its community token represents the collective rights and responsibilities of all participants. Holders of the Covenant token can propose and vote on governance matters that shape the direction of THE4.
       
         </div>
    </div>
  )
}

