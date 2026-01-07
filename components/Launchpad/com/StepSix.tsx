'use client'

import { useState, useEffect } from 'react'
import { px } from '@/utils/pxToRem'
import { formatNumberWithThousands } from './StepFiveNumericUtils'
import StepSixDropdown from '@/components/Launchpad/com/StepSix/StepSixDropdown'
import { StepTitleBar, StepNextButton } from './StepCommon'

interface StepSixProps {
  onEnter?: () => void
  previewMode?: boolean
  data?: import('../Launchpad').StepSixData
  onDataChange?: (data: Partial<import('../Launchpad').StepSixData>) => void
}

export default function StepSix({ onEnter, previewMode, data, onDataChange }: StepSixProps = {} as StepSixProps) {
  // 从 data.texts 获取文案，如果没有则使用默认值
  const texts = data?.texts || {
    title: "Fee Standards and Economic Data Estimation",
    feeStandardSection: {
      label: "Fee Standard",
      description: "Please enter the prompt information in the following text box, or click the control button on the right to let the AI help you complete the relevant work. Note: The AI can provide this service only once.",
      refreshButton: "Refresh"
    },
    economicDataSection: {
      label: "Economic Data Estimation",
      description: "Please enter the prompt information in the following text box, or click the control button on the right to let the AI help you complete the relevant work. Note: The AI can provide this service only once.",
      refreshButton: "Refresh"
    },
    nextButton: "Next"
  }

  // 从 data.tableLabels 获取表格标签，如果没有则使用默认值
  const tableLabels = data?.tableLabels || {
    basicFunctions: "Basic Functions",
    advancedFunctions: "Advanced Functions",
    accountColumn: "Account",
    monthColumns: ['3 Months', '6 Months', '12 Months', '24Months', '36Months', '48months', '60Months'],
    accountRows: [
      'Total Users',
      'Cumulative Operating Revenue',
      'Cumulative Net Profit',
      'Token Minting Amount',
      'Token Bid and Ask Prices',
      'Staking Ratio',
    ]
  }

  // 从 data.pricingOptions 获取定价选项，如果没有则使用默认值
  const pricingOptions = data?.pricingOptions || [
    'By Subscription Duration',
    'By Achieved Results',
    'By Consumed Resources',
    'Custom',
  ]

  // 从 data.pricingMethodLabels 获取定价方法标签，如果没有则使用默认值
  const pricingMethodLabels = data?.pricingMethodLabels || {
    placeholder: "Pricing/Charging Method",
    quantityUnit: "Quantity/Unit",
    price: "$",
    pricePlaceholder: "0.00"
  }

  // 从 data.pricingMethodData 获取定价方法数据，如果没有则使用默认值
  const pricingMethodData = data?.pricingMethodData || {
    bySubscriptionDuration: [
      ['30 Days', '60.00'],
      ['90 Days', '150.00'],
      ['180 Days', '280.00'],
      ['360 Days', '500.00'],
    ],
    byAchievedResults: [
      ['1 Item', '5.00'],
      ['5 Item', '20.00'],
      ['20 Item', '60.00'],
      ['60 Item', '150.00'],
    ],
    byConsumedResources: [
      ['1K Tokens', '0.10'],
      ['1M Tokens', '80.00'],
      ['1B Tokens', '50,000.00'],
      ['1T Tokens', '25,000,000.00'],
    ]
  }

  // Economic Data Estimation 表格：6 行（账户），7 列（月数）
  const accountRows = tableLabels.accountRows
  const monthColumns = tableLabels.monthColumns

  // Basic Functions 盒子状态
  const [basicPricingMethod, setBasicPricingMethod] = useState(data?.basicPricingMethod || '')
  const [basicCustomLeftText, setBasicCustomLeftText] = useState(data?.basicCustomLeftText || '')
  const [basicCustomQuantities, setBasicCustomQuantities] = useState<string[]>(
    data?.basicCustomQuantities || ['', '', '', '']
  )
  const [basicCustomPrices, setBasicCustomPrices] = useState<string[]>(
    data?.basicCustomPrices || ['', '', '', '']
  )

  // Advanced Functions 盒子状态
  const [advancedPricingMethod, setAdvancedPricingMethod] = useState(data?.advancedPricingMethod || '')
  const [advancedCustomLeftText, setAdvancedCustomLeftText] = useState(data?.advancedCustomLeftText || '')
  const [advancedCustomQuantities, setAdvancedCustomQuantities] = useState<string[]>(
    data?.advancedCustomQuantities || ['', '', '', '']
  )
  const [advancedCustomPrices, setAdvancedCustomPrices] = useState<string[]>(
    data?.advancedCustomPrices || ['', '', '', '']
  )

  const [economicTableValues, setEconomicTableValues] = useState<string[][]>(
    data?.economicTableValues || accountRows.map(() => monthColumns.map(() => ''))
  )

  // 同步外部数据变化
  useEffect(() => {
    if (data) {
      setBasicPricingMethod(data.basicPricingMethod)
      setBasicCustomLeftText(data.basicCustomLeftText)
      setBasicCustomQuantities(data.basicCustomQuantities)
      setBasicCustomPrices(data.basicCustomPrices)
      setAdvancedPricingMethod(data.advancedPricingMethod)
      setAdvancedCustomLeftText(data.advancedCustomLeftText)
      setAdvancedCustomQuantities(data.advancedCustomQuantities)
      setAdvancedCustomPrices(data.advancedCustomPrices)
      setEconomicTableValues(data.economicTableValues)
    }
  }, [data])

  // 上面 Fee Standard 区域的 Refresh 按钮是否已点击
  const [hasRefreshed, setHasRefreshed] = useState(false)

  // 下面 Economic Data Estimation 区域的 Refresh 按钮是否已点击
  const [hasEconomicRefreshed, setHasEconomicRefreshed] = useState(false)

  // 根据下拉框选择获取对应的定价方法数据
  const getRows = (method: string): [string, string][] => {
    if (method === 'By Achieved Results') return pricingMethodData.byAchievedResults
    if (method === 'By Consumed Resources') return pricingMethodData.byConsumedResources
    return pricingMethodData.bySubscriptionDuration
  }

  const basicRows = getRows(basicPricingMethod)
  const advancedRows = getRows(advancedPricingMethod)

  const isBasicCustom = basicPricingMethod === 'Custom'
  const isAdvancedCustom = advancedPricingMethod === 'Custom'

  const randomPrice = () => {
    const raw = (Math.random() * 100000).toFixed(2)
    return formatNumberWithThousands(raw)
  }

  // 限制输入只能为数字（包括小数点和千分位逗号）
  const handleNumericInput = (value: string): string => {
    // 移除所有非数字、非小数点、非逗号的字符
    return value.replace(/[^\d.,]/g, '')
  }

  // 更新状态并同步到父组件
  const updateStepSixData = (updates: Partial<import('../Launchpad').StepSixData>) => {
    if (updates.basicPricingMethod !== undefined) setBasicPricingMethod(updates.basicPricingMethod)
    if (updates.basicCustomLeftText !== undefined) setBasicCustomLeftText(updates.basicCustomLeftText)
    if (updates.basicCustomQuantities !== undefined) setBasicCustomQuantities(updates.basicCustomQuantities)
    if (updates.basicCustomPrices !== undefined) setBasicCustomPrices(updates.basicCustomPrices)
    if (updates.advancedPricingMethod !== undefined) setAdvancedPricingMethod(updates.advancedPricingMethod)
    if (updates.advancedCustomLeftText !== undefined) setAdvancedCustomLeftText(updates.advancedCustomLeftText)
    if (updates.advancedCustomQuantities !== undefined) setAdvancedCustomQuantities(updates.advancedCustomQuantities)
    if (updates.advancedCustomPrices !== undefined) setAdvancedCustomPrices(updates.advancedCustomPrices)
    if (updates.economicTableValues !== undefined) setEconomicTableValues(updates.economicTableValues)
    onDataChange?.(updates)
  }

  const handleRefreshAll = () => {
    if (hasRefreshed) return

    // 随机填充数量和价格
    const genQuantities = () =>
      Array.from({ length: 4 }, (_, i) => `${(i + 1) * 10}`)

    const genPrices = () =>
      Array.from({ length: 4 }, () => randomPrice())

    updateStepSixData({
      basicPricingMethod: 'Custom',
      advancedPricingMethod: 'Custom',
      basicCustomLeftText: 'Custom Pricing Method',
      advancedCustomLeftText: 'Custom Pricing Method',
      basicCustomQuantities: genQuantities(),
      advancedCustomQuantities: genQuantities(),
      basicCustomPrices: genPrices(),
      advancedCustomPrices: genPrices(),
    })

    setHasRefreshed(true)
  }

  const handleEconomicRefresh = () => {
    if (hasEconomicRefreshed) return

    const next = accountRows.map(() =>
      monthColumns.map(() => randomPrice())
    )
    updateStepSixData({ economicTableValues: next })
    setHasEconomicRefreshed(true)
  }

  return (
    <>
      {!previewMode ? (
        <StepTitleBar
          title={texts.title}
          barColor="rgba(151, 151, 151, 0.65)"
          width={910}
          marginTop={5}
          marginBottom={80}
        />
      ) : (
        <div style={{
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontWeight: 300,
          fontSize: px(35),
          color: '#000000',
          marginTop: px(60),
        }}>{texts.title}</div>
      )}


<div style={{marginTop: px(20)}} >
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
            {texts.feeStandardSection.label}
                </span>
                {!previewMode ? (
                  <span 
                    dangerouslySetInnerHTML={{ __html: texts.feeStandardSection.description.replace(/<br\/>/g, '<br/>') }}
                  />
                ) : ''}
                
          </div>

              {!previewMode && (
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
              )}
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
                    {tableLabels.basicFunctions}
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
                        placeholder={pricingMethodLabels.placeholder}
                        options={pricingOptions}
                        value={basicPricingMethod}
                        onChange={previewMode ? undefined : (value) => updateStepSixData({ basicPricingMethod: value })}
                        isCustom={isBasicCustom}
                        customText={basicCustomLeftText}
                        onCustomTextChange={previewMode ? undefined : (text) => updateStepSixData({ basicCustomLeftText: text })}
                        previewMode={previewMode}
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
                            pricingMethodLabels.quantityUnit
                          ) : isBasicCustom ? (
                            <input
                              type="text"
                              value={basicCustomQuantities[rowIndex]}
                              onChange={previewMode ? undefined : (e) => {
                                const next = [...basicCustomQuantities]
                                next[rowIndex] = e.target.value
                                updateStepSixData({ basicCustomQuantities: next })
                              }}
                              placeholder={previewMode ? '' : pricingMethodLabels.quantityUnit}
                              readOnly={previewMode}
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
                            {pricingMethodLabels.price}
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
                                onChange={previewMode ? undefined : (e) => {
                                  const numericValue = handleNumericInput(e.target.value)
                                  const next = [...basicCustomPrices]
                                  next[rowIndex] = numericValue
                                  updateStepSixData({ basicCustomPrices: next })
                                }}
                                onBlur={previewMode ? undefined : (e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  const next = [...basicCustomPrices]
                                  next[rowIndex] = formatted
                                  updateStepSixData({ basicCustomPrices: next })
                                }}
                                placeholder={previewMode ? '' : pricingMethodLabels.pricePlaceholder}
                                readOnly={previewMode}
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
                                key={`basic-price-${basicPricingMethod}-${rowIndex}`}
                                type="text"
                                defaultValue={basicRows[rowIndex]?.[1] || ''}
                                onChange={(e) => {
                                  const numericValue = handleNumericInput(e.target.value)
                                  e.target.value = numericValue
                                }}
                                onBlur={(e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  e.target.value = formatted
                                }}
                                placeholder={pricingMethodLabels.pricePlaceholder}
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
                   {tableLabels.advancedFunctions}
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
                        placeholder={pricingMethodLabels.placeholder}
                        options={pricingOptions}
                        value={advancedPricingMethod}
                        onChange={previewMode ? undefined : (value) => updateStepSixData({ advancedPricingMethod: value })}
                        isCustom={isAdvancedCustom}
                        customText={advancedCustomLeftText}
                        onCustomTextChange={previewMode ? undefined : (text) => updateStepSixData({ advancedCustomLeftText: text })}
                        previewMode={previewMode}
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
                            pricingMethodLabels.quantityUnit
                          ) : isAdvancedCustom ? (
                            <input
                              type="text"
                              value={advancedCustomQuantities[rowIndex]}
                              onChange={previewMode ? undefined : (e) => {
                                const next = [...advancedCustomQuantities]
                                next[rowIndex] = e.target.value
                                updateStepSixData({ advancedCustomQuantities: next })
                              }}
                              placeholder={previewMode ? '' : pricingMethodLabels.quantityUnit}
                              readOnly={previewMode}
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
                            {pricingMethodLabels.price}
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
                                onChange={previewMode ? undefined : (e) => {
                                  const numericValue = handleNumericInput(e.target.value)
                                  const next = [...advancedCustomPrices]
                                  next[rowIndex] = numericValue
                                  updateStepSixData({ advancedCustomPrices: next })
                                }}
                                onBlur={previewMode ? undefined : (e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  const next = [...advancedCustomPrices]
                                  next[rowIndex] = formatted
                                  updateStepSixData({ advancedCustomPrices: next })
                                }}
                                placeholder={previewMode ? '' : pricingMethodLabels.pricePlaceholder}
                                readOnly={previewMode}
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
                                key={`advanced-price-${advancedPricingMethod}-${rowIndex}`}
                                type="text"
                                defaultValue={advancedRows[rowIndex]?.[1] || ''}
                                onChange={(e) => {
                                  const numericValue = handleNumericInput(e.target.value)
                                  e.target.value = numericValue
                                }}
                                onBlur={(e) => {
                                  const formatted = formatNumberWithThousands(e.target.value)
                                  e.target.value = formatted
                                }}
                                placeholder={pricingMethodLabels.pricePlaceholder}
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
              {texts.economicDataSection.label}
                </span>
                {!previewMode ? texts.economicDataSection.description : ''}
          </div>

              {!previewMode && (
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
                  {texts.economicDataSection.refreshButton} 
                </div>
              )}
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
                {tableLabels.accountColumn}
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
                  height: px(50),
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
                  lineHeight: '1.2',
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
                      onChange={previewMode ? undefined : (e) => {
                        const numericValue = handleNumericInput(e.target.value)
                        const next = economicTableValues.map((row) => [...row])
                        next[rowIndex][colIndex] = numericValue
                        updateStepSixData({ economicTableValues: next })
                      }}
                      onBlur={previewMode ? undefined : (e) => {
                        const formatted = formatNumberWithThousands(e.target.value)
                        const next = economicTableValues.map((row) => [...row])
                        next[rowIndex][colIndex] = formatted
                        updateStepSixData({ economicTableValues: next })
                      }}
                      placeholder={previewMode ? '' : "0.00"}
                      readOnly={previewMode}
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
           
          

      </div>

      {/* 底部 Enter 按钮 */}
{!previewMode && <StepNextButton onClick={onEnter} label={texts.nextButton} />}
    </>
  )
}

