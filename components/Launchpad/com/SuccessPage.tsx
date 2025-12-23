'use client'

import { px } from '@/utils/pxToRem'

interface SuccessPageProps {
  onDone?: () => void
}

export default function SuccessPage({ onDone }: SuccessPageProps = {} as SuccessPageProps) {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center"
      style={{ paddingTop: px(80), paddingBottom: px(80) }}
    >
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(40),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            marginBottom: px(40),
          }}
        >
          <div style={{marginBottom: px(8)}}>Congratulations, you have successfully created a project</div>
          <div style={{marginBottom: px(8)}}>The details of this project have been published</div>
          <div>in the Project Collection</div>
        </div>

        <div
          style={{
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: px(40),
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
          }}
        >
          <div style={{marginBottom: px(8)}}>
            In addition, the Token information of this project has also been added to
          </div>
          <div style={{marginBottom: px(8)}}>
            the Token Trading Marketplace and Lending Vault at the same time
          </div>
          <div style={{ marginTop: px(60),color: '#8C8C8C' ,fontSize: px(32)}}>
            You can go to view the details, or continue browsing other news of THE4.
          </div>
        </div>
      </div>

     
    </div>
  )
}


