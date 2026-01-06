'use client'

import { px } from '@/utils/pxToRem'
import { useRouter } from 'next/navigation'

export interface Column {
  key: string
  label: string
  width?: number | string // 数字表示 px，'flex' 表示 flex: 1
}

export interface DataTableProps {
  columns: Column[]
  data: Record<string, any>[]
  rowHeight?: number
  rowGap?: number
  cellPadding?: number
  system_id?: string
}

export default function DataTable({
  columns,
  data,
  rowHeight = 70,
  rowGap = 20,
  cellPadding = 16,
  system_id,
}: DataTableProps) {
  const router = useRouter()

  const handleRowClick = (row: Record<string, any>, index: number) => {
    // 保存当前滚动位置
    const scrollContainer = document.querySelector('[data-scroll-container="lending-vault"]') as HTMLElement
    if (scrollContainer) {
      sessionStorage.setItem('lendingVaultScrollPosition', scrollContainer.scrollTop.toString())
    }
    
    // 跳转到提案详情页，传递 system_id 和提案 id
    const params = new URLSearchParams()
    if (system_id) {
      params.set('system_id', system_id)
    }
    if (row.id) {
      params.set('proposal_id', row.id)
    } else {
      params.set('proposal_index', index.toString())
    }
    // 保存当前 tab 状态
    params.set('main_tab', 'Project Governance')
    params.set('sub_tab', 'Proposal')
    router.push(`/ProposalDetail?${params.toString()}`)
  }

  return (
    <div className="w-full">
      {/* 表头 */}
      

      {/* 表格数据行 */}
      {data.map((row, index) => (
      <div
          key={index}
          onClick={() => handleRowClick(row, index)}
          className="flex items-center"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
            backgroundColor: '#ffffff',
            borderRadius: px(4),
            paddingTop: px(20),
            paddingBottom: px(20),
            paddingLeft: px(20),
            paddingRight: px(20),
            marginBottom: index < data.length - 1 ? px(rowGap) : 0,
            gap: px(20),
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)'
          }}
        >
          {/* 左侧：图标和提案文本 */}
          <div className="flex items-start" style={{ gap: px(16), flex: '0 0 auto' }}>
            {/* 图标 70x70 */}
            <div
              style={{
                width: px(70),
                height: px(70),
                borderRadius: px(4),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
               <img 
                  src={row.avatar} 
                  alt="avatar" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: px(4) }}
                />
            </div>
            {/* 提案文本 */}
            <div style={{ flex: 1, width: px(420)}}>
              <div style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(20),
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#000000'
              }}>
                {row.subject || 'Proposal to extend the data contribution response cycle and increase the return on data contribution by 20%'}
              </div>
            </div>
          </div>
          
          {/* 中间区域：3个均分的盒子 */}
          <div className="flex items-center" style={{ flex: 1, gap: px(16), paddingLeft: px(125) }}>
            {/* 第一列 */}
            <div className="flex flex-col" style={{ flex: 1, gap: px(8) }}>
              <div
               className="flex items-center justify-center"
               style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}>
                {row.turnout}
              </div>
              <div
               className="flex items-center justify-center" style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#666666'
              }}>
                {row.proposer}
              </div>
            </div>

            {/* 第二列 */}
            <div className="flex flex-col" style={{ flex: 1, gap: px(8) }}>
              <div
                className="flex items-center justify-center"
               style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#666666'
              }}>
                {row.timing}
              </div>
              <div
                className="flex items-center justify-center" style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#666666'
              }}>
                {row.type}
              </div>
            </div>

            {/* 第三列 */}
            <div className="flex flex-col items-center justify-center" style={{ flex: 1, gap: px(8) }}>
              <div 
                className="flex items-center justify-center"
                style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: row.status === 'Approved' ? '#52C41A' : row.status === 'Failled' ? '#FF4D4F' : '#083FD8'
              }}>
                {row.status}
              </div>
              <div 
                className="flex items-center justify-center"
                style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(22),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#666666'
              }}>
                YAE {row.yae} / NAY {row.nay}
              </div>
            </div>
          </div>

          

        </div>
      ))}
    </div>
  )
}

