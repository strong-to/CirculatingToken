'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import { formatNumberWithThousands } from './StepFiveNumericUtils'
import StepSixDropdown from '@/components/Launchpad/com/StepSix/StepSixDropdown'
import { StepTitleBar, StepNextButton } from './StepCommon'

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

  // Economic Data Estimation 表格：6 行（账户），7 列（月数）
  const accountRows = [
    'Total Users',
    'Cumulative Operating Revenue',
    'Cumulative Net Profit',
    'Token Minting Amount',
    'Token Bid and Ask Prices',
    'Staking Ratio',
  ]
  const monthColumns = ['3 Months', '6 Months', '12 Months', '24Months', '36Months', '48months', '60Months']
  const [economicTableValues, setEconomicTableValues] = useState<string[][]>(
    () => accountRows.map(() => monthColumns.map(() => ''))
  )

  // 上面 Fee Standard 区域的 Refresh 按钮是否已点击
  const [hasRefreshed, setHasRefreshed] = useState(false)

  // 下面 Economic Data Estimation 区域的 Refresh 按钮是否已点击
  const [hasEconomicRefreshed, setHasEconomicRefreshed] = useState(false)

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

  const handleEconomicRefresh = () => {
    if (hasEconomicRefreshed) return

    const next = accountRows.map(() =>
      monthColumns.map(() => randomPrice())
    )
    setEconomicTableValues(next)
    setHasEconomicRefreshed(true)
  }

  return (
    <>
      <StepTitleBar
        title="Fee Standards and Economic Data Estimation"
        barColor="rgba(151, 151, 151, 0.65)"
        width={910}
        marginTop={5}
        marginBottom={80}
      />



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
          <div className='w-full flex items-start justify-between' style={{ marginBottom: px(82), gap: px(15) }}>
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
              Economic Data Estimation
                </span>
                Please enter the prompt information in the following text box, or click the control button on the right to let the AI help you complete the relevant work. Note: The AI can provide this service only once.
                 </div>

              <div
                onClick={handleEconomicRefresh}
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
                  cursor: hasEconomicRefreshed ? 'default' : 'pointer',
                  opacity: hasEconomicRefreshed ? 0.4 : 1,
                 
                }}
              >
                Refresh 
              </div>
          </div>


          {/* Economic Data Estimation 表格 */}
          <div
            style={{
              border: '0.7px solid #000000',
              borderRadius: px(2),
              overflow: 'hidden',
            }}
          >
            {/* 表头行 */}
            <div
              style={{
                display: 'flex',
                height: px(44),
              }}
            >
              {/* 第一列表头 */}
              <div
                style={{
                  width: px(219),
                  borderRight: '0.7px solid #000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(16),
                  color: '#000000',
                }}
              >
                Account
              </div>
              {/* 其余 7 列表头 */}
              {monthColumns.map((col) => (
                <div
                  key={col}
                  style={{
                    flex: 1,
                    borderRight: '0.7px solid #000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(16),
                    color: '#000000',
                  }}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* 数据行 */}
            {accountRows.map((account, rowIndex) => (
              <div
                key={account}
                style={{
                  display: 'flex',
                  height: px(44),
                  borderTop: '0.7px solid #000000',
                }}
              >
                {/* 第一列：账户名称（固定文案） */}
                <div
                  style={{
                    width: px(219),
                    borderRight: '0.7px solid #000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: px(12),
                    paddingRight: px(12),
                    textAlign: 'center',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontSize: px(16),
                    color: '#000000',
                  }}
                >
                  {account}
                </div>

                {/* 其余 7 列：可输入 */}
                {monthColumns.map((col, colIndex) => (
                  <div
                    key={col}
                    style={{
                      flex: 1,
                      borderRight: '0.7px solid #000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <input
                      type="text"
                      value={economicTableValues[rowIndex][colIndex]}
                      onChange={(e) => {
                        const next = economicTableValues.map((row) => [...row])
                        next[rowIndex][colIndex] = e.target.value
                        setEconomicTableValues(next)
                      }}
                      onBlur={(e) => {
                        const formatted = formatNumberWithThousands(e.target.value)
                        const next = economicTableValues.map((row) => [...row])
                        next[rowIndex][colIndex] = formatted
                        setEconomicTableValues(next)
                      }}
                      placeholder="666,111.00"
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
                  </div>
                ))}
              </div>
            ))}
          </div>
 




{/* 底部 Enter 按钮 */}
<StepNextButton onClick={onEnter} label="Next" />
    </>
  )
}

