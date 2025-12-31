'use client'

import FilterDropdown from "@/components/LendingVault/com/FilterDropdown"
import SearchInput from "@/components/LendingVault/com/SearchInput"
import { projectGovernanceData, interactionFormCategories } from "@/components/TokenMarketplace/data/FilterSectionData"
import { px } from "@/utils/pxToRem"
import { useState, useRef, useEffect } from "react"
import * as echarts from 'echarts'
import { Column } from './DataTable'
import PageSelector from "./PageSelector"

interface FinanceContentProps {
  data?: any
}

export default function FinanceContent({ data }: FinanceContentProps) {
  console.log('FinanceContent data:', data)
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

  // 从 JSON 数据中读取表格列定义
  const listColumns: Column[] = data?.listColumns || []

  // 从 JSON 数据中读取表格数据
  const listData = data?.listData || []

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
            placeholder={data?.sortByPlaceholder}
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
            placeholder={data?.subjectPlaceholder}
            description={data?.subjectDescription}
            categories={interactionFormCategories}
          />
        </div>
        <div className="flex-1">
          <FilterDropdown
            placeholder={data?.assetPlaceholder}
            description={data?.assetDescription}
            categories={interactionFormCategories}
          />
        </div>

        {(data?.filterButtons || []).map((label: string, index: number) => (
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
          {(data?.actionButtons || []).map((label: string, index: number) => {
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
                {data?.favoriteProjectButton}
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
                {data?.experienceProjectButton}
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
              {listData.map((row: Record<string, any>, rowIndex: number) => (
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

            <PageSelector 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  )
}

