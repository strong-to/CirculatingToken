'use client'

import FilterDropdown from "@/components/LendingVault/com/FilterDropdown"
import SearchInput from "@/components/LendingVault/com/SearchInput"
import { projectGovernanceData, interactionFormCategories } from "@/components/TokenMarketplace/data/FilterSectionData"
import { px } from "@/utils/pxToRem"
import { useState, useRef, useEffect } from "react"
import * as echarts from 'echarts'
import DataTable, { Column } from './DataTable'
import PageSelector from "./PageSelector"
import { useRouter } from 'next/navigation'

interface ProposalContentProps {
  data?: any
  system_id?: string
}

export default function ProposalContent({ data, system_id }: ProposalContentProps) {
  console.log('ProposalContent data:', data)
  const router = useRouter()
  const [selectedView, setSelectedView] = useState<'Diagram' | 'List'>('List')
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<echarts.ECharts | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // 从 JSON 数据中读取表格列定义
  const columns: Column[] = data?.columns || []
  
  // 从 JSON 数据中读取表格数据（支持多页数据）
  // 如果 data.tableDataPages 存在（多页数据），则根据 currentPage 选择对应页的数据
  // 否则使用 data.tableData（单页数据，向后兼容）
  const tableDataPages = data?.tableDataPages || []
  const totalPages = tableDataPages.length > 0 ? tableDataPages.length : 7
  const tableData = tableDataPages.length > 0 
    ? (tableDataPages[currentPage - 1] || [])
    : (data?.tableData || [])


  
  

  const handleViewChange = (value: string) => {
    const view = value as 'Diagram' | 'List'
    setSelectedView(view)
  }


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
          <SearchInput />
          </div>
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
            placeholder={data?.interactionFormPlaceholder}
            description={data?.interactionFormDescription}
            categories={interactionFormCategories}
          />
        </div>
        <div className="flex-1">
          <button
            className="flex-1 transition-colors cursor-pointer w-full"
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
            {data?.submitProposalButton}
          </button>
        </div>

     
      </div>

      {/* 图表 */}
      <div className="w-full" style={{ paddingLeft: px(80), paddingRight: px(80), marginTop: px(20) }}>

        <div 
          onClick={() => router.push(`/InitiateProposal${system_id ? `?system_id=${system_id}` : ''}`)}
               style={{
            width: px(230), 
            cursor: 'pointer', 
                 borderRadius: px(4),
            marginBottom: px(20), 
            height: px(44), 
            backgroundColor: '#000000',
            color: '#ffffff',
                   fontFamily: 'PingFang SC',
                   fontWeight: 400,
                   fontStyle: 'normal',
                   fontSize: px(16),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.625 9.375H18.125V10.625H10.625V18.125H9.375V10.625H1.875V9.375H9.375V1.875H10.625V9.375Z" fill="white"/>
          </svg>
          <span style={{marginLeft: px(8)}}>Initiate Proposal</span>
        </div>
          
      <DataTable columns={columns} data={tableData} system_id={system_id} />

       {/* Pagination Controls */}
       <div style={{ marginTop: px(50)}}>
         <PageSelector 
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={setCurrentPage}
         />
       </div>
      </div>
    </div>
  )
}

