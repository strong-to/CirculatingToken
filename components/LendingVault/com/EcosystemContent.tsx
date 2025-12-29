'use client'

import FilterDropdown from "@/components/LendingVault/com/FilterDropdown"
import SearchInput from "@/components/LendingVault/com/SearchInput"
import { projectGovernanceData, interactionFormCategories } from "@/components/TokenMarketplace/data/FilterSectionData"
import { px } from "@/utils/pxToRem"
import { useState, useRef, useEffect } from "react"
import * as echarts from 'echarts'
import { Column } from './DataTable'

export default function EcosystemContent() {
  const [selectedView, setSelectedView] = useState<'Diagram' | 'List'>('List')
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<echarts.ECharts | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const totalPages = 7

  const handleViewChange = (value: string) => {
    const view = value as 'Diagram' | 'List'
    setSelectedView(view)
  }

  // 列表表格列定义
  const listColumns: Column[] = [
    { key: 'time', label: 'time', width: 200 },
    { key: 'newUsage', label: 'Newly Added Usage Count', width: 'flex' },
    { key: 'cumulativeUsage', label: 'Cumulative Usage Count', width: 'flex' },
    { key: 'newRecommendation', label: 'Newly Added Recommendation Count', width: 'flex' },
    { key: 'cumulativeRecommendation', label: 'Cumulative Recommendation Count', width: 'flex' },
    { key: 'newConstruction', label: 'Newly Added Construction Count', width: 'flex' },
    { key: 'cumulativeConstruction', label: 'Cumulative Construction Count', width: 'flex' },
  ]

  // 列表表格数据
  const listData = Array.from({ length: 6 }, (_, index) => {
    const dates = ['14:59-08-07-2026', '14:59-07-07-2026', '14:59-06-07-2026', '14:59-05-07-2026', '14:59-04-07-2026', '14:59-03-07-2026']
    return {
      time: dates[index],
      newUsage: '666',
      cumulativeUsage: '888',
      newRecommendation: '222',
      cumulativeRecommendation: '333',
      newConstruction: '220',
      cumulativeConstruction: '110',
    }
  })

  // 初始化图表
  useEffect(() => {
    // 只有在 Diagram 模式下才初始化图表
    if (selectedView !== 'Diagram' || !chartRef.current) return

    // 如果已经存在实例，先销毁
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose()
    }

    // 创建新的图表实例
    const chartInstance = echarts.init(chartRef.current)
    chartInstanceRef.current = chartInstance

    // 配置选项
    const option = {
      grid: {
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    }

    // 设置配置项
    chartInstance.setOption(option)

    // 响应式调整
    const handleResize = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize()
      }
    }
    window.addEventListener('resize', handleResize)

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose()
        chartInstanceRef.current = null
      }
    }
  }, [selectedView])

  return (
    <div className="w-full">
      {/* 筛选框 */}
      <div className='flex items-center' style={{ width: '100%', marginTop: px(15), gap: px(15), paddingLeft: px(80), paddingRight: px(80) }}>
        <div className="flex-1">
          <FilterDropdown
            placeholder="Sort by"
            description=""
            options={projectGovernanceData}
            value={selectedView}
            onChange={(value) => {
              if (value === 'Diagram' || value === 'List') {
                handleViewChange(value)
              }
            }}
          />
        </div>

        <div className="flex-1">
          <FilterDropdown
            placeholder="Interaction / Form"
            description="Which of the following ways would you like to interact with AI?"
            categories={interactionFormCategories}
          />
        </div>

        {['Use', 'Recommend', 'Construct', '2024-11--2024-11-21'].map((label, index) => (
          <button
            key={index}
            className="flex-1 transition-colors cursor-pointer"
            style={{
              height: px(44),
              border: '1px solid #000000',
              borderRadius: px(4),
              backgroundColor: '#ffffff',
              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: px(16),
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000000'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#000000'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.borderColor = '#000000'
            }}
          >
            {label}
          </button>
        ))}

        <div className="flex-1 flex" style={{ gap: px(15) }}>
          {['Search', 'Reset'].map((label, index) => {
            const isSearch = label === 'Search'
            return (
              <button
                key={index}
                className="flex-1 transition-colors cursor-pointer"
                style={{
                  height: px(44),
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  backgroundColor: '#ffffff',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: px(8),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.borderColor = '#000000'
                  // 更新图标颜色
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) {
                    const paths = svg.querySelectorAll('path')
                    paths.forEach(path => {
                      path.setAttribute('fill', '#ffffff')
                    })
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.style.color = '#000000'
                  e.currentTarget.style.borderColor = '#000000'
                  // 更新图标颜色
                  const svg = e.currentTarget.querySelector('svg')
                  if (svg) {
                    const paths = svg.querySelectorAll('path')
                    paths.forEach(path => {
                      path.setAttribute('fill', '#000000')
                    })
                  }
                }}
              >
                {isSearch && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M12.6818 6.99964C12.6818 4.06248 10.3008 1.68146 7.36366 1.68146C4.42653 1.6815 2.04548 4.06253 2.04548 6.99964C2.04548 9.93676 4.42653 12.3178 7.36366 12.3178V13.136C3.97467 13.136 1.22729 10.3886 1.22729 6.99964C1.22729 3.61065 3.97467 0.86332 7.36366 0.863281C10.7527 0.863281 13.5 3.61062 13.5 6.99964C13.5 10.3887 10.7527 13.136 7.36366 13.136V12.3178C10.3008 12.3178 12.6818 9.93681 12.6818 6.99964Z" fill="black"/>
                    <path d="M17.0268 15.6354L16.5186 16.277L11.25 12.2744L11.7582 11.6328L17.0268 15.6354Z" fill="black"/>
                  </svg>
                )}
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 图表 */}
      <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(20) }}>
        {selectedView === 'Diagram' && (
          <div className="bg-[#F5F5F5] w-full" style={{ height: px(473) }}>
            <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>

            <div className='flex items-center justify-center' style={{ marginTop: px(50), gap: px(16) }}>
              <button
                className="flex items-center justify-center transition-colors cursor-pointer"
                style={{
                  width: px(206),
                  height: px(44),
                  backgroundColor: '#ffffff',
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#000000',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.borderColor = '#000000'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.style.color = '#000000'
                  e.currentTarget.style.borderColor = '#000000'
                }}
              >
                Favorite Project
              </button>

              <button
                className="flex items-center justify-center transition-colors cursor-pointer"
                style={{
                  height: px(44),
                  paddingLeft: px(24),
                  paddingRight: px(24),
                  backgroundColor: '#ffffff',
                  border: '1px solid #000000',
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#000000',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.borderColor = '#000000'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.style.color = '#000000'
                  e.currentTarget.style.borderColor = '#000000'
                }}
              >
                Experience the Project
              </button>
            </div>
          </div>
        )}

        {selectedView === 'List' && (
          <div className="w-full">
            {/* 表格 */}
            <div className="w-full" style={{ borderTop: '0.5px solid #e0e0e0', borderBottom: '0.5px solid #e0e0e0' }}>
              {/* 表头 */}
              <div className="flex" style={{ borderBottom: '0.5px solid #e0e0e0' }}>
                {listColumns.map((column) => (
                  <div
                    key={column.key}
                    style={{
                      width: column.width === 'flex' ? undefined : typeof column.width === 'number' ? px(column.width) : column.width,
                      flex: column.width === 'flex' ? 1 : undefined,
                      height: px(74),
                      padding: px(16),
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'PingFang SC',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: px(16),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#000000',
                      }}
                    >
                      {column.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 表格数据行 */}
              {listData.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex"
                  style={{
                    borderBottom: rowIndex < listData.length - 1 ? '0.5px solid #e0e0e0' : 'none',
                  }}
                >
                  {listColumns.map((column) => (
                    <div
                      key={column.key}
                      style={{
                        width: column.width === 'flex' ? undefined : typeof column.width === 'number' ? px(column.width) : column.width,
                        flex: column.width === 'flex' ? 1 : undefined,
                        height: px(74),
                        padding: px(16),
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'PingFang SC',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: px(16),
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#000000',
                        }}
                      >
                        {(row as Record<string, any>)[column.key] ?? ''}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-end" style={{ marginTop: px(20), marginBottom: px(50) }}>
              <div className="flex items-center" style={{ gap: px(16), marginRight: px(30) }}>
                <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                  Total {listData.length} items
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    padding: px(4),
                    border: '1px solid #e0e0e0',
                    borderRadius: px(4),
                  }}
                >
                  <option value={10}>10 items/page</option>
                  <option value={20}>20 items/page</option>
                  <option value={50}>50 items/page</option>
                </select>
              </div>

              <div className="flex items-center" style={{ gap: px(8) }}>
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    width: px(30),
                    height: px(30),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    borderRadius: px(4),
                    backgroundColor: currentPage === 1 ? '#f5f5f5' : '#F0F2F5',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    color: currentPage === 1 ? '#999999' : '#000000',
                  }}
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      fontFamily: 'PingFang SC',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: px(16),
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      width: px(30),
                      height: px(30),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #e0e0e0',
                      borderRadius: px(4),
                      backgroundColor: currentPage === page ? '#000000' : '#F0F2F5',
                      color: currentPage === page ? '#ffffff' : '#000000',
                      cursor: 'pointer',
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    fontFamily: 'PingFang SC',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: px(16),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    width: px(30),
                    height: px(30),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    borderRadius: px(4),
                    backgroundColor: currentPage === totalPages ? '#f5f5f5' : '#F0F2F5',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    color: currentPage === totalPages ? '#999999' : '#000000',
                  }}
                >
                  &gt;
                </button>
                <div className="flex items-center" style={{ gap: px(8), marginLeft: px(16) }}>
                  <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                    Go to
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = Number(e.target.value)
                      if (page >= 1 && page <= totalPages) {
                        setCurrentPage(page)
                      }
                    }}
                    style={{
                      fontFamily: 'PingFang SC',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: px(16),
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      width: px(50),
                      padding: px(4),
                      border: '1px solid #e0e0e0',
                      borderRadius: px(4),
                      textAlign: 'center',
                    }}
                  />
                  <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                    page
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

