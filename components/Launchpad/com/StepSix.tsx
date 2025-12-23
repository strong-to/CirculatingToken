'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import { formatNumberWithThousands } from './StepFiveNumericUtils'
import StepSixDropdown from '@/components/Launchpad/com/StepSix/StepSixDropdown'

interface StepSixProps {
  onEnter?: () => void
}

export default function StepSix({ onEnter }: StepSixProps = {} as StepSixProps) {
  // Basic Functions 盒子状态
  const [basicPricingMethod, setBasicPricingMethod] = useState('')
  const [basicCustomLeftText, setBasicCustomLeftText] = useState('')
  const [basicCustomQuantities, setBasicCustomQuantities] = useState<string[]>(['', '', '', ''])
  const [basicCustomPrices, setBasicCustomPrices] = useState<string[]>(['', '', '', ''])

  // Advanced Functions 盒子状态
  const [advancedPricingMethod, setAdvancedPricingMethod] = useState('')
  const [advancedCustomLeftText, setAdvancedCustomLeftText] = useState('')
  const [advancedCustomQuantities, setAdvancedCustomQuantities] = useState<string[]>(['', '', '', ''])
  const [advancedCustomPrices, setAdvancedCustomPrices] = useState<string[]>(['', '', '', ''])

  // Refresh 按钮是否已点击
  const [hasRefreshed, setHasRefreshed] = useState(false)

  // 右侧小格子的文案，根据下拉框选择切换
  const bySubscriptionDurationRows: [string, string][] = [
    ['30 Days', '60.00'],
    ['90 Days', '150.00'],
    ['180 Days', '280.00'],
    ['360 Days', '500.00'],
  ]

  const byAchievedResultsRows: [string, string][] = [
    ['1 Level', '5.00'],
    ['2 Level', '20.00'],
    ['3 Level', '60.00'],
    ['4 Level', '150.00'],
  ]

  const byConsumedResourcesRows: [string, string][] = [
    ['1K Tokens', '0.10'],
    ['1M Tokens', '80.00'],
    ['1B Tokens', '50,000.00'],
    ['1T Tokens', '25,000,000.00'],
  ]

  const getRows = (method: string): [string, string][] => {
    if (method === 'By Achieved Results') return byAchievedResultsRows
    if (method === 'By Consumed Resources') return byConsumedResourcesRows
    return bySubscriptionDurationRows
  }

  const basicRows = getRows(basicPricingMethod)
  const advancedRows = getRows(advancedPricingMethod)

  const isBasicCustom = basicPricingMethod === 'Custom'
  const isAdvancedCustom = advancedPricingMethod === 'Custom'

  const randomPrice = () => {
    const raw = (Math.random() * 100000).toFixed(2)
    return formatNumberWithThousands(raw)
  }

  const handleRefreshAll = () => {
    if (hasRefreshed) return

    // 切到自定义模式
    setBasicPricingMethod('Custom')
    setAdvancedPricingMethod('Custom')

    // 左侧文本
    setBasicCustomLeftText('Custom Pricing Method')
    setAdvancedCustomLeftText('Custom Pricing Method')

    // 随机填充数量和价格
    const genQuantities = () =>
      Array.from({ length: 4 }, (_, i) => `${(i + 1) * 10}`)

    const genPrices = () =>
      Array.from({ length: 4 }, () => randomPrice())

    setBasicCustomQuantities(genQuantities())
    setAdvancedCustomQuantities(genQuantities())
    setBasicCustomPrices(genPrices())
    setAdvancedCustomPrices(genPrices())

    setHasRefreshed(true)
  }

  return (
    <div className="flex-1" style={{paddingRight: px(240)}}>
      <div className="flex flex-col items-center justify-between" style={{ marginTop: px(5), marginBottom: px(80), width: px(910) }}>
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
          }}
        >
          Fee Standards and Economic Data Estimation
        </div>
        <div style={{ width: '100%', height: px(18), backgroundColor: 'rgba(151, 151, 151, 0.65)', marginTop: px(-15) }}></div>
      </div>



      <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }} suppressHydrationWarning>
              Fee Standard
                </span>
                Please enter the prompt information in the following text box, or click the control button on the right to let the AI <br/> help you complete the relevant work. Note: The AI can provide this service only once.
                
                 </div>

              <div
                onClick={handleRefreshAll}
                style={{
                  height: px(40),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(14),
                  color: '#ffffff',
                  backgroundColor: '#000000',
                  borderRadius: px(4),
                  paddingLeft: px(26),
                  paddingRight: px(26),
                  cursor: hasRefreshed ? 'default' : 'pointer',
                  opacity: hasRefreshed ? 0.4 : 1,
                }}
              >
                Refresh 
              </div>
          </div>



          {/* 111 & 222 两个盒子 */}
          <div className='w-full flex items-start justify-between' style={{ marginBottom: px(20), gap: px(15) }}>
            {/* 111 盒子 */}
            <div className='flex-1'>
            <div
              style={{
                border: '0.7px solid #000000',
                borderRadius: px(2),
                // 允许内部下拉弹窗溢出显示
                overflow: 'visible',
              }}
            >
                {/* 表头 80px（整体一块，没有内部竖向格子） */}
                <div
                className='flex items-center justify-center'
                  style={{
                    height: px(80),
                    display: 'flex',
                    borderBottom: '0.7px solid #000000',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <div
                  className='flex items-center justify-center'
                    style={{
                      flex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: px(30),
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(20),
                      color: '#000000',
                    }}
                  >
                    Basic Functions
                  </div>
                
                </div>

                {/* 内容区域整体：左边一个大盒子，右边一个大盒子内部再切成格子 */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {/* 左侧大盒子：整块 Pricing/Charging Method 居中 */}
                  {/* 左侧大盒子：中间放一个下拉框 */}
                  <div
                    style={{
                      flex: 2,
                      height: px(44 * 4),
                      borderRight: '0.7px solid #000000',
                      paddingLeft: px(30),
                      paddingRight: px(30),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: px(350) }}>
                      <StepSixDropdown
                        placeholder="Pricing/Charging Method"
                        options={[
                          'By Subscription Duration',
                          'By Achieved Results',
                          'By Consumed Resources',
                          'Custom',
                        ]}
                        value={basicPricingMethod}
                        onChange={(value) => setBasicPricingMethod(value)}
                        isCustom={isBasicCustom}
                        customText={basicCustomLeftText}
                        onCustomTextChange={setBasicCustomLeftText}
                      />
                    </div>
                  </div>

                  {/* 右侧大盒子：内部是 4 行 2 列的小格子 */}
                  <div
                    style={{
                      flex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    {/* 四行小格子，内容 / 输入 根据下拉选择切换 */}
                    {[0, 1, 2, 3].map((rowIndex) => (
                      <div
                        key={rowIndex}
                        style={{
                          height: px(44),
                          display: 'flex',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRight: '0.7px solid #000000',
                            borderTop: rowIndex === 0 ? undefined : '0.7px solid #000000',
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontSize: px(16),
                            color: basicPricingMethod ? '#000000' : '#8C8C8C',
                          }}
                        >
                          {!basicPricingMethod ? (
                            'Quantity/Unit'
                          ) : isBasicCustom ? (
                            <input
                              type="text"
                              value={basicCustomQuantities[rowIndex]}
                              onChange={(e) => {
                                const next = [...basicCustomQuantities]
                                next[rowIndex] = e.target.value
                                setBasicCustomQuantities(next)
                              }}
                              placeholder="Quantity / Unit"
                              style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                outline: 'none',
                                textAlign: 'center',
                                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                fontWeight: 300,
                                fontSize: px(16),
                                color: '#000000',
                              }}
                            />
                          ) : (
                            basicRows[rowIndex]?.[0] || ''
                          )}
                        </div>
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTop: rowIndex === 0 ? undefined : '0.7px solid #000000',
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontSize: px(16),
                            color: '#000000',
                          }}
                        >
                          {/* 内部分成 $ 和 数字两列 */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: px(40),
                              height: '100%',
                            }}
                          >
                            $
                          </div>
                          <div
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingLeft: px(8),
                              paddingRight: px(8),
                            }}
                          >
                            {!basicPricingMethod ? (
                              <span
                                style={{
                                  width: '100%',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#8C8C8C',
                                }}
                              >
                                Price
                              </span>
                            ) : isBasicCustom ? (
                              <input
                                type="text"
                                value={basicCustomPrices[rowIndex]}
                                onChange={(e) => {
                                  const next = [...basicCustomPrices]
                                  next[rowIndex] = e.target.value
                                  setBasicCustomPrices(next)
                                }}
                                onBlur={(e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  const next = [...basicCustomPrices]
                                  next[rowIndex] = formatted
                                  setBasicCustomPrices(next)
                                }}
                                placeholder="0.00"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  border: 'none',
                                  outline: 'none',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#000000',
                                }}
                              />
                            ) : (
                              <input
                                type="text"
                                defaultValue={basicRows[rowIndex]?.[1] || ''}
                                onBlur={(e) => {
                                  e.target.value = formatNumberWithThousands(e.target.value)
                                }}
                                placeholder="0.00"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  border: 'none',
                                  outline: 'none',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#000000',
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 222 盒子 */}
            <div className='flex-1'>
            <div
              style={{
                border: '0.7px solid #000000',
                borderRadius: px(2),
                // 允许内部下拉弹窗溢出显示
                overflow: 'visible',
              }}
            >
                {/* 表头 80px（整体一块，没有内部竖向格子） */}
                <div
                className='flex items-center justify-center'
                  style={{
                    height: px(80),
                    display: 'flex',
                    borderBottom: '0.7px solid #000000',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <div
                  className='flex items-center justify-center'
                    style={{
                      flex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: px(30),
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontSize: px(20),
                      color: '#000000',
                    }}
                  >
                   Advanced Functions
                  </div>
                
                </div>

                {/* 内容区域整体：左边一个大盒子，右边一个大盒子内部再切成格子 */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {/* 左侧大盒子：整块 Pricing/Charging Method 居中 */}
                  {/* 左侧大盒子：中间放一个下拉框 */}
                  <div
                    style={{
                      flex: 2,
                      height: px(44 * 4),
                      borderRight: '0.7px solid #000000',
                      paddingLeft: px(30),
                      paddingRight: px(30),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: px(350) }}>
                      <StepSixDropdown
                        placeholder="Pricing/Charging Method"
                        options={[
                          'By Subscription Duration',
                          'By Achieved Results',
                          'By Consumed Resources',
                          'Custom',
                        ]}
                        value={advancedPricingMethod}
                        onChange={(value) => setAdvancedPricingMethod(value)}
                        isCustom={isAdvancedCustom}
                        customText={advancedCustomLeftText}
                        onCustomTextChange={setAdvancedCustomLeftText}
                      />
                    </div>
                  </div>

                  {/* 右侧大盒子：内部是 4 行 2 列的小格子 */}
                  <div
                    style={{
                      flex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    {/* 四行小格子，内容 / 输入 根据下拉选择切换 */}
                    {[0, 1, 2, 3].map((rowIndex) => (
                      <div
                        key={rowIndex}
                        style={{
                          height: px(44),
                          display: 'flex',
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRight: '0.7px solid #000000',
                            borderTop: rowIndex === 0 ? undefined : '0.7px solid #000000',
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontSize: px(16),
                            color: advancedPricingMethod ? '#000000' : '#8C8C8C',
                          }}
                        >
                          {!advancedPricingMethod ? (
                            'Quantity/Unit'
                          ) : isAdvancedCustom ? (
                            <input
                              type="text"
                              value={advancedCustomQuantities[rowIndex]}
                              onChange={(e) => {
                                const next = [...advancedCustomQuantities]
                                next[rowIndex] = e.target.value
                                setAdvancedCustomQuantities(next)
                              }}
                              placeholder="Quantity / Unit"
                              style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                outline: 'none',
                                textAlign: 'center',
                                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                fontWeight: 300,
                                fontSize: px(16),
                                color: '#000000',
                              }}
                            />
                          ) : (
                            advancedRows[rowIndex]?.[0] || ''
                          )}
                        </div>
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTop: rowIndex === 0 ? undefined : '0.7px solid #000000',
                            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                            fontWeight: 300,
                            fontSize: px(16),
                            color: '#000000',
                          }}
                        >
                          {/* 内部分成 $ 和 数字两列 */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: px(40),
                              height: '100%',
                            }}
                          >
                            $
                          </div>
                          <div
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingLeft: px(8),
                              paddingRight: px(8),
                            }}
                          >
                            {!advancedPricingMethod ? (
                              <span
                                style={{
                                  width: '100%',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#8C8C8C',
                                }}
                              >
                                Price
                              </span>
                            ) : isAdvancedCustom ? (
                              <input
                                type="text"
                                value={advancedCustomPrices[rowIndex]}
                                onChange={(e) => {
                                  const next = [...advancedCustomPrices]
                                  next[rowIndex] = e.target.value
                                  setAdvancedCustomPrices(next)
                                }}
                                onBlur={(e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  const next = [...advancedCustomPrices]
                                  next[rowIndex] = formatted
                                  setAdvancedCustomPrices(next)
                                }}
                                placeholder="0.00"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  border: 'none',
                                  outline: 'none',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#000000',
                                }}
                              />
                            ) : (
                              <input
                                type="text"
                                defaultValue={advancedRows[rowIndex]?.[1] || ''}
                                onBlur={(e) => {
                                  e.target.value = formatNumberWithThousands(e.target.value)
                                }}
                                placeholder="0.00"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  border: 'none',
                                  outline: 'none',
                                  textAlign: 'center',
                                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                                  fontWeight: 300,
                                  fontSize: px(16),
                                  color: '#000000',
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>











 {/* 底部 Enter 按钮 */}
 <div className="flex items-center justify-center" style={{ marginTop: px(60), marginRight: px(290) }}>
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
            width: px(200),
            height: px(50),
            backgroundColor: '#000000',
            borderRadius: px(4),
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Enter
        </button>
      </div>
    </div>
  )
}

