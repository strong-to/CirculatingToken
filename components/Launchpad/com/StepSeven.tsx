'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import StepSix from './StepSix'

interface StepSevenProps {
  onEnter?: () => void
  launchpadData?: import('../Launchpad').LaunchpadData
}

interface StepSevenPreviewProps {
  showStatus?: boolean
  launchpadData?: import('../Launchpad').LaunchpadData
}

function StepSevenPreview({ showStatus, launchpadData }: StepSevenPreviewProps) {
  const previewMode = !!showStatus
  return (
    <div>
      <StepOne currentStep={0} data={launchpadData?.stepOne} />
      <StepTwo previewMode={previewMode} data={launchpadData?.stepTwo} />
      <StepThree previewMode={previewMode} data={launchpadData?.stepThree} /> 
      <StepFour previewMode={previewMode} data={launchpadData?.stepFour} />
      <StepFive previewMode={previewMode} data={launchpadData?.stepFive} />
      <StepSix previewMode={previewMode} data={launchpadData?.stepSix} />
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

      <div style={{fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: px(20),
        lineHeight: '100%',
        letterSpacing: '0%',
        marginBottom: px(60),
        color: '#8C8C8C',
      }}>Click the image below to preview the comprehensive information of the project in full.</div>
      
      <StepSevenPreview showStatus launchpadData={launchpadData} />
      {/* Enter 按钮 */}
      <div className="flex items-center justify-center" style={{ marginTop: px(60), width: px(1154),marginLeft: px(110) }}>
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

